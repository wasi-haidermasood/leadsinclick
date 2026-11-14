"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Film,
  Server,
  Sliders,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./MetaAdsHero";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    step: "01",
    badge: "Days 1 – 5",
    title: "Scroll-Stopping Reels & Feed Creative Lab",
    description:
      "Creative is the new targeting on Meta. We script, design, and edit native 9:16 Instagram Reels, Stories, and high-converting Facebook video & carousel ads engineered to hook viewers in the first 2 seconds.",
    icon: Film,
    metrics: [
      { label: "Thumbstop Rate", value: "41.8%" },
      { label: "Ad Formats", value: "Reels / Feed / Story" },
    ],
    tags: ["IG Reels Hooks", "FB Video & Carousels", "UGC Ad Scripting"],
    accent: "from-[#D92B6B] to-[#981544]",
  },
  {
    step: "02",
    badge: "Days 6 – 10",
    title: "Server-Side Meta Pixel & CAPI Architecture",
    description:
      "Before spending a dollar, we bulletproof your attribution. We install the Meta Pixel alongside server-side Conversions API (CAPI) and event deduplication so every Facebook and Instagram lead or checkout is tracked accurately.",
    icon: Server,
    metrics: [
      { label: "Event Match Score", value: "9.3 / 10" },
      { label: "Attribution", value: "Pixel + Server CAPI" },
    ],
    tags: ["Meta CAPI Setup", "Event Deduplication", "Offline CRM Sync"],
    accent: "from-[#1877F2] to-[#0D5BD9]",
  },
  {
    step: "03",
    badge: "Days 11 – 21",
    title: "Full-Funnel Advantage+ & Lead Form Testing",
    description:
      "We launch structured testing across Facebook Instant Lead Forms, Instagram DM automation, and high-intent landing pages—combining broad AI targeting with 1% buyer lookalikes and warm retargeting.",
    icon: Sliders,
    metrics: [
      { label: "Avg. CTR Lift", value: "+164%" },
      { label: "Placements", value: "FB + IG Unified" },
    ],
    tags: ["FB Instant Forms", "IG Story Retargeting", "Advantage+ Audiences"],
    accent: "from-[#059669] to-[#047857]",
  },
  {
    step: "04",
    badge: "Ongoing Daily",
    title: "Daily Bid Pruning & Profitable ROAS Scaling",
    description:
      "Every 24 hours our media buyers kill underperforming ad sets, rotate fresh creative hooks to beat ad fatigue, and scale budget horizontally and vertically into your highest-ROAS winners.",
    icon: TrendingUp,
    metrics: [
      { label: "Avg. Client ROAS", value: "4.8x" },
      { label: "CPA Reduction", value: "-47%" },
    ],
    tags: ["Daily Bid Optimization", "Creative Fatigue Guard", "ROAS Scaling"],
    accent: "from-[#7C3AED] to-[#5B21B6]",
  },
] as const;

export default function MetaAdsProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-14 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER ROW */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
              <Plus className="h-3.5 w-3.5 text-[#FF5C93]" />
              <span>How Our Meta Ad Engine Works</span>
              <span className="ml-1 flex items-center gap-1">
                <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                <InstagramIcon className="h-3 w-3 text-[#FF5C93]" />
              </span>
            </div>

            <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl lg:text-[3.2rem]">
              From Ad Creative to Closed Sale
              <br />
              in 4 Proven Sprints.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              We don&apos;t guess with your ad budget. Every Facebook and
              Instagram campaign follows a battle-tested creative testing and
              algorithmic scaling framework built for predictable daily ROI.
            </p>
          </motion.div>
        </div>

        {/* 4-STEP BENTO GRID */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + idx * 0.08,
                  ease: EASE,
                }}
                className="group flex flex-col justify-between rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7"
              >
                {/* Top Row: Step Number Pill + Platform Icons + Timeline Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-sm font-bold text-white shadow-md`}
                      >
                        {item.step}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1877F2]">
                        <FacebookIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#E1306C]">
                        <InstagramIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-[#D92B6B]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-xl leading-snug font-bold text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Inner White Ticket Metric Box + Tags */}
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3.5 shadow-sm sm:p-4">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[11px] font-medium text-slate-400">
                          {m.label}
                        </p>
                        <p className="mt-0.5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#D92B6B]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LIVE LEAD FORM & IG DM AUTOMATION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl sm:mt-8 sm:rounded-[28px] sm:p-7 lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D92B6B] text-white shadow-[0_12px_28px_rgba(217,43,107,0.45)]">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Instant Lead Sync
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75">
                  <FacebookIcon className="h-3.5 w-3.5 text-[#1877F2]" />
                  Facebook Lead Forms +
                  <InstagramIcon className="h-3.5 w-3.5 text-[#FF5C93]" />
                  Instagram DM Funnels
                </span>
              </div>
              <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                Every Facebook &amp; Instagram Lead Routed to Your CRM &amp;
                WhatsApp in Under 3 Seconds
              </h3>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-md transition hover:bg-[#D92B6B] hover:text-white sm:w-auto sm:text-sm"
          >
            <span>See Live Meta Funnel Demo</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}