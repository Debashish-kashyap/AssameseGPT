import React from "react";
import { MessageSquareCode, ShieldCheck, Cpu, Smartphone, Sparkles, Sliders } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <MessageSquareCode className="w-5 h-5 text-indigo-500" />,
      title: "Rich Markdown & Code Syntax",
      description: "Full GFM markdown support, tables, math, quotes, and syntax highlighting across Python, JS, C++, Java, and SQL.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      title: "Scalable Model Architecture",
      description: "Ready on day one to connect to AssameseGPT 17M, 74M, future large models, RAG vector stores, and custom agents.",
    },
    {
      icon: <Sliders className="w-5 h-5 text-purple-500" />,
      title: "Deep Customizability",
      description: "Fine-tune system prompts, model temperatures, response streaming speeds, and theme preferences to match your workflow.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      title: "100% Responsive Experience",
      description: "Pixel-perfect on desktop, tablet, and mobile with dynamic drawer navigation and auto-resizing input areas.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: "Local State & Privacy First",
      description: "Client-side encrypted chat persistence with one-click export, rename, search, and history management.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-rose-500" />,
      title: "Future-Ready (Voice & RAG)",
      description: "Architecture scaffolded for document ingestion (PDF, DOCX, TXT), speech-to-text, and autonomous agent capabilities.",
    },
  ];

  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          Engineered for Performance & Scalability
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          Built following modern software engineering principles with Next.js 15, TypeScript, Tailwind CSS, and Zustand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200"
          >
            <div className="p-2.5 rounded-xl bg-muted w-fit mb-4">
              {feat.icon}
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-2">
              {feat.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
