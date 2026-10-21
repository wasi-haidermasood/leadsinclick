"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Bell,
  PlayCircle,
  Star,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";
import { Counter, EASE } from "./ui";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const LEADS = [
  {
    name: "Emma Johnson",
    city: "London",
    service: "Website Development",
    time: "just now",
  },
  {
    name: "Daniel Smith",
    city: "New York",
    service: "Facebook Ads Enquiry",
    time: "1 min ago",
  },
  {
    name: "Sofia Martinez",
    city: "Madrid",
    service: "Google Ads Lead",
    time: "3 min ago",
  },
  {
    name: "Noah Williams",
    city: "Toronto",
    service: "GMB Call Booking",
    time: "5 min ago",
  },
  {
    name: "Olivia Brown",
    city: "Sydney",
    service: "Social Media Package",
    time: "7 min ago",
  },
];

const AVATAR_COLORS = [
  "bg-lime-400",
  "bg-amber-300",
  "bg-sky-300",
  "bg-rose-300",
  "bg-violet-300",
];
const AVATAR_INITIALS = ["EJ", "DS", "SM", "NW", "OB"];

function LiveLeads() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setOffset((o) => o + 1), 3000);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((i) => LEADS[(offset + i) % LEADS.length]);

  return (
    <div className="space-y-2" aria-hidden="true">
      <AnimatePresence mode="popLayout">
        {visible.map((lead, i) => (
          <motion.div
            key={`${lead.name}-${offset + i}`}
            layout
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: i === 2 ? 0.45 : 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
          >
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[10px] font-bold text-black ${
                AVATAR_COLORS[(offset + i) % AVATAR_COLORS.length]
              }`}
            >
              {AVATAR_INITIALS[(offset + i) % AVATAR_INITIALS.length]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-white">
                {lead.name}{" "}
                <span className="font-normal text-zinc-500">· {lead.city}</span>
              </p>
              <p className="truncate text-[11px] text-zinc-400">
                {lead.service}
              </p>
            </div>
            <span className="shrink-0 text-[10px] font-medium text-brand">
              {lead.time}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="chartGlow" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#b8f135" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#b8f135" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[24, 52, 80, 108].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="320"
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}
      <motion.path
        d="M0,104 C34,98 52,88 78,84 C104,80 118,88 142,74 C166,60 182,64 208,48 C234,32 262,30 320,10 L320,120 L0,120 Z"
        fill="url(#chartGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      />
      <motion.path
        d="M0,104 C34,98 52,88 78,84 C104,80 118,88 142,74 C166,60 182,64 208,48 C234,32 262,30 320,10"
        fill="none"
        stroke="#b8f135"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 1.8, ease: EASE }}
      />
      <motion.circle
        cx="298"
        cy="15"
        r="4.5"
        fill="#b8f135"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.4 }}
      />
      <motion.circle
        cx="298"
        cy="15"
        r="10"
        fill="none"
        stroke="#b8f135"
        strokeOpacity="0.4"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [0.4, 1.4], opacity: [0.6, 0] }}
        transition={{
          delay: 2.5,
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.55, duration: 1.1, ease: EASE }}
      className="relative rounded-3xl border border-white/10 bg-panel/80 p-5 shadow-[0_40px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6"
      style={{ transformPerspective: 1000 }}
    >
      {/* Window chrome */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brand uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-brand opacity-70" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          Live campaign
        </span>
      </div>

      {/* Headline metric */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
            <Users className="h-3.5 w-3.5" /> Leads this month
          </p>
          <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-white">
            <Counter to={2847} duration={2.4} />
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-xs font-bold text-black">
          <TrendingUp className="h-3.5 w-3.5" /> +312%
        </span>
      </div>

      {/* Chart */}
      <div className="mt-4 h-28">
        <GrowthChart />
      </div>

      {/* KPI row */}
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[
          { label: "Avg. ROAS", value: "6.4×", icon: TrendingUp },
          { label: "Cost / Lead", value: "$18", icon: DollarSign },
          { label: "Conversion", value: "18.6%", icon: ArrowDownRight },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
          >
            <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase">
              {kpi.label}
            </p>
            <p className="mt-0.5 font-display text-base font-semibold text-white">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      {/* Live leads */}
      <div className="mt-4">
        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
          <Bell className="h-3.5 w-3.5 text-brand" /> Incoming leads
        </p>
        <LiveLeads />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[72px]"
      aria-labelledby="hero-title"
    >
      {/* Ambient backdrop */}
      <div className="dot-grid dot-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{
          background: "radial-gradient(closest-side, #b8f135, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-64 -right-40 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-[110px]"
        style={{
          background: "radial-gradient(closest-side, #2dd4bf, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24 lg:pb-28">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold text-black">
                NEW
              </span>
              Free growth audit worth $299 — this month only
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={item}
            className="mt-7 font-display text-[42px] leading-[1.04] font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[68px]"
          >
            We turn clicks into{" "}
            <em className="font-accent font-normal text-brand italic">
              paying customers.
            </em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg"
          >
            Leads In click is your full-stack growth partner — high-converting
            websites, ROI-obsessed Facebook &amp; Google Ads, social media that
            sells, and Google Business rankings that put you first. More leads.
            More sales. Zero guesswork.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_10px_40px_rgba(184,241,53,0.4)] active:scale-[0.97]"
            >
              Get My Free Growth Audit
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.97]"
            >
              <PlayCircle className="h-5 w-5 text-brand" />
              See Real Results
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center">
              {AVATAR_INITIALS.map((ini, i) => (
                <span
                  key={ini}
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 border-void text-[10px] font-bold text-black ${AVATAR_COLORS[i]} ${
                    i > 0 ? "-ml-2.5" : ""
                  }`}
                  aria-hidden="true"
                >
                  {ini}
                </span>
              ))}
              <span className="-ml-2.5 grid h-9 w-9 place-items-center rounded-full border-2 border-void bg-zinc-800 text-[10px] font-bold text-white">
                250+
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1" aria-label="Rated 4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
                <span className="ml-1 text-sm font-semibold text-white">4.9/5</span>
              </span>
              <p className="mt-0.5 text-[13px] text-zinc-500">
                from 180+ verified client reviews
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <Dashboard />

          {/* Floating card — Google ranking */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: [0, -9, 0], scale: 1 }}
            transition={{
              opacity: { delay: 1.3, duration: 0.7 },
              scale: { delay: 1.3, duration: 0.7, ease: EASE },
              y: { delay: 2, duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -top-5 -left-3 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block lg:-left-10"
            aria-hidden="true"
          >
            <p className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
              Google Maps Rank
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 font-display text-lg font-semibold text-white">
              #1{" "}
              <span className="text-xs font-medium text-brand">
                “near me” searches
              </span>
            </p>
          </motion.div>

          {/* Floating card — revenue */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: [0, 10, 0], scale: 1 }}
            transition={{
              opacity: { delay: 1.55, duration: 0.7 },
              scale: { delay: 1.55, duration: 0.7, ease: EASE },
              y: { delay: 2.3, duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -right-3 -bottom-6 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block lg:-right-8"
            aria-hidden="true"
          >
            <p className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
              Revenue generated
            </p>
            <p className="mt-0.5 font-display text-lg font-semibold text-white">
              $2.1M+{" "}
              <span className="text-xs font-medium text-brand">for clients</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}