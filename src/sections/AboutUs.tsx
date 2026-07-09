import { site } from "@/content/site";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { IconBadge } from "@/components/primitives/IconBadge";
import { Reveal } from "@/components/primitives/Reveal";
import "./AboutUs.css";

export function AboutUs() {
  const { eyebrow, title, sub, values } = site.about;
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <div className="about__grid">
          {values.map((v, i) => (
            <Reveal key={v.id} index={i} className="about__cell">
              <GlassPanel className="about-card">
                <IconBadge name={v.icon} />
                <h3 className="about-card__title">{v.title}</h3>
                <p className="about-card__body">{v.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
