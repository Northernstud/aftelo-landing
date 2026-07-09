import { site } from "@/content/site";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GradientText } from "@/components/primitives/GradientText";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import "./Contact.css";

export function Contact() {
  const { eyebrow, title, body, email, links } = site.contact;
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <Reveal index={0}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <h2 className="contact__title">{title}</h2>
        </Reveal>
        <Reveal index={2}>
          <p className="contact__body">{body}</p>
        </Reveal>
        <Reveal index={3}>
          <a className="contact__email" href={`mailto:${email}`}>
            <GradientText>{email}</GradientText>
          </a>
        </Reveal>
        <Reveal index={4} className="contact__links">
          {links.map((link) => (
            <Button key={link.label} variant="inline" size="md" href={link.href}>
              {link.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
