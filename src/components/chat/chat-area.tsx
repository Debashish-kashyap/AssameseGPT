"use client";

import React from "react";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";

export function ChatArea() {
  return (
    <main className="relative flex flex-col flex-1 h-screen overflow-hidden bg-background">
      {/* Top Navigation / Model bar */}
      <ChatHeader />

      {/* Main Message Stream */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <MessageList />
      </div>

      {/* Sticky Bottom Input Bar */}
      <ChatInput />
    </main>
  );
}
