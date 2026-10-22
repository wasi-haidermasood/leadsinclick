import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

// ✅ PAGE-LEVEL METADATA — overrides layout defaults
export const metadata: Metadata = {
  title: "Home", // → renders as "Home | Leads In Click" (because of the template)
  description:
    "Leads In Click is a performance marketing agency specializing in paid ads, SEO, and lead generation funnels for B2B companies.",

  alternates: {
    canonical: "/", // ← prevents duplicate content issues
  },

  openGraph: {
    title: "Leads In Click — We Build Lead Machines",
    description:
      "Stop wasting ad spend. We build predictable lead generation systems for B2B companies.",
    url: "/",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Leads In Click Homepage",
      },
    ],
  },
};

// ✅ JSON-LD SCHEMA DATA
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // — Organization —
    {
      "@type": "Organization",
      "@id": "https://leadsinclick.com/#organization",
      name: "Leads In Click",
      url: "https://leadsinclick.com",
      logo: {
        "@type": "ImageObject",
        url: "https://leadsinclick.com/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/company/leadsinclick",
        "https://twitter.com/leadsinclick",
      ],
    },
    // — WebSite —
    {
      "@type": "WebSite",
      "@id": "https://leadsinclick.com/#website",
      url: "https://leadsinclick.com",
      name: "Leads In Click",
      publisher: { "@id": "https://leadsinclick.com/#organization" },
    },
    // — WebPage —
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/#webpage",
      url: "https://leadsinclick.com",
      name: "Leads In Click — Growth Marketing Agency",
      isPartOf: { "@id": "https://leadsinclick.com/#website" },
      about: { "@id": "https://leadsinclick.com/#organization" },
    },
    // — BreadcrumbList —
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://leadsinclick.com",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* ✅ Inject JSON-LD into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <Hero />
      <SocialProof />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </>
  );
}