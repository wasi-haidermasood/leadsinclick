"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Star,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Target,
  BarChart3,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
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

export function GoogleAdsIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
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

const FEATURES = [
  {
    platform: "search",
    label: "High-Intent Google Search & Call-Only Ads",
  },
  {
    platform: "pmax",
    label: "Performance Max & Google Shopping Feeds",
  },
  {
    platform: "tracking",
    label: "GA4, GTM & Server-Side Enhanced Conversions",
  },
  {
    platform: "remarketing",
    label: "YouTube In-Stream & Display Remarketing",
  },
] as const;

export default function GoogleAdsHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="mx-auto max-w-[1340px] px-3.5 sm:px-6 lg:px-8">
        {/* MAIN GOOGLE EMERALD CONTAINER FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0E8A5D] via-[#0B724C] to-[#064E34] px-4 pt-7 pb-6 text-white shadow-[0_32px_90px_-20px_rgba(14,138,93,0.45)] sm:rounded-[38px] sm:px-10 sm:pt-12 sm:pb-10 lg:px-14 lg:pt-14 lg:pb-12"
        >
          {/* BACKGROUND WIREFRAME GLOBE & PERSPECTIVE GRID */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#34D399]/20 blur-3xl" />

            <svg
              className="absolute inset-0 h-full w-full opacity-[0.14]"
              viewBox="0 0 1200 720"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="white" strokeWidth="1">
                <circle cx="340" cy="360" r="170" />
                <circle cx="340" cy="360" r="235" strokeDasharray="4 6" />
                <ellipse cx="340" cy="360" rx="170" ry="68" />
                <ellipse cx="340" cy="360" rx="170" ry="125" />
                <ellipse cx="340" cy="360" rx="68" ry="170" />
                <ellipse cx="340" cy="360" rx="125" ry="170" />
                <line x1="0" y1="140" x2="1200" y2="140" strokeOpacity="0.45" />
                <line x1="0" y1="290" x2="1200" y2="290" strokeOpacity="0.45" />
                <line x1="0" y1="440" x2="1200" y2="440" strokeOpacity="0.45" />
                <line x1="0" y1="590" x2="1200" y2="590" strokeOpacity="0.45" />
                <line x1="220" y1="0" x2="80" y2="720" strokeOpacity="0.35" />
                <line x1="480" y1="0" x2="410" y2="720" strokeOpacity="0.35" />
                <line x1="760" y1="0" x2="830" y2="720" strokeOpacity="0.35" />
                <line x1="1020" y1="0" x2="1150" y2="720" strokeOpacity="0.35" />
              </g>
            </svg>
          </div>

          {/* TOP ROW: DUAL GOOGLE + GOOGLE ADS BADGE + HEADLINE & DESCRIPTION */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-7">
              {/* Dual Google + Google Ads Pill Badge */}
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                  <GoogleIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                  <GoogleAdsIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-white/95">
                  Google Search, PMax &amp; YouTube Ads Engine
                </span>
              </div>

              <h1 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.55rem]">
                Capture Buyers at the Exact Moment They Search on Google
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-6">
              <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                Stop paying for broad, low-intent clicks that never convert. We
                engineer high-converting Google Search, Performance Max,
                Shopping, and YouTube campaigns backed by offline CRM conversion
                tracking.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative z-10 my-6 h-px w-full bg-white/20 sm:my-8" />

          {/* 4-ITEM FEATURE STRIP WITH GOOGLE & GOOGLE ADS ICONS */}
          <div className="relative z-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {FEATURES.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + idx * 0.07,
                  ease: EASE,
                }}
                className="flex items-center gap-3.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm sm:h-11 sm:w-11">
                  {item.platform === "search" && (
                    <GoogleIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "pmax" && (
                    <GoogleAdsIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "tracking" && (
                    <BarChart3 className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "remarketing" && (
                    <Target className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                </div>
                <span className="text-[13px] leading-snug font-medium text-white/95 sm:text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM BENTO GRID (3 COLUMNS ON DESKTOP) */}
          <div className="relative z-10 mt-7 grid grid-cols-1 items-stretch gap-5 sm:mt-10 lg:grid-cols-12 lg:gap-6">
            {/* COLUMN 1: PPC PERFORMANCE SUMMARY + INNER TESTIMONIAL CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="flex flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6 lg:col-span-4"
            >
              {/* Top Stats Header */}
              <div className="flex items-start justify-between gap-2 px-0.5 pt-0.5">
                <div>
                  <span className="text-[11px] font-medium text-slate-400">
                    Google Ads Summary
                  </span>
                  <div className="mt-2.5 flex items-center gap-4 sm:gap-7">
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Search ROAS
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        6.4x
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Quality Score
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        9.2/10
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plus Action */}
                <Link
                  href="/contact"
                  aria-label="Start new Google Ads campaign"
                  className="group flex flex-col items-center gap-1 text-slate-500 transition hover:text-[#0E8A5D]"
                >
                  <span className="text-[11px] font-medium">Scale</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition group-hover:border-[#0E8A5D]/30 group-hover:bg-[#0E8A5D]/10">
                    <Plus className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Inner Emerald Testimonial Card with Top-Left Tab & Bottom Cutout */}
              <div className="relative mt-5 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0E8A5D] to-[#064E34] p-4 pt-10 text-white sm:mt-6 sm:rounded-[22px] sm:p-5 sm:pt-11">
                {/* Top-Left White Notch Tab */}
                <div className="absolute top-0 left-0 flex items-center gap-1.5 rounded-br-2xl bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-900">
                  <span>Google Partner</span>
                  <GoogleIcon className="h-3 w-3" />
                  <GoogleAdsIcon className="h-3 w-3" />
                </div>

                {/* Top-Right Stars */}
                <div className="absolute top-3 right-3.5 flex items-center gap-1 text-xs font-semibold text-white">
                  <div className="flex items-center gap-0.5 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-amber-300 text-amber-300"
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-[11px] text-white/90">5.0</span>
                </div>

                {/* Reviewer Profile */}
                <div className="mt-1 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                    alt="David Thorne"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      David Thorne
                    </p>
                    <p className="text-[11px] text-white/75">
                      VP of Growth, Apex MedTech Solutions
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-3.5 pb-2 text-xs leading-relaxed text-white/90">
                  &ldquo;Leads in Click rebuilt our Google Search and
                  Performance Max structure, eliminating 42% in wasted spend and
                  scaling inbound SQLs by 3.4x.&rdquo;
                </p>

                {/* Bottom Center Decorative White Notch */}
                <div className="absolute -bottom-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-t-xl bg-white" />
              </div>
            </motion.div>

            {/* COLUMN 2: QUICK ACTION CTA + AD REVENUE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.33, ease: EASE }}
              className="flex flex-col justify-between gap-4 sm:gap-5 lg:col-span-3"
            >
              {/* Top Action Trigger */}
              <Link
                href="/contact"
                className="group flex items-center gap-3.5 rounded-2xl bg-white/10 px-3 py-2.5 backdrop-blur-sm transition hover:bg-white/15 sm:bg-transparent sm:px-2 sm:py-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0E8A5D] shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-sm leading-tight font-semibold text-white sm:text-base">
                    Get Free Google
                    <br className="hidden sm:inline" /> Ads Audit
                  </span>
                </div>
              </Link>

              {/* White Search & PMax Revenue Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#E6F6F0] px-3 py-1 text-[11px] font-semibold text-[#0B724C]">
                    Tracked PPC Revenue
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                      <GoogleIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                      <GoogleAdsIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                <div className="my-4 sm:my-5">
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.85rem]">
                    $4,190,450
                  </p>

                  {/* Split Progress Bar (Google Search vs PMax/Shopping) */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[64%] rounded-l-full bg-[#0E8A5D]" />
                      <div className="h-full w-[36%] rounded-r-full bg-[#4285F4]" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                      +92.4%
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown Legend with Both Icons */}
                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-[11px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <GoogleIcon className="h-3 w-3 shrink-0" />
                      <span className="truncate">Search Ads</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">64%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <GoogleAdsIcon className="h-3 w-3 shrink-0" />
                      <span className="truncate">PMax &amp; YT</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">36%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* COLUMN 3: TRUST BANNER + ANALYSIS CHART CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="flex flex-col justify-between gap-4 sm:gap-5 lg:col-span-5"
            >
              {/* Top Pill Banner */}
              <div className="flex items-center justify-between gap-3 rounded-[20px] bg-white px-4 py-3 text-slate-900 shadow-[0_14px_34px_rgba(10,20,60,0.14)] sm:rounded-[22px] sm:px-5 sm:py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white">
                      <GoogleIcon className="h-4 w-4" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white">
                      <GoogleAdsIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                    Managing $12M+ in Profitable Annual
                    <br className="hidden sm:inline" /> Google Search &amp; PMax
                    Spend
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Talk to a Google Ads Strategist"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#0E8A5D] hover:bg-[#0E8A5D] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom Analysis Wave Chart Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">
                    Search Conversion &amp; CPA Velocity
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    +318% Conversions
                  </span>
                </div>

                {/* SVG Wave Area Chart */}
                <div className="relative mt-3 h-36 w-full sm:h-40">
                  <svg
                    viewBox="0 0 420 150"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="googleWaveGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0E8A5D"
                          stopOpacity="0.44"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0E8A5D"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid Lines & Y-Axis Labels */}
                    {[
                      { y: 20, label: "100" },
                      { y: 50, label: "80" },
                      { y: 80, label: "40" },
                      { y: 110, label: "20" },
                      { y: 138, label: "0" },
                    ].map((row) => (
                      <g key={row.label}>
                        <text
                          x="0"
                          y={row.y + 3}
                          className="fill-slate-400 text-[9px] font-medium"
                        >
                          {row.label}
                        </text>
                        <line
                          x1="26"
                          y1={row.y}
                          x2="412"
                          y2={row.y}
                          stroke="#E2E8F0"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                        />
                      </g>
                    ))}

                    {/* Vertical Dashed Guide Lines for Peaks */}
                    {[85, 175, 270, 365].map((x, idx) => (
                      <line
                        key={idx}
                        x1={x}
                        y1="25"
                        x2={x}
                        y2="138"
                        stroke="#CBD5E1"
                        strokeDasharray="2 3"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Smooth Multi-Peak Area Fill */}
                    <path
                      d="M 28 138 C 52 138, 65 72, 85 72 C 105 72, 118 138, 132 138 C 148 138, 158 58, 175 58 C 192 58, 205 138, 222 138 C 238 138, 252 46, 270 46 C 288 46, 302 138, 318 138 C 335 138, 348 34, 365 34 C 382 34, 396 138, 412 138 Z"
                      fill="url(#googleWaveGrad)"
                    />

                    {/* Smooth Multi-Peak Stroke Path */}
                    <path
                      d="M 28 138 C 52 138, 65 72, 85 72 C 105 72, 118 138, 132 138 C 148 138, 158 58, 175 58 C 192 58, 205 138, 222 138 C 238 138, 252 46, 270 46 C 288 46, 302 138, 318 138 C 335 138, 348 34, 365 34 C 382 34, 396 138, 412 138"
                      fill="none"
                      stroke="#0E8A5D"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />

                    {/* Peak Nodes */}
                    {[
                      { cx: 85, cy: 72 },
                      { cx: 175, cy: 58 },
                      { cx: 270, cy: 46, active: true },
                      { cx: 365, cy: 34 },
                    ].map((pt, i) => (
                      <g key={i}>
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r={pt.active ? "5" : "4"}
                          fill="#FFFFFF"
                          stroke="#0E8A5D"
                          strokeWidth="2.5"
                        />
                      </g>
                    ))}

                    {/* Highlight Tooltip on 3rd Peak */}
                    <g transform="translate(232, 12)">
                      <rect
                        x="0"
                        y="0"
                        width="76"
                        height="22"
                        rx="11"
                        fill="#0E8A5D"
                      />
                      <text
                        x="38"
                        y="14"
                        textAnchor="middle"
                        className="fill-white text-[9.5px] font-semibold"
                      >
                        6.4x ROAS
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* STEPPED BOTTOM TAB SILHOUETTE */}
        <div className="mx-auto hidden h-7 w-[54%] rounded-b-[28px] bg-[#064E34]/80 shadow-[0_22px_50px_rgba(14,138,93,0.28)] backdrop-blur-md lg:block" />
      </div>
    </section>
  );
}