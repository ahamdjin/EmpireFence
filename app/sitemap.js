import { getAllAreas, getAllPosts, getAllServices } from "@/lib/content";
import { business, contentDates } from "@/lib/site";
import { areaPath, areasIndexPath, privacyPolicyPath, servicePath, servicesIndexPath, termsPath } from "@/lib/paths";

export default async function sitemap() {
  const [services, areas, posts] = await Promise.all([getAllServices(), getAllAreas(), getAllPosts()]);
  const staticRoutes = [
    { path: "", lastModified: contentDates.site },
    { path: "/about-us", lastModified: contentDates.site },
    { path: servicesIndexPath, lastModified: contentDates.services },
    { path: "/gallery", lastModified: contentDates.site },
    { path: areasIndexPath, lastModified: contentDates.areas },
    { path: "/contact-us", lastModified: contentDates.site },
    { path: "/blog", lastModified: contentDates.site },
    { path: privacyPolicyPath, lastModified: contentDates.legal },
    { path: termsPath, lastModified: contentDates.legal },
  ];

  return [
    ...staticRoutes.map(({ path, lastModified }) => ({
      url: `${business.website.replace(/\/$/, "")}${path || "/"}`,
      lastModified: new Date(lastModified),
    })),
    ...services.map((service) => ({
      url: `${business.website.replace(/\/$/, "")}${servicePath(service.slug)}`,
      lastModified: new Date(service.data.modifiedDate || contentDates.services),
    })),
    ...areas.map((area) => ({
      url: `${business.website.replace(/\/$/, "")}${areaPath(area.slug)}`,
      lastModified: new Date(area.data.modifiedDate || contentDates.areas),
    })),
    ...posts.map((post) => ({
      url: `${business.website.replace(/\/$/, "")}/blog/${post.slug}`,
      lastModified: new Date(post.data.modifiedDate || post.data.date),
    })),
  ];
}
