"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
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
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { cn } from "@/utils/cn";

type CardTheme = {
  background: string;
  spotlight: string;
  borderClass: string;
  titleClass: string;
  descriptionClass: string;
  kickerClass: string;
  iconBoxClass: string;
  arrowBtnClass: string;
  pillClass: string;
  dividerClass: string;
  metricValueClass: string;
  metricLabelClass: string;
  watermarkClass: string;
  patternColor: string;
};

type Service = {
  index: string;
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
  points: string[];
  metric: string;
  metricLabel: string;
  theme: CardTheme;
  visual?: ReactNode;
};

function FunnelVisual() {
  const rows = [
    {
      label: "Ad Clicks",
      value: "48,200",
      width: "100%",
      barClass: "bg-[#0E2414]/65 text-white",
    },
    {
      label: "Landing Views",
      value: "31,540",
      width: "72%",
      barClass: "bg-[#0E2414]/80 text-white",
    },
    {
      label: "Qualified Leads",
      value: "4,860",
      width: "46%",
      barClass: "bg-[#0E2414] text-[#B8F69E]",
    },
    {
      label: "Customers",
      value: "1,204",
      width: "26%",
      barClass: "bg-white text-[#0E2414] shadow-sm",
    },
  ];

  return (
    <div className="mt-6 space-y-2.5" aria-hidden="true">
      {rows.map((row, i) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="h-7 flex-1 overflow-x-clip rounded-lg bg-[#0E2414]/10 p-0.5">
            <div
              className={cn(
                "flex h-full items-center rounded-md px-2.5 transition-all duration-1000",
                row.barClass
              )}
              style={{ width: row.width, transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
                {row.label}
              </span>
            </div>
          </div>
          <span className="w-14 text-right font-display text-xs font-bold text-[#0E2414]">
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
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#281905]/20 bg-[#281905] px-3.5 py-1.5 text-xs font-semibold text-[#FCD670] shadow-sm">
        <MapPin className="h-3.5 w-3.5" /> Rank #1 on Google Maps
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#281905]/15 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-[#281905] backdrop-blur-sm">
        <span className="flex" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[#D97706] text-[#D97706]" />
          ))}
        </span>
        4.9 · 620+ reviews
      </span>
      <span className="inline-flex items-center rounded-full border border-[#281905]/15 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-[#281905] backdrop-blur-sm">
        +480% direction &amp; call requests
      </span>
    </div>
  );
}

const SERVICES: Service[] = [
  {
    index: "01 / CONVERSION ENGINE",
    icon: Magnet,
    title: "Lead Generation",
    href: "/services/lead-generation",
    description:
      "Full-funnel systems that capture, qualify and deliver ready-to-buy leads straight to your WhatsApp, CRM or inbox — in real time.",
    points: ["Landing page funnels", "WhatsApp lead alerts", "Lead qualification"],
    metric: "1.2M+",
    metricLabel: "leads delivered",
    visual: <FunnelVisual />,
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #B8F69E 0%, #8FE86B 52%, #6CD04E 100%)",
      spotlight: "rgba(255, 255, 255, 0.32)",
      borderClass: "border-white/40 hover:border-white/70",
      titleClass: "text-[#0E2414]",
      descriptionClass: "text-[#16351E]/85",
      kickerClass: "text-[#0E2414]/65",
      iconBoxClass:
        "border-[#0E2414]/15 bg-[#0E2414] text-[#B8F69E] group-hover:scale-110 group-hover:bg-[#16351E]",
      arrowBtnClass:
        "border-[#0E2414]/20 bg-[#0E2414]/10 text-[#0E2414] group-hover:border-[#0E2414] group-hover:bg-[#0E2414] group-hover:text-[#B8F69E]",
      pillClass:
        "border-[#0E2414]/15 bg-white/45 text-[#0E2414] font-semibold backdrop-blur-sm",
      dividerClass: "border-[#0E2414]/15",
      metricValueClass: "text-[#0E2414]",
      metricLabelClass: "text-[#16351E]/80 font-medium",
      watermarkClass: "text-[#0E2414]/[0.06]",
      patternColor: "rgba(14, 36, 20, 0.14)",
    },
  },
  {
    index: "02 / HIGH-SPEED WEB",
    icon: Code2,
    title: "Website Development",
    href: "/services/website-development",
    description:
      "Blazing-fast, mobile-first websites engineered to convert visitors into enquiries — not just look pretty.",
    points: ["Custom design", "98+ PageSpeed", "SEO-ready"],
    metric: "2.4×",
    metricLabel: "more conversions",
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #64E4E9 0%, #1DC0CC 52%, #0E99A6 100%)",
      spotlight: "rgba(255, 255, 255, 0.3)",
      borderClass: "border-white/40 hover:border-white/70",
      titleClass: "text-[#05282D]",
      descriptionClass: "text-[#08383F]/85",
      kickerClass: "text-[#05282D]/65",
      iconBoxClass:
        "border-[#05282D]/15 bg-[#05282D] text-[#64E4E9] group-hover:scale-110 group-hover:bg-[#08383F]",
      arrowBtnClass:
        "border-[#05282D]/20 bg-[#05282D]/10 text-[#05282D] group-hover:border-[#05282D] group-hover:bg-[#05282D] group-hover:text-[#64E4E9]",
      pillClass:
        "border-[#05282D]/15 bg-white/45 text-[#05282D] font-semibold backdrop-blur-sm",
      dividerClass: "border-[#05282D]/15",
      metricValueClass: "text-[#05282D]",
      metricLabelClass: "text-[#08383F]/80 font-medium",
      watermarkClass: "text-[#05282D]/[0.06]",
      patternColor: "rgba(5, 40, 45, 0.14)",
    },
  },
  {
    index: "03 / PAID SOCIAL",
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    href: "/services/facebook-instagram-ads",
    description:
      "Scroll-stopping creatives and laser-targeted Meta campaigns that bring buyers, not just likes.",
    points: ["Ad creatives included", "Retargeting funnels", "A/B testing"],
    metric: "6.4×",
    metricLabel: "average ROAS",
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #FF99B6 0%, #F26B91 52%, #DC5078 100%)",
      spotlight: "rgba(255, 255, 255, 0.28)",
      borderClass: "border-white/40 hover:border-white/70",
      titleClass: "text-[#2B0D18]",
      descriptionClass: "text-[#3D1423]/85",
      kickerClass: "text-[#2B0D18]/65",
      iconBoxClass:
        "border-[#2B0D18]/15 bg-[#2B0D18] text-[#FF99B6] group-hover:scale-110 group-hover:bg-[#3D1423]",
      arrowBtnClass:
        "border-[#2B0D18]/20 bg-[#2B0D18]/10 text-[#2B0D18] group-hover:border-[#2B0D18] group-hover:bg-[#2B0D18] group-hover:text-[#FF99B6]",
      pillClass:
        "border-[#2B0D18]/15 bg-white/45 text-[#2B0D18] font-semibold backdrop-blur-sm",
      dividerClass: "border-[#2B0D18]/15",
      metricValueClass: "text-[#2B0D18]",
      metricLabelClass: "text-[#3D1423]/80 font-medium",
      watermarkClass: "text-[#2B0D18]/[0.06]",
      patternColor: "rgba(43, 13, 24, 0.13)",
    },
  },
  {
    index: "04 / HIGH-INTENT SEARCH",
    icon: Search,
    title: "Google Ads",
    href: "/services/google-ads",
    description:
      "Capture high-intent customers the moment they search. Search, YouTube & Display campaigns tuned for ROI.",
    points: ["Keyword research", "Call tracking", "Smart bidding"],
    metric: "-38%",
    metricLabel: "lower cost per lead",
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #9884D6 0%, #765FBA 52%, #59429B 100%)",
      spotlight: "rgba(255, 255, 255, 0.18)",
      borderClass: "border-white/25 hover:border-white/50",
      titleClass: "text-white",
      descriptionClass: "text-[#F1ECFF]/85",
      kickerClass: "text-white/70",
      iconBoxClass:
        "border-white/25 bg-white/15 text-[#BAF235] backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#BAF235] group-hover:text-[#1E143B]",
      arrowBtnClass:
        "border-white/25 bg-white/10 text-white group-hover:border-[#BAF235] group-hover:bg-[#BAF235] group-hover:text-[#1E143B]",
      pillClass:
        "border-white/20 bg-white/12 text-white font-medium backdrop-blur-sm",
      dividerClass: "border-white/15",
      metricValueClass: "text-[#BAF235]",
      metricLabelClass: "text-[#F1ECFF]/80 font-medium",
      watermarkClass: "text-white/[0.07]",
      patternColor: "rgba(255, 255, 255, 0.14)",
    },
  },
  {
    index: "05 / BRAND AUTHORITY",
    icon: Share2,
    title: "Social Media Management",
    href: "/services/social-media-management",
    description:
      "Content, reels and community management that builds a brand people remember — and buy from.",
    points: ["20+ posts / month", "Reels & creatives", "Monthly calendar"],
    metric: "3.1×",
    metricLabel: "engagement growth",
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #8095FA 0%, #556EEB 52%, #3B52CA 100%)",
      spotlight: "rgba(255, 255, 255, 0.18)",
      borderClass: "border-white/25 hover:border-white/50",
      titleClass: "text-white",
      descriptionClass: "text-[#EBF0FF]/85",
      kickerClass: "text-white/70",
      iconBoxClass:
        "border-white/25 bg-white/15 text-[#BAF235] backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#BAF235] group-hover:text-[#121D52]",
      arrowBtnClass:
        "border-white/25 bg-white/10 text-white group-hover:border-[#BAF235] group-hover:bg-[#BAF235] group-hover:text-[#121D52]",
      pillClass:
        "border-white/20 bg-white/12 text-white font-medium backdrop-blur-sm",
      dividerClass: "border-white/15",
      metricValueClass: "text-[#BAF235]",
      metricLabelClass: "text-[#EBF0FF]/80 font-medium",
      watermarkClass: "text-white/[0.07]",
      patternColor: "rgba(255, 255, 255, 0.14)",
    },
  },
  {
    index: "06 / LOCAL DOMINANCE",
    icon: MapPin,
    title: "GMB Creation & Ranking",
    href: "/services/gmb-creation-ranking",
    description:
      "Own the “near me” searches. We create, verify and rank your Google Business Profile so local customers find — and call — you first.",
    points: ["Profile setup & verification", "Review engine", "Local SEO"],
    metric: "#1",
    metricLabel: "Maps ranking goal",
    visual: <GmbVisual />,
    theme: {
      background:
        "radial-gradient(120% 130% at 0% 0%, #FCD875 0%, #F3B941 52%, #DF9B1E 100%)",
      spotlight: "rgba(255, 255, 255, 0.32)",
      borderClass: "border-white/45 hover:border-white/75",
      titleClass: "text-[#281905]",
      descriptionClass: "text-[#3D2709]/85",
      kickerClass: "text-[#281905]/65",
      iconBoxClass:
        "border-[#281905]/15 bg-[#281905] text-[#FCD875] group-hover:scale-110 group-hover:bg-[#3D2709]",
      arrowBtnClass:
        "border-[#281905]/20 bg-[#281905]/10 text-[#281905] group-hover:border-[#281905] group-hover:bg-[#281905] group-hover:text-[#FCD875]",
      pillClass:
        "border-[#281905]/15 bg-white/50 text-[#281905] font-semibold backdrop-blur-sm",
      dividerClass: "border-[#281905]/15",
      metricValueClass: "text-[#281905]",
      metricLabelClass: "text-[#3D2709]/80 font-medium",
      watermarkClass: "text-[#281905]/[0.06]",
      patternColor: "rgba(40, 25, 5, 0.14)",
    },
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const { theme } = service;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={handleMove}
      style={{ background: theme.background }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border p-7 shadow-[0_-16px_48px_rgba(0,0,0,0.45)] transition-all duration-500 sm:p-9",
        theme.borderClass
      )}
    >
      {/* Interactive pointer spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${theme.spotlight}, transparent 65%)`,
        }}
      />

      {/* Subtle architectural dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(${theme.patternColor} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 85% 20%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 85% 20%, black 20%, transparent 75%)",
        }}
      />

      {/* Decorative background watermark icon */}
      <Icon
        aria-hidden="true"
        strokeWidth={1.25}
        className={cn(
          "pointer-events-none absolute -right-6 -bottom-8 h-52 w-52 -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6",
          theme.watermarkClass
        )}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span
              className={cn(
                "grid h-13 w-13 place-items-center rounded-2xl border shadow-sm transition-all duration-500",
                theme.iconBoxClass
              )}
            >
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <span
              className={cn(
                "font-mono text-[11px] font-bold tracking-[0.18em] uppercase",
                theme.kickerClass
              )}
            >
              {service.index}
            </span>
          </div>

          <Link
            href={service.href}
            aria-label={`Explore ${service.title}`}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-all duration-300",
              theme.arrowBtnClass
            )}
          >
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>

        <h3
          className={cn(
            "mt-6 font-display text-[24px] font-bold tracking-tight sm:text-[28px]",
            theme.titleClass
          )}
        >
          <Link
            href={service.href}
            className="inline-block underline-offset-4 hover:underline focus:outline-none"
          >
            {service.title}
          </Link>
        </h3>
        <p
          className={cn(
            "mt-2.5 max-w-2xl text-[15.5px] leading-relaxed font-medium",
            theme.descriptionClass
          )}
        >
          {service.description}
        </p>

        {service.visual}

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`${service.title} includes`}
        >
          {service.points.map((point) => (
            <li
              key={point}
              className={cn(
                "rounded-full border px-3.5 py-1 text-xs tracking-tight",
                theme.pillClass
              )}
            >
              {point}
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-7 flex flex-wrap items-center justify-between gap-4 border-t pt-5",
            theme.dividerClass
          )}
        >
          <div className="flex items-baseline gap-2.5">
            <span
              className={cn(
                "font-display text-3xl font-bold tracking-tight",
                theme.metricValueClass
              )}
            >
              {service.metric}
            </span>
            <span className={cn("text-sm", theme.metricLabelClass)}>
              {service.metricLabel}
            </span>
          </div>

          <Link
            href={service.href}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase transition-transform duration-300 group-hover:translate-x-0.5",
              theme.titleClass
            )}
          >
            Explore Service
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-labelledby="services-title"
    >
      <div
        className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #b8f135, transparent)",
        }}
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

        <div className="mt-16">
          <ScrollStack
            stackTop={112}
            stackOffset={24}
            itemDistance={100}
            itemScale={0.04}
            baseScale={0.9}
            dimAmount={0.3}
            holdDistance={160}
          >
            {SERVICES.map((service) => (
              <ScrollStackItem key={service.title}>
                <ServiceCard service={service} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        <Reveal delay={0.15}>
          <p className={cn("mt-10 text-center text-sm text-zinc-500")}>
            Not sure where to start?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Get a free audit
            </Link>{" "}
            and we&apos;ll map out your fastest path to growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}