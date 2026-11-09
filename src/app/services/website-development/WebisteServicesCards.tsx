"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Gauge,
  Globe,
  LayoutTemplate,
  PhoneCall,
  SearchCheck,
  ShoppingBag,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Accent, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

type WebCapability = {
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

const WEB_CAPABILITIES: WebCapability[] = [
  {
    index: "01 / CONVERSION FUNNELS",
    icon: LayoutTemplate,
    title: "High-Converting Landing Pages",
    description:
      "Dedicated campaign landing pages engineered specifically for Google & Meta ad traffic—built to maximize lead capture and slash your cost-per-lead.",
    deliverables: [
      "Persuasive direct-response copy",
      "Multi-step lead qualification forms",
      "A/B test ready sections",
    ],
    metric: "3.2×",
    metricLabel: "higher ad-to-lead conversion",
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
    index: "02 / FLAGSHIP BRAND SITES",
    icon: Globe,
    title: "Custom Business & Corporate Websites",
    description:
      "Bespoke multi-page websites that position your company as the undisputed category leader while guiding visitors effortlessly toward booking a call.",
    deliverables: [
      "Custom Figma UI/UX design",
      "Interactive animations & micro-interactions",
      "Easy-to-edit CMS dashboard",
    ],
    metric: "7–14 Days",
    metricLabel: "average turnaround to launch",
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
    index: "03 / ONLINE STORES",
    icon: ShoppingBag,
    title: "E-Commerce & High-AOV Stores",
    description:
      "Frictionless shopping experiences on Shopify or custom headless storefronts with instant checkout, upsell flows, and abandoned-cart recovery.",
    deliverables: [
      "Conversion-tuned product pages",
      "1-click checkout & payment gateways",
      "Automated cart recovery flows",
    ],
    metric: "+68%",
    metricLabel: "average checkout completion lift",
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
    index: "04 / WEB APPLICATIONS",
    icon: Code2,
    title: "Next.js & Custom Web Portals",
    description:
      "Full-stack web applications, client portals, booking engines, and custom calculators built with Next.js, React, and scalable cloud databases.",
    deliverables: [
      "Next.js App Router & TypeScript",
      "Custom API & CRM integrations",
      "Role-based auth & dashboards",
    ],
    metric: "99.99%",
    metricLabel: "edge network uptime",
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
    index: "05 / ORGANIC ARCHITECTURE",
    icon: SearchCheck,
    title: "Technical SEO & Schema Engineering",
    description:
      "Every page is built from the ground up with clean semantic HTML, automated sitemaps, OpenGraph tags, and JSON-LD structured data so Google ranks you faster.",
    deliverables: [
      "Schema.org JSON-LD markup",
      "Programmatic city/service pages",
      "Zero-bloat semantic code",
    ],
    metric: "100%",
    metricLabel: "Lighthouse SEO audit score",
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
    index: "06 / SPEED & CRO REDESIGN",
    icon: Gauge,
    title: "Speed Optimization & CRO Overhauls",
    description:
      "Already have a slow or underperforming website? We audit, redesign, and rebuild your existing site into a sub-second lead generation machine.",
    deliverables: [
      "Sub-second page load times",
      "WhatsApp & instant callback widgets",
      "Heatmap & conversion tracking",
    ],
    metric: "< 0.6s",
    metricLabel: "average page load speed",
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

function CapabilityCard({ item }: { item: WebCapability }) {
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

      {/* Watermark Icon */}
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
            aria-label={`Start ${item.title}`}
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

export default function WebsiteServicesCards() {
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
          <span className="h-2.5 w-2.5 rounded-full bg-[#42CED3] shadow-[0_0_10px_#42CED3]" />
          <div>
            <p className="font-display text-sm font-bold text-[#42CED3]">
              99/100
            </p>
            <p className="text-[11px] text-zinc-400">Lighthouse speed</p>
          </div>
        </div>

        {/* Floating Right Metric Node */}
        <div className="pointer-events-none absolute top-14 right-12 hidden items-center gap-2.5 lg:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_#b8f135]" />
          <div>
            <p className="font-display text-sm font-bold text-brand">2.4×</p>
            <p className="text-[11px] text-zinc-400">more enquiries</p>
          </div>
        </div>

        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              Websites engineered for <Accent>every growth stage</Accent>
            </>
          }
          description="Whether you need a rapid high-converting landing page for paid ads or a flagship custom web application, every build is crafted for speed, trust, and revenue."
        />

        {/* 6 Themed Capability Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WEB_CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <CapabilityCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Included in Every Build Strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
            <p className="text-center font-mono text-xs font-bold tracking-[0.18em] text-brand uppercase">
              Included standard in every website we launch
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Mobile-First Responsive Design",
                "Instant WhatsApp & CRM Integration",
                "On-Page Technical SEO & Schema",
                "Google Analytics 4 & Pixel Tracking",
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
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#42CED3]/30 bg-gradient-to-r from-[#42CED3]/15 via-brand/10 to-transparent p-7 sm:p-9 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#42CED3] uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Ready to upgrade your
                digital presence?
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                Get a custom website prototype &amp; growth roadmap.
              </h3>
              <p className="mt-1.5 text-sm text-zinc-300">
                Book a free 20-minute strategy call. We&apos;ll review your
                current site, show you live examples, and map out your build.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(184,241,53,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#c8f856]"
              >
                <span>Start My Website Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
              >
                <PhoneCall className="h-4 w-4 text-[#42CED3]" />
                <span>Book a Free Strategy Call</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}