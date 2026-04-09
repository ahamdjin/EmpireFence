import { business } from "@/lib/site";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = "/client/hero-western.webp",
  keywords = [],
}) {
  const fullTitle = `${title} | ${business.shortName}`;
  const website = business.website.replace(/\/$/, "");

  return {
    title,
    description,
    keywords: [
      "Empire Fence",
      "fence company Jurupa Valley",
      "fence contractor Inland Empire",
      "vinyl fence Jurupa Valley",
      "wrought iron fence Jurupa Valley",
      "wood fence Jurupa Valley",
      "chain link fence Jurupa Valley",
      ...keywords,
    ],
    alternates: {
      canonical: `${website}${path}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${website}${path}`,
      siteName: business.shortName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${website}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${website}${image}`],
    },
    verification: {
      // Add Google Search Console verification when available
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: `${business.website.replace(/\/$/, "")}/client/hero-western.webp`,
    telephone: business.phoneDisplay,
    email: business.email,
    description: business.reviewSummary,
    url: business.website,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4020 Bain St",
      addressLocality: "Jurupa Valley",
      addressRegion: "CA",
      postalCode: "91752",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.021327,
      longitude: -117.458118,
    },
    areaServed: [
      { "@type": "City", name: "Jurupa Valley, CA" },
      { "@type": "City", name: "Riverside, CA" },
      { "@type": "City", name: "Ontario, CA" },
      { "@type": "City", name: "Chino, CA" },
      { "@type": "City", name: "Rancho Cucamonga, CA" },
      { "@type": "City", name: "Fontana, CA" },
      { "@type": "City", name: "San Bernardino, CA" },
    ],
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
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${business.website.replace(/\/$/, "")}/contact-us`,
      },
    },
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
  const website = business.website.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${website}/${service.slug}`,
      name: service.data.title,
      description: service.data.summary,
      item: {
        "@type": "Service",
        name: service.data.title,
        description: service.data.summary,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: business.name,
        },
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  const website = business.website.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `${website}${item.href}` : undefined,
    })),
  };
}

export function buildBlogCollectionSchema(posts) {
  const website = business.website.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${business.shortName} Blog`,
    description:
      "Planning notes on fence materials, estimates, and exterior project decisions for Jurupa Valley and nearby cities.",
    url: `${website}/blog`,
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.website,
      logo: {
        "@type": "ImageObject",
        url: `${website}/client/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.data.title,
      description: post.data.excerpt,
      datePublished: post.data.date,
      dateModified: post.data.date,
      author: {
        "@type": "Organization",
        name: business.name,
        url: business.website,
      },
      image: `${website}${post.data.heroImage}`,
      url: `${website}/blog/${post.slug}`,
    })),
  };
}

export function buildBlogPostingSchema(post) {
  const website = business.website.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.excerpt,
    datePublished: post.data.date,
    dateModified: post.data.date,
    image: [`${website}${post.data.heroImage}`],
    author: {
      "@type": "Organization",
      name: business.name,
      url: business.website,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.website,
      logo: {
        "@type": "ImageObject",
        url: `${website}/client/logo.png`,
        width: 192,
        height: 192,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${website}/blog/${post.slug}`,
    },
    url: `${website}/blog/${post.slug}`,
  };
}
