import { CompassIcon, StarIcon } from "./icons";
import { ButtonLink, SectionTitle } from "./ui";

export function CoverageSection({ coverage, business }) {
  return (
    <section className="coverageSection sectionShell" id="coverage">
      <div className="coverageSection__copy">
        <SectionTitle eyebrow={coverage.eyebrow} title={coverage.title} body={coverage.body} />

        <div className="coverageSection__areas" data-reveal>
          {coverage.areas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <div className="coverageSection__links" data-reveal>
          {coverage.links.map((link, index) => (
            <ButtonLink key={link.label} href={link.href} variant={index === 0 ? "primary" : "secondary"}>
              {link.label}
            </ButtonLink>
          ))}
        </div>

        <div className="coverageSection__note" data-reveal>
          <div className="coverageSection__noteIcon">
            <CompassIcon />
          </div>
          <div>
            <span>Base location</span>
            <strong>{business.location}</strong>
          </div>
        </div>
      </div>

      <div className="coverageSection__mapWrap" data-reveal>
        <div className="coverageSection__mapHeader">
          <div>
            <span>Map view</span>
            <strong>Service radius for quick estimates</strong>
          </div>
          <StarIcon />
        </div>
        <div className="coverageSection__mapFrame">
          <iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={business.mapEmbedSrc} title="Empire Fence service area map" />
        </div>
      </div>
    </section>
  );
}
