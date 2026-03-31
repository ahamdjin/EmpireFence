import Image from "next/image";
import Link from "next/link";

import { getAllPosts } from "@/lib/content";
import { buildBlogCollectionSchema, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read Empire Fence articles on fence planning, estimate prep, and exterior project decisions for Jurupa Valley and nearby cities.",
  path: "/blog",
  image: "/client/gallery-1.webp",
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredCards = posts.slice(1, 3).map((post) => ({
    eyebrow: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(post.data.date)),
    title: post.data.title,
    copy: post.data.excerpt,
    href: `/blog/${post.slug}`,
  }));
  const blogSchema = buildBlogCollectionSchema(posts);

  return (
    <>
      <section className="journalDeck">
        <div className="container journalDeck__top">
            <span className="eyebrow">Blog</span>
            <h1>
              Planning notes for better fence <em>projects</em>.
            </h1>
            <p>Short articles on material choices, estimate prep, and scope decisions around the property edge.</p>
            <Link href="/contact-us" className="button button--primary">
              Start estimate
            </Link>
        </div>

        {posts[0] ? (
          <div className="container journalDeck__grid">
            <article className="journalDeck__feature">
              <div className="journalDeck__image">
                <Image src={posts[0].data.heroImage} alt={posts[0].data.title} fill sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
              <div className="journalDeck__body">
                <span className="eyebrow">Featured article</span>
                <h2>{posts[0].data.title}</h2>
                <p>{posts[0].data.excerpt}</p>
                <Link href={`/blog/${posts[0].slug}`} className="textLink">
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

      <section className="section section--soft">
        <div className="container postGrid">
          {posts.map((post) => (
            <article key={post.slug} className="postCard">
              <div className="postCard__image">
                <Image src={post.data.heroImage} alt={post.data.title} fill sizes="(max-width: 900px) 100vw, 32vw" />
              </div>
              <div className="postCard__body">
                <span className="eyebrow">
                  {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.data.date))}
                </span>
                <h2>{post.data.title}</h2>
                <p>{post.data.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="textLink">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
