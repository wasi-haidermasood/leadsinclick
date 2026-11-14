"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Gauge,
  Layers,
  Plus,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    badge: "UX & Wireframing",
    title: "Conversion-First Architecture",
    description:
      "We map out user journeys, buyer psychology, and interactive Figma prototypes designed to eliminate friction and maximize sales.",
    metric: "+42% Lower Bounce Rate",
    icon: Layers,
    accent: "bg-[#0B7B8A] text-white",
  },
  {
    step: "02",
    badge: "Full-Stack Build",
    title: "Next.js & React Engineering",
    description:
      "We write clean, modular TypeScript code using Next.js, Tailwind, and headless CMS or Shopify setups for unbreakable scalability.",
    metric: "100% Custom Codebase",
    icon: Code2,
    accent: "bg-[#E6F7F9] text-[#0B7B8A]",
  },
  {
    step: "03",
    badge: "Speed & Technical SEO",
    title: "Core Web Vitals Optimization",
    description:
      "Every image, script, and route is optimized for sub-second load speeds, schema markup, and top Google organic rankings.",
    metric: "99+ Lighthouse Score",
    icon: Gauge,
    accent: "bg-[#E6F7F9] text-[#0B7B8A]",
  },
  {
    step: "04",
    badge: "Deployment & CRO",
    title: "Edge Launch & Continuous Split-Testing",
    description:
      "We deploy to global edge servers with zero downtime, integrate your CRM/analytics, and run continuous A/B tests to compound ROI.",
    metric: "< 0.4s Global Load Time",
    icon: Rocket,
    accent: "bg-[#15803D] text-white",
  },
];

export default function WebDevProcessSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="how-it-works"
      aria-labelledby="web-process-section-title"
      className="relative w-full bg-transparent px-3 py-16 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* TOP HEADER */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0B7B8A] px-4 py-2 text-[12px] font-semibold tracking-[-0.01em] text-white shadow-[0_8px_24px_rgba(11,123,138,0.45)]"
            >
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>How Our Web Studio Works</span>
            </motion.div>

            <motion.h2
              id="web-process-section-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white"
            >
              From Blank Canvas to
              <br />
              High-Converting Flagship
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="max-w-[480px] text-[14px] leading-[1.65] text-white/70 sm:text-[15.5px]"
            >
              We don&rsquo;t use bloated WordPress templates. We engineer
              bespoke, lightning-fast web experiences built specifically to
              elevate your brand and multiply conversions.
            </motion.p>
          </div>
        </div>

        {/* 4-STEP BENTO CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + index * 0.08,
                  ease: EASE,
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-[#F4F6FA] p-6 text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-[16px] shadow-xs ${item.accent}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.85} />
                    </span>
                    <span className="font-display text-[28px] font-bold tracking-[-0.04em] text-[#CBD5E1]">
                      {item.step}
                    </span>
                  </div>

                  <span className="mt-6 inline-block rounded-full bg-white px-3 py-1 text-[10.5px] font-bold tracking-[0.04em] text-[#0B7B8A] uppercase shadow-2xs">
                    {item.badge}
                  </span>

                  <h3 className="mt-3 text-[19px] leading-snug font-bold tracking-[-0.025em] text-[#141A29]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-[1.65] text-[#64748B]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between rounded-[16px] bg-white px-4 py-3 shadow-[0_6px_20px_rgba(20,26,41,0.05)]">
                  <span className="text-[11px] font-medium text-[#8C95A6]">
                    Benchmark
                  </span>
                  <span className="text-[12px] font-bold text-[#141A29]">
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM TECH STACK & PERFORMANCE BANNER */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
          className="mt-6 overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-r from-[#0F96A6] via-[#0B7B8A] to-[#075B68] p-6 text-white shadow-[0_28px_70px_rgba(7,91,104,0.4)] sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Enterprise-Grade Stack &amp; Integrations</span>
              </div>
              <h3 className="mt-3.5 font-display text-[clamp(1.45rem,3vw,2.15rem)] leading-tight font-semibold tracking-[-0.03em]">
                Engineered for Speed, SEO, and Seamless CRM Sync.
              </h3>
              <p className="mt-2 max-w-[560px] text-[13.5px] leading-relaxed text-white/85 sm:text-[14.5px]">
                Every site we build comes pre-integrated with your analytics,
                payment gateways, headless CMS, and instant lead routing.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col">
              <div className="flex flex-1 items-center justify-between gap-3 rounded-[18px] bg-white p-4 text-[#141A29] shadow-lg">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#DCFCE7] text-[#15803D]">
                    <Zap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-bold text-[#141A29]">
                      Google Lighthouse Audit: 100 / 100
                    </p>
                    <p className="truncate text-[11px] font-medium text-[#64748B]">
                      Performance • Accessibility • Best Practices • SEO
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-md bg-[#DCFCE7] px-2.5 py-1 text-[10px] font-bold text-[#15803D]">
                  PASSED
                </span>
              </div>

              <div className="flex flex-1 items-center justify-between gap-3 rounded-[18px] bg-white/12 px-4 py-3 text-white backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-[12px] font-medium">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#9AE6B4]" />
                  <span>
                    Next.js • React • TypeScript • Shopify • Sanity • Stripe
                  </span>
                </div>
                <Send className="h-3.5 w-3.5 shrink-0 text-white/70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}