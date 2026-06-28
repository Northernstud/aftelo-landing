import { site } from "@/content/site";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GradientText } from "@/components/primitives/GradientText";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { Reveal } from "@/components/primitives/Reveal";
import "./EchoStory.css";

/**
 * The intimate beat: Echo as your future self. Quiet, lots of negative
 * space, a single glowing accent (the orb echo) and one pull-quote that
 * shows Echo reading the user back. Deliberately the calmest section.
 */
export function EchoStory() {
  const e = site.echo;
  return (
    <section className="section echo-story" id="echo">
      <div className="container echo-story__inner">
        <Reveal index={0} className="echo-story__halo-wrap">
          <span className="echo-story__halo" aria-hidden="true" />
        </Reveal>

        <Reveal index={0}>
          <Eyebrow>{e.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal index={1}>
          <h2 className="echo-story__title">
            {e.title} <GradientText>{e.titleAccent}</GradientText>
          </h2>
        </Reveal>

        <Reveal index={2}>
          <p className="echo-story__body">{e.body}</p>
        </Reveal>

        <Reveal index={3} className="echo-story__quote-wrap">
          <GlassPanel className="echo-story__quote">
            <p className="echo-story__quote-text">{e.pullquote}</p>
            <p className="echo-story__quote-by">{e.pullquoteAttribution}</p>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
