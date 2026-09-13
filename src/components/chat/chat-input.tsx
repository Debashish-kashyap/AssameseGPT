"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, Square, Paperclip, Mic, Globe } from "lucide-react";
import { useChatStore } from "@/store/chat-store";
import { useSettingsStore } from "@/store/settings-store";
import { AVAILABLE_MODELS } from "@/constants/models";
import { cn } from "@/lib/utils";

export function ChatInput() {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = useChatStore((state) => state.sendMessage);
  const isStreaming = useChatStore((state) => state.isStreaming);
  const stopStreaming = useChatStore((state) => state.stopStreaming);
  const settings = useSettingsStore((state) => state.settings);

  const activeModel =
    AVAILABLE_MODELS.find((m) => m.id === settings.defaultModelId) ||
    AVAILABLE_MODELS[0];

  // Auto resize textarea up to 200px max
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isStreaming) return;

    sendMessage(input, activeModel.id);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="sticky bottom-0 z-20 w-full bg-gradient-to-t from-background via-background/95 to-transparent pt-4 pb-3 px-4">
      <div className="max-w-3xl mx-auto w-full">
        {/* Chat Input Container */}
        <div className="relative rounded-2xl border border-border bg-card shadow-lg focus-within:border-neutral-400 dark:focus-within:border-neutral-600 transition-all">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="অসমীয়া বা ইংৰাজীত প্ৰশ্ন সোধক... (Ask in Assamese or English)"
            className="w-full resize-none bg-transparent px-4 pt-3.5 pb-12 text-[15px] placeholder:text-muted-foreground focus:outline-none max-h-[200px] overflow-y-auto leading-relaxed"
          />

          {/* Bottom Action Strip inside the Input box */}
          <div className="absolute bottom-2.5 left-3 right-2.5 flex items-center justify-between select-none">
            {/* Left Controls: Attachments, Voice, Model Pill */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <button
                type="button"
                className="p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-colors"
                title="Attach document or image (Coming in Phase 2)"
                onClick={() => alert("নথি সংলগ্নকৰণ সুবিধা শীঘ্ৰেই উপলব্ধ হ'ব! (File upload coming soon)")}
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="button"
                className="p-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-colors"
                title="Voice input (Coming in Phase 3)"
                onClick={() => alert("কণ্ঠস্বৰ ইনপুট সুবিধা পৰৱৰ্তী সংস্কৰণত উপলব্ধ হ'ব! (Voice mode coming soon)")}
              >
                <Mic className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted/60 text-[11px] font-medium text-muted-foreground">
                <Globe className="w-3 h-3 text-emerald-500" />
                <span>{activeModel.name}</span>
              </div>
            </div>

            {/* Right Control: Send / Stop Button */}
            <div>
              {isStreaming ? (
                <button
                  type="button"
                  onClick={stopStreaming}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 active:scale-95 transition-all shadow-sm"
                  title="Stop generating"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  disabled={!input.trim()}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-all shadow-sm",
                    input.trim()
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 active:scale-95 cursor-pointer"
                      : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                  )}
                  title="Send message (Enter)"
                >
                  <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <p className="mt-2 text-center text-[11px] text-muted-foreground/80 select-none">
          AssameseGPT can make mistakes. Verify important linguistic and cultural details.
        </p>
      </div>
    </div>
  );
}
