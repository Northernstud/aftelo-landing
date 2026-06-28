import type { ElementType, ReactNode } from "react";
import "./GradientText.css";

interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/**
 * Clips the brand gradient (purple -> pink) onto text (§5).
 * Use for hero keywords, eyebrows, and short emphasis only —
 * never long body copy, never below ~11px.
 */
export function GradientText({
  children,
  as,
  className = "",
}: GradientTextProps) {
  const Tag = (as ?? "span") as ElementType;
  return <Tag className={`gradient-text ${className}`}>{children}</Tag>;
}
