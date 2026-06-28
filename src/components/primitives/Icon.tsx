import type { IconName } from "@/content/site";

interface IconProps {
  name: IconName;
  size?: number;
}

/**
 * Minimal line icons drawn with currentColor so they inherit the
 * badge's near-white tint. Stroke style keeps them quiet and uniform.
 */
const paths: Record<IconName, JSX.Element> = {
  feather: (
    <>
      <path d="M20 5c-6 0-11 4-13 10l-2 4 4-2c6-2 10-7 10-13" />
      <path d="M16 7 8 15" />
      <path d="M11 13h3" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13 11l2.5 1-2.5 1-1 2.5-1-2.5L8.5 12 11 11z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  waveform: (
    <>
      <path d="M4 12h2M9 7v10M14 9v6M19 11v2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M12 15v2" />
    </>
  ),
  moon: (
    <>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.2 6.2 0 0 0 10.5 10.5" />
    </>
  ),
};

export function Icon({ name, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
