"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  FileText,
  Filter,
  Folder,
  MessageSquareDot,
  PhoneCall,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Beams from "@/components/ui/Beams";
import { Accent, EASE, Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

/* -------------------------------------------------------------------------- */
/* Optional Next/Image slots — set a path (e.g. "/team-1.jpg") when ready     */
/* If left empty (""), clean built-in visuals/avatars render automatically.   */
/* -------------------------------------------------------------------------- */
const IMAGE_SLOTS = {
  folderPreviewBanner: "", // e.g. "/images/lead-folders-bg.png"
  teamMemberOne: "", // e.g. "/images/anna.jpg"
  teamMemberTwo: "", // e.g. "/images/emma.jpg"
};

const TRUST_INDICATORS = [
  {
    icon: Building2,
    value: "350+",
    label: "Businesses Helped",
    detail: "Across 18+ high-ticket industries",
  },
  {
    icon: Users,
    value: "1.2M+",
    label: "Qualified Leads Generated",
    detail: "Delivered straight to WhatsApp & CRM",
  },
  {
    icon: Target,
    value: "16,400+",
    label: "Campaigns Managed",
    detail: "Across Meta, Google & YouTube",
  },
];

const PROCESS_STEPS = [
  { label: "Market & Competitor Analysis", active: true },
  { label: "High-Intent Funnel Planning", active: true },
  { label: "Ad Creative & Hook Engineering", active: false },
  { label: "Omnichannel Launch & Scale", active: false },
  { label: "Lead Quality & ROI Review", active: false },
];

const REVIEWS = [
  {
    initial: "L",
    name: "Liam Carter",
    role: "Founder, Apex Solar",
    color: "bg-[#BAF235] text-black",
    quote:
      "“Amazing insights — we doubled our qualified conversions and booked 42 sales calls in weeks!”",
  },
  {
    initial: "S",
    name: "Sofia Mendes",
    role: "Growth Director, Lumina Aesthetics",
    color: "bg-[#8977C6] text-white",
    quote:
      "“Clear strategy, fast turnaround, and real buyer leads in our WhatsApp every morning.”",
  },
];

const APPROACH_PILLARS = [
  {
    step: "01",
    icon: Target,
    title: "Precision Audience & Intent Targeting",
    description:
      "We don’t buy cheap traffic. We intercept high-intent buyers on Google Search and deploy AI-trained lookalike audiences on Meta to attract decision-makers ready to buy.",
    metric: "-38% Lower Cost Per Lead",
    accent: "from-[#BAF235]/20 via-[#BAF235]/5 to-transparent",
    iconClass: "border-[#BAF235]/30 bg-[#BAF235]/10 text-[#BAF235]",
  },
  {
    step: "02",
    icon: Filter,
    title: "Multi-Step Lead Qualification Funnels",
    description:
      "Stop wasting hours on tire-kickers. Our custom landing pages pre-qualify prospects by budget, timeline, and location before they ever hit your calendar.",
    metric: "91% Lead-to-Call Show Rate",
    accent: "from-[#42CED3]/20 via-[#42CED3]/5 to-transparent",
    iconClass: "border-[#42CED3]/30 bg-[#42CED3]/10 text-[#42CED3]",
  },
  {
    step: "03",
    icon: MessageSquareDot,
    title: "Instant WhatsApp & CRM Speed-to-Lead",
    description:
      "Every qualified lead triggers an instant alert to your sales team on WhatsApp and your CRM within 5 seconds—plus automated follow-up sequences that book the call.",
    metric: "< 15 Sec Delivery Speed",
    accent: "from-[#8977C6]/25 via-[#8977C6]/5 to-transparent",
    iconClass: "border-[#8977C6]/30 bg-[#8977C6]/15 text-[#C8BAFA]",
  },
];

export default function LeadGenerationHero() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#07070B] pt-[104px] text-white">
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
        {/* Soft vignette overlay so text & Bento cards remain crisp */}
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
            "radial-gradient(ellipse at center, #7963B9 0%, #455FDC 35%, rgba(184,241,53,0.18) 65%, transparent 80%)",
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
      {/* HERO SECTION                                                          */}
      {/* ===================================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-8 pb-20 sm:px-8 sm:pt-14">
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
            <p className="font-display text-sm font-bold text-brand">+410%</p>
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
          <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
          <div>
            <p className="font-display text-sm font-bold text-brand">1.2M+</p>
            <p className="text-[11px] font-medium text-zinc-300">
              leads generated
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
            <p className="font-display text-sm font-bold text-brand">16.4k+</p>
            <p className="text-[11px] font-medium text-zinc-300">
              campaigns managed
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
              350+
            </p>
            <p className="text-[11px] font-medium text-zinc-300">
              businesses helped
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
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span>Full-Funnel Lead Generation Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
            className="mt-6 font-display text-4xl leading-[1.06] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-[66px]"
          >
            We Turn Clicks <br className="hidden sm:inline" />
            Into <Accent>Customers.</Accent>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: EASE }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-zinc-300 sm:text-lg"
          >
            We build and manage high-converting ad campaigns, qualification
            funnels, and instant WhatsApp &amp; CRM pipelines—so your sales team
            wakes up to exclusive, ready-to-buy leads every single day.
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
              <span>Get More Leads</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-brand transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <Calendar className="h-4 w-4 text-brand" />
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
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
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
            {/* LEFT COLUMN: Weekly Growth Stats + Process Stepper              */}
            {/* --------------------------------------------------------------- */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              {/* Top Mini Stats Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs font-medium text-zinc-400">
                      Growth this week:
                    </span>
                    <span className="inline-flex items-center gap-1 font-display text-sm font-bold text-brand">
                      +92% <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs font-medium text-zinc-400">
                      New Leads today:
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#9884D6]">
                      130 <Users className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400">
                      Budget used:
                    </span>
                    <span className="font-display text-sm font-bold text-emerald-400">
                      $1.2K
                    </span>
                  </div>
                </div>
              </div>

              {/* Process Vertical Timeline Card */}
              <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5">
                <p className="font-display text-sm font-semibold text-white">
                  Process
                </p>

                <div className="relative mt-4 space-y-4 pl-4">
                  {/* Vertical connecting line */}
                  <div
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-[5px] w-[1.5px] bg-gradient-to-b from-brand via-[#8977C6] to-white/10"
                  />

                  {PROCESS_STEPS.map((step) => (
                    <div
                      key={step.label}
                      className="relative flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          "relative z-10 -ml-[15px] h-2.5 w-2.5 rounded-full ring-4 ring-[#13141C]",
                          step.active
                            ? "bg-brand shadow-[0_0_8px_#b8f135]"
                            : "bg-[#8977C6]/60"
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
            {/* RIGHT 9 COLUMNS: Reviews, Folders, Campaign & Team              */}
            {/* --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-9 lg:grid-cols-9">
              {/* MIDDLE TOP: Reviews Card (4 cols) */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-4">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-semibold text-white">
                    Reviews
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                    <Star className="h-3.5 w-3.5 fill-amber-300" /> 4.9/5
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

              {/* RIGHT TOP: Green Folder Showcase + File Pills (5 cols) */}
              <div className="flex flex-col gap-3 lg:col-span-5">
                {/* Green Wavy Card with 2 Frosted Folders */}
                <div
                  className="relative flex flex-1 items-center justify-around overflow-hidden rounded-2xl border border-white/20 p-6 shadow-inner"
                  style={{
                    background:
                      "radial-gradient(120% 130% at 15% 10%, #A5F08C 0%, #68C852 48%, #2E8B3C 100%)",
                  }}
                >
                  {IMAGE_SLOTS.folderPreviewBanner ? (
                    <Image
                      src={IMAGE_SLOTS.folderPreviewBanner}
                      alt="Campaign Assets"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      {/* Decorative organic wave highlights */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-white/25 blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-[#0E2414]/25 blur-2xl"
                      />

                      {/* Folder 1: Ad Creatives */}
                      <div className="group relative z-10 flex flex-col items-center text-center">
                        <div className="relative flex h-24 w-28 items-center justify-center rounded-2xl border border-white/60 bg-white/80 shadow-[0_14px_30px_rgba(14,36,20,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                          <div className="absolute -top-2 left-3 h-3 w-11 rounded-t-md bg-white/90" />
                          <Folder className="h-10 w-10 fill-[#68C852]/30 text-[#14361D]" />
                        </div>
                        <p className="mt-3 font-display text-xs font-bold text-white drop-shadow">
                          Ad Creatives
                        </p>
                        <p className="text-[11px] font-medium text-white/85">
                          62 items
                        </p>
                      </div>

                      {/* Folder 2: Sales Scripts */}
                      <div className="group relative z-10 flex flex-col items-center text-center">
                        <div className="relative flex h-24 w-28 items-center justify-center rounded-2xl border border-white/60 bg-white/80 shadow-[0_14px_30px_rgba(14,36,20,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                          <div className="absolute -top-2 left-3 h-3 w-11 rounded-t-md bg-white/90" />
                          <Folder className="h-10 w-10 fill-[#68C852]/30 text-[#14361D]" />
                        </div>
                        <p className="mt-3 font-display text-xs font-bold text-white drop-shadow">
                          Sales Scripts
                        </p>
                        <p className="text-[11px] font-medium text-white/85">
                          36 items
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* File Download Pills Row (SalesPlan.pptx & Report.xlsx) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#13141C]/95 px-3.5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#F77D9E]/15 text-[#F77D9E]">
                        <FileText className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          SalesPlan.pptx
                        </p>
                        <p className="text-[10px] text-zinc-500">4.9mb</p>
                      </div>
                    </div>
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#13141C]/95 px-3.5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/15 text-emerald-400">
                        <FileSpreadsheet className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">
                          Report.xlsx
                        </p>
                        <p className="text-[10px] text-zinc-500">6.1mb</p>
                      </div>
                    </div>
                    <Download className="h-3.5 w-3.5 text-zinc-500" />
                  </div>
                </div>
              </div>

              {/* BOTTOM MIDDLE: Campaign Spotlight Card (5 cols) */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/10">
                    <Sparkles className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Nexera Growth Partners
                    </p>
                    <p className="text-xs text-zinc-400">
                      Lead Generation Campaign · Active
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
                  <div>
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      $320,100
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Revenue generated
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-brand sm:text-2xl">
                      91%
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Conversion increase
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      +2,120
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Qualified Leads
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM RIGHT: Meet the Team / Activity Card (4 cols) */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#13141C]/95 p-5 lg:col-span-4">
                <p className="font-display text-sm font-semibold text-white">
                  Meet the team
                </p>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#F77D9E] to-[#8977C6] text-xs font-bold text-white">
                        {IMAGE_SLOTS.teamMemberOne ? (
                          <Image
                            src={IMAGE_SLOTS.teamMemberOne}
                            alt="Anna"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          "AN"
                        )}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">Anna</p>
                        <p className="text-[11px] text-zinc-400">
                          Campaign Strategy Approved
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500">1min ago</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#42CED3] to-[#536DEB] text-xs font-bold text-white">
                        {IMAGE_SLOTS.teamMemberTwo ? (
                          <Image
                            src={IMAGE_SLOTS.teamMemberTwo}
                            alt="Emma"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          "EM"
                        )}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">Emma</p>
                        <p className="text-[11px] text-zinc-400">
                          Uploaded Sales Assets
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* SECOND SECTION: "OUR APPROACH — We turn strategy into scale"          */}
      {/* ===================================================================== */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.1] bg-gradient-to-b from-[#11121A]/90 via-[#0B0C12]/90 to-[#08090D]/95 px-6 py-20 shadow-[0_-20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:px-12 sm:py-24">
          {/* Decorative orbital rings inside Approach container */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[640px] w-[1050px] -translate-x-1/2 rounded-full border border-white/[0.05]"
          />

          {/* Floating Left Metric Node (+45% lead growth) */}
          <div className="pointer-events-none absolute top-14 left-10 hidden items-center gap-2.5 lg:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
            <div>
              <p className="font-display text-sm font-bold text-brand">+45%</p>
              <p className="text-[11px] text-zinc-400">weekly lead growth</p>
            </div>
          </div>

          {/* Floating Right Metric Node (6.4x ad returns) */}
          <div className="pointer-events-none absolute right-12 bottom-12 hidden items-center gap-2.5 lg:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
            <div>
              <p className="font-display text-sm font-bold text-brand">6.4×</p>
              <p className="text-[11px] text-zinc-400">average ad returns</p>
            </div>
          </div>

          {/* Section Heading */}
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-[#9884D6] uppercase">
                <span className="h-2 w-2 rounded-full bg-[#9884D6]" />
                OUR APPROACH
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                We turn strategy into <Accent>scale</Accent>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Most agencies stop at clicks and impressions. We engineer the
                entire buyer journey—from the first ad impression to a qualified
                prospect booked on your sales calendar.
              </p>
            </div>
          </Reveal>

          {/* 3 Approach Pillars */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {APPROACH_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.1 * i}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12131C]/90 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
                    <div
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
                        pillar.accent
                      )}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "grid h-12 w-12 place-items-center rounded-2xl border",
                            pillar.iconClass
                          )}
                        >
                          <Icon className="h-5.5 w-5.5" />
                        </span>
                        <span className="font-mono text-xs font-bold text-zinc-500">
                          STEP {pillar.step}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-xl font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      <span className="text-xs font-semibold text-zinc-200">
                        {pillar.metric}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Conversion Banner */}
          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-brand/25 bg-gradient-to-r from-brand/15 via-brand/5 to-transparent p-7 sm:p-9 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-brand uppercase">
                  <Zap className="h-3.5 w-3.5" /> Ready to flood your pipeline?
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Let&apos;s build your predictable lead machine in 7 days.
                </h3>
                <p className="mt-1.5 text-sm text-zinc-300">
                  Get a free custom audit of your market, ad angles, and funnel
                  opportunities.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(184,241,53,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#c8f856]"
                >
                  <span>Get More Leads</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                >
                  <PhoneCall className="h-4 w-4 text-brand" />
                  <span>Book a Free Strategy Call</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}