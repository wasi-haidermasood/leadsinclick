"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Accent, EASE, Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

const AUDIT_INCLUDES = [
  "Website & funnel performance review",
  "Google ranking & competitor analysis",
  "Ad account audit (if you're running ads)",
  "90-day lead generation roadmap",
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 transition-all duration-300 focus:border-brand/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand/25";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const next: Record<string, string> = {};

    if (form.name.trim().length < 2) next.name = "Please enter your name.";

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a valid phone / WhatsApp number.";

    if (!form.business) next.business = "Please select your business type.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");

    // mock success
    setTimeout(() => setStatus("done"), 1300);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-labelledby="cta-title"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-panel">
            {/* Backdrop flourishes */}
            <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div
              className="absolute -top-40 -left-24 h-96 w-96 rounded-full opacity-[0.14] blur-[100px]"
              style={{ background: "radial-gradient(closest-side, #b8f135, transparent)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -right-24 -bottom-40 h-96 w-96 rounded-full opacity-[0.09] blur-[100px]"
              style={{ background: "radial-gradient(closest-side, #2dd4bf, transparent)" }}
              aria-hidden="true"
            />

            <div className="relative grid lg:grid-cols-[1fr_1.05fr]">
              {/* Copy side */}
              <div className="p-8 sm:p-12 lg:p-14">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
                  <Clock className="h-3.5 w-3.5" /> Limited free audits — 7 spots left this month
                </span>

                <h2
                  id="cta-title"
                  className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl"
                >
                  Ready to flood your business with <Accent>leads?</Accent>
                </h2>

                <p className="mt-5 max-w-md leading-relaxed text-pretty text-zinc-400">
                  Claim your free growth audit (worth $499). We&apos;ll show you exactly where you&apos;re
                  losing customers — and the fastest way to win them back.
                </p>

                <ul className="mt-8 space-y-3">
                  {AUDIT_INCLUDES.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-zinc-200">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-3 border-t border-white/[0.08] pt-8">
                  <a
                    href="tel:+19175551234"
                    className="flex items-center gap-3 text-[15px] text-zinc-300 transition-colors hover:text-brand"
                  >
                    <Phone className="h-4.5 w-4.5 text-brand" /> +1 (917) 555-1234 (Mon–Fri, 9am–6pm)
                  </a>
                  <a
                    href="mailto:hello@leadsinclick.com"
                    className="flex items-center gap-3 text-[15px] text-zinc-300 transition-colors hover:text-brand"
                  >
                    <Mail className="h-4.5 w-4.5 text-brand" /> hello@leadsinclick.com
                  </a>
                  <p className="flex items-center gap-3 text-[13px] text-zinc-500">
                    <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-brand" />
                    Your details stay private. No spam, no sharing — ever.
                  </p>
                </div>
              </div>

              {/* Form side */}
              <div className="relative border-t border-white/[0.08] bg-black/25 p-8 backdrop-blur-sm sm:p-12 lg:border-t-0 lg:border-l lg:p-14">
                <AnimatePresence mode="wait">
                  {status === "done" ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                      role="status"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 15 }}
                        className="grid h-20 w-20 place-items-center rounded-full bg-brand text-black shadow-[0_0_60px_rgba(184,241,53,0.45)]"
                      >
                        <CheckCircle2 className="h-10 w-10" />
                      </motion.span>

                      <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white">
                        You&apos;re in, {form.name.split(" ")[0] || "there"}!
                      </h3>

                      <p className="mt-3 max-w-sm leading-relaxed text-zinc-400">
                        Your free audit request is confirmed. A growth strategist will call you on{" "}
                        <strong className="font-semibold text-white">{form.phone}</strong> within 24 working hours.
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setStatus("idle");
                          setForm({
                            name: "",
                            phone: "",
                            business: "",
                            budget: "",
                            message: "",
                          });
                          setErrors({});
                        }}
                        className="mt-7 text-sm font-semibold text-brand underline-offset-4 hover:underline"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                        Get your free audit
                      </h3>
                      <p className="mt-1.5 text-sm text-zinc-500">
                        Fill this in — we&apos;ll handle the rest.
                      </p>

                      <div className="mt-7 space-y-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                            Your name <span className="text-brand">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            placeholder="e.g. Alex Johnson"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={cn(inputClasses, errors.name && "border-red-400/60")}
                          />
                          {errors.name && (
                            <p id="name-error" className="mt-1.5 text-[13px] text-red-300">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
                            Phone / WhatsApp number <span className="text-brand">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="+1 917 555 1234"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={cn(inputClasses, errors.phone && "border-red-400/60")}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="mt-1.5 text-[13px] text-red-300">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Business */}
                          <div>
                            <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-zinc-300">
                              Business type <span className="text-brand">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="business"
                                value={form.business}
                                onChange={(e) => update("business", e.target.value)}
                                aria-invalid={!!errors.business}
                                className={cn(
                                  inputClasses,
                                  "appearance-none pr-10 [&>option]:bg-panel",
                                  !form.business && "text-zinc-500",
                                  errors.business && "border-red-400/60"
                                )}
                              >
                                <option value="" disabled>
                                  Select type
                                </option>
                                <option>Clinic / Healthcare</option>
                                <option>Real Estate</option>
                                <option>Education / Coaching</option>
                                <option>Salon / Gym / Wellness</option>
                                <option>Restaurant / Café</option>
                                <option>E-commerce / D2C Brand</option>
                                <option>Professional Services</option>
                                <option>Other</option>
                              </select>
                              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-zinc-500" />
                            </div>
                            {errors.business && (
                              <p className="mt-1.5 text-[13px] text-red-300">
                                {errors.business}
                              </p>
                            )}
                          </div>

                          {/* Budget */}
                          <div>
                            <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-zinc-300">
                              Monthly budget
                            </label>
                            <div className="relative">
                              <select
                                id="budget"
                                value={form.budget}
                                onChange={(e) => update("budget", e.target.value)}
                                className={cn(
                                  inputClasses,
                                  "appearance-none pr-10 [&>option]:bg-panel",
                                  !form.budget && "text-zinc-500"
                                )}
                              >
                                <option value="" disabled>
                                  Select range
                                </option>
                                <option>Under $1,000</option>
                                <option>$1,000 – $3,000</option>
                                <option>$3,000 – $10,000</option>
                                <option>$10,000+</option>
                                <option>Not sure yet</option>
                              </select>
                              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-zinc-500" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                            What&apos;s your biggest growth challenge?{" "}
                            <span className="font-normal text-zinc-500">(optional)</span>
                          </label>
                          <textarea
                            id="message"
                            rows={3}
                            placeholder="e.g. We get visitors but not enough enquiries…"
                            value={form.message}
                            onChange={(e) => update("message", e.target.value)}
                            className={cn(inputClasses, "resize-none")}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_12px_42px_rgba(184,241,53,0.45)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-80"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Reserving your spot…
                          </>
                        ) : (
                          <>
                            Claim My Free Audit
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="mt-3.5 text-center text-xs text-zinc-500">
                        Free 30-minute strategy call included · No obligation to buy
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}