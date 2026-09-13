"use client";

import React from "react";
import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 py-3 animate-fade-in">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shrink-0 shadow-sm">
        <Bot className="w-4 h-4 animate-pulse" />
      </div>

      <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-muted/50 border border-border/40">
        <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce" />
      </div>
    </div>
  );
}
