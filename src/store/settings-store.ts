import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AppSettings } from "@/types/chat";
import { DEFAULT_MODEL_ID } from "@/constants/models";

interface SettingsState {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: AppSettings = {
  theme: "dark",
  defaultModelId: DEFAULT_MODEL_ID,
  language: "as",
  systemPrompt:
    "You are AssameseGPT, a helpful, precise, culturally grounded and respectful AI assistant specializing in Assamese language, history, culture, as well as programming and general knowledge.",
  temperature: 0.7,
  streamSpeed: "natural",
  soundEnabled: true,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: DEFAULT_SETTINGS }),
    }),
    {
      name: "assamese-gpt-settings-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
