import type { Metadata } from "next"; 
import CTA from "./CTA";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get your free growth audit (worth $499). We'll show you exactly where you're losing customers and how to win them back. Limited spots available each month.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact — Claim Your Free Growth Audit",
    description:
      "Book a free 30-minute strategy call. A growth strategist will analyze your business and share a 90-day lead generation roadmap.",
    url: "/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Leads In Click",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact — Claim Your Free Growth Audit",
    description:
      "Book a free 30-minute strategy call. A growth strategist will analyze your business and share a 90-day lead generation roadmap.",
    images: ["/og-image.png"],
  },
};

// ✅ STRUCTURED DATA — Breadcrumbs + ContactPage schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Breadcrumb
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
          name: "Contact",
          item: "https://leadsinclick.com/contact",
        },
      ],
    },
    // ContactPage schema
    {
      "@type": "ContactPage",
      name: "Contact Leads In Click",
      url: "https://leadsinclick.com/contact",
      description:
        "Get your free growth audit and 90-day lead generation roadmap.",
    },
    // Organization with contact point — great for Google's knowledge panel
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CTA />
    </>
  );
}