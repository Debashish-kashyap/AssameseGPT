# AssameseGPT — Detailed User Flows

Comprehensive end-to-end user journeys, decision logic, and interaction diagrams for **AssameseGPT**, reflecting the platform specifications from [`prd.md`](file:///d:/AssameseLMAgent/prd.md), [`instruction.md`](file:///d:/AssameseLMAgent/instruction.md), and [`sitemap.md`](file:///d:/AssameseLMAgent/sitemap.md).

---

## 👥 User Personas

| Persona | Motivation & Background | Primary Needs |
| :--- | :--- | :--- |
| **Guest / First-Time Visitor** | Wants to quickly test Assamese comprehension without registration barriers. | Zero-friction entry, one-click starter prompts, fast response time. |
| **Native Speaker / Student** | Academic inquiries, Assamese literature analysis, homework assistance, grammar checks. | High-quality Assamese typography, accurate cultural context, clear explanations. |
| **Researcher / Linguist** | Studying North East languages, dialect nuances, translation fidelity. | Model parameter control (temperature, system prompt), model comparison (74M vs 17M). |
| **Developer / Engineer** | Technical scripting, translation integration, prompt engineering, API usage. | Accurate code blocks with syntax highlighting, copy buttons, future API keys. |

---

## 🌊 Flow 1: First-Time Discovery to Initial Chat (Guest Journey)

```mermaid
graph TD
    A["Landing Page ('/')"] --> B{"User Action"}
    B -->|"Clicks 'Start Chatting'"| C["Navigate to '/chat'"]
    B -->|"Toggles Demo Tabs"| D["Preview Assamese, Code & Multilingual Modes"]
    D --> C
    C --> E["Chat Workspace with Welcome Screen"]
    E --> F{"User Choice"}
    F -->|"Clicks Starter Prompt Card"| G["Auto-populate prompt into input & dispatch"]
    F -->|"Types custom Assamese / English prompt"| H["Hits Enter or Clicks Send Button"]
    G --> I["Stream AI response live token-by-token"]
    H --> I
    I --> J["Render Markdown, Quotes, and Code Blocks"]
    J --> K["Conversation auto-saved to Sidebar under 'Today'"]
```

### Detailed Interaction Steps:
1. **Landing Entry**: Visitor arrives at `/` and is greeted with the headline *"Assamese AI. Built From Scratch."*
2. **Interactive Preview**: Visitor can test simulated outputs (Assamese Poetry, Python Tokenizer, Multilingual chat) without leaving the landing page.
3. **Transition to Chat**: Clicks **Start Chatting** or **Launch App** to route immediately to `/chat`. No forced sign-in modal blocks entry.
4. **Welcome Screen**:
   - Greets user in Assamese: *"নমস্কাৰ! মই আপোনাক কিদৰে সহায় কৰিব পাৰোঁ?"*
   - Displays 4 distinct starter prompts:
     - 🌸 *ৰঙালী বিহুৰ তাৎপৰ্য* (Culture)
     - 📖 *অসমীয়া ব্যাকৰণ আৰু প্ৰয়োগ* (Language)
     - 💻 *Python ৱেব স্ক্ৰেপাৰ* (Code)
     - 🌐 *ইংৰাজী-অসমীয়া অনুবাদ* (Bilingual Translation)
5. **Prompt Dispatch**: Clicking a prompt card automatically dispatches the message, displays the user message bubble right-aligned, and starts live streaming the assistant response.

---

## 💬 Flow 2: Chat Conversation & Real-Time Token Streaming

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant ChatInput as Chat Input Component
    participant Store as Zustand ChatStore
    participant AI as Mock / LLM Streaming Engine
    participant Bubble as Message Bubble (Assistant)

    User->>ChatInput: Types message in Assamese / English
    Note over ChatInput: Textarea auto-expands up to 200px
    User->>ChatInput: Presses 'Enter' (or clicks Send)
    ChatInput->>Store: sendMessage(content, modelId)
    Store->>Store: Append User Message (Right-aligned)
    Store->>Store: Append Empty Streaming Assistant Message
    Store->>AI: streamAiResponse(prompt, callbacks)
    AI-->>ChatInput: Toggle button from 'Send' to 'Stop' (Square icon)

    loop Token Stream (~45 tokens/sec)
        AI->>Store: onChunk(token)
        Store->>Bubble: Update assistant message text
        Bubble-->>User: Render live text with pulsing cursor
    end

    alt User clicks Stop Button
        User->>ChatInput: Clicks Stop Generation
        ChatInput->>Store: stopStreaming()
        Store->>AI: cancel()
    else Stream naturally finishes
        AI->>Store: onComplete(fullText)
    end

    Store->>Bubble: Finalize Markdown, syntax highlighting, action buttons
    Bubble-->>User: Display 'Copy' & 'Retry' buttons
```

### Edge Cases & State Handlers:
- **Empty input**: Send button is disabled (`opacity: 50%`, cursor not-allowed).
- **Shift + Enter**: Inserts a new line without triggering form submission.
- **Mid-stream cancellation**: Clicking the stop square halts chunk emission immediately; all tokens generated up to that point are preserved.
- **Auto-scroll behavior**: The viewport sticks to bottom during streaming, but allows the user to scroll up freely without getting forced back down.

---

## 🗂 Flow 3: Conversation Management (Sidebar)

```mermaid
graph TD
    A["User in Chat Interface"] --> B{"Sidebar Action"}
    
    B -->|"Click 'New Chat' or '⌘K'"| C["Create fresh conversation, reset to Welcome Screen"]
    
    B -->|"Type in Search Bar"| D["Filter conversations in real-time by title"]
    
    B -->|"Select existing conversation"| E["Switch active conversation, load message history"]
    
    B -->|"Hover Conversation Item"| F{"Action Menu ('...')"}
    F -->|"Pin / Unpin"| G["Move to / from 'Pinned' section at top"]
    F -->|"Rename"| H["Inline input to edit title, commit on Enter/Blur"]
    F -->|"Delete"| I["Remove conversation from store & select next available"]
    
    B -->|"Clear All Chats"| J["Prompt confirmation modal -> purge local storage"]
```

### Hierarchy & Date Grouping:
1. **Pinned**: Highest priority items, fixed at top with a pin icon.
2. **Today**: Conversations created or modified on the current day.
3. **Yesterday**: Conversations from the previous calendar day.
4. **Previous 7 Days**: Conversations between 2 and 7 days old.
5. **Previous 30 Days**: Older conversations grouped by month.

---

## 💻 Flow 4: Code Block Interaction & Copying

```mermaid
graph LR
    A["Model outputs code fenced block"] --> B["MarkdownRenderer detects ```language"]
    B --> C["Render CodeBlock Component"]
    C --> D["Apply Prism Syntax Highlighting (vscDarkPlus)"]
    C --> E["Render Header: Language Tag + Copy Button"]
    
    UserClick["User clicks 'Copy Code'"] --> F["navigator.clipboard.writeText()"]
    F --> G["Icon changes: Copy -> Green Checkmark"]
    G --> H["Text changes: 'Copy code' -> 'Copied!'"]
    H --> I["Reverts back after 2000ms"]
```

---

## ⚙️ Flow 5: Model Selection & Parameter Customization

```mermaid
graph TD
    A["User clicks Model Selector in Header or navigates to '/settings'"]
    A --> B{"Selected Model"}
    B -->|"AssameseGPT 74M"| C["Flagship: Deepest grammar & literature context"]
    B -->|"AssameseGPT 17M"| D["Fastest: Ultra-low latency device dialogue"]
    B -->|"AssameseGPT Research v2"| E["Experimental: Code + Multilingual parallel corpora"]
    
    A --> F["Adjust Inference Temperature"]
    F --> G["0.0 - 0.3: Deterministic & Grammar Accurate"]
    F --> H["0.4 - 0.7: Balanced Dialogue (Default)"]
    F --> I["0.8 - 1.0: Creative Writing & Poetry"]
    
    A --> J["Edit System Prompt Persona"]
    J --> K["Custom instructions injected into future completions"]
    
    C & D & E & G & H & I & K --> L["Save Configuration -> Persist to Local Storage"]
```

---

## 👤 Flow 6: Authentication & Profile Flow

```mermaid
graph TD
    A["Guest User in Chat"] --> B["Clicks User Menu -> 'Log in'"]
    B --> C["Navigate to '/login'"]
    C --> D{"User Action"}
    D -->|"Enters Email & Password"| E["Validate & Authenticate Session"]
    D -->|"No Account Yet"| F["Click 'Sign Up' -> Route to '/signup'"]
    D -->|"Cancel"| G["Click 'Continue as Guest' -> Return to '/chat'"]
    
    F --> H["Enter Name, Email, Password -> Create Account"]
    H --> E
    
    E --> I["Redirect to '/chat' with Active Profile"]
    I --> J["User Profile Menu now displays Name, Avatar & 'Researcher' badge"]
    J --> K["Navigate to '/profile' to view Total Chats & Messages count"]
```

---

## 🔮 Flow 7: Future Multimodal & Advanced Flows (Phase 2 & 3)

### 7.1 Voice Interaction Flow (`/voice`)
```mermaid
sequenceDiagram
    actor User
    participant App as Voice Interface
    participant STT as Assamese Speech-to-Text
    participant LLM as AssameseGPT Engine
    participant TTS as Neural Assamese TTS

    User->>App: Speaks question in Assamese
    App->>App: Render audio wave visualization
    App->>STT: Stream voice audio chunks
    STT-->>App: Transcribed Assamese text
    App->>LLM: Dispatch prompt
    LLM-->>TTS: Stream response tokens
    TTS-->>App: Stream synthesized Assamese voice
    App-->>User: Plays spoken audio response in real-time
```

### 7.2 Document Ingestion & RAG Flow (`/knowledge`)
```mermaid
graph TD
    A["User drags PDF / DOCX / TXT into chat"] --> B["Client validates file size (< 25MB)"]
    B --> C["Extract text & segment into semantic chunks"]
    C --> D["Generate vector embeddings via Assamese Embedding Model"]
    D --> E["Store chunks in vector database"]
    
    F["User asks: 'এই নথিত কি উল্লেখ আছে?'"] --> G["Vector similarity search retrieves top-k chunks"]
    G --> H["Inject retrieved context into LLM prompt"]
    H --> I["Model outputs answer with citation pill: [Page 4, Para 2]"]
    I --> J["User clicks citation pill -> View highlighted source text"]
```

### 7.3 Specialized Autonomous Agents Flow (`/agents`)
```mermaid
graph TD
    A["User selects 'Research Agent'"] --> B["User enters topic: 'অসমৰ প্ৰাচীন কামৰূপ বুৰঞ্জী'"]
    B --> C["Agent decomposes topic into research sub-tasks"]
    C --> D["Step 1: Query historical databases & archives"]
    D --> E["Step 2: Synthesize findings & cross-reference sources"]
    E --> F["Step 3: Format academic summary with chronologies & references"]
    F --> G["Output interactive report in Assamese & English"]
```

---

## 📱 Flow 8: Responsive Layout Transitions

```mermaid
graph TD
    Screen{"Viewport Width"}
    
    Screen -->|">= 1024px (Desktop)"| Desktop["Full 280px Sidebar pinned left + Centered 768px chat container"]
    
    Screen -->|"768px - 1023px (Tablet)"| Tablet["Sidebar collapsed by default, expandable via Header toggle button"]
    
    Screen -->|"< 768px (Mobile)"| Mobile["Sidebar transforms into full-height Slide-over Drawer with dark backdrop blur"]
    
    Mobile --> CloseDrawer["Tap outside or select chat -> Drawer smoothly animates out"]
```

---

## 🛡 Summary of Safety & Fallback Protocols

1. **Network Disruption / Error Handling**:
   - If streaming disconnects, the UI marks the message as interrupted and presents a **Retry** button.
2. **Local Storage Limit Guard**:
   - If browser storage approaches quotas, old messages are pruned gracefully with user warning prompts.
3. **Content & Cultural Alignment**:
   - Default system instructions ensure respect for Assamese linguistic conventions, indigenous heritage, and polite grammatical pronouns (*আপুনি / তুমি*).
