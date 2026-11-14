"use client";

import React, { useState } from "react";
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
import { FacebookIcon, InstagramIcon } from "./MetaAdsHero";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "Should we run ads on Facebook, Instagram, or both platforms together?",
    a: "Both. By leveraging Meta's unified auction with placement-specific creatives—such as 9:16 vertical Reels & Stories for Instagram and high-intent Instant Lead Forms or Carousel feeds for Facebook—our clients typically achieve a 34% lower cost per lead and higher overall ROAS.",
  },
  {
    q: "Do you produce the video Reels and static image creatives for our ads?",
    a: "Yes. Ad creative is the #1 targeting lever on Facebook and Instagram today. Our creative team scripts, edits, and designs scroll-stopping Instagram Reels, Stories, and Facebook static/carousel ads tailored to your offer every week.",
  },
  {
    q: "What minimum ad spend do you recommend for Facebook & Instagram Ads?",
    a: "We recommend a starting media budget of $1,500–$3,000/month paid directly to Meta so the pixel gathers 50+ conversion events per week and exits the learning phase quickly. As soon as a winning creative-audience pair hits target ROAS, we scale budget systematically.",
  },
  {
    q: "How do you track conversions accurately after iOS14 privacy updates?",
    a: "We implement server-side Meta Conversions API (CAPI) alongside your browser Pixel with event deduplication and CRM offline conversion sync. This restores lost attribution and feeds clean buyer data back into Meta's algorithm.",
  },
] as const;

export default function MetaAdsClosingSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-10 pb-20 text-white sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-12 lg:gap-8">
          {/* LEFT 7 COLUMNS: ROSE-MAGENTA CONVERSION CARD WITH BOTH FB & IG ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-gradient-to-br from-[#D92B6B] via-[#C4205B] to-[#981544] p-6 text-white shadow-[0_32px_90px_-20px_rgba(217,43,107,0.5)] sm:rounded-[34px] sm:p-10 lg:col-span-7"
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
              {/* Top Pill with Both Facebook & Instagram Icons */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Free Facebook &amp; Instagram Ad Account Audit</span>
                <span className="ml-1 flex items-center gap-1">
                  <FacebookIcon className="h-3.5 w-3.5 text-white" />
                  <InstagramIcon className="h-3.5 w-3.5 text-white" />
                </span>
              </div>

              <h2 className="mt-5 text-[1.8rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                Ready to Scale Profitable Ads on Facebook &amp; Instagram?
              </h2>

              <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Get a complimentary video teardown of your current Meta Ads
                Manager, Pixel/CAPI tracking health, and 3 custom Instagram
                Reels &amp; Facebook ad concepts built for your brand.
              </p>

              {/* 4 Value Pills */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Full Meta Ads Manager & ROAS Audit",
                  "3 Custom IG Reels & FB Ad Concepts",
                  "Meta Pixel & CAPI Tracking Diagnostic",
                  "Competitor Ad Library Spy Report",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#D92B6B]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* White Inner Conversion Bar */}
            <div className="relative z-10 mt-8 rounded-[20px] bg-white p-3 text-slate-900 shadow-[0_20px_50px_rgba(10,20,60,0.22)] sm:rounded-[24px] sm:p-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email or website URL..."
                  className="h-12 flex-1 rounded-xl bg-slate-100/90 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#D92B6B] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D92B6B] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(217,43,107,0.35)] transition hover:bg-[#B81E57]"
                >
                  <span>Claim Free Meta Audit</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#D92B6B]" />
                  Delivered via video within 24 hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  100% free — keep the ad concepts
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
                <Plus className="h-3.5 w-3.5 text-[#FF5C93]" />
                <span>Common Questions</span>
                <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                <InstagramIcon className="h-3 w-3 text-[#FF5C93]" />
              </div>

              <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Everything You Need to Know Before Launching on Meta.
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
                            ? "bg-[#D92B6B] text-white"
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