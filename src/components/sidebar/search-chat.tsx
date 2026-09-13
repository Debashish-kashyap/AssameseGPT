"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { useChatStore } from "@/store/chat-store";

export function SearchChat() {
  const searchQuery = useChatStore((state) => state.searchQuery);
  const setSearchQuery = useChatStore((state) => state.setSearchQuery);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search conversations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-8 pl-8 pr-7 text-xs rounded-md bg-muted/50 border border-transparent hover:border-sidebar-border focus:border-sidebar-border focus:bg-background focus:outline-none transition-all placeholder:text-muted-foreground/70"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
