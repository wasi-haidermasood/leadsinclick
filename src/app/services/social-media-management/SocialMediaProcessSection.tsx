"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Compass,
  Film,
  CalendarCheck,
  MessageSquareHeart,
  ArrowUpRight,
  CheckCircle2,
  Zap,
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

const STEPS = [
  {
    step: "01",
    badge: "Week 1",
    title: "Brand Voice, Social SEO & Content Pillar Blueprint",
    description:
      "We audit your current profiles across Instagram, Facebook, LinkedIn, and YouTube, optimize your bios and highlights for conversion, and map out a 30-day content calendar built around buyer-intent pillars.",
    icon: Compass,
    metrics: [
      { label: "Profile Conversion Lift", value: "+185%" },
      { label: "Planned Ahead", value: "30-Day Calendar" },
    ],
    tags: ["Bio & Highlight Revamp", "Content Pillars", "Competitor Benchmarking"],
    accent: "from-[#6D28D9] to-[#3B0764]",
  },
  {
    step: "02",
    badge: "Weekly Sprint",
    title: "Studio-Grade Reels, Carousels & LinkedIn Ghostwriting",
    description:
      "Our creative pod scripts, edits, and designs scroll-stopping 9:16 Reels & Shorts, educational swipe carousels, and executive LinkedIn thought-leadership posts—all delivered in a 1-click approval workspace.",
    icon: Film,
    metrics: [
      { label: "Avg. Watch Retention", value: "68%+" },
      { label: "Creative Formats", value: "Reels / Carousels / Text" },
    ],
    tags: ["9:16 Video Editing", "Custom Brand Carousels", "LinkedIn Ghostwriting"],
    accent: "from-[#E1306C] to-[#9D174D]",
  },
  {
    step: "03",
    badge: "Daily Execution",
    title: "Omnichannel Publishing & Peak-Time Distribution",
    description:
      "We cross-publish natively to Instagram, Facebook, LinkedIn, YouTube Shorts, and X at peak audience activity windows—complete with trending audio, Social SEO keywords, and interactive Story polls.",
    icon: CalendarCheck,
    metrics: [
      { label: "Posting Consistency", value: "100% On-Time" },
      { label: "Channels Covered", value: "IG / FB / LI / YT / X" },
    ],
    tags: ["Peak-Window Scheduling", "Interactive IG Stories", "Social SEO Captions"],
    accent: "from-[#0A66C2] to-[#1E3A8A]",
  },
  {
    step: "04",
    badge: "Ongoing Daily",
    title: "Active Community Management, DM Funnels & Reporting",
    description:
      "We reply to comments, engage with ideal prospects, turn inbound Instagram & LinkedIn DMs into booked appointments, and deliver monthly analytics reports tying social reach directly to pipeline.",
    icon: MessageSquareHeart,
    metrics: [
      { label: "DM Response Time", value: "< 15 Mins" },
      { label: "Avg. Reach Growth", value: "+340%" },
    ],
    tags: ["Daily Comment Replies", "DM-to-Lead Conversion", "Monthly ROI Reports"],
    accent: "from-[#059669] to-[#065F46]",
  },
] as const;

export default function SocialMediaProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-14 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* TOP HEADER ROW */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
              <Plus className="h-3.5 w-3.5 text-[#A78BFA]" />
              <span>How Our Social Engine Works</span>
              <span className="ml-1 flex items-center gap-1.5">
                <InstagramIcon className="h-3 w-3 text-[#E1306C]" />
                <FacebookIcon className="h-3 w-3 text-[#1877F2]" />
                <LinkedInIcon className="h-3 w-3 text-[#0A66C2]" />
              </span>
            </div>

            <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl lg:text-[3.2rem]">
              From Content Calendar to Inbound Leads
              <br />
              in 4 Proven Sprints.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              We handle 100% of the heavy lifting—strategy, scripting, video
              editing, design, scheduling, and community replies—so you stay
              consistent across every platform without lifting a finger.
            </p>
          </motion.div>
        </div>

        {/* 4-STEP BENTO GRID */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + idx * 0.08,
                  ease: EASE,
                }}
                className="group flex flex-col justify-between rounded-[24px] bg-[#F4F6FA] p-5 text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7"
              >
                {/* Top Row: Step Number Pill + Social Icons + Timeline Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-sm font-bold text-white shadow-md`}
                      >
                        {item.step}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#E1306C]">
                        <InstagramIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1877F2]">
                        <FacebookIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0A66C2]">
                        <LinkedInIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-[#6D28D9]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-xl leading-snug font-bold text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Inner White Ticket Metric Box + Tags */}
                <div className="mt-6">
                  <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3.5 shadow-sm sm:p-4">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[11px] font-medium text-slate-400">
                          {m.label}
                        </p>
                        <p className="mt-0.5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#6D28D9]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LIVE DM CONVERSION & APPROVAL PORTAL BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl sm:mt-8 sm:rounded-[28px] sm:p-7 lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6D28D9] text-white shadow-[0_12px_28px_rgba(109,40,217,0.45)]">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Comment &amp; DM Lead Automation
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75">
                  <InstagramIcon className="h-3.5 w-3.5 text-[#E1306C]" />
                  Instagram +
                  <FacebookIcon className="h-3.5 w-3.5 text-[#1877F2]" />
                  Facebook +
                  <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                  LinkedIn Inboxes
                </span>
              </div>
              <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                We Turn Every &ldquo;Info&rdquo; Comment, Story Reply &amp;
                LinkedIn Message Into a Qualified Sales Conversation
              </h3>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-md transition hover:bg-[#6D28D9] hover:text-white sm:w-auto sm:text-sm"
          >
            <span>Request Free Social Audit</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}