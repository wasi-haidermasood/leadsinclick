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
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const FEATURES = [
  {
    platform: "instagram",
    label: "Instagram Reels, Carousels & Daily Stories",
  },
  {
    platform: "linkedin",
    label: "LinkedIn B2B Executive & Brand Authority",
  },
  {
    platform: "facebook",
    label: "Facebook Community & Multi-Format Feeds",
  },
  {
    platform: "youtube",
    label: "YouTube Shorts, TikTok & Active DM Management",
  },
] as const;

export default function SocialMediaHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="mx-auto max-w-[1340px] px-3.5 sm:px-6 lg:px-8">
        {/* MAIN ROYAL VIOLET CONTAINER FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#6D28D9] via-[#5B21B6] to-[#3B0764] px-4 pt-7 pb-6 text-white shadow-[0_32px_90px_-20px_rgba(109,40,217,0.5)] sm:rounded-[38px] sm:px-10 sm:pt-12 sm:pb-10 lg:px-14 lg:pt-14 lg:pb-12"
        >
          {/* BACKGROUND WIREFRAME GLOBE & PERSPECTIVE GRID */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/25 blur-3xl" />

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

          {/* TOP ROW: MULTI-PLATFORM BADGE + HEADLINE & DESCRIPTION */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-7">
              {/* Multi-Platform Pill Badge (Instagram, Facebook, LinkedIn, YouTube) */}
              <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <div className="flex items-center -space-x-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white ring-1 ring-white/40">
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2] text-white ring-1 ring-white/40">
                    <FacebookIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] text-white ring-1 ring-white/40">
                    <LinkedInIcon className="h-3 w-3" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF0000] text-white ring-1 ring-white/40">
                    <YouTubeIcon className="h-3 w-3" />
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wide text-white/95">
                  Omnichannel Social Media Management
                </span>
              </div>

              <h1 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
                Turn Followers Into Loyal Buyers Across Every Social Feed
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-6">
              <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                We turn your social channels into a 24/7 inbound authority
                engine. Done-for-you Instagram Reels, Facebook feeds, LinkedIn
                thought leadership, YouTube Shorts, and active daily DM
                management.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative z-10 my-6 h-px w-full bg-white/20 sm:my-8" />

          {/* 4-ITEM FEATURE STRIP WITH INSTAGRAM, LINKEDIN, FACEBOOK & YOUTUBE ICONS */}
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
                  {item.platform === "instagram" && (
                    <InstagramIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "linkedin" && (
                    <LinkedInIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "facebook" && (
                    <FacebookIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  )}
                  {item.platform === "youtube" && (
                    <YouTubeIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
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
            {/* COLUMN 1: SOCIAL GROWTH SUMMARY + INNER TESTIMONIAL CARD */}
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
                    Social Growth Summary
                  </span>
                  <div className="mt-2.5 flex items-center gap-4 sm:gap-7">
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Avg. Engagement
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        8.4%
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">
                        Monthly Reach
                      </p>
                      <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                        2.8M+
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plus Action */}
                <Link
                  href="/contact"
                  aria-label="Start social media management"
                  className="group flex flex-col items-center gap-1 text-slate-500 transition hover:text-[#6D28D9]"
                >
                  <span className="text-[11px] font-medium">Post</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition group-hover:border-[#6D28D9]/30 group-hover:bg-[#6D28D9]/10">
                    <Plus className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Inner Royal Violet Testimonial Card with Top-Left Tab & Bottom Cutout */}
              <div className="relative mt-5 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#6D28D9] to-[#3B0764] p-4 pt-10 text-white sm:mt-6 sm:rounded-[22px] sm:p-5 sm:pt-11">
                {/* Top-Left White Notch Tab */}
                <div className="absolute top-0 left-0 flex items-center gap-1.5 rounded-br-2xl bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-900">
                  <span>Top-Rated</span>
                  <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                  <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                  <LinkedInIcon className="h-3 w-3 text-[#0A66C2]" />
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
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
                    alt="Elena Rostova"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Elena Rostova
                    </p>
                    <p className="text-[11px] text-white/75">
                      CMO, NovaScale Cloud &amp; Retail
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-3.5 pb-2 text-xs leading-relaxed text-white/90">
                  &ldquo;They took over our Instagram, LinkedIn, and Facebook
                  completely. Our organic reach grew 410% in 60 days and inbound
                  DMs now book 35+ sales calls a month.&rdquo;
                </p>

                {/* Bottom Center Decorative White Notch */}
                <div className="absolute -bottom-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-t-xl bg-white" />
              </div>
            </motion.div>

            {/* COLUMN 2: QUICK ACTION CTA + ORGANIC REACH CARD */}
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#6D28D9] shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-sm leading-tight font-semibold text-white sm:text-base">
                    Get Free Social
                    <br className="hidden sm:inline" /> Brand Audit
                  </span>
                </div>
              </Link>

              {/* White Omnichannel Reach Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#F3E8FF] px-3 py-1 text-[11px] font-semibold text-[#6D28D9]">
                    Organic Views
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E1306C]/10 text-[#E1306C]">
                      <InstagramIcon className="h-3 w-3" />
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2]">
                      <FacebookIcon className="h-3 w-3" />
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                      <LinkedInIcon className="h-3 w-3" />
                    </span>
                  </div>
                </div>

                <div className="my-4 sm:my-5">
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.85rem]">
                    18,450,900
                  </p>

                  {/* Split Progress Bar (IG/FB vs LinkedIn/YT) */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[46%] rounded-l-full bg-[#E1306C]" />
                      <div className="h-full w-[30%] bg-[#0A66C2]" />
                      <div className="h-full w-[24%] rounded-r-full bg-[#1877F2]" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                      +340%
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown Legend */}
                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-[11px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <InstagramIcon className="h-3 w-3 shrink-0 text-[#E1306C]" />
                      <span className="truncate">IG &amp; FB Reels</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">62%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <LinkedInIcon className="h-3 w-3 shrink-0 text-[#0A66C2]" />
                      <span className="truncate">LinkedIn &amp; YT</span>
                    </div>
                    <p className="mt-0.5 pl-4 font-bold text-slate-800">38%</p>
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white ring-2 ring-white">
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white ring-2 ring-white">
                      <FacebookIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white ring-2 ring-white">
                      <LinkedInIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm">
                    Managing 180+ Brand &amp; Executive
                    <br className="hidden sm:inline" /> Social Profiles Daily
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Talk to a Social Media Strategist"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#6D28D9] hover:bg-[#6D28D9] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom Analysis Wave Chart Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.18)] sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">
                    Follower &amp; Engagement Velocity
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    +340% Reach
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
                        id="socialWaveGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6D28D9"
                          stopOpacity="0.44"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6D28D9"
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
                      fill="url(#socialWaveGrad)"
                    />

                    {/* Smooth Multi-Peak Stroke Path */}
                    <path
                      d="M 28 138 C 52 138, 65 72, 85 72 C 105 72, 118 138, 132 138 C 148 138, 158 58, 175 58 C 192 58, 205 138, 222 138 C 238 138, 252 46, 270 46 C 288 46, 302 138, 318 138 C 335 138, 348 34, 365 34 C 382 34, 396 138, 412 138"
                      fill="none"
                      stroke="#6D28D9"
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
                          stroke="#6D28D9"
                          strokeWidth="2.5"
                        />
                      </g>
                    ))}

                    {/* Highlight Tooltip on 3rd Peak */}
                    <g transform="translate(228, 12)">
                      <rect
                        x="0"
                        y="0"
                        width="84"
                        height="22"
                        rx="11"
                        fill="#6D28D9"
                      />
                      <text
                        x="42"
                        y="14"
                        textAnchor="middle"
                        className="fill-white text-[9.5px] font-semibold"
                      >
                        8.4% Eng. Rate
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* STEPPED BOTTOM TAB SILHOUETTE */}
        <div className="mx-auto hidden h-7 w-[54%] rounded-b-[28px] bg-[#3B0764]/80 shadow-[0_22px_50px_rgba(109,40,217,0.3)] backdrop-blur-md lg:block" />
      </div>
    </section>
  );
}