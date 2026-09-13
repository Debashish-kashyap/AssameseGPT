"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, RotateCcw, Check, Sparkles, Cpu, Sliders, Shield, Bot } from "lucide-react";
import { useSettingsStore } from "@/store/settings-store";
import { useChatStore } from "@/store/chat-store";
import { AVAILABLE_MODELS } from "@/constants/models";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function SettingsPage() {
  const { settings, updateSettings, resetSettings } = useSettingsStore();
  const clearAllConversations = useChatStore((state) => state.clearAllConversations);

  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({ ...settings });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Restore default configuration?")) {
      resetSettings();
      setFormData({ ...settings });
    }
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
                ছেটিংছ (Settings)
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Configure your model parameters, language preferences, and chat behavior.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSave} className="space-y-6 text-sm">
          {/* Default Model */}
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Cpu className="w-4 h-4 text-blue-500" />
              <span>Default AI Model</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Select which custom Assamese language model to initialize new conversations with.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {AVAILABLE_MODELS.map((model) => {
                const isSelected = formData.defaultModelId === model.id;
                return (
                  <button
                    type="button"
                    key={model.id}
                    onClick={() => setFormData({ ...formData, defaultModelId: model.id })}
                    className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? "border-primary bg-accent/60 shadow-xs"
                        : "border-border bg-card/60 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-foreground">
                        {model.name}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                    </div>
                    <span className="text-[11px] text-muted-foreground line-clamp-2">
                      {model.tagline}
                    </span>
                    <div className="mt-3 pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono">
                      {model.parameters}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Model Parameters: Temperature & Speed */}
          <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Sliders className="w-4 h-4 text-purple-500" />
              <span>Inference Parameters</span>
            </div>

            {/* Temperature Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-medium text-foreground">
                  Temperature: <span className="font-mono text-primary">{formData.temperature}</span>
                </span>
                <span className="text-muted-foreground">
                  {formData.temperature < 0.4
                    ? "Precise & Deterministic"
                    : formData.temperature > 0.8
                    ? "Creative & Divergent"
                    : "Balanced"}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={formData.temperature}
                onChange={(e) =>
                  setFormData({ ...formData, temperature: parseFloat(e.target.value) })
                }
                className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Stream Speed */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-foreground mb-2">
                Token Streaming Velocity
              </label>
              <div className="flex gap-2">
                {(["fast", "natural", "slow"] as const).map((speed) => (
                  <button
                    type="button"
                    key={speed}
                    onClick={() => setFormData({ ...formData, streamSpeed: speed })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize border transition-all ${
                      formData.streamSpeed === speed
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-muted/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* System Instructions / Persona */}
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Bot className="w-4 h-4 text-emerald-500" />
              <span>System Prompt (মডেলৰ নীতি-নিৰ্দেশনা)</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Define the default persona, tone, and cultural guidelines for AssameseGPT.
            </p>
            <textarea
              rows={4}
              value={formData.systemPrompt}
              onChange={(e) => setFormData({ ...formData, systemPrompt: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted/30 p-3 text-xs leading-relaxed focus:outline-none focus:border-neutral-400 font-sans"
            />
          </div>

          {/* Danger Zone */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 space-y-3">
            <div className="flex items-center gap-2 text-destructive font-semibold text-sm">
              <Shield className="w-4 h-4" />
              <span>Data Management (বিপজ্জনক অঞ্চল)</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Permanently delete all stored conversations and cached messages from your local browser.
            </p>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete all chat history?")) {
                  clearAllConversations();
                  alert("Chat history cleared!");
                }
              }}
              className="text-xs font-semibold"
            >
              Clear All Chat History
            </Button>
          </div>

          {/* Bottom Save Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restore Defaults</span>
            </Button>

            <Button type="submit" size="sm" className="gap-1.5 font-semibold">
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Saved Changes!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Configuration</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
