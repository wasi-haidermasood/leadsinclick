"use client";

import InfiniteMenu from "@/components/ui/InfiniteMenu";
import { Accent, Reveal, SectionHeading } from "./ui";

const CASES = [
  {
    image:
      "https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    industry: "Dental Clinic Chain · Toronto",
    title: "From invisible on Google to fully booked chairs",
    link: "/contact",
    metrics: [
      { value: "+480%", label: "calls from Maps" },
      { value: "#1", label: "local ranking" },
      { value: "1,200+", label: "appointments / yr" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    industry: "Real Estate Developer · New York",
    title: "3,400 qualified home-buyer leads in one quarter",
    link: "/contact",
    metrics: [
      { value: "$15", label: "cost per lead" },
      { value: "3,400+", label: "qualified leads" },
      { value: "6.2×", label: "return on ad spend" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    industry: "D2C Fashion Brand · Florida",
    title: "212% revenue growth with ads that finally profit",
    link: "/contact",
    metrics: [
      { value: "4.8×", label: "Meta ROAS" },
      { value: "+212%", label: "revenue growth" },
      { value: "85K", label: "new followers" },
    ],
  },
];

// Map case studies to InfiniteMenu items
const items = CASES.map((c) => ({
  image: c.image,
  link: c.link,
  title: c.title,
  description: `${c.industry} — ${c.metrics
    .map((m) => `${m.value} ${m.label}`)
    .join(" · ")}`,
}));

export default function CaseStudies() {
  return (
    <section
      id="results"
      className="relative scroll-mt-20 border-y border-white/[0.06] bg-panel/40 py-24 sm:py-32"
      aria-labelledby="results-title"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              Real brands. Real numbers. <Accent>Real growth.</Accent>
            </>
          }
          description="We don't sell vanity metrics. Here's what happens when strategy, creative and media buying work as one machine."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-16 h-[480px] sm:h-[600px]">
            <InfiniteMenu
              items={items}
              count={160}
              tileSize={0.63}
              roundness={0.2}
              zoom={1.65}
              pullBack={1}
              stretch={0.6}
              inertia={0.6}
              autoplay={3}
              grayscale
              dim={0.5}
              intro
              showInfo
              theme="dark"
              accentColor="#b8f135"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-brand/20 bg-brand/[0.05] px-7 py-7 text-center sm:flex-row sm:text-left">
            <p className="flex-1 text-[15px] leading-relaxed text-zinc-200">
              <strong className="font-semibold text-white">Your competitors are already advertising.</strong>{" "}
              Every week you wait, they capture customers who should have been yours.
            </p>
            <a
              href="/contact"
              className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,241,53,0.4)] active:scale-[0.97]"
            >
              Claim My Free Audit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}