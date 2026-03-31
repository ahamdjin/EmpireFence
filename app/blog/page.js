import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="A file-based blog CMS for local authority, SEO, and conversion support."
        intro="Blog posts now live in markdown so new articles can be added without editing page code directly."
        image="/client/gallery-1.webp"
      />

      <section className="section">
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
