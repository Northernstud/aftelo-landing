import "./Eyebrow.css";

interface EyebrowProps {
  children: string;
  /** Render the label in brand gradient (default true). */
  gradient?: boolean;
  className?: string;
}

/**
 * Small uppercase category label that opens a section (§2, §5).
 * A short hairline tick precedes it to encode "section start".
 */
export function Eyebrow({
  children,
  gradient = true,
  className = "",
}: EyebrowProps) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="eyebrow__tick" aria-hidden="true" />
      <span className={gradient ? "eyebrow__label gradient-text" : "eyebrow__label"}>
        {children}
      </span>
    </p>
  );
}
