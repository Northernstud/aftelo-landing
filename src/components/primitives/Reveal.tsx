import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  /** Stagger index — multiplied by the 60ms stagger token, capped. */
  index?: number;
  className?: string;
}

const STAGGER = 60;
const STAGGER_CAP = 360;

/**
 * Wraps content in the fade+slide-up reveal-on-scroll behavior (§8).
 * Pass `index` for staggered groups; delay is capped so the last item
 * never waits more than ~360ms.
 */
export function Reveal({
  children,
  as,
  index = 0,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const delay = Math.min(index * STAGGER, STAGGER_CAP);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
