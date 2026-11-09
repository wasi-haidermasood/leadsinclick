"use client";

import {
  Activity,
  Clapperboard,
  Cpu,
  Filter,
  Flame,
  Layers,
  MessageCircle,
  Repeat,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const META_FORMATS = [
  { icon: Clapperboard, name: "Instagram & Facebook Reels Ads", tag: "High-Attention Video" },
  { icon: Cpu, name: "Meta Advantage+ AI Campaigns", tag: "Algorithmic Scaling" },
  { icon: MessageCircle, name: "Click-to-WhatsApp Lead Ads", tag: "Instant Conversations" },
  { icon: Activity, name: "Server-Side Conversions API (CAPI)", tag: "iOS17+ Proof Tracking" },
  { icon: Users, name: "1% Lookalike & High-Intent Audiences", tag: "Precision Targeting" },
  { icon: Flame, name: "Direct-Response UGC Video Hooks", tag: "In-House Creative" },
  { icon: Layers, name: "Dynamic Product & Carousel Ads", tag: "Multi-Offer Showcase" },
  { icon: Repeat, name: "Omnichannel Retargeting Sequences", tag: "Warm Buyer Recovery" },
  { icon: Smartphone, name: "Instagram Stories Interactive Polls", tag: "Thumb-Stopping UX" },
  { icon: Filter, name: "Conditional Instant Lead Forms", tag: "Pre-Qualified Prospects" },
  { icon: ShoppingBag, name: "Instagram Shop & Catalog Sales", tag: "E-Commerce ROAS" },
  { icon: Sparkles, name: "Rapid 3-2-2 Creative Testing", tag: "CPA Optimization" },
];

export default function MetaAdFormatsMarquee() {
  const doubled = [...META_FORMATS, ...META_FORMATS];

  return (
    <section
      aria-label="Meta Ad Formats and Capabilities"
      className="relative z-10 border-y border-white/[0.07] bg-[#090A0F]/90 py-8 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          Every placement, format &amp; tracking signal engineered for maximum ROAS
        </p>
      </div>

      <div className="relative mt-5 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-4 pr-4 hover:[animation-play-state:paused]">
          {doubled.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#12131C]/90 px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl border border-[#F77D9E]/25 bg-[#F77D9E]/10 text-[#F77D9E]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold whitespace-nowrap text-white">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500">
                    {item.tag}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}