"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
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

const FAQS = [
  {
    q: "Which Google Ads campaign types should our business run first?",
    a: "We start where buyer intent is highest—typically exact and phrase-match Google Search Ads and Local/Call-Only campaigns to capture ready-to-buy searches immediately. For e-commerce and multi-touch scaling, we layer in segmented Performance Max, Google Shopping, and YouTube Remarketing.",
  },
  {
    q: "How do you prevent wasted ad spend on irrelevant search terms?",
    a: "We never use unguarded broad match or Google's auto-applied recommendations. We pre-load 1,500+ negative keywords before launch, audit live search term reports daily, disable low-quality mobile app placements, and bid strictly on commercial-intent queries.",
  },
  {
    q: "What minimum monthly ad budget do you recommend for Google Ads?",
    a: "We recommend a starting media budget of $1,500–$3,500/month paid directly to Google so your campaigns gather enough conversion data to exit the learning phase rapidly and scale profitably on Target CPA or Target ROAS.",
  },
  {
    q: "Do we keep full ownership of our Google Ads and GA4 accounts?",
    a: "Yes, 100%. You own your Google Ads, Google Merchant Center, Tag Manager, and GA4 accounts at all times. You pay Google directly for ad spend and have real-time Looker Studio access to every keyword, click, and conversion.",
  },
] as const;

export default function GoogleAdsClosingSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const router = useRouter();

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-10 pb-20 text-white sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-12 lg:gap-8">
          {/* LEFT 7 COLUMNS: GOOGLE EMERALD CONVERSION CARD WITH BOTH GOOGLE ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0E8A5D] via-[#0B724C] to-[#064E34] p-6 text-white shadow-[0_32px_90px_-20px_rgba(14,138,93,0.5)] sm:rounded-[34px] sm:p-10 lg:col-span-7"
          >
            {/* Subtle Wireframe Background Decoration */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
              <svg
                className="absolute right-0 bottom-0 h-full w-full opacity-[0.12]"
                viewBox="0 0 800 500"
                fill="none"
              >
                <circle cx="650" cy="400" r="180" stroke="white" />
                <circle
                  cx="650"
                  cy="400"
                  r="240"
                  stroke="white"
                  strokeDasharray="4 6"
                />
                <ellipse cx="650" cy="400" rx="180" ry="75" stroke="white" />
                <ellipse cx="650" cy="400" rx="75" ry="180" stroke="white" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Top Pill with Both Google & Google Ads Icons */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Free Google Ads &amp; Keyword Wasted-Spend Audit</span>
                <span className="ml-1 flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5">
                  <GoogleIcon className="h-3 w-3" />
                  <GoogleAdsIcon className="h-3 w-3" />
                </span>
              </div>

              <h2 className="mt-5 text-[1.8rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                Ready to Dominate High-Intent Searches on Google?
              </h2>

              <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Get a complimentary video teardown of your Google Ads account,
                wasted search term report, Quality Score bottlenecks, and a
                90-day keyword scaling roadmap.
              </p>

              {/* 4 Value Pills */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Wasted Search Term & Spend Audit",
                  "Custom High-Intent Keyword Blueprint",
                  "GA4 & Enhanced Conversions Check",
                  "Competitor Auction Insights Report",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#0E8A5D]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* White Inner Conversion Bar Routing to /contact */}
            <div className="relative z-10 mt-8 rounded-[20px] bg-white p-3 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.22)] sm:rounded-[24px] sm:p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/contact");
                }}
                className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email or website URL..."
                  className="h-12 flex-1 rounded-xl bg-slate-100/90 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#0E8A5D] focus:outline-none"
                />
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0E8A5D] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(14,138,93,0.35)] transition hover:bg-[#0A6E48]"
                >
                  <span>Claim Free Google Audit</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </form>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#0E8A5D]" />
                  Delivered via video within 24 hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  100% free — keep the keyword blueprint
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT 5 COLUMNS: FAQ ACCORDION IN #F4F6FA CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
                <Plus className="h-3.5 w-3.5 text-[#34D399]" />
                <span>Common Questions</span>
                <GoogleIcon className="h-3 w-3" />
                <GoogleAdsIcon className="h-3 w-3" />
              </div>

              <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Everything You Need to Know Before Scaling on Google Ads.
              </h3>
            </div>

            <div className="mt-6 space-y-3.5">
              {FAQS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-[20px] bg-[#F4F6FA] text-slate-900 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-slate-900 sm:text-[15px]"
                    >
                      <span>{item.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-[#0E8A5D] text-white"
                            : "bg-white text-slate-700"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
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
                          <p className="border-t border-slate-200/80 px-5 pt-3 pb-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}