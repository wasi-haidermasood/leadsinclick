import type { Metadata } from "next";
import WebsiteDev from "./WebHero";
import TechStackMarquee from "./TechStackMarquee";
import WebsiteServicesCards from "./WebisteServicesCards";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "Website Development — High-Performance Digital Experiences",
  description:
    "World-class website development for brands that demand speed, conversion, and unforgettable design. Custom builds, headless CMS, SEO-ready architecture, and ongoing optimization.",
  alternates: {
    canonical: "/website-development",
  },
  openGraph: {
    title: "Website Development — Leads In Click",
    description:
      "Premium, conversion-focused websites engineered for growth. From strategy to launch, we build digital experiences that perform.",
    url: "/website-development",
    images: [
      {
        url: "/og-website-dev.png",
        width: 1200,
        height: 630,
        alt: "Website Development by Leads In Click",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development — Leads In Click",
    description:
      "Premium, conversion-focused websites engineered for growth. From strategy to launch, we build digital experiences that perform.",
    images: ["/og-website-dev.png"],
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
          name: "Website Development",
          item: "https://leadsinclick.com/website-development",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/website-development",
      name: "Website Development Services",
      description:
        "Custom, high-performance website development for growth-focused brands.",
      url: "https://leadsinclick.com/website-development",
      isPartOf: { "@id": "https://leadsinclick.com" },
    },
    {
      "@type": "Service",
      name: "Custom Website Development & CRO Design",
      serviceType: "Web Design and Development",
      provider: {
        "@type": "Organization",
        name: "Leads In Click",
        url: "https://leadsinclick.com",
      },
      areaServed: "US",
      description:
        "Blazing-fast, mobile-first websites engineered to convert visitors into qualified enquiries and paying customers.",
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

export default function WebsiteDevPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebsiteDev />
      <TechStackMarquee />
      <WebsiteServicesCards />
    </>
  );
}