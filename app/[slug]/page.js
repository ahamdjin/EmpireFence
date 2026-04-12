import { notFound, permanentRedirect } from "next/navigation";

import { findAreaBySlug } from "@/components/dynamic-marketing-pages";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { areaPath, servicePath } from "@/lib/paths";
import { serviceAreas } from "@/lib/site";

export async function generateStaticParams() {
  const services = await getAllServices();
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...serviceAreas.map((area) => ({ slug: area.slug })),
  ];
}

export default async function LegacyMarketingSlugPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (service) {
    permanentRedirect(servicePath(service.slug));
  }

  const area = findAreaBySlug(slug);
  if (area) {
    permanentRedirect(areaPath(area.slug));
  }

  notFound();
}
