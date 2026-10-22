import type { Metadata } from "next";
import Showcase from "./Showcase"; 

// ✅ METADATA — only works in Server Components (no "use client")
export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Discover why 200+ B2B companies trust Leads In Click for their lead generation. Transparent reporting, dedicated strategists, and performance guarantees.",

  alternates: {
    canonical: "/why-us",
  },

  openGraph: {
    title: "Why Choose Leads In Click?",
    description:
      "200+ B2B companies trust us. Here's what makes us different.",
    url: "/why-us",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Why Us" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Why Choose Leads In Click?",
    description:
      "200+ B2B companies trust us. Here's what makes us different.",
    images: ["/og-image.png"],
  },
};

// ✅ BREADCRUMB SCHEMA
const jsonLd = {
  "@context": "https://schema.org",
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
      name: "Why Us",
      item: "https://leadsinclick.com/why-us",
    },
  ],
};

export default function WhyUsPage() {
  return (
    <>
      {/* ✅ Structured data injected into the rendered HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Interactive client component */}
      <Showcase />
    </>
  );
}