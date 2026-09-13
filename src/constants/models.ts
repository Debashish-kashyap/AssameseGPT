import { AIModel } from "@/types/chat";

export const AVAILABLE_MODELS: AIModel[] = [
  {
    id: "assamese-gpt-74m",
    name: "AssameseGPT 74M",
    tagline: "Flagship Native Model",
    description: "Deepest comprehension of Assamese grammar, nuances, literature, and general knowledge.",
    parameters: "74M Parameters",
    contextWindow: "4,096 Tokens",
    isDefault: true,
    badge: "Recommended",
    speed: "Very Fast",
  },
  {
    id: "assamese-gpt-17m",
    name: "AssameseGPT 17M",
    tagline: "Ultra Lightweight & Fast",
    description: "Lightning-fast inference optimized for low-latency dialogue and device efficiency.",
    parameters: "17M Parameters",
    contextWindow: "2,048 Tokens",
    badge: "Fastest",
    speed: "Instantaneous",
  },
  {
    id: "assamese-gpt-enterprise",
    name: "AssameseGPT Research v2",
    tagline: "Multilingual & Code Experimental",
    description: "Fine-tuned on high-quality Assamese, Bengali, and English multilingual parallel corpora.",
    parameters: "125M Parameters",
    contextWindow: "8,192 Tokens",
    badge: "Experimental",
    speed: "Fast",
  },
];

export const DEFAULT_MODEL_ID = "assamese-gpt-74m";
