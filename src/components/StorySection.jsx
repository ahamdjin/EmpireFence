import { ArrowIcon, CheckIcon, StarIcon } from "./icons";
import { ButtonLink, SectionTitle } from "./ui";

export function StorySection({ business, hero, story }) {
  return (
    <section className="storySection sectionShell" id="about">
      <div className="storySection__intro">
        <SectionTitle eyebrow={story.eyebrow} title={story.title} body={story.intro} />

        <div className="storySection__summary" data-reveal>
          <p>
            Sharper frontage, better privacy, smoother gate access.
          </p>
          <ButtonLink href={business.phoneHref} variant="text">
            Call {business.phoneDisplay}
          </ButtonLink>
        </div>
      </div>

      <div className="storySection__grid">
        <div className="storySection__imageWrap" data-reveal>
          <img src={hero.secondaryImage.src} alt={hero.secondaryImage.alt} />
          <div className="storySection__floatingNote">
            <StarIcon />
            <div>
              <span>Local service, premium feel</span>
              <strong>Built for homes that need to look finished from the street.</strong>
            </div>
          </div>
        </div>

        <div className="storySection__content">
          {story.points.map((point) => (
            <article key={point.title} className="storyPoint" data-reveal>
              <div className="storyPoint__icon">
                <CheckIcon />
              </div>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </article>
          ))}

          <div className="storySection__cred" data-reveal>
            <div className="storySection__credHeader">
              <p>Service rhythm</p>
              <ArrowIcon />
            </div>
            <strong>{business.location}</strong>
            <p>
              Estimates, installs, and gate work across the Inland Empire with a calmer process and stronger final
              frontage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
