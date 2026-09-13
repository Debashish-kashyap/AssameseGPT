"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bot, ArrowRight, Lock, Mail, User } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, name);
    router.push("/chat");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground select-none">
      <div className="w-full max-w-sm space-y-6">
        {/* Brand */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md">
              <Bot className="w-6 h-6" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Create an Account
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Get started with AssameseGPT and experience native North East AI.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  placeholder="e.g. দেৱজিৎ বৰুৱা"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-neutral-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-neutral-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-neutral-400"
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-10 rounded-xl font-semibold gap-1.5 mt-2">
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
