import type { Metadata } from "next";
import Beams from "@/components/ui/Beams";
import SocialMediaHero from "./SocialMediaHero";
import SocialMediaTrustSection from "./SocialMediaTrustSection";
import SocialMediaProcessSection from "./SocialMediaProcessSection";
import SocialMediaClosingSection from "./SocialMediaClosingSection";

const SITE_URL = "https://leadsinclick.com";
const PAGE_URL = `${SITE_URL}/services/social-media-management`;

export const metadata: Metadata = {
  title:
    "Social Media Management Agency | Instagram, Facebook, LinkedIn & More | Leads in Click",
  description:
    "Full-service social media management across Instagram, Facebook, LinkedIn, YouTube Shorts, and X. Done-for-you Reels, carousels, ghostwriting, and daily community management.",
  keywords: [
    "social media management agency",
    "Instagram management agency",
    "LinkedIn content agency",
    "Facebook page management",
    "short-form video editing agency",
    "social media marketing services",
    "Leads in Click social media",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Omnichannel Social Media Management That Builds Authority & Pipeline | Leads in Click",
    description:
      "Done-for-you Instagram Reels, LinkedIn thought leadership, Facebook community building, and DM lead conversion.",
    url: PAGE_URL,
    siteName: "Leads in Click",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Agency | Leads in Click",
    description:
      "Turn passive followers on Instagram, Facebook, LinkedIn, and YouTube into loyal brand advocates and inbound leads.",
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
      name: "Omnichannel Social Media Management",
      serviceType: "Social Media Marketing & Management",
      provider: {
        "@type": "MarketingAgency",
        name: "Leads in Click",
        url: SITE_URL,
      },
      areaServed: "Global",
      description:
        "End-to-end social media management across Instagram, Facebook, LinkedIn, YouTube, and X including content strategy, Reels production, carousel design, and daily community management.",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which social media platforms do you manage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We manage Instagram, Facebook, LinkedIn, YouTube Shorts, TikTok, and X (Twitter)—tailoring content formats natively to each platform's algorithm.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle video editing, graphic design, and copywriting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our dedicated creative pod scripts, edits, designs, captions, and schedules all of your Reels, carousels, Stories, and LinkedIn posts inside a shared approval calendar.",
          },
        },
      ],
    },
  ],
};

export default function SocialMediaManagementPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,40,217,0.16),transparent_55%),linear-gradient(180deg,rgba(11,11,11,0.25)_0%,rgba(11,11,11,0.68)_100%)]" />
        </div>

        {/* FOREGROUND PAGE SECTIONS */}
        <div className="relative z-10">
          {/* SECTION 1: HERO & OMNICHANNEL ANALYTICS BENTO */}
          <SocialMediaHero />

          {/* SECTION 2: WHY CHOOSE US & SOCIAL PROOF BENTO */}
          <SocialMediaTrustSection />

          {/* SECTION 3: 4-STEP CONTENT & COMMUNITY EXECUTION PROCESS */}
          <SocialMediaProcessSection />

          {/* SECTION 4: FINAL CONVERSION CTA & INTERACTIVE FAQ */}
          <SocialMediaClosingSection />
        </div>
      </main>
    </>
  );
}