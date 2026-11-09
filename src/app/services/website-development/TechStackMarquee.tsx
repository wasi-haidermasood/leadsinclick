"use client";

import {
  Blocks,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  SearchCheck,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";

const TECH_ITEMS = [
  { icon: Rocket, name: "Next.js 15 App Router", tag: "Framework" },
  { icon: Code2, name: "React 19 & TypeScript", tag: "Frontend" },
  { icon: Palette, name: "Tailwind CSS & Framer Motion", tag: "UI / Motion" },
  { icon: ShoppingBag, name: "Shopify & Headless Commerce", tag: "E-Commerce" },
  { icon: Layers, name: "Sanity & Headless CMS", tag: "Content" },
  { icon: Gauge, name: "99+ Core Web Vitals", tag: "Performance" },
  { icon: SearchCheck, name: "Technical SEO & JSON-LD Schema", tag: "Ranking" },
  { icon: Database, name: "Instant WhatsApp & CRM Webhooks", tag: "Integrations" },
  { icon: Globe, name: "Vercel Edge Global CDN", tag: "Infrastructure" },
  { icon: Lock, name: "Enterprise SSL & DDoS Protection", tag: "Security" },
  { icon: Blocks, name: "WordPress Custom Builds", tag: "CMS" },
  { icon: Cpu, name: "AI Lead Capture Chatbots", tag: "Automation" },
];

export default function TechStackMarquee() {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section
      aria-label="Technology Stack"
      className="relative z-10 border-y border-white/[0.07] bg-[#090A0F]/90 py-8 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          Engineered with the modern web&apos;s fastest stack
        </p>
      </div>

      <div className="relative mt-5 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex animate-[marquee_38s_linear_infinite] items-center gap-4 pr-4 hover:[animation-play-state:paused]">
          {doubled.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#12131C]/90 px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl border border-[#42CED3]/25 bg-[#42CED3]/10 text-[#42CED3]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold whitespace-nowrap text-white">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500">
                    {item.tag}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}