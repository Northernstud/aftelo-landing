import { site } from "@/content/site";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GradientText } from "@/components/primitives/GradientText";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { IconBadge } from "@/components/primitives/IconBadge";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import "./Community.css";

export function Community() {
  const { eyebrow, title, titleAccent, body, channels } = site.community;
  return (
    <section className="section community" id="community">
      <div className="container">
        <Reveal>
          <GlassPanel className="community__panel" glow>
            <span className="community__bloom" aria-hidden="true" />
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="community__title">
              {title} <GradientText>{titleAccent}</GradientText>
            </h2>
            <p className="community__body">{body}</p>

            <div className="community__channels">
              {channels.map((ch, i) => (
                <Reveal key={ch.id} index={i} className="community__channel">
                  <IconBadge name={ch.icon} />
                  <h3 className="community__ch-title">{ch.title}</h3>
                  <p className="community__ch-body">{ch.body}</p>
                  <Button variant="outline" size="md" href={ch.cta.href}>
                    {ch.cta.label}
                  </Button>
                </Reveal>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
