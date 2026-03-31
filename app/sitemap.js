import { getAllPosts, getAllServices } from "@/lib/content";
import { business, serviceAreas } from "@/lib/site";

export default async function sitemap() {
  const services = await getAllServices();
  const posts = await getAllPosts();
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/service-areas",
    "/contact-us",
    "/blog",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${business.website.replace(/\/$/, "")}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${business.website.replace(/\/$/, "")}/${service.slug}`,
      lastModified: new Date(),
    })),
    ...serviceAreas.map((area) => ({
      url: `${business.website.replace(/\/$/, "")}/${area.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${business.website.replace(/\/$/, "")}/blog/${post.slug}`,
      lastModified: new Date(post.data.date),
    })),
  ];
}
