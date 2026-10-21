"use client";

import { Counter, Reveal } from "./ui";

const BRANDS = [
  { name: "UrbanNest Realty", style: "font-display font-semibold tracking-tight" },
  { name: "DENTOVA", style: "font-display font-bold tracking-[0.22em]" },
  { name: "FitFuel Nutrition", style: "font-accent italic text-[22px]" },
  { name: "Skyline Interiors", style: "font-light tracking-[0.14em] uppercase text-[15px]" },
  { name: "Café Aroma+", style: "font-display font-medium" },
  { name: "EDUSPARK", style: "font-bold tracking-widest" },
  { name: "GlowSkin Clinic", style: "font-accent italic text-[22px]" },
  { name: "AutoPrime Motors", style: "font-display font-semibold italic" },
];

const STATS = [
  { value: 250, suffix: "+", label: "Brands growing with us" },
  { value: 1.2, suffix: "M+", decimals: 1, label: "Leads generated" },
  { value: 6.4, suffix: "×", decimals: 1, label: "Average return on ad spend" },
  { value: 98, suffix: "%", label: "Client retention rate" },
];

export default function SocialProof() {
  return (
    <section aria-label="Social proof" className="relative border-y border-white/[0.06] bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-zinc-500 uppercase">
            Trusted by 250+ growing brands across India
          </p>
        </Reveal>

        {/* Logo marquee */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-9 overflow-hidden"
            style={{
              maskImage:
                "radial-gradient(ellipse 90% 100% at 50% 50%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 100% at 50% 50%, black 55%, transparent 100%)",
            }}
          >
            <div className="marquee-track flex w-max animate-marquee items-center gap-14 pr-14">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span
                  key={`${brand.name}-${i}`}
                  className={`text-lg whitespace-nowrap text-zinc-500 transition-colors duration-300 hover:text-zinc-100 ${brand.style}`}
                  aria-hidden={i >= BRANDS.length}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div
                className={`text-center ${i > 0 ? "lg:border-l lg:border-white/[0.07]" : ""}`}
              >
                <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mx-auto mt-2 max-w-[180px] text-sm text-zinc-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
