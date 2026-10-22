import type { Metadata } from "next";
import Showcase from "./Showcase";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "How We Work",
  description:
    "See the exact 4-step growth system we deploy for clients — websites that sell, profitable paid ads, instant lead delivery, and local SEO that dominates Google.",

  alternates: {
    canonical: "/how-we-work",
  },

  openGraph: {
    title: "How We Work — Inside the Click Growth Engine",
    description:
      "From first audit to a flooded pipeline in 4 steps. See the exact systems we deploy to turn clicks into paying customers.",
    url: "/how-we-work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How We Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How We Work — Inside the Click Growth Engine",
    description:
      "From first audit to a flooded pipeline in 4 steps. See the exact systems we deploy to turn clicks into paying customers.",
    images: ["/og-image.png"],
  },
};

// ✅ STRUCTURED DATA — Breadcrumbs + HowTo schema (great for rich snippets)
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
          name: "How We Work",
          item: "https://leadsinclick.com/how-we-work",
        },
      ],
    },
    // HowTo schema — Google can show these steps directly in search results
    {
      "@type": "HowTo",
      name: "How Leads In Click Builds Your Growth Engine",
      description:
        "Our proven 4-step process to turn your business into a predictable lead-generating machine.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Free Audit & Strategy",
          text: "We analyse your market, competitors and current presence — then share a clear growth roadmap. No cost, no obligation.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Build & Launch",
          text: "Website, funnels, creatives and campaigns go live within days — fully tracked so every lead is accounted for.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Optimize & Scale",
          text: "We test, tweak and double down on what works. Winners get scaled, losers get killed. Your CPL keeps dropping.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Report & Grow",
          text: "Transparent reports you'll actually understand — leads, spend, revenue. Plus a monthly strategy call to plan what's next.",
        },
      ],
    },
  ],
};

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Showcase />
    </>
  );
}