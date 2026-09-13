import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserProfile } from "@/types/chat";

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const DEFAULT_USER: UserProfile = {
  id: "user-1",
  name: "দেবাশীষ কাশ্যপ (Debashish)",
  email: "debashish@assamesegpt.ai",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  plan: "Researcher",
  joinedDate: "2026",
  preferredLanguage: "as",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: DEFAULT_USER,
      isAuthenticated: true,
      login: (email: string, name?: string) =>
        set({
          isAuthenticated: true,
          user: {
            id: "user-" + Date.now(),
            name: name || email.split("@")[0],
            email,
            avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            plan: "Free Tier",
            joinedDate: "2026",
            preferredLanguage: "as",
          },
        }),
      logout: () => set({ isAuthenticated: false, user: null }),
      updateProfile: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: "assamese-gpt-auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
