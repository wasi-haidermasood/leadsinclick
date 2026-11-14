"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Send,
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

const FAQS = [
  {
    q: "Can you create and verify a brand-new Google Business Profile from scratch?",
    a: "Yes. Whether you are launching a new storefront or service-area business, we set up your Google Business Profile from the ground up, guide you smoothly through Google's postcard or live video verification, and ensure 100% compliance with Google's guidelines so your listing never gets flagged.",
  },
  {
    q: "How long does it take to rank in the Top 3 Google Map Pack?",
    a: "Most clients see significant movement across their local Geo-Grid within the first 21 to 30 days after our category optimization and citation sprint. Competitive metro keywords typically lock into the Top 3 Local Pack within 45 to 90 days.",
  },
  {
    q: "What if my Google Business Profile is suspended or has duplicate listings?",
    a: "We specialize in GMB suspension reinstatement and duplicate suppression. Our team audits your profile against Google's quality guidelines, prepares the required business documentation, and submits a formal reinstatement appeal to get your listing live and ranking again.",
  },
  {
    q: "Do I need a physical storefront to rank on Google Maps?",
    a: "No! We rank both physical storefronts (clinics, restaurants, retail, offices) and Service-Area Businesses (plumbers, roofers, HVAC, Realtors, legal & home services) where your street address is hidden but your service radius ranks across your target cities.",
  },
  {
    q: "What is included in your monthly GMB optimization & ranking management?",
    a: "Every month includes weekly keyword-optimized Google Business Updates & Offer posts, EXIF geo-tagged photo uploads, keyword-rich responses to all customer reviews, competitor spam fighting, ongoing local citation building, and a live 49-point Geo-Grid ranking report.",
  },
];

export default function GmbClosingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const router = useRouter();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/contact");
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="relative z-10 mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* PART 1: FAQ BENTO GRID */}
        <div className="mb-14 grid grid-cols-1 gap-6 lg:mb-20 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Left Column: FAQ Intro + Quick Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#FB923C]" />
              <span className="text-xs font-semibold tracking-tight text-white/90">
                GMB Optimization &amp; Ranking FAQ
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-[1.12]">
              Questions About Ranking on Google Maps?
            </h2>

            <p className="mt-3.5 text-xs leading-relaxed text-zinc-400 sm:text-[15px]">
              Everything you need to know about how{" "}
              <span className="font-semibold text-white">Leads in Click</span>{" "}
              creates, optimizes, and ranks your Google Business Profile in the
              Top 3 Local Pack.
            </p>

            {/* White Support Highlight Card */}
            <div className="mt-6 rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs">
                    <GoogleBusinessIcon className="h-4 w-4" />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs">
                    <GoogleMapsPinIcon className="h-4 w-4" />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs">
                    <GoogleIcon className="h-4 w-4" />
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                  Free Geo-Grid Scan
                </span>
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-bold text-slate-900">
                Want to See Where You Rank Across Your City Right Now?
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                We&apos;ll run a free 49-point Google Maps Geo-Grid heat map
                showing your exact ranking in every neighborhood—plus how to
                beat your top 3 local competitors.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#D9531E]"
              >
                <span>Request Your Free GMB Heat-Map</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Accordion Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="space-y-3 lg:col-span-7"
          >
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#F4F6FA] text-slate-900 shadow-xs transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-xs sm:text-[15px] font-bold leading-snug text-slate-900">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#D9531E] text-white"
                          : "bg-white text-slate-700"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: EASE }}
                      >
                        <div className="border-t border-slate-200/70 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:px-6 sm:text-[13.5px]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* PART 2: FINAL CLOSING CTA BANNER (Terracotta-Orange Gradient) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-br from-[#D9531E] via-[#C2410C] to-[#7C2D12] px-4 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_30px_90px_-20px_rgba(217,83,30,0.5)] border border-white/15"
        >
          {/* Subtle Perspective Grid Backdrop */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <svg
              className="h-full w-full"
              viewBox="0 0 1200 500"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="white" strokeOpacity="0.2" strokeWidth="1">
                <line x1="0" y1="100" x2="1200" y2="100" />
                <line x1="0" y1="250" x2="1200" y2="250" />
                <line x1="0" y1="400" x2="1200" y2="400" />
                <line x1="300" y1="0" x2="150" y2="500" />
                <line x1="600" y1="0" x2="600" y2="500" />
                <line x1="900" y1="0" x2="1050" y2="500" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex items-center gap-1">
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
                <span className="text-[11px] font-semibold text-white sm:text-xs">
                  Ready to Rank #1 on Google Maps?
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.06]">
                Turn &ldquo;Near Me&rdquo; Searches Into Daily Phone Calls
              </h2>

              <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/85 sm:text-[15px]">
                Get a complimentary Google Business Profile Audit &amp; 49-Point
                Geo-Grid Ranking Map from{" "}
                <span className="font-semibold text-white">Leads in Click</span>
                . Discover how fast you can claim the #1 spot in your city.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-medium text-white/95">
                {[
                  "Full Profile Creation & Verification",
                  "300+ Local Authority Citations",
                  "Top 3 Map Pack Growth Guarantee",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right White Conversion Card */}
            <div className="lg:col-span-5">
              <form
                onSubmit={handleFormSubmit}
                className="rounded-[22px] sm:rounded-[28px] bg-white p-5 sm:p-7 text-slate-900 shadow-2xl"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Get Your Free GMB Ranking Audit
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Includes a 49-point Google Maps Geo-Grid heat map
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
                    <GoogleBusinessIcon className="h-3.5 w-3.5" />
                    <GoogleMapsPinIcon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Ryan Callahan"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#D9531E] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 234-5678"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#D9531E] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-slate-700">
                        Business Status
                      </label>
                      <select
                        defaultValue="existing"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-[#D9531E] focus:bg-white focus:outline-none"
                      >
                        <option value="new">Need New GMB Created</option>
                        <option value="existing">Optimize &amp; Rank GMB</option>
                        <option value="suspended">Reopen Suspended GMB</option>
                        <option value="multi">Multi-Location Franchise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-slate-700">
                      Business Name &amp; City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Premier Dental — Austin, TX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#D9531E] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9531E] px-5 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#B84315]"
                >
                  <span>Claim My Free GMB Heat-Map Audit</span>
                  <Send className="h-3.5 w-3.5" />
                </button>

                <div className="mt-3 text-center">
                  <Link
                    href="/contact"
                    className="text-[11px] font-medium text-slate-500 underline-offset-2 hover:text-[#D9531E] hover:underline"
                  >
                    Or speak directly with a Local SEO Specialist →
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}