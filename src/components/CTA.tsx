"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { EASE } from "./ui";

const POINTER_SPRING = {
  stiffness: 55,
  damping: 22,
  mass: 0.7,
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const CLIENT_AVATARS = [
  {
    name: "Sarah Jenkins",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Marcus Vance",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Elena Rostova",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Kim",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

const SHOWCASE_CARDS = [
  {
    id: "strategy",
    tag: "01 / STRATEGY POD",
    title: "Dedicated Growth Team",
    metric: "+312%",
    metricLabel: "Qualified Pipeline",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    accentGradient:
      "linear-gradient(145deg, #42CED3 0%, #16B8C5 54%, #0FA4B2 100%)",
    badgeBg: "bg-[#BAF235] text-[#101210]",
  },
  {
    id: "performance",
    tag: "02 / PAID & ORGANIC",
    title: "High-Intent Acquisition",
    metric: "4.8×",
    metricLabel: "Average ROAS",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    accentGradient:
      "linear-gradient(145deg, #8977C6 0%, #7963B9 56%, #6B55A6 100%)",
    badgeBg: "bg-white text-[#101210]",
  },
  {
    id: "conversion",
    tag: "03 / CRO & WEB",
    title: "Clicks Into Customers",
    metric: "+38%",
    metricLabel: "Conversion Lift",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4limit?auto=format&fit=crop&w=800&q=80",
    fallbackImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    accentGradient:
      "linear-gradient(145deg, #F77D9E 0%, #F26B91 56%, #E25E84 100%)",
    badgeBg: "bg-[#BAF235] text-[#101210]",
  },
];

export default function CTA() {
  const reducedMotion = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const pointerX = useSpring(targetX, POINTER_SPRING);
  const pointerY = useSpring(targetY, POINTER_SPRING);

  // Subtle parallax transforms for the Unsplash image cards
  const mainCardX = useTransform(pointerX, [-1, 1], [-12, 12]);
  const mainCardY = useTransform(pointerY, [-1, 1], [-10, 10]);
  const secondaryCardX = useTransform(pointerX, [-1, 1], [16, -16]);
  const secondaryCardY = useTransform(pointerY, [-1, 1], [12, -12]);
  const badgeX = useTransform(pointerX, [-1, 1], [-20, 20]);

  useEffect(() => {
    const invalidate = () => {
      rectRef.current = null;
    };

    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);

    return () => {
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
    };
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;

    const section = sectionRef.current;
    if (!section) return;

    if (!rectRef.current) {
      rectRef.current = section.getBoundingClientRect();
    }

    const rect = rectRef.current;
    if (!rect.width || !rect.height) return;

    targetX.set(
      clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),
    );
    targetY.set(
      clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1),
    );
  };

  const handlePointerLeave = () => {
    targetX.set(0);
    targetY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-labelledby="cta-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-hidden bg-[#0B0B0B] py-20 text-[#F5F5F5] sm:py-28 lg:py-32"
    >
      {/* Ambient light & grain matching Hero */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 15%, rgba(186,242,53,.08), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(22,184,197,.10), transparent 72%), radial-gradient(ellipse 50% 40% at 15% 75%, rgba(137,119,198,.09), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Main Sculpted CTA Container */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="relative isolate overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-b from-white/[0.06] via-[#121312]/90 to-[#0D0E0D] p-7 shadow-[0_32px_90px_rgba(0,0,0,0.65)] sm:p-12 lg:p-16"
        >
          {/* Architectural subtle grid inside card */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 80% 75% at 50% 50%, black 20%, transparent 90%)",
            }}
            aria-hidden="true"
          />

          {/* Top glowing rim highlight */}
          <div
            className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-[#BAF235]/60 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
            {/* LEFT COLUMN: Copy, CTA Buttons, Trust Signals */}
            <div className="flex flex-col items-start text-left lg:col-span-7">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#BAF235] shadow-[0_0_10px_#BAF235]" />
                <span className="text-[10px] font-bold tracking-[0.19em] text-white/80 sm:text-[11px]">
                  LEADS IN CLICK • GROWTH PARTNER
                </span>
              </motion.div>

              <h2
                id="cta-title"
                className="font-display text-[clamp(2.1rem,5vw,4.15rem)] leading-[0.98] font-semibold tracking-[-0.07em] text-white"
              >
                <span className="mb-[-0.08em] block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={reducedMotion ? false : { opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
                  >
                    Ready to Turn Every
                  </motion.span>
                </span>
                <span className="mb-[-0.08em] block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={reducedMotion ? false : { opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.28, ease: EASE }}
                  >
                    <span className="text-[#BAF235]">Click</span> Into{" "}
                    <span className="text-[#BAF235]">Customers?</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.4, ease: EASE }}
                className="mt-5 max-w-[540px] text-[14px] leading-relaxed text-white/65 sm:text-[15px]"
              >
                Stop losing high-intent traffic to leaky funnels. Partner with{" "}
                <strong className="font-semibold text-white/90">
                  Leads in Click
                </strong>{" "}
                to unify SEO, paid media, high-converting web experiences, and
                predictable lead generation.
              </motion.p>

              {/* CTA Actions */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.52, ease: EASE }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                {/* Primary Pill CTA matching Hero */}
                <motion.a
                  href="/contact"
                  className="group inline-flex min-h-[48px] items-center gap-3.5 rounded-full border border-white/70 bg-[#F5F5F5] py-1.5 pr-1.5 pl-6 text-[13px] font-bold tracking-[-0.02em] text-[#101210] shadow-[0_8px_26px_rgba(0,0,0,0.34)]"
                  whileHover={
                    reducedMotion ? undefined : { scale: 1.045, y: -2 }
                  }
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <span>Book Your Free Growth Audit</span>
                  <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#BAF235]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                  </span>
                </motion.a>

                {/* Secondary Pill CTA */}
                <motion.a
                  href="#services"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 text-[13px] font-semibold tracking-[-0.02em] text-white/85 backdrop-blur-md transition hover:border-[#BAF235]/60 hover:text-[#BAF235]"
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <span>Explore Our Work</span>
                </motion.a>
              </motion.div>

              {/* Unsplash Client Avatars + Social Proof */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.64, ease: EASE }}
                className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6"
              >
                <div className="flex items-center -space-x-2.5">
                  {CLIENT_AVATARS.map((avatar) => (
                    <img
                      key={avatar.name}
                      src={avatar.url}
                      alt={avatar.name}
                      loading="lazy"
                      className="h-9 w-9 rounded-full border-2 border-[#121312] object-cover shadow-md"
                    />
                  ))}
                  <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#121312] bg-[#BAF235] text-[10px] font-extrabold tracking-[-0.04em] text-[#101210]">
                    120+
                  </span>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-[-0.02em] text-white/90">
                    <span>Trusted by 120+ ambitious brands</span>
                    <span className="rounded-full bg-[#BAF235]/15 px-2 py-0.5 text-[10px] font-extrabold text-[#BAF235]">
                      4.9 ★
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50">
                    Free 30-minute strategy session • No obligation
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Fanned / Layered Unsplash Visual Cards */}
            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[500px] items-center justify-center lg:col-span-5 lg:max-w-none">
              {/* Background Ambient Glow behind Unsplash Cards */}
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BAF235]/15 blur-[80px]"
                aria-hidden="true"
              />

              {/* Back Left Tilted Card (Unsplash Image 2) */}
              <motion.div
                style={
                  reducedMotion
                    ? undefined
                    : { x: secondaryCardX, y: secondaryCardY }
                }
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, rotate: -14, x: -40, scale: 0.9 }
                }
                whileInView={{ opacity: 1, rotate: -8, x: -34, scale: 0.94 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: EASE }}
                className="absolute top-4 left-0 z-10 hidden w-[235px] overflow-hidden rounded-[26px] border border-white/25 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)] sm:block"
              >
                <div
                  className=" inset-0 -z-10"
                  style={{
                    background: SHOWCASE_CARDS[1].accentGradient,
                    position: "absolute",
                  }}
                />
                <div className="relative h-[165px] w-full overflow-hidden rounded-[18px] border border-white/20">
                  <img
                    src={SHOWCASE_CARDS[1].image}
                    alt={SHOWCASE_CARDS[1].title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[8px] font-extrabold tracking-[0.16em] text-white backdrop-blur-md">
                    {SHOWCASE_CARDS[1].tag}
                  </span>
                </div>
                <div className="mt-3 flex items-end justify-between px-1 text-white">
                  <div>
                    <p className="text-[10px] font-semibold text-white/75">
                      {SHOWCASE_CARDS[1].metricLabel}
                    </p>
                    <p className="font-display text-[24px] leading-none font-extrabold tracking-[-0.06em]">
                      {SHOWCASE_CARDS[1].metric}
                    </p>
                  </div>
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/25 bg-white/15">
                    <TrendingUp className="h-3.5 w-3.5 text-[#BAF235]" />
                  </span>
                </div>
              </motion.div>

              {/* Center Featured Card (Unsplash Image 1) */}
              <motion.article
                style={
                  reducedMotion ? undefined : { x: mainCardX, y: mainCardY }
                }
                initial={
                  reducedMotion ? false : { opacity: 0, y: 28, scale: 0.94 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
                whileHover={
                  reducedMotion ? undefined : { y: -8, scale: 1.02 }
                }
                className="group relative z-20 w-full max-w-[320px] overflow-hidden rounded-[28px] border border-white/30 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
              >
                <div
                  className="absolute inset-0 -z-10"
                  style={{ background: SHOWCASE_CARDS[0].accentGradient }}
                />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/25 via-transparent to-black/20" />

                {/* Card Header matching Hero WheelCard */}
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="flex items-center gap-1.5 text-[8px] font-extrabold tracking-[0.16em] text-[#07343A]/75">
                      <span className="h-[5px] w-[5px] rounded-full bg-[#07343A]" />
                      {SHOWCASE_CARDS[0].tag}
                    </p>
                    <h3 className="mt-1 font-display text-[20px] leading-tight font-bold tracking-[-0.055em] text-[#07343A]">
                      {SHOWCASE_CARDS[0].title}
                    </h3>
                  </div>
                  <span className="grid h-[28px] w-[28px] place-items-center rounded-full border border-black/10 bg-black/10 text-[#07343A]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Unsplash Featured Photo */}
                <div className="relative h-[225px] w-full overflow-hidden rounded-[20px] border border-white/40 shadow-inner">
                  <img
                    src={SHOWCASE_CARDS[0].image}
                    alt="Leads in Click digital strategy team collaborating"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072227]/85 via-transparent to-transparent" />

                  {/* Live KPI Overlay inside Unsplash Photo */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/20 bg-[#0B191C]/85 p-3 text-white backdrop-blur-md">
                    <div>
                      <p className="text-[8px] font-bold tracking-[0.15em] text-white/65">
                        {SHOWCASE_CARDS[0].metricLabel.toUpperCase()}
                      </p>
                      <p className="mt-0.5 font-display text-[22px] leading-none font-extrabold tracking-[-0.06em] text-[#BAF235]">
                        {SHOWCASE_CARDS[0].metric}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#BAF235]/20 px-2.5 py-1 text-[9px] font-extrabold tracking-[0.08em] text-[#BAF235]">
                      <Sparkles className="h-3 w-3" />
                      VERIFIED ROI
                    </span>
                  </div>
                </div>
              </motion.article>

              {/* Bottom Right Floating Unsplash Mini Card */}
              <motion.div
                style={reducedMotion ? undefined : { x: badgeX }}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, rotate: 10, x: 35, y: 20 }
                }
                whileInView={{ opacity: 1, rotate: 6, x: 24, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
                className="absolute right-0 -bottom-3 z-30 hidden w-[210px] rounded-[22px] border border-white/30 p-3 shadow-[0_22px_50px_rgba(0,0,0,0.55)] sm:block"
              >
                <div
                  className="absolute inset-0 -z-10 rounded-[inherit]"
                  style={{ background: SHOWCASE_CARDS[2].accentGradient }}
                />
                <div className="flex items-center gap-3">
                  <img
                    src={SHOWCASE_CARDS[2].fallbackImage}
                    alt="Conversion growth session"
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-2xl border border-white/50 object-cover"
                  />
                  <div className="text-[#321521]">
                    <span className="block text-[8px] font-extrabold tracking-[0.15em] text-[#321521]/70">
                      CONVERSION LIFT
                    </span>
                    <strong className="font-display text-[21px] leading-none font-extrabold tracking-[-0.06em]">
                      {SHOWCASE_CARDS[2].metric}
                    </strong>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Three-Column Highlights Bar matching Hero bottom strip */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
            className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10"
          >
            <div className="flex items-start gap-3 sm:px-6 sm:first:pl-0">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#BAF235]" />
              <div>
                <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
                  Custom 90-Day Roadmap
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/50">
                  Actionable audit of your SEO, paid ads, and conversion funnel
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:px-6">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#BAF235]" />
              <div>
                <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
                  Transparent Attribution
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/50">
                  Real-time reporting tied directly to leads and revenue
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:px-6 sm:last:pr-0">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#BAF235]" />
              <div>
                <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
                  Launch in Under 14 Days
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/50">
                  Senior specialists executing from day one without bloat
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}