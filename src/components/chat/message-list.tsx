"use client";

import React, { useEffect, useRef } from "react";
import { useChatStore } from "@/store/chat-store";
import { MessageBubble } from "./message-bubble";
import { WelcomeScreen } from "./welcome-screen";

export function MessageList() {
  const activeConversationId = useChatStore((state) => state.activeConversationId);
  const messages = useChatStore((state) => state.messages);
  const isStreaming = useChatStore((state) => state.isStreaming);

  const bottomRef = useRef<HTMLDivElement>(null);

  const currentMessages = activeConversationId
    ? messages[activeConversationId] || []
    : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: isStreaming ? "auto" : "smooth" });
  }, [currentMessages, isStreaming]);

  if (currentMessages.length === 0) {
    return <WelcomeScreen />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 w-full">
      {currentMessages.map((msg, index) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          isLast={index === currentMessages.length - 1}
        />
      ))}
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}
