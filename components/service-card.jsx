import Image from "next/image";
import Link from "next/link";

export function ServiceCard({ service, variant = "default" }) {
  if (variant === "feature") {
    return (
      <article className="serviceFeature">
        <div className="serviceFeature__media">
          <Image src={service.data.heroImage} alt={service.data.title} fill sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="serviceFeature__body">
          <span className="eyebrow">{service.data.eyebrow}</span>
          <h3>{service.data.title}</h3>
          <p>{service.data.summary}</p>
          {service.data.highlights?.length ? (
            <ul className="bulletList bulletList--light">
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
          <Image src={service.data.heroImage} alt={service.data.title} fill sizes="(max-width: 900px) 100vw, 24vw" />
        </div>
        <div className="serviceTile__body">
          <span className="eyebrow">{service.data.eyebrow}</span>
          <h3>{service.data.title}</h3>
          <p>{service.data.summary}</p>
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
        <Image src={service.data.heroImage} alt={service.data.title} fill sizes="(max-width: 900px) 100vw, 30vw" />
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
