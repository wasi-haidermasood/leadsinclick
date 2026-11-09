"use client";

import { Children, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* ---------------- Item ---------------- */

export function ScrollStackItem({
  children,
  className = "",
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative w-full origin-top rounded-3xl will-change-transform ${className}`.trim()}
      style={style}
    >
      {children}
      {/* darkens the card as the next card slides over it */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black opacity-[var(--scroll-stack-dim,0)]"
      />
    </div>
  );
}

/* ---------------- Stack ---------------- */

type ScrollStackProps = {
  children?: ReactNode;
  className?: string;
  /** px from the top of the viewport where the first card pins (put it below your navbar) */
  stackTop?: number;
  /** px between pinned cards: how much of each card stays visible under the one in front */
  stackOffset?: number;
  /** px of normal page space between cards */
  itemDistance?: number;
  /** how much each covered layer shrinks */
  itemScale?: number;
  /** smallest scale a covered card can reach */
  baseScale?: number;
  /** how dark covered cards get (0 to 1) */
  dimAmount?: number;
  /** extra scroll space after the last card */
  holdDistance?: number;
};

export default function ScrollStack({
  children,
  className = "",
  stackTop = 112,
  stackOffset = 24,
  itemDistance = 100,
  itemScale = 0.04,
  baseScale = 0.9,
  dimAmount = 0.3,
  holdDistance = 160,
}: ScrollStackProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const count = items.length;

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const slots = Array.from(
        inner.querySelectorAll<HTMLElement>(":scope > [data-stack-slot]"),
      );
      if (!slots.length) return;

      const heights = slots.map((slot) => slot.offsetHeight);
      const tops = slots.map((slot) => slot.getBoundingClientRect().top);

      // depth[i] = how much card i is currently covered by the cards in front of it
      const depth = slots.map(() => 0);
      for (let j = 1; j < slots.length; j++) {
        const prev = j - 1;
        const pinnedPrev = stackTop + prev * stackOffset;
        const prevBottom = Math.max(tops[prev], pinnedPrev) + heights[prev];
        const span = Math.max(1, heights[prev] - stackOffset);
        const cover = Math.min(1, Math.max(0, (prevBottom - tops[j]) / span));
        for (let i = 0; i < j; i++) depth[i] += cover;
      }

      const dimStep = Math.min(Math.max(dimAmount, 0), 1);

      slots.forEach((slot, i) => {
        const card = slot.firstElementChild as HTMLElement | null;
        if (!card) return;
        const d = depth[i];
        const scale = Math.max(baseScale, 1 - d * itemScale);
        const dim = 1 - Math.pow(1 - dimStep, d);
        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.setProperty("--scroll-stack-dim", dim.toFixed(3));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(schedule);
    observer.observe(inner);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [stackTop, stackOffset, itemDistance, itemScale, baseScale, dimAmount, holdDistance, count]);

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div ref={innerRef} className="flex flex-col">
        {items.map((child, index) => (
          <div
            key={index}
            data-stack-slot=""
            className="sticky shrink-0"
            style={{
              top: stackTop + index * stackOffset,
              // flex items don't collapse margins, so these add up exactly
              marginTop: index === 0 ? 0 : itemDistance - (count - index) * stackOffset,
              marginBottom: (count - 1 - index) * stackOffset,
              zIndex: index + 1,
            }}
          >
            {child}
          </div>
        ))}
        {/* space that keeps the last card pinned before the section ends */}
        <div aria-hidden="true" className="shrink-0" style={{ height: holdDistance }} />
      </div>
    </div>
  );
}