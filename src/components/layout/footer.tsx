import React from "react";
import Link from "next/link";
import { Bot, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 text-xs text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-foreground">AssameseGPT</span>
          <span>© 2026. Built by Debashish Kashyap.</span>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Assam and the World.</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/chat" className="hover:text-foreground transition-colors">
            Chat Interface
          </Link>
          <Link href="/settings" className="hover:text-foreground transition-colors">
            Settings
          </Link>
          <Link href="/profile" className="hover:text-foreground transition-colors">
            Profile
          </Link>
        </div>
      </div>
    </footer>
  );
}
