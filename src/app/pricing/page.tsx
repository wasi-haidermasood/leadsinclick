import type { Metadata } from "next";
import Pricing from "./Pricing";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flat-fee growth plans starting at $19,999/month. No hidden charges, no lock-in. Get a complete growth team — designer, media buyer, copywriter and strategist included.",

  alternates: {
    canonical: "/pricing",
  },

  openGraph: {
    title: "Pricing — Growth Plans That Pay For Themselves",
    description:
      "Flat monthly fee for a complete growth team. Launch, Growth and Scale plans built for serious businesses.",
    url: "/pricing",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Pricing Plans" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing — Growth Plans That Pay For Themselves",
    description:
      "Flat monthly fee for a complete growth team. Launch, Growth and Scale plans built for serious businesses.",
    images: ["/og-image.png"],
  },
};

// ✅ STRUCTURED DATA — Breadcrumbs + Product offers for rich results
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
          name: "Pricing",
          item: "https://leadsinclick.com/pricing",
        },
      ],
    },
    // Pricing offers — helps Google show price-rich snippets
    {
      "@type": "Product",
      name: "Leads In Click — Growth Plans",
      description:
        "Flat-fee monthly growth plans for local businesses and scaling brands.",
      brand: {
        "@type": "Brand",
        name: "Leads In Click",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Launch",
          price: "19999",
          priceCurrency: "$",
          url: "https://leadsinclick.com/pricing",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "39999",
          priceCurrency: "$",
          url: "https://leadsinclick.com/pricing",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Scale",
          price: "74999",
          priceCurrency: "$",
          url: "https://leadsinclick.com/pricing",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pricing />
    </>
  );
}