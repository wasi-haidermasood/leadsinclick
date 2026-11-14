"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Star,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Layers,
  Target,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const FEATURES = [
  {
    platform: "instagram",
    label: "Instagram Reels, Stories & Explore Ads",
  },
  {
    platform: "facebook",
    label: "Facebook Feed, Video & Instant Lead Forms",
  },
  {
    platform: "capi",
    label: "Server-Side Meta Pixel & Conversions API",
  },
  {
    platform: "retarget",
    label: "Dynamic Catalog & Omnichannel Retargeting",
  },
] as const;

export default function MetaAdsHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="mx-auto max-w-[1340px] px-3.5 sm:px-6 lg:px-8">
        {/* MAIN ROSE-MAGENTA CONTAINER FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#D92B6B] via-[#C4205B] to-[#981544] px-4 pt-7 pb-6 text-white shadow-[0_32px_90px_-20px_rgba(217,43,107,0.45)] sm:rounded-[38px] sm:px-10 sm:pt-12 sm:pb-10 lg:px-14 lg:pt-14 lg:pb-12"
        >
          {/* BACKGROUND WIREFRAME GLOBE & PERSPECTIVE GRID */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FF669E]/25 blur-3xl" />

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

          {/* TOP ROW: DUAL PLATFORM BADGE + HEADLINE & DESCRIPTION */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-7">
              {/* Dual Facebook + Instagram Pill Badge */}
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm">
                  <FacebookIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-white/95">
                  Facebook &amp; Instagram Ads Growth Engine
                </span>
              </div>

              <h1 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.55rem]">
                Turn Scrolls Into Sales on Facebook &amp; Instagram
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-6">
              <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                Stop wasting budget on boosted posts that don&apos;t convert. We
                combine scroll-stopping Instagram Reels and Facebook Feed
                creatives with precision Meta Pixel &amp; CAPI tracking to scale
                qualified leads and purchases profitably.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative z-10 my-6 h-px w-full bg-white/20 sm:my-8" />

          {/* 4-ITEM FEATURE STRIP WITH FACEBOOK & INSTAGRAM ICONS */}
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm sm:h-11 sm:w-11">
                  {item.platform === "instagram" && (
                    <InstagramIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "facebook" && (
                    <FacebookIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "capi" && (
                    <Layers className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "retarget" && (
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
            {/* COLUMN 1: AD PERFORMANCE SUMMARY + INNER TESTIMONIAL CARD */}
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
                    Meta Ads Summary
                  </span>
                  <div className="mt-2.5 flex items-center gap-4 sm:gap-7">
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Avg. ROAS
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        4.8x
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Cost / Lead
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        $7.40
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plus Action */}
                <button
                  type="button"
                  aria-label="Launch new ad set"
                  className="group flex flex-col items-center gap-1 text-slate-500 transition hover:text-[#D92B6B]"
                >
                  <span className="text-[11px] font-medium">Scale</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition group-hover:border-[#D92B6B]/30 group-hover:bg-[#D92B6B]/10">
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </div>

              {/* Inner Rose-Magenta Testimonial Card with Top-Left Tab & Bottom Cutout */}
              <div className="relative mt-5 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#D92B6B] to-[#9E1649] p-4 pt-10 text-white sm:mt-6 sm:rounded-[22px] sm:p-5 sm:pt-11">
                {/* Top-Left White Notch Tab */}
                <div className="absolute top-0 left-0 flex items-center gap-1.5 rounded-br-2xl bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-900">
                  <span>Meta Partner</span>
                  <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                  <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                    alt="Chloe Vance"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Chloe Vance
                    </p>
                    <p className="text-[11px] text-white/75">
                      Founder, Lumina Skin &amp; Aesthetics
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-3.5 pb-2 text-xs leading-relaxed text-white/90">
                  &ldquo;Their Instagram Reels creatives paired with Facebook
                  Lead Forms cut our cost per booked client by 56% and scaled us
                  to 5.1x ROAS in 45 days.&rdquo;
                </p>

                {/* Bottom Center Decorative White Notch */}
                <div className=" absolute -bottom-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-t-xl bg-white" />
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
              <a
                href="/contact"
                className="group flex items-center gap-3.5 rounded-2xl bg-white/10 px-3 py-2.5 backdrop-blur-sm transition hover:bg-white/15 sm:bg-transparent sm:px-2 sm:py-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#D92B6B] shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-sm leading-tight font-semibold text-white sm:text-base">
                    Get Free Meta
                    <br className="hidden sm:inline" /> Ads Audit
                  </span>
                </div>
              </a>

              {/* White Ad Revenue Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#FCEBF2] px-3 py-1 text-[11px] font-semibold text-[#C4205B]">
                    Tracked Ad Revenue
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2]">
                      <FacebookIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1306C]/10 text-[#E1306C]">
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                <div className="my-4 sm:my-5">
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.85rem]">
                    $3,420,890
                  </p>

                  {/* Split Progress Bar (Instagram vs Facebook) */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[58%] rounded-l-full bg-gradient-to-r from-[#E1306C] to-[#F77737]" />
                      <div className="h-full w-[42%] rounded-r-full bg-[#1877F2]" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                      +84.6%
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown Legend with Both Icons */}
                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-[11px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <InstagramIcon className="h-3 w-3 shrink-0 text-[#E1306C]" />
                      <span className="truncate">Instagram Ads</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">58%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <FacebookIcon className="h-3 w-3 shrink-0 text-[#1877F2]" />
                      <span className="truncate">Facebook Ads</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">42%</p>
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white ring-2 ring-white">
                      <FacebookIcon className="h-4 w-4" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white ring-2 ring-white">
                      <InstagramIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                    Scaling 190+ E-Commerce &amp; Service Brands
                    <br className="hidden sm:inline" /> on Meta Ads Manager
                  </p>
                </div>
                <a
                  href="#results"
                  aria-label="View Meta Ad Case Studies"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#D92B6B] hover:bg-[#D92B6B] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Bottom Analysis Wave Chart Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">
                    ROAS &amp; Conversion Velocity
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    +285% ROAS
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
                        id="metaWaveGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#D92B6B"
                          stopOpacity="0.44"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D92B6B"
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
                      fill="url(#metaWaveGrad)"
                    />

                    {/* Smooth Multi-Peak Stroke Path */}
                    <path
                      d="M 28 138 C 52 138, 65 72, 85 72 C 105 72, 118 138, 132 138 C 148 138, 158 58, 175 58 C 192 58, 205 138, 222 138 C 238 138, 252 46, 270 46 C 288 46, 302 138, 318 138 C 335 138, 348 34, 365 34 C 382 34, 396 138, 412 138"
                      fill="none"
                      stroke="#D92B6B"
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
                          stroke="#D92B6B"
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
                        fill="#D92B6B"
                      />
                      <text
                        x="38"
                        y="14"
                        textAnchor="middle"
                        className="fill-white text-[9.5px] font-semibold"
                      >
                        4.8x ROAS
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* STEPPED BOTTOM TAB SILHOUETTE */}
        <div className="mx-auto hidden h-7 w-[54%] rounded-b-[28px] bg-[#981544]/75 shadow-[0_22px_50px_rgba(217,43,107,0.28)] backdrop-blur-md lg:block" />
      </div>
    </section>
  );
}