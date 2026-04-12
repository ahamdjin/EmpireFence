import { getAllPosts, getAllServices } from "@/lib/content";
import { business, serviceAreas } from "@/lib/site";
import { areaPath, areasIndexPath, privacyPolicyPath, servicePath, servicesIndexPath, termsPath } from "@/lib/paths";

export default async function sitemap() {
  const services = await getAllServices();
  const posts = await getAllPosts();
  const staticRoutes = [
    "",
    "/about-us",
    servicesIndexPath,
    "/gallery",
    areasIndexPath,
    "/contact-us",
    "/blog",
    privacyPolicyPath,
    termsPath,
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${business.website.replace(/\/$/, "")}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${business.website.replace(/\/$/, "")}${servicePath(service.slug)}`,
      lastModified: new Date(),
    })),
    ...serviceAreas.map((area) => ({
      url: `${business.website.replace(/\/$/, "")}${areaPath(area.slug)}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${business.website.replace(/\/$/, "")}/blog/${post.slug}`,
      lastModified: new Date(post.data.date),
    })),
  ];
}
