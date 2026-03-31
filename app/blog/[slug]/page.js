import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/content";
import { buildBlogPostingSchema, buildPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: post.data.title,
    description: post.data.excerpt,
    path: `/blog/${post.slug}`,
    image: post.data.heroImage,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = buildBlogPostingSchema(post);
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.data.date));

  return (
    <>
      <section className="articleHero">
        <div className="container articleHero__shell">
          <span className="eyebrow">Planning note</span>
          <h1>{post.data.title}</h1>
          <div className="articleHero__meta">
            <span>{publishedDate}</span>
            <span>{post.data.excerpt}</span>
          </div>
          <p>{post.data.excerpt}</p>
          <div className="articleHero__image">
            <Image src={post.data.heroImage} alt={post.data.title} fill sizes="100vw" />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="section">
        <div className="container articleBody">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
    </>
  );
}
