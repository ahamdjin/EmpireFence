import { SectionTitle } from "./ui";

export function StorySection({ story }) {
  return (
    <section className="storySection" id="about">
      <div className="storySection__grid">
        <SectionTitle eyebrow={story.eyebrow} title={story.title} body={story.intro} />
        <div className="storySection__points">
          {story.points.map((point) => (
            <article key={point.title} className="storyPoint" data-reveal>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
