"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  ArrowUp,
  Check,
  MapPin,
  Store,
  ShieldCheck,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Self-Contained Google Business, Maps Pin & Google SVG Icons               */
/* -------------------------------------------------------------------------- */

function GoogleBusinessIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M4 10.5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V10.5H4Z"
        fill="#4285F4"
      />
      <path
        d="M3.15 4.84C3.46 3.76 4.45 3 5.58 3H18.42C19.55 3 20.54 3.76 20.85 4.84L22 9H2L3.15 4.84Z"
        fill="#8AB4F8"
      />
      <path
        d="M2 9C2 10.38 3.12 11.5 4.5 11.5C5.88 11.5 7 10.38 7 9H2ZM7 9C7 10.38 8.12 11.5 9.5 11.5C10.88 11.5 12 10.38 12 9H7ZM12 9C12 10.38 13.12 11.5 14.5 11.5C15.88 11.5 17 10.38 17 9H12ZM17 9C17 10.38 18.12 11.5 19.5 11.5C20.88 11.5 22 10.38 22 9H17Z"
        fill="#1967D2"
      />
      <path
        d="M15.5 16.2C15.5 14.95 14.55 14 13.3 14C12.03 14 11 15.03 11 16.3C11 17.57 12.03 18.6 13.3 18.6C14.37 18.6 15.17 17.95 15.4 17H13.3V15.9H16.5C16.55 16.08 16.58 16.28 16.58 16.5C16.58 18.35 15.18 19.7 13.3 19.7C11.42 19.7 9.9 18.18 9.9 16.3C9.9 14.42 11.42 12.9 13.3 12.9C14.22 12.9 15 13.24 15.6 13.8L14.78 14.62C14.42 14.28 13.92 14.05 13.3 14.05"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function GoogleMapsPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2C7.58 2 4 5.58 4 10C4 15.25 12 22 12 22C12 22 20 15.25 20 10C20 5.58 16.42 2 12 2Z"
        fill="#EA4335"
      />
      <path
        d="M12 2C7.58 2 4 5.58 4 10C4 11.8 4.65 13.68 5.68 15.4L12 10V2Z"
        fill="#4285F4"
      />
      <path
        d="M4 10C4 12.65 5.65 15.72 7.82 18.18L12 13.5L5.68 15.4C4.65 13.68 4 11.8 4 10Z"
        fill="#FBBC04"
      />
      <path
        d="M12 22C12 22 17.55 17.32 19.44 12.5L12 10L7.82 18.18C9.95 20.42 12 22 12 22Z"
        fill="#34A853"
      />
      <circle cx="12" cy="10" r="3.4" fill="#FFFFFF" />
    </svg>
  );
}

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FFC107"
      />
      <path
        d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#1976D2"
      />
    </svg>
  );
}

