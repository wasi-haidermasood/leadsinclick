import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ GLOBAL METADATA — inherited by all pages
export const metadata: Metadata = {
  metadataBase: new URL("https://leadsinclick.com"), // ← your real domain

  title: {
    default: "Leads In Click — Growth Marketing Agency",
    template: "%s | Leads In Click", // ← every page title becomes "Page Name | Leads In Click"
  },
  description:
    "We help B2B companies generate qualified leads through paid ads, SEO, and conversion-optimized funnels.",

  keywords: ["lead generation", "B2B marketing", "paid ads", "SEO agency"],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Leads In Click",
    title: "Leads In Click — Growth Marketing Agency",
    description:
      "We help B2B companies generate qualified leads through paid ads, SEO, and conversion-optimized funnels.",
    images: [
      {
        url: "/og-image.png", // ← put a 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "Leads In Click",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leads In Click — Growth Marketing Agency",
    description:
      "We help B2B companies generate qualified leads through paid ads, SEO, and conversion-optimized funnels.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}