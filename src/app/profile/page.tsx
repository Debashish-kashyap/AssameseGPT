"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, Mail, Calendar, Sparkles, MessageSquare, Bot, Save, Check } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { useChatStore } from "@/store/chat-store";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.updateProfile);
  const conversations = useChatStore((state) => state.conversations);
  const messages = useChatStore((state) => state.messages);

  const [name, setName] = useState(user?.name || "দেবাশীষ কাশ্যপ");
  const [preferredLang, setPreferredLang] = useState(user?.preferredLanguage || "as");
  const [saved, setSaved] = useState(false);

  // Calculate quick statistics
  const totalConversations = conversations.length;
  const totalMessages = Object.values(messages).reduce((acc, curr) => acc + curr.length, 0);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, preferredLanguage: preferredLang });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 select-none">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header navigation */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <Link
              href="/chat"
              className="p-2 rounded-xl border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                মোৰ প্ৰফাইল (User Profile)
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Manage your account credentials, tier status, and usage metrics.
              </p>
            </div>
          </div>

          <ThemeToggle />
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Avatar
              src={user?.avatarUrl}
              fallback={name.slice(0, 2).toUpperCase()}
              size="lg"
              className="ring-4 ring-muted"
            />
            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h2 className="text-xl font-bold text-foreground">{name}</h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs font-semibold border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" />
                  {user?.plan || "Researcher Tier"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{user?.email || "debashish@assamesegpt.ai"}</p>
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Joined {user?.joinedDate || "2026"}
                </span>
                <span>•</span>
                <span className="text-emerald-500 font-medium">Active Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between text-muted-foreground mb-2">
              <span className="text-xs font-medium">Total Chats</span>
              <MessageSquare className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">{totalConversations}</div>
            <p className="text-[11px] text-muted-foreground mt-1">Stored in browser</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between text-muted-foreground mb-2">
              <span className="text-xs font-medium">Messages Exchanged</span>
              <Bot className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">{totalMessages}</div>
            <p className="text-[11px] text-muted-foreground mt-1">Across all models</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between text-muted-foreground mb-2">
              <span className="text-xs font-medium">Model Access</span>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-foreground">Full (74M)</div>
            <p className="text-[11px] text-muted-foreground mt-1">No quota limit</p>
          </div>
        </div>

        {/* Edit Details Form */}
        <form onSubmit={handleSave} className="rounded-2xl border border-border bg-card p-6 space-y-5 text-sm">
          <div className="text-sm font-semibold text-foreground border-b border-border pb-3">
            Account Preferences
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-10 px-3 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-neutral-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              disabled
              value={user?.email || "debashish@assamesegpt.ai"}
              className="w-full h-10 px-3 rounded-xl border border-border bg-muted/20 text-muted-foreground text-sm cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground mb-1.5">
              Preferred Language
            </label>
            <select
              value={preferredLang}
              onChange={(e) => setPreferredLang(e.target.value as any)}
              className="w-full h-10 px-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:border-neutral-400"
            >
              <option value="as">অসমীয়া (Assamese)</option>
              <option value="en">English</option>
              <option value="auto">Auto-Detect</option>
            </select>
          </div>

          <div className="flex justify-end pt-3">
            <Button type="submit" size="sm" className="gap-1.5 font-semibold">
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
