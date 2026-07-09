interface BrandMarkProps {
  size?: number;
}

/**
 * The Aftelo mark. Used in the nav and footer so the signature carries
 * everywhere, small.
 */
export function BrandMark({ size = 26 }: BrandMarkProps) {
  return (
    <img
      src="/aftelo-logo.svg"
      alt="Aftelo"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
