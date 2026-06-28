import { site } from "@/content/site";
import { BrandMark } from "./BrandMark";
import "./Footer.css";

/** Understated footer: hairline glass divider, muted mono text (§10). */
export function Footer() {
  const { columns, legal } = site.footer;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__mark" href="#top" aria-label={`${site.brand.name} home`}>
            <BrandMark size={28} />
            <span>{site.brand.name}</span>
          </a>
          <p className="footer__tagline">{site.brand.tagline}</p>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          {columns.map((col) => (
            <div className="footer__col" key={col.heading}>
              <p className="footer__heading">{col.heading}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a className="footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container footer__base">
        <p className="footer__legal">{legal}</p>
        <p className="footer__built">Made with quiet · iOS &amp; Android</p>
      </div>
    </footer>
  );
}
