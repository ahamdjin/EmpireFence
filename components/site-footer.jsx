import Image from "next/image";
import Link from "next/link";

import { business, navLinks, serviceAreas } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="siteFooter__grid">
          <div className="siteFooter__brand">
            <Image src="/client/logo.png" alt={business.shortName} width={72} height={72} />
            <div>
              <strong>{business.name}</strong>
              <p>Fence, gate, wall, and selected outdoor work across Jurupa Valley and nearby Inland Empire cities.</p>
              <div className="siteFooter__actions">
                <a href={business.phoneHref} className="button button--ghost">
                  {business.phoneDisplay}
                </a>
                <Link href="/contact-us" className="button button--primary">
                  Start estimate
                </Link>
              </div>
            </div>
          </div>
          <div>
            <span className="footerLabel">Pages</span>
            <div className="footerLinks">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="footerLabel">Areas</span>
            <div className="footerLinks">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`}>
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="footerLabel">Contact</span>
            <div className="footerLinks">
              <span>{business.hours}</span>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.mapHref} target="_blank" rel="noreferrer">
                {business.city}
              </a>
              <a href={business.yelp} target="_blank" rel="noreferrer">
                Yelp profile
              </a>
            </div>
          </div>
        </div>
        <div className="siteFooter__bottom">
          <span>Privacy fencing, frontage work, gates, walls, patios, driveways, and turf.</span>
          <span>© {new Date().getFullYear()} {business.name}</span>
        </div>
      </div>
    </footer>
  );
}
