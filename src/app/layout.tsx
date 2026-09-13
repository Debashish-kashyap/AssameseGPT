import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AssameseGPT — Assamese AI. Built From Scratch.",
  description:
    "AssameseGPT is a world-class conversational AI platform powered by native Assamese language models, supporting Assamese, English, and multilingual conversations.",
  keywords: [
    "AssameseGPT",
    "Assamese AI",
    "Assam LLM",
    "Assamese Language Model",
    "ChatGPT Assamese",
    "North East AI",
  ],
  authors: [{ name: "Debashish Kashyap" }],
  openGraph: {
    title: "AssameseGPT — Assamese AI. Built From Scratch.",
    description:
      "World-class conversational AI platform powered by custom Assamese language models.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="as" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
