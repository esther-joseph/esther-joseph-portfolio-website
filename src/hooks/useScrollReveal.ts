import { useEffect, useRef } from "react";

type Options = {
  /** Fraction of element height (0–1) that must be in view to reveal. Default 0.15 */
  threshold?: number;
  /** Root margin e.g. "0px 0px -80px 0px" to trigger slightly before in view. Default "0px 0px -60px 0px" */
  rootMargin?: string;
};

/**
 * Reveal element on scroll: adds data-visible when in view for scroll-in effects.
 */
export function useScrollReveal(options: Options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).dataset.visible = entry.isIntersecting
            ? "true"
            : "false";
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
