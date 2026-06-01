"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll controller.
 * Observes every [data-reveal] element and adds `.is-visible` when it enters
 * the viewport, triggering the fade-up transition defined in globals.css.
 * Renders nothing. No-op when the user prefers reduced motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
