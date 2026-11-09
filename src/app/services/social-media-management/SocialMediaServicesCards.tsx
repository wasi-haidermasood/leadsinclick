"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clapperboard,
  Layers,
  MessageCircle,
  PenTool,
  PhoneCall,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Accent, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

type SocialCapability = {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
  background: string;
  titleClass: string;
  bodyClass: string;
  kickerClass: string;
  iconBoxClass: string;
  pillClass: string;
  dividerClass: string;
  metricClass: string;
};

const SOCIAL_CAPABILITIES: SocialCapability[] = [
  {
    index: "01 / SHORT-FORM VIDEO STUDIO",
    icon: Clapperboard,
    title: "Viral Reels, TikToks & YouTube Shorts",
    description:
      "Short-form video is the #1 organic discovery engine today. We write your hooks, guide or source the footage, and edit dynamic videos with kinetic captions, sound design, and B-roll.",
    deliverables: [
      "3-second retention hooks",
      "Dynamic captions & motion cuts",
      "Trending audio & pacing",
    ],
    metric: "4.2×",
    metricLabel: "higher non-follower reach",
    background:
      "radial-gradient(120% 130% at 0% 0%, #FF99B6 0%, #F26B91 52%, #DC5078 100%)",
    titleClass: "text-[#2B0D18]",
    bodyClass: "text-[#3D1423]/85",
    kickerClass: "text-[#2B0D18]/65",
    iconBoxClass: "border-[#2B0D18]/15 bg-[#2B0D18] text-[#FF99B6]",
    pillClass: "border-[#2B0D18]/15 bg-white/50 text-[#2B0D18] font-semibold",
    dividerClass: "border-[#2B0D18]/15",
    metricClass: "text-[#2B0D18]",
  },
  {
    index: "02 / EDITORIAL CAROUSELS & GRID",
    icon: Layers,
    title: "Bespoke Graphics & Feed Aesthetics",
    description:
      "No generic Canva templates. Our brand designers craft swipe-worthy educational carousels, infographics, and cohesive grid layouts that make your business look like the category leader.",
    deliverables: [
      "Custom brand typography & kit",
      "High-save swipe carousels",
      "Story highlight covers & bio revamp",
    ],
    metric: "+280%",
    metricLabel: "increase in post saves & shares",
    background:
      "radial-gradient(120% 130% at 0% 0%, #9884D6 0%, #765FBA 52%, #59429B 100%)",
    titleClass: "text-white",
    bodyClass: "text-[#F1ECFF]/85",
    kickerClass: "text-white/70",
    iconBoxClass: "border-white/25 bg-white/15 text-[#BAF235]",
    pillClass: "border-white/20 bg-white/12 text-white font-medium",
    dividerClass: "border-white/15",
    metricClass: "text-[#BAF235]",
  },
  {
    index: "03 / DONE-FOR-YOU SCHEDULING",
    icon: Calendar,
    title: "Content Calendars & Peak Publishing",
    description:
      "Review and approve an entire month of posts in 10 minutes inside our visual portal. Once approved, we auto-publish across every channel at your audience’s highest-activity hours.",
    deliverables: [
      "30-day advance content calendar",
      "1-click client approval portal",
      "Social SEO captions & hashtags",
    ],
    metric: "15+ hrs",
    metricLabel: "saved for your team every week",
    background:
      "radial-gradient(120% 130% at 0% 0%, #B8F69E 0%, #8FE86B 52%, #6CD04E 100%)",
    titleClass: "text-[#0E2414]",
    bodyClass: "text-[#16351E]/85",
    kickerClass: "text-[#0E2414]/65",
    iconBoxClass: "border-[#0E2414]/15 bg-[#0E2414] text-[#B8F69E]",
    pillClass: "border-[#0E2414]/15 bg-white/50 text-[#0E2414] font-semibold",
    dividerClass: "border-[#0E2414]/15",
    metricClass: "text-[#0E2414]",
  },
  {
    index: "04 / COMMUNITY & DM AUTOMATION",
    icon: MessageCircle,
    title: "Inbox Nurturing & Comment-to-DM Flows",
    description:
      "Likes don’t pay the bills—conversations do. We actively respond to comments, engage warm followers, and install automated keyword DM triggers that turn post engagement into leads.",
    deliverables: [
      "Keyword comment-to-DM automation",
      "Daily comment & inbox responses",
      "Proactive outbound engagement",
    ],
    metric: "3.1×",
    metricLabel: "more inbound DM enquiries",
    background:
      "radial-gradient(120% 130% at 0% 0%, #64E4E9 0%, #1DC0CC 52%, #0E99A6 100%)",
    titleClass: "text-[#05282D]",
    bodyClass: "text-[#08383F]/85",
    kickerClass: "text-[#05282D]/65",
    iconBoxClass: "border-[#05282D]/15 bg-[#05282D] text-[#64E4E9]",
    pillClass: "border-[#05282D]/15 bg-white/50 text-[#05282D] font-semibold",
    dividerClass: "border-[#05282D]/15",
    metricClass: "text-[#05282D]",
  },
  {
    index: "05 / LINKEDIN & B2B AUTHORITY",
    icon: PenTool,
    title: "Founder Ghostwriting & LinkedIn Growth",
    description:
      "Position yourself and your company as the go-to experts in your space. We turn a 20-minute monthly voice interview into high-converting LinkedIn posts, articles, and carousels.",
    deliverables: [
      "Executive personal brand posts",
      "Company page authority building",
      "Case study & proof storytelling",
    ],
    metric: "7.4%",
    metricLabel: "average profile engagement rate",
    background:
      "radial-gradient(120% 130% at 0% 0%, #8095FA 0%, #556EEB 52%, #3B52CA 100%)",
    titleClass: "text-white",
    bodyClass: "text-[#EBF0FF]/85",
    kickerClass: "text-white/70",
    iconBoxClass: "border-white/25 bg-white/15 text-[#BAF235]",
    pillClass: "border-white/20 bg-white/12 text-white font-medium",
    dividerClass: "border-white/15",
    metricClass: "text-[#BAF235]",
  },
  {
    index: "06 / ANALYTICS & GROWTH ROADMAP",
    icon: BarChart3,
    title: "Monthly Performance & Content Scaling",
    description:
      "We track every view, save, profile visit, website click, and DM lead—doubling down on top-performing topics and formats each month so your organic growth compounds.",
    deliverables: [
      "Post-by-post retention analysis",
      "Competitor content benchmarking",
      "Monthly strategy & roadmap call",
    ],
    metric: "+340%",
    metricLabel: "average 90-day organic reach growth",
    background:
      "radial-gradient(120% 130% at 0% 0%, #FCD875 0%, #F3B941 52%, #DF9B1E 100%)",
    titleClass: "text-[#281905]",
    bodyClass: "text-[#3D2709]/85",
    kickerClass: "text-[#281905]/65",
    iconBoxClass: "border-[#281905]/15 bg-[#281905] text-[#FCD875]",
    pillClass: "border-[#281905]/15 bg-white/50 text-[#281905] font-semibold",
    dividerClass: "border-[#281905]/15",
    metricClass: "text-[#281905]",
  },
];

