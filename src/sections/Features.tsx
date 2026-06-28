import { site } from "@/content/site";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { IconBadge } from "@/components/primitives/IconBadge";
import { Reveal } from "@/components/primitives/Reveal";
import "./Features.css";

/**
 * Feature grid: glass cards (standard preset) each opened by a gradient
 * icon badge, staggered in on scroll. No numbering — these are peers,
 * not a sequence.
 */
export function Features() {
  const { eyebrow, title, sub, items } = site.features;
  return (
    <section className="section features" id="features">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <div className="features__grid">
          {items.map((f, i) => (
            <Reveal key={f.id} index={i % 3} className="features__cell">
              <GlassPanel className="feature-card">
                <IconBadge name={f.icon} />
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__body">{f.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
