"use client";

import React, { useState } from "react";
import { PanelLeft, Share2, Plus, Sparkles, Check } from "lucide-react";
import { useChatStore } from "@/store/chat-store";
import { ModelSelector } from "./model-selector";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function ChatHeader() {
  const isSidebarOpen = useChatStore((state) => state.isSidebarOpen);
  const toggleSidebar = useChatStore((state) => state.toggleSidebar);
  const createConversation = useChatStore((state) => state.createConversation);
  const activeConversationId = useChatStore((state) => state.activeConversationId);
  const conversations = useChatStore((state) => state.conversations);

  const [copiedLink, setCopiedLink] = useState(false);

  const currentConv = conversations.find((c) => c.id === activeConversationId);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-background/80 backdrop-blur-md border-b border-border select-none">
      <div className="flex items-center gap-2">
        {!isSidebarOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            title="Open sidebar"
          >
            <PanelLeft className="w-4 h-4" />
          </Button>
        )}

        <ModelSelector />
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="hidden sm:inline-flex items-center gap-1.5 h-8 text-xs border-border"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">Copied Link!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Share</span>
            </>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => createConversation()}
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          title="New chat"
        >
          <Plus className="w-4 h-4" />
        </Button>

        <ThemeToggle />
      </div>
    </header>
  );
}
