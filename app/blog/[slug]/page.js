import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllPosts, getAllServices, getPostBySlug } from "@/lib/content";
import { getImagePresentation } from "@/lib/image-presentation";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { serviceAreas } from "@/lib/site";

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
  const [post, services] = await Promise.all([getPostBySlug(slug), getAllServices()]);

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
  const updatedDate = post.data.modifiedDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.data.modifiedDate))
    : null;
  const pageSchema = buildWebPageSchema({
    title: post.data.title,
    description: post.data.excerpt,
    path: `/blog/${post.slug}`,
    image: post.data.heroImage,
    type: "Article",
  });
  const relatedServices = (post.data.relatedServices || [])
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter(Boolean);
  const relatedAreas = (post.data.relatedCities || [])
    .map((areaSlug) => serviceAreas.find((area) => area.slug === areaSlug))
    .filter(Boolean);

  return (
    <>
      <section className="articleHero">
        <div className="container articleHero__shell">
          <span className="eyebrow">{post.data.articleSection || "Fence planning"}</span>
          <h1>{post.data.title}</h1>
          <div className="articleHero__meta">
            <span>{publishedDate}</span>
            <span>{post.readingTimeMinutes} min read</span>
            {updatedDate && updatedDate !== publishedDate ? <span>Updated {updatedDate}</span> : null}
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
      {relatedServices.length || relatedAreas.length ? (
        <section className="section">
          <div className="container articleContext">
            {relatedServices.length ? (
              <article className="articleContext__panel">
                <span className="eyebrow">Related services</span>
                <h2>Service pages tied to this article.</h2>
                <p>These links line up with the service types discussed in the post, so readers can move from planning into a real estimate path.</p>
                <div className="articleContext__links">
                  {relatedServices.map((service) => (
                    <Link key={service.slug} href={`/${service.slug}`} className="chip">
                      {service.data.title}
                    </Link>
                  ))}
                </div>
              </article>
            ) : null}
            {relatedAreas.length ? (
              <article className="articleContext__panel">
                <span className="eyebrow">Nearby areas</span>
                <h2>Local pages connected to the topic.</h2>
                <p>These city pages help connect the blog topic to local estimate intent and the areas Empire Fence already serves.</p>
                <div className="articleContext__links">
                  {relatedAreas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className="chip">
                      {area.title}
                    </Link>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
