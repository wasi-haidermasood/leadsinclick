"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Store,
  Star,
  TrendingUp,
  Plus,
  ArrowUpRight,
  PhoneCall,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Self-Contained Google Business, Maps Pin & Google SVG Icons               */
/* -------------------------------------------------------------------------- */

function GoogleBusinessIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {/* Storefront Base */}
      <path
        d="M4 10.5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V10.5H4Z"
        fill="#4285F4"
      />
      {/* Storefront Awning Stripes */}
      <path
        d="M3.15 4.84C3.46 3.76 4.45 3 5.58 3H18.42C19.55 3 20.54 3.76 20.85 4.84L22 9H2L3.15 4.84Z"
        fill="#8AB4F8"
      />
      <path
        d="M2 9C2 10.38 3.12 11.5 4.5 11.5C5.88 11.5 7 10.38 7 9H2ZM7 9C7 10.38 8.12 11.5 9.5 11.5C10.88 11.5 12 10.38 12 9H7ZM12 9C12 10.38 13.12 11.5 14.5 11.5C15.88 11.5 17 10.38 17 9H12ZM17 9C17 10.38 18.12 11.5 19.5 11.5C20.88 11.5 22 10.38 22 9H17Z"
        fill="#1967D2"
      />
      {/* Mini White 'G' Detail on Storefront */}
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
      {/* Multi-color Google Maps Pin */}
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

const FEATURES = [
  {
    icon: Store,
    text: "Verified Google Business Profile Creation & Setup",
  },
  {
    icon: MapPin,
    text: "Top 3 Google Maps 'Local Pack' Geo-Grid Ranking",
  },
  {
    icon: Star,
    text: "5-Star Review Velocity & AI Reputation Responses",
  },
  {
    icon: TrendingUp,
    text: "Local Citations, NAP Sync & Geo-Tagged Weekly Posts",
  },
];

