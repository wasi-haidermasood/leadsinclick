"use client";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, Plus } from "lucide-react";
import { Accent, EASE, Reveal, SectionHeading } from "./ui";
import { cn } from "@/utils/cn";

const FAQS = [
  {
    q: "How quickly will I start seeing results?",
    a: "Paid campaigns and lead funnels typically start generating enquiries within the first 7–14 days. GMB rankings and organic growth build over 30–90 days as Google recognises your profile's authority. In your free audit, we'll give you a realistic timeline for your specific market — no inflated promises.",
  },
  {
    q: "What exactly is included in the free growth audit?",
    a: "We analyse your website, Google presence, ad accounts (if any), social media and your top 3 competitors. You get a clear report showing where you're losing customers, what your competitors are doing right, and a step-by-step roadmap to fix it — whether you hire us or not. It normally costs $9,999; it's free this month.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. All our plans are month-to-month with zero lock-in. You can pause or cancel anytime with a simple email. We believe performance should keep you with us — not paperwork. Most clients stay because the leads keep coming (our retention rate is 98%).",
  },
  {
    q: "Is ad spend included in your pricing?",
    a: "Ad spend is separate and paid directly by you to Google or Meta — which means you fully own your ad accounts, data and audiences. We'll recommend a starting budget based on your goals (most clients start between $15,000–$50,000/month) and manage every rupee of it transparently.",
  },
  {
    q: "How will I actually receive my leads?",
    a: "Instantly. The moment someone enquires, you get their name, phone number and requirement on WhatsApp and email — plus a live Google Sheet or CRM sync if you prefer. Speed matters: responding within 5 minutes makes you 8× more likely to close the deal.",
  },
  {
    q: "I already have a website / social media. Can you still help?",
    a: "Absolutely — most clients come to us with something in place. We'll audit what you have, keep what works, and fix what's leaking money. Sometimes that's a full rebuild; often it's smarter funnels, better creatives and proper tracking on top of your existing assets.",
  },
  {
    q: "Which types of businesses do you work with?",
    a: "We specialise in growth for local and service businesses — clinics, real estate, education, salons, restaurants, gyms, interior designers, D2C brands and professional services. If your customers are online (they are), we can build a system to reach them.",
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-colors duration-400",
          open ? "border-brand/30 bg-panel" : "border-white/[0.08] bg-panel hover:border-white/20",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-[16px] font-semibold tracking-tight text-white sm:text-[17px]">
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300",
              open ? "bg-brand text-black" : "border border-white/12 text-zinc-300",
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-pretty text-zinc-400">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32"
      aria-labelledby="faq-title"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Frequently asked"
              title={
                <>
                  Questions? <Accent>Answered.</Accent>
                </>
              }
              description="Everything business owners usually ask before partnering with us. Anything else on your mind — just reach out."
            />
            <Reveal delay={0.2}>
              <div className="mt-9 rounded-3xl border border-white/[0.08] bg-panel p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-black">
                  <MessageCircle className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white">
                  Still have a question?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  Chat with a growth strategist — no sales pressure, no obligation. We reply within
                  a few hours on business days.
                </p>
                <a
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
