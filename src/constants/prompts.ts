export interface StarterPrompt {
  id: string;
  category: "Language" | "Culture" | "Code" | "Creative";
  title: string;
  subtitle: string;
  prompt: string;
  iconName: string;
}

export const STARTER_PROMPTS: StarterPrompt[] = [
  {
    id: "bihu-culture",
    category: "Culture",
    title: "ৰঙালী বিহুৰ তাৎপৰ্য",
    subtitle: "অসমৰ লোকসংস্কৃতি আৰু তিনিটি বিহু",
    prompt: "ৰঙালী বিহুৰ ঐতিহ্য, হুঁচৰি আৰু অসমীয়া সংস্কৃতিত ইয়াৰ গুৰুত্বৰ বিষয়ে বিতংভাৱে কোৱা।",
    iconName: "Sparkles",
  },
  {
    id: "assamese-grammar",
    category: "Language",
    title: "অসমীয়া ব্যাকৰণ আৰু প্ৰয়োগ",
    subtitle: "বিভক্তি, প্ৰত্যয় আৰু বাক্য গঠন",
    prompt: "অসমীয়া ব্যাকৰণৰ প্ৰধান বিভক্তি আৰু পদান্বয়ী অব্যয়ৰ নিয়মবোৰ উদাহৰণসহ বুজাই দিয়া।",
    iconName: "BookOpen",
  },
  {
    id: "python-coding",
    category: "Code",
    title: "Python ৱেব স্ক্ৰেপাৰ",
    subtitle: "BeautifulSoup আৰু Requests লাইব্ৰেৰী",
    prompt: "Python ব্যৱহাৰ কৰি বাতৰি ৱেবচাইটৰ শিৰোনাম সংগ্ৰহ কৰিব পৰাকৈ এটা সৰল Web Scraper লিখি দিয়া।",
    iconName: "Code2",
  },
  {
    id: "translation-bilingual",
    category: "Creative",
    title: "ইংৰাজী-অসমীয়া অনুবাদ",
    subtitle: "শুদ্ধ ভাবানুবাদ আৰু প্ৰকাশভংগী",
    prompt: "Please translate and explain the difference between direct translation and cultural localization in Assamese.",
    iconName: "Languages",
  },
];
