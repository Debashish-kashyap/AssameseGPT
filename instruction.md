# AssameseGPT Frontend Development Instructions

## Objective

Build a production-grade ChatGPT/Claude-style frontend UI.

Frontend only.

Backend integration later.

Architecture must be scalable from day one.

---

# Tech Stack

Framework:
- Next.js 15 App Router

Language:
- TypeScript

Styling:
- Tailwind CSS

UI Library:
- shadcn/ui

Animation:
- Framer Motion

Icons:
- Lucide React

State Management:
- Zustand

Data Fetching:
- TanStack Query

Markdown:
- react-markdown

Syntax Highlighting:
- react-syntax-highlighter

Theme:
- next-themes

---

# Folder Structure

src/

â”œâ”€â”€ app/
â”‚
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ chat/
â”‚   â”œâ”€â”€ sidebar/
â”‚   â”œâ”€â”€ layout/
â”‚   â”œâ”€â”€ markdown/
â”‚   â”œâ”€â”€ landing/
â”‚   â””â”€â”€ ui/
â”‚
â”œâ”€â”€ features/
â”‚   â”œâ”€â”€ auth/
â”‚   â”œâ”€â”€ chat/
â”‚   â”œâ”€â”€ settings/
â”‚   â””â”€â”€ profile/
â”‚
â”œâ”€â”€ hooks/
â”‚
â”œâ”€â”€ lib/
â”‚
â”œâ”€â”€ services/
â”‚
â”œâ”€â”€ store/
â”‚
â”œâ”€â”€ types/
â”‚
â”œâ”€â”€ constants/
â”‚
â”œâ”€â”€ data/
â”‚
â””â”€â”€ assets/

---

# App Routes

/

Landing Page

/chat

Main Chat Interface

/settings

Settings

/profile

User Profile

/login

Login

/signup

Signup

---

# Chat Architecture

Chat Page

Contains:

- Sidebar
- Chat Header
- Message List
- Chat Input

---

# Components

## Sidebar

Components:

- Logo
- NewChatButton
- ChatHistory
- SearchChat
- UserMenu

---

## Chat Area

Components:

- WelcomeScreen
- MessageList
- MessageBubble
- TypingIndicator
- ChatInput

---

# Message Types

User Message

Assistant Message

System Message

Error Message

Loading Message

---

# State Structure

ChatStore

Conversations

Messages

Selected Conversation

Loading State

Error State

Streaming State

---

# UI Requirements

## ChatGPT Style Layout

Sidebar:

280px

Resizable later

Chat Area:

Remaining Width

---

## Message Design

User:

Right Aligned

Assistant:

Left Aligned

---

## Input Design

Sticky Bottom

Auto Resize

Max Height:

200px

---

# Markdown Support

Must Support:

- Headings
- Lists
- Links
- Tables
- Code Blocks
- Blockquotes

---

# Code Blocks

Features:

- Syntax Highlighting
- Copy Button
- Language Label

---

# Streaming UI

Must simulate streaming

Even before backend exists.

Use:

setInterval()

for fake token streaming

---

# Responsive Rules

Desktop

Full Sidebar

---

Tablet

Collapsible Sidebar

---

Mobile

Drawer Sidebar

---

# Theme System

Support:

- Light
- Dark
- System

---

# Performance Rules

Use:

- Dynamic Imports
- Memoization
- Lazy Loading

Avoid:

- Massive page.tsx files
- Deep prop drilling

---

# Coding Rules

Rule 1:

Feature-first architecture

Not component dumping.

---

Rule 2:

Each major feature gets:

- Components
- Hooks
- Types
- Services

inside feature folder.

---

Rule 3:

Reusable UI components go into:

components/ui

---

Rule 4:

No hardcoded mock data inside components.

Use:

data/

or

mock/

folders.

---

# Phase 1 Deliverables

Landing Page

Chat UI

Sidebar

Markdown Rendering

Dark Mode

Responsive Design

Fake Streaming

---

# Phase 2 Deliverables

Authentication

Real Backend

Chat History

Conversation Management

---

# Phase 3 Deliverables

Voice Chat

File Uploads

RAG

Agents

Mobile App

---

# Design Language

Feel like:

- ChatGPT
- Claude
- Linear
- Vercel

Avoid:

- Gaming UI
- Crypto UI
- Neon Themes

Design Keywords:

Minimal
Professional
Fast
Clean
Readable

---

# Final Goal

A frontend that feels production-ready on day one and can later connect to:

- AssameseGPT 17M
- AssameseGPT 74M
- Future AssameseGPT Models
- RAG Systems
- Agent Frameworks

without major architectural changes.
