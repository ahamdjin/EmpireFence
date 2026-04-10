import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

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
    keywords: post.data.keywords || [],
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = buildBlogPostingSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.data.title },
  ]);
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.data.date));
  const pageSchema = buildWebPageSchema({
    title: post.data.title,
    description: post.data.excerpt,
    path: `/blog/${post.slug}`,
    image: post.data.heroImage,
    type: "Article",
  });

  return (
    <>
      <section className="articleHero">
        <div className="container articleHero__shell">
          <span className="eyebrow">{post.data.articleSection || "Fence planning"}</span>
          <h1>{post.data.title}</h1>
          <div className="articleHero__meta">
            <span>{publishedDate}</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
          <p>{post.data.excerpt}</p>
          <div className="articleHero__image">
            <Image
              src={post.data.heroImage}
              alt={post.data.title}
              fill
              sizes="100vw"
              style={getImagePresentation(post.data.heroImage, "articleHero")}
            />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <article className="section">
        <div className="container articleBody">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
