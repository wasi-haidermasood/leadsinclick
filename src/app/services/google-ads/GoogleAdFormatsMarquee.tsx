"use client";

import React from "react";

interface GoogleCapabilityItem {
  name: string;
  category: string;
  accent: string;
  icon: React.ReactNode;
}

const GOOGLE_ADS_CAPABILITIES: GoogleCapabilityItem[] = [
  {
    name: "Google Search Ads",
    category: "High-Intent Exact & Phrase",
    accent: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#4285F4" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Performance Max (PMax)",
    category: "AI Multi-Channel Scaling",
    accent: "#BAF235",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#BAF235" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Google Shopping & Feeds",
    category: "Merchant Center ROAS",
    accent: "#34A853",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34A853" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    name: "YouTube Direct-Response",
    category: "In-Stream & Shorts Ads",
    accent: "#EA4335",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#EA4335" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <polygon points="10 9 15 12 10 15 10 9" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Local Service Ads (LSA)",
    category: "Google Guaranteed Calls",
    accent: "#FBBC05",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#FBBC05" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Enhanced Conversions",
    category: "First-Party GTM Tracking",
    accent: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Negative Keyword Sculpting",
    category: "Zero Wasted Ad Spend",
    accent: "#F43F5E",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F43F5E" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Offline Conversion Import",
    category: "GCLID-to-CRM Revenue Sync",
    accent: "#A78BFA",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#A78BFA" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    name: "Target ROAS & tCPA",
    category: "Algorithmic Bid Mastery",
    accent: "#34D399",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#34D399" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    name: "Competitor Conquesting",
    category: "Capture Rival Brand Traffic",
    accent: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#F59E0B" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    name: "Dynamic Remarketing",
    category: "Display & Demand Gen",
    accent: "#EC4899",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#EC4899" strokeWidth="2">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    name: "GA4 Multi-Touch Attribution",
    category: "Full-Funnel Clarity",
    accent: "#60A5FA",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#60A5FA" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function MarqueePill({ item }: { item: GoogleCapabilityItem }) {
  return (
    <div className="group flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#0D1017]/90 border border-white/[0.08] hover:border-[#BAF235]/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 shrink-0">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform"
        style={{ backgroundColor: `${item.accent}15` }}
      >
        {item.icon}
      </div>
      <div>
        <div className="text-sm font-bold text-white group-hover:text-[#BAF235] transition-colors">
          {item.name}
        </div>
        <div className="text-[11px] text-white/45 font-medium">
          {item.category}
        </div>
      </div>
    </div>
  );
}

export default function GoogleAdFormatsMarquee() {
  const row1 = [...GOOGLE_ADS_CAPABILITIES, ...GOOGLE_ADS_CAPABILITIES];
  const row2 = [
    ...GOOGLE_ADS_CAPABILITIES.slice().reverse(),
    ...GOOGLE_ADS_CAPABILITIES.slice().reverse(),
  ];

  return (
    <section className="relative z-10 py-14 overflow-hidden bg-[#06070A]">
      <style>{`
        @keyframes googleMarqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes googleMarqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-google-marquee-left {
          display: flex;
          width: max-content;
          animation: googleMarqueeLeft 44s linear infinite;
        }
        .animate-google-marquee-right {
          display: flex;
          width: max-content;
          animation: googleMarqueeRight 48s linear infinite;
        }
        .animate-google-marquee-left:hover,
        .animate-google-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-9">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#BAF235] mb-2">
          Full-Spectrum Google Ads Ecosystem
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Every High-Intent Placement & Signal,{" "}
          <span className="text-white/60">Engineered for Profit.</span>
        </h2>
      </div>

      {/* Edge Fade Masks */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#06070A] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#06070A] to-transparent z-20" />

        {/* Row 1 */}
        <div className="overflow-hidden py-2">
          <div className="animate-google-marquee-left gap-4 pr-4">
            {row1.map((item, idx) => (
              <MarqueePill key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden py-2 mt-2">
          <div className="animate-google-marquee-right gap-4 pr-4">
            {row2.map((item, idx) => (
              <MarqueePill key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}