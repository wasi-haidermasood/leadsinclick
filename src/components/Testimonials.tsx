"use client";

import { Star } from "lucide-react";
import { Accent, Reveal, SectionHeading } from "./ui";

const TESTIMONIALS = [
  {
    quote:
      "Within 60 days, our Google profile went from page nowhere to rank #1. The phone hasn't stopped ringing since. Best decision we ever made for the clinic.",
    name: "Dr. Sarah Jenkins",
    role: "Founder, Horizon Dental • USA",
    initials: "SJ",
    result: "+480% organic calls",
  },
  {
    quote:
      "We'd burnt money with two agencies before click. These folks rebuilt our funnel, and cost per lead dropped from $65 to $14 in six weeks. The transparency is unreal.",
    name: "James Rutherford",
    role: "Director, Apex Realty • UK",
    initials: "JR",
    result: "$14 cost per lead",
  },
  {
    quote:
      "Leads hit my WhatsApp before I've even finished my coffee. That speed and automation alone completely doubled our closure rate.",
    name: "Elena Rodriguez",
    role: "Owner, Lumina MedSpa • Spain",
    initials: "ER",
    result: "2× closure rate",
  },
  {
    quote:
      "Our new website loads instantly and actually converts. Online enquiries went from 15 a month to over 140. The team handles everything — I just focus on delivery.",
    name: "Marcus Thorne",
    role: "CEO, Thorne Architecture • AUS",
    initials: "MT",
    result: "9× more enquiries",
  },
  {
    quote:
      "Their Meta ads team is on another level. Creative refreshes every week, ruthless testing, and our ROAS climbed from 1.8 to 4.8. We scaled budgets 5× profitably.",
    name: "Sophie Laurent",
    role: "Co-founder, Maison Laurent • France",
    initials: "SL",
    result: "4.8× ROAS on Meta",
  },
  {
    quote:
      "As a gym owner, I don't have time for marketing. click runs our Instagram, Google profile and ads end-to-end. Membership enquiries have tripled in four months.",
    name: "David O'Connor",
    role: "Owner, IronCore Athletics • Canada",
    initials: "DC",
    result: "3× membership enquiries",
  },
];

function Stars() {
  return (
    <span className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-zinc-400 text-zinc-400"
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <figure className="group flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:w-[380px] sm:p-8">
      <div>
        <Stars />
        <blockquote className="mt-5 text-[14px] leading-relaxed text-zinc-400 sm:text-[15px]">
          {t.quote}
        </blockquote>
      </div>
      
      <div className="mt-8 flex items-center justify-between border-t border-white/[0.04] pt-5">
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-zinc-300"
            aria-hidden="true"
          >
            {t.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-zinc-200">
              {t.name}
            </p>
            <p className="truncate text-[12px] text-zinc-500">
              {t.role}
            </p>
          </div>
        </div>
        
        <div className="hidden sm:block text-right">
          <span className="inline-block text-[11px] font-mono tracking-wide text-brand uppercase">
            {t.result}
          </span>
        </div>
      </div>
      {/* Mobile only result badge so it doesn't crowd the row */}
      <div className="mt-3 block sm:hidden">
        <span className="inline-block text-[11px] font-mono tracking-wide text-brand uppercase">
          {t.result}
        </span>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const ROW_1 = TESTIMONIALS.slice(0, 3);
  const ROW_2 = TESTIMONIALS.slice(3, 6);

  // Duplicated array ensures seamless infinite looping on ultra-wide screens
  const LOOP_ROW_1 = [...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1];
  const LOOP_ROW_2 = [...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden border-y border-white/[0.04] bg-void py-24 sm:py-32"
      aria-labelledby="testimonials-title"
    >
      <style>{`
        /* Faster keyframes (25s and 30s instead of 50s/55s) */
        @keyframes scroll-left {
          to { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Global impact"
          title={
            <>
              Trusted by founders <Accent>worldwide.</Accent>
            </>
          }
          description="We've helped over 250+ international businesses scale. Hover over any card to pause."
        />
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-14 flex flex-col gap-6 sm:mt-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          
          {/* Row 1: Fast Scroll Left */}
          <div className="flex w-max animate-scroll-left gap-6 pause-on-hover">
            {LOOP_ROW_1.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} t={t} />
            ))}
          </div>

          {/* Row 2: Fast Scroll Right */}
          <div className="flex w-max animate-scroll-right gap-6 pause-on-hover">
            {LOOP_ROW_2.map((t, i) => (
              <TestimonialCard key={`row2-${i}`} t={t} />
            ))}
          </div>
          
        </div>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-7xl px-5 text-center sm:px-8">
        <Reveal delay={0.15}>
          <p className="text-[13px] text-zinc-500 sm:text-sm">
            Average rating{" "}
            <strong className="font-medium text-zinc-300">4.9 / 5</strong> across
            Google, Clutch &amp; Trustpilot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}