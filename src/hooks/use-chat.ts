"use client";

import { useChatStore } from "@/store/chat-store";

export function useChat() {
  const activeConversationId = useChatStore((state) => state.activeConversationId);
  const conversations = useChatStore((state) => state.conversations);
  const messages = useChatStore((state) => state.messages);
  const isStreaming = useChatStore((state) => state.isStreaming);
  const sendMessage = useChatStore((state) => state.sendMessage);
  const stopStreaming = useChatStore((state) => state.stopStreaming);
  const createConversation = useChatStore((state) => state.createConversation);
  const setActiveConversation = useChatStore((state) => state.setActiveConversation);

  const currentMessages = activeConversationId
    ? messages[activeConversationId] || []
    : [];

  const currentConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  return {
    activeConversationId,
    currentConversation,
    conversations,
    currentMessages,
    isStreaming,
    sendMessage,
    stopStreaming,
    createConversation,
    setActiveConversation,
  };
}
