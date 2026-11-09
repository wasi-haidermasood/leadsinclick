"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Code2,
  Download,
  FileCode2,
  FileText,
  Folder,
  Gauge,
  Globe,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import Beams from "@/components/ui/Beams";
import { Accent, EASE } from "@/components/ui";
import { cn } from "@/utils/cn";

/* -------------------------------------------------------------------------- */
/* Optional Next/Image slots — set a path (e.g. "/team-1.jpg") when ready     */
/* If left empty (""), clean built-in visuals/avatars render automatically.   */
/* -------------------------------------------------------------------------- */
const IMAGE_SLOTS = {
  folderPreviewBanner: "", // e.g. "/images/web-folders-bg.png"
  teamMemberOne: "", // e.g. "/images/arjun.jpg"
  teamMemberTwo: "", // e.g. "/images/maya.jpg"
};

const TRUST_INDICATORS = [
  {
    icon: Globe,
    value: "240+",
    label: "Websites Launched",
    detail: "Custom-engineered for high-growth brands",
  },
  {
    icon: Gauge,
    value: "99/100",
    label: "PageSpeed Score",
    detail: "Sub-second Core Web Vitals performance",
  },
  {
    icon: TrendingUp,
    value: "2.4×",
    label: "Conversion Rate Lift",
    detail: "Average increase in booked enquiries",
  },
];

const BUILD_STEPS = [
  { label: "UX Wireframing & Conversion Copy", active: true },
  { label: "Bespoke Figma Design System", active: true },
  { label: "Next.js & Clean Code Architecture", active: false },
  { label: "Speed, SEO & Schema Optimization", active: false },
  { label: "QA Testing, Launch & CRM Hookup", active: false },
];

const REVIEWS = [
  {
    initial: "M",
    name: "Marcus Vance",
    role: "CEO, Vance Architecture",
    color: "bg-[#42CED3] text-[#05282D]",
    quote:
      "“Our new site loads in 0.5 seconds and tripled our inbound consultation bookings in the first 30 days.”",
  },
  {
    initial: "E",
    name: "Elena Rostova",
    role: "Founder, Kova Skincare",
    color: "bg-[#BAF235] text-black",
    quote:
      "“Finally a web team that understands conversion psychology—not just pretty visuals. Worth every penny.”",
  },
];

