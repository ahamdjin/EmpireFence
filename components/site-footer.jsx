import Image from "next/image";
import Link from "next/link";

import { business, navLinks, serviceAreas } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container siteFooter__grid">
        <div className="siteFooter__brand">
          <Image src="/client/logo.png" alt={business.shortName} width={72} height={72} />
          <div>
            <strong>{business.name}</strong>
            <p>{business.reviewSummary}</p>
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
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={business.emailHref}>{business.email}</a>
            <a href={business.mapHref} target="_blank" rel="noreferrer">
              {business.city}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
