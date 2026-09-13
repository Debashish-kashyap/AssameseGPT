# AssameseGPT — Frontend Implementation Tasks

A comprehensive task breakdown for **AssameseGPT**, tracking the implementation milestones of **Phase 1 (MVP)**, **Phase 2 (Real Backend & Persistence)**, and **Phase 3 (Multimodal & Advanced Features)**.

---

## 📊 Milestone Overview

| Phase | Milestone Description | Tasks | Progress |
| :--- | :--- | :--- | :---: |
| **Phase 1** | **Production-Grade Frontend UI & Mock AI Streaming** | Tasks 1 – 15 | **100% Done (15/15)** ✅ |
| **Phase 2** | **Real Backend, Database & Server-Sent Events (SSE)** | Tasks 16 – 20 | **Ready for Execution** ⏳ |
| **Phase 3** | **Multimodal, Voice Engine & Autonomous Agents** | Tasks 21 – 24 | **Architected** 🔮 |

---

## 🚀 Phase 1: Core MVP & Frontend UI (Completed)

### Task 1: Setup Next.js 15 & Dependencies
- **Objective**: Bootstrap a Next.js 15 App Router project with TypeScript, Tailwind CSS, Lucide icons, and state libraries.
- **Files Created**:
  - [`package.json`](file:///d:/AssameseLMAgent/package.json)
  - [`tsconfig.json`](file:///d:/AssameseLMAgent/tsconfig.json)
  - [`next.config.mjs`](file:///d:/AssameseLMAgent/next.config.mjs)
  - [`postcss.config.mjs`](file:///d:/AssameseLMAgent/postcss.config.mjs)
  - [`.gitignore`](file:///d:/AssameseLMAgent/.gitignore)
- **Status**: ✅ Completed
- **Acceptance**: Clean dependency graph, zero build warnings on `npm run build`.

---

### Task 2: Setup Design System & Theme Engine
- **Objective**: Configure HSL color variables, dark/light mode tokens, custom scrollbars, and Assamese typography.
- **Files Created**:
  - [`src/app/globals.css`](file:///d:/AssameseLMAgent/src/app/globals.css)
  - [`tailwind.config.ts`](file:///d:/AssameseLMAgent/tailwind.config.ts)
  - [`src/components/layout/providers.tsx`](file:///d:/AssameseLMAgent/src/components/layout/providers.tsx)
  - [`src/components/layout/theme-toggle.tsx`](file:///d:/AssameseLMAgent/src/components/layout/theme-toggle.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Instant toggling between dark, light, and system themes without hydration mismatch.

---

### Task 3: State Management Layer (Zustand & LocalStorage)
- **Objective**: Build reactive client stores for conversations, user preferences, and authentication sessions.
- **Files Created**:
  - [`src/store/chat-store.ts`](file:///d:/AssameseLMAgent/src/store/chat-store.ts)
  - [`src/store/settings-store.ts`](file:///d:/AssameseLMAgent/src/store/settings-store.ts)
  - [`src/store/auth-store.ts`](file:///d:/AssameseLMAgent/src/store/auth-store.ts)
  - [`src/types/chat.ts`](file:///d:/AssameseLMAgent/src/types/chat.ts)
- **Status**: ✅ Completed
- **Acceptance**: Conversations and messages persist across browser reloads via `localStorage`.

---

### Task 4: Build Mock AI Token Streaming Service
- **Objective**: Simulate ultra-realistic token-by-token streaming with punctuation pauses and authentic Assamese responses.
- **Files Created**:
  - [`src/services/mock-ai-service.ts`](file:///d:/AssameseLMAgent/src/services/mock-ai-service.ts)
  - [`src/data/mock-chats.ts`](file:///d:/AssameseLMAgent/src/data/mock-chats.ts)
- **Status**: ✅ Completed
- **Acceptance**: Streams at ~45 tokens/second; includes pause/cancel controls.

---

### Task 5: Build Reusable UI Primitives
- **Objective**: Create accessible, unstyled core building blocks following shadcn/ui conventions.
- **Files Created**:
  - [`src/components/ui/button.tsx`](file:///d:/AssameseLMAgent/src/components/ui/button.tsx)
  - [`src/components/ui/input.tsx`](file:///d:/AssameseLMAgent/src/components/ui/input.tsx)
  - [`src/components/ui/textarea.tsx`](file:///d:/AssameseLMAgent/src/components/ui/textarea.tsx)
  - [`src/components/ui/badge.tsx`](file:///d:/AssameseLMAgent/src/components/ui/badge.tsx)
  - [`src/components/ui/avatar.tsx`](file:///d:/AssameseLMAgent/src/components/ui/avatar.tsx)
  - [`src/components/ui/modal.tsx`](file:///d:/AssameseLMAgent/src/components/ui/modal.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Accessible focus rings, active tactile presses, and clean variants.

---

### Task 6: Build 280px ChatGPT-Style Sidebar
- **Objective**: Construct navigation rail with search, date-grouped history, inline rename, and user drawer.
- **Files Created**:
  - [`src/components/sidebar/sidebar.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/sidebar.tsx)
  - [`src/components/sidebar/new-chat-button.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/new-chat-button.tsx)
  - [`src/components/sidebar/search-chat.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/search-chat.tsx)
  - [`src/components/sidebar/chat-history.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/chat-history.tsx)
  - [`src/components/sidebar/chat-item.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/chat-item.tsx)
  - [`src/components/sidebar/user-menu.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/user-menu.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Pins chats, groups by *Today/Yesterday/7 Days*, collapses smoothly on mobile.

---

### Task 7: Build Chat Header & Model Selector
- **Objective**: Top bar enabling model switching (*74M, 17M, Research v2*), conversation sharing, and sidebar toggling.
- **Files Created**:
  - [`src/components/chat/chat-header.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-header.tsx)
  - [`src/components/chat/model-selector.tsx`](file:///d:/AssameseLMAgent/src/components/chat/model-selector.tsx)
  - [`src/constants/models.ts`](file:///d:/AssameseLMAgent/src/constants/models.ts)
- **Status**: ✅ Completed
- **Acceptance**: Dropdown switches models, displays context window and parameter metrics.

---

### Task 8: Build Welcome Screen & Starter Prompts
- **Objective**: Empty state with greeting (*"নমস্কাৰ! মই আপোনাক কিদৰে সহায় কৰিব পাৰোঁ?"*) and 4 prompt cards.
- **Files Created**:
  - [`src/components/chat/welcome-screen.tsx`](file:///d:/AssameseLMAgent/src/components/chat/welcome-screen.tsx)
  - [`src/constants/prompts.ts`](file:///d:/AssameseLMAgent/src/constants/prompts.ts)
- **Status**: ✅ Completed
- **Acceptance**: Clicking any card immediately starts chat streaming.

---

### Task 9: Build Message List & Message Bubble
- **Objective**: Conversational thread displaying user (right) and assistant (left) bubbles with retry/copy controls.
- **Files Created**:
  - [`src/components/chat/message-list.tsx`](file:///d:/AssameseLMAgent/src/components/chat/message-list.tsx)
  - [`src/components/chat/message-bubble.tsx`](file:///d:/AssameseLMAgent/src/components/chat/message-bubble.tsx)
  - [`src/components/chat/typing-indicator.tsx`](file:///d:/AssameseLMAgent/src/components/chat/typing-indicator.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Smooth auto-scroll during streaming, copy buttons, retry button on last message.

---

### Task 10: Build Auto-Resizing Chat Input
- **Objective**: Floating bottom input with auto-expansion up to 200px, Enter-to-send, and circular Send/Stop toggle.
- **Files Created**:
  - [`src/components/chat/chat-input.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-input.tsx)
  - [`src/hooks/use-auto-resize-textarea.ts`](file:///d:/AssameseLMAgent/src/hooks/use-auto-resize-textarea.ts)
- **Status**: ✅ Completed
- **Acceptance**: Textarea expands gracefully, Shift+Enter makes newline, Stop button halts stream.

---

### Task 11: Build Markdown & Code Highlighting Engine
- **Objective**: Full GFM rendering for headings, lists, tables, blockquotes, and Prism code syntax highlighting.
- **Files Created**:
  - [`src/components/markdown/markdown-renderer.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/markdown-renderer.tsx)
  - [`src/components/markdown/code-block.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/code-block.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Python, JS, TypeScript, Java, and SQL formatted with copy code action.

---

### Task 12: Build Modern Landing Page
- **Objective**: Product landing page introducing AssameseGPT with hero headline, live demo preview, and highlights.
- **Files Created**:
  - [`src/app/page.tsx`](file:///d:/AssameseLMAgent/src/app/page.tsx)
  - [`src/components/landing/hero.tsx`](file:///d:/AssameseLMAgent/src/components/landing/hero.tsx)
  - [`src/components/landing/demo-preview.tsx`](file:///d:/AssameseLMAgent/src/components/landing/demo-preview.tsx)
  - [`src/components/landing/highlights.tsx`](file:///d:/AssameseLMAgent/src/components/landing/highlights.tsx)
  - [`src/components/landing/feature-grid.tsx`](file:///d:/AssameseLMAgent/src/components/landing/feature-grid.tsx)
  - [`src/components/layout/header.tsx`](file:///d:/AssameseLMAgent/src/components/layout/header.tsx)
  - [`src/components/layout/footer.tsx`](file:///d:/AssameseLMAgent/src/components/layout/footer.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Responsive, high visual polish, one-click transition to chat.

---

### Task 13: Build Settings Page & Inference Tuning
- **Objective**: Page at `/settings` to adjust default model, temperature slider, token velocity, and system prompt.
- **Files Created**:
  - [`src/app/settings/page.tsx`](file:///d:/AssameseLMAgent/src/app/settings/page.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Saves parameters to `localStorage` and resets to defaults on request.

---

### Task 14: Build User Profile Page
- **Objective**: Page at `/profile` showcasing user tier (*Researcher*), total chats, messages exchanged, and language options.
- **Files Created**:
  - [`src/app/profile/page.tsx`](file:///d:/AssameseLMAgent/src/app/profile/page.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Accurate calculation of conversation and message metrics.

---

### Task 15: Build Authentication Screens
- **Objective**: Clean `/login` and `/signup` routes with guest access option.
- **Files Created**:
  - [`src/app/login/page.tsx`](file:///d:/AssameseLMAgent/src/app/login/page.tsx)
  - [`src/app/signup/page.tsx`](file:///d:/AssameseLMAgent/src/app/signup/page.tsx)
- **Status**: ✅ Completed
- **Acceptance**: Redirects to `/chat` upon successful authentication or guest bypass.

---

## ⏳ Phase 2: Real Backend & Persistence (Planned)

### Task 16: PostgreSQL Database & ORM Setup
- **Objective**: Implement the schema designed in [`schema.md`](file:///d:/AssameseLMAgent/schema.md) using Prisma or Drizzle ORM.
- **Scope**:
  - Initialize database migrations for `users`, `conversations`, `messages`, `models`, `usage_logs`.
  - Connect database to Supabase or managed PostgreSQL instance.
- **Status**: ⏳ Planned

---

### Task 17: User Authentication with NextAuth / Supabase Auth
- **Objective**: Replace simulated auth with JWT / session-based OAuth (Google, GitHub) and email magic links.
- **Scope**:
  - Secure `/api/auth/[...nextauth]` routes.
  - Protected API routes for chat history access.
- **Status**: ⏳ Planned

---

### Task 18: Server-Sent Events (SSE) Live Inference Pipeline
- **Objective**: Connect the frontend to FastAPI / vLLM backend running AssameseGPT 74M weights.
- **Scope**:
  - Replace `streamAiResponse()` with `fetchEventSource('/api/chat/stream')`.
  - Handle token backpressure, network disconnects, and stream retries.
- **Status**: ⏳ Planned

---

### Task 19: Conversation Sync & Full-Text Search
- **Objective**: Migrate conversation storage from client `localStorage` to server database with instant search.
- **Scope**:
  - PostgreSQL full-text search indexing (`tsvector`) for Assamese keywords.
  - Multi-device sync across desktop and mobile.
- **Status**: ⏳ Planned

---

### Task 20: Shareable Links & OpenGraph Cards
- **Objective**: Implement `/share/[token]` enabling users to create public, read-only snapshots of conversations.
- **Scope**:
  - Generate static OpenGraph previews for social media sharing.
- **Status**: ⏳ Planned

---

## 🔮 Phase 3: Multimodal, Voice & Agents (Future)

### Task 21: Document Upload & Client Ingestion (PDF, DOCX, TXT)
- **Objective**: Implement file drag-and-drop into chat with client-side text extraction.
- **Scope**:
  - File size validation (< 25MB), chunk preview.
- **Status**: 🔮 Future

---

### Task 22: RAG Vector Search & Citation Rendering
- **Objective**: Query vector embeddings and render interactive citation pills (`[Page 3, Para 2]`).
- **Scope**:
  - pgvector similarity search, source inspection modal.
- **Status**: 🔮 Future

---

### Task 23: Voice Interaction Mode (`/voice`)
- **Objective**: Fullscreen audio conversation interface with speech-to-text and Assamese neural TTS.
- **Scope**:
  - Web Audio API soundwave visualization, WebSocket audio streaming.
- **Status**: 🔮 Future

---

### Task 24: Specialized Autonomous Agents Directory (`/agents`)
- **Objective**: Dedicated interfaces for Research, Coding, and Education agents.
- **Scope**:
  - Multi-step tool calling, timeline progress tracker.
- **Status**: 🔮 Future
