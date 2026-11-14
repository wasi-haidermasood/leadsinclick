import type { Metadata } from "next";
import Beams from "@/components/ui/Beams";
import GoogleAdsHero from "./GoogleAdsHero";
import GoogleAdsTrustSection from "./GoogleAdsTrustSection";
import GoogleAdsProcessSection from "./GoogleAdsProcessSection";
import GoogleAdsClosingSection from "./GoogleAdsClosingSection";

const SITE_URL = "https://leadsinclick.com";
const PAGE_URL = `${SITE_URL}/google-ads`;

export const metadata: Metadata = {
  title:
    "Google Ads Agency | High-ROI Search, PMax & YouTube Campaigns | Leads in Click",
  description:
    "Capture high-intent buyers at the exact moment they search. Expert Google Search, Performance Max, Shopping, and YouTube Ads management with GA4 & Enhanced Conversions.",
  keywords: [
    "Google Ads agency",
    "Google PPC management",
    "Google Search ads agency",
    "Performance Max campaigns",
    "Google Shopping ads",
    "YouTube ads agency",
    "Google Enhanced Conversions setup",
    "Leads in Click Google Ads",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Google Ads Management That Captures High-Intent Buyers | Leads in Click",
    description:
      "Done-for-you Google Search, Performance Max, Shopping, and YouTube ad campaigns engineered for lower CPA and maximum ROAS.",
    url: PAGE_URL,
    siteName: "Leads in Click",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agency | Leads in Click",
    description:
      "Turn high-intent Google searches into qualified leads and daily sales with data-driven PPC management.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Google Ads & PPC Management",
      serviceType: "Pay-Per-Click Advertising",
      provider: {
        "@type": "MarketingAgency",
        name: "Leads in Click",
        url: SITE_URL,
      },
      areaServed: "Global",
      description:
        "Full-funnel Google Ads management including High-Intent Search, Performance Max, Google Shopping, YouTube Ads, and Server-Side Enhanced Conversions tracking.",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Google Ads campaign types should our business run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We tailor your campaign mix to buyer intent—starting with exact and phrase-match Google Search Ads to capture bottom-of-funnel demand, paired with Performance Max, Shopping, and YouTube Remarketing to scale volume at a profitable ROAS.",
          },
        },
        {
          "@type": "Question",
          name: "How do you stop wasted ad spend on irrelevant clicks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We enforce strict match-type segmentation, pre-load 1,500+ industry negative keywords before launch, audit search term reports daily, and exclude low-quality mobile app placements.",
          },
        },
      ],
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen overflow-x-hidden bg-[#0B0B0B] text-white">
        {/* SINGLE FIXED BEAMS BACKGROUND FOR THE ENTIRE PAGE */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <Beams
            color="#605f5fff"
            beamWidth={140}
            rotation={30}
            speed={1}
            glow={0.6}
            waveLength={233}
            depth={1}
            sharpness={0.6}
            twist={0}
            fillLight={0.3}
            brightness={1.6}
            grain={0.35}
            variation={0}
            mouseInteraction
            mouseStrength={1}
            fade={0}
            opacity={1}
            intro
            lightMode={false}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,138,93,0.15),transparent_55%),linear-gradient(180deg,rgba(11,11,11,0.25)_0%,rgba(11,11,11,0.68)_100%)]" />
        </div>

        {/* FOREGROUND PAGE SECTIONS */}
        <div className="relative z-10">
          {/* SECTION 1: HERO & LIVE GOOGLE ADS ANALYTICS BENTO */}
          <GoogleAdsHero />

          {/* SECTION 2: WHY CHOOSE US & SOCIAL PROOF BENTO */}
          <GoogleAdsTrustSection />

          {/* SECTION 3: 4-STEP GOOGLE ADS EXECUTION PROCESS */}
          <GoogleAdsProcessSection />

          {/* SECTION 4: FINAL CONVERSION CTA & INTERACTIVE FAQ */}
          <GoogleAdsClosingSection />
        </div>
      </main>
    </>
  );
}