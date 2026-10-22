"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { Accent, EASE, Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

type Feature = { text: string; included: boolean };
type Plan = {
  name: string;
  monthly: number;
  blurb: string;
  popular?: boolean;
  features: Feature[];
};

const PLANS: Plan[] = [
  {
    name: "Launch",
    monthly: 19999,
    blurb:
      "For local businesses getting visible and generating their first steady enquiries.",
    features: [
      { text: "GMB creation, verification & ranking", included: true },
      { text: "Social media — 12 posts / month", included: true },
      { text: "1 high-converting landing page", included: true },
      { text: "Review generation system", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Facebook & Google Ads management", included: false },
      { text: "WhatsApp lead alerts", included: false },
      { text: "Dedicated growth manager", included: false },
    ],
  },
  {
    name: "Growth",
    monthly: 39999,
    popular: true,
    blurb:
      "Our most popular engine — ads, funnels and content working together to scale leads.",
    features: [
      { text: "Everything in Launch", included: true },
      { text: "Facebook, Instagram & Google Ads", included: true },
      { text: "Lead funnels + WhatsApp alerts", included: true },
      { text: "Social media — 20 posts + 4 reels", included: true },
      { text: "Ad creatives & copywriting included", included: true },
      { text: "Dedicated growth manager", included: true },
      { text: "Bi-weekly reports & strategy calls", included: true },
      { text: "Full custom website", included: false },
    ],
  },
  {
    name: "Scale",
    monthly: 74999,
    blurb:
      "For ambitious brands ready to dominate their market across every channel.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Full custom website (design + build)", included: true },
      { text: "Advanced retargeting & automation", included: true },
      { text: "Social media — 30 posts + 8 reels", included: true },
      { text: "Multi-location GMB domination", included: true },
      { text: "Priority support (same-day response)", included: true },
      { text: "Weekly reports & growth sprints", included: true },
      { text: "Quarterly brand strategy workshop", included: true },
    ],
  },
];

export default function Pricing() {
  const [quarterly, setQuarterly] = useState(false);

  const priceFor = (plan: Plan) =>
    Math.round(quarterly ? plan.monthly * 0.85 : plan.monthly).toLocaleString(
      "en-IN"
    );

  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-labelledby="pricing-title"
    >
      <div
        className="absolute top-10 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[130px]"
        style={{
          background: "radial-gradient(closest-side, #b8f135, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Transparent pricing"
          title={
            <>
              Growth plans that <Accent>pay for themselves</Accent>
            </>
          }
          description="No hidden charges. No lock-in. Just one flat monthly fee for a complete growth team — designer, media buyer, copywriter and strategist included."
        />

        {/* Billing toggle */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div
              role="group"
              aria-label="Billing period"
              className="relative flex rounded-full border border-white/10 bg-white/[0.03] p-1"
            >
              {[
                { label: "Monthly", value: false },
                { label: "Quarterly", value: true },
              ].map((opt) => {
                const selected = quarterly === opt.value;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setQuarterly(opt.value)}
                    aria-pressed={selected}
                    className={cn(
                      "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300",
                      selected ? "text-black" : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="billing-pill"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="absolute inset-0 rounded-full bg-brand"
                      />
                    )}
                    <span className="relative z-10">{opt.label}</span>
                  </button>
                );
              })}
            </div>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-300",
                quarterly
                  ? "bg-brand text-black"
                  : "bg-white/[0.06] text-zinc-400"
              )}
            >
              Save 15%
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-2",
                  plan.popular
                    ? "border border-brand/50 bg-panel shadow-[0_0_70px_rgba(184,241,53,0.14)]"
                    : "border border-white/[0.08] bg-panel hover:border-white/20"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black shadow-[0_8px_26px_rgba(184,241,53,0.45)]">
                    <Sparkles className="h-3.5 w-3.5" /> MOST POPULAR
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 min-h-[42px] text-sm leading-relaxed text-zinc-400">
                  {plan.blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-lg font-medium text-zinc-400">$</span>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={priceFor(plan)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="font-display text-[44px] leading-none font-semibold tracking-tight text-white"
                    >
                      {priceFor(plan)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-zinc-500">/month</span>
                </div>
                <p className="mt-1.5 h-4 text-xs text-zinc-500">
                  {quarterly
                    ? "Billed quarterly · GST extra"
                    : "Billed monthly · GST extra"}
                </p>

                <ul className="mt-7 flex-1 space-y-3 border-t border-white/[0.07] pt-7">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={cn(
                        "flex items-start gap-3 text-sm",
                        f.included ? "text-zinc-200" : "text-zinc-600"
                      )}
                    >
                      {f.included ? (
                        <span
                          className={cn(
                            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                            plan.popular
                              ? "bg-brand text-black"
                              : "bg-brand/15 text-brand"
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3.5} />
                        </span>
                      ) : (
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.04]">
                          <X className="h-3 w-3" strokeWidth={3} />
                        </span>
                      )}
                      <span
                        className={
                          f.included ? "" : "line-through decoration-zinc-700"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={cn(
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97]",
                    plan.popular
                      ? "bg-brand text-black hover:shadow-[0_10px_36px_rgba(184,241,53,0.45)]"
                      : "border border-white/15 bg-white/[0.04] text-white hover:border-brand/50 hover:text-brand"
                  )}
                >
                  Start with {plan.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-500">
            Ad spend is billed separately and paid directly to Google/Meta — you
            keep full ownership of your accounts and data.{" "}
            <span className="font-medium text-zinc-300">
              Need something custom?{" "}
              <a
                href="/contact"
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Talk to us
              </a>{" "}
              — we build plans around your goals.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}