import { notFound } from "next/navigation";

import { buildAreaSlugMetadata, findAreaBySlug, LocationPage } from "@/components/dynamic-marketing-pages";
import { getAllServices } from "@/lib/content";
import { serviceAreas } from "@/lib/site";

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = findAreaBySlug(slug);
  return area ? buildAreaSlugMetadata(area) : {};
}

export default async function AreaSlugPage({ params }) {
  const { slug } = await params;
  const services = await getAllServices();
  const area = findAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return <LocationPage area={area} services={services} />;
}
