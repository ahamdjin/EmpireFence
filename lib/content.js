import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const root = process.cwd();

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, " $1 ")
    .replace(/^>\s+/gm, " ")
    .replace(/[#*_>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getReadingStats(markdown) {
  const plainText = stripMarkdown(markdown);
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 220));

  return {
    wordCount,
    readingTimeMinutes,
  };
}

function validateFrontmatter(directory, slug, data, requiredFields) {
  const missing = requiredFields.filter((field) => {
    const value = data[field];

    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === undefined || value === null || value === "";
  });

  if (missing.length) {
    throw new Error(
      `Missing required frontmatter in ${directory}/${slug}.md: ${missing.join(", ")}`,
    );
  }
}

function readDirectory(directory, { requiredFields = [] } = {}) {
  const fullPath = path.join(root, directory);
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => {
      const source = fs.readFileSync(path.join(fullPath, file), "utf8");
      const { data, content } = matter(source);
      const slug = data.slug || file.replace(/\.md$/, "");

      if (data.draft) {
        return null;
      }

      validateFrontmatter(directory, slug, data, requiredFields);

      return {
        slug,
        data,
        content,
      };
    })
    .filter(Boolean);
}

async function toHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getAllServices() {
  const services = readDirectory("content/services", {
    requiredFields: ["title", "summary", "heroImage", "highlights", "faqs"],
  });
  const rendered = await Promise.all(
    services.map(async (service) => {
      const stats = getReadingStats(service.content);
      return {
        ...service,
        ...stats,
        html: await toHtml(service.content),
      };
    }),
  );

  return rendered.sort((first, second) => {
    const a = first.data.order || 999;
    const b = second.data.order || 999;
    return a - b;
  });
}

export async function getServiceBySlug(slug) {
  const services = await getAllServices();
  return services.find((service) => service.slug === slug) || null;
}

export async function getAllPosts() {
  const posts = readDirectory("content/blog", {
    requiredFields: ["title", "date", "excerpt", "heroImage"],
  });
  const rendered = await Promise.all(
    posts.map(async (post) => {
      const stats = getReadingStats(post.content);
      return {
        ...post,
        ...stats,
        html: await toHtml(post.content),
      };
    }),
  );

  return rendered.sort(
    (first, second) =>
      new Date(second.data.date).getTime() - new Date(first.data.date).getTime(),
  );
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
