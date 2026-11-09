"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Beams from "@/components/ui/Beams";
import {
  ArrowUpRight,
  Star,
  Download,
  CheckCircle2,
  TrendingUp,
  Search,
  Sparkles,
  BarChart3,
  ShieldCheck,
  PhoneCall,
  Target,
  Sliders,
  LineChart,
} from "lucide-react";

/**
 * Plug in your custom image paths inside `/public` whenever ready.
 * Leave as `null` to use the built-in styled avatars/graphics.
 */
const IMAGE_SLOTS = {
  reviewer1: null as string | null, // e.g. "/images/google-ads/reviewer-1.jpg"
  reviewer2: null as string | null, // e.g. "/images/google-ads/reviewer-2.jpg"
  teamMember1: null as string | null, // e.g. "/images/google-ads/team-1.jpg"
  teamMember2: null as string | null, // e.g. "/images/google-ads/team-2.jpg"
};

const ORBITAL_CALLOUTS = [
  {
    label: "9.4/10 Avg. Quality Score",
    position: "top-[16%] left-[5%] xl:left-[10%]",
    delay: 0.1,
  },
  {
    label: "7.2× Avg. Search ROAS",
    position: "top-[12%] right-[5%] xl:right-[11%]",
    delay: 0.25,
  },
  {
    label: "-44% Cost Per Acquisition",
    position: "top-[38%] left-[2%] xl:left-[6%]",
    delay: 0.4,
  },
  {
    label: "94% Top-of-Page Share",
    position: "top-[36%] right-[2%] xl:right-[7%]",
    delay: 0.55,
  },
];

const TRUST_INDICATORS = [
  {
    metric: "7.2×",
    label: "Average Search ROAS",
    sub: "Across Search, PMax & Shopping",
    icon: TrendingUp,
  },
  {
    metric: "$24M+",
    label: "Google Ad Spend Managed",
    sub: "Profitably scaled across 40+ industries",
    icon: BarChart3,
  },
  {
    metric: "9.4/10",
    label: "Average Quality Score",
    sub: "Lower CPCs & top-of-page dominance",
    icon: ShieldCheck,
  },
];

const PROCESS_STEPS = [
  { name: "Keyword & Buyer Intent Audit", status: "done" },
  { name: "GTM & Enhanced Conversions", status: "done" },
  { name: "High-Intent Search & PMax Build", status: "active" },
  { name: "Negative Keyword Sculpting", status: "pending" },
  { name: "Target ROAS Smart Scaling", status: "pending" },
];

