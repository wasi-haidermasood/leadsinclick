"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ClipboardCheck,
  Globe,
  LineChart,
  MapPin,
  Megaphone,
  Navigation,
  Phone,
  Rocket,
  SearchCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Accent, EASE, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

/* ------------------------------- Mock visuals ------------------------------ */

function WebsiteMock() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090A0F] shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      aria-hidden="true"
    >
      {/* Browser top bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <span className="ml-2 flex flex-1 items-center justify-between truncate rounded-lg border border-white/[0.06] bg-black/40 px-3 py-1 text-[11px] text-zinc-400">
          <span>https://yourbrand.com</span>
          <span className="text-[10px] font-medium text-emerald-400">SSL</span>
        </span>
        <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-black shadow-[0_0_16px_rgba(184,241,53,0.4)]">
          Speed 99
        </span>
      </div>

      {/* Website Canvas */}
      <div className="relative overflow-hidden p-5 sm:p-6">
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full opacity-25 blur-2xl"
          style={{
            background: "radial-gradient(circle, #42CED3 0%, transparent 70%)",
          }}
        />

        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#42CED3]/30 bg-[#42CED3]/10 px-2.5 py-1 text-[10px] font-semibold text-[#42CED3]">
          <Sparkles className="h-3 w-3" /> High-Converting Architecture
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-5 w-4/5 rounded-md bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
          <div className="h-5 w-3/5 rounded-md bg-gradient-to-r from-white/75 to-white/20" />
        </div>

        <div className="mt-3.5 space-y-1.5">
          <div className="h-2.5 w-2/3 rounded bg-zinc-700/80" />
          <div className="h-2.5 w-1/2 rounded bg-zinc-800" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[11px] font-bold text-black shadow-[0_6px_20px_rgba(184,241,53,0.3)]">
            Book Free Call <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold text-zinc-300">
            View Pricing
          </span>
        </div>

        {/* Bottom mini metric cards */}
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {[
            { label: "Conv. Rate", value: "8.4%", delta: "+142%" },
            { label: "Load Time", value: "0.6s", delta: "Core Vitals" },
            { label: "Enquiries", value: "312/mo", delta: "Live CRM" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 backdrop-blur-sm"
            >
              <p className="text-[10px] font-medium text-zinc-500">
                {item.label}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-white">
                {item.value}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold text-brand">
                {item.delta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdsMock() {
  const rows = [
    {
      name: "Meta — Lead Gen (Lookalike)",
      spend: "$48,200",
      leads: 612,
      roas: "7.2×",
      w: "92%",
    },
    {
      name: "Google — Search (High Intent)",
      spend: "$36,540",
      leads: 418,
      roas: "6.8×",
      w: "78%",
    },
    {
      name: "Meta — Retargeting Funnel",
      spend: "$12,900",
      leads: 286,
      roas: "9.4×",
      w: "64%",
    },
    {
      name: "YouTube — In-Market Intent",
      spend: "$18,300",
      leads: 154,
      roas: "4.1×",
      w: "46%",
    },
  ];
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090A0F] shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_#b8f135]" />
          <span className="text-xs font-semibold text-white">
            Live Ad Manager
          </span>
        </div>
        <span className="rounded-full border border-brand/30 bg-brand/15 px-2.5 py-0.5 text-[10px] font-bold text-brand">
          Last 30 days
        </span>
      </div>

      {/* Top KPI Summary */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.07] bg-white/[0.015]">
        <div className="px-4 py-2.5">
          <p className="text-[10px] font-medium text-zinc-500">Total Spend</p>
          <p className="mt-0.5 font-display text-sm font-bold text-white">
            $115,940
          </p>
        </div>
        <div className="px-4 py-2.5">
          <p className="text-[10px] font-medium text-zinc-500">Qualified Leads</p>
          <p className="mt-0.5 font-display text-sm font-bold text-white">
            1,470
          </p>
        </div>
        <div className="px-4 py-2.5">
          <p className="text-[10px] font-medium text-zinc-500">Blended ROAS</p>
          <p className="mt-0.5 font-display text-sm font-bold text-brand">
            6.8× ROI
          </p>
        </div>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: EASE }}
            className="px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-[13px] font-medium text-zinc-200">
                {row.name}
              </p>
              <span className="shrink-0 rounded-md bg-brand px-1.5 py-0.5 text-[11px] font-bold text-black">
                {row.roas}
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#BAF235] to-[#42CED3]"
                initial={{ width: 0 }}
                animate={{ width: row.w }}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.9,
                  ease: EASE,
                }}
              />
            </div>
            <p className="mt-1.5 text-[11px] text-zinc-500">
              Spend {row.spend} ·{" "}
              <span className="font-semibold text-zinc-300">
                {row.leads} leads captured
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LeadMock() {
  return (
    <div
      className="rounded-2xl border border-white/[0.1] bg-[#090A0F] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.65)] sm:p-5"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 text-emerald-300">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#090A0F] bg-emerald-400" />
          </span>
          <div>
            <p className="text-[13px] font-semibold text-white">
              click Lead Router
            </p>
            <p className="text-[11px] text-emerald-300">
              WhatsApp + CRM · instant webhook
            </p>
          </div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-zinc-300">
          Real-time
        </span>
      </div>

      <div className="space-y-2.5 pt-3.5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
          className="max-w-[90%] rounded-2xl rounded-tl-sm border border-white/[0.07] bg-white/[0.04] px-3.5 py-3"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold tracking-wider text-brand uppercase">
              New Qualified Lead
            </span>
            <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[9px] font-bold text-brand">
              High Intent
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-200">
            <strong className="text-white">Kavitha Menon</strong> · Kochi
            <br />
            Service: Website + Performance Ads
            <br />
            Monthly Budget: $50,000 / mo
          </p>
          <p className="mt-1 text-right text-[10px] text-zinc-500">10:42 AM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
          className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-brand px-3.5 py-2.5 shadow-[0_8px_24px_rgba(184,241,53,0.22)]"
        >
          <p className="text-[13px] font-semibold text-black">
            Called her — discovery meeting booked for tomorrow!
          </p>
          <p className="mt-0.5 text-right text-[10px] font-medium text-black/65">
            10:45 AM · Delivered
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
          className="max-w-[90%] rounded-2xl rounded-tl-sm border border-white/[0.07] bg-white/[0.04] px-3.5 py-3"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold tracking-wider text-brand uppercase">
              New Qualified Lead
            </span>
            <span className="rounded bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
              Verified Phone
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-200">
            <strong className="text-white">Deepak Joshi</strong> · Jaipur
            <br />
            Service: GMB Ranking + Google Search Ads
          </p>
          <p className="mt-1 text-right text-[10px] text-zinc-500">10:58 AM</p>
        </motion.div>
      </div>
    </div>
  );
}

