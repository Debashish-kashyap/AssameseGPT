# AssameseGPT — Design System Specification

A definitive design system guide for **AssameseGPT**, establishing cohesive visual, typographical, and interactive tokens inspired by modern benchmarks such as **ChatGPT**, **Claude**, **Linear**, and **Vercel**.

---

## 🎨 Design Philosophy & Principles

- **Minimal & Professional**: Distraction-free interfaces prioritizing readability and linguistic clarity.
- **Assamese Script First**: Optimized letter spacing, line height (`line-height: 1.65+`), and font weight rendering specifically tailored for Bengali-Assamese Unicode characters.
- **Fast & Responsive**: Micro-interactions with snappy transitions (150ms–250ms), subtle opacity shifts, and zero visual clutter.
- **Curated Tone**: Deep slate, zinc, and charcoal neutrals paired with emerald, sapphire, and amber semantic accents. Strictly avoids flashy neon or gaming aesthetics.

---

## 🌈 1. Colors & Token Palette

The application implements a dual-theme architecture (Dark and Light modes) powered by HSL variables defined in `src/app/globals.css`.

### 1.1 Core Theme Variables

| Token | Light Mode (HSL) | Dark Mode (HSL) | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 100%` (`#ffffff`) | `240 10% 6%` (`#0e0e11`) | Root screen background |
| `--foreground` | `240 10% 3.9%` (`#09090b`) | `0 0% 98%` (`#fafafa`) | Primary text and headings |
| `--card` | `0 0% 100%` (`#ffffff`) | `240 10% 8%` (`#131317`) | Elevated panels, prompt cards, modals |
| `--card-foreground` | `240 10% 3.9%` (`#09090b`) | `0 0% 98%` (`#fafafa`) | Text inside cards |
| `--popover` | `0 0% 100%` (`#ffffff`) | `240 10% 8%` (`#131317`) | Dropdowns, menus, tooltips |
| `--primary` | `240 5.9% 10%` (`#18181b`) | `0 0% 98%` (`#fafafa`) | Primary CTA buttons, key highlights |
| `--primary-foreground`| `0 0% 98%` (`#fafafa`) | `240 5.9% 10%` (`#18181b`) | Text on primary buttons |
| `--secondary` | `240 4.8% 95.9%` (`#f4f4f5`)| `240 5% 15%` (`#242429`) | Subtle secondary buttons & containers |
| `--muted` | `240 4.8% 95.9%` (`#f4f4f5`)| `240 5% 15%` (`#242429`) | Inactive backgrounds, badge fills |
| `--muted-foreground` | `240 3.8% 46.1%` (`#71717a`)| `240 5% 65%` (`#a1a1aa`) | Subtitles, helper text, timestamps |
| `--accent` | `240 4.8% 95.9%` (`#f4f4f5`)| `240 5% 15%` (`#242429`) | Hover states, active menu items |
| `--border` | `240 5.9% 90%` (`#e4e4e7`) | `240 5% 18%` (`#2b2b31`) | Dividers, card borders, input borders |
| `--input` | `240 5.9% 90%` (`#e4e4e7`) | `240 5% 18%` (`#2b2b31`) | Input field borders |
| `--ring` | `240 5.9% 10%` (`#18181b`) | `240 5% 84%` (`#d4d4d8`) | Focus rings & accessibility outlines |

### 1.2 Sidebar Specific Palette

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--sidebar-background` | `240 5% 97%` (`#f7f7f8`) | `240 7% 9%` (`#151518`) | 280px navigation sidebar |
| `--sidebar-foreground` | `240 6% 15%` (`#232327`) | `240 5% 90%` (`#e4e4e7`) | Sidebar menu text & icons |
| `--sidebar-border` | `240 5% 90%` (`#e4e4e7`) | `240 5% 15%` (`#242429`) | Divider between sidebar & chat |
| `--sidebar-accent` | `240 5% 92%` (`#eaebee`) | `240 5% 15%` (`#242429`) | Active chat highlight fill |

### 1.3 Semantic & Functional Accents

