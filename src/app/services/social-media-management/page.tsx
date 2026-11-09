import type { Metadata } from "next";
import SocialMediaHero from "./SocialMediaHero";
import SocialPlatformsMarquee from "./SocialPlatformsMarquee";
import SocialMediaServicesCards from "./SocialMediaServicesCards";

// ✅ METADATA — only works in Server Components
export const metadata: Metadata = {
  title: "Social Media Management — Done-For-You Content, Reels & Brand Growth",
  description:
    "Full-service social media management across Instagram, LinkedIn, TikTok, and Facebook. Custom Reels production, aesthetic carousels, daily community management, and DM lead generation.",
  alternates: {
    canonical: "/social-media-management",
  },
  openGraph: {
    title: "Social Media Management — Leads In Click",
    description:
      "Turn your social profiles into an authority-building, client-generating machine with done-for-you Reels, carousels, scheduling, and community management.",
    url: "/social-media-management",
    images: [
      {
        url: "/og-social-media-management.png",
        width: 1200,
        height: 630,
        alt: "Social Media Management by Leads In Click",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management — Leads In Click",
    description:
      "Turn your social profiles into an authority-building, client-generating machine with done-for-you Reels, carousels, scheduling, and community management.",
    images: ["/og-social-media-management.png"],
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
          name: "Social Media Management",
          item: "https://leadsinclick.com/social-media-management",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadsinclick.com/social-media-management",
      name: "Social Media Management Services",
      description:
        "Done-for-you social media strategy, short-form video editing, carousel design, scheduling, and community management.",
      url: "https://leadsinclick.com/social-media-management",
      isPartOf: { "@id": "https://leadsinclick.com" },
    },
    {
      "@type": "Service",
      name: "Social Media Management & Content Production",
      serviceType: "Social Media Marketing & Content Creation",
      provider: {
        "@type": "Organization",
        name: "Leads In Click",
        url: "https://leadsinclick.com",
      },
      areaServed: "US",
      description:
        "End-to-end social media management including content calendars, Reels & TikTok editing, branded graphics, copywriting, and active community engagement.",
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

export default function SocialMediaManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SocialMediaHero />
      <SocialPlatformsMarquee />
      <SocialMediaServicesCards />
    </>
  );
}