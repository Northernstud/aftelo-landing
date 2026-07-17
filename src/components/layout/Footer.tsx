import { site, type SocialId } from "@/content/site";
import { BrandMark } from "./BrandMark";
import "./Footer.css";

/** Brand social glyphs (filled — the stroke Icon set doesn't cover logos). */
const socialGlyph: Record<SocialId, JSX.Element> = {
  discord: (
    <path d="M20.3 4.4A19 19 0 0 0 15.6 3l-.24.5a17.6 17.6 0 0 1 4.15 1.32 15.9 15.9 0 0 0-13.02 0A17.6 17.6 0 0 1 10.64 3.5L10.4 3a19 19 0 0 0-4.7 1.4C2.7 8.9 1.9 13.3 2.3 17.6a19.1 19.1 0 0 0 5.85 2.96l.47-.75a12.5 12.5 0 0 1-1.87-.9l.46-.36a13.6 13.6 0 0 0 11.58 0l.46.36c-.6.35-1.22.65-1.87.9l.47.75a19 19 0 0 0 5.85-2.96c.47-5-.8-9.35-3.83-13.2ZM8.9 15c-.9 0-1.65-.85-1.65-1.9S8 11.2 8.9 11.2s1.66.85 1.65 1.9c0 1.05-.74 1.9-1.65 1.9Zm6.2 0c-.9 0-1.65-.85-1.65-1.9s.73-1.9 1.65-1.9 1.66.85 1.65 1.9c0 1.05-.73 1.9-1.65 1.9Z" />
  ),
  x: (
    <path d="M17.53 3h3.17l-6.92 7.91L21.75 21h-6.38l-4.99-6.53L4.67 21H1.5l7.4-8.46L2 3h6.55l4.51 5.96L17.53 3Zm-1.11 16.1h1.76L7.62 4.8H5.73l10.69 14.3Z" />
  ),
};

/** Understated footer: hairline glass divider, slogan, and social links. */
export function Footer() {
  const { links, socials, legal } = site.footer;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a
            className="footer__mark"
            href="#top"
            aria-label={`${site.brand.name} home`}
          >
            <BrandMark size={28} />
            <span>{site.brand.name}</span>
          </a>
          <p className="footer__tagline">{site.brand.tagline}</p>

          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.id}
                className="footer__social"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  {socialGlyph[s.id]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} className="footer__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__base">
        <p className="footer__legal">{legal}</p>
      </div>
    </footer>
  );
}
