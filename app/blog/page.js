import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
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
  const featuredCards = posts.slice(0, 2).map((post) => ({
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
      <PageHero
        variant="blog"
        eyebrow="Blog"
        title={
          <>
            Planning notes for better fence <em>projects</em>.
          </>
        }
        intro="Short articles on material choices and estimate prep."
        image="/client/gallery-1.webp"
        secondaryImage="/client/gallery-3.webp"
        cards={featuredCards}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="section">
        <div className="container editorialLead">
          {posts[0] ? (
            <article className="editorialLead__feature">
              <div className="editorialLead__image">
                <Image src={posts[0].data.heroImage} alt={posts[0].data.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="editorialLead__body">
                <span className="eyebrow">Featured article</span>
                <h2>{posts[0].data.title}</h2>
                <p>{posts[0].data.excerpt}</p>
                <Link href={`/blog/${posts[0].slug}`} className="button button--primary">
                  Read article
                </Link>
              </div>
            </article>
          ) : null}
          <div className="editorialLead__list">
            {posts.slice(1, 3).map((post) => (
              <article key={post.slug} className="miniFeatureCard">
                <span className="eyebrow">
                  {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.data.date))}
                </span>
                <h3>{post.data.title}</h3>
                <p>{post.data.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="textLink">
                  Read article
                </Link>
              </article>
            ))}
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
