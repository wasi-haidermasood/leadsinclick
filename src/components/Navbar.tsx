"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { EASE } from "./ui";
import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/logo.png"; // ← change this to your file name
const LOGO_ALT = "Leads In Click";


const LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Why Us", href: "/why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "How We Work", href: "/how-we-work" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="Leads In click — home"
    >
      {/* ✅ LOGO IMAGE — replaces the MousePointerClick icon */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <Image
          src={LOGO_SRC}
          alt={LOGO_ALT}
          width={36}   // matches h-9 (36px) — adjust if needed
          height={36}  // matches w-9 (36px) — adjust if needed
          className="h-full w-full object-contain"
          priority     // loads immediately since it's above the fold
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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

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

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.07] bg-void/80 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-brand"
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/contact"
            className="text-sm font-semibold text-zinc-200 transition-colors hover:text-brand"
          >
            Talk to an expert
          </a>
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_0_rgba(184,241,53,0)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(184,241,53,0.35)] active:scale-[0.97]"
          >
            Get Free Audit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden border-b border-white/[0.07] bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-5">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-display text-lg font-medium text-zinc-100 transition-colors hover:bg-white/[0.05] hover:text-brand"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-black"
                >
                  Get My Free Growth Audit <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
