"use client";

import type { MouseEvent, ReactNode } from "react";
import {
  ArrowUpRight,
  Code2,
  Magnet,
  MapPin,
  Megaphone,
  Search,
  Share2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Accent, Reveal, SectionHeading } from "./ui";
import { cn } from "@/utils/cn";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  metric: string;
  metricLabel: string;
  span?: string;
  visual?: ReactNode;
};

function FunnelVisual() {
  const rows = [
    { label: "Ad Clicks", value: "48,200", width: "100%", tone: "bg-zinc-700" },
    { label: "Landing Views", value: "31,540", width: "72%", tone: "bg-zinc-600" },
    { label: "Qualified Leads", value: "4,860", width: "46%", tone: "bg-brand-deep" },
    { label: "Customers", value: "1,204", width: "26%", tone: "bg-brand" },
  ];
  return (
    <div className="mt-6 space-y-2" aria-hidden="true">
      {rows.map((row, i) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="h-7 flex-1 overflow-hidden rounded-md bg-white/[0.04]">
            <div
              className={`flex h-full items-center rounded-md px-2.5 ${row.tone} transition-all duration-1000`}
              style={{ width: row.width, transitionDelay: `${i * 120}ms` }}
            >
              <span
                className={`text-[10px] font-semibold whitespace-nowrap ${i >= 2 ? "text-black" : "text-zinc-200"}`}
              >
                {row.label}
              </span>
            </div>
          </div>
          <span className="w-12 text-right font-display text-xs font-semibold text-zinc-300">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function GmbVisual() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2.5" aria-hidden="true">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
        <MapPin className="h-3.5 w-3.5" /> Rank #1 on Google Maps
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200">
        <span className="flex" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-amber-300 text-amber-300" />
          ))}
        </span>
        4.9 · 620+ reviews
      </span>
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200">
        +480% direction &amp; call requests
      </span>
    </div>
  );
}

const SERVICES: Service[] = [
  {
    icon: Magnet,
    title: "Lead Generation",
    description:
      "Full-funnel systems that capture, qualify and deliver ready-to-buy leads straight to your WhatsApp, CRM or inbox — in real time.",
    points: ["Landing page funnels", "WhatsApp lead alerts", "Lead qualification"],
    metric: "1.2M+",
    metricLabel: "leads delivered",
    span: "lg:col-span-2",
    visual: <FunnelVisual />,
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Blazing-fast, mobile-first websites engineered to convert visitors into enquiries — not just look pretty.",
    points: ["Custom design", "98+ PageSpeed", "SEO-ready"],
    metric: "2.4×",
    metricLabel: "more conversions",
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    description:
      "Scroll-stopping creatives and laser-targeted Meta campaigns that bring buyers, not just likes.",
    points: ["Ad creatives included", "Retargeting funnels", "A/B testing"],
    metric: "6.4×",
    metricLabel: "average ROAS",
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Capture high-intent customers the moment they search. Search, YouTube & Display campaigns tuned for ROI.",
    points: ["Keyword research", "Call tracking", "Smart bidding"],
    metric: "-38%",
    metricLabel: "lower cost per lead",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Content, reels and community management that builds a brand people remember — and buy from.",
    points: ["20+ posts / month", "Reels & creatives", "Monthly calendar"],
    metric: "3.1×",
    metricLabel: "engagement growth",
  },
  {
    icon: MapPin,
    title: "GMB Creation & Ranking",
    description:
      "Own the “near me” searches. We create, verify and rank your Google Business Profile so local customers find — and call — you first.",
    points: ["Profile setup & verification", "Review engine", "Local SEO"],
    metric: "#1",
    metricLabel: "Maps ranking goal",
    span: "lg:col-span-3",
    visual: <GmbVisual />,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={index * 0.08} className={service.span}>
      <article
        onMouseMove={handleMove}
        className="spotlight group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-panel p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:p-8"
      >
        <div className="flex items-start justify-between">
          <span className="grid h-13 w-13 place-items-center rounded-2xl border border-brand/25 bg-brand/[0.08] text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-black">
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <a
            href="/contact"
            aria-label={`Get started with ${service.title}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand group-hover:text-black"
          >
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        <h3 className="mt-6 font-display text-[22px] font-semibold tracking-tight text-white">
          {service.title}
        </h3>
        <p className="mt-2.5 max-w-md leading-relaxed text-zinc-400">{service.description}</p>

        {service.visual}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} includes`}>
          {service.points.map((point) => (
            <li
              key={point}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-baseline gap-2 border-t border-white/[0.06] pt-5">
          <span className="font-display text-2xl font-semibold text-brand">{service.metric}</span>
          <span className="text-sm text-zinc-500">{service.metricLabel}</span>
        </div>
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32" aria-labelledby="services-title">
      <div
        className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #b8f135, transparent)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything your brand needs to <Accent>grow online</Accent>
            </>
          }
          description="One team, one strategy, one goal — your growth. Pick a single service or plug into our full growth engine."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className={cn("mt-10 text-center text-sm text-zinc-500")}>
            Not sure where to start?{" "}
            <a href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
              Get a free audit
            </a>{" "}
            and we&apos;ll map out your fastest path to growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
