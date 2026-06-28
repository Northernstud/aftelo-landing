import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { GlassPanel } from "@/components/primitives/GlassPanel";
import { Button } from "@/components/primitives/Button";
import { BrandMark } from "./BrandMark";
import "./Nav.css";

/**
 * Pinned glass navigation (§4 nav preset). Condenses slightly once the
 * page scrolls so the hero reads cleanly on load.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <GlassPanel as="nav" variant="nav" className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top" aria-label={`${site.brand.name} home`}>
          <BrandMark size={26} />
          <span className="nav__brand-name">{site.brand.name}</span>
        </a>

        <ul className={`nav__links ${open ? "is-open" : ""}`}>
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                className="nav__link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <Button variant="outline" size="md" href={site.nav.cta.href}>
            {site.nav.cta.label}
          </Button>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </GlassPanel>
    </header>
  );
}
