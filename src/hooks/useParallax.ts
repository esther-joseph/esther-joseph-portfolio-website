import { useEffect, useRef } from "react";

/**
 * Parallax on scroll: element moves at a fraction of scroll speed.
 * @param rate 0 = fixed, 0.5 = half speed, 1 = normal scroll. Use 0.1–0.3 for subtle depth.
 */
export function useParallax(rate: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY * rate;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [rate]);

  return ref;
}
