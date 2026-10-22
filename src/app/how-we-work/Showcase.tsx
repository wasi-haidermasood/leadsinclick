"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  ClipboardCheck,
  Globe,
  LineChart,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  SearchCheck,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Accent, EASE, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

/* ------------------------------- Mock visuals ------------------------------ */

function WebsiteMock() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-zinc-500">
          yourbrand.com
        </span>
        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-black">
          Speed 98
        </span>
      </div>
      <div className="p-5">
        <div className="h-2.5 w-20 rounded bg-brand/70" />
        <div className="mt-4 h-5 w-4/5 rounded bg-zinc-600" />
        <div className="mt-2 h-5 w-3/5 rounded bg-zinc-700" />
        <div className="mt-4 h-2.5 w-2/3 rounded bg-zinc-800" />
        <div className="mt-1.5 h-2.5 w-1/2 rounded bg-zinc-800" />
        <div className="mt-5 flex gap-2.5">
          <span className="rounded-full bg-brand px-4 py-2 text-[11px] font-bold text-black">
            Book Free Call
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold text-zinc-300">
            View Pricing
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {["bg-zinc-800", "bg-zinc-800", "bg-zinc-800"].map((c, i) => (
            <div
              key={i}
              className={`h-14 rounded-xl ${c} border border-white/[0.05] p-2.5`}
            >
              <div className="h-1.5 w-8 rounded bg-zinc-600" />
              <div className="mt-2 h-1.5 w-full rounded bg-zinc-700" />
              <div className="mt-1 h-1.5 w-2/3 rounded bg-zinc-700" />
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
      name: "Meta — Retargeting",
      spend: "$12,900",
      leads: 286,
      roas: "9.4×",
      w: "64%",
    },
    {
      name: "YouTube — Brand + Leads",
      spend: "$18,300",
      leads: 154,
      roas: "4.1×",
      w: "42%",
    },
  ];
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <span className="text-xs font-semibold text-white">
          Campaign performance
        </span>
        <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-bold text-brand">
          Last 30 days
        </span>
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
                className="h-full rounded-full bg-brand"
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
                {row.leads} leads
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
      className="rounded-2xl border border-white/10 bg-[#0a0b0e] p-4"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2.5 border-b border-white/[0.07] pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
          <Bell className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-[13px] font-semibold text-white">
            click Lead Alerts
          </p>
          <p className="text-[11px] text-emerald-300">
            online · instant delivery
          </p>
        </div>
      </div>
      <div className="space-y-2.5 pt-3.5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
          className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3.5 py-3"
        >
          <p className="text-[11px] font-bold tracking-wide text-brand uppercase">
            New hot lead
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-200">
            <strong className="text-white">Kavitha Menon</strong> · Kochi
            <br />
            Interested in: Premium Website + Ads
            <br />
            Budget: $50,000 / month
          </p>
          <p className="mt-1.5 text-right text-[10px] text-zinc-500">
            10:42 AM
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
          className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-brand px-3.5 py-2.5"
        >
          <p className="text-[13px] font-medium text-black">
            Called her — meeting fixed for tomorrow!
          </p>
          <p className="mt-1 text-right text-[10px] text-black/60">10:47 AM</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
          className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3.5 py-3"
        >
          <p className="text-[11px] font-bold tracking-wide text-brand uppercase">
            New hot lead
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-200">
            <strong className="text-white">Deepak Joshi</strong> · Jaipur
            <br />
            Interested in: GMB Ranking + Google Ads
          </p>
          <p className="mt-1.5 text-right text-[10px] text-zinc-500">
            10:58 AM
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function GmbMock() {
  const keywords = [
    { kw: "best dental clinic near me", rank: "#1" },
    { kw: "interior designer in New York", rank: "#1" },
    { kw: "gym near me", rank: "#2" },
  ];
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0e]"
      aria-hidden="true"
    >
      <div className="relative h-28 bg-[#101410]">
        <div className="dot-grid absolute inset-0 opacity-60" />
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
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-black shadow-[0_10px_30px_rgba(184,241,53,0.45)]">
            <MapPin className="h-5.5 w-5.5" />
          </span>
        </motion.span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-brand backdrop-blur">
          Rank #1 · 3-pack
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-[15px] font-semibold text-white">
              Your Business Name
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
              4.9 (620 reviews) · Open now
            </p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-black">
            <Phone className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-4 space-y-1.5">
          {keywords.map((k, i) => (
            <motion.div
              key={k.kw}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: EASE }}
              className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2"
            >
              <span className="truncate text-xs text-zinc-300">“{k.kw}”</span>
              <span className="ml-2 shrink-0 text-xs font-bold text-brand">
                {k.rank}
              </span>
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
  label: string;
  icon: LucideIcon;
  headline: string;
  copy: string;
  bullets: string[];
  stat: string;
  statLabel: string;
  visual: () => React.JSX.Element;
};

const TABS: Tab[] = [
  {
    id: "websites",
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
    visual: WebsiteMock,
  },
  {
    id: "ads",
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
    visual: AdsMock,
  },
  {
    id: "leads",
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
    visual: LeadMock,
  },
  {
    id: "gmb",
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
    visual: GmbMock,
  },
];

/* --------------------------------- Process --------------------------------- */

const STEPS = [
  {
    icon: SearchCheck,
    step: "01",
    title: "Free Audit & Strategy",
    text: "We analyse your market, competitors and current presence — then share a clear growth roadmap. No cost, no obligation.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Build & Launch",
    text: "Website, funnels, creatives and campaigns go live within days — fully tracked so every lead is accounted for.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Optimize & Scale",
    text: "We test, tweak and double down on what works. Winners get scaled, losers get killed. Your CPL keeps dropping.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Report & Grow",
    text: "Transparent reports you'll actually understand — leads, spend, revenue. Plus a monthly strategy call to plan what's next.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % TABS.length), 6500);
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

        {/* Tab bar */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Service showcase"
            className="mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center"
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
                    "relative flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300",
                    selected
                      ? "text-black"
                      : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="tab-pill"
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-brand shadow-[0_8px_30px_rgba(184,241,53,0.35)]"
                    />
                  )}
                  <Icon className="relative z-10 h-4.5 w-4.5" />
                  <span className="relative z-10">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <Reveal delay={0.15}>
          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/[0.08] bg-panel">
            <div
              className="absolute -top-32 right-0 h-72 w-72 rounded-full opacity-[0.1] blur-[90px]"
              style={{
                background:
                  "radial-gradient(closest-side, #b8f135, transparent)",
              }}
              aria-hidden="true"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:p-14"
              >
                <div>
                  <h3 className="font-display text-3xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-4xl">
                    {tab.headline}
                  </h3>
                  <p className="mt-4 leading-relaxed text-pretty text-zinc-400">
                    {tab.copy}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tab.bullets.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.09,
                          duration: 0.45,
                          ease: EASE,
                        }}
                        className="flex items-start gap-3 text-[15px] text-zinc-200"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                          <Check className="h-3 w-3" strokeWidth={3.5} />
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div>
                      <p className="font-display text-3xl font-semibold text-brand">
                        {tab.stat}
                      </p>
                      <p className="mt-0.5 max-w-[200px] text-[13px] text-zinc-500">
                        {tab.statLabel}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand"
                    >
                      Get this for my brand
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Visual />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-advance progress */}
            <div
              className="absolute right-0 bottom-0 left-0 h-[3px] bg-white/[0.05]"
              aria-hidden="true"
            >
              {!paused && (
                <motion.div
                  key={active}
                  className="h-full origin-left bg-brand/70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6.5, ease: "linear" }}
                />
              )}
            </div>
          </div>
        </Reveal>

        {/* Process */}
        <div className="mt-24">
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
              className="absolute top-10 right-[12%] left-[12%] hidden border-t border-dashed border-white/12 lg:block"
              aria-hidden="true"
            />
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.step} delay={i * 0.12}>
                  <div className="group relative h-full rounded-3xl border border-white/[0.08] bg-panel p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30">
                    <div className="flex items-center justify-between">
                      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-brand/25 bg-void text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-black">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <span className="font-display text-4xl font-semibold text-white/[0.07] transition-colors duration-500 group-hover:text-brand/20">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}