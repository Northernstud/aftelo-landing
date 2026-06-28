import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "solid" | "outline" | "inline";
type ButtonSize = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Optional leading element (e.g. a small glyph). */
  icon?: ReactNode;
}

/**
 * The brand button patterns (§6). Rendered as an anchor since every CTA
 * here links to a section/store.
 *
 * - solid:   high-emphasis gradient CTA, glow shadow (one per section).
 * - outline: glass-outline primary, gradient-text label.
 * - inline:  small pink secondary, header-style.
 *
 * Primary CTAs (solid/outline) carry the asymmetric-corner signature
 * (bottom-right 14px / top-left 10px) — handled in CSS.
 */
export function Button({
  variant = "solid",
  size = "md",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...rest}>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
    </a>
  );
}