function SocialCapabilityCard({ item }: { item: SocialCapability }) {
  const Icon = item.icon;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={handleMove}
      style={{ background: item.background }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/35 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/70 sm:p-8"
    >
      {/* Interactive pointer spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.28), transparent 65%)",
        }}
      />

      {/* Decorative Watermark Icon */}
      <Icon
        aria-hidden="true"
        strokeWidth={1.25}
        className="pointer-events-none absolute -right-6 -bottom-6 h-44 w-44 -rotate-12 text-black/[0.06] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "grid h-12 w-12 place-items-center rounded-2xl border shadow-sm transition-transform duration-500 group-hover:scale-110",
                item.iconBoxClass
              )}
            >
              <Icon className="h-5.5 w-5.5" />
            </span>
            <span
              className={cn(
                "font-mono text-[10px] font-bold tracking-[0.16em] uppercase",
                item.kickerClass
              )}
            >
              {item.index}
            </span>
          </div>

          <Link
            href="/contact"
            aria-label={`Get started with ${item.title}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/15 bg-black/10 text-current transition-transform duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <h3
          className={cn(
            "mt-6 font-display text-2xl font-bold tracking-tight",
            item.titleClass
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            "mt-2.5 text-sm leading-relaxed font-medium",
            item.bodyClass
          )}
        >
          {item.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {item.deliverables.map((point) => (
            <li
              key={point}
              className={cn(
                "rounded-full border px-3 py-1 text-xs backdrop-blur-sm",
                item.pillClass
              )}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "relative z-10 mt-7 flex items-baseline gap-2 border-t pt-4",
          item.dividerClass
        )}
      >
        <span
          className={cn(
            "font-display text-2xl font-bold tracking-tight",
            item.metricClass
          )}
        >
          {item.metric}
        </span>
        <span className={cn("text-xs font-medium", item.bodyClass)}>
          {item.metricLabel}
        </span>
      </div>
    </article>
  );
}

export default function SocialMediaServicesCards() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      {/* =================================================================== */}
      {/* OUR APPROACH CONTAINER (Matches Evalin Curved Bottom Frame)         */}
      {/* =================================================================== */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.1] bg-gradient-to-b from-[#11121A]/90 via-[#0B0C12]/90 to-[#08090D]/95 px-6 py-20 shadow-[0_-20px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:px-12 sm:py-24">
        {/* Decorative orbital arc inside container */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[640px] w-[1050px] -translate-x-1/2 rounded-full border border-white/[0.05]"
        />

        {/* Floating Left Metric Node */}
        <div className="pointer-events-none absolute top-14 left-10 hidden items-center gap-2.5 lg:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#9884D6] shadow-[0_0_10px_#9884D6]" />
          <div>
            <p className="font-display text-sm font-bold text-[#B9A7F0]">
              +340%
            </p>
            <p className="text-[11px] text-zinc-400">organic reach growth</p>
          </div>
        </div>

        {/* Floating Right Metric Node */}
        <div className="pointer-events-none absolute top-14 right-12 hidden items-center gap-2.5 lg:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
          <div>
            <p className="font-display text-sm font-bold text-brand">30+</p>
            <p className="text-[11px] text-zinc-400">custom posts / month</p>
          </div>
        </div>

        <SectionHeading
          eyebrow="Our Social Growth System"
          title={
            <>
              An entire content team for{" "}
              <Accent>less than one hire</Accent>
            </>
          }
          description="Hiring a strategist, graphic designer, video editor, copywriter, and community manager in-house costs $250K+/year. You get our complete studio plugged into your brand from day one."
        />

        {/* 6 Themed Capability Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOCIAL_CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <SocialCapabilityCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Included in Every Social Media Partnership Strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
            <p className="text-center font-mono text-xs font-bold tracking-[0.18em] text-brand uppercase">
              Included in every Social Media Management partnership
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Dedicated Content Strategist & Editor",
                "Bio, Highlights & Profile Makeovers",
                "1-Click Monthly Content Approval Portal",
                "Unlimited Revisions Before Publishing",
              ].map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-[#101118]/90 px-4 py-3 text-xs font-semibold text-zinc-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Conversion CTA Banner */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#9884D6]/35 bg-gradient-to-r from-[#9884D6]/20 via-brand/10 to-transparent p-7 sm:p-9 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#B9A7F0] uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Free Social Profile &amp; Content Audit
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Want to see what 30 days of scroll-stopping content looks like for your brand?
              </h3>
              <p className="mt-1.5 text-sm text-zinc-300">
                We&apos;ll audit your current profiles, benchmark your top 3
                competitors, and map out a custom 30-day content &amp; Reels
                sample plan for free.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(184,241,53,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#c8f856]"
              >
                <span>Claim My Free Social Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
              >
                <PhoneCall className="h-4 w-4 text-[#B9A7F0]" />
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}