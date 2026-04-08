import Image from "next/image";
import Link from "next/link";

import { getImagePresentation } from "@/lib/image-presentation";

export function ServiceCard({ service, variant = "default", index = 0 }) {
  if (variant === "editorial") {
    const highlights = service.data.highlights?.slice(0, 3) ?? [];

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
              {highlights.slice(0, 2).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
          <Link href={`/${service.slug}`} className="textLink">
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
          <Link href={`/${service.slug}`} className="button button--primary">
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
          <Link href={`/${service.slug}`} className="textLink">
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
        <Link href={`/${service.slug}`} className="textLink">
          View service
        </Link>
      </div>
    </article>
  );
}
