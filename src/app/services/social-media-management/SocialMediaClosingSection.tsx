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

const FAQS = [
  {
    q: "Which social media platforms do you manage for our brand?",
    a: "We manage Instagram, Facebook, LinkedIn, YouTube Shorts, TikTok, and X (Twitter). We tailor every piece of content natively to each platform's format and algorithm rather than cross-posting generic templates.",
  },
  {
    q: "Do we get to review and approve posts before they go live?",
    a: "Yes, 100%. Every month we upload your scripted Reels, designed carousels, Stories, and LinkedIn posts into a shared 1-click approval calendar. Nothing goes live without your sign-off.",
  },
  {
    q: "What if we don't have time to film videos every week?",
    a: "We make it effortless. With just 45 minutes of guided remote recording once a month—or using your existing brand assets, B-roll, and our UGC creator network—our editors produce a full month of high-retention Reels and Shorts.",
  },
  {
    q: "Do you also reply to comments and DMs on our profiles?",
    a: "Yes. Active community management is built into our service. We respond to comments daily, engage with target accounts, and use conversational DM workflows on Instagram, Facebook, and LinkedIn to turn engaged followers into booked leads.",
  },
] as const;

export default function SocialMediaClosingSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const router = useRouter();

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-10 pb-20 text-white sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-12 lg:gap-8">
          {/* LEFT 7 COLUMNS: ROYAL VIOLET CONVERSION CARD WITH MULTI-PLATFORM ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-gradient-to-br from-[#6D28D9] via-[#5B21B6] to-[#3B0764] p-6 text-white shadow-[0_32px_90px_-20px_rgba(109,40,217,0.5)] sm:rounded-[34px] sm:p-10 lg:col-span-7"
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
              {/* Top Pill with Instagram, Facebook, LinkedIn & YouTube Icons */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Free Omnichannel Social Audit &amp; 30-Day Content Plan</span>
                <span className="ml-1 flex items-center gap-1.5 rounded-full bg-white px-2 py-0.5">
                  <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                  <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                  <LinkedInIcon className="h-3 w-3 text-[#0A66C2]" />
                  <YouTubeIcon className="h-3 w-3 text-[#FF0000]" />
                </span>
              </div>

              <h2 className="mt-5 text-[1.8rem] leading-[1.1] font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                Ready to Dominate Instagram, Facebook, LinkedIn &amp; Beyond?
              </h2>

              <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Get a complimentary video teardown of your current social media
                presence, profile conversion gaps, and a custom 30-day Reels,
                Carousel &amp; LinkedIn content roadmap.
              </p>

              {/* 4 Value Pills */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "IG, FB & LinkedIn Profile Teardown",
                  "Custom 30-Day Content Calendar",
                  "3 Sample Reels & Carousel Hooks",
                  "Competitor Engagement Benchmark",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#6D28D9]">
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
                  type="text"
                  required
                  placeholder="Enter your @handle, LinkedIn, or website URL..."
                  className="h-12 flex-1 rounded-xl bg-slate-100/90 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#6D28D9] focus:outline-none"
                />
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(109,40,217,0.35)] transition hover:bg-[#5B21B6]"
                >
                  <span>Claim Free Social Plan</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </form>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#6D28D9]" />
                  Delivered via video within 24 hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  100% free — keep the 30-day content plan
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
                <Plus className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>Common Questions</span>
                <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                <LinkedInIcon className="h-3 w-3 text-[#0A66C2]" />
              </div>

              <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Everything You Need to Know About Our Social Management.
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
                            ? "bg-[#6D28D9] text-white"
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