import { forwardRef } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import "./GlassPanel.css";

type GlassVariant = "card" | "nav" | "light";

interface GlassPanelProps extends HTMLAttributes<HTMLElement> {
  variant?: GlassVariant;
  /** Render as a different element (e.g. "nav", "section", "article"). */
  as?: ElementType;
  /** Add the colored active/featured bloom shadow. */
  glow?: boolean;
  children?: ReactNode;
}

/**
 * The core brand motif: a single frosted-glass surface (§4).
 *
 * Backdrop blur + low-opacity white fill + hairline border + soft shadow.
 * NEVER nest a GlassPanel inside another GlassPanel — one blur layer max.
 * Use plain transparent content inside, or `--surface-deep` for solids.
 */
export const GlassPanel = forwardRef<HTMLElement, GlassPanelProps>(
  function GlassPanel(
    { variant = "card", as, glow = false, className = "", children, ...rest },
    ref
  ) {
    const Tag = (as ?? "div") as ElementType;
    const classes = [
      "glass",
      `glass--${variant}`,
      glow ? "glass--glow" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Tag ref={ref} className={classes} {...rest}>
        {children}
      </Tag>
    );
  }
);
