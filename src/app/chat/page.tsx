"use client";

import React from "react";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ChatArea } from "@/components/chat/chat-area";

export default function ChatPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* 280px ChatGPT-style Sidebar */}
      <Sidebar />

      {/* Main Chat Interface */}
      <ChatArea />
    </div>
  );
}
