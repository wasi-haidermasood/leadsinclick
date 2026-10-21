"use client";


import { ArrowUpRight } from "lucide-react";
import { Accent, Reveal, SectionHeading } from "./ui";

const CASES = [
  {
    image:
      "https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Bright, modern dental clinic interior",
    industry: "Dental Clinic Chain · Mumbai",
    title: "From invisible on Google to fully booked chairs",
    services: ["GMB Ranking", "Google Ads", "Website"],
    metrics: [
      { value: "+480%", label: "Calls from Maps" },
      { value: "#1", label: "Local ranking" },
      { value: "1,200+", label: "Appointments / yr" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Contemporary luxury apartment building facade",
    industry: "Real Estate Developer · Pune",
    title: "3,400 qualified home-buyer leads in one quarter",
    services: ["Lead Generation", "Meta Ads", "Landing Pages"],
    metrics: [
      { value: "₹310", label: "Cost per lead" },
      { value: "3,400+", label: "Qualified leads" },
      { value: "6.2×", label: "Return on ad spend" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Customers browsing clothes in a modern fashion store",
    industry: "D2C Fashion Brand · Delhi",
    title: "212% revenue growth with ads that finally profit",
    services: ["Meta Ads", "Social Media", "Website CRO"],
    metrics: [
      { value: "4.8×", label: "Meta ROAS" },
      { value: "+212%", label: "Revenue growth" },
      { value: "85K", label: "New followers" },
    ],
  },
];

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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-panel transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 50% 0%, transparent 40%, rgba(6,7,9,0.75) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3.5 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur">
                    {c.industry}
                  </span>
                  <span className="absolute top-3.5 right-3.5 grid h-9 w-9 place-items-center rounded-full bg-brand text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-snug font-semibold tracking-tight text-balance text-white">
                    {c.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-white/[0.07] py-4">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-lg font-semibold text-brand">{m.value}</p>
                        <p className="mt-0.5 text-[11px] leading-tight text-zinc-500">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Services used">
                    {c.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

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
