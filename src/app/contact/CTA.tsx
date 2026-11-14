"use client";

import React, { useState, type FormEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Home,
  Loader2,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import Beams from "@/components/ui/Beams";

const EASE = [0.22, 1, 0.36, 1] as const;

// ✅ Formspree endpoint — form submissions go to your email
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzeeprrd";

/* -------------------------------------------------------------------------- */
/*  8-Spoke #b4f03c Asterisk Icon (Matches Reference Pill Badges)             */
/* -------------------------------------------------------------------------- */
function LimeAsteriskIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V21M3 12H21M5.63604 5.63604L18.364 18.364M18.364 5.63604L5.63604 18.364"
        stroke="#b4f03c"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const inputClasses =
  "w-full rounded-[10px] border border-[#D8EAB5] bg-[#EEF7DC] px-4 py-3.5 text-[14px] text-[#222222] placeholder:text-[#6E775F] transition-all duration-200 focus:border-[#b4f03c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b4f03c]/35";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState<string>("");

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ---- Client-side validation ----
    const next: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = "Please enter a valid email address.";
    }

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      next.phone = "Enter a valid phone / WhatsApp number.";
    }

    if (!form.service) {
      next.service = "Please select a service you're interested in.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // ---- Send to Formspree ----
    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "Not provided",
          phone: form.phone,
          service: form.service,
          message: form.message || "No additional message",
          _subject: `🚀 New Contact / Audit Request from ${form.name}`,
        }),
      });

      if (response.ok) {
        setStatus("done");
      } else {
        const data = await response.json().catch(() => ({}));
        setServerError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again or email us directly."
        );
        setStatus("error");
      }
    } catch {
      setServerError(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B] text-white"
    >
      {/* Animated Beams WebGL Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Beams
          color="#605f5fff"
          beamWidth={140}
          rotation={30}
          speed={1}
          glow={0.6}
          waveLength={233}
          depth={1}
          sharpness={0.6}
          twist={0}
          fillLight={0.3}
          brightness={1.6}
          grain={0.35}
          variation={0}
          mouseInteraction
          mouseStrength={1}
          fade={0}
          opacity={1}
          intro
          lightMode={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Top Header */}
        <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 text-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.h1
              id="cta-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Contact Us
            </motion.h1>

            {/* Breadcrumb Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md"
            >
              <Home className="h-3.5 w-3.5 text-[#b4f03c]" />
              <Link
                href="/"
                className="transition-colors hover:text-[#b4f03c]"
              >
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/50" />
              <span className="font-semibold text-white">Contact Us</span>
            </motion.div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="mx-auto max-w-[1140px] px-4 pb-20 sm:px-6 sm:pb-28">
          {/* 2-Column Grid: Left Contact Info Card + Right Form Card */}
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-8">
            {/* LEFT COLUMN: Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-[22px] border border-white/15 bg-white p-6 text-[#222222] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 lg:col-span-5"
            >
              <h2 className="text-xl font-bold tracking-tight text-[#222222] sm:text-[22px]">
                Contact Information
              </h2>

              <p className="mt-3 text-[13px] leading-relaxed text-[#6E6E6E]">
                Have questions or need help with your digital project? Our team
                is always ready to assist you with professional solutions and
                reliable support. Feel free to contact us anytime and we will
                respond as quickly as possible.
              </p>

              {/* Contact Details List */}
              <div className="mt-6 divide-y divide-[#EFEFEF]">
                {/* 1. Phone Number */}
                <div className="flex items-start gap-4 py-4 first:pt-2">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b4f03c]/25 text-[#1F2910]">
                    <Smartphone className="h-5 w-5 stroke-[1.9]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#222222]">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+19175551234"
                      className="mt-0.5 block text-[13px] text-[#6E6E6E] transition-colors hover:text-[#659600]"
                    >
                      +1 (917) 555-1234
                    </a>
                  </div>
                </div>

                {/* 2. Email Address */}
                <div className="flex items-start gap-4 py-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b4f03c]/25 text-[#1F2910]">
                    <Mail className="h-5 w-5 stroke-[1.9]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#222222]">
                      Email Address
                    </h3>
                    <a
                      href="mailto:hello@leadsinclick.com"
                      className="mt-0.5 block text-[13px] text-[#6E6E6E] transition-colors hover:text-[#659600]"
                    >
                      hello@leadsinclick.com
                    </a>
                  </div>
                </div>

                {/* 3. Opening Hour */}
                <div className="flex items-start gap-4 py-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b4f03c]/25 text-[#1F2910]">
                    <Clock className="h-5 w-5 stroke-[1.9]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#222222]">
                      Opening Hour
                    </h3>
                    <p className="mt-0.5 text-[13px] text-[#6E6E6E]">
                      Mon – Fri: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* 4. Our Location */}
                <div className="flex items-start gap-4 pt-4 pb-1">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b4f03c]/25 text-[#1F2910]">
                    <MapPin className="h-5 w-5 stroke-[1.9]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#222222]">
                      Our Location
                    </h3>
                    <p className="mt-0.5 text-[13px] text-[#6E6E6E]">
                      123 Business Street, New York
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Get In Touch Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-[24px] border border-white/15 bg-[#F7FBEF] p-6 text-[#222222] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-10 lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    role="status"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.12,
                        type: "spring",
                        stiffness: 220,
                        damping: 15,
                      }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-[#b4f03c] text-[#161616] shadow-[0_12px_35px_rgba(180,240,60,0.45)]"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.span>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl">
                      Thank you, {form.name.split(" ")[0] || "there"}!
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#666666]">
                      Your message has been received. A growth strategist from{" "}
                      <strong className="font-semibold text-[#222222]">
                        Leads in Click
                      </strong>{" "}
                      will reach out to you on{" "}
                      <strong className="font-semibold text-[#222222]">
                        {form.phone}
                      </strong>{" "}
                      within 24 working hours.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                        setErrors({});
                        setServerError("");
                      }}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b4f03c] px-6 py-2.5 text-xs font-semibold text-[#161616] shadow-sm transition hover:bg-[#a3df2b]"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-xs">
                      <LimeAsteriskIcon className="h-3.5 w-3.5" />
                      <span className="text-xs font-semibold text-[#333333]">
                        Get In Touch
                      </span>
                    </div>

                    {/* Form Heading */}
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#222222] sm:text-[34px] sm:leading-tight">
                      Get In Touch
                    </h2>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#6E6E6E]">
                      We would love to hear about your project and help you grow
                      your business online. Fill out the contact form and our
                      team will get back to you soon with the best possible
                      solution for your needs.
                    </p>

                    {/* Form Inputs Grid */}
                    <div className="mt-6 space-y-4">
                      {/* Row 1: Name + Email Address */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            aria-invalid={!!errors.name}
                            className={`${inputClasses} ${
                              errors.name ? "border-red-400" : ""
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            aria-invalid={!!errors.email}
                            className={`${inputClasses} ${
                              errors.email ? "border-red-400" : ""
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Phone Number + Service You're Interested */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            aria-invalid={!!errors.phone}
                            className={`${inputClasses} ${
                              errors.phone ? "border-red-400" : ""
                            }`}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={form.service}
                              onChange={(e) =>
                                update("service", e.target.value)
                              }
                              aria-invalid={!!errors.service}
                              className={`${inputClasses} appearance-none pr-10 ${
                                !form.service
                                  ? "text-[#6E775F]"
                                  : "text-[#222222]"
                              } ${errors.service ? "border-red-400" : ""}`}
                            >
                              <option value="" disabled>
                                Service You&apos;re Interested
                              </option>
                              <option value="Lead Generation">
                                Lead Generation
                              </option>
                              <option value="Website Development">
                                Website Development
                              </option>
                              <option value="Facebook & Instagram Ads">
                                Facebook &amp; Instagram Ads
                              </option>
                              <option value="Google Ads">
                                Google Ads (PPC)
                              </option>
                              <option value="Google My Business (GMB)">
                                Google My Business (GMB Ranking)
                              </option>
                              <option value="Social Media Management">
                                Social Media Management
                              </option>
                              <option value="Full Growth Audit">
                                Complete Digital Growth Audit
                              </option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#6E775F]" />
                          </div>
                          {errors.service && (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Message Textarea */}
                      <div>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Message"
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className={`${inputClasses} resize-y`}
                        />
                      </div>

                      {/* Honeypot field for spam protection */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Server Error Alert */}
                    {status === "error" && serverError && (
                      <div
                        className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-xs text-red-600"
                        role="alert"
                      >
                        {serverError}
                      </div>
                    )}

                    {/* Submit Pill Button (#b4f03c) with White Circular Arrow Badge */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group inline-flex items-center gap-3 rounded-full bg-[#b4f03c] py-2 pr-2 pl-5 text-xs font-semibold text-[#161616] shadow-[0_8px_25px_rgba(180,240,60,0.4)] transition-all duration-300 hover:bg-[#a3df2b] active:scale-[0.98] disabled:cursor-wait disabled:opacity-75 sm:text-[13px]"
                      >
                        {status === "loading" ? (
                          <>
                            <span>Sending...</span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#161616]">
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#161616] transition-transform duration-300 group-hover:rotate-45">
                              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* BOTTOM SECTION: Our Location + Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            className="mt-20 text-center sm:mt-24"
          >
            {/* Our Location Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <LimeAsteriskIcon className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold text-white">
                Our Location
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-[34px] sm:leading-[1.2]">
              Visit Our Office For In-person Meetings And Consultations
            </h2>

            {/* Rounded Google Maps Embed */}
            <div className="mt-8 overflow-hidden rounded-[22px] border border-white/15 bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:mt-10">
              <iframe
                title="Leads in Click Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full sm:h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}