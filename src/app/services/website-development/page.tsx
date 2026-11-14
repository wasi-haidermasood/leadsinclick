import type { Metadata } from "next";
import Beams from "@/components/ui/Beams";
import WebDevHero from "./WebDevHero";
import WebDevTrustSection from "./WebDevTrustSection";
import WebDevProcessSection from "./WebDevProcessSection";
import WebDevClosingSection from "./WebDevClosingSection";

// ✅ METADATA — Server Component
export const metadata: Metadata = {
  title: "Web Development — High-Converting Websites & Custom Web Apps",
  description:
    "We design and engineer blazing-fast Next.js websites, custom web applications, and conversion-optimized landing pages that turn visitors into customers.",
  alternates: {
    canonical: "/web-development",
  },
  openGraph: {
    title: "Web Development Services — Leads In Click",
    description:
      "Digital experiences that convert. Custom UI/UX design, Next.js & React development, headless e-commerce, and 99+ Core Web Vitals performance.",
    url: "/web-development",
    images: [
      {
        url: "/og-web-development.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services by Leads In Click",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services — Leads In Click",
    description:
      "Digital experiences that convert. Custom UI/UX design, Next.js & React development, and 99+ Core Web Vitals performance.",
    images: ["/og-web-development.png"],
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
          name: "Web Development",
          item: "https://leadsinclick.com/web-development",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/web-development",
      name: "Web Development Services — Digital Experiences That Convert",
      description:
        "Custom UI/UX design, full-stack Next.js web development, e-commerce, and conversion rate optimization for ambitious brands.",
      url: "https://leadsinclick.com/web-development",
      isPartOf: { "@id": "https://leadsinclick.com" },
    },
    {
      "@type": "Service",
      name: "Custom Web Design & Full-Stack Development",
      serviceType: "Web Development & UI/UX Design",
      provider: {
        "@type": "Organization",
        name: "Leads In Click",
        url: "https://leadsinclick.com",
      },
      areaServed: "US",
      description:
        "Bespoke UI/UX design, Next.js and React engineering, CMS integration, technical SEO, and conversion rate optimization.",
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

export default function WebDevelopmentPage() {
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

        {/* Ambient Radial Glows (Teal & Lime tint) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 34% at 50% 18%, rgba(22,184,197,.12), transparent 72%), radial-gradient(ellipse 56% 42% at 50% 78%, rgba(11,123,138,.16), transparent 72%)",
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

      {/* ✅ Page Sections */}
      <div className="relative z-10">
        <WebDevHero />
        <WebDevTrustSection />
        <WebDevProcessSection />
        <WebDevClosingSection />
      </div>
    </main>
  );
}