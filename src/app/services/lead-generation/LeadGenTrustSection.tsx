"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  Globe,
  Plus,
  TrendingUp,
  UserCheck,
  Wallet,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LeadGenTrustSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      aria-labelledby="trust-section-title"
      className="relative w-full bg-transparent px-3 py-16 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* TOP HEADER ROW */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Badge, Heading, Description */}
          <div className="lg:col-span-8">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-[#2448E8] px-4 py-2 text-[12px] font-semibold tracking-[-0.01em] text-white shadow-[0_8px_24px_rgba(36,72,232,0.4)]"
            >
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>Why Choose Leads in Click</span>
            </motion.div>

            <motion.h2
              id="trust-section-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mt-5 font-display text-[clamp(2rem,5vw,3.85rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-white"
            >
              Why High-Growth Brands
              <br />
              Trust Leads in Click
            </motion.h2>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="mt-4 max-w-[540px] text-[14px] leading-[1.65] text-white/70 sm:text-[15.5px]"
            >
              Built with precision audience targeting and engineered for maximum
              conversion, we empower B2B and B2C businesses to scale via social
              media, paid ads, and automated email funnels.
            </motion.p>
          </div>

          {/* Right Column: 93.84% Big Stat */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="flex flex-col items-start lg:col-span-4 lg:items-end lg:pb-3"
          >
            <div className="font-display text-[clamp(3.25rem,6.5vw,5.25rem)] leading-none font-bold tracking-[-0.04em] text-[#3B63FF] drop-shadow-[0_12px_35px_rgba(36,72,232,0.35)]">
              93.84%
            </div>
            <p className="mt-2 text-[13.5px] font-medium text-white/60 sm:text-[14.5px]">
              Qualified Lead Delivery Rate
            </p>
          </motion.div>
        </div>

        {/* BOTTOM BENTO GRID (3 Columns) */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* COLUMN 1: Active Clients + Ticket Pipeline Bar + Unsplash Image with Donut Overlay */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className="flex flex-col justify-between overflow-hidden rounded-[26px] bg-[#F4F6FA] text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:col-span-2 lg:col-span-5"
          >
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#141A29] sm:text-[18px]">
                  Active Clients
                </h3>
                <div className="text-right">
                  <p className="text-[13px] font-bold text-[#141A29] sm:text-[14px]">
                    12,300+ leads/mo
                  </p>
                  <p className="text-[10.5px] font-medium text-[#8C95A6]">
                    Consistent multi-channel flow
                  </p>
                </div>
              </div>

              {/* Ticket-Notched White Pipeline Banner */}
              <div className="relative mt-6 flex items-center justify-between gap-3 overflow-hidden rounded-[20px] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(20,26,41,0.06)] sm:px-6 sm:py-5">
                <span
                  className="pointer-events-none absolute top-1/2 -left-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute top-1/2 -right-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[#F4F6FA]"
                  aria-hidden="true"
                />

                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#2448E8] text-white shadow-[0_8px_18px_rgba(36,72,232,0.3)] sm:h-12 sm:w-12">
                    <Wallet className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="block truncate text-[11px] font-medium text-[#8C95A6] sm:text-[12px]">
                      Total Client Pipeline Generated
                    </span>
                    <strong className="mt-0.5 block truncate font-display text-[18px] font-bold tracking-[-0.03em] text-[#141A29] sm:text-[22px]">
                      $34,240,000.90
                    </strong>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#F4F6FA] text-[#64748B]">
                    <ArrowUp className="h-3 w-3" />
                  </span>
                  <span className="rounded-md bg-[#BBF7D0] px-2 py-0.5 text-[10px] font-bold text-[#15803D]">
                    +32.4%
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Half: Unsplash Photo + Floating Donut Chart Card */}
            <div className="relative h-[230px] w-full overflow-hidden rounded-t-[24px] sm:h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1000&q=85"
                alt="Marketer analyzing multi-channel lead generation performance on mobile and laptop"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 w-[155px] rounded-[20px] border border-white/80 bg-white/95 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:w-[170px] sm:p-4">
                <p className="text-center text-[10px] font-bold tracking-[-0.01em] text-[#141A29] sm:text-[11px]">
                  Lead Attribution
                </p>

                <div className="relative mx-auto mt-2.5 grid h-[76px] w-[76px] place-items-center sm:h-[84px] sm:w-[84px]">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full -rotate-90"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="10"
                      strokeDasharray="238.76"
                      strokeDashoffset="40"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#2448E8"
                      strokeWidth="10"
                      strokeDasharray="238.76"
                      strokeDashoffset="105"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-display text-[15px] leading-none font-bold text-[#141A29]">
                      70%
                    </span>
                    <span className="mt-0.5 text-[7.5px] font-semibold text-[#64748B]">
                      Conversion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Dedicated Growth Pod Card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="flex flex-col justify-between rounded-[26px] bg-[#F4F6FA] p-6 text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-7 md:col-span-1 lg:col-span-3"
          >
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-[#CBD5E1] bg-white text-[#141A29] shadow-xs">
                <Globe className="h-5 w-5" strokeWidth={1.75} />
              </div>

              <h3 className="mt-6 text-[19px] font-bold tracking-[-0.025em] text-[#141A29] sm:text-[20px]">
                Dedicated Growth Pod
              </h3>

              <p className="mt-3 text-[13px] leading-[1.65] text-[#64748B] sm:text-[13.5px]">
                Whether scaling Meta &amp; LinkedIn ads, cold email outreach, or
                landing pages, our growth specialists optimize your funnel daily.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-[14px] bg-[#2448E8] px-5 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_10px_25px_rgba(36,72,232,0.3)] transition hover:bg-[#1D3FD6]"
              >
                Talk to an Expert
              </a>

              <ul className="mt-6 space-y-2.5 text-[12px] font-medium text-[#475569] sm:text-[12.5px]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#141A29]" />
                  <span>24/7 Live Campaign Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#141A29]" />
                  <span>Paid Ads, Social &amp; Email Specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#141A29]" />
                  <span>Priority Slack &amp; Weekly ROI Audits</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* COLUMN 3: 2 Stacked Cards (Omnichannel Reach + Dual Wave Cards) */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
            className="flex flex-col justify-between gap-5 sm:gap-6 md:col-span-1 lg:col-span-4"
          >
            <div className="rounded-[26px] bg-[#F4F6FA] p-6 text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.025em] text-[#141A29] sm:text-[20px]">
                  Faster Lead Flow,
                  <br />
                  Omnichannel Reach
                </h3>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#141A29] shadow-xs">
                  <UserCheck className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </div>

              <p className="mt-3.5 text-[13px] leading-[1.65] text-[#64748B] sm:text-[13.5px]">
                Capture and nurture decision-makers across LinkedIn, Meta,
                Google, and automated email sequences with industry-low cost per
                lead.
              </p>
            </div>

            <div className="relative flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-[26px] bg-[#F4F6FA] p-5 text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:min-h-[265px] sm:p-6">
              {/* Back Mini Chart Card */}
              <div className="absolute top-5 left-4 w-[76%] rounded-[20px] border border-slate-100 bg-white p-4 opacity-90 shadow-[0_12px_30px_rgba(20,26,41,0.06)] sm:left-6">
                <svg
                  viewBox="0 0 220 75"
                  className="h-[58px] w-full overflow-visible"
                >
                  <path
                    d="M 6 62 C 18 20, 28 12, 40 38 C 52 64, 72 60, 92 48 C 112 36, 122 10, 138 14 C 154 18, 162 56, 174 52 C 186 48, 196 14, 212 42"
                    fill="none"
                    stroke="#2448E8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="26"
                    cy="20"
                    r="5"
                    fill="#2448E8"
                    fillOpacity="0.2"
                  />
                  <circle cx="26" cy="20" r="2.5" fill="#2448E8" />
                  <circle
                    cx="158"
                    cy="42"
                    r="5"
                    fill="#2448E8"
                    fillOpacity="0.2"
                  />
                  <circle cx="158" cy="42" r="2.5" fill="#2448E8" />
                </svg>
                <div className="mt-1">
                  <span className="font-display text-[17px] font-bold tracking-[-0.03em] text-[#64748B]">
                    $180,000
                  </span>
                  <span className="block text-[9px] font-medium text-[#94A3B8]">
                    Email &amp; Social Pipeline
                  </span>
                </div>
              </div>

              {/* Front Mini Chart Card */}
              <div className="relative z-10 mt-16 ml-auto w-[82%] rounded-[20px] border border-slate-100 bg-white p-4 shadow-[0_20px_45px_rgba(20,26,41,0.12)] sm:w-[78%]">
                <svg
                  viewBox="0 0 220 75"
                  className="h-[62px] w-full overflow-visible"
                >
                  <path
                    d="M 6 62 C 18 18, 28 10, 42 40 C 56 70, 78 62, 98 46 C 118 30, 128 8, 144 14 C 160 20, 168 58, 180 50 C 192 42, 200 12, 214 44"
                    fill="none"
                    stroke="#2448E8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="78"
                    cy="55"
                    r="6"
                    fill="#2448E8"
                    fillOpacity="0.22"
                  />
                  <circle cx="78" cy="55" r="2.5" fill="#2448E8" />
                  <circle
                    cx="138"
                    cy="11"
                    r="6"
                    fill="#2448E8"
                    fillOpacity="0.22"
                  />
                  <circle cx="138" cy="11" r="2.5" fill="#2448E8" />
                  <circle
                    cx="198"
                    cy="24"
                    r="6"
                    fill="#2448E8"
                    fillOpacity="0.22"
                  />
                  <circle cx="198" cy="24" r="2.5" fill="#2448E8" />
                </svg>

                <div className="mt-1.5 flex items-end justify-between gap-2">
                  <div>
                    <span className="font-display text-[20px] leading-none font-bold tracking-[-0.03em] text-[#2448E8] sm:text-[22px]">
                      $980,000
                    </span>
                    <span className="mt-1 block text-[9.5px] font-medium text-[#8C95A6]">
                      Total Revenue Attributed
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#141A29]">
                    <TrendingUp className="h-3 w-3 text-[#2448E8]" />
                    +45.4%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}