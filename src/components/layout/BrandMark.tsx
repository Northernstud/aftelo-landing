interface BrandMarkProps {
  size?: number;
}

/**
 * The Nuvyel mark. Used in the nav and footer so the signature carries
 * everywhere, small.
 */
export function BrandMark({ size = 26 }: BrandMarkProps) {
  return (
    <img
      src="/nuvyel-logo.svg"
      alt="Nuvyel"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
