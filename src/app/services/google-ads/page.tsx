import type { Metadata } from "next";
import GoogleAdsHero from "./GoogleAdshero";
import GoogleAdFormatsMarquee from "./GoogleAdFormatsMarquee";
import GoogleAdsServicesCards from "./GoogleAdsServicesCards";

export const metadata: Metadata = {
  title:
    "Google Ads Management Agency | Search, PMax, Shopping & YouTube PPC | LeadsInClick",
  description:
    "Capture high-intent buyers at the exact moment they search. We engineer high-ROAS Google Search, Performance Max (PMax), Shopping, YouTube, and Local Service Ads campaigns with bulletproof GA4 & Enhanced Conversion tracking.",
  keywords: [
    "Google Ads agency",
    "Google PPC management",
    "Google Search Ads agency",
    "Performance Max agency",
    "Google Shopping ads management",
    "YouTube ads agency",
    "Local Service Ads management",
    "pay per click advertising",
    "Google Tag Manager enhanced conversions",
    "LeadsInClick Google Ads",
  ],
  alternates: {
    canonical: "https://leadsinclick.com/google-ads",
  },
  openGraph: {
    title: "Page #1 & Capture Ready-to-Buy Customers | LeadsInClick",
    description:
      "Data-driven Google Search, Performance Max, Shopping, and YouTube ad campaigns engineered for lower CPA, 9+/10 Quality Scores, and maximum ROAS.",
    url: "https://leadsinclick.com/google-ads",
    siteName: "LeadsInClick",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-google-ads.png",
        width: 1200,
        height: 630,
        alt: "LeadsInClick — Google Ads & High-Intent PPC Management Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management Agency | Search, PMax & Shopping | LeadsInClick",
    description:
      "Stop wasting budget on junk clicks. We build high-intent Google Search, PMax, and YouTube campaigns that turn searches into revenue.",
    images: ["/og-google-ads.png"],
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
      "@id": "https://leadsinclick.com/google-ads/#breadcrumb",
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
          name: "Google Ads Management",
          item: "https://leadsinclick.com/google-ads",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/google-ads/#webpage",
      url: "https://leadsinclick.com/google-ads",
      name: "Google Ads Management Agency | Search, PMax, Shopping & YouTube PPC | LeadsInClick",
      description:
        "High-converting Google Search, Performance Max, Shopping, and YouTube PPC campaigns engineered for maximum Quality Score, lower CPA, and scalable ROAS.",
      isPartOf: {
        "@id": "https://leadsinclick.com/#website",
      },
      breadcrumb: {
        "@id": "https://leadsinclick.com/google-ads/#breadcrumb",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://leadsinclick.com/google-ads/#service",
      name: "Google Ads & High-Intent PPC Management",
      serviceType: "Pay-Per-Click (PPC) & Search Engine Marketing",
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
        "End-to-end Google Ads management including high-intent Search campaigns, Performance Max (PMax), Google Shopping feed optimization, YouTube direct-response ads, negative keyword sculpting, and GTM Enhanced Conversion tracking.",
      offers: {
        "@type": "Offer",
        url: "https://leadsinclick.com/google-ads#contact",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "310",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GoogleAdsHero />
      <GoogleAdFormatsMarquee />
      <GoogleAdsServicesCards />
    </>
  );
}