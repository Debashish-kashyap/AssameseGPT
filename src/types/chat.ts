export type MessageRole = "user" | "assistant" | "system" | "error";

export interface Message {
  id: string;
  conversationId: string;
  role: MessageRole;
  content: string;
  createdAt: number;
  isStreaming?: boolean;
  model?: string;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  modelId: string;
  isPinned?: boolean;
}

export interface AIModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  contextWindow: string;
  parameters: string;
  isDefault?: boolean;
  badge?: string;
  speed: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  plan: "Free Tier" | "Researcher" | "Enterprise";
  joinedDate: string;
  preferredLanguage: "as" | "en" | "auto";
}

export interface AppSettings {
  theme: "light" | "dark" | "system";
  defaultModelId: string;
  language: "as" | "en" | "auto";
  systemPrompt: string;
  temperature: number;
  streamSpeed: "fast" | "natural" | "slow";
  soundEnabled: boolean;
}
