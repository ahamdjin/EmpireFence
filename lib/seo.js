import { business, serviceAreas } from "@/lib/site";

const website = business.website.replace(/\/$/, "");

function buildOrganizationSchema() {
  return {
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    url: business.website,
    telephone: business.phoneDisplay,
    email: business.email,
  };
}

function buildContactPointSchema() {
  return {
    "@type": "ContactPoint",
    telephone: business.phoneDisplay,
    email: business.email,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English"],
  };
}

function buildAreaServedSchema() {
  return [
    { "@type": "City", name: business.city },
    ...serviceAreas.map((area) => ({ "@type": "City", name: area.title })),
  ];
}

function fullUrl(path = "/") {
  return `${website}${path}`;
}

function absoluteImage(image = "/client/hero-western.webp") {
  return `${website}${image}`;
}

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
    sameAs: [business.yelp, business.facebook].filter(Boolean),
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${business.website.replace(/\/$/, "")}/contact-us`,
      },
    },
  };
}

export function buildWebPageSchema({
  title,
  description,
  path = "/",
  image = "/client/hero-western.webp",
  type = "WebPage",
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: `${title} | ${business.shortName}`,
    headline: title,
    description,
    url: fullUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: business.shortName,
      url: business.website,
    },
    provider: buildOrganizationSchema(),
    about: buildOrganizationSchema(),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteImage(image),
    },
    inLanguage: "en-US",
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

export function buildServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.data.title,
    serviceType: service.data.title,
    description: service.data.summary,
    provider: buildOrganizationSchema(),
    areaServed: buildAreaServedSchema(),
    image: absoluteImage(service.data.heroImage),
    url: fullUrl(`/${service.slug}`),
    mainEntityOfPage: fullUrl(`/${service.slug}`),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: fullUrl(`/${service.slug}`),
      servicePhone: buildContactPointSchema(),
      availableLanguage: ["English"],
    },
    audience: {
      "@type": "Audience",
      audienceType: "Residential and commercial property owners",
    },
    termsOfService: fullUrl("/contact-us"),
  };
}

export function buildAreaServiceSchema(area, featuredServices = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Fence and Gate Services in ${area.title}`,
    serviceType: "Fence installation, gate work, repairs, railings, and exterior boundary upgrades",
    description: area.summary || area.intro,
    provider: buildOrganizationSchema(),
    areaServed: {
      "@type": "City",
      name: area.title,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: fullUrl(`/${area.slug}`),
      servicePhone: buildContactPointSchema(),
      availableLanguage: ["English"],
    },
    url: fullUrl(`/${area.slug}`),
    mainEntityOfPage: fullUrl(`/${area.slug}`),
    image: absoluteImage(area.image),
    hasOfferCatalog: featuredServices.length
      ? {
          "@type": "OfferCatalog",
          name: `Popular fence services in ${area.title}`,
          itemListElement: featuredServices.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.data.title,
              url: fullUrl(`/${service.slug}`),
            },
          })),
        }
      : undefined,
  };
}

export function buildBreadcrumbSchema(items) {
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
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${fullUrl("/blog")}#page`,
        name: `${business.shortName} Blog`,
        description:
          "Planning notes on fence materials, estimates, repairs, gates, and local project decisions for Jurupa Valley and nearby Inland Empire cities.",
        url: fullUrl("/blog"),
        isPartOf: {
          "@type": "WebSite",
          name: business.shortName,
          url: business.website,
        },
        mainEntity: {
          "@id": `${fullUrl("/blog")}#blog`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteImage("/client/gallery-1.webp"),
        },
      },
      {
        "@type": "Blog",
        "@id": `${fullUrl("/blog")}#blog`,
        name: `${business.shortName} Blog`,
        description:
          "Planning notes on fence materials, estimate prep, repairs, gates, and project decisions for properties across Jurupa Valley and the Inland Empire.",
        url: fullUrl("/blog"),
        publisher: {
          "@type": "Organization",
          name: business.name,
          url: business.website,
          logo: {
            "@type": "ImageObject",
            url: absoluteImage("/client/logo.png"),
          },
        },
        blogPost: posts.map((post) => ({
          "@id": `${fullUrl(`/blog/${post.slug}`)}#post`,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${fullUrl("/blog")}#list`,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: fullUrl(`/blog/${post.slug}`),
          name: post.data.title,
        })),
      },
      ...posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${fullUrl(`/blog/${post.slug}`)}#post`,
        headline: post.data.title,
        description: post.data.excerpt,
        datePublished: post.data.date,
        dateModified: post.data.modifiedDate || post.data.date,
        author: {
          "@type": "Organization",
          name: business.name,
          url: business.website,
        },
        image: absoluteImage(post.data.heroImage),
        url: fullUrl(`/blog/${post.slug}`),
        wordCount: post.wordCount,
        timeRequired: `PT${post.readingTimeMinutes}M`,
        isPartOf: {
          "@id": `${fullUrl("/blog")}#blog`,
        },
      })),
    ],
  };
}

export function buildBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": fullUrl(`/blog/${post.slug}`),
        url: fullUrl(`/blog/${post.slug}`),
        name: `${post.data.title} | ${business.shortName}`,
        description: post.data.excerpt,
        isPartOf: {
          "@type": "WebSite",
          name: business.shortName,
          url: business.website,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteImage(post.data.heroImage),
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BlogPosting",
        "@id": `${fullUrl(`/blog/${post.slug}`)}#post`,
        headline: post.data.title,
        description: post.data.excerpt,
        abstract: post.data.excerpt,
        datePublished: post.data.date,
        dateModified: post.data.modifiedDate || post.data.date,
        image: [absoluteImage(post.data.heroImage)],
        keywords: post.data.keywords,
        articleSection: post.data.articleSection || "Fence Planning",
        wordCount: post.wordCount,
        timeRequired: `PT${post.readingTimeMinutes}M`,
        isAccessibleForFree: true,
        inLanguage: "en-US",
        articleBody: post.content,
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
            url: absoluteImage("/client/logo.png"),
            width: 192,
            height: 192,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl(`/blog/${post.slug}`),
        },
        isPartOf: {
          "@type": "Blog",
          name: `${business.shortName} Blog`,
          url: fullUrl("/blog"),
        },
        about: (post.data.relatedServices || []).map((slug) => ({
          "@type": "Service",
          url: fullUrl(`/${slug}`),
        })),
        mentions: (post.data.relatedCities || [])
          .map((slug) => {
            const area = serviceAreas.find((item) => item.slug === slug);
            return area
              ? {
                  "@type": "City",
                  name: area.title,
                }
              : null;
          })
          .filter(Boolean),
        url: fullUrl(`/blog/${post.slug}`),
      },
    ],
  };
}
