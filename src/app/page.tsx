"use client";

import React from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { DemoPreview } from "@/components/landing/demo-preview";
import { Highlights } from "@/components/landing/highlights";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Footer } from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <DemoPreview />
        <Highlights />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
