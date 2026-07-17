import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import "./Button.css";

type ButtonVariant = "solid" | "outline" | "inline";
type ButtonSize = "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Optional leading element (e.g. a small glyph). */
  icon?: ReactNode;
}

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };
type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

type ButtonProps = AnchorProps | NativeButtonProps;

/**
 * The brand button patterns (§6). Renders as an anchor by default (every CTA
 * links to a section/store); pass `as="button"` for real buttons — e.g. a
 * form's submit — so form controls get the same look without an anchor.
 *
 * - solid:   high-emphasis gradient CTA, glow shadow (one per section).
 * - outline: glass-outline primary, gradient-text label.
 * - inline:  small pink secondary, header-style.
 *
 * Primary CTAs (solid/outline) carry the asymmetric-corner signature
 * (bottom-right 14px / top-left 10px) — handled in CSS.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "solid",
    size = "md",
    icon,
    children,
    className = "",
  } = props;

  const classes = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
    </>
  );

  if (props.as === "button") {
    const { as: _as, variant: _v, size: _s, icon: _i, children: _c, className: _cn, ...rest } =
      props;
    return (
      <button className={classes} {...rest}>
        {inner}
      </button>
    );
  }

  const { as: _as, variant: _v, size: _s, icon: _i, children: _c, className: _cn, ...rest } =
    props;
  return (
    <a className={classes} {...rest}>
      {inner}
    </a>
  );
}
