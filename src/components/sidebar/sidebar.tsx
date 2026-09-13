"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Sparkles, PanelLeftClose, Bot } from "lucide-react";
import { useChatStore } from "@/store/chat-store";
import { NewChatButton } from "./new-chat-button";
import { SearchChat } from "./search-chat";
import { ChatHistory } from "./chat-history";
import { UserMenu } from "./user-menu";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const isSidebarOpen = useChatStore((state) => state.isSidebarOpen);
  const toggleSidebar = useChatStore((state) => state.toggleSidebar);
  const setSidebarOpen = useChatStore((state) => state.setSidebarOpen);

  // Global Cmd+K / Ctrl+K keyboard shortcut for new chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        useChatStore.getState().createConversation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close sidebar automatically on narrow screens initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden animate-fade-in"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Panel */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 flex flex-col w-[280px] bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out select-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:-ml-[280px]"
        )}
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between px-3.5 py-3 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm group-hover:scale-105 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-sidebar-foreground">
                  AssameseGPT
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-primary/10 text-primary uppercase">
                  v1.0
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground">অসমীয়া এআই এজেণ্ট</p>
            </div>
          </Link>

          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            title="Collapse sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Top Controls: New Chat & Search */}
        <div className="p-3 space-y-2.5">
          <NewChatButton />
          <SearchChat />
        </div>

        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto px-2 py-1">
          <ChatHistory />
        </div>

        {/* User Profile & Menu */}
        <div className="p-2">
          <UserMenu />
        </div>
      </aside>
    </>
  );
}
