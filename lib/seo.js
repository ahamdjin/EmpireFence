import { business } from "@/lib/site";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = "/client/hero-western.webp",
  keywords = [],
}) {
  const fullTitle = `${title} | ${business.shortName}`;

  return {
    title,
    description,
    keywords: [
      "Empire Fence",
      "fence company Jurupa Valley",
      "fence contractor Inland Empire",
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: business.shortName,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: `${business.website}client/hero-western.webp`,
    telephone: business.phoneDisplay,
    email: business.email,
    description: business.reviewSummary,
    areaServed: [
      "Jurupa Valley, CA",
      "Riverside, CA",
      "Ontario, CA",
      "Chino, CA",
      "Rancho Cucamonga, CA",
      "Fontana, CA",
      "San Bernardino, CA",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jurupa Valley",
      addressRegion: "CA",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    hasMap: business.mapHref,
    sameAs: [business.yelp, business.facebook],
    priceRange: "$$",
    url: business.website,
  };
}

export function buildFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceListSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${business.website}${service.slug}`,
      name: service.data.title,
      description: service.data.summary,
    })),
  };
}

export function buildBlogCollectionSchema(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${business.shortName} Blog`,
    description:
      "Planning notes on fence materials, estimates, and exterior project decisions for Jurupa Valley and nearby cities.",
    url: `${business.website}blog`,
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.website,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.data.title,
      description: post.data.excerpt,
      datePublished: post.data.date,
      image: `${business.website.replace(/\/$/, "")}${post.data.heroImage}`,
      url: `${business.website}blog/${post.slug}`,
    })),
  };
}

export function buildBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.excerpt,
    datePublished: post.data.date,
    image: [`${business.website.replace(/\/$/, "")}${post.data.heroImage}`],
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${business.website}client/logo.png`,
      },
    },
    mainEntityOfPage: `${business.website}blog/${post.slug}`,
  };
}
