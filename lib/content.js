import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentRoot = path.join(process.cwd(), "content");
const servicesContentPath = path.join(contentRoot, "services");
const blogContentPath = path.join(contentRoot, "blog");
const areasContentPath = path.join(contentRoot, "areas");

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

function parseMarkdownSections(markdown) {
  const lines = markdown.split("\n");
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;

  function finishSubsection() {
    if (!currentSection || !currentSubsection) {
      return;
    }

    currentSection.subsections.push({
      title: currentSubsection.title,
      markdown: currentSubsection.lines.join("\n").trim(),
    });
    currentSubsection = null;
  }

  function finishSection() {
    if (!currentSection) {
      return;
    }

    finishSubsection();
    sections.push({
      title: currentSection.title,
      markdown: currentSection.lines.join("\n").trim(),
      subsections: currentSection.subsections,
    });
    currentSection = null;
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      finishSection();
      currentSection = {
        title: line.replace(/^##\s+/, "").trim(),
        lines: [],
        subsections: [],
      };
      continue;
    }

    if (!currentSection) {
      continue;
    }

    if (line.startsWith("### ")) {
      finishSubsection();
      currentSubsection = {
        title: line.replace(/^###\s+/, "").trim(),
        lines: [],
      };
      continue;
    }

    if (currentSubsection) {
      currentSubsection.lines.push(line);
    } else {
      currentSection.lines.push(line);
    }
  }

  finishSection();
  return sections.filter((section) => section.markdown || section.subsections.length);
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

function readDirectory(fullPath, directoryLabel, { requiredFields = [] } = {}) {
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

      validateFrontmatter(directoryLabel, slug, data, requiredFields);

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

async function renderSections(markdown) {
  const sections = parseMarkdownSections(markdown);

  return Promise.all(
    sections.map(async (section) => ({
      title: section.title,
      markdown: section.markdown,
      html: await toHtml(section.markdown),
      text: stripMarkdown(section.markdown),
      subsections: await Promise.all(
        section.subsections.map(async (subsection) => ({
          title: subsection.title,
          markdown: subsection.markdown,
          html: await toHtml(subsection.markdown),
          text: stripMarkdown(subsection.markdown),
        })),
      ),
    })),
  );
}

export async function getAllServices() {
  const services = readDirectory(servicesContentPath, "content/services", {
    requiredFields: ["title", "summary", "heroImage", "highlights", "faqs"],
  });
  const rendered = await Promise.all(
    services.map(async (service) => {
      const stats = getReadingStats(service.content);
      return {
        ...service,
        ...stats,
        html: await toHtml(service.content),
        sections: await renderSections(service.content),
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

export async function getAllAreas() {
  const areas = readDirectory(areasContentPath, "content/areas", {
    requiredFields: ["title", "summary", "heroImage", "faqs"],
  });
  const rendered = await Promise.all(
    areas.map(async (area) => {
      const stats = getReadingStats(area.content);
      return {
        ...area,
        ...stats,
        html: await toHtml(area.content),
        sections: await renderSections(area.content),
      };
    }),
  );

  return rendered.sort((first, second) => first.data.title.localeCompare(second.data.title));
}

export async function getAreaBySlug(slug) {
  const areas = await getAllAreas();
  return areas.find((area) => area.slug === slug) || null;
}

export async function getAllPosts() {
  const posts = readDirectory(blogContentPath, "content/blog", {
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
