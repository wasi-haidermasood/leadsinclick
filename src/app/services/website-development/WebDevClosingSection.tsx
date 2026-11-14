"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Plus,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    question: "How long does it take to design and launch a custom website?",
    answer:
      "High-converting landing page funnels launch in 10–14 days. Full custom Next.js corporate websites, SaaS platforms, or headless e-commerce builds typically take 3–6 weeks from wireframe to live deployment.",
  },
  {
    question: "Will our team be able to edit text, blogs, and images easily?",
    answer:
      "Yes. We integrate intuitive headless CMS dashboards (like Sanity, Contentful, or custom admin panels) so your marketing team can publish pages, update copy, and launch blogs without touching a line of code.",
  },
  {
    question: "Do you handle UI/UX design, copywriting, and technical SEO?",
    answer:
      "Absolutely. Every project includes conversion-focused copywriting, bespoke Figma UI/UX design, mobile optimization, schema markup, and full technical SEO setup.",
  },
  {
    question: "Can you migrate our existing site without losing SEO rankings?",
    answer:
      "Yes. We perform a complete URL mapping, 301 redirect architecture, and metadata migration so you retain 100% of your existing search equity while gaining a massive boost from faster Core Web Vitals.",
  },
];

export default function WebDevClosingSection() {
  const reducedMotion = useReducedMotion() ?? false;
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      aria-labelledby="web-closing-section-title"
      className="relative w-full bg-transparent px-3 pt-10 pb-20 text-white sm:px-6 sm:pt-16 sm:pb-28 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: Cyber-Teal High-Converting Final CTA Card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative isolate flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0F96A6] via-[#0B7B8A] to-[#075B68] p-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.65)] sm:rounded-[32px] sm:p-10 lg:col-span-7"
          >
            {/* Subtle Wireframe Arcs inside CTA Card */}
            <svg
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-20"
              viewBox="0 0 800 600"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="680"
                cy="120"
                r="280"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx="680"
                cy="120"
                r="200"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx="680"
                cy="120"
                r="120"
                stroke="white"
                strokeWidth="1"
              />
            </svg>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11.5px] font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ready to Upgrade Your Digital Flagship?</span>
              </div>

              <h2
                id="web-closing-section-title"
                className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.06] font-semibold tracking-[-0.035em] text-white"
              >
                Build a Website That
                <br />
                Compounds Revenue.
              </h2>

              <p className="mt-4 max-w-[480px] text-[14px] leading-[1.65] text-white/85 sm:text-[15.5px]">
                Book a free 30-minute Website &amp; CRO Tear-Down. We&rsquo;ll
                audit your current UX, page speed, and conversion bottlenecks
                live on the call.
              </p>

              {/* 3 Value Checkmarks */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  "Live UX & CRO Tear-Down",
                  "Custom Architecture Scope",
                  "Fixed Timeline & Pricing",
                ].map((perk) => (
                  <div
                    key={perk}
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2.5 text-[12px] font-medium text-white backdrop-blur-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9AE6B4]" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom White Action Bar inside Teal Card */}
            <div className="mt-9 flex flex-col items-start justify-between gap-4 rounded-[22px] bg-white p-4 text-[#141A29] shadow-[0_20px_50px_rgba(7,52,58,0.3)] sm:flex-row sm:items-center sm:p-5">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
                  alt="Lead Solutions Architect"
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full border-2 border-[#0B7B8A]/20 object-cover"
                />
                <div>
                  <p className="text-[14px] font-bold text-[#141A29]">
                    Claim Your Free Website &amp; UX Audit
                  </p>
                  <p className="text-[11.5px] font-medium text-[#64748B]">
                    Speak directly with a Lead Solutions Architect
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-[#0B7B8A] px-5 py-3.5 text-[13.5px] font-semibold text-white shadow-[0_10px_25px_rgba(11,123,138,0.35)] transition hover:bg-[#075B68] sm:w-auto"
              >
                <span>Get Site Audit</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Objection-Busting FAQ Accordion Cards */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className="flex flex-col justify-between rounded-[28px] bg-[#F4F6FA] p-5 text-[#141A29] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:rounded-[32px] sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0B7B8A]/10 px-3.5 py-1.5 text-[11px] font-bold text-[#0B7B8A]">
                <Plus className="h-3 w-3 stroke-[2.5]" />
                <span>Common Questions</span>
              </div>

              <h3 className="mt-3 font-display text-[22px] font-bold tracking-[-0.03em] text-[#141A29] sm:text-[26px]">
                Everything You Need to Know
              </h3>
            </div>

            <div className="mt-6 space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[18px] bg-white shadow-[0_6px_20px_rgba(20,26,41,0.05)] transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                    >
                      <span className="text-[13.5px] font-bold tracking-[-0.015em] text-[#141A29] sm:text-[14.5px]">
                        {faq.question}
                      </span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#0B7B8A] text-white"
                            : "bg-[#F4F6FA] text-[#141A29]"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-[12.5px] leading-[1.6] text-[#64748B] sm:px-5 sm:text-[13px]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}