function AvatarSlot({
  src,
  initials,
  gradient,
}: {
  src: string | null;
  initials: string;
  gradient: string;
}) {
  if (src) {
    return (
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15 shrink-0">
        <Image src={src} alt={initials} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-xs font-bold text-[#07090E] border border-white/20 shrink-0 shadow-inner`}
    >
      {initials}
    </div>
  );
}

export default function GoogleAdsHero() {
  return (
    <div className="relative bg-[#06070A] text-white selection:bg-[#BAF235] selection:text-[#07090E] overflow-hidden">
      {/* =====================================================================
          FIXED WEBGL BEAMS BACKGROUND
      ===================================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={140}
          color="#605f5fff"
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(6,7,10,0.18) 0%, rgba(6,7,10,0.78) 70%, rgba(6,7,10,0.96) 100%)",
          }}
        />
      </div>

      {/* =====================================================================
          HERO + ORBITAL ARCS + BENTO DASHBOARD SECTION
      ===================================================================== */}
      <section className="relative z-10 pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto">
        {/* Concentric Orbital Circles (Evalin-inspired backdrop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[320px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] flex items-center justify-center"
        >
          <div className="absolute w-[520px] h-[520px] rounded-full border border-white/[0.06]" />
          <div className="absolute w-[780px] h-[780px] rounded-full border border-white/[0.05]" />
          <div className="absolute w-[1060px] h-[1060px] rounded-full border border-white/[0.04]" />
          <div className="absolute w-[620px] h-[340px] rounded-full bg-[#BAF235]/[0.07] blur-[130px]" />
        </div>

        {/* Floating Orbital Metric Callouts (Desktop) */}
        <div className="hidden lg:block">
          {ORBITAL_CALLOUTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className={`absolute ${item.position} z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0E1117]/85 backdrop-blur-md border border-white/[0.09] shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BAF235] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BAF235] shadow-[0_0_10px_#BAF235]" />
              </span>
              <span className="text-xs font-medium text-white/85 tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Centered Hero Copy */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-7"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#BAF235]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#BAF235]">
              Google Search • Performance Max • Shopping • YouTube
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.05]"
          >
            Own Page #1. Capture{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#BAF235] to-[#7CE852]">
              Buyers Ready to Act.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Stop burning budget on broad, low-intent clicks. We engineer
            precision Google Search, Performance Max, Shopping, and YouTube
            campaigns backed by GTM Enhanced Conversions and relentless negative
            keyword sculpting.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#BAF235] text-[#07090E] font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(186,242,53,0.35)] hover:bg-[#c8ff47] hover:shadow-[0_0_50px_rgba(186,242,53,0.55)] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Launch My Google Ads</span>
              <span className="w-7 h-7 rounded-full bg-[#07090E] text-[#BAF235] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-[#BAF235]" />
              <span>Book a Free Strategy Call</span>
            </Link>
          </motion.div>
        </div>

        {/* ===================================================================
            TRUST INDICATORS BAR (3 Proof Pillars)
        =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="relative z-20 mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5"
        >
          {TRUST_INDICATORS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0D1017]/85 border border-white/[0.08] backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:border-[#BAF235]/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#BAF235]/10 border border-[#BAF235]/25 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#BAF235]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.metric}
                    </span>
                    <span className="text-xs font-semibold text-[#BAF235]">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/45 mt-0.5">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ===================================================================
            EVALIN-INSPIRED BENTO GOOGLE ADS COMMAND CENTER
        =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="relative z-20 mt-12 p-3 sm:p-5 rounded-[32px] bg-[#0B0E14]/90 border border-white/[0.09] backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 pb-3 mb-3 border-b border-white/[0.06] text-xs text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              <span className="ml-2 font-mono text-[11px] text-white/50">
                LeadsInClick // Google Ads & GA4 Attribution Console
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#BAF235]">
              <span className="w-2 h-2 rounded-full bg-[#BAF235] animate-pulse" />
              Enhanced Conversions & Smart Bidding Active
            </div>
          </div>

          {/* 12-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* ---------------------------------------------------------------
                LEFT COLUMN (3 cols): Quick Stats + 5-Step PPC Process
            --------------------------------------------------------------- */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* Quick Stats Card */}
              <div className="p-5 rounded-2xl bg-[#11151E] border border-white/[0.07] flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    142k
                  </span>
                  <span className="text-xs text-white/55 text-right">
                    High-Intent Search Clicks
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                  <span className="text-2xl font-extrabold text-[#BAF235] tracking-tight">
                    41+
                  </span>
                  <span className="text-xs text-white/55 text-right">
                    Active Google Ad Accounts
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    5+
                  </span>
                  <span className="text-xs text-white/55 text-right">
                    Years Google Partner Mastery
                  </span>
                </div>
              </div>

              {/* Process Vertical Stepper Card */}
              <div className="p-5 rounded-2xl bg-[#11151E] border border-white/[0.07] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-white tracking-wide">
                      PPC Launch Roadmap
                    </h2>
                    <span className="text-[11px] font-mono text-[#BAF235] bg-[#BAF235]/10 px-2 py-0.5 rounded-md">
                      Step 3/5
                    </span>
                  </div>

                  <div className="relative pl-2 space-y-4">
                    {PROCESS_STEPS.map((step, i) => {
                      const isDone = step.status === "done";
                      const isActive = step.status === "active";
                      return (
                        <div
                          key={i}
                          className="relative flex items-center gap-3"
                        >
                          {i < PROCESS_STEPS.length - 1 && (
                            <span
                              className={`absolute left-[9px] top-5 w-[1.5px] h-5 ${
                                isDone ? "bg-[#BAF235]" : "bg-white/10"
                              }`}
                            />
                          )}
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                              isDone
                                ? "bg-[#BAF235] text-[#07090E]"
                                : isActive
                                ? "bg-[#BAF235]/20 border border-[#BAF235] text-[#BAF235] shadow-[0_0_10px_#BAF235]"
                                : "bg-white/[0.05] border border-white/15 text-white/40"
                            }`}
                          >
                            {isDone ? "✓" : i + 1}
                          </span>
                          <span
                            className={`text-xs font-medium ${
                              isDone || isActive
                                ? "text-white"
                                : "text-white/45"
                            }`}
                          >
                            {step.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/45">
                  <span>Avg. Campaign Go-Live</span>
                  <span className="text-white font-semibold">4–6 Days</span>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                RIGHT 9 COLUMNS: Top Row (Reviews + Assets) & Bottom Row (Campaign + Team)
            --------------------------------------------------------------- */}
            <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* TOP-LEFT (7 cols): Reviews Card */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-[#11151E] border border-white/[0.07] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white">
                      Client Search ROI
                    </h2>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/60">
                      Verified Google Ads Accounts
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#BAF235]/10 border border-[#BAF235]/25 px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-[#BAF235] text-[#BAF235]" />
                    <span className="text-xs font-bold text-[#BAF235]">
                      5/5
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Review 1 */}
                  <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] flex flex-col justify-between">
                    <p className="text-xs text-white/70 leading-relaxed">
                      &ldquo;They restructured our bloated Search campaigns and
                      added 1,800+ negative keywords. Our CPA dropped by 48% and
                      inbound phone calls tripled in 45 days.&rdquo;
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <AvatarSlot
                          src={IMAGE_SLOTS.reviewer1}
                          initials="BH"
                          gradient="from-[#BAF235] to-[#4ADE80]"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">
                            Brandon Hayes
                          </div>
                          <div className="text-[10px] text-white/45">
                            Managing Partner, Apex HVAC
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-[#BAF235] text-[#BAF235]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] flex flex-col justify-between">
                    <p className="text-xs text-white/70 leading-relaxed">
                      &ldquo;Their Performance Max + Shopping feed overhaul took
                      our Google Ads ROAS from 2.6× to 7.9× while scaling
                      monthly spend from $15k to $65k.&rdquo;
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <AvatarSlot
                          src={IMAGE_SLOTS.reviewer2}
                          initials="CR"
                          gradient="from-[#38BDF8] to-[#818CF8]"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">
                            Clara Robinson
                          </div>
                          <div className="text-[10px] text-white/45">
                            VP E-Commerce, Lumina Living
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-[#BAF235] text-[#BAF235]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP-RIGHT (5 cols): PPC Assets & Negative Keyword Vault Card */}
              <div className="lg:col-span-5 p-4 rounded-2xl bg-[#11151E] border border-white/[0.07] flex flex-col justify-between">
                {/* Gradient Visual Container with 2 Frosted Glass Folders */}
                <div className="relative rounded-xl p-4 bg-gradient-to-br from-[#BAF235]/25 via-[#18261B] to-[#0D131D] border border-[#BAF235]/25 overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {/* Folder 1 */}
                    <div className="p-3.5 rounded-xl bg-[#0B0E14]/75 backdrop-blur-md border border-white/10 hover:border-[#BAF235]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#BAF235]/15 border border-[#BAF235]/30 flex items-center justify-center mb-2.5">
                        <Search className="w-4 h-4 text-[#BAF235]" />
                      </div>
                      <div className="text-xs font-bold text-white">
                        Search Intent Map
                      </div>
                      <div className="text-[10px] text-white/50 mt-0.5">
                        Exact & Phrase Match Clusters
                      </div>
                    </div>

                    {/* Folder 2 */}
                    <div className="p-3.5 rounded-xl bg-[#0B0E14]/75 backdrop-blur-md border border-white/10 hover:border-[#BAF235]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center mb-2.5">
                        <Sliders className="w-4 h-4 text-[#38BDF8]" />
                      </div>
                      <div className="text-xs font-bold text-white">
                        GTM + GA4 Setup
                      </div>
                      <div className="text-[10px] text-white/50 mt-0.5">
                        Enhanced & Offline Sync
                      </div>
                    </div>
                  </div>
                </div>

                {/* Downloadable Deliverable Pills */}
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-white/[0.06] hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#BAF235]" />
                      <span className="text-xs font-mono text-white/80">
                        Search_Intent_Blueprint.fig
                      </span>
                    </div>
                    <Download className="w-3.5 h-3.5 text-white/45" />
                  </div>

                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-white/[0.06] hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                      <span className="text-xs font-mono text-white/80">
                        Negative_Keywords_Vault.csv
                      </span>
                    </div>
                    <Download className="w-3.5 h-3.5 text-white/45" />
                  </div>
                </div>
              </div>

              {/* BOTTOM-LEFT (7 cols): Active Google Ads Campaign Telemetry */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-[#11151E] border border-white/[0.07] flex flex-col justify-between">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-white/45">
                        Live Campaign
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BAF235] bg-[#BAF235]/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> tROAS Smart Bidding
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">
                      High-Intent Search + Performance Max Engine
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-white/50 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]">
                    Impression Share: 94.2%
                  </span>
                </div>

                {/* 3 Big KPI Columns */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/[0.05]">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#BAF235]">
                      7.8×
                    </div>
                    <div className="text-[11px] text-white/50 mt-1">
                      Blended Google ROAS
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/[0.05]">
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      $14.20
                    </div>
                    <div className="text-[11px] text-white/50 mt-1">
                      Avg. Cost Per Lead
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-white/[0.05]">
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      +340%
                    </div>
                    <div className="text-[11px] text-white/50 mt-1">
                      Qualified Sales Calls
                    </div>
                  </div>
                </div>

                {/* Progress Bar Footer */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-white/55 mb-1.5">
                    <span>Search Exact-Match & PMax Asset Group Scaling</span>
                    <span className="text-[#BAF235] font-semibold">
                      9.6/10 Quality Score
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#BAF235] to-[#4ADE80] shadow-[0_0_12px_#BAF235]" />
                  </div>
                </div>
              </div>

              {/* BOTTOM-RIGHT (5 cols): Dedicated Google Ads Growth Pod */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#11151E] border border-white/[0.07] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Your Google Ads Pod
                    </h3>
                    <p className="text-[11px] text-white/45">
                      Certified Search, Shopping & GTM specialists
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#BAF235] bg-[#BAF235]/10 px-2.5 py-1 rounded-full">
                    Google Partner
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Member 1 */}
                  <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AvatarSlot
                        src={IMAGE_SLOTS.teamMember1}
                        initials="AM"
                        gradient="from-[#BAF235] to-[#10B981]"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">
                          Arjun Mehta
                        </div>
                        <div className="text-[10px] text-white/45">
                          Senior Google PPC Architect • Added 140 Negatives
                        </div>
                      </div>
                    </div>
                    <Target className="w-4 h-4 text-[#BAF235]" />
                  </div>

                  {/* Member 2 */}
                  <div className="p-3 rounded-xl bg-[#0B0E14] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AvatarSlot
                        src={IMAGE_SLOTS.teamMember2}
                        initials="NK"
                        gradient="from-[#60A5FA] to-[#A78BFA]"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">
                          Neha Kapoor
                        </div>
                        <div className="text-[10px] text-white/45">
                          GTM & GA4 Attribution Lead • Verified Offline Sync
                        </div>
                      </div>
                    </div>
                    <LineChart className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/45">
                  <span>Search Term Pruning</span>
                  <span className="text-white font-medium">
                    Daily Waste Elimination
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}