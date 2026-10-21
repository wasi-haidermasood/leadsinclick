"use client";

import type { SVGProps } from "react";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Navbar";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Website Development", href: "/#services" },
      { label: "Lead Generation", href: "/#services" },
      { label: "Facebook & Instagram Ads", href: "/#services" },
      { label: "Google Ads", href: "/#services" },
      { label: "Social Media Management", href: "/#services" },
      { label: "GMB Creation & Ranking", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Results", href: "/#results" },
      { label: "Why Choose Us", href: "/why-us" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Client Stories", href: "/#testimonials" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Free Growth Audit", href: "/contact" },
      { label: "Book a Strategy Call", href: "/contact" },
      { label: "See How It Works", href: "/#showcase" },
      { label: "Compare Plans", href: "/pricing" },
    ],
  },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
  { icon: XIcon, label: "Twitter / X", href: "https://x.com" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#040506]"
      aria-label="Footer"
    >
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              The growth partner for ambitious Indian brands. Websites, ads,
              social media and Google rankings — engineered to turn clicks into
              customers.
            </p>
            <address className="mt-6 space-y-2.5 text-sm text-zinc-400 not-italic">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brand" /> Heavan Mall,
                Lahore, Pakistan
              </p>
              <p>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" /> +923285154250
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@leadsinclick.in"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" />{" "}
                  hello@leadsinclick.in
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Leads In click on ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand hover:text-black"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <nav
            className="grid grid-cols-2 gap-10 sm:grid-cols-3"
            aria-label="Footer navigation"
          >
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-zinc-300 transition-colors duration-300 hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-[13px] text-zinc-500 sm:flex-row">
          <p>
            © 2026 Leads In click. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-zinc-200">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-zinc-200">
              Terms of Service
            </a>
            <a href="#top" className="transition-colors hover:text-zinc-200">
              Back to top
            </a>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 text-center font-display text-[19vw] leading-none font-bold tracking-tight whitespace-nowrap text-white/[0.022] select-none"
        aria-hidden="true"
      >
        click
      </div>
    </footer>
  );
}
