"use client";

import React from "react";
import Beams from "@/components/ui/Beams";
import GmbHero from "./GmbHero";
import GmbTrustSection from "./GmbTrustSection";
import GmbProcessSection from "./GmbProcessSection";
import GmbClosingSection from "./GmbClosingSection";

export default function GoogleMyBusinessPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      {/* Global Fixed Animated Beams Background (Single WebGL Instance) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Beams
          color="#605f5fff"
          beamWidth={140}
          rotation={30}
          speed={1}
          glow={0.6}
          waveLength={233}
          depth={1}
          sharpness={0.6}
          twist={0}
          fillLight={0.3}
          brightness={1.6}
          grain={0.35}
          variation={0}
          mouseInteraction
          mouseStrength={1}
          fade={0}
          opacity={1}
          intro
          lightMode={false}
        />
      </div>

      {/* Page Sections */}
      <div className="relative z-10">
        {/* Section 1: GMB Creation, Optimization & Local 3-Pack Hero */}
        <GmbHero />

        {/* Section 2: Why Choose Us & Local Map Pack Dominance Bento Grid */}
        <GmbTrustSection />

        {/* Section 3: 4-Step GMB Creation, Optimization & Ranking Process */}
        <GmbProcessSection />

        {/* Section 4: GMB FAQ & Final Local Ranking Audit CTA */}
        <GmbClosingSection />
      </div>
    </main>
  );
}