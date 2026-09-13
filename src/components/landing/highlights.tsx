import React from "react";
import { Globe2, Zap, Heart, Languages } from "lucide-react";

export function Highlights() {
  const highlights = [
    {
      icon: <Languages className="w-5 h-5 text-emerald-500" />,
      title: "Assamese Native",
      description: "Trained and optimized specifically on high-quality Assamese text, grammar, and literature.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-500" />,
      title: "Multilingual",
      description: "Effortlessly responds across Assamese, English, and transliterated vernacular expressions.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Fast Responses",
      description: "Low-latency inference architecture delivering immediate token-streaming conversational speed.",
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: "Built in Assam",
      description: "Proudly created by researchers and developers dedicated to advancing North East AI infrastructure.",
    },
  ];

  return (
    <section className="py-16 border-y border-border bg-muted/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-border bg-card/70 hover:bg-card transition-all duration-200 shadow-xs"
            >
              <div className="p-2.5 rounded-xl bg-muted w-fit mb-3.5">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground text-base mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
