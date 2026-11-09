"use client";

import Beams from "./ui/Beams";
import { memo, useEffect, useRef } from "react";
import type {
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { EASE } from "./ui";

type ServiceId = "seo" | "ads" | "web" | "lead" | "strategy";

type ServiceCardData = {
  id: ServiceId;
  title: string;
  description: string;
  kicker: string;
  background: string;
  textClass: string;
  mutedClass: string;
  dotClass: string;
  arrowClass: string;
};

const SERVICES: ServiceCardData[] = [
  {
    id: "seo",
    title: "SEO Growth",
    description: "Build authority that compounds.",
    kicker: "01 / ORGANIC",
    background:
      "linear-gradient(145deg, #8977C6 0%, #7963B9 56%, #6B55A6 100%)",
    textClass: "text-white",
    mutedClass: "text-white/70",
    dotClass: "bg-[#BAF235]",
    arrowClass: "border-white/25 bg-white/15 text-white",
  },
  {
    id: "ads",
    title: "Paid Advertising",
    description: "Turn ad spend into momentum.",
    kicker: "02 / PERFORMANCE",
    background:
      "linear-gradient(145deg, #F77D9E 0%, #F26B91 56%, #E25E84 100%)",
    textClass: "text-[#321521]",
    mutedClass: "text-[#321521]/70",
    dotClass: "bg-[#321521]",
    arrowClass: "border-black/10 bg-black/10 text-[#321521]",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Digital experiences that convert.",
    kicker: "03 / EXPERIENCE",
    background:
      "linear-gradient(145deg, #42CED3 0%, #16B8C5 54%, #0FA4B2 100%)",
    textClass: "text-[#07343A]",
    mutedClass: "text-[#07343A]/70",
    dotClass: "bg-[#07343A]",
    arrowClass: "border-black/10 bg-black/10 text-[#07343A]",
  },
  {
    id: "lead",
    title: "Lead Generation",
    description: "Make every click a conversation.",
    kicker: "04 / CONVERSION",
    background:
      "linear-gradient(145deg, #A5F08C 0%, #8DEB68 55%, #78D75B 100%)",
    textClass: "text-[#122517]",
    mutedClass: "text-[#122517]/70",
    dotClass: "bg-[#122517]",
    arrowClass: "border-black/10 bg-black/10 text-[#122517]",
  },
  {
    id: "strategy",
    title: "Digital Strategy",
    description: "One clear path to growth.",
    kicker: "05 / DIRECTION",
    background:
      "linear-gradient(145deg, #7388F2 0%, #536DEB 57%, #455FDC 100%)",
    textClass: "text-white",
    mutedClass: "text-white/70",
    dotClass: "bg-[#BAF235]",
    arrowClass: "border-white/25 bg-white/15 text-white",
  },
];

// Repeat the 5 services 3 times (15 cards total) so the full 360° wheel
// is seamlessly populated like the reference arch.
const WHEEL_ITEMS = Array.from({ length: 15 }, (_, index) => ({
  slotIndex: index,
  card: SERVICES[index % SERVICES.length],
}));

const WHEEL_STEP = 360 / WHEEL_ITEMS.length; // 24° between cards

const POINTER_SPRING = {
  stiffness: 55,
  damping: 22,
  mass: 0.7,
};

const WHEEL_SPRING = {
  stiffness: 110,
  damping: 24,
  mass: 0.9,
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const normalizeAngleDelta = (delta: number) => {
  let d = (((delta + 180) % 360) + 360) % 360 - 180;
  if (d === -180) d = 180;
  return d;
};

function CardArtwork({ id }: { id: ServiceId }) {
  switch (id) {
    case "seo":
      return (
        <div
          className="pointer-events-none absolute inset-x-5 bottom-4 h-[158px]"
          aria-hidden="true"
        >
          <div className="absolute right-0 bottom-0 w-[69%] rotate-[-3deg] rounded-2xl border border-white/20 bg-[#30234F]/90 p-3 shadow-xl">
            <div className="flex items-center justify-between text-[7px] font-bold tracking-[0.14em] text-white/70">
              <span>ORGANIC VISIBILITY</span>
              <span className="text-[#BAF235]">+42%</span>
            </div>
            <svg
              viewBox="0 0 190 66"
              className="mt-2 h-[58px] w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M4 57 C26 51 34 44 52 48 S77 38 94 39 S118 43 136 24 S163 22 186 7"
                fill="none"
                stroke="rgba(255,255,255,.92)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M4 57 C26 51 34 44 52 48 S77 38 94 39 S118 43 136 24 S163 22 186 7 L186 66 L4 66Z"
                fill="rgba(255,255,255,.12)"
              />
              <circle cx="136" cy="24" r="3.5" fill="#BAF235" />
            </svg>
          </div>

          <div className="absolute top-3 left-1 grid h-[96px] w-[96px] place-items-center rounded-full border border-white/70 bg-gradient-to-br from-white via-[#D6CAFA] to-[#8371B9] shadow-[inset_-8px_-9px_14px_rgba(49,34,88,0.25),0_18px_30px_rgba(35,24,67,0.34)] rotate-[-12deg]">
            <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full border border-white/60 bg-white/35 text-[#342751] shadow-inner">
              <span className="text-[21px] font-extrabold tracking-[-0.08em]">
                01
              </span>
              <span className="text-[6px] font-extrabold tracking-[0.18em]">
                RANK
              </span>
            </div>
            <span className="absolute right-0 bottom-[-34px] h-[50px] w-[17px] rounded-full border border-white/40 bg-gradient-to-r from-[#7664AD] to-[#4C3E77] shadow-lg rotate-[-35deg]" />
          </div>
        </div>
      );

    case "ads":
      return (
        <div
          className="pointer-events-none absolute inset-x-5 bottom-4 h-[158px]"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 left-1 h-[137px] w-[126px] overflow-hidden rounded-[15px] border border-white/20 bg-gradient-to-br from-[#211A46] via-[#392761] to-[#62437B] p-3 text-white shadow-xl rotate-[-7deg]">
            <span className="text-[6px] font-bold tracking-[0.18em] text-white/65">
              YOUR NEXT
            </span>
            <span className="absolute top-5 right-[-16px] h-[72px] w-[72px] rounded-full bg-gradient-to-br from-[#FFD38F] via-[#FF9B8C] to-[#E96688] shadow-lg" />
            <span className="relative mt-4 block text-[23px] leading-[0.82] font-extrabold tracking-[-0.08em]">
              MAKE
              <br />
              SOME
              <br />
              NOISE
            </span>
            <span className="absolute top-[55px] right-4 text-sm text-[#BAF235]">
              ✦
            </span>
            <span className="absolute bottom-3 left-3 text-[6px] font-bold tracking-[0.17em] text-white/65">
              BUILT TO CONVERT
            </span>
          </div>

          <div className="absolute top-1 left-[118px] grid h-[50px] w-[50px] place-items-center rounded-full border border-white/70 bg-gradient-to-br from-[#FFE4A4] to-[#FF998A] shadow-lg rotate-[8deg]">
            <span className="ml-1 h-0 w-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#31203E]" />
          </div>

          <div className="absolute right-0 bottom-3 w-[148px] rotate-[5deg] rounded-[14px] border border-white/70 bg-[#FFF9F7] p-3 shadow-xl">
            <div className="text-[6px] font-extrabold tracking-[0.16em] text-[#4D4051]/65">
              CAMPAIGN / 04
            </div>
            <div className="mt-1 text-[25px] leading-none font-extrabold tracking-[-0.08em] text-[#24182C]">
              4.8×
            </div>
            <div className="mt-2 flex items-end justify-between text-[6px] font-semibold text-[#4D4051]/70">
              <span>return on spend</span>
              <span className="flex h-3 items-end gap-[2px]">
                <i className="h-1 w-1 rounded-sm bg-[#8DEB68]" />
                <i className="h-1.5 w-1 rounded-sm bg-[#8DEB68]" />
                <i className="h-2 w-1 rounded-sm bg-[#8DEB68]" />
                <i className="h-3 w-1 rounded-sm bg-[#8DEB68]" />
              </span>
            </div>
          </div>
        </div>
      );

    case "web":
      return (
        <div
          className="pointer-events-none absolute inset-x-5 bottom-4 h-[170px]"
          aria-hidden="true"
        >
          <div className="absolute top-2 left-0 h-[146px] w-[79%] rotate-[-1deg] overflow-hidden rounded-[14px] border border-white/25 bg-[#142F33] p-2 shadow-[0_18px_30px_rgba(12,62,67,0.28)]">
            <div className="flex h-[17px] items-center justify-between px-1 pb-1">
              <span className="flex gap-[3px]">
                <i className="h-1 w-1 rounded-full bg-[#F17B8C]" />
                <i className="h-1 w-1 rounded-full bg-[#F4C46A]" />
                <i className="h-1 w-1 rounded-full bg-[#8DEB68]" />
              </span>
              <span className="w-[68%] rounded-full bg-white/10 px-2 py-[2px] text-center text-[5px] text-white/65">
                leadsinclick.com
              </span>
            </div>

            <div className="relative h-[calc(100%-17px)] overflow-hidden rounded-[8px] bg-[#EDF4EE] text-[#153237]">
              <div className="absolute top-2 right-2 left-2 flex items-center justify-between">
                <strong className="text-[7px] font-extrabold tracking-[-0.08em]">
                  LIC.
                </strong>
                <span className="text-[4px] font-bold tracking-[0.12em] text-[#153237]/60">
                  WORK&nbsp;&nbsp; ABOUT
                </span>
              </div>

              <div className="absolute top-8 left-3 z-10 text-[18px] leading-[0.9] font-semibold tracking-[-0.08em]">
                Ideas into
                <br />
                <b className="font-extrabold text-[#138D8F]">impact.</b>
              </div>

              <div className="absolute top-[74px] left-3 h-[3px] w-[58px] rounded-full bg-[#153237]/15" />
              <div className="absolute bottom-2.5 left-3 rounded-full bg-[#122E33] px-2 py-1 text-[4px] font-bold tracking-[0.08em] text-white">
                EXPLORE
              </div>
              <div className="absolute right-2 bottom-[-9px] h-[84px] w-[70px] rotate-[10deg] rounded-t-[45%] bg-gradient-to-br from-[#46C9C6] via-[#16878E] to-[#18565D] shadow-inner">
                <span className="absolute top-4 left-[-10px] h-8 w-8 rounded-full bg-gradient-to-br from-[#FFB491] to-[#ED758D]" />
                <span className="absolute right-[-4px] bottom-2 h-5 w-9 rotate-[-25deg] rounded-full bg-[#BAF235]/60" />
              </div>
            </div>
          </div>

          <div className="absolute top-5 right-0 z-10 h-[136px] w-[62px] rotate-[8deg] rounded-[17px] border border-white/55 bg-gradient-to-br from-[#31474A] to-[#111C1F] p-[5px] shadow-[0_17px_27px_rgba(13,54,59,0.32)]">
            <div className="relative h-full overflow-hidden rounded-[12px] bg-gradient-to-br from-[#F3F0E7] to-[#D9ECE5] text-[#14363A]">
              <span className="absolute top-1 left-1/2 h-[5px] w-[22px] -translate-x-1/2 rounded-full bg-[#233538]" />
              <span className="absolute top-4 left-2 text-[6px] font-extrabold tracking-[-0.08em]">
                LIC.
              </span>
              <span className="absolute top-9 left-2 text-[11px] leading-[0.95] font-extrabold tracking-[-0.08em]">
                Grow
                <br />
                with intent.
              </span>
              <span className="absolute right-1 bottom-4 h-10 w-9 rounded-t-[50%] bg-gradient-to-br from-[#31C4C2] to-[#126C75]">
                <i className="absolute top-1 left-[-4px] h-3.5 w-3.5 rounded-full bg-[#BAF235]" />
              </span>
              <span className="absolute bottom-3 left-2 h-[3px] w-6 rounded-full bg-[#14363A]/25" />
              <span className="absolute bottom-1 left-2 h-[3px] w-4 rounded-full bg-[#14363A]/25" />
            </div>
          </div>

          <div className="absolute bottom-0 left-6 z-20 flex h-[34px] min-w-[92px] rotate-[-3deg] items-center gap-2 rounded-xl border border-white/55 bg-[#BAF235] px-2.5 text-[#12282A] shadow-lg">
            <strong className="text-[14px] font-extrabold tracking-[-0.07em]">
              +38%
            </strong>
            <span className="max-w-[38px] text-[5px] leading-tight font-extrabold tracking-[0.1em]">
              CONVERSION
            </span>
          </div>
        </div>
      );

    case "lead":
      return (
        <div
          className="pointer-events-none absolute inset-x-5 bottom-4 h-[160px]"
          aria-hidden="true"
        >
          <div className="absolute bottom-1 left-0 h-[106px] w-[148px] rotate-[-6deg] rounded-[14px] border border-white/65 bg-[#F4FFED]/90 p-3 shadow-lg">
            <div className="flex items-center justify-between text-[6px] font-extrabold tracking-[0.15em] text-[#142B1A]/65">
              <span>NEW LEADS</span>
              <i className="h-[5px] w-[5px] rounded-full bg-[#54BC52] shadow-[0_0_0_3px_rgba(84,188,82,0.14)]" />
            </div>
            <div className="mt-1 text-[25px] leading-none font-extrabold tracking-[-0.09em] text-[#15251A]">
              142
            </div>
            <div className="mt-1 text-[6px] font-semibold text-[#142B1A]/60">
              <span className="font-extrabold text-[#268C43]">↗ 18.6%</span>{" "}
              this week
            </div>
            <div className="mt-2 flex items-center">
              <i className="h-[17px] w-[17px] rounded-full border border-[#EFF9E9] bg-gradient-to-br from-[#EDB38B] to-[#B36D54]" />
              <i className="-ml-1 h-[17px] w-[17px] rounded-full border border-[#EFF9E9] bg-gradient-to-br from-[#82C9BC] to-[#317A73]" />
              <i className="-ml-1 h-[17px] w-[17px] rounded-full border border-[#EFF9E9] bg-gradient-to-br from-[#D5A2D1] to-[#765388]" />
              <span className="ml-1 rounded-full bg-[#D9EDCF] px-1.5 py-1 text-[5px] font-extrabold text-[#25412B]">
                +12
              </span>
            </div>
          </div>

          <div className="absolute top-0 right-4 h-[145px] w-[105px] rotate-[4deg]">
            <div className="absolute top-2 left-0 z-10 h-[31px] w-[105px] rounded-[50%] border border-white/75 bg-gradient-to-br from-[#F7FFED] via-[#D4F7BD] to-[#9CDA81] shadow-lg" />
            <div
              className="absolute top-5 left-[7px] h-[82px] w-[91px] bg-gradient-to-r from-[#276D45] via-[#60C867] to-[#1D6944] drop-shadow-lg"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 66% 76%, 66% 100%, 35% 100%, 35% 76%)",
              }}
            >
              <span className="absolute top-0 right-4 h-[68px] w-[18px] skew-y-[34deg] bg-white/20" />
            </div>
            <div className="absolute top-[91px] left-[41px] h-[34px] w-6 rounded-b-lg bg-gradient-to-r from-[#205B3C] via-[#69CE68] to-[#266D45] shadow-md" />
            <span className="absolute top-10 right-0 z-20 text-sm text-white drop-shadow">
              ✦
            </span>
          </div>
        </div>
      );

    case "strategy":
      return (
        <div
          className="pointer-events-none absolute inset-x-5 bottom-4 h-[160px]"
          aria-hidden="true"
        >
          <div
            className="absolute right-0 bottom-1 left-0 h-[128px] rotate-[-2deg] overflow-hidden rounded-[15px] border border-white/25 shadow-lg"
            style={{
              backgroundColor: "rgba(28, 42, 112, .58)",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="absolute top-4 left-4 h-[94px] w-[94px] rounded-full border border-white/55 bg-[#1A2C7E]/30">
              <span className="absolute inset-[15px] rounded-full border border-white/25" />
              <span className="absolute inset-[32px] rounded-full border border-white/25" />
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/25" />
              <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white/25" />
              <span className="absolute top-[25px] right-[20px] h-[7px] w-[7px] rounded-full border border-white/70 bg-[#BAF235] shadow-[0_0_12px_rgba(186,242,53,.75)]" />
              <span className="absolute top-1 left-[46px] h-11 w-px origin-bottom rotate-[38deg] bg-gradient-to-t from-[#BAF235] to-transparent" />
            </div>

            <div className="absolute top-7 right-4 flex w-[108px] flex-col gap-3">
              {[
                ["01", "DISCOVER"],
                ["02", "FOCUS"],
                ["03", "GROW"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-2 text-[6px] font-extrabold tracking-[0.14em] text-white/85"
                >
                  <span className="grid h-[18px] w-[18px] place-items-center rounded-full border border-white/45 text-[6px] tracking-normal text-[#BAF235]">
                    {number}
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 right-6 z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-white/70 bg-gradient-to-br from-[#C7F974] via-[#8DEB68] to-[#6FC953] shadow-lg rotate-[12deg]">
            <span className="h-0 w-0 border-r-[7px] border-b-[20px] border-l-[7px] border-r-transparent border-l-transparent border-b-[#243D63] rotate-[20deg]" />
          </div>
        </div>
      );
  }
}

const WheelCard = memo(function WheelCard({
  card,
  slotIndex,
  reducedMotion,
  onSelectSlot,
}: {
  card: ServiceCardData;
  slotIndex: number;
  reducedMotion: boolean;
  onSelectSlot: (slotIndex: number) => void;
}) {
  const angle = slotIndex * WHEEL_STEP;

  return (
    <div
      role="listitem"
      className="pointer-events-none absolute top-1/2 left-1/2 h-0 w-0"
      style={{
        transform: `rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius))) scale(var(--card-scale))`,
      }}
    >
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <motion.article
          onClick={() => onSelectSlot(slotIndex)}
          className="group pointer-events-auto relative isolate h-[324px] w-[294px] cursor-grab rounded-[28px] border border-white/25 p-0 shadow-[0_24px_60px_rgba(0,0,0,0.42),0_7px_18px_rgba(0,0,0,0.2)] active:cursor-grabbing"
          style={{ background: card.background }}
          whileHover={
            reducedMotion
              ? undefined
              : {
                  y: -12,
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                  },
                }
          }
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] opacity-0 shadow-[0_40px_86px_rgba(0,0,0,.55),0_10px_26px_rgba(0,0,0,.25)] transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] p-5 text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/[0.03] to-black/10" />

            <div className="relative z-10 pr-10">
              <p
                className={`flex items-center gap-2 text-[8px] font-extrabold tracking-[0.16em] ${card.mutedClass}`}
              >
                <span
                  className={`h-[5px] w-[5px] rounded-full ${card.dotClass}`}
                />
                {card.kicker}
              </p>
              <h2
                className={`mt-2 font-display text-[20px] leading-tight font-bold tracking-[-0.055em] ${card.textClass}`}
              >
                {card.title}
              </h2>
              <p
                className={`mt-1 text-[11px] font-medium tracking-[-0.015em] ${card.mutedClass}`}
              >
                {card.description}
              </p>
            </div>

            <span
              className={`absolute top-5 right-5 z-10 grid h-[28px] w-[28px] place-items-center rounded-full border ${card.arrowClass}`}
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>

            <CardArtwork id={card.id} />

            <div className="absolute inset-0 rounded-[inherit] border border-white/10" />
          </div>
        </motion.article>
      </div>
    </div>
  );
});

function ServiceArchWheel({
  pointerX,
  reducedMotion,
}: {
  pointerX: MotionValue<number>;
  reducedMotion: boolean;
}) {
  // Start with Web Development (slotIndex 2) centered at the top of the arch.
  const rotationTarget = useMotionValue(-2 * WHEEL_STEP);
  const smoothRotation = useSpring(rotationTarget, WHEEL_SPRING);

  // Subtle mouse-move reaction blended with user drag/scroll rotation.
  const pointerTilt = useTransform(pointerX, [-1, 1], [-4.5, 4.5]);
  const combinedRotation = useTransform(
    [smoothRotation, pointerTilt],
    ([rot, tilt]) => (rot as number) + (reducedMotion ? 0 : (tilt as number)),
  );

  const pivotRef = useRef<HTMLDivElement>(null);
  const wheelSnapTimeoutRef = useRef<number | null>(null);

  const dragStateRef = useRef<{
    pointerId: number;
    lastAngle: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    return () => {
      if (wheelSnapTimeoutRef.current !== null) {
        window.clearTimeout(wheelSnapTimeoutRef.current);
      }
    };
  }, []);

  const snapToNearestCard = () => {
    const snapped =
      Math.round(rotationTarget.get() / WHEEL_STEP) * WHEEL_STEP;
    rotationTarget.set(snapped);
  };

  const rotateBySteps = (steps: number) => {
    const snapped =
      Math.round(rotationTarget.get() / WHEEL_STEP) * WHEEL_STEP;
    rotationTarget.set(snapped + steps * WHEEL_STEP);
  };

  const handleSelectSlot = (slotIndex: number) => {
    if (dragStateRef.current?.moved) return;

    const current = rotationTarget.get();
    const targetCardAngle = -slotIndex * WHEEL_STEP;
    const shortestDelta = normalizeAngleDelta(targetCardAngle - current);

    rotationTarget.set(current + shortestDelta);
  };

  const getPointerAngle = (clientX: number, clientY: number) => {
    const pivot = pivotRef.current;
    if (!pivot) return 0;

    const rect = pivot.getBoundingClientRect();
    const centerX = rect.left + rect.width * 0.5;
    const centerY = rect.top + rect.height * 0.5;

    return (
      (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI
    );
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragStateRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const didMove = drag.moved;
    dragStateRef.current = null;

    if (didMove) {
      snapToNearestCard();
    }
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (!delta) return;

    event.preventDefault();
    rotationTarget.set(rotationTarget.get() - delta * 0.14);

    if (wheelSnapTimeoutRef.current !== null) {
      window.clearTimeout(wheelSnapTimeoutRef.current);
    }

    wheelSnapTimeoutRef.current = window.setTimeout(() => {
      snapToNearestCard();
    }, 160);
  };

  return (
    <>
      {/* Arch Wheel Viewport */}
      <motion.div
        role="group"
        aria-label="Interactive services wheel. Drag, scroll, or use the arrow keys to rotate."
        tabIndex={0}
        className="pointer-events-none absolute inset-0 z-[4] overflow-hidden select-none focus-visible:outline-none"
        initial={
          reducedMotion ? false : { opacity: 0, scale: 0.92, y: 40 }
        }
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.25, ease: EASE }}
        onPointerDown={(event) => {
          if (event.button !== 0 && event.pointerType !== "touch") return;

          dragStateRef.current = {
            pointerId: event.pointerId,
            lastAngle: getPointerAngle(event.clientX, event.clientY),
            moved: false,
          };

          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const drag = dragStateRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;

          const nextAngle = getPointerAngle(event.clientX, event.clientY);
          const deltaAngle = normalizeAngleDelta(nextAngle - drag.lastAngle);

          if (Math.abs(deltaAngle) > 0.25) {
            drag.moved = true;
          }

          drag.lastAngle = nextAngle;
          rotationTarget.set(rotationTarget.get() + deltaAngle * 1.15);
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={() => {
          dragStateRef.current = null;
        }}
        onWheel={handleWheel}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            rotateBySteps(-1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            rotateBySteps(1);
          }
        }}
      >
        {/* Center of the Ferris-wheel arch (moved up on mobile via max-[768px]:top-[520px]) */}
        <div
          ref={pivotRef}
          className="pointer-events-none absolute left-1/2 top-[840px] h-0 w-0 [--card-scale:0.7] [--wheel-radius:590px] max-[1200px]:top-[790px] max-[1200px]:[--card-scale:0.6] max-[1200px]:[--wheel-radius:490px] max-[768px]:top-[520px] max-[768px]:[--card-scale:0.48] max-[768px]:[--wheel-radius:340px]"
        >
          {/* Subtle glowing ring behind the cards */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-[calc(var(--wheel-radius)*2)] w-[calc(var(--wheel-radius)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] shadow-[0_0_120px_rgba(186,242,53,0.06)]"
            aria-hidden="true"
          />

          <motion.div
            role="list"
            aria-label="Digital growth services"
            className="pointer-events-none absolute top-0 left-0 h-0 w-0 will-change-transform"
            style={{ rotate: combinedRotation }}
          >
            {WHEEL_ITEMS.map(({ slotIndex, card }) => (
              <WheelCard
                key={`${card.id}-${slotIndex}`}
                card={card}
                slotIndex={slotIndex}
                reducedMotion={reducedMotion}
                onSelectSlot={handleSelectSlot}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Wheel rotation controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Rotate wheel left"
          onClick={() => rotateBySteps(1)}
          className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition hover:border-[#BAF235]/70 hover:text-[#BAF235] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BAF235]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[9px] font-bold tracking-[0.18em] text-white/60 backdrop-blur-md">
          DRAG OR SCROLL WHEEL
        </span>

        <button
          type="button"
          aria-label="Rotate wheel right"
          onClick={() => rotateBySteps(-1)}
          className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition hover:border-[#BAF235]/70 hover:text-[#BAF235] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BAF235]"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const targetX = useMotionValue(0);
  const pointerX = useSpring(targetX, POINTER_SPRING);

  useEffect(() => {
    const invalidate = () => {
      rectRef.current = null;
    };

    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);

    return () => {
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
    };
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;

    const section = sectionRef.current;
    if (!section) return;

    if (!rectRef.current) {
      rectRef.current = section.getBoundingClientRect();
    }

    const rect = rectRef.current;
    if (!rect.width) return;

    targetX.set(
      clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),
    );
  };

  const handlePointerLeave = () => {
    targetX.set(0);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate h-[100svh] min-h-[900px] overflow-hidden bg-[#0B0B0B] pt-[72px] text-[#F5F5F5] max-[1200px]:min-h-[850px] max-[768px]:h-auto max-[768px]:min-h-[650px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reducedMotion ? 0.25 : 1, ease: EASE }}
    >
      {/* Beams background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Beams
          className="pointer-events-none"
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

      {/* Ambient light and grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 52% 34% at 50% 24%, rgba(186,242,53,.075), transparent 72%), radial-gradient(ellipse 56% 42% at 50% 78%, rgba(22,184,197,.11), transparent 72%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Interactive Circular Arch of Service Cards */}
      <ServiceArchWheel pointerX={pointerX} reducedMotion={reducedMotion} />

      {/* Center Hero Copy nested inside the arch */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[760px] flex-col items-center justify-end px-5 pb-[82px] text-center max-[1200px]:max-w-[640px] max-[768px]:justify-start max-[768px]:pt-[215px] max-[768px]:pb-[86px] sm:px-8">
        <motion.p
          className="mb-3.5 flex items-center gap-2 text-[10px] font-bold tracking-[0.19em] text-white/70 sm:text-[11px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        >
          <span className="text-[14px] text-[#BAF235]" aria-hidden="true">
            ✦
          </span>
          DIGITAL GROWTH PARTNER
        </motion.p>

        <h1
          id="hero-title"
          className="font-display text-[clamp(2rem,5.4vw,4.1rem)] leading-[0.98] font-semibold tracking-[-0.07em]"
        >
          <span className="mb-[-0.08em] block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block whitespace-nowrap"
              initial={{ opacity: 0, y: reducedMotion ? 0 : "110%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.18, ease: EASE }}
            >
              Turn Your <span className="text-[#BAF235]">Vision</span> Into
            </motion.span>
          </span>
          <span className="mb-[-0.08em] block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block whitespace-nowrap"
              initial={{ opacity: 0, y: reducedMotion ? 0 : "110%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.34, ease: EASE }}
            >
              Digital <span className="text-[#BAF235]">Growth.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-4 max-w-[520px] text-[13px] leading-relaxed text-white/65 sm:text-[14px]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
        >
          We build powerful digital experiences, generate qualified leads, and
          help ambitious businesses turn clicks into customers.
        </motion.p>

        <motion.a
          href="/contact"
          className="group pointer-events-auto mt-6 inline-flex min-h-[46px] items-center gap-3.5 rounded-full border border-white/70 bg-[#F5F5F5] py-1.5 pr-1.5 pl-5 text-[13px] font-bold tracking-[-0.02em] text-[#101210] shadow-[0_8px_26px_rgba(0,0,0,0.28)]"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72, ease: EASE }}
          whileHover={reducedMotion ? undefined : { scale: 1.045, y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        >
          <span>Get Started</span>
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#BAF235]">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
          </span>
        </motion.a>

        {/* Three-column highlights under the CTA */}
        <motion.div
          className="mt-7 grid w-full max-w-[620px] grid-cols-3 divide-x divide-white/10 text-center max-[640px]:hidden"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.86, ease: EASE }}
        >
          <div className="px-4">
            <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
              Measurable ROI
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/50">
              Campaigns engineered to compound revenue
            </p>
          </div>
          <div className="px-4">
            <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
              Fast Execution
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/50">
              Launch high-converting funnels in weeks
            </p>
          </div>
          <div className="px-4">
            <p className="text-[12px] font-bold tracking-[-0.02em] text-white/90">
              Full-Funnel Growth
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/50">
              SEO, paid media, web, and strategy unified
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}