import { business } from "@/lib/site";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = "/client/hero-western.webp",
}) {
  const fullTitle = `${title} | ${business.shortName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
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
    openingHours: "Mo-Sa 07:00-19:00",
    url: business.website,
  };
}
