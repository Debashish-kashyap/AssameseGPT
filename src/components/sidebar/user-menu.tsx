"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Settings, User, Trash2, LogOut, ChevronUp, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/auth-store";
import { useChatStore } from "@/store/chat-store";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function UserMenu() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const clearAllConversations = useChatStore((state) => state.clearAllConversations);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full border-t border-sidebar-border pt-2" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 rounded-xl hover:bg-sidebar-accent/70 transition-colors text-left group select-none"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <Avatar
            src={user?.avatarUrl}
            fallback={user?.name ? user.name.slice(0, 2).toUpperCase() : "AG"}
            size="sm"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold truncate text-sidebar-foreground">
                {user?.name || "Guest User"}
              </span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-[9px] font-medium border border-emerald-500/20">
                <Sparkles className="w-2.5 h-2.5" />
                {user?.plan || "Free"}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground truncate">
              {user?.email || "guest@assamesegpt.ai"}
            </p>
          </div>
        </div>
        <ChevronUp
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-2 right-2 z-40 rounded-xl border border-border bg-popover p-1.5 shadow-xl text-xs animate-fade-in">
          <div className="px-2.5 py-2 border-b border-border mb-1 flex items-center justify-between">
            <span className="font-semibold text-foreground">Theme</span>
            <ThemeToggle />
          </div>

          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-foreground hover:bg-accent transition-colors"
          >
            <User className="w-4 h-4 text-muted-foreground" />
            <span>মোৰ প্ৰফাইল (My Profile)</span>
          </Link>

          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-foreground hover:bg-accent transition-colors"
          >
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span>ছেটিংছ (Settings)</span>
          </Link>

          <div className="my-1 border-t border-border" />

          <button
            onClick={() => {
              if (window.confirm("বাৰ্তালাপৰ সকলো তথ্য মচি পেলাব বিচাৰে নেকি? (Clear all chat history?)")) {
                clearAllConversations();
                setIsOpen(false);
              }
            }}
            className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors text-left"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear conversations</span>
          </button>

          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-foreground hover:bg-accent transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Log in</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