function GmbMock() {
  const keywords = [
    { kw: "best dental clinic near me", rank: "#1", delta: "+6 spots" },
    { kw: "interior designer in New York", rank: "#1", delta: "+4 spots" },
    { kw: "luxury gym near me", rank: "#2", delta: "+9 spots" },
  ];
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#090A0F] shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      aria-hidden="true"
    >
      <div className="relative h-32 overflow-hidden bg-[#0E1510]">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(rgba(184,241,53,0.28) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        {/* Radar rings */}
        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />

        <motion.span
          initial={{ scale: 0, y: -10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 16,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-black shadow-[0_10px_30px_rgba(184,241,53,0.5)]">
            <MapPin className="h-5.5 w-5.5" />
          </span>
        </motion.span>
        <span className="absolute top-3 right-3 rounded-full border border-brand/30 bg-black/75 px-2.5 py-1 text-[10px] font-bold text-brand backdrop-blur-md">
          Rank #1 · Local 3-Pack
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-[15px] font-semibold text-white">
              Your Business Profile
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
                  />
                ))}
              </span>
              <span className="font-semibold text-white">4.9</span> (620+
              reviews)
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300">
              <Navigation className="h-3.5 w-3.5" />
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-black">
              <Phone className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          {keywords.map((k, i) => (
            <motion.div
              key={k.kw}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: EASE }}
              className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2"
            >
              <span className="truncate text-xs text-zinc-200">
                &ldquo;{k.kw}&rdquo;
              </span>
              <div className="ml-2 flex shrink-0 items-center gap-2">
                <span className="text-[10px] font-medium text-emerald-400">
                  {k.delta}
                </span>
                <span className="rounded bg-brand/15 px-1.5 py-0.5 text-xs font-bold text-brand">
                  {k.rank}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Tabs data ------------------------------ */

type Tab = {
  id: string;
  index: string;
  kicker: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  copy: string;
  bullets: string[];
  stat: string;
  statLabel: string;
  glowColor: string;
  visual: () => React.JSX.Element;
};

const TABS: Tab[] = [
  {
    id: "websites",
    index: "01",
    kicker: "01 / CONVERSION ARCHITECTURE",
    label: "Websites",
    icon: Globe,
    headline: "Websites built to sell, not just to exist",
    copy: "Your website is your hardest-working salesperson. We design fast, persuasive pages that turn casual visitors into booked calls and paying customers.",
    bullets: [
      "Custom, mobile-first design in 7–14 days",
      "Copywriting & creatives handled by us",
      "Built-in lead capture, WhatsApp chat & analytics",
    ],
    stat: "2.4×",
    statLabel: "average conversion lift after redesign",
    glowColor: "rgba(66, 206, 211, 0.22)",
    visual: WebsiteMock,
  },
  {
    id: "ads",
    index: "02",
    kicker: "02 / PAID ACQUISITION",
    label: "Paid Ads",
    icon: Megaphone,
    headline: "Ads engineered for profit, tracked to the rupee",
    copy: "Meta and Google campaigns managed daily by media buyers who obsess over cost-per-lead — so every rupee you spend comes back with friends.",
    bullets: [
      "Facebook, Instagram, Google & YouTube ads",
      "Scroll-stopping creatives designed in-house",
      "Retargeting that recovers lost visitors",
    ],
    stat: "6.4×",
    statLabel: "blended ROAS across active accounts",
    glowColor: "rgba(247, 125, 158, 0.22)",
    visual: AdsMock,
  },
  {
    id: "leads",
    index: "03",
    kicker: "03 / AUTOMATED PIPELINE",
    label: "Lead Machine",
    icon: Target,
    headline: "Hot leads in your WhatsApp within seconds",
    copy: "No more chasing cold enquiries. Our funnels qualify prospects automatically and ping your phone the moment a serious buyer shows interest.",
    bullets: [
      "Instant WhatsApp, email & CRM delivery",
      "Budget & intent pre-qualification",
      "Automated follow-up sequences",
    ],
    stat: "< 30 sec",
    statLabel: "average lead delivery time",
    glowColor: "rgba(184, 241, 53, 0.2)",
    visual: LeadMock,
  },
  {
    id: "gmb",
    index: "04",
    kicker: "04 / LOCAL SEARCH DOMINANCE",
    label: "GMB & Local SEO",
    icon: MapPin,
    headline: "Be the first name Google shows in your city",
    copy: "When nearby customers search, they call whoever ranks first. We build and rank your Google Business Profile to own the map pack in your area.",
    bullets: [
      "Profile creation, verification & optimisation",
      "Review-generation system on autopilot",
      "Weekly posts, photos & ranking reports",
    ],
    stat: "+480%",
    statLabel: "growth in calls & direction requests",
    glowColor: "rgba(252, 216, 117, 0.2)",
    visual: GmbMock,
  },
];

/* --------------------------------- Process --------------------------------- */

type StepItem = {
  icon: LucideIcon;
  step: string;
  tag: string;
  title: string;
  text: string;
  accentGradient: string;
  iconStyle: string;
  tagStyle: string;
};

const STEPS: StepItem[] = [
  {
    icon: SearchCheck,
    step: "01",
    tag: "Day 1–2 · Discovery",
    title: "Free Audit & Strategy",
    text: "We analyse your market, competitors and current presence — then share a clear growth roadmap. No cost, no obligation.",
    accentGradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(184,241,53,0.14) 0%, rgba(17,17,23,0.95) 65%)",
    iconStyle:
      "border-[#BAF235]/30 bg-[#BAF235]/10 text-[#BAF235] group-hover:bg-[#BAF235] group-hover:text-black",
    tagStyle: "border-[#BAF235]/25 bg-[#BAF235]/10 text-[#BAF235]",
  },
  {
    icon: Rocket,
    step: "02",
    tag: "Day 3–10 · Execution",
    title: "Build & Launch",
    text: "Website, funnels, creatives and campaigns go live within days — fully tracked so every lead is accounted for.",
    accentGradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(66,206,211,0.15) 0%, rgba(17,17,23,0.95) 65%)",
    iconStyle:
      "border-[#42CED3]/30 bg-[#42CED3]/10 text-[#42CED3] group-hover:bg-[#42CED3] group-hover:text-black",
    tagStyle: "border-[#42CED3]/25 bg-[#42CED3]/10 text-[#42CED3]",
  },
  {
    icon: LineChart,
    step: "03",
    tag: "Ongoing · Optimization",
    title: "Optimize & Scale",
    text: "We test, tweak and double down on what works. Winners get scaled, losers get killed. Your CPL keeps dropping.",
    accentGradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(247,125,158,0.15) 0%, rgba(17,17,23,0.95) 65%)",
    iconStyle:
      "border-[#F77D9E]/30 bg-[#F77D9E]/10 text-[#F77D9E] group-hover:bg-[#F77D9E] group-hover:text-black",
    tagStyle: "border-[#F77D9E]/25 bg-[#F77D9E]/10 text-[#F77D9E]",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    tag: "Monthly · Scale",
    title: "Report & Grow",
    text: "Transparent reports you'll actually understand — leads, spend, revenue. Plus a monthly strategy call to plan what's next.",
    accentGradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(137,119,198,0.18) 0%, rgba(17,17,23,0.95) 65%)",
    iconStyle:
      "border-[#9884D6]/30 bg-[#9884D6]/10 text-[#B8A7F2] group-hover:bg-[#9884D6] group-hover:text-black",
    tagStyle: "border-[#9884D6]/25 bg-[#9884D6]/10 text-[#C8BAFA]",
  },
];

