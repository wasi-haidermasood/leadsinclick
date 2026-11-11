"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronDown,
  Code2,
  CreditCard,
  HelpCircle,
  Layers,
  Magnet,
  MapPin,
  Megaphone,
  Menu,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { EASE } from "./ui";
import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/logo.png"; // ← change this to your file name
const LOGO_ALT = "Leads In Click";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasMegaMenu: true },
  { label: "Why Us", href: "/why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const CORE_SERVICES = [
  {
    icon: Magnet,
    title: "Lead Generation",
    description: "Capture & qualify ready-to-buy leads",
    href: "/services/lead-generation",
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Blazing-fast sites engineered to convert",
    href: "/services/website-development",
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    description: "Scroll-stopping Meta campaigns that sell",
    href: "/services/facebook-instagram-ads",
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Capture high-intent search & YouTube ROI",
    href: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Content, reels & community growth",
    href: "/services/social-media-management",
  },
  {
    icon: MapPin,
    title: "GMB Creation & Ranking",
    description: "Rank #1 on local Google Maps searches",
    href: "/services/gmb-creation-ranking",
  },
];

const EXPLORE_LINKS = [
  {
    icon: BarChart3,
    label: "Proven Client Results",
    href: "/#results",
  },
  {
    icon: Workflow,
    label: "How We Work",
    href: "/how-we-work",
  },
  {
    icon: ShieldCheck,
    label: "Why Brands Choose Us",
    href: "/why-us",
  },
  {
    icon: CreditCard,
    label: "Transparent Pricing",
    href: "/pricing",
  },
  {
    icon: BookOpen,
    label: "Growth Insights & Blog",
    href: "/blog",
  },
  {
    icon: HelpCircle,
    label: "Frequently Asked Questions",
    href: "/#faq",
  },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 focus:outline-none"
      aria-label="Leads In click — home"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-105">
        <Image
          src={LOGO_SRC}
          alt={LOGO_ALT}
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </span>

      {!compact && (
        <span className="font-display text-[17px] leading-none font-semibold tracking-tight whitespace-nowrap text-white">
          Leads In <span className="text-brand">click</span>
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const openMega = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaOpen(true);
    setHoveredItem("Services");
  };

  const scheduleCloseMega = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
      setHoveredItem(null);
    }, 130);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMegaOpen(false);
        setHoveredItem(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setHoveredItem(null);
  }, [pathname]);

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open || megaOpen
          ? "border-b border-white/[0.07] bg-[#08080C]/85 shadow-[0_16px_48px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* Top scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left bg-brand"
        aria-hidden="true"
      />

      {/* Top announcement banner (collapses smoothly on scroll) */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/[0.06] bg-[#050508]/90 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-9 opacity-100"
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-5 text-xs text-zinc-300">
          <span>
            Introducing Leads In Click&apos;s Full-Funnel Growth Engine for High-ROI Brands
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
          >
            Claim Free Audit <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav
        className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Logo />

        {/* Center Capsule Navigation */}
        <div
          onMouseLeave={scheduleCloseMega}
          className="hidden items-center lg:flex"
        >
          <ul className="flex items-center gap-1 rounded-full border border-white/[0.09] bg-[#121218]/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {NAV_ITEMS.map((item) => {
              const isRouteActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.hasMegaMenu
                    ? pathname?.startsWith("/services")
                    : pathname?.startsWith(item.href);

              const isHighlighted = hoveredItem
                ? hoveredItem === item.label
                : item.hasMegaMenu && megaOpen
                  ? true
                  : isRouteActive;

              if (item.hasMegaMenu) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={openMega}
                  >
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      onClick={() => setMegaOpen((prev) => !prev)}
                      className={cn(
                        "relative z-10 inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[13.5px] font-medium transition-colors duration-200",
                        isHighlighted || megaOpen
                          ? "text-white"
                          : "text-zinc-300 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",
                          megaOpen && "rotate-180 text-white"
                        )}
                      />
                    </button>

                    {(isHighlighted || megaOpen) && (
                      <motion.span
                        layoutId="evervault-nav-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="pointer-events-none absolute inset-0 rounded-full bg-white/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                    }
                    setMegaOpen(false);
                    setHoveredItem(item.label);
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative z-10 inline-flex items-center rounded-full px-4 py-1.5 text-[13.5px] font-medium transition-colors duration-200",
                      isHighlighted
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>

                  {isHighlighted && (
                    <motion.span
                      layoutId="evervault-nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="pointer-events-none absolute inset-0 rounded-full bg-white/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions (matches "Log in" + white "Talk to an Expert" pill) */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/how-we-work"
            className="text-[13.5px] font-medium text-zinc-300 transition-colors hover:text-white"
          >
            How We Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-4.5 py-2 text-[13.5px] font-semibold text-[#09090D] shadow-[0_6px_24px_rgba(255,255,255,0.16)] transition-all duration-200 hover:bg-zinc-200 hover:shadow-[0_8px_28px_rgba(255,255,255,0.26)] active:scale-[0.98]"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop 3-Column Mega Menu Dropdown */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE }}
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
              className="absolute top-full left-1/2 z-50 hidden w-full max-w-[940px] -translate-x-1/2 pt-2 lg:block"
            >
              <div className="grid grid-cols-12 overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0B0B11]/95 shadow-[0_32px_90px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
                {/* Column 1: Overview + Feature Box */}
                <div className="relative col-span-4 flex flex-col justify-between overflow-hidden border-r border-white/[0.07] p-7">
                  {/* Atmospheric radial glow matching Evervault left column */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full opacity-35 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, #7963B9 0%, #455FDC 55%, transparent 75%)",
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                      Solutions
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-zinc-400">
                      Customizable lead generation and digital growth systems,
                      engineered to scale your revenue predictably.
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 rounded-2xl border border-white/[0.09] bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Layers className="h-4 w-4 text-brand" />
                      <span>Full-Funnel Growth Audit</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      Get a custom roadmap to turn your ad spend &amp; traffic
                      into qualified buyers.
                    </p>
                    <Link
                      href="/contact"
                      onClick={() => setMegaOpen(false)}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors hover:text-brand"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Core Services */}
                <div className="col-span-4 border-r border-white/[0.07] p-7">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-zinc-400 uppercase">
                    Growth Services
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {CORE_SERVICES.map((service) => {
                      const Icon = service.icon;
                      const isActive = pathname === service.href;
                      return (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            onClick={() => setMegaOpen(false)}
                            className={cn(
                              "group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-white/[0.05]",
                              isActive && "bg-white/[0.05]"
                            )}
                          >
                            <span
                              className={cn(
                                "grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-zinc-300 transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand",
                                isActive &&
                                  "border-brand/40 bg-brand/10 text-brand"
                              )}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <div>
                              <p
                                className={cn(
                                  "text-[13.5px] font-semibold text-white transition-colors group-hover:text-brand",
                                  isActive && "text-brand"
                                )}
                              >
                                {service.title}
                              </p>
                              <p className="text-xs text-zinc-400">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 3: Explore & By Resource */}
                <div className="col-span-4 p-7">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-zinc-400 uppercase">
                    Explore &amp; Resources
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {EXPLORE_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-center gap-3 rounded-xl px-2.5 py-2 text-[13.5px] font-medium text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >
                            <Icon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-brand" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="max-h-[calc(100svh-72px)] overflow-y-auto border-b border-white/[0.08] bg-[#09090E]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-6 px-5 py-6">
              <div>
                <p className="px-2 font-mono text-[11px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  Navigation
                </p>
                <ul className="mt-2 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 font-display text-base font-medium text-zinc-100 transition-colors hover:bg-white/[0.05] hover:text-brand"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 text-zinc-500" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/how-we-work"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 font-display text-base font-medium text-zinc-100 transition-colors hover:bg-white/[0.05] hover:text-brand"
                    >
                      <span>How We Work</span>
                      <ArrowRight className="h-4 w-4 text-zinc-500" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 font-display text-base font-medium text-zinc-100 transition-colors hover:bg-white/[0.05] hover:text-brand"
                    >
                      <span>FAQ</span>
                      <ArrowRight className="h-4 w-4 text-zinc-500" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/[0.07] pt-5">
                <p className="px-2 font-mono text-[11px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                  Core Services
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {CORE_SERVICES.map((service) => {
                    const Icon = service.icon;
                    const isActive = pathname === service.href;
                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.05]",
                          isActive && "border-brand/40 bg-brand/5"
                        )}
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-brand">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p
                            className={cn(
                              "text-xs font-semibold text-white",
                              isActive && "text-brand"
                            )}
                          >
                            {service.title}
                          </p>
                          <p className="text-[11px] text-zinc-400">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
                >
                  Talk to an Expert <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}