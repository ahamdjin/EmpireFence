import { ButtonLink, SectionTitle } from "./ui";

export function CoverageSection({ coverage, business }) {
  return (
    <section className="coverageSection" id="coverage">
      <div className="coverageSection__grid">
        <div className="coverageSection__copy">
          <SectionTitle eyebrow={coverage.eyebrow} title={coverage.title} body={coverage.body} />
          <div className="coverageSection__chips" data-reveal>
            {coverage.areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className="coverageSection__actions" data-reveal>
            {coverage.links.map((item) => (
              <ButtonLink key={item.label} href={item.href} variant="text" target="_blank" rel="noreferrer">
                {item.label}
              </ButtonLink>
            ))}
          </div>
          <div className="coverageSection__contact" data-reveal>
            <p>{business.location}</p>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </div>
        </div>

        <div className="coverageMap" data-reveal>
          <iframe
            title="Empire Fence service area map"
            src={business.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
