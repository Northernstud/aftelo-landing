import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Normalized pointer position in [-1, 1] for x and y, relative to the
 * viewport center. Drives subtle parallax (the floating phone tilt and
 * the 3D orb's drift). Smoothed and disabled under reduce-motion.
 */
export function usePointerParallax() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    if (reduced) {
      setPos({ x: 0, y: 0 });
      return;
    }

    const onMove = (e: PointerEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    const loop = () => {
      // critically-damped-ish smoothing toward the target
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      setPos({ x: current.current.x, y: current.current.y });
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduced]);

  return pos;
}
