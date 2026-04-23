import { notFound } from "next/navigation";

import { buildAreaSlugMetadata, findAreaBySlug, LocationPage } from "@/components/dynamic-marketing-pages";
import { getAllAreas, getAllServices, getAreaBySlug } from "@/lib/content";
import { serviceAreas } from "@/lib/site";

export async function generateStaticParams() {
  const areas = await getAllAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const areaContent = await getAreaBySlug(slug);
  const area = findAreaBySlug(slug);
  const mergedArea = areaContent
    ? {
        ...(area || {}),
        ...areaContent.data,
        html: areaContent.html,
        sections: areaContent.sections,
        localFaqs: areaContent.data.faqs ?? area?.localFaqs,
        image: areaContent.data.heroImage ?? area?.image,
      }
    : area;
  return mergedArea ? buildAreaSlugMetadata(mergedArea) : {};
}

export default async function AreaSlugPage({ params }) {
  const { slug } = await params;
  const services = await getAllServices();
  const areaContent = await getAreaBySlug(slug);
  const baseArea = findAreaBySlug(slug);

  const area = areaContent
    ? {
        ...(baseArea || {}),
        ...areaContent.data,
        html: areaContent.html,
        sections: areaContent.sections,
        localFaqs: areaContent.data.faqs ?? baseArea?.localFaqs,
        image: areaContent.data.heroImage ?? baseArea?.image,
      }
    : baseArea;

  if (!area) {
    notFound();
  }

  return <LocationPage area={area} services={services} />;
}