export default function GmbTrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-14 sm:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* TOP HEADER ROW */}
        <div className="mb-10 grid grid-cols-1 items-start gap-6 lg:mb-14 lg:grid-cols-12 lg:items-end">
          {/* Left Heading + Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 shadow-sm backdrop-blur-md">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D9531E] text-white">
                <Plus className="h-2.5 w-2.5 stroke-[3]" />
              </span>
              <span className="text-xs font-semibold tracking-tight text-white/90">
                Why Choose Leads in Click
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              Engineered to Rank You #1
              <br />
              in the Google Local 3-Pack
            </h2>

            <p className="mt-3.5 max-w-xl text-xs leading-relaxed text-zinc-400 sm:mt-4 sm:text-[15px]">
              46% of all Google searches have local intent, and 76% of people
              who search for a nearby business visit within 24 hours. We handle
              end-to-end profile creation, postcard/video verification,
              category engineering, and hyper-local ranking signals.
            </p>
          </motion.div>

          {/* Right Giant Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex flex-col items-start lg:col-span-5 lg:items-end"
          >
            <p className="text-4xl font-bold tracking-tight text-[#FB923C] sm:text-7xl">
              +312%
            </p>
            <p className="mt-1.5 text-xs font-medium text-zinc-400 sm:text-sm lg:text-right">
              Average increase in inbound phone calls &amp; direction requests
            </p>
          </motion.div>
        </div>

        {/* BOTTOM BENTO GRID (3 Columns matching Reference 2) */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT CARD (Col Span 5): Local Actions + Ticket Banner + Image & Donut */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col justify-between rounded-[24px] sm:rounded-[30px] bg-[#F4F6FA] p-4 sm:p-6 shadow-sm lg:col-span-5"
          >
            {/* Top Row: Label + Metric */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Verified Local Customer Actions
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500">
                  Calls, Directions &amp; Website Clicks
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  540+
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">
                  Ranked Profiles
                </p>
              </div>
            </div>

            {/* Ticket-Notched White Banner */}
            <div className="relative my-4 flex items-center justify-between rounded-2xl bg-white px-3.5 py-3 sm:px-5 sm:py-3.5 shadow-sm">
              {/* Left & Right Semicircle Cutouts */}
              <span className="pointer-events-none absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />
              <span className="pointer-events-none absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]" />

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex -space-x-1.5">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 ring-2 ring-white">
                    <GoogleBusinessIcon className="h-4 w-4" />
                  </div>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 ring-2 ring-white">
                    <GoogleMapsPinIcon className="h-4 w-4" />
                  </div>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 ring-2 ring-white">
                    <GoogleIcon className="h-4 w-4" />
                  </div>
                </div>
                <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900">
                  148,500+ Calls
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                  <ArrowUp className="h-3 w-3" />
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-emerald-600">
                  Top 3 Pack
                </span>
              </div>
            </div>

            {/* Bottom Image Container with Floating Donut Chart Card */}
            <div className="relative mt-1 h-56 sm:h-64 w-full overflow-hidden rounded-[20px] sm:rounded-[22px]">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                alt="Local Storefront Business Owner Welcoming Customers"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

              {/* Floating Frosted White Donut Chart Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-[270px] rounded-2xl bg-white/95 p-3 sm:p-3.5 shadow-lg backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">
                    GMB Ranking Factor Mix
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    Local SEO
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* SVG Donut */}
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0">
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
                        stroke="#D9531E"
                        strokeWidth="4.5"
                        strokeDasharray="45 88"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="4.5"
                        strokeDasharray="28 88"
                        strokeDashoffset="-46"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="flex-1 space-y-1 text-[10px] text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#D9531E]" />
                        GMB Categories &amp; Posts
                      </span>
                      <span className="font-bold text-slate-900">48%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                        5-Star Review Velocity
                      </span>
                      <span className="font-bold text-slate-900">32%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                        NAP Citations &amp; Geo
                      </span>
                      <span className="font-bold text-slate-900">20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE CARD (Col Span 3): Profile Creation & Verification */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex flex-col justify-between rounded-[24px] sm:rounded-[30px] bg-[#F4F6FA] p-5 sm:p-6 shadow-sm lg:col-span-3"
          >
            <div>
              {/* Outlined Icons */}
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <GoogleBusinessIcon className="h-5 w-5" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <GoogleMapsPinIcon className="h-5 w-5" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <GoogleIcon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-bold leading-snug text-slate-900">
                Complete GMB Creation, Setup &amp; Verification
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                Whether you need a brand-new Google Business Profile created and
                verified, a suspended profile reinstated, or an existing listing
                overhauled—we configure every ranking signal with precision.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#D9531E] px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-[#B84315]"
              >
                Get Free GMB Heat-Map Audit
              </Link>

              <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4">
                {[
                  "Primary & Secondary Category Engineering",
                  "300+ Local Directory & NAP Citations",
                  "EXIF Geo-Tagged Photos & Weekly GMB Posts",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-xs font-medium text-slate-700"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D9531E]/10 text-[#D9531E]">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Col Span 4): Two Stacked Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="flex flex-col justify-between gap-4 sm:gap-5 lg:col-span-4"
          >
            {/* Top Card: Geo-Grid Radius Expansion */}
            <div className="rounded-[24px] sm:rounded-[30px] bg-[#F4F6FA] p-5 sm:p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900">
                  Hyper-Local Geo-Grid
                  <br />
                  Radius Expansion
                </h3>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#D9531E] shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                Most businesses only rank on the block they sit on. We expand
                your #1–#3 Map Pack footprint across a 5 to 15-mile city radius
                using localized schema, authority citations, and keyword-rich
                Q&amp;A seeding.
              </p>
            </div>

            {/* Bottom Card: Overlapping Mini Charts */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-[24px] sm:rounded-[30px] bg-[#F4F6FA] p-4 sm:p-6 shadow-sm min-h-[230px]">
              <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center py-2">
                {/* Back Mini Card (Left) */}
                <div className="w-[56%] -translate-x-3 -rotate-2 rounded-2xl bg-white p-3 sm:p-3.5 shadow-md ring-1 ring-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-800">
                      Map Pack Impressions
                    </span>
                    <GoogleMapsPinIcon className="h-3 w-3" />
                  </div>
                  <p className="mt-0.5 text-[10px] font-semibold text-emerald-600">
                    +420% Search Views
                  </p>
                  <svg viewBox="0 0 120 45" className="mt-2 h-10 w-full">
                    <path
                      d="M 5 38 Q 25 22, 45 28 T 85 15 T 115 8"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Front Highlight Mini Card (Right Overlapping) */}
                <div className="z-10 -ml-8 mt-6 w-[62%] rounded-2xl bg-white p-3.5 sm:p-4 shadow-xl ring-1 ring-slate-900/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-900">
                      Direct GMB Calls
                    </span>
                    <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600">
                      +312%
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                    <GoogleBusinessIcon className="h-3 w-3" />
                    <span>Top #1–3 Local Pack</span>
                  </div>

                  <svg viewBox="0 0 140 55" className="mt-2 h-12 w-full">
                    <defs>
                      <linearGradient
                        id="miniGmbGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#D9531E"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D9531E"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 5 45 C 30 42, 45 18, 70 22 C 95 26, 110 8, 135 6 L 135 50 L 5 50 Z"
                      fill="url(#miniGmbGrad)"
                    />
                    <path
                      d="M 5 45 C 30 42, 45 18, 70 22 C 95 26, 110 8, 135 6"
                      fill="none"
                      stroke="#D9531E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="135"
                      cy="6"
                      r="3.5"
                      fill="#FFFFFF"
                      stroke="#D9531E"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}