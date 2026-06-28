import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  /** Center the block (default) or align left. */
  align?: "center" | "left";
}

/**
 * Standard section opener: eyebrow + heading + optional sub-line,
 * revealed as a small staggered group.
 */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Reveal index={0}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <h2 className="section-heading__title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal index={2}>
          <p className="section-heading__sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
