"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Server,
  Layers,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.275c0-.85-.075-1.665-.215-2.45H12v4.635h6.445c-.28 1.495-1.125 2.765-2.395 3.615v3.005h3.875c2.265-2.085 3.565-5.16 3.565-8.805z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.955-1.075 7.94-2.92l-3.875-3.005c-1.075.72-2.45 1.145-4.065 1.145-3.125 0-5.775-2.11-6.72-4.945H1.275v3.1C3.25 21.295 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.275c-.24-.72-.375-1.49-.375-2.275s.135-1.555.375-2.275v-3.1H1.275C.465 8.235 0 10.065 0 12s.465 3.765 1.275 5.375l4.005-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.78c1.76 0 3.345.605 4.59 1.795l3.44-3.44C17.95 1.19 15.235 0 12 0 7.31 0 3.25 2.705 1.275 6.625l4.005 3.1C6.225 6.89 8.875 4.78 12 4.78z"
      />
    </svg>
  );
}

function GoogleAdsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#FBBC04"
        d="M3.27 16.45L10.36 4.17a3.34 3.34 0 0 1 5.78 3.34L9.05 19.79a3.34 3.34 0 1 1-5.78-3.34z"
      />
      <path
        fill="#4285F4"
        d="M20.73 16.45L13.64 4.17a3.34 3.34 0 0 0-5.78 3.34l7.09 12.28a3.34 3.34 0 1 0 5.78-3.34z"
      />
      <circle cx="6.16" cy="18.12" r="3.34" fill="#34A853" />
    </svg>
  );
}

const STEPS = [
  {
    step: "01",
    badge: "Days 1 – 5",
    title: "High-Intent Keyword & Negative Shield Architecture",
    description:
      "We map every commercial and transactional search query in your market, segmenting exact and phrase-match ad groups while pre-loading 1,500+ negative keywords to block job seekers, DIY researchers, and junk clicks.",
    icon: Search,
    metrics: [
      { label: "Negative Keywords", value: "1,500+ Pre-Loaded" },
      { label: "Quality Score", value: "9.2 / 10 Avg." },
    ],
    tags: ["Exact & Phrase Match", "Competitor Conquesting", "Negative Shields"],
    accent: "from-[#0E8A5D] to-[#064E34]",
  },
  {
    step: "02",
    badge: "Days 6 – 10",
    title: "GA4, GTM & Enhanced Conversions Tracking",
    description:
      "Before launching a single ad, we configure Google Tag Manager, GA4 events, Dynamic Call Tracking, and Server-Side Enhanced Conversions with GCLID offline CRM sync so Google optimizes for real revenue.",
    icon: Server,
    metrics: [
      { label: "Tracking Accuracy", value: "99.4%" },
      { label: "CRM Attribution", value: "GCLID + Offline Sync" },
    ],
    tags: ["Enhanced Conversions", "Dynamic Call Tracking", "GA4 + GTM Setup"],
    accent: "from-[#4285F4] to-[#1D4ED8]",
  },
  {
    step: "03",
    badge: "Days 11 – 21",
    title: "Search, Performance Max & YouTube Launch",
    description:
      "We deploy high-CTR Responsive Search Ads (RSAs) with full ad extensions alongside segmented Performance Max asset groups, Merchant Center Shopping feeds, and YouTube in-stream remarketing.",
    icon: Layers,
    metrics: [
      { label: "Avg. Search CTR", value: "11.8%" },
      { label: "Placements", value: "Search / PMax / YT" },
    ],
    tags: ["High-CTR RSAs", "Merchant Center Feeds", "YouTube Remarketing"],
    accent: "from-[#F59E0B] to-[#D97706]",
  },
  {
    step: "04",
    badge: "Ongoing Daily",
    title: "Daily Search Term Pruning & Smart Bidding Scale",
    description:
      "Every day our PPC engineers audit live search term reports, cut wasted spend, split-test landing page headlines, and transition winning campaigns into Target CPA and Target ROAS bidding.",
    icon: TrendingUp,
    metrics: [
      { label: "Avg. Client ROAS", value: "6.4x" },
      { label: "Wasted Spend Cut", value: "-42%" },
    ],
    tags: ["Daily Query Audits", "tCPA & tROAS Scaling", "Landing Page CRO"],
    accent: "from-[#10B981] to-[#047857]",
  },
] as const;

export default function GoogleAdsProcessSection() {
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
              <Plus className="h-3.5 w-3.5 text-[#34D399]" />
              <span>How Our Google Ads Engine Works</span>
              <span className="ml-1 flex items-center gap-1">
                <GoogleIcon className="h-3 w-3" />
                <GoogleAdsIcon className="h-3 w-3" />
              </span>
            </div>

            <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl lg:text-[3.2rem]">
              From Search Query to Closed Deal
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
              We don&apos;t hand your budget over to Google&apos;s default
              &ldquo;auto-apply&rdquo; recommendations. Every campaign is
              engineered for maximum Quality Score, lower CPCs, and verifiable
              bottom-line ROI.
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
                {/* Top Row: Step Number Pill + Google Icons + Timeline Badge */}
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
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white">
                        <GoogleIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white">
                        <GoogleAdsIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-[#0E8A5D]">
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
                        <CheckCircle2 className="h-3 w-3 text-[#0E8A5D]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LIVE CALL TRACKING & GCLID CRM ROUTING BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl sm:mt-8 sm:rounded-[28px] sm:p-7 lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E8A5D] text-white shadow-[0_12px_28px_rgba(14,138,93,0.45)]">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Keyword-Level Attribution
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75">
                  <GoogleIcon className="h-3.5 w-3.5" />
                  Google Search +
                  <GoogleAdsIcon className="h-3.5 w-3.5" />
                  Call &amp; Form GCLID Sync
                </span>
              </div>
              <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                Know the Exact Google Keyword That Generated Every Phone Call,
                Lead &amp; Sale
              </h3>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-md transition hover:bg-[#0E8A5D] hover:text-white sm:w-auto sm:text-sm"
          >
            <span>Request Free Account Audit</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}