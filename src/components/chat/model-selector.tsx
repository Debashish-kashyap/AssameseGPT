"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Zap, Cpu, Sparkles } from "lucide-react";
import { AVAILABLE_MODELS } from "@/constants/models";
import { useSettingsStore } from "@/store/settings-store";
import { cn } from "@/lib/utils";

export function ModelSelector() {
  const settings = useSettingsStore((state) => state.settings);
  const updateSettings = useSettingsStore((state) => state.updateSettings);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeModel =
    AVAILABLE_MODELS.find((m) => m.id === settings.defaultModelId) ||
    AVAILABLE_MODELS[0];

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

  const getModelIcon = (id: string) => {
    if (id.includes("74m")) return <Cpu className="w-3.5 h-3.5 text-blue-500" />;
    if (id.includes("17m")) return <Zap className="w-3.5 h-3.5 text-amber-500" />;
    return <Sparkles className="w-3.5 h-3.5 text-purple-500" />;
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-muted/70 transition-colors text-sm font-semibold select-none group border border-transparent hover:border-border"
      >
        <span className="flex items-center gap-1.5">
          {getModelIcon(activeModel.id)}
          <span className="text-foreground">{activeModel.name}</span>
        </span>
        {activeModel.badge && (
          <span className="hidden sm:inline-flex px-1.5 py-0.2 rounded text-[10px] font-medium bg-muted text-muted-foreground">
            {activeModel.badge}
          </span>
        )}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-10 z-50 w-72 rounded-2xl border border-border bg-popover p-2 shadow-2xl animate-fade-in">
          <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border mb-1">
            Select Language Model
          </div>
          <div className="space-y-1">
            {AVAILABLE_MODELS.map((model) => {
              const isSelected = model.id === activeModel.id;
              return (
                <button
                  key={model.id}
                  onClick={() => {
                    updateSettings({ defaultModelId: model.id });
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-start gap-3 w-full p-2 rounded-xl text-left transition-colors",
                    isSelected
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted/60 text-foreground"
                  )}
                >
                  <div className="mt-0.5">{getModelIcon(model.id)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">{model.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                      {model.tagline}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground/80">
                      <span>{model.parameters}</span>
                      <span>•</span>
                      <span>{model.contextWindow}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