- 🟢 **Emerald (`#10b981` / `bg-emerald-500/10 text-emerald-500`)**: Native Model badges, online indicators, successful copy operations, positive actions.
- 🔵 **Sapphire (`#3b82f6` / `text-blue-500`)**: Flagship 74M model, documentation links, informational callouts.
- 🟡 **Amber (`#f59e0b` / `text-amber-500`)**: Ultra-fast 17M model, warnings, culture tags.
- 🔴 **Rose/Destructive (`#ef4444` / `bg-destructive text-destructive-foreground`)**: Delete actions, reset data, error states.

---

## 🔤 2. Typography

Typography is calibrated to balance crisp English interfaces with authentic Assamese Unicode script (`অসমীয়া`).

### 2.1 Font Families

```css
/* English & Latin UI Elements */
font-sans: var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Assamese Native Typography */
font-assamese: "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif;

/* Monospace & Code */
font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

### 2.2 Typographic Hierarchy

| Role | Tailwind Class | Size / Line Height | Weight | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `text-4xl sm:text-6xl md:text-7xl` | `36px - 72px / 1.1` | Bold / Extrabold (`800`) | Landing Page Headline |
| **Page Title** | `text-2xl sm:text-3xl` | `24px - 30px / 1.25` | Bold (`700`) | Welcome Screen Greeting |
| **Section Header** | `text-xl` | `20px / 1.4` | Semibold (`600`) | Settings Section Titles |
| **Card Title** | `text-sm font-semibold` | `14px / 1.4` | Semibold (`600`) | Prompt Card Headers |
| **Body (Chat)** | `text-[15px] leading-relaxed` | `15px / 1.7` | Regular (`400`) | Message Bubbles & Explanations |
| **UI Controls** | `text-xs font-medium` | `12px / 1.3` | Medium (`500`) | Button text, Input labels |
| **Badges / Meta** | `text-[10px] - text-[11px]` | `10px - 11px / 1.2` | Medium / Semibold | Model badges, Timestamps, Disclaimers |
| **Code Snippets**| `text-[13px] font-mono` | `13px / 1.5` | Regular (`400`) | Syntax Highlighter content |

---

## 📐 3. Border Radius System

Consistency across micro-elements and large containers is achieved with our mathematical radius scale:

```css
--radius: 0.75rem; /* 12px base */
```

| Radius Token | CSS Value | Visual Intent | Applied Elements |
| :--- | :--- | :--- | :--- |
| `rounded-xs` | `2px` | Subtle corner taper | Message bubble tail corners |
| `rounded-sm` | `4px` / `calc(var(--radius) - 4px)` | Minimal rounding | Code copy button, inline code badge |
| `rounded-md` | `6px` / `calc(var(--radius) - 2px)` | Compact controls | Chat list items, small inputs, tags |
| `rounded-lg` | `8px` | Standard UI controls | Buttons (`Button`), Dropdown menus |
| `rounded-xl` | `12px` / `var(--radius)` | Structural elements | Code frames, Prompt cards, Settings cards |
| `rounded-2xl` | `16px` | Floating cards & Inputs | Chat Input box, Welcome Screen Cards, User Message pill |
| `rounded-full` | `9999px` | Circular elements | Send / Stop button, Avatars, Status pills |

---

## 🌘 4. Shadows & Elevation

Shadows are calibrated for sleek depth without heavy borders:

| Elevation Level | Class | Shadow Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Flat / Bordered** | `shadow-none border` | `none` | Standard sidebar items, neutral cards |
| **Subtle (Level 1)**| `shadow-xs` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Starter prompt cards, secondary buttons |
| **Medium (Level 2)**| `shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1)` | Logo badges, user message bubbles |
| **Elevated (Level 3)**| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Code block frames, header bars |
| **Floating (Level 4)**| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.15)`| Floating Chat Input box |
| **Overlay (Level 5)** | `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`| Modal dialogs, model selector popover |

---

## 🔘 5. Button Variants & Sizes

