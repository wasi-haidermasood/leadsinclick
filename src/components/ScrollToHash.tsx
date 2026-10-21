"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    if (!id) return;

    let raf = 0;
    const started = performance.now();

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (performance.now() - started > 1200) return;
      raf = requestAnimationFrame(tryScroll);
    };

    raf = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(raf);
  }, [pathname, searchParams]);

  return null;
}