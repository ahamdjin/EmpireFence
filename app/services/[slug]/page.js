import { notFound } from "next/navigation";

import { buildServiceSlugMetadata, ServicePage } from "@/components/dynamic-marketing-pages";
import { getAllServices, getServiceBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return service ? buildServiceSlugMetadata(service) : {};
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const services = await getAllServices();
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} services={services} />;
}
