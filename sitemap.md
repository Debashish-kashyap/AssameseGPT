# AssameseGPT — Application Sitemap

A complete architectural sitemap and route map for **AssameseGPT**, covering all **Current (Phase 1)** implemented routes and **Future (Phase 2 & Phase 3)** planned pages based on [`prd.md`](file:///d:/AssameseLMAgent/prd.md) and [`instruction.md`](file:///d:/AssameseLMAgent/instruction.md).

---

## 📌 Route Overview

```
AssameseGPT Platform
├── 🌐 Public & Marketing
│   ├── / .................................... [Active] Homepage & Product Showcase
│   ├── /pricing ............................. [Phase 2] Subscription & Research Tiers
│   ├── /models .............................. [Phase 2] Assamese LLM Specs & Benchmarks
│   ├── /explore ............................. [Phase 2] Community Prompts & Showcase
│   ├── /privacy ............................. [Phase 2] Privacy & Cultural Data Ethics
│   └── /terms ............................... [Phase 2] Terms of Service
│
├── 💬 Core Conversational Experience
│   ├── /chat ................................ [Active] Primary Chat Interface
│   ├── /chat/[id] ........................... [Phase 2] Direct Conversation Deep-link
│   ├── /voice ............................... [Phase 3] Fullscreen Voice Interaction Mode
│   └── /share/[token] ....................... [Phase 2] Public Conversation Viewer
│
├── ⚙️ User & Workspace Management
│   ├── /settings ............................ [Active] Model & Persona Configuration
│   ├── /profile ............................. [Active] User Account & Usage Analytics
│   ├── /login ............................... [Active] User Authentication (Sign In)
│   └── /signup .............................. [Active] New User Registration
│
├── 🧠 Intelligence & Advanced Tools
│   ├── /knowledge ........................... [Phase 3] Document Uploads & RAG System
│   └── /agents .............................. [Phase 3] Autonomous Specialized Agents
│       ├── /agents/research ................. Academic & Historical Research Agent
│       ├── /agents/code ..................... Software Engineering Agent
│       └── /agents/education ................ Assamese Language & Grammar Tutor
│
└── 🛠 Developer Platform
    ├── /developers .......................... [Phase 3] Developer Portal & API Keys
    └── /developers/docs ..................... [Phase 3] REST & Streaming API Documentation
```

---

## 🚀 Detailed Page Directory

### 1. Current Live Routes (Phase 1 — Implemented)

| Route | Page Name | Primary Components | Access Level | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`/`** | **Landing Page** | `Hero`, `Highlights`, `DemoPreview`, `FeatureGrid`, `Header`, `Footer` | Public | ✅ **Live** |
| **`/chat`** | **Main Chat Interface** | `Sidebar`, `ChatHeader`, `MessageList`, `ChatInput`, `WelcomeScreen`, `ModelSelector` | Public / User | ✅ **Live** |
| **`/settings`** | **Settings & Inference** | Model selection, Temperature slider, Token velocity, System prompt editor, Data reset | Public / User | ✅ **Live** |
| **`/profile`** | **User Profile** | User avatar, Plan tier (*Researcher*), Chat/Message counters, Language preferences | User | ✅ **Live** |
| **`/login`** | **Sign In** | Email/Password auth form, Guest access bypass | Public | ✅ **Live** |
| **`/signup`** | **Registration** | New account registration with full name, email, and password | Public | ✅ **Live** |

---

### 2. Core Conversational Extensions (Phase 2)

#### `/chat/[id]` — Persistent Conversation Deep-link
- **Description**: Dedicated URL routing for individual conversations, enabling bookmarking, browser back/forward history navigation, and direct reloading.
- **Components**: Dynamic route handler `useParams()`, sync with `ChatStore` and backend SQLite/PostgreSQL database.
- **Target Release**: Phase 2 (Real Backend).

#### `/share/[token]` — Read-Only Shared Chat View
- **Description**: Public shareable link for exported conversations with cryptographic token security and preview cards for WhatsApp, X (Twitter), and Facebook.
- **Components**: `SharedMessageList`, `ForkChatButton`, OpenGraph metadata generator.
- **Target Release**: Phase 2.

#### `/explore` — Assamese Prompt Library & Cultural Showcase
- **Description**: Curated gallery of starter prompts, poetry analysis templates, historical inquiries, and coding recipes contributed by linguists and community members.
- **Components**: Search & filter by tags (*History*, *Bihu*, *Grammar*, *Tech*), "Run in Chat" button.
- **Target Release**: Phase 2.

---

### 3. Multimodal & Advanced Features (Phase 3)

#### `/voice` — Dedicated Voice & Audio Interface
- **Description**: Hands-free conversational voice mode supporting Assamese speech-to-text (STT) and natural Assamese neural text-to-speech (TTS).
- **Features**:
  - Fullscreen soundwave visualization.
  - Low-latency audio streaming via WebSockets / WebRTC.
  - Native Assamese dialect accent support.
- **Target Release**: Phase 3.

#### `/knowledge` — Document Upload & Retrieval-Augmented Generation (RAG)
- **Description**: Upload personal or institutional documents (PDF, DOCX, TXT) to create custom knowledge bases queried in Assamese and English.
- **Features**:
  - File upload drag-and-drop zone.
  - Vector embedding ingestion progress bar.
  - Citation badges with exact page and paragraph references in responses.
- **Target Release**: Phase 3.

#### `/agents` — Specialized Autonomous Agent Directory
- **Description**: Domain-specific agent environments with tool calling, web browsing, and multi-step reasoning capabilities.
- **Specialized Sub-Routes**:
  - **`/agents/research`**: Researches ancient texts, Buranjis (Ahom chronicles), folk literature, and academic archives.
  - **`/agents/code`**: Autonomous coding assistant optimizing Python, TypeScript, and software architecture.
  - **`/agents/education`**: Interactive language tutor for students learning Assamese orthography and grammar rules.
- **Target Release**: Phase 3.

---

### 4. Platform, Enterprise & Developer Routes (Phase 3)

#### `/models` — Model Registry & Benchmark Dashboard
- **Description**: Interactive comparison matrix showcasing AssameseGPT 17M, 74M, and upcoming 125M+ foundational weights, parameter counts, perplexity scores on Assamese benchmarks, and context windows.
- **Target Release**: Phase 2.

#### `/pricing` — Subscription & Institutional Plans
- **Description**: Tier breakdown for Free Users, Researchers/Students, and Enterprise/Government institutions with custom SLAs.
- **Target Release**: Phase 2.

#### `/developers` & `/developers/docs` — API Portal & Developer Hub
- **Description**: Developer portal for generating API keys, monitoring token quotas, and reading API references for Python and Node.js SDK integrations.
- **Endpoints documented**:
  - `POST /v1/chat/completions` (Server-Sent Events streaming)
  - `POST /v1/embeddings`
  - `POST /v1/audio/transcriptions`
- **Target Release**: Phase 3.

#### `/privacy` & `/terms` — Legal, Ethics & Indigenous Data Governance
- **Description**: Transparent privacy guidelines documenting zero training on private conversations, copyright protections, and ethical handling of Assamese cultural heritage data.
- **Target Release**: Phase 2.

---

## 🗺 Technology Alignment

| Area | Current Stack | Future Stack |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 App Router (TypeScript) | Next.js 15 App Router |
| **Styling** | Tailwind CSS + CSS Variables | Tailwind CSS |
| **State** | Zustand (`localStorage` persistence) | Zustand + TanStack Query + Supabase/Postgres |
| **Streaming** | Client-side chunk emulator (`setInterval`) | Server-Sent Events (SSE) / FastAPI / vLLM backend |
| **Auth** | Zustand Client Session Store | NextAuth.js / Supabase Auth / OAuth (Google, GitHub) |
| **RAG / Vector** | Mock citations | pgvector / Pinecone / ChromaDB |
| **Voice / Audio** | Placeholder UI hooks | Web Audio API + Whisper Assamese / VITS TTS |
