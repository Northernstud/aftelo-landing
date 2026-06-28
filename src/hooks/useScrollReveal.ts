import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  /** Fraction of the element visible before it triggers. */
  threshold?: number;
  /** Reveal only once, then stop observing (default true). */
  once?: boolean;
  /** Margin around the root viewport. */
  rootMargin?: string;
}

/**
 * Returns a ref + visibility flag driven by IntersectionObserver.
 * Sections use this to fade+slide content in on first appearance (§8).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const { threshold = 0.15, once = true, rootMargin = "0px 0px -10% 0px" } =
    options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IO support, or reduced motion: show immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, visible };
}
