import type { Metadata } from "next";
import Beams from "@/components/ui/Beams";
import MetaAdsHero from "./MetaAdsHero";
import MetaAdsTrustSection from "./MetaAdsTrustSection";
import MetaAdsProcessSection from "./MetaAdsProcessSection";
import MetaAdsClosingSection from "./MetaAdsClosingSection";

const SITE_URL = "https://leadsinclick.com";
const PAGE_URL = `${SITE_URL}/facebook-instagram-ads`;

export const metadata: Metadata = {
  title:
    "Facebook & Instagram Ads Agency | High-ROAS Meta Campaigns | Leads in Click",
  description:
    "Scale your leads and e-commerce sales with high-converting Facebook & Instagram Ads. Thumb-stopping Reels creatives, Meta CAPI tracking, and daily ROAS optimization.",
  keywords: [
    "Facebook Ads agency",
    "Instagram Ads agency",
    "Meta Ads management",
    "Instagram Reels ads",
    "Facebook lead generation ads",
    "Meta Conversions API setup",
    "paid social advertising agency",
    "Leads in Click Meta ads",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Facebook & Instagram Ads That Print Measurable ROAS | Leads in Click",
    description:
      "Done-for-you Facebook Feed, Instagram Reels, Stories, and Instant Lead Form campaigns engineered for maximum return on ad spend.",
    url: PAGE_URL,
    siteName: "Leads in Click",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook & Instagram Ads Agency | Leads in Click",
    description:
      "Turn passive scrolling on Facebook & Instagram into qualified leads and daily sales with data-backed Meta ad campaigns.",
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
      name: "Facebook & Instagram Advertising Management",
      serviceType: "Paid Social Media Advertising",
      provider: {
        "@type": "MarketingAgency",
        name: "Leads in Click",
        url: SITE_URL,
      },
      areaServed: "Global",
      description:
        "Full-funnel Facebook and Instagram advertising management including UGC & Reels creative production, Meta Pixel & CAPI tracking, and daily ROAS scaling.",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Should we advertise on Facebook, Instagram, or both?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. By leveraging Meta's unified placements with platform-native creatives—such as 9:16 vertical Reels for Instagram and high-intent Instant Lead Forms or Carousel feeds for Facebook—our clients typically achieve a 34% lower cost per acquisition.",
          },
        },
        {
          "@type": "Question",
          name: "Do you produce the video and image ad creatives for our campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Creative is the #1 targeting lever on Meta today. Our team scripts, edits, and designs scroll-stopping Instagram Reels, Stories, and Facebook static/carousel ads tailored to your brand.",
          },
        },
      ],
    },
  ],
};

export default function FacebookInstagramAdsPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,43,107,0.14),transparent_55%),linear-gradient(180deg,rgba(11,11,11,0.25)_0%,rgba(11,11,11,0.68)_100%)]" />
        </div>

        {/* FOREGROUND PAGE SECTIONS */}
        <div className="relative z-10">
          {/* SECTION 1: HERO & LIVE META ADS ANALYTICS BENTO */}
          <MetaAdsHero />

          {/* SECTION 2: WHY CHOOSE US & SOCIAL PROOF BENTO */}
          <MetaAdsTrustSection />

          {/* SECTION 3: 4-STEP FACEBOOK & INSTAGRAM ADS EXECUTION PROCESS */}
          <MetaAdsProcessSection />

          {/* SECTION 4: FINAL CONVERSION CTA & INTERACTIVE FAQ */}
          <MetaAdsClosingSection />
        </div>
      </main>
    </>
  );
}