# AssameseGPT — Low-Fidelity Wireframes

Comprehensive structural blueprints and low-fidelity ASCII wireframes for all core **AssameseGPT** interfaces, illustrating layout geometry, element hierarchy, visual balance, and component placement.

---

## 🧭 Directory of Wireframes

1. [Landing Page (`/`)](#1-landing-page-)
2. [Chat Workspace (`/chat`)](#2-chat-workspace-chat)
   - [2.1 Chat with Welcome Screen](#21-chat-with-welcome-screen)
   - [2.2 Active Chat Thread (Messages & Code)](#22-active-chat-thread-messages--code)
   - [2.3 Mobile View (Drawer Overlay)](#23-mobile-view-drawer-overlay)
3. [Settings Page (`/settings`)](#3-settings-page-settings)
4. [User Profile Page (`/profile`)](#4-user-profile-page-profile)
5. [Login Page (`/login`)](#5-login-page-login)
6. [Signup Page (`/signup`)](#6-signup-page-signup)

---

## 1. Landing Page (`/`)

```text
+---------------------------------------------------------------------------------------------+
|  [🤖] AssameseGPT [Native AI]                  Features   Models   [☀️/🌙]   [ Launch App -> ]  |
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|                                [ 🟢 AssameseGPT 74M & 17M Active ]                           |
|                                                                                             |
|                                       Assamese AI.                                          |
|                                   Built From Scratch.                                       |
|                                                                                             |
|            Chat with a language model built specifically for Assamese while                 |
|             supporting multilingual conversations, rich code syntax & culture.              |
|                                                                                             |
|                     [ 🤖 Start Chatting -> ]      [ 💻 Explore 74M Model ]                  |
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | (o)(o)(o) app.assamesegpt.ai/chat       [ অসমীয়া সাহিত্য ] [ Python Code ] [ Multi ] |   |
|   |-------------------------------------------------------------------------------------|   |
|   |                                               +---------------------------------+   |   |
|   |                                               | ৰঙালী বিহুৰ তাৎপৰ্য কওক।        |   |   |
|   |                                               +---------------------------------+   |   |
|   |   [🤖] AssameseGPT 74M [Native]                                                     |   |
|   |   ৰঙালী বিহু অসমৰ প্ৰাণৰ উৎসৱ। ব'হাগৰ আগমনৰ লগে লগে প্ৰকৃতি যেনেদৰে নতুন সাজেৰে...  |   |
|   |   | "বিহুটি আদৰি আনোগৈ ঔ ফুলিছে কপৌ ফুল..."                                         |   |
|   |-------------------------------------------------------------------------------------|   |
|   |   Ready to try AssameseGPT?                                    [ Open Chat App -> ] |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   +-------------------+ +-------------------+ +-------------------+ +-------------------+   |
|   | [🌐]              | | [🌍]              | | [⚡]              | | [❤️]              |   |
|   | Assamese Native   | | Multilingual      | | Fast Responses    | | Built in Assam    |   |
|   | Deep comprehension| | Responds across   | | Immediate token   | | Created for North |   |
|   | of grammar & text | | As/En languages   | | streaming speed   | | East community    |   |
|   +-------------------+ +-------------------+ +-------------------+ +-------------------+   |
|                                                                                             |
|                                  Engineered for Scalability                                 |
|                                                                                             |
|   +-------------------------+ +-------------------------+ +-------------------------+       |
|   | [📝] Markdown & Code    | | [🧠] Scalable Models    | | [⚙️] Deep Settings      |       |
|   | Python, JS, C++, Tables | | 17M, 74M, RAG Ready     | | Temperature & Prompts   |       |
|   +-------------------------+ +-------------------------+ +-------------------------+       |
|   | [📱] 100% Responsive    | | [🛡️] Local Privacy First| | [✨] Future Voice & RAG |       |
|   | Desktop, Tablet, Mobile | | Client-side encrypted   | | Multimodal ready        |       |
|   +-------------------------+ +-------------------------+ +-------------------------+       |
|                                                                                             |
|   [🤖] AssameseGPT © 2026. Built by Debashish Kashyap.          Chat | Settings | Profile   |
+---------------------------------------------------------------------------------------------+
```

---

## 2. Chat Workspace (`/chat`)

### 2.1 Chat with Welcome Screen

```text
+-----------------------+---------------------------------------------------------------------+
| [🤖] AssameseGPT [<-] | [≡] [ 🤖 AssameseGPT 74M [v] ]             [ Share ]  [+]  [☀️/🌙]  |
+-----------------------+---------------------------------------------------------------------+
| [ + নতুন বাৰ্তালাপ ⌘K]  |                                                                     |
| [ 🔍 Search chats... ]|                                       [🤖]                          |
|                       |                                    ( Sparkle )                      |
| PINNED                |                                                                     |
| [💬] অসমৰ বুৰঞ্জী  📌 |                       নমস্কাৰ! মই আপোনাক কিদৰে                       |
|                       |                              সহায় কৰিব পাৰোঁ?                      |
| TODAY                 |                                                                     |
| [💬] Python Scraper   |       AssameseGPT is optimized for native Assamese comprehension,    |
| [💬] ব্যাকৰণ প্ৰশ্নোত্তৰ|       multilingual reasoning, and coding assistance.                |
|                       |                                                                     |
| YESTERDAY             |   +-------------------------------+ +-------------------------------+   |
| [💬] Translation Demo |   | [✨] Culture                  | | [📖] Language                 |   |
|                       |   | ৰঙালী বিহুৰ তাৎপৰ্য           | | অসমীয়া ব্যাকৰণ আৰু প্ৰয়োগ   |   |
| PREVIOUS 7 DAYS       |   | অসমৰ লোকসংস্কৃতি আৰু তিনিটি...| | বিভক্তি, প্ৰত্যয় আৰু বাক্য...|   |
| [💬] Machine Learning |   |                    [ সোধক -> ]| |                    [ সোধক -> ]|   |
|                       |   +-------------------------------+ +-------------------------------+   |
|                       |   +-------------------------------+ +-------------------------------+   |
|                       |   | [💻] Code                     | | [🌐] Creative                 |   |
|                       |   | Python ৱেব স্ক্ৰেপাৰ          | | ইংৰাজী-অসমীয়া অনুবাদ         |   |
|                       |   | BeautifulSoup আৰু Requests... | | শুদ্ধ ভাবানুবাদ আৰু প্ৰকাশ...  |   |
|                       |   |                    [ সোধক -> ]| |                    [ সোধক -> ]|   |
|                       |   +-------------------------------+ +-------------------------------+   |
|                       |                                                                     |
|                       |   +-------------------------------------------------------------+   |
|                       |   | অসমীয়া বা ইংৰাজীত প্ৰশ্ন সোধক... (Ask here...)             |   |
|                       |   |                                                             |   |
|                       |   | [📎] [🎤]  (🌐 AssameseGPT 74M)                        [ ↑ ]|   |
|                       |   +-------------------------------------------------------------+   |
| [Avatar] Debashish    |      AssameseGPT can make mistakes. Verify important details.       |
| Researcher      [^]   |                                                                     |
+-----------------------+---------------------------------------------------------------------+
```

---

### 2.2 Active Chat Thread (Messages & Code)

```text
+-----------------------+---------------------------------------------------------------------+
| [🤖] AssameseGPT [<-] | [≡] [ 🤖 AssameseGPT 74M [v] ]             [ Share ]  [+]  [☀️/🌙]  |
+-----------------------+---------------------------------------------------------------------+
| [ + নতুন বাৰ্তালাপ ⌘K]  |                                                                     |
| [ 🔍 Search chats... ]|                                       +-------------------------+   |
|                       |                                       | আহোম ৰাজবংশৰ প্ৰতিষ্ঠাতা|   |
| TODAY                 |                                       | কোন আছিল?               |   |
| [💬] আহোম ৰাজবংশ  📌  |                                       +-------------------------+   |
|                       |                                                                     |
|                       |   [🤖] AssameseGPT [AssameseGPT 74M]                                |
|                       |   স্বৰ্গদেউ চাওলুং চুকাফা আহোম ৰাজবংশৰ প্ৰতিষ্ঠাতা আছিল।             |
|                       |   তেওঁ ১২২৮ খ্ৰীষ্টাব্দত পাটকাই পাহাৰ পাৰ হৈ অসমত প্ৰৱেশ কৰে।       |
|                       |                                                                     |
|                       |   | বিষয়         | বিৱৰণ                         |                 |
|                       |   | ------------- | ----------------------------- |                 |
|                       |   | প্ৰতিষ্ঠাতা   | চাওলুং চুকাফা                 |                 |
|                       |   | প্ৰথম ৰাজধানী | চৰাইদেউ                       |                 |
|                       |                                                                     |
|                       |   [ Copy ]  [ 🔄 পুনৰ চেষ্টা কৰক ]                                  |
|                       |                                                                     |
|                       |                                       +-------------------------+   |
|                       |                                       | Python CSV parser code? |   |
|                       |                                       +-------------------------+   |
|                       |                                                                     |
|                       |   [🤖] AssameseGPT [AssameseGPT 74M]                                |
|                       |   Here is the Python script:                                        |
|                       |   +-------------------------------------------------------------+   |
|                       |   | PYTHON                                         [ Copy code ]|   |
|                       |   |-------------------------------------------------------------|   |
|                       |   | import pandas as pd                                         |   |
|                       |   | df = pd.read_csv("data.csv")                                |   |
|                       |   | print(df.describe())                                        |   |
|                       |   +-------------------------------------------------------------+   |
|                       |   [ Copy ]  [ 🔄 পুনৰ চেষ্টা কৰক ]                                  |
|                       |                                                                     |
|                       |   +-------------------------------------------------------------+   |
|                       |   | অসমীয়া বা ইংৰাজীত প্ৰশ্ন সোধক... (Ask here...)             |   |
|                       |   |                                                             |   |
|                       |   | [📎] [🎤]  (🌐 AssameseGPT 74M)                        [ ■ ]|   |
|                       |   +-------------------------------------------------------------+   |
| [Avatar] Debashish    |      AssameseGPT can make mistakes. Verify important details.       |
| Researcher      [^]   |                                                                     |
+-----------------------+---------------------------------------------------------------------+
```

---

### 2.3 Mobile View (Drawer Overlay)

```text
+-----------------------------+
| [≡] AssameseGPT 74M  [+] [☀️]|  <- Mobile Top Header
+-----------------------------+
|                             |
|  [======================]   |  <- Slide-over Drawer (Width: 280px)
|  | [🤖] AssameseGPT [X] |   |     Backdrop Blur behind it
|  |----------------------|   |
|  | [ + New Chat ]       |   |
|  | [ 🔍 Search ]        |   |
|  |                      |   |
|  | TODAY                |   |
|  | [💬] আহোম ৰাজবংশ     |   |
|  | [💬] Python Code     |   |
|  |                      |   |
|  | [User Profile]       |   |
|  +======================+   |
|                             |
|  +-----------------------+  |
|  | Input...         [ ↑ ]|  |  <- Sticky Mobile Input
|  +-----------------------+  |
+-----------------------------+
```

---

## 3. Settings Page (`/settings`)

```text
+---------------------------------------------------------------------------------------------+
| [ <- ]  ছেটিংছ (Settings)                                                            [☀️/🌙] |
|         Configure model parameters, language preferences and chat behavior.                 |
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | [🧠] Default AI Model                                                               |   |
|   | Select which model to initialize new conversations with.                            |   |
|   |                                                                                     |   |
|   | +-----------------------+ +-----------------------+ +-----------------------+       |   |
|   | | AssameseGPT 74M   [✓] | | AssameseGPT 17M       | | Research v2           |       |   |
|   | | Flagship Native Model | | Ultra Lightweight     | | Multilingual & Code   |       |   |
|   | | 74M Parameters        | | 17M Parameters        | | 125M Parameters       |       |   |
|   | +-----------------------+ +-----------------------+ +-----------------------+       |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | [🎛️] Inference Parameters                                                            |   |
|   |                                                                                     |   |
|   | Temperature: 0.70 [Balanced]                                                        |   |
|   | [---O-----------------------------------------------------------------] 0.0 - 1.0   |   |
|   |                                                                                     |   |
|   | Token Streaming Velocity:                                                           |   |
|   | [ Fast ]   [ *Natural* ]   [ Slow ]                                                 |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | [🤖] System Prompt (মডেলৰ নীতি-নিৰ্দেশনা)                                           |   |
|   | Define the default persona, tone and cultural guidelines for AssameseGPT.           |   |
|   |                                                                                     |   |
|   | +---------------------------------------------------------------------------------+ |   |
|   | | You are AssameseGPT, a helpful, culturally grounded and respectful AI assistant | |   |
|   | | specializing in Assamese language, history, literature, and programming...      | |   |
|   | +---------------------------------------------------------------------------------+ |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | [🛡️] Data Management (বিপজ্জনক অঞ্চল)                                               |   |
|   | Permanently delete all stored conversations from local browser storage.             |   |
|   |                                                                                     |   |
|   | [ 🗑️ Clear All Chat History ]                                                       |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   [ 🔄 Restore Defaults ]                                            [ 💾 Save Configuration]|
+---------------------------------------------------------------------------------------------+
```

---

## 4. User Profile Page (`/profile`)

```text
+---------------------------------------------------------------------------------------------+
| [ <- ]  মোৰ প্ৰফাইল (User Profile)                                                   [☀️/🌙] |
|         Manage your account credentials, tier status, and usage metrics.                    |
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   |  ( Avatar )   দেবাশীষ কাশ্যপ (Debashish)  [ ✨ Researcher Tier ]                    |   |
|   |               debashish@assamesegpt.ai                                              |   |
|   |               [📅] Joined 2026   •   [🟢] Active Member                             |   |
|   +-------------------------------------------------------------------------------------+   |
|                                                                                             |
|   +-----------------------+ +-----------------------+ +-----------------------+             |
|   | Total Chats           | | Messages Exchanged    | | Model Access Tier     |             |
|   |          18           | |          142          | |      Full (74M)       |             |
|   | Stored in browser     | | Across all models     | | No quota limit        |             |
|   +-----------------------+ +-----------------------+ +-----------------------+             |
|                                                                                             |
|   +-------------------------------------------------------------------------------------+   |
|   | Account Preferences                                                                 |   |
|   |                                                                                     |   |
|   | Display Name                                                                        |   |
|   | [ দেবাশীষ কাশ্যপ                                                                  ] |   |
|   |                                                                                     |   |
|   | Email Address (Locked)                                                              |   |
|   | [ debashish@assamesegpt.ai                                                        ] |   |
|   |                                                                                     |   |
|   | Preferred Language                                                                  |   |
|   | [ অসমীয়া (Assamese)                                                          [v] ] |   |
|   |                                                                                     |   |
|   |                                                                   [ 💾 Save Profile ]|   |
|   +-------------------------------------------------------------------------------------+   |
+---------------------------------------------------------------------------------------------+
```

---

## 5. Login Page (`/login`)

```text
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|                                           [🤖]                                              |
|                                  Welcome to AssameseGPT                                     |
|                        Sign in to sync conversations & unlock models.                       |
|                                                                                             |
|                         +-----------------------------------------+                         |
|                         | Email                                   |                         |
|                         | [ ✉️  name@domain.com                  ] |                         |
|                         |                                         |                         |
|                         | Password                       Forgot?  |                         |
|                         | [ 🔒  ••••••••••••••••                 ] |                         |
|                         |                                         |                         |
|                         | [            Sign In  ->               ] |                         |
|                         |                                         |                         |
|                         | --------------- OR GUEST ---------------|                         |
|                         |                                         |                         |
|                         | [          Continue as Guest           ] |                         |
|                         +-----------------------------------------+                         |
|                                                                                             |
|                                Don't have an account? Sign up                               |
|                                                                                             |
+---------------------------------------------------------------------------------------------+
```

---

## 6. Signup Page (`/signup`)

```text
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|                                           [🤖]                                              |
|                                     Create an Account                                       |
|                       Get started with native North East AI in seconds.                     |
|                                                                                             |
|                         +-----------------------------------------+                         |
|                         | Full Name                               |                         |
|                         | [ 👤  e.g. দেৱজিৎ বৰুৱা                ] |                         |
|                         |                                         |                         |
|                         | Email                                   |                         |
|                         | [ ✉️  name@domain.com                  ] |                         |
|                         |                                         |                         |
|                         | Password                                |                         |
|                         | [ 🔒  ••••••••••••••••                 ] |                         |
|                         |                                         |                         |
|                         | [          Create Account  ->          ] |                         |
|                         +-----------------------------------------+                         |
|                                                                                             |
|                                 Already have an account? Sign in                            |
|                                                                                             |
+---------------------------------------------------------------------------------------------+
```