function StepCard({ item }: { item: StepItem }) {
  const Icon = item.icon;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      style={{ background: item.accentGradient }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.09] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
    >
      {/* Interactive pointer spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.08), transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              "grid h-12 w-12 place-items-center rounded-2xl border transition-all duration-500 group-hover:scale-105",
              item.iconStyle
            )}
          >
            <Icon className="h-5.5 w-5.5" />
          </span>
          <span className="font-display text-4xl font-bold tracking-tight text-white/[0.08] transition-colors duration-500 group-hover:text-white/[0.16]">
            {item.step}
          </span>
        </div>

        <span
          className={cn(
            "mt-5 inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase",
            item.tagStyle
          )}
        >
          {item.tag}
        </span>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {item.text}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------- Component ------------------------------ */

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % TABS.length),
      6500
    );
    return () => clearInterval(id);
  }, [paused, active]);

  const tab = TABS[active];
  const Visual = tab.visual;

  return (
    <section
      id="showcase"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
      aria-labelledby="showcase-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute top-1/3 -left-52 h-[460px] w-[460px] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #2dd4bf, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the click system"
          title={
            <>
              See how the <Accent>growth engine</Accent> works
            </>
          }
          description="Explore the exact systems we deploy for clients — from the first click to a customer walking through your door."
        />

        {/* Evervault-style Capsule Tab Bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-start overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
            <div
              role="tablist"
              aria-label="Service showcase"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#111117]/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              {TABS.map((t, i) => {
                const Icon = t.icon;
                const selected = i === active;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-300",
                      selected
                        ? "text-black"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-full bg-brand shadow-[0_8px_28px_rgba(184,241,53,0.35)]"
                      />
                    )}
                    <Icon className="relative z-10 h-4 w-4" />
                    <span className="relative z-10">{t.label}</span>
                    <span
                      className={cn(
                        "relative z-10 hidden font-mono text-[10px] font-bold sm:inline",
                        selected ? "text-black/60" : "text-zinc-500"
                      )}
                    >
                      {t.index}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Main Showcase Panel */}
        <Reveal delay={0.15}>
          <div className="relative mt-8 overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0C0D12] shadow-[0_28px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]">
            {/* Dynamic ambient glow per tab */}
            <div
              className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full blur-[110px] transition-all duration-700"
              style={{
                background: `radial-gradient(closest-side, ${tab.glowColor}, transparent)`,
              }}
              aria-hidden="true"
            />

            {/* Subtle architectural dot pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "radial-gradient(ellipse 70% 70% at 80% 30%, black 15%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 70% at 80% 30%, black 15%, transparent 75%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14"
              >
                {/* Left Copy Column */}
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
                    {tab.kicker}
                  </span>

                  <h3 className="mt-5 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-balance text-white sm:text-4xl">
                    {tab.headline}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-pretty text-zinc-400">
                    {tab.copy}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {tab.bullets.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.12 + i * 0.08,
                          duration: 0.45,
                          ease: EASE,
                        }}
                        className="flex items-start gap-3 text-[15px] text-zinc-200"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black shadow-[0_0_12px_rgba(184,241,53,0.4)]">
                          <Check className="h-3 w-3" strokeWidth={3.5} />
                        </span>
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stat + CTA Row */}
                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/[0.07] pt-7">
                    <div className="flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                        <TrendingUp className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-2xl leading-none font-bold text-brand">
                          {tab.stat}
                        </p>
                        <p className="mt-1 text-xs text-zinc-400">
                          {tab.statLabel}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white py-2 pr-2 pl-5 text-sm font-semibold text-[#09090D] shadow-[0_10px_28px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
                    >
                      <span>Deploy for my brand</span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#09090D] text-white transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Mock Visual Column */}
                <div className="relative lg:col-span-6">
                  <Visual />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-advance progress bar */}
            <div
              className="absolute right-0 bottom-0 left-0 h-[3px] bg-white/[0.05]"
              aria-hidden="true"
            >
              {!paused && (
                <motion.div
                  key={active}
                  className="h-full origin-left bg-gradient-to-r from-[#BAF235] via-[#42CED3] to-[#F77D9E]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6.5, ease: "linear" }}
                />
              )}
            </div>
          </div>
        </Reveal>

        {/* 4-Step Process Section */}
        <div className="mt-28">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From first call to <Accent>flooded pipeline</Accent> in 4 steps
              </>
            }
          />
          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute top-12 right-[12%] left-[12%] hidden border-t border-dashed border-white/15 lg:block"
              aria-hidden="true"
            />
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.12}>
                <StepCard item={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}