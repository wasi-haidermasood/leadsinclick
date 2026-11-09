import type { Metadata } from "next";
import LeadGenerationHero from "./leadgenerationhero"


// ✅ METADATA — only works in Server Components
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LeadGenerationHero />
    </>
  );
}