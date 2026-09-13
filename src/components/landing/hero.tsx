"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-center select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-purple-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Next-Generation Assamese Language Models</span>
          <span className="text-border">|</span>
          <span className="text-foreground font-semibold">AssameseGPT 74M & 17M</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          Assamese AI. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
            Built From Scratch.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Chat with a language model built specifically for Assamese while supporting multilingual conversations, rich code syntax, and cultural context.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/chat">
            <Button size="lg" className="h-12 px-8 rounded-xl gap-2 text-base font-semibold shadow-xl shadow-primary/10">
              <Bot className="w-5 h-5" />
              <span>Start Chatting</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <Link href="/chat">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-xl gap-2 text-base border-border hover:bg-muted/70"
            >
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span>Explore 74M Model</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
