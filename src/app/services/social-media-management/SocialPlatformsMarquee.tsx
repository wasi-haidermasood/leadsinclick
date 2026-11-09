"use client";

import {
  BarChart3,
  Calendar,
  Clapperboard,
  Flame,
  Hash,
  Heart,
  Layers,
  MessageCircle,
  PenTool,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const SOCIAL_CAPABILITIES = [
  { icon: Clapperboard, name: "Instagram Reels & TikTok Editing", tag: "Retention-Hook Video" },
  { icon: Layers, name: "Editorial Carousels & Grid Curation", tag: "Save-Worthy Design" },
  { icon: PenTool, name: "LinkedIn Executive Thought Leadership", tag: "B2B Authority Posts" },
  { icon: MessageCircle, name: "ManyChat & Automated DM Funnels", tag: "Comment-to-Lead Sync" },
  { icon: Calendar, name: "30-Day Rolling Content Calendars", tag: "Zero Last-Minute Rush" },
  { icon: Heart, name: "Active Daily Community Management", tag: "Comment & Inbox Care" },
  { icon: Flame, name: "Daily Interactive Stories & Polls", tag: "Warm Audience Nurture" },
  { icon: Hash, name: "Social SEO Captions & Keyword Tags", tag: "Organic Discovery" },
  { icon: Share2, name: "YouTube Shorts Cross-Platform Sync", tag: "Omnichannel Reach" },
  { icon: Users, name: "Creator & UGC Scripting Briefs", tag: "Authentic Social Proof" },
  { icon: Sparkles, name: "Custom Brand Identity & Story Highlights", tag: "Profile Optimization" },
  { icon: BarChart3, name: "Monthly Growth & Attribution Reports", tag: "Transparent ROI" },
];

export default function SocialPlatformsMarquee() {
  const doubled = [...SOCIAL_CAPABILITIES, ...SOCIAL_CAPABILITIES];

  return (
    <section
      aria-label="Social Media Platforms and Content Capabilities"
      className="relative z-10 border-y border-white/[0.07] bg-[#090A0F]/90 py-8 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          Every platform, content format &amp; daily touchpoint handled in-house
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
                <span className="grid h-8 w-8 place-items-center rounded-xl border border-[#9884D6]/30 bg-[#9884D6]/15 text-[#B9A7F0]">
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