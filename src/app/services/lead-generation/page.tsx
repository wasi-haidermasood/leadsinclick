import type { Metadata } from "next";
import Beams from "@/components/ui/Beams";
import LeadGenerationHero from "./leadgenerationhero";
import LeadGenTrustSection from "./LeadGenTrustSection";
import LeadGenProcessSection from "./LeadGenProcessSection";
import LeadGenClosingSection from "./LeadGenClosingSection";

// ✅ METADATA — Server Component
export const metadata: Metadata = {
  title: "Lead Generation — We Turn Clicks Into Customers",
  description:
    "Full-funnel lead generation systems that capture, qualify, and deliver exclusive, ready-to-buy leads straight to your WhatsApp, CRM, or inbox in real time.",
  alternates: {
    canonical: "/lead-generation",
  },
  openGraph: {
    title: "Lead Generation — Leads In Click",
    description:
      "We turn clicks into customers. High-converting ad campaigns, multi-step qualification funnels, and instant WhatsApp & CRM lead delivery.",
    url: "/lead-generation",
    images: [
      {
        url: "/og-lead-generation.png",
        width: 1200,
        height: 630,
        alt: "Lead Generation Services by Leads In Click",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation — Leads In Click",
    description:
      "We turn clicks into customers. High-converting ad campaigns, multi-step qualification funnels, and instant WhatsApp & CRM lead delivery.",
    images: ["/og-lead-generation.png"],
  },
};

// ✅ STRUCTURED DATA
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://leadsinclick.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lead Generation",
          item: "https://leadsinclick.com/lead-generation",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/lead-generation",
      name: "Lead Generation Services — We Turn Clicks Into Customers",
      description:
        "Full-funnel lead generation, qualification funnels, and real-time WhatsApp & CRM lead delivery for growth-focused brands.",
      url: "https://leadsinclick.com/lead-generation",
      isPartOf: { "@id": "https://leadsinclick.com" },
    },
    {
      "@type": "Service",
      name: "Full-Funnel Lead Generation",
      serviceType: "Digital Marketing & Lead Generation",
      provider: {
        "@type": "Organization",
        name: "Leads In Click",
        url: "https://leadsinclick.com",
      },
      areaServed: "US",
      description:
        "Done-for-you paid acquisition, custom landing page funnels, lead qualification, and instant CRM/WhatsApp delivery.",
    },
    {
      "@type": "Organization",
      name: "Leads In Click",
      url: "https://leadsinclick.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-917-555-1234",
        email: "hello@leadsinclick.com",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "US",
      },
    },
  ],
};

export default function LeadGenerationPage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#0B0B0B] text-[#F5F5F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Global Page-Wide Beams Background (Single WebGL Instance) */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <Beams
          className="pointer-events-none"
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

        {/* Ambient Radial Glows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 34% at 50% 18%, rgba(186,242,53,.055), transparent 72%), radial-gradient(ellipse 56% 42% at 50% 78%, rgba(36,72,232,.14), transparent 72%)",
          }}
        />

        {/* Subtle Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ✅ Page Sections (Transparent backgrounds so Beams shine through) */}
      <div className="relative z-10">
        <LeadGenerationHero />
        <LeadGenTrustSection />
          <LeadGenProcessSection />
        <LeadGenClosingSection />
      </div>
    </main>
  );
}