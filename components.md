# AssameseGPT — Component Inventory

A comprehensive catalogue of all production React components in the **AssameseGPT** frontend ecosystem, detailing component responsibilities, file paths, props, state dependencies, and visual variants.

---

## 📑 Summary Matrix

| Component | Category | File Location | Key Dependencies |
| :--- | :--- | :--- | :--- |
| **`Navbar` (`Header`)** | Layout | [`src/components/layout/header.tsx`](file:///d:/AssameseLMAgent/src/components/layout/header.tsx) | `Link`, `ThemeToggle`, `Button` |
| **`Footer`** | Layout | [`src/components/layout/footer.tsx`](file:///d:/AssameseLMAgent/src/components/layout/footer.tsx) | `Link`, `Lucide` |
| **`ThemeSwitcher`** | Layout | [`src/components/layout/theme-toggle.tsx`](file:///d:/AssameseLMAgent/src/components/layout/theme-toggle.tsx) | `next-themes`, `Button` |
| **`Providers`** | Layout | [`src/components/layout/providers.tsx`](file:///d:/AssameseLMAgent/src/components/layout/providers.tsx) | `ThemeProvider`, `QueryClientProvider` |
| **`Sidebar`** | Navigation | [`src/components/sidebar/sidebar.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/sidebar.tsx) | `useChatStore` |
| **`NewChatButton`** | Navigation | [`src/components/sidebar/new-chat-button.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/new-chat-button.tsx) | `useChatStore`, `Button` |
| **`SearchChat`** | Navigation | [`src/components/sidebar/search-chat.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/search-chat.tsx) | `useChatStore` |
| **`ChatHistory`** | Navigation | [`src/components/sidebar/chat-history.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/chat-history.tsx) | `useChatStore`, `ChatItem` |
| **`ConversationCard` (`ChatItem`)** | Navigation | [`src/components/sidebar/chat-item.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/chat-item.tsx) | `useChatStore`, `Conversation` |
| **`ProfileDropdown` (`UserMenu`)** | Navigation | [`src/components/sidebar/user-menu.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/user-menu.tsx) | `useAuthStore`, `useChatStore`, `Avatar` |
| **`ChatArea`** | Chat | [`src/components/chat/chat-area.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-area.tsx) | `ChatHeader`, `MessageList`, `ChatInput` |
| **`ChatHeader`** | Chat | [`src/components/chat/chat-header.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-header.tsx) | `ModelSelector`, `ThemeToggle`, `useChatStore` |
| **`ModelSelector`** | Chat | [`src/components/chat/model-selector.tsx`](file:///d:/AssameseLMAgent/src/components/chat/model-selector.tsx) | `useSettingsStore`, `AVAILABLE_MODELS` |
| **`WelcomeScreen`** | Chat | [`src/components/chat/welcome-screen.tsx`](file:///d:/AssameseLMAgent/src/components/chat/welcome-screen.tsx) | `STARTER_PROMPTS`, `useChatStore` |
| **`MessageList`** | Chat | [`src/components/chat/message-list.tsx`](file:///d:/AssameseLMAgent/src/components/chat/message-list.tsx) | `useChatStore`, `MessageBubble` |
| **`MessageBubble`** | Chat | [`src/components/chat/message-bubble.tsx`](file:///d:/AssameseLMAgent/src/components/chat/message-bubble.tsx) | `MarkdownRenderer`, `useChatStore` |
| **`TypingIndicator`** | Chat | [`src/components/chat/typing-indicator.tsx`](file:///d:/AssameseLMAgent/src/components/chat/typing-indicator.tsx) | `Lucide` |
| **`ChatInput`** | Chat | [`src/components/chat/chat-input.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-input.tsx) | `useChatStore`, `useSettingsStore` |
| **`MarkdownRenderer`** | Markdown | [`src/components/markdown/markdown-renderer.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/markdown-renderer.tsx) | `react-markdown`, `remark-gfm`, `CodeBlock` |
| **`CodeBlock`** | Markdown | [`src/components/markdown/code-block.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/code-block.tsx) | `react-syntax-highlighter`, `Prism` |
| **`Hero`** | Marketing | [`src/components/landing/hero.tsx`](file:///d:/AssameseLMAgent/src/components/landing/hero.tsx) | `Button`, `Link` |
| **`DemoPreview`** | Marketing | [`src/components/landing/demo-preview.tsx`](file:///d:/AssameseLMAgent/src/components/landing/demo-preview.tsx) | `CodeBlock` |
| **`Highlights`** | Marketing | [`src/components/landing/highlights.tsx`](file:///d:/AssameseLMAgent/src/components/landing/highlights.tsx) | `Lucide` |
| **`FeatureGrid`** | Marketing | [`src/components/landing/feature-grid.tsx`](file:///d:/AssameseLMAgent/src/components/landing/feature-grid.tsx) | `Lucide` |
| **`Button`** | UI Primitive | [`src/components/ui/button.tsx`](file:///d:/AssameseLMAgent/src/components/ui/button.tsx) | `clsx`, `twMerge` |
| **`Input`** | UI Primitive | [`src/components/ui/input.tsx`](file:///d:/AssameseLMAgent/src/components/ui/input.tsx) | `clsx`, `twMerge` |
| **`Textarea`** | UI Primitive | [`src/components/ui/textarea.tsx`](file:///d:/AssameseLMAgent/src/components/ui/textarea.tsx) | `clsx`, `twMerge` |
| **`Badge`** | UI Primitive | [`src/components/ui/badge.tsx`](file:///d:/AssameseLMAgent/src/components/ui/badge.tsx) | `clsx`, `twMerge` |
| **`Avatar`** | UI Primitive | [`src/components/ui/avatar.tsx`](file:///d:/AssameseLMAgent/src/components/ui/avatar.tsx) | Image fallback handler |
| **`Modal`** | UI Primitive | [`src/components/ui/modal.tsx`](file:///d:/AssameseLMAgent/src/components/ui/modal.tsx) | `Escape` listener, Backdrop Blur |

---

## 🔍 Detailed Component Profiles

### 1. Navigation & Layout

#### `Navbar` (`Header`)
- **Location**: [`src/components/layout/header.tsx`](file:///d:/AssameseLMAgent/src/components/layout/header.tsx)
- **Role**: Top-level sticky navigation for the marketing landing page (`/`).
- **Features**: Brand mark with `Native AI` pill, links to Features & Models, theme switch toggle, and "Launch App" CTA button.
- **Props**: None (Global layout header).

#### `ThemeSwitcher` (`ThemeToggle`)
- **Location**: [`src/components/layout/theme-toggle.tsx`](file:///d:/AssameseLMAgent/src/components/layout/theme-toggle.tsx)
- **Role**: Cycler between `light`, `dark`, and `system` themes.
- **Behavior**: Reads theme from `next-themes`, handles client-side hydration mounting, renders `Sun` (light), `Moon` (dark), or `Laptop` (system) icons.

---

### 2. Sidebar & Conversation Management

#### `Sidebar`
- **Location**: [`src/components/sidebar/sidebar.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/sidebar.tsx)
- **Role**: 280px left rail containing logo, new chat, search, conversation history, and user drawer.
- **States**: Desktop fixed pin (`w-[280px]`), collapsible toggle (`-ml-[280px]`), mobile off-canvas drawer with dark backdrop overlay.

#### `NewChatButton`
- **Location**: [`src/components/sidebar/new-chat-button.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/new-chat-button.tsx)
- **Role**: Creates a fresh conversation and resets view to welcome screen.
- **Micro-interactions**: Rotating `Plus` icon on hover (`group-hover:rotate-90`), keyboard shortcut badge (`⌘K`).

#### `SearchChat`
- **Location**: [`src/components/sidebar/search-chat.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/search-chat.tsx)
- **Role**: Real-time filtering of conversations.
- **State**: Connected to `searchQuery` in `useChatStore`.

#### `ConversationCard` (`ChatItem`)
- **Location**: [`src/components/sidebar/chat-item.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/chat-item.tsx)
- **Role**: Individual chat thread item in the sidebar.
- **Props**:
  ```typescript
  interface ChatItemProps {
    conversation: Conversation;
  }
  ```
- **Actions**:
  - Click to select active conversation.
  - Hover reveals action menu (`MoreHorizontal`).
  - Pin / Unpin toggle.
  - Inline title rename (`Enter` to save, `Esc` to cancel).
  - Delete conversation with cascade cleanup.

#### `ProfileDropdown` (`UserMenu`)
- **Location**: [`src/components/sidebar/user-menu.tsx`](file:///d:/AssameseLMAgent/src/components/sidebar/user-menu.tsx)
- **Role**: Displays authenticated user avatar, name, and tier badge at the bottom of the sidebar.
- **Popover Menu**:
  - Theme toggler.
  - Links to `/profile` and `/settings`.
  - Destructive action: "Clear conversations" with confirmation dialog.
  - Authentication toggle: "Log in" / "Log out".

---

### 3. Chat Workspace

#### `ChatInput`
- **Location**: [`src/components/chat/chat-input.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-input.tsx)
- **Role**: Sticky bottom user input container with auto-expanding textarea.
- **Key Features**:
  - Auto-resizing up to `200px` without jitter.
  - Keyboard listeners: `Enter` to submit, `Shift+Enter` for newline.
  - Dynamic button toggle: Circular **Send** button (`ArrowUp`) when idle; **Stop** button (`Square`) when streaming.
  - Action hooks: Attachment button (`Paperclip`), Voice button (`Mic`), Active model tag.
  - Disclaimer footer.

#### `MessageBubble`
- **Location**: [`src/components/chat/message-bubble.tsx`](file:///d:/AssameseLMAgent/src/components/chat/message-bubble.tsx)
- **Role**: Formats individual conversational turns for User and Assistant roles.
- **Props**:
  ```typescript
  interface MessageBubbleProps {
    message: Message;
    isLast?: boolean;
  }
  ```
- **Variants**:
  - **User Role**: Right-aligned, dark/light pill with rounded top-right taper, clean typography.
  - **Assistant Role**: Left-aligned with AssameseGPT icon, model tag badge, Markdown content renderer, and post-stream action strip (Copy response, Retry generation).

#### `TypingIndicator`
- **Location**: [`src/components/chat/typing-indicator.tsx`](file:///d:/AssameseLMAgent/src/components/chat/typing-indicator.tsx)
- **Role**: Displays animated bouncing 3-dot pulse when generation is pending.

#### `WelcomeScreen`
- **Location**: [`src/components/chat/welcome-screen.tsx`](file:///d:/AssameseLMAgent/src/components/chat/welcome-screen.tsx)
- **Role**: Zero-state dashboard presented when a conversation has no messages.
- **Features**: Assamese greeting (*"নমস্কাৰ! মই আপোনাক কিদৰে সহায় কৰিব পাৰোঁ?"*), cultural emblem, and 4 interactive starter prompt cards.

#### `ModelSelector`
- **Location**: [`src/components/chat/model-selector.tsx`](file:///d:/AssameseLMAgent/src/components/chat/model-selector.tsx)
- **Role**: Header dropdown enabling on-the-fly switching between **AssameseGPT 74M**, **17M**, and **Research v2**.
- **Popover**: Displays parameter count (`74M`), context window (`4,096 Tokens`), and tagline.

---

### 4. Markdown & Code Engine

#### `MarkdownRenderer`
- **Location**: [`src/components/markdown/markdown-renderer.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/markdown-renderer.tsx)
- **Role**: Parses GFM markdown text into styled React elements.
- **Handled Elements**: Headings (`h1`-`h3`), unordered/ordered lists, blockquotes with accent border, styled tables with border dividers, external links, and the animated `.streaming-cursor`.

#### `CodeBlock`
- **Location**: [`src/components/markdown/code-block.tsx`](file:///d:/AssameseLMAgent/src/components/markdown/code-block.tsx)
- **Role**: Syntax highlighter for programming code blocks.
- **Props**:
  ```typescript
  interface CodeBlockProps {
    language: string;
    value: string;
  }
  ```
- **Features**:
  - Supported syntaxes: Python, JavaScript, TypeScript, Java, C++, HTML/CSS, SQL, Bash.
  - Styled dark frame (`#161618`).
  - Top header with uppercase language tag (`PYTHON`, `TYPESCRIPT`).
  - Clipboard copy button with green checkmark feedback (`"Copied!"`) that resets after 2000ms.

---

### 5. UI Primitives (`components/ui/`)

#### `Button`
- **Location**: [`src/components/ui/button.tsx`](file:///d:/AssameseLMAgent/src/components/ui/button.tsx)
- **Variants**: `default`, `secondary`, `outline`, `ghost`, `destructive`.
- **Sizes**: `sm` (32px), `default` (36px), `lg` (44px), `icon` (36x36px).
- **Feedback**: Tactile active press (`active:scale-[0.98]`).

#### `Input` & `Textarea`
- **Location**: [`src/components/ui/input.tsx`](file:///d:/AssameseLMAgent/src/components/ui/input.tsx), [`src/components/ui/textarea.tsx`](file:///d:/AssameseLMAgent/src/components/ui/textarea.tsx)
- **Features**: Accessible focus ring outlines, disabled states, placeholder styling.

#### `Avatar`
- **Location**: [`src/components/ui/avatar.tsx`](file:///d:/AssameseLMAgent/src/components/ui/avatar.tsx)
- **Props**: `src`, `alt`, `fallback`, `size` (`sm` = 28px, `md` = 36px, `lg` = 48px).
- **Safety**: Graceful fallback to uppercase initial letters when image fails to load.

#### `Modal`
- **Location**: [`src/components/ui/modal.tsx`](file:///d:/AssameseLMAgent/src/components/ui/modal.tsx)
- **Features**: Accessible backdrop overlay, body scroll lock, `Escape` key close listener, click-outside dismissal.
