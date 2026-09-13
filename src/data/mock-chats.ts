import { Conversation, Message } from "@/types/chat";

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: "conv-1",
    title: "অসমৰ বুৰঞ্জী আৰু আহোম ৰাজত্ব",
    createdAt: Date.now() - 1000 * 60 * 30, // 30 mins ago
    updatedAt: Date.now() - 1000 * 60 * 15,
    modelId: "assamese-gpt-74m",
    isPinned: true,
  },
  {
    id: "conv-2",
    title: "Python Data Science Example",
    createdAt: Date.now() - 1000 * 60 * 60 * 24, // Yesterday
    updatedAt: Date.now() - 1000 * 60 * 60 * 22,
    modelId: "assamese-gpt-74m",
    isPinned: false,
  },
  {
    id: "conv-3",
    title: "অসমীয়া কবিতা আৰু সাহিত্য",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    modelId: "assamese-gpt-17m",
    isPinned: false,
  },
];

export const INITIAL_MESSAGES: Record<string, Message[]> = {
  "conv-1": [
    {
      id: "msg-1-1",
      conversationId: "conv-1",
      role: "user",
      content: "আহোম ৰাজবংশৰ প্ৰতিষ্ঠাতা কোন আছিল আৰু তেওঁ কেতিয়া অসমত প্ৰৱেশ কৰিছিল?",
      createdAt: Date.now() - 1000 * 60 * 30,
    },
    {
      id: "msg-1-2",
      conversationId: "conv-1",
      role: "assistant",
      content: `**আহোম ৰাজবংশৰ প্ৰতিষ্ঠাতা স্বৰ্গদেউ চাওলুং চুকাফা** আছিল।

তেওঁ ১২২৮ খ্ৰীষ্টাব্দত পাটকাই পৰ্বত পাৰ হৈ সৌমাৰ খণ্ডত (বৰ্তমানৰ উজনি অসম) প্ৰৱেশ কৰিছিল আৰু ১২৫৩ খ্ৰীষ্টাব্দত চৰাইদেউত প্ৰথম ৰাজধানী স্থাপন কৰিছিল।

### প্ৰধান ঐতিহাসিক তথ্যসমূহ:

| বিষয় | বিৱৰণ |
| :--- | :--- |
| **প্ৰতিষ্ঠাতা** | চাওলুং চুকাফা (Chao Lung Siu-Ka-Pha) |
| **প্ৰৱেশ কাল** | ১২২৮ খ্ৰীষ্টাব্দ |
| **প্ৰথম ৰাজধানী** | চৰাইদেউ (১Group/১২৫৩ খ্ৰীঃ) |
| **ৰাজত্ব কাল** | প্ৰায় ৬০০ বছৰ (১২২৮ - ১৮২৬) |

> "চুকাফাই বিভিন্ন থলুৱা জনগোষ্ঠী যেনে মৰাণ, বৰাহী আদিক মৰম আৰু ভাতৃত্ববোধেৰে আঁকোৱালি লৈ এক বৃহত্তৰ অসমীয়া জাতি গঠনৰ ভেটি স্থাপন কৰিছিল।"

আপুনি আহোম প্ৰশাসন বা যুদ্ধ কৌশল (যেনে শৰাইঘাটৰ যুদ্ধ) সম্পৰ্কে অধিক জানিব বিচাৰে নেকি?`,
      createdAt: Date.now() - 1000 * 60 * 28,
      model: "AssameseGPT 74M",
    },
  ],
  "conv-2": [
    {
      id: "msg-2-1",
      conversationId: "conv-2",
      role: "user",
      content: "How do I read a CSV file and calculate summary statistics using Pandas in Python?",
      createdAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
      id: "msg-2-2",
      conversationId: "conv-2",
      role: "assistant",
      content: `Here is a complete, production-ready example using **Python** and **Pandas** to load and analyze a CSV dataset:

\`\`\`python
import pandas as pd

# Load dataset from a CSV file
def analyze_dataset(file_path: str):
    try:
        # Read the CSV
        df = pd.read_csv(file_path)
        print(f"Dataset loaded successfully with {df.shape[0]} rows and {df.shape[1]} columns.\n")
        
        # Display first 5 rows
        print("--- First 5 rows ---")
        print(df.head())
        
        # Summary statistics
        print("\n--- Summary Statistics ---")
        summary = df.describe()
        print(summary)
        
        # Check missing values
        missing = df.isnull().sum()
        print("\n--- Missing Values Count ---")
        print(missing[missing > 0])
        
        return df
    except Exception as e:
        print(f"Error loading CSV file: {e}")
        return None

if __name__ == "__main__":
    df = analyze_dataset("data.csv")
\`\`\`

### Explanation:
1. \`pd.read_csv()\` parses the CSV stream with automatic header inferencing.
2. \`df.describe()\` gives quick numerical aggregates (\`mean\`, \`std\`, \`min\`, \`max\`, percentiles).
3. \`df.isnull().sum()\` detects any missing or null fields.`,
      createdAt: Date.now() - 1000 * 60 * 60 * 23,
      model: "AssameseGPT 74M",
    },
  ],
  "conv-3": [
    {
      id: "msg-3-1",
      conversationId: "conv-3",
      role: "user",
      content: "লক্ষ্মীনাথ বেজবৰুৱাৰ 'মোৰ দেশ' কবিতাটোৰ তাৎপৰ্য কি?",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    },
    {
      id: "msg-3-2",
      conversationId: "conv-3",
      role: "assistant",
      content: `ৰসৰাজ **লক্ষ্মীনাথ বেজবৰুৱা**ৰ 'অ' মোৰ আপোনাৰ দেশ' কবিতাটো অসমৰ জাতীয় সংগীত হিচাপে মান্যতা প্ৰাপ্ত।

এই গীতটিত অসমৰ প্ৰাকৃতিক সৌন্দৰ্য্য, নদী-উপত্যকা আৰু মাতৃভাষাৰ প্ৰতি গভীৰ প্ৰেম আৰু শ্ৰদ্ধা প্ৰকাশ পাইছে।

- **ৰচনা কাল**: ১৯০৯ চন (বাঁহী আলোচনীত প্ৰথম প্ৰকাশ)
- **সুৰকাৰ**: কমলা প্ৰসাদ আগৰৱালা
- **মূল ভাব**: দেশপ্ৰেম আৰু অসমীয়া জাতীয় চেতনাৰ উন্মেষ`,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3 + 60,
      model: "AssameseGPT 17M",
    },
  ],
};
