import type { Metadata } from "next";
import GmbHero from "./GmbHero";

export const metadata: Metadata = {
  title:
    "GMB Creation & Ranking Agency | Google Business Profile & Top-3 Map Pack SEO | LeadsInClick",
  description:
    "Dominate the Google Top-3 Local Map Pack. We handle end-to-end Google Business Profile (GMB) creation, verification, suspension recovery, NAP citation building, review velocity automation, and geo-grid ranking optimization.",
  keywords: [
    "GMB creation and ranking agency",
    "Google Business Profile optimization",
    "Google My Business ranking service",
    "Google Map Pack SEO agency",
    "local SEO agency",
    "GMB verification and suspension recovery",
    "local citation building service",
    "rank #1 on Google Maps",
    "geo-grid rank tracking",
    "LeadsInClick GMB ranking",
  ],
  alternates: {
    canonical: "https://leadsinclick.com/gmb-creation-ranking",
  },
  openGraph: {
    title: "Own the Google Top-3 Map Pack & Capture Every Local Call | LeadsInClick",
    description:
      "72% of local buyers call directly from the Google Map Pack. We create, verify, and rank your Google Business Profile in the Top 3 across your entire service area.",
    url: "https://leadsinclick.com/gmb-creation-ranking",
    siteName: "LeadsInClick",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-gmb-ranking.png",
        width: 1200,
        height: 630,
        alt: "LeadsInClick — GMB Creation, Verification & Top-3 Google Map Pack Ranking Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMB Creation & Top-3 Google Map Pack Ranking | LeadsInClick",
    description:
      "Turn local Google Maps searches into daily phone calls, direction requests, and walk-ins with our proven GMB ranking system.",
    images: ["/og-gmb-ranking.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://leadsinclick.com/gmb-creation-ranking/#breadcrumb",
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
          name: "Services",
          item: "https://leadsinclick.com/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GMB Creation & Ranking",
          item: "https://leadsinclick.com/gmb-creation-ranking",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/gmb-creation-ranking/#webpage",
      url: "https://leadsinclick.com/gmb-creation-ranking",
      name: "GMB Creation & Ranking Agency | Google Business Profile & Top-3 Map Pack SEO | LeadsInClick",
      description:
        "Complete Google Business Profile (GMB) creation, verification, local citation building, review velocity automation, and Top-3 Google Map Pack ranking services.",
      isPartOf: {
        "@id": "https://leadsinclick.com/#website",
      },
      breadcrumb: {
        "@id": "https://leadsinclick.com/gmb-creation-ranking/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://leadsinclick.com/gmb-creation-ranking/#service",
      name: "GMB Creation & Local Map Pack Ranking",
      serviceType: "Google Business Profile Optimization & Local SEO",
      provider: {
        "@type": "Organization",
        "@id": "https://leadsinclick.com/#organization",
        name: "LeadsInClick",
        url: "https://leadsinclick.com",
        logo: "https://leadsinclick.com/logo.png",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      description:
        "Full-service Google Business Profile (GMB) setup, instant verification, suspension reinstatement, primary category engineering, NAP citation consistency, competitor spam fighting, and 7x7 geo-grid Top-3 Map Pack ranking.",
      offers: {
        "@type": "Offer",
        url: "https://leadsinclick.com/gmb-creation-ranking#contact",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "340",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function GmbCreationRankingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GmbHero />
          </>
  );
}