"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Database,
  Check,
  ArrowUpRight,
  Sliders,
  BarChart3,
  Zap,
  Award,
  Target,
  FileSpreadsheet,
  Magnet,
} from "lucide-react";

interface GoogleServiceCardData {
  number: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  metricValue: string;
  metricLabel: string;
  icon: React.ElementType;
  bgGradient: string;
  textColor: string;
  mutedTextColor: string;
  badgeBg: string;
  badgeText: string;
  checkBg: string;
  checkColor: string;
  spotlightColor: string;
  borderColor: string;
}

const GOOGLE_SERVICE_CARDS: GoogleServiceCardData[] = [
  {
    number: "01",
    badge: "BOTTOM-OF-FUNNEL INTENT",
    title: "High-Intent Google Search Campaigns",
    description:
      "We intercept prospects actively searching for your exact product or service. Using tightly themed ad groups, Exact & Phrase match precision, and dynamic RSA testing, we dominate Page #1 while keeping CPCs low.",
    deliverables: [
      "Buyer-intent keyword architecture (Exact & Phrase match)",
      "High-CTR Responsive Search Ads (RSAs) & Ad Extensions",
      "Aggressive daily negative keyword pruning to block junk clicks",
      "9+/10 Quality Score optimization for lower cost-per-click",
    ],
    metricValue: "9.4/10",
    metricLabel: "Average Quality Score",
    icon: Search,
    // Theme 1: Vibrant Lime Green
    bgGradient:
      "radial-gradient(120% 120% at 15% 10%, #B8F69E 0%, #8FE86B 52%, #6CD04E 100%)",
    textColor: "#0E2414",
    mutedTextColor: "rgba(14, 36, 20, 0.78)",
    badgeBg: "rgba(14, 36, 20, 0.10)",
    badgeText: "#0E2414",
    checkBg: "#0E2414",
    checkColor: "#B8F69E",
    spotlightColor: "rgba(255, 255, 255, 0.45)",
    borderColor: "rgba(255, 255, 255, 0.45)",
  },
  {
    number: "02",
    badge: "AI MULTI-CHANNEL SCALE",
    title: "Performance Max (PMax) Architecture",
    description:
      "Stop letting default PMax waste budget on cheap display placements or cannibalize your brand terms. We segment asset groups by margin, apply brand exclusions, and feed Google's AI clean first-party buyer signals.",
    deliverables: [
      "Segmented Asset Groups with custom audience signals",
      "Brand keyword exclusions to protect pure incremental ROAS",
      "Script-based placement exclusions to block mobile app spam",
      "Custom video, image & headline creative matrices",
    ],
    metricValue: "7.2×",
    metricLabel: "Avg. PMax Campaign ROAS",
    icon: Sparkles,
    // Theme 2: Electric Cyan / Teal
    bgGradient:
      "radial-gradient(120% 120% at 85% 15%, #64E4E9 0%, #1DC0CC 55%, #0E99A6 100%)",
    textColor: "#05282D",
    mutedTextColor: "rgba(5, 40, 45, 0.78)",
    badgeBg: "rgba(5, 40, 45, 0.10)",
    badgeText: "#05282D",
    checkBg: "#05282D",
    checkColor: "#64E4E9",
    spotlightColor: "rgba(255, 255, 255, 0.42)",
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  {
    number: "03",
    badge: "E-COMMERCE REVENUE ENGINE",
    title: "Google Shopping & Merchant Center Mastery",
    description:
      "Your product feed is your #1 ranking factor in Google Shopping. We optimize titles, GTINs, custom labels, and profit-tier bidding so your highest-margin SKUs own the top visual carousel.",
    deliverables: [
      "Merchant Center feed title, attribute & schema enrichment",
      "Custom Labels by profit margin, velocity & seasonality",
      "Standard Shopping + PMax hybrid tiered structures",
      "Automated price competitiveness & stock-out rules",
    ],
    metricValue: "+215%",
    metricLabel: "Shopping Revenue Growth",
    icon: ShoppingBag,
    // Theme 3: Vibrant Rose / Coral
    bgGradient:
      "radial-gradient(120% 120% at 15% 15%, #FF99B6 0%, #F26B91 55%, #DC5078 100%)",
    textColor: "#2B0D18",
    mutedTextColor: "rgba(43, 13, 24, 0.78)",
    badgeBg: "rgba(43, 13, 24, 0.10)",
    badgeText: "#2B0D18",
    checkBg: "#2B0D18",
    checkColor: "#FF99B6",
    spotlightColor: "rgba(255, 255, 255, 0.42)",
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  {
    number: "04",
    badge: "VIDEO DEMAND CAPTURE",
    title: "YouTube In-Stream & Shorts Action Ads",
    description:
      "Target viewers based on the exact keywords they just searched on Google. We script and deploy direct-response YouTube In-Stream and Shorts campaigns that turn video views into booked calls and checkouts.",
    deliverables: [
      "Custom Intent audiences built from Google Search terms",
      "5-second hook scripting for Skippable In-Stream & Shorts",
      "Demand Gen & YouTube Remarketing sequences",
      "View-through & assisted conversion lift measurement",
    ],
    metricValue: "-39%",
    metricLabel: "Lower Video Cost Per Lead",
    icon: Magnet,
    // Theme 4: Deep Royal Purple
    bgGradient:
      "radial-gradient(120% 120% at 85% 10%, #9884D6 0%, #765FBA 52%, #59429B 100%)",
    textColor: "#FFFFFF",
    mutedTextColor: "rgba(255, 255, 255, 0.84)",
    badgeBg: "rgba(255, 255, 255, 0.14)",
    badgeText: "#BAF235",
    checkBg: "#BAF235",
    checkColor: "#1A1033",
    spotlightColor: "rgba(186, 242, 53, 0.25)",
    borderColor: "rgba(255, 255, 255, 0.28)",
  },
  {
    number: "05",
    badge: "BULLETPROOF ATTRIBUTION",
    title: "GTM, GA4 & Offline Conversion Sync",
    description:
      "Smart Bidding is only as smart as the conversion data you feed it. We configure Server-Side GTM, Enhanced Conversions, and offline CRM GCLID imports so Google optimizes for closed revenue—not spam forms.",
    deliverables: [
      "Google Tag Manager (GTM) & Enhanced Conversions setup",
      "Offline GCLID conversion imports from HubSpot/Salesforce/GoHighLevel",
      "CallRail / dynamic phone number call-duration tracking",
      "Server-side tagging & Consent Mode v2 compliance",
    ],
    metricValue: "99.4%",
    metricLabel: "Conversion Signal Accuracy",
    icon: Database,
    // Theme 5: Rich Cobalt Indigo
    bgGradient:
      "radial-gradient(120% 120% at 15% 15%, #8095FA 0%, #556EEB 55%, #3B52CA 100%)",
    textColor: "#FFFFFF",
    mutedTextColor: "rgba(255, 255, 255, 0.84)",
    badgeBg: "rgba(255, 255, 255, 0.14)",
    badgeText: "#BAF235",
    checkBg: "#BAF235",
    checkColor: "#0F1A4D",
    spotlightColor: "rgba(186, 242, 53, 0.25)",
    borderColor: "rgba(255, 255, 255, 0.28)",
  },
  {
    number: "06",
    badge: "LOCAL CALL DOMINANCE",
    title: "Local Service Ads (LSA) & Call-Only Funnels",
    description:
      "For home services, clinics, legal, and local businesses, phone calls are gold. We manage Google Guaranteed LSAs, Call-Only ads, and bespoke PPC landing pages that convert local searchers at 25%+.",
    deliverables: [
      "Google Guaranteed Local Service Ads (LSA) verification & bidding",
      "Dispute management for invalid or out-of-area LSA leads",
      "High-converting PPC landing pages with dynamic keyword insertion",
      "Geo-fenced zip-code bid modifiers & ad scheduling",
    ],
    metricValue: "28.4%",
    metricLabel: "Search-to-Call Conversion Rate",
    icon: ShieldCheck,
    // Theme 6: Warm Amber Gold
    bgGradient:
      "radial-gradient(120% 120% at 85% 15%, #FCD875 0%, #F3B941 55%, #DF9B1E 100%)",
    textColor: "#281905",
    mutedTextColor: "rgba(40, 25, 5, 0.78)",
    badgeBg: "rgba(40, 25, 5, 0.10)",
    badgeText: "#281905",
    checkBg: "#281905",
    checkColor: "#FCD875",
    spotlightColor: "rgba(255, 255, 255, 0.45)",
    borderColor: "rgba(255, 255, 255, 0.45)",
  },
];

const INCLUDED_PERKS = [
  { icon: Sliders, label: "Daily Search Term & Negative Pruning" },
  { icon: BarChart3, label: "Live Looker Studio ROAS Dashboard" },
  { icon: Zap, label: "GTM Enhanced Conversions Included" },
  { icon: Award, label: "100% Ad Account Ownership" },
  { icon: Target, label: "Competitor Auction Insights Tracking" },
  { icon: FileSpreadsheet, label: "Bi-Weekly Bid & CPA Scaling Sprints" },
];

function ServiceCapabilityCard({ card }: { card: GoogleServiceCardData }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    cardRef.current.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  const Icon = card.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        background: card.bgGradient,
        color: card.textColor,
        borderColor: card.borderColor,
      }}
      className="group relative rounded-[28px] p-7 sm:p-8 border shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Interactive Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${card.spotlightColor}, transparent 45%)`,
        }}
      />

      {/* Subtle Dot Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(${card.textColor} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Oversized Watermark Icon */}
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-8 w-44 h-44 opacity-[0.09] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
        style={{ color: card.textColor }}
      />

      {/* Top Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-6">
          <span
            style={{
              backgroundColor: card.badgeBg,
              color: card.badgeText,
            }}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[0.16em]"
          >
            {card.badge}
          </span>
          <span
            className="font-mono text-sm font-bold opacity-60"
            style={{ color: card.textColor }}
          >
            /{card.number}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-[28px] font-bold tracking-tight leading-tight mb-3.5">
          {card.title}
        </h3>

        <p
          style={{ color: card.mutedTextColor }}
          className="text-sm sm:text-[15px] leading-relaxed font-medium mb-6"
        >
          {card.description}
        </p>

        {/* Deliverables Checklist */}
        <ul className="space-y-2.5 mb-7">
          {card.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold">
              <span
                style={{
                  backgroundColor: card.checkBg,
                  color: card.checkColor,
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Metric & CTA */}
      <div
        className="relative z-10 pt-5 border-t flex items-center justify-between gap-4"
        style={{ borderColor: `${card.textColor}22` }}
      >
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {card.metricValue}
          </div>
          <div
            style={{ color: card.mutedTextColor }}
            className="text-[11px] font-bold uppercase tracking-wider"
          >
            {card.metricLabel}
          </div>
        </div>

        <Link
          href="#contact"
          style={{
            backgroundColor: card.checkBg,
            color: card.checkColor,
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform"
        >
          <span>Audit My Google Ads</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function GoogleAdsServicesCards() {
  return (
    <section className="relative z-10 pt-10 pb-24 px-4 sm:px-6 lg:px-8 bg-[#06070A]">
      {/* Evalin-Style Curved Top Container */}
      <div className="max-w-[1380px] mx-auto rounded-t-[44px] sm:rounded-t-[64px] rounded-b-[40px] bg-gradient-to-b from-[#0E121B] via-[#090C12] to-[#07090E] border border-white/[0.08] px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-16 shadow-[0_-20px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Top Center Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[260px] rounded-full bg-[#BAF235]/10 blur-[120px]"
        />

        {/* Floating Approach Metric Callouts */}
        <div className="hidden xl:flex justify-between items-center max-w-5xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/75">
            <span className="w-2 h-2 rounded-full bg-[#BAF235] shadow-[0_0_8px_#BAF235]" />
            Zero Broad-Match Budget Bleed
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/75">
            <span className="w-2 h-2 rounded-full bg-[#BAF235] shadow-[0_0_8px_#BAF235]" />
            Offline GCLID-to-CRM Revenue Tracking
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#BAF235] mb-3">
            OUR APPROACH
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
            We Turn Search Intent Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BAF235] to-[#6EE7B7]">
              Predictable Profit.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed">
            Google rewards relevance and punishes lazy account structures. We
            combine granular keyword segmentation, aggressive negative keyword
            shields, and first-party conversion signals to dominate your auction.
          </p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_SERVICE_CARDS.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <ServiceCapabilityCard card={card} />
            </motion.div>
          ))}
        </div>

        {/* Included With Every Google Ads Retainer Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0B0E15] border border-white/[0.08]">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF235]">
              Standard With Every Google Ads Partnership
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INCLUDED_PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#BAF235]/10 border border-[#BAF235]/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#BAF235]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white/85">
                    {perk.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div
          id="contact"
          className="mt-12 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-[#131B12] via-[#0F151D] to-[#111827] border border-[#BAF235]/25 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#BAF235] mb-2">
              Free 40-Point Google Ads & Wasted-Spend Audit
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Want to see exactly how much budget your Google Ads are leaking?
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-white/60">
              We&apos;ll audit your search terms report, Quality Scores, PMax
              placement leaks, and GTM conversion tracking—and send you a custom
              video teardown in 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#BAF235] text-[#07090E] font-bold text-sm sm:text-base shadow-[0_0_35px_rgba(186,242,53,0.35)] hover:bg-[#c8ff47] transition-all w-full sm:w-auto"
            >
              <span>Claim My Free Google Ads Audit</span>
              <span className="w-7 h-7 rounded-full bg-[#07090E] text-[#BAF235] flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}