export default function WebsiteDev() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07070B] pt-[104px] pb-20 text-white">
      {/* ===================================================================== */}
      {/* WEBGL BEAMS BACKGROUND                                                */}
      {/* ===================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      >
        <Beams
          beamWidth={140}
          color="#605f5fff"
          rotation={30}
          speed={1}
          glow={0.6}
          waveLength={233}
          depth={1}
          sharpness={0.6}
          twist={0}
          fillLight={0.3}
          brightness={1.6}
          grain={0.35}
          variation={0}
          mouseInteraction
          mouseStrength={1}
          fade={0}
          opacity={1}
          intro
          lightMode={false}
          className="h-full w-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 24%, rgba(7, 7, 11, 0.18) 0%, rgba(7, 7, 11, 0.68) 68%, rgba(7, 7, 11, 0.9) 100%)",
          }}
        />
      </div>

      {/* ===================================================================== */}
      {/* TOP AMBIENT GLOWS & ORBITAL ARCS                                      */}
      {/* ===================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[680px] w-[1280px] -translate-x-1/2 rounded-full opacity-30 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #16B8C5 0%, #455FDC 38%, rgba(184,241,53,0.16) 68%, transparent 82%)",
        }}
      />

      {/* Concentric Orbital Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[210px] left-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full border border-white/[0.07] sm:h-[1320px] sm:w-[1320px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[290px] left-1/2 -z-10 h-[920px] w-[920px] -translate-x-1/2 rounded-full border border-white/[0.06] sm:h-[1120px] sm:w-[1120px]"
      />

      {/* ===================================================================== */}
      {/* HERO CONTENT                                                          */}
      {/* ===================================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-14">
        {/* Floating Orbital Trust Callout #1 — Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
          className="pointer-events-none absolute top-28 left-6 hidden items-center gap-2.5 lg:flex xl:left-12"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-brand">2.4×</p>
            <p className="text-[11px] font-medium text-zinc-300">
              conversion lift
            </p>
          </div>
        </motion.div>

        {/* Floating Orbital Trust Callout #2 — Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: EASE }}
          className="pointer-events-none absolute top-16 right-10 hidden items-center gap-2.5 lg:flex xl:right-20"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#42CED3] shadow-[0_0_10px_#42CED3]" />
          <div>
            <p className="font-display text-sm font-bold text-[#42CED3]">
              99/100
            </p>
            <p className="text-[11px] font-medium text-zinc-300">
              Google PageSpeed
            </p>
          </div>
        </motion.div>

        {/* Floating Orbital Trust Callout #3 — Mid Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
          className="pointer-events-none absolute top-64 right-4 hidden items-center gap-2.5 text-right lg:flex xl:right-8"
        >
          <div>
            <p className="font-display text-sm font-bold text-brand">0.6s</p>
            <p className="text-[11px] font-medium text-zinc-300">
              average load time
            </p>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
        </motion.div>

        {/* Floating Orbital Trust Callout #4 — Mid Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
          className="pointer-events-none absolute top-64 left-4 hidden items-center gap-2.5 lg:flex xl:left-8"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#42CED3] shadow-[0_0_10px_#42CED3]" />
          <div>
            <p className="font-display text-sm font-bold text-[#42CED3]">
              240+
            </p>
            <p className="text-[11px] font-medium text-zinc-300">
              websites launched
            </p>
          </div>
        </motion.div>

        {/* Centered Hero Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur-md"
          >
            <Code2 className="h-3.5 w-3.5 text-[#42CED3]" />
            <span>Custom Web Engineering &amp; Conversion Design</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
            className="mt-6 font-display text-4xl leading-[1.06] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-[66px]"
          >
            Websites Built to <br className="hidden sm:inline" />
            Convert &amp; <Accent>Scale.</Accent>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: EASE }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-zinc-300 sm:text-lg"
          >
            Your website should be your highest-performing salesperson. We
            design and engineer blazing-fast, mobile-first websites with
            persuasive copy, SEO architecture, and seamless lead capture built
            right in.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand py-2.5 pr-2.5 pl-6 text-sm font-bold text-black shadow-[0_12px_36px_rgba(184,241,53,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c6f752] hover:shadow-[0_16px_44px_rgba(184,241,53,0.45)]"
            >
              <span>Launch My Website</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-brand transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <Calendar className="h-4 w-4 text-[#42CED3]" />
              <span>Book a Free Strategy Call</span>
            </Link>
          </motion.div>

          {/* Trust Indicators Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7, ease: EASE }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {TRUST_INDICATORS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3.5 rounded-2xl border border-white/[0.1] bg-[#101118]/80 px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#42CED3]/30 bg-[#42CED3]/10 text-[#42CED3]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-xl font-bold text-white">
                        {item.value}
                      </span>
                      <span className="text-xs font-semibold text-zinc-200">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* =================================================================== */}
        {/* BENTO DASHBOARD FRAME                                               */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.85, ease: EASE }}
          className="relative mx-auto mt-14 max-w-6xl rounded-[32px] border border-white/[0.12] bg-[#0D0E14]/88 p-4 shadow-[0_32px_100px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* --------------------------------------------------------------- */}
            {/* LEFT COLUMN: Core Vitals + Build Process                        */}
            {/* --------------------------------------------------------------- */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              {/* Top Mini Vitals Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs font-medium text-zinc-400">
                      Core Web Vitals:
                    </span>
                    <span className="inline-flex items-center gap-1 font-display text-sm font-bold text-brand">
                      99/100 <Zap className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs font-medium text-zinc-400">
                      First Contentful Paint:
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#42CED3]">
                      0.5s <Gauge className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400">
                      Conversion Lift:
                    </span>
                    <span className="font-display text-sm font-bold text-emerald-400">
                      +184%
                    </span>
                  </div>
                </div>
              </div>

              {/* Build Process Vertical Timeline Card */}
              <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5">
                <p className="font-display text-sm font-semibold text-white">
                  Build Roadmap
                </p>

                <div className="relative mt-4 space-y-4 pl-4">
                  <div
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-[5px] w-[1.5px] bg-gradient-to-b from-[#42CED3] via-brand to-white/10"
                  />

                  {BUILD_STEPS.map((step) => (
                    <div
                      key={step.label}
                      className="relative flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          "relative z-10 -ml-[15px] h-2.5 w-2.5 rounded-full ring-4 ring-[#13141C]",
                          step.active
                            ? "bg-[#42CED3] shadow-[0_0_8px_#42CED3]"
                            : "bg-zinc-600"
                        )}
                      />
                      <span
                        className={cn(
                          "text-xs font-medium",
                          step.active ? "text-white" : "text-zinc-400"
                        )}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------- */}
            {/* RIGHT 9 COLUMNS: Reviews, Design Folders, Case Study & Team     */}
            {/* --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-9 lg:grid-cols-9">
              {/* MIDDLE TOP: Client Reviews Card (4 cols) */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-4">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-semibold text-white">
                    Client Feedback
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                    <Star className="h-3.5 w-3.5 fill-amber-300" /> 5.0/5
                  </span>
                </div>

                <div className="mt-3.5 space-y-3">
                  {REVIEWS.map((review) => (
                    <div
                      key={review.name}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs font-bold",
                            review.color
                          )}
                        >
                          {review.initial}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {review.name}
                          </p>
                          <p className="text-[10px] text-zinc-500">
                            {review.role}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                        {review.quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT TOP: Cyan/Teal Folder Showcase + Deliverable Pills (5 cols) */}
              <div className="flex flex-col gap-3 lg:col-span-5">
                <div
                  className="relative flex flex-1 items-center justify-around overflow-hidden rounded-2xl border border-white/25 p-6 shadow-inner"
                  style={{
                    background:
                      "radial-gradient(120% 130% at 15% 10%, #64E4E9 0%, #16B8C5 50%, #0B7A85 100%)",
                  }}
                >
                  {IMAGE_SLOTS.folderPreviewBanner ? (
                    <Image
                      src={IMAGE_SLOTS.folderPreviewBanner}
                      alt="Website Design System Assets"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-white/25 blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-[#05282D]/30 blur-2xl"
                      />

                      {/* Folder 1: UI Design System */}
                      <div className="group relative z-10 flex flex-col items-center text-center">
                        <div className="relative flex h-24 w-28 items-center justify-center rounded-2xl border border-white/60 bg-white/85 shadow-[0_14px_30px_rgba(5,40,45,0.28)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                          <div className="absolute -top-2 left-3 h-3 w-11 rounded-t-md bg-white/90" />
                          <Folder className="h-10 w-10 fill-[#16B8C5]/30 text-[#05282D]" />
                        </div>
                        <p className="mt-3 font-display text-xs font-bold text-white drop-shadow">
                          UI Design System
                        </p>
                        <p className="text-[11px] font-medium text-white/85">
                          48 screens
                        </p>
                      </div>

                      {/* Folder 2: Production Code */}
                      <div className="group relative z-10 flex flex-col items-center text-center">
                        <div className="relative flex h-24 w-28 items-center justify-center rounded-2xl border border-white/60 bg-white/85 shadow-[0_14px_30px_rgba(5,40,45,0.28)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                          <div className="absolute -top-2 left-3 h-3 w-11 rounded-t-md bg-white/90" />
                          <Folder className="h-10 w-10 fill-[#16B8C5]/30 text-[#05282D]" />
                        </div>
                        <p className="mt-3 font-display text-xs font-bold text-white drop-shadow">
                          Next.js Components
                        </p>
                        <p className="text-[11px] font-medium text-white/85">
                          84 modules
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Deliverable Pills Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#13141C]/95 px-3.5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#42CED3]/15 text-[#42CED3]">
                        <FileCode2 className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          DesignSystem.fig
                        </p>
                        <p className="text-[10px] text-zinc-500">18.4mb</p>
                      </div>
                    </div>
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#13141C]/95 px-3.5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          SpeedAudit.pdf
                        </p>
                        <p className="text-[10px] text-zinc-500">3.2mb</p>
                      </div>
                    </div>
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </div>
                </div>
              </div>

              {/* BOTTOM MIDDLE: Website Launch Spotlight Card (5 cols) */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#42CED3]/30 bg-[#42CED3]/10">
                    <Sparkles className="h-5 w-5 text-[#42CED3]" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Veloura Luxury &amp; Co.
                    </p>
                    <p className="text-xs text-zinc-400">
                      Custom Next.js Redesign + CRO Funnel
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
                  <div>
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      $410,000
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Pipeline generated
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-brand sm:text-2xl">
                      99/100
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Mobile speed score
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      +184%
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Enquiry rate lift
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM RIGHT: Meet the Engineering Team Card (4 cols) */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-4">
                <p className="font-display text-sm font-semibold text-white">
                  Engineering Activity
                </p>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#42CED3] to-[#536DEB] text-xs font-bold text-white">
                        {IMAGE_SLOTS.teamMemberOne ? (
                          <Image
                            src={IMAGE_SLOTS.teamMemberOne}
                            alt="Arjun"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          "AR"
                        )}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Arjun
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          Deployed Production Build v2.4
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500">2min ago</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#F77D9E] to-[#8977C6] text-xs font-bold text-white">
                        {IMAGE_SLOTS.teamMemberTwo ? (
                          <Image
                            src={IMAGE_SLOTS.teamMemberTwo}
                            alt="Maya"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          "MA"
                        )}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">Maya</p>
                        <p className="text-[11px] text-zinc-400">
                          Approved Mobile UX Prototype
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500">1h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}