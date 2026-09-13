import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Conversation, Message } from "@/types/chat";
import { INITIAL_CONVERSATIONS, INITIAL_MESSAGES } from "@/data/mock-chats";
import { streamAiResponse } from "@/services/mock-ai-service";
import { generateId } from "@/lib/utils";
import { DEFAULT_MODEL_ID } from "@/constants/models";

interface ChatState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  activeConversationId: string | null;
  isStreaming: boolean;
  activeStreamCancel: (() => void) | null;
  searchQuery: string;
  isSidebarOpen: boolean;

  // Actions
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveConversation: (id: string | null) => void;
  createConversation: (title?: string, modelId?: string) => string;
  renameConversation: (id: string, newTitle: string) => void;
  deleteConversation: (id: string) => void;
  togglePinConversation: (id: string) => void;
  clearAllConversations: () => void;
  sendMessage: (content: string, modelId?: string) => Promise<void>;
  stopStreaming: () => void;
  regenerateLastMessage: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      conversations: INITIAL_CONVERSATIONS,
      messages: INITIAL_MESSAGES,
      activeConversationId: "conv-1",
      isStreaming: false,
      activeStreamCancel: null,
      searchQuery: "",
      isSidebarOpen: true,

      setSearchQuery: (searchQuery) => set({ searchQuery }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),

      setActiveConversation: (id) => {
        const { isStreaming, stopStreaming } = get();
        if (isStreaming) {
          stopStreaming();
        }
        set({ activeConversationId: id });
      },

      createConversation: (title, modelId) => {
        const id = generateId();
        const newConversation: Conversation = {
          id,
          title: title || "নতুন বার্তালাপ (New Chat)",
          createdAt: Date.now(),
          updatedAt: Date.now(),
          modelId: modelId || DEFAULT_MODEL_ID,
          isPinned: false,
        };

        set((state) => ({
          conversations: [newConversation, ...state.conversations],
          messages: {
            ...state.messages,
            [id]: [],
          },
          activeConversationId: id,
        }));

        return id;
      },

      renameConversation: (id, newTitle) => {
        if (!newTitle.trim()) return;
        set((state) => ({
          conversations: state.conversations.map((c) =>
            c.id === id ? { ...c, title: newTitle.trim(), updatedAt: Date.now() } : c
          ),
        }));
      },

      deleteConversation: (id) => {
        const { activeConversationId, conversations, stopStreaming, isStreaming } = get();
        if (isStreaming && activeConversationId === id) {
          stopStreaming();
        }

        const remaining = conversations.filter((c) => c.id !== id);
        const nextActive =
          activeConversationId === id
            ? remaining.length > 0
              ? remaining[0].id
              : null
            : activeConversationId;

        set((state) => {
          const nextMessages = { ...state.messages };
          delete nextMessages[id];
          return {
            conversations: remaining,
            messages: nextMessages,
            activeConversationId: nextActive,
          };
        });
      },

      togglePinConversation: (id) => {
        set((state) => ({
          conversations: state.conversations.map((c) =>
            c.id === id ? { ...c, isPinned: !c.isPinned } : c
          ),
        }));
      },

      clearAllConversations: () => {
        const { isStreaming, stopStreaming } = get();
        if (isStreaming) stopStreaming();
        set({
          conversations: [],
          messages: {},
          activeConversationId: null,
        });
      },

      stopStreaming: () => {
        const { activeStreamCancel, activeConversationId, messages } = get();
        if (activeStreamCancel) {
          activeStreamCancel();
        }

        if (activeConversationId && messages[activeConversationId]) {
          const convMsgs = messages[activeConversationId];
          const lastMsg = convMsgs[convMsgs.length - 1];
          if (lastMsg && lastMsg.role === "assistant" && lastMsg.isStreaming) {
            set((state) => ({
              messages: {
                ...state.messages,
                [activeConversationId]: convMsgs.map((m, idx) =>
                  idx === convMsgs.length - 1 ? { ...m, isStreaming: false } : m
                ),
              },
            }));
          }
        }

        set({ isStreaming: false, activeStreamCancel: null });
      },

      sendMessage: async (content: string, modelId?: string) => {
        if (!content.trim()) return;

        let convId = get().activeConversationId;
        const currentModel = modelId || DEFAULT_MODEL_ID;

        // If no conversation exists or is active, auto-create one
        if (!convId) {
          const titlePreview =
            content.length > 30 ? content.slice(0, 30) + "..." : content;
          convId = get().createConversation(titlePreview, currentModel);
        } else {
          // If conversation has generic title and this is first message, update title
          const currentConv = get().conversations.find((c) => c.id === convId);
          const currentMsgs = get().messages[convId] || [];
          if (
            currentConv &&
            (currentConv.title.includes("নতুন বার্তালাপ") || currentMsgs.length === 0)
          ) {
            const titlePreview =
              content.length > 32 ? content.slice(0, 32) + "..." : content;
            get().renameConversation(convId, titlePreview);
          }
        }

        const userMsgId = generateId();
        const userMessage: Message = {
          id: userMsgId,
          conversationId: convId,
          role: "user",
          content: content.trim(),
          createdAt: Date.now(),
        };

        const assistantMsgId = generateId();
        const assistantMessage: Message = {
          id: assistantMsgId,
          conversationId: convId,
          role: "assistant",
          content: "",
          createdAt: Date.now(),
          isStreaming: true,
          model: currentModel,
        };

        set((state) => ({
          messages: {
            ...state.messages,
            [convId!]: [...(state.messages[convId!] || []), userMessage, assistantMessage],
          },
          isStreaming: true,
        }));

        // Start token streaming simulation
        const stream = streamAiResponse(content, {
          onChunk: (chunk) => {
            set((state) => {
              const msgs = state.messages[convId!] || [];
              const updated = msgs.map((m) =>
                m.id === assistantMsgId ? { ...m, content: m.content + chunk } : m
              );
              return {
                messages: {
                  ...state.messages,
                  [convId!]: updated,
                },
              };
            });
          },
          onComplete: () => {
            set((state) => {
              const msgs = state.messages[convId!] || [];
              const updated = msgs.map((m) =>
                m.id === assistantMsgId ? { ...m, isStreaming: false } : m
              );
              return {
                messages: {
                  ...state.messages,
                  [convId!]: updated,
                },
                isStreaming: false,
                activeStreamCancel: null,
              };
            });
          },
        });

        set({ activeStreamCancel: stream.cancel });
      },

      regenerateLastMessage: () => {
        const { activeConversationId, messages, sendMessage } = get();
        if (!activeConversationId) return;
        const convMsgs = messages[activeConversationId] || [];
        const lastUserMsg = [...convMsgs].reverse().find((m) => m.role === "user");
        if (lastUserMsg) {
          sendMessage(lastUserMsg.content);
        }
      },
    }),
    {
      name: "assamese-gpt-chat-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        conversations: state.conversations,
        messages: state.messages,
        activeConversationId: state.activeConversationId,
      }),
    }
  )
);
