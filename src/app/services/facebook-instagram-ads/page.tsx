import type { Metadata } from "next";
import MetaAdsHero from "./MetaAdsHero";
import MetaAdFormatsMarquee from "./MetaAdFormatsMarquee";
import MetaAdsServicesCards from "./MetaAdsServicesCards";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "Facebook & Instagram Ads — Scroll-Stopping Campaigns That Convert",
  description:
    "High-ROAS Facebook and Instagram advertising engineered to bring buyers, not just likes. In-house ad creatives, Meta Conversions API tracking, and full-funnel retargeting.",
  alternates: {
    canonical: "/facebook-instagram-ads",
  },
  openGraph: {
    title: "Facebook & Instagram Ads — Leads In Click",
    description:
      "Turn scrolls into sales with laser-targeted Meta ad campaigns, high-converting Reels & static creatives, and relentless ROAS optimization.",
    url: "/facebook-instagram-ads",
    images: [
      {
        url: "/og-facebook-instagram-ads.png",
        width: 1200,
        height: 630,
        alt: "Facebook & Instagram Ads by Leads In Click",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook & Instagram Ads — Leads In Click",
    description:
      "Turn scrolls into sales with laser-targeted Meta ad campaigns, high-converting Reels & static creatives, and relentless ROAS optimization.",
    images: ["/og-facebook-instagram-ads.png"],
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
          name: "Facebook & Instagram Ads",
          item: "https://leadsinclick.com/facebook-instagram-ads",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/facebook-instagram-ads",
      name: "Facebook & Instagram Advertising Services",
      description:
        "Full-funnel Meta advertising, creative production, and ROAS scaling for growth-focused brands.",
      url: "https://leadsinclick.com/facebook-instagram-ads",
      isPartOf: { "@id": "https://leadsinclick.com" },
    },
    {
      "@type": "Service",
      name: "Facebook & Instagram Ads Management",
      serviceType: "Paid Social Advertising & Media Buying",
      provider: {
        "@type": "Organization",
        name: "Leads In Click",
        url: "https://leadsinclick.com",
      },
      areaServed: "US",
      description:
        "Scroll-stopping ad creatives, Meta Advantage+ campaigns, Conversions API tracking, and retargeting funnels that maximize ROAS.",
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

export default function FacebookInstagramAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetaAdsHero />
      <MetaAdFormatsMarquee />
      <MetaAdsServicesCards />
    </>
  );
}