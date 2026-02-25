"use client";

import { useEffect } from "react";

const DEPTH_MILESTONES = [25, 50, 75, 100];

export default function PlaybookAnalytics() {
  useEffect(() => {
    const reached = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of DEPTH_MILESTONES) {
        if (pct >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          window.plausible?.("Playbook Scroll Depth", {
            props: { depth: `${milestone}%` },
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
