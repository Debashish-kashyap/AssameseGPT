"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useChatStore } from "@/store/chat-store";
import { Button } from "@/components/ui/button";

export function NewChatButton() {
  const createConversation = useChatStore((state) => state.createConversation);

  return (
    <Button
      onClick={() => createConversation()}
      variant="outline"
      className="w-full justify-between h-10 px-3 bg-background/50 hover:bg-accent border-sidebar-border text-sidebar-foreground shadow-none font-medium group transition-all"
    >
      <span className="flex items-center gap-2">
        <Plus className="w-4 h-4 text-primary group-hover:rotate-90 transition-transform duration-200" />
        <span>নতুন বাৰ্তালাপ (New chat)</span>
      </span>
      <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
