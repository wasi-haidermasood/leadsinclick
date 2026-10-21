"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ---------------------------------- Reveal --------------------------------- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade-and-rise scroll reveal wrapper. */
export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Counter --------------------------------- */

type CounterProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Animated number that counts up when scrolled into view. */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2.2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ------------------------------ Section heading ----------------------------- */

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand uppercase",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_2px_rgba(184,241,53,0.6)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Italic serif accent word used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-accent font-normal text-brand italic">{children}</em>
  );
}
