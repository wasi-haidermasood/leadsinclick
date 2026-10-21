"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Magnet,
  MapPin,
  Megaphone,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { Accent, Reveal, SectionHeading } from "./ui";

type ElasticService = {
  id: string;
  title: string;
  category: string; // small pill label
  description: string;
  points: string[];
  metric: string;
  metricLabel: string;
  href: string; // real link
  icon: LucideIcon;
  // Use an image for the background. Replace these with your own later.
  image: { src: string; alt: string };
};

const SERVICES: ElasticService[] = [
  {
    id: "01",
    title: "Lead Generation",
    category: "Funnels",
    description:
      "Full-funnel systems that capture, qualify and deliver ready-to-buy leads straight to your WhatsApp, CRM or inbox — in real time.",
    points: ["Landing page funnels", "WhatsApp lead alerts", "Lead qualification"],
    metric: "1.2M+",
    metricLabel: "leads delivered",
    href: "/services/lead-generation",
    icon: Magnet,
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      alt: "Analytics dashboard and charts",
    },
  },
  {
    id: "02",
    title: "Website Development",
    category: "Web",
    description:
      "Blazing-fast, mobile-first websites engineered to convert visitors into enquiries — not just look pretty.",
    points: ["Custom design", "98+ PageSpeed", "SEO-ready"],
    metric: "2.4×",
    metricLabel: "more conversions",
    href: "/services/website-development",
    icon: Code2,
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      alt: "Code on a screen",
    },
  },
  {
    id: "03",
    title: "Facebook & Instagram Ads",
    category: "Meta Ads",
    description:
      "Scroll-stopping creatives and laser-targeted Meta campaigns that bring buyers, not just likes.",
    points: ["Ad creatives included", "Retargeting funnels", "A/B testing"],
    metric: "6.4×",
    metricLabel: "average ROAS",
    href: "/services/meta-ads",
    icon: Megaphone,
    image: {
      src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80",
      alt: "Creative marketing visuals",
    },
  },
  {
    id: "04",
    title: "Google Ads",
    category: "Search",
    description:
      "Capture high-intent customers the moment they search. Search, YouTube & Display campaigns tuned for ROI.",
    points: ["Keyword research", "Call tracking", "Smart bidding"],
    metric: "-38%",
    metricLabel: "lower cost per lead",
    href: "/services/google-ads",
    icon: Search,
    image: {
      src: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80",
      alt: "Search and performance graphs",
    },
  },
  {
    id: "05",
    title: "Social Media Management",
    category: "Social",
    description:
      "Content, reels and community management that builds a brand people remember — and buy from.",
    points: ["20+ posts / month", "Reels & creatives", "Monthly calendar"],
    metric: "3.1×",
    metricLabel: "engagement growth",
    href: "/services/social-media-management",
    icon: Share2,
    image: {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      alt: "Social apps on a phone",
    },
  },
  {
    id: "06",
    title: "GMB Creation & Ranking",
    category: "Local SEO",
    description:
      "Own the “near me” searches. We create, verify and rank your Google Business Profile so local customers find — and call — you first.",
    points: ["Profile setup & verification", "Review engine", "Local SEO"],
    metric: "#1",
    metricLabel: "Maps ranking goal",
    href: "/services/gmb-ranking",
    icon: MapPin,
    image: {
      src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1600&q=80",
      alt: "Map and location pins",
    },
  },
];

function ServiceElasticItem({
  item,
  active,
  onActivate,
}: {
  item: ElasticService;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={(e) => {
        // If you want "first click expands, second click navigates", uncomment block below.
        // For now, click navigates (normal links) but still updates active.
        onActivate();

        // Example "expand first, navigate second":
        // if (!active) {
        //   e.preventDefault();
        //   onActivate();
        // }
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-panel outline-none",
        "transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        active ? "flex-[4]" : "flex-[1]",
        active ? "brightness-100" : "brightness-50 hover:brightness-75",
        "focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-0"
      )}
      aria-label={`Open ${item.title}`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={item.image.src}
          alt={item.image.alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-1000",
            active ? "scale-100" : "scale-110"
          )}
        />

        {/* Dark overlay tuned for your theme */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 transition-opacity duration-500",
            active ? "opacity-100" : "opacity-60"
          )}
        />

        {/* Slight panel tint so it feels like your bg-panel world */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/25 bg-brand/[0.08] text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-black">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>

          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand group-hover:text-black">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        {/* Bottom content area */}
        <div className="relative">
          {/* Active content */}
          <div
            className={cn(
              "transition-all duration-500",
              active ? "translate-y-0 opacity-100 delay-150" : "translate-y-8 opacity-0"
            )}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-100 backdrop-blur">
                {item.category}
              </span>
              <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                {item.metric} <span className="text-brand/70">· {item.metricLabel}</span>
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              {item.title}
            </h3>

            <p className="mt-2 max-w-xl leading-relaxed text-zinc-200/80">
              {item.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${item.title} includes`}>
              {item.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
              View Service <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Inactive label (vertical on desktop, id on mobile) */}
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 transition-all duration-500",
              "bottom-0",
              active ? "opacity-0 scale-75" : "opacity-100 delay-500"
            )}
          >
            <span className="hidden whitespace-nowrap text-xl font-bold uppercase tracking-widest text-white [writing-mode:vertical-rl] md:block">
              {item.title}
            </span>
            <span className="block text-xs font-bold text-white md:hidden">{item.id}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ServicesElasticGallery({ items }: { items: ElasticService[] }) {
  const initial = useMemo(() => items[0]?.id ?? null, [items]);
  const [activeId, setActiveId] = useState<string | null>(initial);

  return (
    <div className="mx-auto flex h-[560px] w-full max-w-7xl flex-col gap-3 sm:h-[640px] md:flex-row md:gap-4">
      {items.map((item) => (
        <ServiceElasticItem
          key={item.id}
          item={item}
          active={activeId === item.id}
          onActivate={() => setActiveId(item.id)}
        />
      ))}
    </div>
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

        <Reveal delay={0.08}>
          <div className="mt-14">
            <ServicesElasticGallery items={SERVICES} />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className={cn("mt-10 text-center text-sm text-zinc-500")}>
            Not sure where to start?{" "}
            <a
              href="/contact"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Get a free audit
            </a>{" "}
            and we&apos;ll map out your fastest path to growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}