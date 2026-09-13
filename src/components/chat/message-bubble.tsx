"use client";

import React, { useState } from "react";
import { Bot, User, Copy, Check, RotateCcw, Sparkles } from "lucide-react";
import { Message } from "@/types/chat";
import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { useChatStore } from "@/store/chat-store";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
  isLast?: boolean;
}

export function MessageBubble({ message, isLast }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);
  const regenerateLastMessage = useChatStore((state) => state.regenerateLastMessage);
  const isStreaming = useChatStore((state) => state.isStreaming);

  const isUser = message.role === "user";

  const handleCopy = async () => {
    if (!message.content) return;
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isUser) {
    return (
      <div className="flex justify-end my-4 animate-fade-in">
        <div className="flex items-start gap-2.5 max-w-[85%] sm:max-w-[75%] flex-row-reverse">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-muted border border-border text-foreground shrink-0 select-none">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="rounded-2xl rounded-tr-xs bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2.5 text-[15px] leading-relaxed shadow-xs">
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3.5 my-5 animate-fade-in group">
      {/* Avatar */}
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shrink-0 shadow-sm mt-0.5 select-none">
        <Bot className="w-4 h-4" />
      </div>

      {/* Message Body */}
      <div className="flex-1 min-w-0">
        {/* Model Tag */}
        <div className="flex items-center gap-2 mb-1.5 select-none">
          <span className="text-xs font-semibold text-foreground">AssameseGPT</span>
          {message.model && (
            <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.2 rounded font-mono">
              {message.model}
            </span>
          )}
        </div>

        {/* Content Render */}
        <div className="text-foreground">
          {message.content ? (
            <MarkdownRenderer
              content={message.content}
              isStreaming={message.isStreaming}
            />
          ) : message.isStreaming ? (
            <div className="flex items-center gap-1.5 py-1 text-xs text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-primary" />
              <span>উত্তৰ সৃষ্টি কৰি থকা হৈছে... (Generating response...)</span>
            </div>
          ) : (
            <span className="text-muted-foreground italic text-sm">No response generated.</span>
          )}
        </div>

        {/* Action Bar below completed Assistant message */}
        {!message.isStreaming && message.content && (
          <div className="flex items-center gap-1 mt-2 text-muted-foreground opacity-80 group-hover:opacity-100 transition-opacity select-none">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-xs hover:text-foreground hover:bg-muted transition-colors"
              title="Copy response"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {isLast && !isStreaming && (
              <button
                onClick={regenerateLastMessage}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-xs hover:text-foreground hover:bg-muted transition-colors"
                title="Regenerate response"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>পুনৰ চেষ্টা কৰক (Retry)</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
