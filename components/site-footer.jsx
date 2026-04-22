import Image from "next/image";
import Link from "next/link";

import { areaPath, privacyPolicyPath, termsPath } from "@/lib/paths";
import { business, navLinks, serviceAreas, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="siteFooter__grid">
          <div className="siteFooter__brand">
            <Image src="/client/logo.png" alt={business.shortName} width={72} height={72} />
            <div className="siteFooter__brandCopy">
              <strong>{business.name}</strong>
              <p>Fence, gate, wall, and selected outdoor work across Jurupa Valley and nearby Inland Empire cities.</p>
              <div className="siteFooter__actions">
                <a href={business.phoneHref} className="button button--ghost">
                  {business.phoneDisplay}
                </a>
                <Link href="/contact-us" className="button button--primary">
                  Get a free estimate
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
                <Link key={area.slug} href={areaPath(area.slug)}>
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <span className="footerLabel">Socials</span>
            <div className="footerLinks">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <span className="footerLabel">Contact</span>
            <div className="footerLinks">
              <address className="footerAddress">{business.address}</address>
              <span>Jurupa Valley ZIP: {business.zipCode}</span>
              <span>{business.hours}</span>
              <a href={business.emailHref}>{business.email}</a>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </div>
          </div>
        </div>
        <div className="siteFooter__bottom">
          <span>
            <Link href={privacyPolicyPath}>Privacy Policy</Link>
            {" · "}
            <Link href={termsPath}>Terms & Conditions</Link>
          </span>
          <span>© {new Date().getFullYear()} {business.name}</span>
        </div>
      </div>
    </footer>
  );
}
