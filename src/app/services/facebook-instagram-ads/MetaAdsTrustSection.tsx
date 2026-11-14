"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUp, Check, ShieldCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./MetaAdsHero";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MetaAdsTrustSection() {
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
              <Plus className="h-3.5 w-3.5 text-[#FF5C93]" />
              <span>Why Choose Leads in Click</span>
              <span className="ml-1 flex items-center gap-1">
                <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                <InstagramIcon className="h-3 w-3 text-[#FF5C93]" />
              </span>
            </div>

            <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl lg:text-[3.25rem]">
              Creative That Stops the Scroll.
              <br />
              Tracking That Scales Profit.
            </h2>

            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/68 sm:mt-4 sm:text-base">
              Post-iOS14, winning on Facebook and Instagram requires two things:
              high-velocity native Reels &amp; Feed creatives that command
              attention, and server-side Conversions API (CAPI) data that trains
              Meta&apos;s algorithm to find your highest-value buyers.
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
            <p className="text-5xl leading-none font-bold tracking-[-0.04em] text-[#FF5C93] sm:text-7xl lg:text-[5.4rem]">
              94.6%
            </p>
            <p className="mt-2.5 text-xs font-medium text-white/65 sm:text-sm">
              Client Campaign Retention After First 90 Days
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
            {/* Top Header: Active Meta Campaigns */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                Active Meta Ad Sets
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                320+ Live
              </span>
            </div>

            {/* Ticket-Style Notched White Card */}
            <div className="relative my-3.5 overflow-hidden rounded-2xl bg-white px-4 py-3.5 shadow-sm sm:my-4 sm:px-5 sm:py-4">
              {/* Left & Right Semicircle Ticket Cutouts */}
              <div className="pointer-events-none absolute top-1/2 -left-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />
              <div className="pointer-events-none absolute top-1/2 -right-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Dual Facebook + Instagram Icon Stack */}
                  <div className="flex -space-x-1.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white ring-2 ring-white sm:h-9 sm:w-9">
                      <FacebookIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white ring-2 ring-white sm:h-9 sm:w-9">
                      <InstagramIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
                    $4,850,200
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ArrowUp className="h-3.5 w-3.5" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                    +91.4%
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Image with Floating Donut Chart Card */}
            <div className="relative mt-1 h-56 w-full overflow-hidden rounded-[20px] sm:h-64 sm:rounded-[22px]">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80"
                alt="Creative strategist reviewing Instagram Reels and Facebook ad campaigns"
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
                      stroke="#E1306C"
                      strokeWidth="4.5"
                      strokeDasharray="52 100"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#1877F2"
                      strokeWidth="4.5"
                      strokeDasharray="36 100"
                      strokeDashoffset="-54"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="pr-1">
                  <p className="text-[11px] font-bold text-slate-900">
                    Placement Split
                  </p>
                  <div className="mt-1 space-y-1 text-[10px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <InstagramIcon className="h-2.5 w-2.5 text-[#E1306C]" />
                      <span>58% Instagram Reels/Stories</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FacebookIcon className="h-2.5 w-2.5 text-[#1877F2]" />
                      <span>42% Facebook Feed/Forms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2 (3 COLS): DEDICATED META AD POD CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            className="flex flex-col justify-between rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7 lg:col-span-3"
          >
            <div>
              {/* Dual Platform Icon Box */}
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#1877F2] shadow-sm">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#E1306C] shadow-sm">
                  <InstagramIcon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-6 text-xl leading-snug font-bold text-slate-900">
                Dedicated Meta Creative &amp; Media Buying Pod
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Work directly with senior Facebook &amp; Instagram media buyers,
                direct-response scriptwriters, and Reels editors who optimize
                your ad account every single day.
              </p>

              {/* Primary Rose-Magenta CTA Button */}
              <a
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#D92B6B] px-5 py-3.5 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(217,43,107,0.32)] transition hover:bg-[#B81E57] sm:text-sm"
              >
                Audit My Ad Account
              </a>
            </div>

            {/* Bottom 3 Checkmark Bullets */}
            <ul className="mt-7 space-y-3 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#D92B6B]" />
                <span>Weekly Reels &amp; static creative refreshes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#D92B6B]" />
                <span>100% ad spend transparency in your BM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#D92B6B]" />
                <span>Live ROAS, CPA &amp; lead quality dashboard</span>
              </li>
            </ul>
          </motion.div>

          {/* COLUMN 3 (4 COLS): TWO STACKED CARDS (CAPI TRACKING + OVERLAPPING MINI CHARTS) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-5 sm:gap-6 lg:col-span-4"
          >
            {/* Top Card: Server-Side Meta CAPI & Pixel Tracking */}
            <div className="rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg leading-snug font-bold text-slate-900 sm:text-xl">
                  Server-Side Meta CAPI
                  <br />
                  &amp; Pixel Attribution
                </h3>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#D92B6B] shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-3.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Browser ad-blockers and iOS privacy updates blind standard
                pixels. We configure server-side Conversions API (CAPI) and
                offline CRM feedback loops so Facebook and Instagram optimize
                for closed revenue—not cheap clicks.
              </p>
            </div>

            {/* Bottom Card: Overlapping Dual Mini Wave Chart Cards */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:min-h-[260px] sm:rounded-[28px] sm:p-6">
              {/* Back-Left Mini Chart Card (Instagram Reels Retargeting) */}
              <div className="relative z-10 w-full rounded-2xl bg-white p-4 shadow-md sm:w-[78%]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                    IG Reels &amp; Stories
                  </span>
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                </div>
                <p className="mt-0.5 text-lg font-bold text-slate-900">
                  $215,000
                </p>

                <svg viewBox="0 0 200 55" className="mt-2 h-11 w-full">
                  <defs>
                    <linearGradient
                      id="miniIgWave"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#E1306C"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#E1306C"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 50 C 20 50, 30 22, 45 22 C 60 22, 70 50, 85 50 C 100 50, 112 16, 128 16 C 144 16, 155 50, 195 50 Z"
                    fill="url(#miniIgWave)"
                  />
                  <path
                    d="M 5 50 C 20 50, 30 22, 45 22 C 60 22, 70 50, 85 50 C 100 50, 112 16, 128 16 C 144 16, 155 50, 195 50"
                    fill="none"
                    stroke="#E1306C"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Front-Right Overlapping Mini Chart Card (Full-Funnel Meta Scaling) */}
              <div className="relative z-20 mt-3 ml-auto w-full rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 sm:-mt-8 sm:w-[82%]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                    <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                    Omnichannel Meta Scaling
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    +68% ROAS
                  </span>
                </div>
                <p className="mt-0.5 text-xl font-bold text-slate-900">
                  $1,140,000
                </p>

                <svg viewBox="0 0 220 60" className="mt-2 h-12 w-full">
                  <defs>
                    <linearGradient
                      id="miniMetaWave"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#1877F2" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#1877F2"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 54 C 22 54, 34 28, 50 28 C 66 28, 78 54, 95 54 C 112 54, 125 18, 142 18 C 158 18, 170 54, 182 54 C 192 54, 200 12, 215 12 L 215 54 Z"
                    fill="url(#miniMetaWave)"
                  />
                  <path
                    d="M 5 54 C 22 54, 34 28, 50 28 C 66 28, 78 54, 95 54 C 112 54, 125 18, 142 18 C 158 18, 170 54, 182 54 C 192 54, 200 12, 215 12"
                    fill="none"
                    stroke="#1877F2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="142"
                    cy="18"
                    r="3.5"
                    fill="#FFFFFF"
                    stroke="#1877F2"
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