/**
 * Mock AI Streaming Service for AssameseGPT
 * Simulates realistic token-by-token streaming with support for Assamese & English.
 */

interface StreamOptions {
  onChunk: (chunk: string) => void;
  onComplete: (fullText: string) => void;
  onError?: (error: Error) => void;
  signal?: AbortSignal;
}

const PRESET_ANSWERS: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["বিহু", "bihu", "ৰঙালী"],
    response: `**বিহু** অসমৰ জাতীয় উৎসৱ আৰু অসমীয়া সংস্কৃতিৰ মূল প্ৰাণস্পন্দন। অসমত মূলতঃ তিনিটি বিহু পালন কৰা হয়:

1. **ৰঙালী বিহু (ব’হাগ বিহু)**: বসন্তকালত চ’ত-ব’হাগৰ সংক্ৰান্তিত উদযাপিত হয়। ই প্ৰকৃতিৰ নতুনত্ব, যৌৱন আৰু আনন্দৰ উৎসৱ। এই বিহুত হুঁচৰি গোৱা, বিহু নাচ আৰু জেতুকীয়া ৰং সনা হয়।
2. **কঙালী বিহু (কাতি বিহু)**: কাতি মাহত পথাৰৰ শস্যৰ মংগল কামনা কৰি আৰু ঘৰে ঘৰে তুলসীৰ তলত আৰু পথাৰত আকাশববন্তি জ্বলোৱা হয়। ই আধ্যাত্মিক আৰু সংযমৰ বিহু।
3. **ভোগালী বিহু (মাঘ বিহু)**: পুহ-মাঘৰ সংক্ৰান্তিত খেতি চপোৱাৰ পিছত আনন্দ-ভোজ, মেজি আৰু ভেলাঘৰ জ্বলাই পালন কৰা হয়।

> অসমীয়াৰ বাবে বিহু কেৱল এটা উৎসৱ নহয়, ই আমাৰ পৰিচয়, কৃষ্টি আৰু একতাৰ প্ৰতীক।`,
  },
  {
    keywords: ["ব্যাকৰণ", "grammar", "শব্দ", "বাক্য"],
    response: `**অসমীয়া ব্যাকৰণৰ মৌলিক গাঁথনি আৰু বৈশিষ্ট্যসমূহ:**

অসমীয়া ভাষা ইন্দো-আৰ্য্য ভাষা পৰিয়ালৰ অন্তৰ্গত। ইয়াৰ ব্যাকৰণত তলত দিয়া বিশেষত্বসমূহ দেখা যায়:

### ১. পদ আৰু বিভক্তি
- **প্ৰথমা বিভক্তি**: কোনো চিহ্ন নাথাকে বা ‘এ/য়ে’ যোগ হয় (যেনে: ৰামে, সি)।
- **দ্বিতীয়া বিভক্তি**: ‘ক’ যোগ হয় (যেনে: তাক, ল’ৰাটোক)।
- **তৃতীয়া বিভক্তি**: ‘ৰে/দি/দ্বাৰা’ (যেনে: হাতেৰে, দাৰে)।
- **ষষ্ঠী বিভক্তি**: ‘ৰ/অৰ’ (যেনে: অসমৰ, গছৰ)।

### ২. নিৰ্দিষ্টতাবাচক প্ৰত্যয় (Classifiers)
অসমীয়া ভাষাত বস্তু বা ব্যক্তিৰ আকাৰ/স্বভাৱ অনুসৰি বিশেষ প্ৰত্যয় ব্যৱহাৰ হয়:
- **জন/জনা**: সন্মানীয় ব্যক্তি (শিক্ষকজন, পণ্ডিতজনা)
- **টো/খন**: বস্তু বা প্ৰাণী (কিতাপখন, কুকুৰটো)
- **ডাল/ডালি**: দীঘলীয়া বস্তু (বাঁহডাল, ৰছীডাল)

ইয়াৰ দ্বাৰা বাক্যৰ অৰ্থ অত্যন্ত স্পষ্ট আৰু জীৱন্ত হৈ উঠে।`,
  },
  {
    keywords: ["python", "code", "programming", "স্কেপাৰ", "scraper"],
    response: `নিশ্চয়! তলত **Python** ব্যৱহাৰ কৰি বাতৰিৰ শিৰোনাম সংগ্ৰহ কৰিবলৈ এটা সুন্দৰ আৰু কাৰ্যকৰী কোড দিয়া হ’ল:

\`\`\`python
import requests
from bs4 import BeautifulSoup

def scrape_headlines(target_url: str):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    
    try:
        response = requests.get(target_url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        
        # শিৰোনামসমূহ (h1, h2, h3) বিচাৰক
        headlines = []
        for tag in soup.find_all(["h1", "h2"]):
            title = tag.get_text(strip=True)
            if title and len(title) > 10:
                headlines.append(title)
                
        print(f"মুঠ {len(headlines)} টা শিৰোনাম পোৱা গ'ল:\n")
        for idx, item in enumerate(headlines[:10], 1):
            print(f"{idx}. {item}")
            
        return headlines
        
    except Exception as err:
        print(f"Error occurred: {err}")
        return []

if __name__ == "__main__":
    # উদাহৰণ স্বৰূপে এটা বাতৰি ৱেবচাইটৰ URL
    url = "https://example-news.com"
    scrape_headlines(url)
\`\`\`

### কেনেদৰে ব্যৱহাৰ কৰিব:
1. প্ৰথমে প্ৰয়োজনীয় লাইব্ৰেৰী সংস্থাপন কৰক: \`pip install requests beautifulsoup4\`
2. স্ক্ৰিপ্টটো চলাওক। ই ৱেবচাইটৰ পৰা প্ৰধান শিৰোনামসমূহ উলিয়াই দিব।`,
  },
  {
    keywords: ["অনুবাদ", "translate", "translation"],
    response: `**অসমীয়া আৰু ইংৰাজী অনুবাদৰ ক্ষেত্ৰত লক্ষ্য ৰাখিবলগীয়া মূল দিশসমূহ:**

ভাৱানুবাদ (Contextual Translation) আক্ষৰিক অনুবাদতকৈ (Literal Translation) বহু বেছি কাৰ্যকৰী। 

উদাহৰণস্বৰূপ:
- **English**: *"A stitch in time saves nine."*
- **আক্ষৰিক অনুবাদ**: সময়মতে এটা চিলাই কৰিলে নটা বাচে। ❌
- **ভাৱানুবাদ (ফকৰা যোজনা)**: *সময়ৰ শৰে আৰু সতিনীৰ জৰে মানুহক মাৰে* বা *সময়ৰ কাম সময়ত কৰাই বুদ্ধিমানৰ লক্ষণ।* ✅

AssameseGPT-য়ে অসমৰ সমাজ জীৱনৰ জতুৱা ঠাঁচ আৰু ফকৰা-যোজনা মনত ৰাখি স্বাভাৱিক অনুবাদ আগবঢ়ায়।`,
  },
];

