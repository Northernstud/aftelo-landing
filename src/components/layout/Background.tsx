import "./Background.css";

/**
 * The page backdrop (§3): the layered "void with glow".
 *
 * Layer 1 (the page gradient) lives on <body>. This component adds
 * Layer 2 — the ambient glow blooms — distributed down the scroll so
 * each section keeps a faint glow behind its glass. Strictly decorative
 * and non-interactive.
 */
export function Background() {
  return (
    <div className="bg" aria-hidden="true">
      {/* Hero cluster */}
      <span className="bg__glow bg__glow--purple-strong bg__glow--hero-tr" />
      <span className="bg__glow bg__glow--pink bg__glow--hero-bl" />
      <span className="bg__glow bg__glow--purple-faint bg__glow--hero-ml" />

      {/* Mid-page */}
      <span className="bg__glow bg__glow--purple-strong bg__glow--mid-l" />
      <span className="bg__glow bg__glow--pink bg__glow--mid-r" />

      {/* Lower page */}
      <span className="bg__glow bg__glow--purple-faint bg__glow--low-r" />
      <span className="bg__glow bg__glow--pink bg__glow--low-l" />

      {/* extended lower page (~ about / community / contact) */}
      <span className="bg__glow bg__glow--pink bg__glow--extend-r" />
      <span className="bg__glow bg__glow--purple-faint bg__glow--extend-l" />

      {/* faint grain to keep the void from banding */}
      <span className="bg__grain" />
    </div>
  );
}
