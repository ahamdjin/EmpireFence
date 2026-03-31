import { business } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${business.website.replace(/\/$/, "")}/sitemap.xml`,
  };
}