function getAppropriateResponse(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase();
  
  for (const preset of PRESET_ANSWERS) {
    if (preset.keywords.some((k) => lowerPrompt.includes(k.toLowerCase()))) {
      return preset.response;
    }
  }

  // Multilingual dynamic fallback
  return `আপোনাৰ প্ৰশ্নৰ বাবে ধন্যবাদ। **AssameseGPT** য়ে অসমীয়া আৰু বহুভাষিক প্ৰশ্নোত্তৰত সহায় কৰিবলৈ সদায় সাজু।

আপুনি উল্লেখ কৰা প্ৰশ্ন:
> "${prompt.trim()}"

### মূল পৰ্যালোচনা:
- **প্ৰসংগ**: আপোনাৰ বিষয়টো অসমীয়া ভাষা-সংস্কৃতি, প্ৰযুক্তি বা সাধাৰণ জ্ঞানৰ সৈতে জড়িত।
- **বিশ্লেষণ**: আমি ভাষা মডেলৰ জৰিয়তে নিৰ্ভুল আৰু উচ্চ মানৰ তথ্য উপস্থাপন কৰিবলৈ প্ৰয়াস কৰিছোঁ।

\`\`\`bash
# AssameseGPT Pipeline status:
STATUS="ONLINE"
LATENCY="18ms"
TOKEN_RATE="42 tokens/sec"
\`\`\`

আপুনি এই বিষয়ত কোনো বিশেষ দিশ বা অতিৰিক্ত উদাহৰণ জানিব বিচাৰে নেকি? অনুগ্ৰহ কৰি কওক!`;
}

export function streamAiResponse(
  prompt: string,
  options: StreamOptions
): { cancel: () => void } {
  const fullText = getAppropriateResponse(prompt);
  let currentIndex = 0;
  let cancelled = false;

  // Split text into tokens / character groups for ultra-realistic streaming
  // We chunk by 2-5 characters to emulate BPE tokens
  const chunks: string[] = [];
  let i = 0;
  while (i < fullText.length) {
    // vary token sizes between 2 and 6
    const chunkSize = Math.floor(Math.random() * 4) + 2;
    chunks.push(fullText.slice(i, i + chunkSize));
    i += chunkSize;
  }

  const intervalId = setInterval(() => {
    if (cancelled || options.signal?.aborted) {
      clearInterval(intervalId);
      return;
    }

    if (currentIndex < chunks.length) {
      const chunk = chunks[currentIndex];
      options.onChunk(chunk);
      currentIndex++;
    } else {
      clearInterval(intervalId);
      options.onComplete(fullText);
    }
  }, 22); // ~45 tokens/sec

  return {
    cancel: () => {
      cancelled = true;
      clearInterval(intervalId);
    },
  };
}