export default function GmbHero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="relative z-10 mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* Main Hero Container (Local Pack Terracotta-Orange & Maps Gold Gradient) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-br from-[#D9531E] via-[#C2410C] to-[#7C2D12] px-4 py-7 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_30px_90px_-20px_rgba(217,83,30,0.45)] border border-white/15"
        >
          {/* Decorative Wireframe Globe & Perspective Grid SVG */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Perspective Floor/Ceiling Lines */}
              <g stroke="white" strokeOpacity="0.18" strokeWidth="1">
                <line x1="0" y1="120" x2="1200" y2="120" />
                <line x1="0" y1="260" x2="1200" y2="260" />
                <line x1="0" y1="400" x2="1200" y2="400" />
                <line x1="0" y1="540" x2="1200" y2="540" />
                <line x1="220" y1="0" x2="60" y2="800" />
                <line x1="450" y1="0" x2="360" y2="800" />
                <line x1="750" y1="0" x2="840" y2="800" />
                <line x1="980" y1="0" x2="1140" y2="800" />
              </g>
              {/* Central 3D Wireframe Globe */}
              <g
                stroke="white"
                strokeOpacity="0.22"
                strokeWidth="1.2"
                transform="translate(600, 390)"
              >
                <circle r="310" />
                <circle r="230" />
                <ellipse rx="310" ry="110" />
                <ellipse rx="310" ry="215" />
                <ellipse rx="110" ry="310" />
                <ellipse rx="215" ry="310" />
                <line x1="-310" y1="0" x2="310" y2="0" />
                <line x1="0" y1="-310" x2="0" y2="310" />
              </g>
            </svg>
          </div>

          {/* Soft Glow Accents */}
          <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FB923C]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-8 h-72 w-72 rounded-full bg-[#F59E0B]/20 blur-[90px]" />

          {/* TOP HEADER ROW: Heading Left + Description Right */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <div className="mb-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5">
                    <GoogleBusinessIcon className="h-3 w-3" />
                  </span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5">
                    <GoogleMapsPinIcon className="h-3 w-3" />
                  </span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5">
                    <GoogleIcon className="h-3 w-3" />
                  </span>
                </span>
                <span className="text-[11px] font-medium tracking-wide text-white/95 sm:text-xs">
                  GMB Creation, Optimization &amp; Local 3-Pack Ranking
                </span>
              </div>

              <h1 className="font-semibold tracking-tight text-white text-[28px] leading-[1.12] sm:text-5xl sm:leading-[1.06] lg:text-[54px]">
                Dominate Google Maps
                <br className="hidden sm:inline" />{" "}
                <span className="text-white/95">
                  &amp; the Local 3-Pack Fast
                </span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="max-w-md text-xs leading-relaxed text-white/85 sm:text-[15px]">
                At{" "}
                <span className="font-semibold text-white">Leads in Click</span>
                , we create, verify, optimize, and rank your Google Business
                Profile in the coveted Top 3 Map Pack—turning high-intent
                &ldquo;near me&rdquo; searches into daily phone calls, direction
                requests, and walk-in customers.
              </p>
            </div>
          </div>

          {/* MIDDLE FEATURE STRIP */}
          <div className="relative z-10 my-6 border-y border-white/15 py-4 sm:my-9 sm:py-5">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {FEATURES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + idx * 0.07,
                      ease: EASE,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <span className="text-xs font-medium leading-snug text-white/95 sm:text-[13.5px]">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM BENTO GRID (3 Columns matching Reference 1) */}
          <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch lg:gap-5">
            {/* LEFT COLUMN: White Card with Metrics + Inner Orange Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
              className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-white p-3.5 sm:p-5 text-slate-900 shadow-xl lg:col-span-4"
            >
              {/* Top Metric Row */}
              <div className="mb-3.5 flex items-center justify-between gap-2 px-1 pt-0.5 sm:mb-4">
                <div>
                  <p className="text-[10px] font-medium text-slate-400 sm:text-[11px]">
                    GMB Profiles Ranked
                  </p>
                  <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                    540+
                  </p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <p className="text-[10px] font-medium text-slate-400 sm:text-[11px]">
                    Avg. Map Pack Position
                  </p>
                  <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                    Top #1–3
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Request a GMB Ranking Audit"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                >
                  <Plus className="h-4 w-4" />
                </Link>
              </div>

              {/* Inner Colored Testimonial Card with Notch Cutout */}
              <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] bg-[#D9531E] p-4 sm:p-5 text-white">
                {/* Top-left decorative white tab notch */}
                <div className="pointer-events-none absolute -top-3 left-0 h-7 w-24 rounded-br-2xl bg-white" />

                {/* Rating Stars Top Right */}
                <div className="flex items-center justify-end gap-1 text-xs font-semibold">
                  <div className="flex items-center gap-0.5 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-amber-300 text-amber-300"
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-white/95">5.0</span>
                </div>

                {/* Client Info */}
                <div className="mt-2 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                    alt="Dr. Ryan Callahan"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xs sm:text-sm font-semibold leading-tight text-white">
                        Dr. Ryan Callahan
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-1.5 py-0.5 text-[10px]">
                        <GoogleBusinessIcon className="h-2.5 w-2.5" />
                        <GoogleMapsPinIcon className="h-2.5 w-2.5" />
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-white/75">
                      Founder, Premier Dental &amp; Implants
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-3 sm:mt-3.5 text-[11.5px] sm:text-xs leading-relaxed text-white/90">
                  &ldquo;Leads in Click created and optimized our Google
                  Business Profile from scratch. Within 45 days we ranked #1 in
                  the Local 3-Pack across a 10-mile radius and inbound phone
                  calls jumped by 340%!&rdquo;
                </p>

                {/* Bottom decorative notch */}
                <div className="pointer-events-none mx-auto mt-3 -mb-6 h-5 w-24 rounded-t-xl bg-white" />
              </div>
            </motion.div>

            {/* MIDDLE COLUMN: Action CTA + Local Calls & Direction Requests Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.33, ease: EASE }}
              className="flex flex-col justify-between gap-3.5 sm:gap-4 lg:col-span-3"
            >
              {/* Top Action Trigger */}
              <Link
                href="/contact"
                className="group flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#D9531E] shadow-md transition group-hover:scale-105">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold leading-snug text-white">
                    Claim Your Free
                    <br />
                    GMB Ranking Audit
                  </p>
                </div>
              </Link>

              {/* Bottom White Monthly Calls & Actions Card */}
              <div className="flex flex-1 flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-white p-4 sm:p-5 text-slate-900 shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block rounded-full bg-[#D9531E] px-3 py-1 text-[10px] font-semibold text-white">
                      Monthly GMB Actions
                    </span>
                    <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                      <GoogleBusinessIcon className="h-3.5 w-3.5" />
                      <GoogleMapsPinIcon className="h-3.5 w-3.5" />
                      <GoogleIcon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-3.5 flex items-baseline justify-between gap-2">
                    <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      148,500+
                    </p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                      +312% Calls
                    </span>
                  </div>

                  {/* Progress Indicator Bar */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-[#D9531E] via-[#F97316] to-[#FBBF24]" />
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D9531E]" />
                      <span>Direct Profile Calls</span>
                    </div>
                    <span className="font-semibold text-slate-700">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
                      <span>Direction &amp; Site Clicks</span>
                    </div>
                    <span className="font-semibold text-slate-700">32%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Top Trust Pill + Bottom Analysis Wave Chart Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
              className="flex flex-col justify-between gap-3.5 sm:gap-4 lg:col-span-5"
            >
              {/* Top Trust Banner */}
              <div className="flex items-center justify-between gap-3 rounded-[20px] sm:rounded-[24px] bg-white px-4 py-3 sm:px-5 sm:py-3.5 text-slate-900 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 ring-2 ring-white">
                      <GoogleBusinessIcon className="h-4 w-4" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 ring-2 ring-white">
                      <GoogleMapsPinIcon className="h-4 w-4" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 ring-2 ring-white">
                      <GoogleIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-medium leading-snug text-slate-700">
                    Ranking{" "}
                    <span className="font-bold text-slate-900">
                      540+ Local Businesses
                    </span>{" "}
                    in the Top 3 Google Map Pack
                  </p>
                </div>
                <Link
                  href="/contact"
                  aria-label="Start GMB Optimization"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-[#D9531E]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Bottom Analysis Chart Card */}
              <div className="flex-1 rounded-[22px] sm:rounded-[28px] bg-white p-4 sm:p-5 text-slate-900 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Local 3-Pack Visibility &amp; Call Velocity
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    +312% Local Calls
                  </span>
                </div>

                {/* SVG Wave Area Chart */}
                <div className="relative mt-3 h-32 sm:h-36 w-full">
                  <svg
                    viewBox="0 0 420 130"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="gmbWaveFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#D9531E"
                          stopOpacity="0.38"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D9531E"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal dashed grid lines */}
                    {[20, 50, 80, 110].map((y, idx) => (
                      <g key={y}>
                        <line
                          x1="28"
                          y1={y}
                          x2="410"
                          y2={y}
                          stroke="#E2E8F0"
                          strokeDasharray="3 3"
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y={y + 3}
                          fontSize="9"
                          fill="#94A3B8"
                          fontWeight="500"
                        >
                          {100 - idx * 30}
                        </text>
                      </g>
                    ))}

                    {/* Smooth multi-peak area fill */}
                    <path
                      d="M 35 110 C 60 110, 70 62, 95 62 C 120 62, 130 110, 155 110 C 180 110, 195 36, 220 36 C 245 36, 260 110, 285 110 C 305 110, 320 48, 345 48 C 370 48, 380 22, 398 22 L 398 110 L 35 110 Z"
                      fill="url(#gmbWaveFill)"
                    />

                    {/* Smooth wave stroke */}
                    <path
                      d="M 35 110 C 60 110, 70 62, 95 62 C 120 62, 130 110, 155 110 C 180 110, 195 36, 220 36 C 245 36, 260 110, 285 110 C 305 110, 320 48, 345 48 C 370 48, 380 22, 398 22"
                      fill="none"
                      stroke="#D9531E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Peak Points */}
                    {[
                      { cx: 95, cy: 62 },
                      { cx: 220, cy: 36 },
                      { cx: 345, cy: 48 },
                      { cx: 398, cy: 22 },
                    ].map((pt, i) => (
                      <g key={i}>
                        <line
                          x1={pt.cx}
                          y1={pt.cy}
                          x2={pt.cx}
                          y2="110"
                          stroke="#D9531E"
                          strokeOpacity="0.25"
                          strokeDasharray="2 2"
                        />
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r="4.5"
                          fill="#FFFFFF"
                          stroke="#D9531E"
                          strokeWidth="2.5"
                        />
                      </g>
                    ))}

                    {/* Highlight Tooltip on Peak 2 */}
                    <g transform="translate(182, 6)">
                      <rect
                        rx="6"
                        ry="6"
                        width="76"
                        height="20"
                        fill="#D9531E"
                      />
                      <text
                        x="38"
                        y="13"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="600"
                        fill="#FFFFFF"
                      >
                        #1 Map Pack
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Center Stepped Cutout Silhouette (Desktop only) */}
        <div className="mx-auto -mt-1 hidden h-7 w-[54%] rounded-b-[28px] bg-[#7C2D12]/60 shadow-sm lg:block" />
      </div>
    </section>
  );
}