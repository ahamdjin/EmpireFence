import Image from "next/image";
import Link from "next/link";

import { getImagePresentation } from "@/lib/image-presentation";
import { servicePath } from "@/lib/paths";

const EDITORIAL_CHIPS = {
  "vinyl-fence": ["Privacy runs", "Low upkeep"],
  "wood-fence": ["Privacy fence", "Custom layout"],
  "wrought-iron-fence": ["Curb appeal", "Gate detail"],
  "chain-link-fence": ["Secure boundary", "Fast install"],
  "metal-fence": ["Steel lines", "Modern edge"],
  "fence-repairs": ["Repair work", "Reset lines"],
  "railing-contractor": ["Railings", "Entry safety"],
  "patio-enclosures": ["Covered space", "Outdoor shade"],
  "gazebo-builder": ["Gazebo builds", "Yard feature"],
  "fence-supply": ["Fence supply", "Project pickup"],
};

function shortenHighlight(text) {
  return text
    .replace(/^Strong choice for\s+/i, "")
    .replace(/^Strong\s+/i, "")
    .replace(/^Clean look with\s+/i, "")
    .replace(/^Flexible enough for\s+/i, "")
    .replace(/^Built around\s+/i, "")
    .replace(/^Vinyl gates and\s+/i, "")
    .replace(/\s+for homes and larger property edges$/i, "")
    .replace(/\s+over time$/i, "")
    .replace(/\s+of the property$/i, "")
    .replace(/\s+tailored to the site$/i, "")
    .replace(/\s+and perimeter definition$/i, "")
    .replace(/\s+traditional, decorative, and modern layouts$/i, "custom layouts")
    .replace(/\s+/g, " ")
    .trim();
}

function getEditorialChip(service, text, index) {
  const mapped = EDITORIAL_CHIPS[service.slug]?.[index];
  if (mapped) return mapped;
  return shortenHighlight(text);
}

export function ServiceCard({ service, variant = "default", index = 0 }) {
  if (variant === "editorial") {
    const highlights = service.data.highlights?.slice(0, 2) ?? [];

    return (
      <article className={`serviceEditorial${index % 2 === 1 ? " serviceEditorial--alt" : ""}`}>
        <div className="serviceEditorial__media">
          <Image
            src={service.data.heroImage}
            alt={service.data.title}
            fill
            sizes="(max-width: 900px) 100vw, 24vw"
            style={getImagePresentation(service.data.heroImage, "serviceEditorial")}
          />
          <span className="serviceEditorial__index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="serviceEditorial__body">
          <span className="eyebrow">{service.data.eyebrow}</span>
          <h3>{service.data.title}</h3>
          {highlights.length ? (
            <div className="serviceEditorial__meta">
              {highlights.map((item, chipIndex) => (
                <span key={item}>{getEditorialChip(service, item, chipIndex)}</span>
              ))}
            </div>
          ) : null}
          <Link href={servicePath(service.slug)} className="textLink">
            View service page
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "feature") {
    return (
      <article className="serviceFeature">
        <div className="serviceFeature__media">
          <Image
            src={service.data.heroImage}
            alt={service.data.title}
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            style={getImagePresentation(service.data.heroImage, "serviceFeature")}
          />
        </div>
        <div className="serviceFeature__body">
          <span className="eyebrow">{service.data.eyebrow}</span>
          <h3>{service.data.title}</h3>
          <p>{service.data.summary}</p>
          {service.data.highlights?.length ? (
            <ul className="bulletList">
              {service.data.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <Link href={servicePath(service.slug)} className="button button--primary">
            View service
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "tile") {
    return (
      <article className="serviceTile">
        <div className="serviceTile__media">
          <Image
            src={service.data.heroImage}
            alt={service.data.title}
            fill
            sizes="(max-width: 900px) 100vw, 24vw"
            style={getImagePresentation(service.data.heroImage, "serviceTile")}
          />
        </div>
        <div className="serviceTile__body">
          <span className="eyebrow">{service.data.eyebrow}</span>
          <h3>{service.data.title}</h3>
          <Link href={servicePath(service.slug)} className="textLink">
            Explore
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="serviceCard">
      <div className="serviceCard__image">
        <Image
          src={service.data.heroImage}
          alt={service.data.title}
          fill
          sizes="(max-width: 900px) 100vw, 30vw"
          style={getImagePresentation(service.data.heroImage, "serviceCard")}
        />
      </div>
      <div className="serviceCard__body">
        <span className="eyebrow">{service.data.eyebrow}</span>
        <h3>{service.data.title}</h3>
        <p>{service.data.summary}</p>
        <Link href={servicePath(service.slug)} className="textLink">
          View service
        </Link>
      </div>
    </article>
  );
}
