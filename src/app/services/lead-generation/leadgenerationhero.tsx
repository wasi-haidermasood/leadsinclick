"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUp,
  ArrowUpRight,
  DollarSign,
  FolderKanban,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CHANNEL_FEATURES = [
  {
    icon: DollarSign,
    label: "High-ROI Paid Ads",
  },
  {
    icon: TrendingUp,
    label: "Social Media Outreach",
  },
  {
    icon: ArrowLeftRight,
    label: "Email Automation",
  },
  {
    icon: ShieldCheck,
    label: "Verified B2B & B2C Leads",
  },
];

export default function LeadGenerationHero() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      aria-labelledby="leadgen-hero-title"
      className="relative w-full bg-transparent px-3 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-36"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Main Electric Blue Hero Frame */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative isolate overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-[#2348E8] via-[#274FF2] to-[#1D3FD6] px-4 pt-7 pb-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.65)] sm:rounded-[32px] sm:px-8 sm:pt-12 sm:pb-12 lg:px-16 lg:pt-16 lg:pb-14"
        >
          {/* Background 3D Wireframe Globe & Perspective Grid SVG */}
          <svg
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g stroke="white" strokeWidth="1" strokeOpacity="0.45">
              <circle cx="420" cy="430" r="460" />
              <ellipse cx="420" cy="430" rx="370" ry="460" />
              <ellipse cx="420" cy="430" rx="260" ry="460" />
              <ellipse cx="420" cy="430" rx="140" ry="460" />
              <ellipse
                cx="420"
                cy="430"
                rx="460"
                ry="140"
                transform="rotate(-14 420 430)"
              />
              <ellipse
                cx="420"
                cy="430"
                rx="460"
                ry="260"
                transform="rotate(-14 420 430)"
              />
              <ellipse
                cx="420"
                cy="430"
                rx="460"
                ry="370"
                transform="rotate(-14 420 430)"
              />
            </g>

            <g stroke="white" strokeWidth="1" strokeOpacity="0.3">
              <line x1="780" y1="0" x2="1440" y2="520" />
              <line x1="920" y1="0" x2="1440" y2="410" />
              <line x1="640" y1="0" x2="1440" y2="650" />
              <line x1="500" y1="0" x2="1380" y2="900" />
              <line x1="1440" y1="120" x2="760" y2="900" />
              <line x1="1440" y1="280" x2="910" y2="900" />
              <line x1="1440" y1="450" x2="1060" y2="900" />
            </g>

            <defs>
              <radialGradient id="heroGlow" cx="0.2" cy="0.15" r="0.6">
                <stop offset="0%" stopColor="#6E8EFF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2348E8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#heroGlow)" />
          </svg>

          {/* TOP ROW: Title & Description */}
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <motion.h1
                id="leadgen-hero-title"
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="font-display text-[clamp(1.9rem,6vw,4.5rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-white"
              >
                Smart Multi-Channel
                <br />
                Lead Generation
              </motion.h1>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                className="max-w-[520px] text-[13.5px] leading-[1.6] font-normal text-white/85 sm:text-[15px] lg:max-w-[440px] lg:text-[15.5px] lg:leading-[1.65]"
              >
                Capture, nurture, and convert high-intent prospects easily,
                quickly, and predictably. Leads in Click unifies social media,
                email marketing, and paid ads in one intuitive growth engine.
              </motion.p>
            </div>
          </div>

          {/* HORIZONTAL DIVIDER */}
          <motion.div
            initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
            className="my-6 h-px w-full origin-left bg-white/25 sm:my-8 lg:my-10"
          />

          {/* MIDDLE ROW: 4 Channel Feature Badges */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: EASE }}
            className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          >
            {CHANNEL_FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 text-white/95 backdrop-blur-sm sm:gap-3.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/45 bg-white/[0.08] sm:h-11 sm:w-11">
                  <Icon
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="text-[12px] leading-tight font-medium tracking-[-0.01em] sm:text-[14.5px] lg:text-[15.5px]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* BOTTOM ROW: 3-Column Bento Dashboard Grid */}
          <div className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* COLUMN 1: Campaign Summary + Top-Rated Testimonial Card */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
              className="flex flex-col justify-between rounded-[22px] bg-white p-4 text-[#121826] shadow-[0_20px_50px_rgba(11,26,97,0.22)] sm:rounded-[26px] sm:p-6 md:col-span-1 lg:col-span-4"
            >
              <div>
                <h2 className="text-[15px] font-bold tracking-[-0.02em] text-[#141A29] sm:text-[16px]">
                  Campaign Summary
                </h2>

                <div className="mt-4 grid grid-cols-[1fr_1fr_auto] items-center gap-2 sm:mt-5 sm:gap-3">
                  <div className="min-w-0">
                    <span className="block truncate text-[11px] font-medium text-[#8C95A6] sm:text-[11.5px]">
                      Ad Spend
                    </span>
                    <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F2F4F8] text-[#141A29] sm:h-8 sm:w-8">
                        <ArrowUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="truncate text-[13px] font-bold tracking-[-0.03em] text-[#141A29] sm:text-[15px]">
                        $2,879.00
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <span className="block truncate text-[11px] font-medium text-[#8C95A6] sm:text-[11.5px]">
                      Pipeline Value
                    </span>
                    <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2448E8] text-white shadow-sm sm:h-8 sm:w-8">
                        <ArrowDown className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="truncate text-[13px] font-bold tracking-[-0.03em] text-[#141A29] sm:text-[15px]">
                        $39,806.50
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="block text-[11px] font-medium text-[#8C95A6] sm:text-[11.5px]">
                      Add
                    </span>
                    <button
                      type="button"
                      aria-label="Add new lead channel"
                      className="mt-1.5 grid h-7 w-7 place-items-center rounded-full bg-[#F2F4F8] text-[#2448E8] transition hover:bg-[#2448E8] hover:text-white sm:mt-2 sm:h-8 sm:w-8"
                    >
                      <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Inner Blue Notched Testimonial Card */}
              <div className="relative mt-5 overflow-hidden rounded-[18px] bg-[#2448E8] px-4 pt-10 pb-5 text-white sm:mt-7 sm:rounded-[20px] sm:px-5 sm:pb-6">
                <div className="absolute top-0 left-4 flex items-center gap-1.5 rounded-b-xl bg-white px-3 py-1.5 text-[10.5px] font-bold text-[#141A29] shadow-sm sm:left-5 sm:px-3.5 sm:text-[11px]">
                  <Trophy className="h-3 w-3 text-[#2448E8] sm:h-3.5 sm:w-3.5" />
                  <span>Top-Rated</span>
                </div>

                <div className="absolute top-2.5 right-3.5 flex flex-col items-end sm:top-3 sm:right-4">
                  <div className="flex items-center gap-0.5 text-white">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-2.5 w-2.5 fill-white text-white sm:h-3 sm:w-3"
                      />
                    ))}
                  </div>
                  <span className="mt-0.5 text-[9.5px] font-semibold text-white/80 sm:text-[10px]">
                    5.0
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
                    alt="William L., SaaS Founder"
                    loading="lazy"
                    className="h-6 w-6 shrink-0 rounded-full border border-white/60 object-cover"
                  />
                  <span className="truncate text-[11px] font-semibold text-white/95 sm:text-[11.5px]">
                    William L., SaaS Founder
                  </span>
                </div>

                <p className="mt-2 text-[11.5px] leading-[1.5] text-white/90 sm:mt-2.5 sm:text-[12px] sm:leading-[1.55]">
                  &ldquo;It&rsquo;s not just a marketing agency &ndash;
                  it&rsquo;s like having a dedicated paid ads, social, and email
                  lead engine in my pocket.&rdquo;
                </p>

                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-2 w-24 -translate-x-1/2 rounded-t-lg bg-white sm:h-2.5 sm:w-28"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* COLUMN 2: CTA Trigger + Active Lead Pipeline Card */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="flex flex-col justify-between gap-4 sm:gap-5 md:col-span-1 lg:col-span-3"
            >
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-[20px] border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 lg:justify-start lg:gap-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:pt-1 lg:backdrop-blur-none lg:hover:translate-x-1 lg:hover:bg-transparent"
              >
                <div className="flex items-center gap-3.5 lg:gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-white text-[#2448E8] shadow-[0_12px_28px_rgba(11,26,97,0.22)] transition group-hover:scale-105 sm:h-13 sm:w-13 sm:rounded-[16px]">
                    <ArrowDownToLine className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[19px] font-semibold tracking-[-0.025em] text-white sm:text-[22px] lg:text-[24px]">
                    Get Free Audit
                  </span>
                </div>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white lg:hidden">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>

              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-5 text-[#121826] shadow-[0_20px_50px_rgba(11,26,97,0.22)] sm:rounded-[26px] sm:p-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2448E8] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm sm:px-4 sm:py-2 sm:text-[11.5px]">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white/20">
                      <Sparkles className="h-2.5 w-2.5" />
                    </span>
                    <span>Leads in Click Funnel</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between sm:mt-5">
                    <span className="text-[11.5px] font-medium text-[#8C95A6] sm:text-[12px]">
                      Total Qualified Pipeline
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EEF2FF] text-[#2448E8] sm:h-9 sm:w-9">
                      <FolderKanban className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-1 font-display text-[26px] leading-tight font-bold tracking-[-0.04em] text-[#141A29] sm:text-[32px]">
                    $84,200.00
                  </div>

                  <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-[#ECEFF5] sm:mt-4">
                    <div className="h-full w-[66%] rounded-full bg-[#2448E8]" />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-2 pt-1">
                  <div>
                    <span className="inline-block rounded-md bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-bold text-[#15803D]">
                      +24.6%
                    </span>
                    <p className="mt-1.5 text-[10px] font-medium text-[#8C95A6]">
                      Qualified leads last 30 days
                    </p>
                  </div>

                  <div className="space-y-1 text-right text-[10px] font-medium text-[#64748B]">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="h-2 w-2 shrink-0 rounded-[2px] bg-[#2448E8]" />
                      <span>Paid &amp; Social</span>
                    </div>
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="h-2 w-2 shrink-0 rounded-[2px] bg-[#CBD5E1]" />
                      <span>Email Flows</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* COLUMN 3: Trust Bar + Multi-Channel Lead Analysis Chart */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58, ease: EASE }}
              className="flex flex-col justify-between gap-4 md:col-span-2 lg:col-span-5"
            >
              <div className="relative flex items-center justify-between gap-3 rounded-[20px] bg-white px-4 py-3.5 text-[#141A29] shadow-[0_16px_40px_rgba(11,26,97,0.18)] sm:rounded-[22px] sm:px-6 sm:py-4">
                <p className="text-[13px] leading-snug font-medium text-[#475569] sm:text-[15px]">
                  Trusted by{" "}
                  <strong className="font-bold text-[#141A29]">
                    50,000+ leads
                  </strong>{" "}
                  generated worldwide
                </p>
                <a
                  href="#case-studies"
                  aria-label="View lead generation case studies"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F2F5FA] text-[#2448E8] transition hover:bg-[#2448E8] hover:text-white sm:h-9 sm:w-9"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-white p-4 text-[#141A29] shadow-[0_20px_50px_rgba(11,26,97,0.22)] sm:rounded-[26px] sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[15.5px] font-bold tracking-[-0.02em] text-[#141A29] sm:text-[17px]">
                    Lead Analysis
                  </h2>
                  <span className="rounded-lg bg-[#9AE6B4] px-2.5 py-1 text-[10px] font-bold text-[#14532D] sm:px-3 sm:py-1.5 sm:text-[10.5px]">
                    Active Campaigns
                  </span>
                </div>

                <div className="relative mt-4 h-[155px] w-full sm:mt-5 sm:h-[185px]">
                  <svg
                    viewBox="0 0 460 180"
                    preserveAspectRatio="none"
                    className="h-full w-full overflow-hidden"
                  >
                    <defs>
                      <linearGradient
                        id="leadWaveFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#4F70F5"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#4F70F5"
                          stopOpacity="0.06"
                        />
                      </linearGradient>
                    </defs>

                    {[
                      { label: "100", y: 20 },
                      { label: "80", y: 50 },
                      { label: "60", y: 80 },
                      { label: "40", y: 110 },
                      { label: "20", y: 140 },
                      { label: "0", y: 170 },
                    ].map((row) => (
                      <g key={row.label}>
                        <text
                          x="2"
                          y={row.y + 4}
                          fill="#94A3B8"
                          fontSize="11"
                          fontWeight="500"
                        >
                          {row.label}
                        </text>
                        <line
                          x1="32"
                          y1={row.y}
                          x2="452"
                          y2={row.y}
                          stroke="#E2E8F0"
                          strokeWidth="1"
                          strokeDasharray={row.label === "0" ? undefined : "3 3"}
                        />
                      </g>
                    ))}

                    <path
                      d="M 42 170 L 42 115 C 62 115, 72 162, 95 162 C 118 162, 128 80, 152 80 C 176 80, 192 165, 222 165 C 252 165, 265 28, 290 28 C 315 28, 326 155, 350 155 C 374 155, 382 28, 404 28 C 422 28, 428 118, 436 118 C 444 118, 446 50, 450 50 L 450 170 Z"
                      fill="url(#leadWaveFill)"
                    />

                    <path
                      d="M 42 115 C 62 115, 72 162, 95 162 C 118 162, 128 80, 152 80 C 176 80, 192 165, 222 165 C 252 165, 265 28, 290 28 C 315 28, 326 155, 350 155 C 374 155, 382 28, 404 28 C 422 28, 428 118, 436 118 C 444 118, 446 50, 450 50"
                      fill="none"
                      stroke="#2448E8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <line
                      x1="42"
                      y1="115"
                      x2="42"
                      y2="170"
                      stroke="#2448E8"
                      strokeWidth="1.2"
                      strokeOpacity="0.5"
                    />
                    <line
                      x1="450"
                      y1="50"
                      x2="450"
                      y2="170"
                      stroke="#2448E8"
                      strokeWidth="1.2"
                      strokeOpacity="0.5"
                    />

                    <circle
                      cx="152"
                      cy="80"
                      r="5"
                      fill="#2448E8"
                      fillOpacity="0.2"
                    />
                    <circle cx="152" cy="80" r="2.5" fill="#2448E8" />

                    <g transform="translate(112, 32)">
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="32"
                        rx="10"
                        fill="#2448E8"
                      />
                      <polygon
                        points="35,32 45,32 40,39"
                        fill="#2448E8"
                      />
                      <text
                        x="40"
                        y="20"
                        textAnchor="middle"
                        fill="white"
                        fontSize="11.5"
                        fontWeight="700"
                      >
                        +42.8%
                      </text>
                    </g>

                    <circle
                      cx="290"
                      cy="28"
                      r="6"
                      fill="#2448E8"
                      fillOpacity="0.2"
                    />
                    <circle cx="290" cy="28" r="2.5" fill="#2448E8" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Center Stepped Silhouette Tab */}
        <div className="mx-auto hidden h-7 w-[54%] rounded-b-[28px] border-x border-b border-white/15 bg-[#1D3FD6] shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:block" />
      </div>
    </section>
  );
}