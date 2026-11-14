"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Store,
  Sliders,
  MapPin,
  Star,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    step: "01",
    title: "GMB Creation, Claiming & Verification",
    description:
      "We create or claim your official Google Business Profile, handle video/postcard verification, resolve duplicate listings or suspensions, and lock in compliant service-area or storefront settings.",
    icon: Store,
    badge: "Days 1–5",
    highlight: false,
  },
  {
    step: "02",
    title: "Deep Profile & Category Optimization",
    description:
      "We reverse-engineer top competitors to select high-converting primary & secondary categories, write SEO-optimized business descriptions, add services/products with pricing, and seed keyword-rich Q&As.",
    icon: Sliders,
    badge: "Days 6–12",
    highlight: true,
  },
  {
    step: "03",
    title: "300+ Citations, NAP Sync & Geo-Photos",
    description:
      "We synchronize your Name, Address & Phone (NAP) across 300+ authority directories (Yelp, Apple Maps, Bing, BBB, YellowPages) and upload EXIF geo-tagged storefront & team photography.",
    icon: MapPin,
    badge: "Days 13–25",
    highlight: false,
  },
  {
    step: "04",
    title: "Review Velocity, Weekly Posts & #1 Ranking",
    description:
      "We publish weekly keyword-targeted Google Updates/Offers, respond to every customer review with local SEO keywords, and track your #1–#3 Local Pack expansion across a 49-point Geo-Grid.",
    icon: Star,
    badge: "Ongoing #1 Dominance",
    highlight: false,
  },
];

export default function GmbProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-14 sm:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:mb-14 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#FB923C]" />
              <span className="text-xs font-semibold tracking-tight text-white/90">
                Our 4-Step GMB Ranking Framework
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              From Unclaimed Profile to
              <br />
              #1 in the Google Map Pack
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="max-w-md"
          >
            <p className="text-xs leading-relaxed text-zinc-400 sm:text-[15px]">
              Ranking in Google&apos;s Top 3 Local Pack isn&apos;t guesswork. We
              combine proximity signals, category relevance, citation authority,
              and review velocity into a repeatable local ranking machine.
            </p>
          </motion.div>
        </div>

        {/* 4-Column Step Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: EASE,
                }}
                className={`group relative flex flex-col justify-between rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 transition-all duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#D9531E] via-[#C2410C] to-[#7C2D12] text-white shadow-[0_25px_70px_-15px_rgba(217,83,30,0.45)] border border-white/20"
                    : "bg-[#F4F6FA] text-slate-900 shadow-sm hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Top Row: Step Number + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase ${
                        item.highlight ? "text-white/80" : "text-[#D9531E]"
                      }`}
                    >
                      Step {item.step}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        item.highlight
                          ? "bg-white/15 text-white backdrop-blur-sm"
                          : "bg-white text-slate-600 shadow-xs"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div
                    className={`mt-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                      item.highlight
                        ? "bg-white text-[#D9531E] shadow-md"
                        : "bg-white text-slate-900 border border-slate-200/80 shadow-xs"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`mt-5 text-base sm:text-lg font-bold leading-snug ${
                      item.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2.5 text-xs leading-relaxed sm:text-[13px] ${
                      item.highlight ? "text-white/85" : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Footer Link */}
                <div
                  className={`mt-6 flex items-center justify-between border-t pt-4 ${
                    item.highlight ? "border-white/15" : "border-slate-200/80"
                  }`}
                >
                  <span
                    className={`text-[11px] font-semibold ${
                      item.highlight ? "text-white/90" : "text-slate-700"
                    }`}
                  >
                    Leads in Click Local SEO
                  </span>
                  <Link
                    href="/contact"
                    aria-label={`Learn more about ${item.title}`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                      item.highlight
                        ? "bg-white text-[#D9531E] hover:scale-105"
                        : "bg-slate-900 text-white hover:bg-[#D9531E]"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}