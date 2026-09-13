"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, MoreHorizontal, Pencil, Trash2, Pin, Check } from "lucide-react";
import { Conversation } from "@/types/chat";
import { useChatStore } from "@/store/chat-store";
import { cn } from "@/lib/utils";

interface ChatItemProps {
  conversation: Conversation;
}

export function ChatItem({ conversation }: ChatItemProps) {
  const activeConversationId = useChatStore((state) => state.activeConversationId);
  const setActiveConversation = useChatStore((state) => state.setActiveConversation);
  const renameConversation = useChatStore((state) => state.renameConversation);
  const deleteConversation = useChatStore((state) => state.deleteConversation);
  const togglePinConversation = useChatStore((state) => state.togglePinConversation);

  const isActive = activeConversationId === conversation.id;
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(conversation.title);
  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleSaveRename = () => {
    if (editTitle.trim()) {
      renameConversation(conversation.id, editTitle.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveRename();
    } else if (e.key === "Escape") {
      setEditTitle(conversation.title);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={cn(
        "group relative flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm transition-all cursor-pointer select-none",
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
      )}
      onClick={() => {
        if (!isEditing) {
          setActiveConversation(conversation.id);
        }
      }}
    >
      <MessageSquare className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />

      {isEditing ? (
        <div className="flex items-center gap-1 flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
          <input
            ref={inputRef}
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSaveRename}
            className="w-full text-xs bg-background border border-border px-1.5 py-0.5 rounded focus:outline-none"
          />
          <button
            onClick={handleSaveRename}
            className="p-1 hover:text-emerald-500 rounded text-muted-foreground"
          >
            <Check className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <span className="truncate flex-1 text-xs">{conversation.title}</span>
      )}

      {conversation.isPinned && !isEditing && (
        <Pin className="w-3 h-3 text-muted-foreground rotate-45 shrink-0" />
      )}

      {/* Action Menu Trigger (Visible on Hover or Active) */}
      {!isEditing && (
        <div className="relative shrink-0" ref={menuRef} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={cn(
              "p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-opacity",
              isActive || showMenu ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
            title="Options"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-6 z-30 w-36 rounded-lg border border-border bg-popover p-1 shadow-lg text-xs animate-fade-in">
              <button
                onClick={() => {
                  togglePinConversation(conversation.id);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 w-full px-2 py-1.5 rounded text-left hover:bg-accent text-foreground"
              >
                <Pin className="w-3.5 h-3.5" />
                <span>{conversation.isPinned ? "Unpin chat" : "Pin chat"}</span>
              </button>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 w-full px-2 py-1.5 rounded text-left hover:bg-accent text-foreground"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Rename</span>
              </button>
              <button
                onClick={() => {
                  deleteConversation(conversation.id);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 w-full px-2 py-1.5 rounded text-left hover:bg-destructive/10 text-destructive"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
