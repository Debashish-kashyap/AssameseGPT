"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bot, User, ArrowRight, Sparkles, Terminal, Copy, Check } from "lucide-react";
import { CodeBlock } from "@/components/markdown/code-block";

export function DemoPreview() {
  const [activeTab, setActiveTab] = useState<"assamese" | "code" | "multilingual">("assamese");

  return (
    <div className="max-w-4xl mx-auto px-4 my-12 select-none">
      {/* Container Frame */}
      <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        {/* Browser / App Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-muted-foreground">
              app.assamesegpt.ai/chat
            </span>
          </div>

          <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("assamese")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "assamese"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              অসমীয়া সাহিত্য
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "code"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Python Code
            </button>
            <button
              onClick={() => setActiveTab("multilingual")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "multilingual"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Multilingual
            </button>
          </div>
        </div>

        {/* Chat Simulated View */}
        <div className="p-6 space-y-6 text-sm">
          {activeTab === "assamese" && (
            <>
              {/* User message */}
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-xs bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2.5 max-w-[80%]">
                  ৰঙালী বিহুৰ ঐতিহ্য আৰু হুঁচৰি সম্পৰ্কে কওক।
                </div>
              </div>

              {/* Assistant message */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="space-y-3 flex-1 text-foreground/90">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">AssameseGPT 74M</span>
                    <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono">
                      Native Model
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    <strong>ৰঙালী বিহু</strong> অসমৰ প্ৰাণৰ উৎসৱ। ব’হাগৰ আগমনৰ লগে লগে প্ৰকৃতি যেনেদৰে নতুন সাজেৰে সজ্জিত হয়, ঠিক তেনেদৰে অসমীয়া জনজীৱনো আনন্দ আৰু উল্লাসেৰে উপচি পৰে।
                  </p>
                  <blockquote className="border-l-2 border-emerald-500 pl-3 italic text-muted-foreground text-xs">
                    "বিহুটি আদৰি আনোগৈ ঔ ফুলিছে কপৌ ফুল..."
                  </blockquote>
                  <p className="leading-relaxed">
                    হুঁচৰি হৈছে বিহুৰ অন্যতম মুখ্য আকৰ্ষণ, য’ত গাঁৱৰ জ্যেষ্ঠ আৰু ডেকা সকলে ঘৰে ঘৰে গৈ গৃহস্থক আশীৰ্বাদ দিয়ে।
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "code" && (
            <>
              {/* User message */}
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-xs bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2.5 max-w-[80%]">
                  Write an Assamese sentiment analyzer token processor in Python.
                </div>
              </div>

              {/* Assistant message */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">AssameseGPT 74M</span>
                  </div>
                  <CodeBlock
                    language="python"
                    value={`def tokenize_assamese(text: str) -> list[str]:
    # Handles Assamese Bengali-Assamese Unicode range (U+0980 - U+09FF)
    import re
    tokens = re.findall(r'[\\u0980-\\u09FF]+|[A-Za-z0-9]+', text)
    return tokens

# Example
sample = "অসমীয়া ভাষা অত্যন্ত সমৃদ্ধ আৰু বৈচিত্ৰ্যময়।"
print(tokenize_assamese(sample))
# Output: ['অসমীয়া', 'ভাষা', 'অত্যন্ত', 'সমৃদ্ধ', 'আৰু', 'বৈচিত্ৰ্যময়']`}
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === "multilingual" && (
            <>
              {/* User message */}
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-xs bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2.5 max-w-[80%]">
                  Can you switch seamlessly between Assamese and English?
                </div>
              </div>

              {/* Assistant message */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="space-y-2 flex-1 text-foreground/90">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground">AssameseGPT 74M</span>
                  </div>
                  <p className="leading-relaxed">
                    Yes, absolutely! <strong>নিশ্চয়কৈ পাৰোঁ।</strong> You can ask a question in English and request the explanation in Assamese, or vice-versa.
                  </p>
                  <p className="leading-relaxed">
                    আমাৰ লক্ষ্য হৈছে অসমৰ ছাত্ৰ-ছাত্ৰী, গৱেষক আৰু জনসাধাৰণক উন্নত এআই প্ৰযুক্তিৰ সৈতে একাত্ম কৰোৱা।
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom CTA bar inside preview */}
        <div className="p-3 bg-muted/40 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Ready to try AssameseGPT?</span>
          <Link href="/chat" className="font-semibold text-primary hover:underline flex items-center gap-1">
            Open Chat App <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
