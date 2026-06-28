interface BrandMarkProps {
  size?: number;
}

/**
 * The EchoMe mark: concentric rings around a gradient core — a 2D echo
 * of the 3D orb. Used in the nav and footer so the signature carries
 * everywhere, small.
 */
export function BrandMark({ size = 26 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="echo-mark" x1="6" y1="6" x2="26" y2="26">
          <stop offset="0" stopColor="#C953FF" />
          <stop offset="1" stopColor="#FF005E" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" stroke="url(#echo-mark)" strokeWidth="1" opacity="0.35" />
      <circle cx="16" cy="16" r="9.5" stroke="url(#echo-mark)" strokeWidth="1" opacity="0.6" />
      <circle cx="16" cy="16" r="4.5" fill="url(#echo-mark)" />
    </svg>
  );
}
