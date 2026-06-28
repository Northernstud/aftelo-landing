import { lazy, Suspense } from "react";
import { site } from "@/content/site";
import { GradientText } from "@/components/primitives/GradientText";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import "./Hero.css";

// The WebGL scene is heavy (Three.js); load it after the hero copy paints.
const EchoScene = lazy(() =>
  import("@/components/three/EchoScene").then((m) => ({ default: m.EchoScene }))
);

/**
 * The hero is the thesis: the brand's monospace voice on the left, and
 * "Echo" itself — the refractive glass orb — floating on the right. Copy
 * fades up in one orchestrated load sequence (staggered via CSS delay).
 */
export function Hero() {
  const h = site.hero;
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__line" style={{ animationDelay: "80ms" }}>
            <Eyebrow>{h.eyebrow}</Eyebrow>
          </div>

          <h1 className="hero__title">
            <span className="hero__line" style={{ animationDelay: "160ms" }}>
              {h.headlineLead}
            </span>{" "}
            <span className="hero__line" style={{ animationDelay: "260ms" }}>
              <GradientText>{h.headlineAccent}</GradientText>
            </span>
          </h1>

          <p className="hero__sub hero__line" style={{ animationDelay: "380ms" }}>
            {h.sub}
          </p>

          <div className="hero__actions hero__line" style={{ animationDelay: "480ms" }}>
            <Button variant="solid" size="lg" href={h.primaryCta.href}>
              {h.primaryCta.label}
            </Button>
            <Button variant="outline" size="lg" href={h.secondaryCta.href}>
              {h.secondaryCta.label}
            </Button>
          </div>

          <p className="hero__note hero__line" style={{ animationDelay: "580ms" }}>
            {h.note}
          </p>
        </div>

        <div className="hero__visual hero__line" style={{ animationDelay: "240ms" }}>
          <Suspense fallback={<div className="hero__visual-fallback" />}>
            <EchoScene />
          </Suspense>
        </div>
      </div>

      <a className="hero__scroll" href="#how" aria-label="Scroll to how it works">
        <span className="hero__scroll-label">scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
