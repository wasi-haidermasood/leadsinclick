"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowUp, Check, ShieldCheck } from "lucide-react";

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

export default function GoogleAdsTrustSection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden py-14 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER ROW */}
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:items-end lg:gap-8">
          {/* Left Heading & Subcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
              <Plus className="h-3.5 w-3.5 text-[#34D399]" />
              <span>Why Choose Leads in Click</span>
              <span className="ml-1 flex items-center gap-1">
                <GoogleIcon className="h-3 w-3" />
                <GoogleAdsIcon className="h-3 w-3" />
              </span>
            </div>

            <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl lg:text-[3.25rem]">
              High-Intent Search Precision.
              <br />
              Zero Wasted Clicks.
            </h2>

            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/68 sm:mt-4 sm:text-base">
              Most Google Ads accounts bleed 35%+ of their budget on broad-match
              junk searches and accidental mobile app clicks. We combine tight
              keyword architecture, 1,500+ negative keyword shields, and offline
              CRM conversion imports to scale real revenue.
            </p>
          </motion.div>

          {/* Right Giant Percentage Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="flex flex-col items-start lg:col-span-5 lg:items-end"
          >
            <p className="text-5xl leading-none font-bold tracking-[-0.04em] text-[#34D399] sm:text-7xl lg:text-[5.4rem]">
              96.2%
            </p>
            <p className="mt-2.5 text-xs font-medium text-white/65 sm:text-sm">
              Client Account Retention After First 90 Days
            </p>
          </motion.div>
        </div>

        {/* BOTTOM 3-COLUMN BENTO GRID */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-12">
          {/* COLUMN 1 (5 COLS): ACTIVE CAMPAIGNS + TICKET CARD + PHOTO WITH DONUT OVERLAY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            className="flex flex-col justify-between rounded-[24px] bg-[#F4F6FA] p-4 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-6 lg:col-span-5"
          >
            {/* Top Header: Active Google Ads Campaigns */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                Active Google Campaigns
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                410+ Live
              </span>
            </div>

            {/* Ticket-Style Notched White Card */}
            <div className="relative my-3.5 overflow-hidden rounded-2xl bg-white px-4 py-3.5 shadow-sm sm:my-4 sm:px-5 sm:py-4">
              {/* Left & Right Semicircle Ticket Cutouts */}
              <div className="pointer-events-none absolute top-1/2 -left-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />
              <div className="pointer-events-none absolute top-1/2 -right-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Dual Google + Google Ads Icon Stack */}
                  <div className="flex -space-x-1.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white sm:h-9 sm:w-9">
                      <GoogleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white sm:h-9 sm:w-9">
                      <GoogleAdsIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
                    $6,240,800
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ArrowUp className="h-3.5 w-3.5" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                    +94.8%
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Image with Floating Donut Chart Card */}
            <div className="relative mt-1 h-56 w-full overflow-hidden rounded-[20px] sm:h-64 sm:rounded-[22px]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                alt="PPC strategist analyzing Google Search and Performance Max campaign metrics"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              {/* Floating Frosted White Donut Chart Card */}
              <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-md sm:bottom-3.5 sm:left-3.5 sm:gap-3.5 sm:p-3.5">
                <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                  <svg
                    viewBox="0 0 36 36"
                    className="h-full w-full -rotate-90"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="4.5"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#0E8A5D"
                      strokeWidth="4.5"
                      strokeDasharray="56 100"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="4.5"
                      strokeDasharray="34 100"
                      strokeDashoffset="-58"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="pr-1">
                  <p className="text-[11px] font-bold text-slate-900">
                    Google Channel Mix
                  </p>
                  <div className="mt-1 space-y-1 text-[10px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <GoogleIcon className="h-2.5 w-2.5" />
                      <span>64% High-Intent Search</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GoogleAdsIcon className="h-2.5 w-2.5" />
                      <span>36% PMax, Shopping &amp; YT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2 (3 COLS): DEDICATED GOOGLE PPC POD CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            className="flex flex-col justify-between rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7 lg:col-span-3"
          >
            <div>
              {/* Dual Google Icon Box */}
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <GoogleIcon className="h-5 w-5" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <GoogleAdsIcon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-6 text-xl leading-snug font-bold text-slate-900">
                Dedicated Google PPC &amp; CRO Pod
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Work directly with Google-certified senior search architects,
                Merchant Center feed engineers, and landing page CRO specialists
                who optimize your bids daily.
              </p>

              {/* Primary Emerald CTA Button -> /contact */}
              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#0E8A5D] px-5 py-3.5 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(14,138,93,0.32)] transition hover:bg-[#0A6E48] sm:text-sm"
              >
                Audit My Google Ads
              </Link>
            </div>

            {/* Bottom 3 Checkmark Bullets */}
            <ul className="mt-7 space-y-3 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#0E8A5D]" />
                <span>Daily search term &amp; negative keyword pruning</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#0E8A5D]" />
                <span>100% direct billing in your Google Ads account</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#0E8A5D]" />
                <span>Live Looker Studio ROAS &amp; call dashboard</span>
              </li>
            </ul>
          </motion.div>

          {/* COLUMN 3 (4 COLS): TWO STACKED CARDS (ENHANCED CONVERSIONS + OVERLAPPING MINI CHARTS) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-5 sm:gap-6 lg:col-span-4"
          >
            {/* Top Card: GA4, GTM & Offline Conversion Import */}
            <div className="rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg leading-snug font-bold text-slate-900 sm:text-xl">
                  Enhanced Conversions
                  <br />
                  &amp; GCLID Offline Sync
                </h3>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0E8A5D] shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-3.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Smart Bidding is only as smart as the conversion data you feed
                it. We configure Google Tag Manager, Server-Side Enhanced
                Conversions, and GCLID offline CRM imports so Google optimizes
                for closed deals—not spam form fills.
              </p>
            </div>

            {/* Bottom Card: Overlapping Dual Mini Wave Chart Cards */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:min-h-[260px] sm:rounded-[28px] sm:p-6">
              {/* Back-Left Mini Chart Card (Performance Max & Shopping) */}
              <div className="relative z-10 w-full rounded-2xl bg-white p-4 shadow-md sm:w-[78%]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <GoogleAdsIcon className="h-3 w-3" />
                    PMax &amp; Shopping
                  </span>
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                </div>
                <p className="mt-0.5 text-lg font-bold text-slate-900">
                  $290,000
                </p>

                <svg viewBox="0 0 200 55" className="mt-2 h-11 w-full">
                  <defs>
                    <linearGradient
                      id="miniPmaxWave"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4285F4"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#4285F4"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 50 C 20 50, 30 22, 45 22 C 60 22, 70 50, 85 50 C 100 50, 112 16, 128 16 C 144 16, 155 50, 195 50 Z"
                    fill="url(#miniPmaxWave)"
                  />
                  <path
                    d="M 5 50 C 20 50, 30 22, 45 22 C 60 22, 70 50, 85 50 C 100 50, 112 16, 128 16 C 144 16, 155 50, 195 50"
                    fill="none"
                    stroke="#4285F4"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Front-Right Overlapping Mini Chart Card (High-Intent Search Scaling) */}
              <div className="relative z-20 mt-3 ml-auto w-full rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 sm:-mt-8 sm:w-[82%]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <GoogleIcon className="h-3 w-3" />
                    <GoogleAdsIcon className="h-3 w-3" />
                    High-Intent Search ROI
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    +76% ROAS
                  </span>
                </div>
                <p className="mt-0.5 text-xl font-bold text-slate-900">
                  $1,420,000
                </p>

                <svg viewBox="0 0 220 60" className="mt-2 h-12 w-full">
                  <defs>
                    <linearGradient
                      id="miniSearchWave"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#0E8A5D" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#0E8A5D"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 54 C 22 54, 34 28, 50 28 C 66 28, 78 54, 95 54 C 112 54, 125 18, 142 18 C 158 18, 170 54, 182 54 C 192 54, 200 12, 215 12 L 215 54 Z"
                    fill="url(#miniSearchWave)"
                  />
                  <path
                    d="M 5 54 C 22 54, 34 28, 50 28 C 66 28, 78 54, 95 54 C 112 54, 125 18, 142 18 C 158 18, 170 54, 182 54 C 192 54, 200 12, 215 12"
                    fill="none"
                    stroke="#0E8A5D"
                    strokeWidth="2"
                  />
                  <circle
                    cx="142"
                    cy="18"
                    r="3.5"
                    fill="#FFFFFF"
                    stroke="#0E8A5D"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}