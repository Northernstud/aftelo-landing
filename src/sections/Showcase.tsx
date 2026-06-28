import { site } from "@/content/site";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { PhoneFrame } from "@/components/app-ui/PhoneFrame";
import { JournalScreen, EchoChatScreen } from "@/components/app-ui/screens";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import "./Showcase.css";

/**
 * Product reveal: the real app UI inside floating devices that tilt
 * gently with the pointer (Apple/ROG-style parallax), paired with short
 * captions. Two screens — the journal and Echo in conversation.
 */
export function Showcase() {
  const { eyebrow, title, sub, captions } = site.showcase;
  const p = usePointerParallax();

  const tiltA = {
    transform: `perspective(1400px) rotateY(${p.x * 6 - 4}deg) rotateX(${-p.y * 5}deg) translateY(${p.y * -8}px)`,
  };
  const tiltB = {
    transform: `perspective(1400px) rotateY(${p.x * 6 + 4}deg) rotateX(${-p.y * 5}deg) translateY(${p.y * -8}px)`,
  };

  return (
    <section className="section showcase" id="app">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <div className="showcase__stage">
          <Reveal index={0} className="showcase__col">
            <div className="showcase__device" style={tiltA}>
              <PhoneFrame>
                <JournalScreen />
              </PhoneFrame>
            </div>
            <div className="showcase__caption">
              <h3 className="showcase__caption-title">{captions[0].title}</h3>
              <p className="showcase__caption-body">{captions[0].body}</p>
            </div>
          </Reveal>

          <Reveal index={1} className="showcase__col showcase__col--raised">
            <div className="showcase__device" style={tiltB}>
              <PhoneFrame>
                <EchoChatScreen />
              </PhoneFrame>
            </div>
            <div className="showcase__caption">
              <h3 className="showcase__caption-title">{captions[1].title}</h3>
              <p className="showcase__caption-body">{captions[1].body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
