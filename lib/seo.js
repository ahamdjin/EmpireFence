import { business, serviceAreas } from "@/lib/site";
import { areaPath, servicePath } from "@/lib/paths";

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

function absoluteImage(image = "/client/home/hero-fence-project-1.jpg") {
  return `${website}${image}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = "/client/home/hero-fence-project-1.jpg",
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
    image: `${business.website.replace(/\/$/, "")}/client/home/hero-fence-project-1.jpg`,
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
    contactPoint: [buildContactPointSchema()],
    hasMap: business.mapHref,
    sameAs: [business.yelp, business.facebook].filter(Boolean),
  };
}

export function buildWebPageSchema({
  title,
  description,
  path = "/",
  image = "/client/home/hero-fence-project-1.jpg",
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
      url: `${website}${servicePath(service.slug)}`,
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
    url: fullUrl(servicePath(service.slug)),
    mainEntityOfPage: fullUrl(servicePath(service.slug)),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: fullUrl(servicePath(service.slug)),
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
      serviceUrl: fullUrl(areaPath(area.slug)),
      servicePhone: buildContactPointSchema(),
      availableLanguage: ["English"],
    },
    url: fullUrl(areaPath(area.slug)),
    mainEntityOfPage: fullUrl(areaPath(area.slug)),
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
              url: fullUrl(servicePath(service.slug)),
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
        "@type": "WebSite",
        "@id": `${website}#website`,
        name: business.shortName,
        url: business.website,
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${website}#organization`,
        name: business.name,
        url: business.website,
        telephone: business.phoneDisplay,
        email: business.email,
        image: absoluteImage("/client/logo.png"),
        sameAs: [business.mapHref, business.facebook, business.yelp].filter(Boolean),
      },
      {
        "@type": "CollectionPage",
        "@id": `${fullUrl("/blog")}#page`,
        name: `${business.shortName} Blog`,
        description:
          "Planning notes on fence materials, estimates, repairs, gates, and local project decisions for Jurupa Valley and nearby Inland Empire cities.",
        url: fullUrl("/blog"),
        isPartOf: {
          "@id": `${website}#website`,
        },
        mainEntity: {
          "@id": `${fullUrl("/blog")}#blog`,
        },
        about: {
          "@id": `${website}#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${fullUrl("/blog")}#primaryimage`,
          url: absoluteImage("/client/gbp/crew-on-site.jpg"),
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
          "@id": `${website}#organization`,
        },
        blogPost: posts.map((post) => ({
          "@id": `${fullUrl(`/blog/${post.slug}`)}#post`,
        })),
        mainEntityOfPage: {
          "@id": `${fullUrl("/blog")}#page`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${fullUrl("/blog")}#list`,
        name: `${business.shortName} Blog Articles`,
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
          "@id": `${website}#organization`,
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
        "@type": "WebSite",
        "@id": `${website}#website`,
        name: business.shortName,
        url: business.website,
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${website}#organization`,
        name: business.name,
        url: business.website,
        telephone: business.phoneDisplay,
        email: business.email,
        image: absoluteImage("/client/logo.png"),
        sameAs: [business.mapHref, business.facebook, business.yelp].filter(Boolean),
      },
      {
        "@type": "ImageObject",
        "@id": `${fullUrl(`/blog/${post.slug}`)}#primaryimage`,
        url: absoluteImage(post.data.heroImage),
      },
      {
        "@type": "WebPage",
        "@id": fullUrl(`/blog/${post.slug}`),
        url: fullUrl(`/blog/${post.slug}`),
        name: `${post.data.title} | ${business.shortName}`,
        description: post.data.excerpt,
        isPartOf: {
          "@id": `${website}#website`,
        },
        primaryImageOfPage: {
          "@id": `${fullUrl(`/blog/${post.slug}`)}#primaryimage`,
        },
        inLanguage: "en-US",
        about: {
          "@id": `${website}#organization`,
        },
      },
      {
        "@type": "BlogPosting",
        "@id": `${fullUrl(`/blog/${post.slug}`)}#post`,
        headline: post.data.title,
        description: post.data.excerpt,
        abstract: post.data.excerpt,
        datePublished: post.data.date,
        dateModified: post.data.modifiedDate || post.data.date,
        image: [{ "@id": `${fullUrl(`/blog/${post.slug}`)}#primaryimage` }],
        keywords: post.data.keywords,
        articleSection: post.data.articleSection || "Fence Planning",
        wordCount: post.wordCount,
        timeRequired: `PT${post.readingTimeMinutes}M`,
        isAccessibleForFree: true,
        inLanguage: "en-US",
        articleBody: post.content,
        author: {
          "@id": `${website}#organization`,
        },
        publisher: {
          "@id": `${website}#organization`,
        },
        mainEntityOfPage: {
          "@id": fullUrl(`/blog/${post.slug}`),
        },
        isPartOf: {
          "@type": "Blog",
          name: `${business.shortName} Blog`,
          url: fullUrl("/blog"),
        },
        mainEntity: {
          "@id": fullUrl(`/blog/${post.slug}`),
        },
        about: (post.data.relatedServices || []).map((slug) => ({
          "@type": "Service",
          url: fullUrl(servicePath(slug)),
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
