"use client";

import React from "react";
import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <span className="font-bold text-sm tracking-tight text-foreground">
            AssameseGPT
          </span>
          <span className="hidden sm:inline-flex px-1.5 py-0.2 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono">
            Native AI
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Features
          </Link>
          <Link
            href="/settings"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Models
          </Link>
          <ThemeToggle />
          <Link href="/chat">
            <Button size="sm" className="h-8 gap-1.5 px-3 rounded-lg text-xs font-semibold">
              <span>Launch App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
