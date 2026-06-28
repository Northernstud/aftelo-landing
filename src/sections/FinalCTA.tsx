import { site } from "@/content/site";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GradientText } from "@/components/primitives/GradientText";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import "./FinalCTA.css";

/**
 * Closing call to action: one glass panel, one loud solid-gradient
 * button with its pink glow, and a quiet note. The single strongest
 * moment on the page after the hero.
 */
export function FinalCTA() {
  const c = site.finalCta;
  return (
    <section className="section final-cta" id="download">
      <div className="container">
        <Reveal>
          <GlassPanel className="final-cta__panel" glow>
            <span className="final-cta__bloom" aria-hidden="true" />
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="final-cta__title">
              {c.title} <GradientText>{c.titleAccent}</GradientText>
            </h2>
            <p className="final-cta__sub">{c.sub}</p>
            <div className="final-cta__actions">
              <Button variant="solid" size="lg" href={c.primaryCta.href}>
                {c.primaryCta.label}
              </Button>
            </div>
            <p className="final-cta__note">{c.note}</p>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