Defined in [`src/components/ui/button.tsx`](file:///d:/AssameseLMAgent/src/components/ui/button.tsx).

### 5.1 Variants

1. **Default (`variant="default"`)**:
   - Class: `bg-primary text-primary-foreground shadow hover:bg-primary/90`
   - Role: Main primary actions (e.g., "Start Chatting", "Save Configuration", "Create Account").
2. **Secondary (`variant="secondary"`)**:
   - Class: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
   - Role: Neutral supporting actions.
3. **Outline (`variant="outline"`)**:
   - Class: `border border-input bg-background hover:bg-accent hover:text-accent-foreground`
   - Role: "New Chat" sidebar trigger, model selectors, share links.
4. **Ghost (`variant="ghost"`)**:
   - Class: `hover:bg-accent hover:text-accent-foreground`
   - Role: Icon-only buttons (theme toggle, sidebar collapse, option menus).
5. **Destructive (`variant="destructive"`)**:
   - Class: `bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm`
   - Role: "Clear All Conversations", delete actions.

### 5.2 Sizes

| Size | Height / Padding | Typography | Applied Components |
| :--- | :--- | :--- | :--- |
| `sm` | `h-8 px-3 rounded-md` | `text-xs` | Header share button, save triggers |
| `default` | `h-9 px-4 py-2 rounded-lg` | `text-sm` | Standard forms & dialogs |
| `lg` | `h-11 px-8 rounded-xl` | `text-base font-semibold` | Landing hero CTA button |
| `icon` | `h-9 w-9 p-0 rounded-lg` | Icon only | Theme toggle, sidebar collapse |

---

## 🗃 6. Card Styles

### 6.1 Standard Content Card
- Class: `rounded-2xl border border-border bg-card p-6 shadow-xs`
- Used in: User Profile, Settings blocks, Auth login container.

### 6.2 Interactive Action Card (Prompt Cards)
- Class: `group relative flex flex-col justify-between p-3.5 rounded-xl border border-border bg-card/60 hover:bg-muted/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 active:scale-[0.99] text-left shadow-xs`
- Features: Icon badge on top left, category tag on top right, prompt title, subtitle, and an arrow micro-interaction that reveals on hover.

### 6.3 Code Frame Card
- Class: `relative my-4 rounded-xl border border-neutral-800 bg-[#161618] overflow-hidden shadow-md text-sm`
- Header: `bg-[#1f1f23] px-4 py-2 border-b border-neutral-800 text-xs font-mono uppercase text-neutral-400`
- Integrated "Copy code" button with copy feedback.

---

## ✍️ 7. Input Styles

### 7.1 Single-Line Input (`Input`)
Defined in [`src/components/ui/input.tsx`](file:///d:/AssameseLMAgent/src/components/ui/input.tsx).
- Class: `flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`

### 7.2 Main Floating Chat Input (`ChatInput`)
Defined in [`src/components/chat/chat-input.tsx`](file:///d:/AssameseLMAgent/src/components/chat/chat-input.tsx).
- Container: `relative rounded-2xl border border-border bg-card shadow-lg focus-within:border-neutral-400 dark:focus-within:border-neutral-600 transition-all`
- Textarea:
  - Auto-expands up to `200px` height dynamically.
  - Padding: `px-4 pt-3.5 pb-12` (leaves clearance for bottom action row).
  - Clean font rendering with `resize-none focus:outline-none`.
- Embedded Action Strip:
  - Left: Attachment button (`Paperclip`), Voice button (`Mic`), Model indicator badge.
  - Right: Circular Send / Stop toggle button (`w-8 h-8 rounded-full`).
    - *Ready state*: Inactive when empty (`opacity-50 cursor-not-allowed`), active when typed.
    - *Streaming state*: Black/White pill with centered square icon (`Square`).

### 7.3 Search Input (`SearchChat`)
- Class: `w-full h-8 pl-8 pr-7 text-xs rounded-md bg-muted/50 border border-transparent hover:border-sidebar-border focus:border-sidebar-border focus:bg-background focus:outline-none transition-all placeholder:text-muted-foreground/70`
- Includes left-aligned magnifying glass icon and instant clear button (`X`).

---

## ✨ 8. Micro-Animations & Interactions

- **Streaming Cursor (`.streaming-cursor`)**:
  ```css
  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  ```
- **Bouncing Typing Indicator**: 3 dots with staggered animation delays (`-0.3s`, `-0.15s`, `0s`).
- **Button Active State**: `active:scale-[0.98]` tactile press effect.
- **Card Hover State**: Subtle border brightening (`hover:border-neutral-400 dark:hover:border-neutral-600`).
