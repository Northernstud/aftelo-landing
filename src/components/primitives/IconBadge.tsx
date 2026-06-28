import type { IconName } from "@/content/site";
import { Icon } from "./Icon";
import "./IconBadge.css";

interface IconBadgeProps {
  name: IconName;
  /** "lg" = 48px hero variant; default 34px. */
  size?: "md" | "lg";
}

/**
 * Small solid gradient square holding an icon (§6).
 * This is the ONE place a solid brand-gradient fill is allowed,
 * because it's small (<=48px).
 */
export function IconBadge({ name, size = "md" }: IconBadgeProps) {
  return (
    <span className={`icon-badge icon-badge--${size}`}>
      <Icon name={name} size={size === "lg" ? 24 : 18} />
    </span>
  );
}
