import { site } from "@/content/site";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { Reveal } from "@/components/primitives/Reveal";
import "./HowItWorks.css";

/**
 * The process, in three steps. The numbering (01/02/03) is meaningful
 * here — it's an actual ordered sequence the reader follows — so the
 * numbered markers earn their place.
 */
export function HowItWorks() {
  const { eyebrow, title, sub, steps } = site.how;
  return (
    <section className="section how" id="how">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <ol className="how__grid">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} index={i} className="how__item">
              <GlassPanel className="how__card">
                <span className="how__num">{step.n}</span>
                <h3 className="how__card-title">{step.title}</h3>
                <p className="how__card-body">{step.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
