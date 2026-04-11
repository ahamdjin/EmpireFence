import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getAllPosts } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
import { buildBlogCollectionSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read Empire Fence articles on fence materials, estimate prep, repair decisions, gates, and local project planning for Jurupa Valley and nearby Inland Empire cities.",
  path: "/blog",
  image: "/client/gbp/crew-on-site.jpg",
  keywords: [
    "fence blog Jurupa Valley",
    "fence estimate advice",
    "vinyl vs wood fence",
    "repair or replace fence",
  ],
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0] ?? null;
  const sidePosts = posts.slice(1, 3);
  const featuredCards = sidePosts.map((post) => ({
    eyebrow: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(post.data.date)),
    title: post.data.title,
    copy: post.data.excerpt,
    href: `/blog/${post.slug}`,
    readingTimeMinutes: post.readingTimeMinutes,
  }));
  const blogSchema = buildBlogCollectionSchema(posts);
  const pageSchema = buildWebPageSchema({
    title: "Blog",
    description:
      "Read Empire Fence articles on fence materials, estimate prep, repair decisions, gates, and project planning for Jurupa Valley and nearby Inland Empire cities.",
    path: "/blog",
    image: "/client/gbp/crew-on-site.jpg",
    type: "CollectionPage",
  });

  return (
    <>
      <PageHero
        variant="blog"
        eyebrow="Our blog"
        title="Fence Tips & Advice"
        intro="Learn about fence materials, installation tips, and how to plan your next fencing project."
        image="/client/gbp/crew-on-site.jpg"
        primaryAction={{ href: "/contact-us", label: "Get free quote" }}
        secondaryAction={{ href: "/services", label: "Services" }}
        cards={featuredCards}
      />

      <section className="journalDeck">
        {featuredPost ? (
          <div className="container journalDeck__grid">
            <article className="journalDeck__feature journalDeck__feature--stacked">
              <div className="journalDeck__image journalDeck__image--feature">
                <Image
                  src={featuredPost.data.heroImage}
                  alt={featuredPost.data.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={getImagePresentation(featuredPost.data.heroImage, "journalFeature")}
                />
              </div>
              <div className="journalDeck__body journalDeck__body--feature">
                <span className="eyebrow">Featured article</span>
                <h2>{featuredPost.data.title}</h2>
                <p>{featuredPost.data.excerpt}</p>
                <p className="journalDeck__meta">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(featuredPost.data.date))}
                  <span aria-hidden="true">•</span>
                  <span>{featuredPost.readingTimeMinutes} min read</span>
                </p>
                <Link href={`/blog/${featuredPost.slug}`} className="textLink">
                  Read article
                </Link>
              </div>
            </article>
            <div className="journalDeck__side">
              {featuredCards.map((post) => (
                <article key={post.href} className="miniFeatureCard">
                  <span className="eyebrow">{post.eyebrow}</span>
                  <h3>{post.title}</h3>
                  <p>{post.copy}</p>
                  <p className="postCard__meta">{post.readingTimeMinutes} min read</p>
                  <Link href={post.href} className="textLink">
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="section">
        <div className="container editorialLead">
          <div className="editorialLead__body editorialLead__body--intro">
            <span className="eyebrow">Article list</span>
            <h2>Planning notes that help clients choose material, prepare estimates, and bundle scope more cleanly.</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container miniFeatureGrid">
          <article className="miniFeatureCard">
            <span className="eyebrow">Buying topic</span>
            <h3>Material decisions</h3>
            <p>The strongest fence articles help a buyer decide between privacy, durability, curb appeal, and long-term maintenance instead of just listing material names.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">Buying topic</span>
            <h3>Estimate prep</h3>
            <p>Good estimate guidance reduces wasted time by helping the client gather photos, footage, gate notes, and site context before the first call.</p>
          </article>
          <article className="miniFeatureCard">
            <span className="eyebrow">Buying topic</span>
            <h3>Repair versus replacement</h3>
            <p>This is one of the most commercial questions in local fence SEO because the buyer is already close to acting and just needs the right next step.</p>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container postGrid">
          {posts.map((post) => (
            <article key={post.slug} className="postCard">
              <div className="postCard__image">
                <Image
                  src={post.data.heroImage}
                  alt={post.data.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 32vw"
                  style={getImagePresentation(post.data.heroImage, "postCard")}
                />
              </div>
              <div className="postCard__body">
                <span className="eyebrow">
                  {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.data.date))}
                </span>
                <h2>{post.data.title}</h2>
                <p>{post.data.excerpt}</p>
                <p className="postCard__meta">{post.readingTimeMinutes} min read</p>
                <Link href={`/blog/${post.slug}`} className="textLink">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
