import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface CountUpOptions {
  /** Whether the animation is allowed to start. */
  active: boolean;
  duration?: number;
  decimals?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Animates a number from 0 -> target once `active` becomes true.
 * Used by stats (§8: stats count up over ~420ms with ease-out).
 */
export function useCountUp(
  target: number,
  { active, duration = 420, decimals = 0 }: CountUpOptions
): string {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const frame = useRef<number>();
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    if (reduced) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(target * easeOutCubic(progress));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, target, duration, reduced]);

  return value.toFixed(decimals);
}
