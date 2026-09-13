"use client";

import React from "react";
import { Bot, Sparkles, BookOpen, Code2, Languages, ArrowRight } from "lucide-react";
import { STARTER_PROMPTS, StarterPrompt } from "@/constants/prompts";
import { useChatStore } from "@/store/chat-store";

export function WelcomeScreen() {
  const sendMessage = useChatStore((state) => state.sendMessage);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-emerald-500" />;
      case "Languages":
        return <Languages className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-2xl mx-auto px-4 text-center select-none animate-fade-in">
      {/* Icon Badge */}
      <div className="relative mb-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xl ring-8 ring-muted/50">
          <Bot className="w-7 h-7" />
        </div>
        <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-background">
          <Sparkles className="w-2.5 h-2.5 text-white" />
        </div>
      </div>

      {/* Main Greeting */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
        নমস্কাৰ! মই আপোনাক কিদৰে সহায় কৰিব পাৰোঁ?
      </h1>
      <p className="text-sm text-muted-foreground max-w-md mb-8">
        AssameseGPT is optimized for native Assamese comprehension, multilingual reasoning, and coding assistance.
      </p>

      {/* Starter Prompt Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
        {STARTER_PROMPTS.map((item: StarterPrompt) => (
          <button
            key={item.id}
            onClick={() => sendMessage(item.prompt)}
            className="group relative flex flex-col justify-between p-3.5 rounded-xl border border-border bg-card/60 hover:bg-muted/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 active:scale-[0.99] text-left shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-muted inline-flex items-center">
                  {getIcon(item.iconName)}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                {item.subtitle}
              </p>
            </div>

            <div className="flex items-center justify-end mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[11px] font-medium text-primary flex items-center gap-1">
                প্ৰশ্ন কৰক <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
