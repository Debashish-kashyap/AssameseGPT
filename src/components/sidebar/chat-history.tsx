"use client";

import React from "react";
import { useChatStore } from "@/store/chat-store";
import { ChatItem } from "./chat-item";
import { formatDateGroup } from "@/lib/utils";
import { Conversation } from "@/types/chat";

export function ChatHistory() {
  const conversations = useChatStore((state) => state.conversations);
  const searchQuery = useChatStore((state) => state.searchQuery);

  // Filter conversations
  const filtered = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <div className="px-3 py-8 text-center text-xs text-muted-foreground">
        {searchQuery ? "কোনো বাৰ্তালাপ বিচাৰি পোৱা নগ'ল (No chats found)" : "কোনো পূৰ্বৰ বাৰ্তালাপ নাই"}
      </div>
    );
  }

  // Separate pinned conversations
  const pinned = filtered.filter((c) => c.isPinned);
  const unpinned = filtered.filter((c) => !c.isPinned);

  // Group unpinned by date
  const groups: Record<string, Conversation[]> = {};
  unpinned.forEach((conv) => {
    const groupKey = formatDateGroup(conv.updatedAt || conv.createdAt);
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(conv);
  });

  return (
    <div className="space-y-4 px-1">
      {pinned.length > 0 && (
        <div>
          <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Pinned
          </div>
          <div className="space-y-0.5">
            {pinned.map((conv) => (
              <ChatItem key={conv.id} conversation={conv} />
            ))}
          </div>
        </div>
      )}

      {Object.entries(groups).map(([groupTitle, convList]) => (
        <div key={groupTitle}>
          <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {groupTitle}
          </div>
          <div className="space-y-0.5">
            {convList.map((conv) => (
              <ChatItem key={conv.id} conversation={conv} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
