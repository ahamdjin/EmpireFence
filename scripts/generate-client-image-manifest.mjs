import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const projectRoot = process.cwd();
const clientRoot = path.join(projectRoot, "public", "client");
const outputPath = path.join(projectRoot, "lib", "client-image-manifest.js");

const tokenMap = new Map([
  ["vinyl", "vinyl"],
  ["wood", "wood"],
  ["wrought", "wrought-iron"],
  ["iron", "wrought-iron"],
  ["metal", "metal"],
  ["chain", "chain-link"],
  ["link", "chain-link"],
  ["gate", "gate"],
  ["gates", "gate"],
  ["privacy", "privacy"],
  ["security", "security"],
  ["pool", "poolside"],
  ["repair", "repair"],
  ["damage", "repair"],
  ["transformation", "before-after"],
  ["cleanup", "cleanup"],
  ["crew", "crew"],
  ["team", "team"],
  ["site", "onsite"],
  ["project", "project-proof"],
  ["backyard", "backyard"],
  ["side", "side-yard"],
  ["yard", "yard"],
  ["slope", "slope"],
  ["boundary", "boundary"],
  ["entry", "entry"],
  ["double", "double-gate"],
  ["single", "single-gate"],
  ["patio", "patio"],
  ["deck", "deck"],
  ["seating", "outdoor-living"],
  ["turf", "turf"],
  ["driveway", "hardscape"],
  ["fence", "fence"],
  ["railing", "railing"],
  ["logo", "brand"],
]);

const explicitOverrides = {
  "/client/about/company-work-site.jpg": {
    subject: "company work site and finished fence context",
    qualityScore: 86,
    preferredRoles: ["about-story", "trust-section", "supporting-card"],
    avoidRoles: ["article-hero"],
    notes: "Strong supporting proof image for about/trust content.",
  },
  "/client/about/empire-fence-team.jpg": {
    subject: "Empire Fence team portrait",
    qualityScore: 84,
    preferredRoles: ["about-story", "team-proof", "trust-section"],
    avoidRoles: ["service-hero", "area-hero"],
    notes: "Use for team proof, not for product/material-led sections.",
  },
  "/client/home/hero-fence-project-1.jpg": {
    subject: "clean residential fence project with premium hero quality",
    qualityScore: 93,
    preferredRoles: ["home-hero", "page-hero", "social-share", "gallery-hero"],
    avoidRoles: [],
    notes: "One of the best wide hero images in the library.",
  },
  "/client/home/hero-fence-project-2.jpg": {
    subject: "supporting residential fence hero image",
    qualityScore: 88,
    preferredRoles: ["home-secondary", "page-hero", "gallery-hero", "article-card"],
    avoidRoles: [],
    notes: "Good supporting hero image, slightly less strong than hero-fence-project-1.",
  },
  "/client/logo.png": {
    subject: "Empire Fence logo mark",
    qualityScore: 52,
    preferredRoles: ["brand-only"],
    avoidRoles: ["home-hero", "service-hero", "area-hero", "article-card"],
    notes: "Brand asset only, not a content image.",
    status: "brand-only",
  },
  "/client/gbp/crew-on-site.jpg": {
    subject: "crew onsite in branded work shirt",
    qualityScore: 79,
    preferredRoles: ["trust-section", "process-proof", "blog-feature"],
    avoidRoles: ["service-hero", "area-hero"],
    notes: "Useful for trust/process, not strong enough for a premium hero.",
  },
  "/client/gbp/vinyl-install-crew.jpg": {
    subject: "crew installing vinyl fence and gate onsite",
    qualityScore: 87,
    preferredRoles: ["process-proof", "trust-section", "blog-feature", "service-support"],
    avoidRoles: ["home-hero"],
    notes: "Strong real-work image with people; best as proof rather than primary hero.",
  },
  "/client/gbp/vinyl-slope-boundary.jpg": {
    subject: "long vinyl slope boundary run",
    qualityScore: 90,
    preferredRoles: ["area-hero", "service-hero", "gallery-hero", "social-share"],
    avoidRoles: [],
    notes: "High-value wide image for long-run boundary messaging.",
  },
  "/client/vinyl-fence.jpg": {
    subject: "legacy vinyl fence library image",
    qualityScore: 70,
    preferredRoles: ["service-support", "gallery-card"],
    avoidRoles: ["home-hero", "area-hero"],
    notes: "Usable, but newer vinyl images are stronger.",
  },
  "/client/wood-fence.jpg": {
    subject: "legacy wood fence library image",
    qualityScore: 68,
    preferredRoles: ["service-support", "gallery-card"],
    avoidRoles: ["home-hero", "area-hero"],
    notes: "Reserve image; stronger wood images exist in gallery and locations.",
  },
  "/client/wrought-fence.jpg": {
    subject: "legacy wrought-style fence library image",
    qualityScore: 69,
    preferredRoles: ["service-support", "gallery-card"],
    avoidRoles: ["home-hero", "area-hero"],
    notes: "Reserve image; newer Rancho/wrought images are better.",
  },
  "/client/chain-link.jpg": {
    subject: "legacy chain link fence image",
    qualityScore: 71,
    preferredRoles: ["service-support", "article-card"],
    avoidRoles: ["home-hero", "area-hero"],
    notes: "Still usable, but dedicated chain-link service images are stronger.",
  },
  "/client/driveway-patio.jpg": {
    subject: "driveway and patio hardscape support image",
    qualityScore: 73,
    preferredRoles: ["supporting-card", "patio-support", "article-support"],
    avoidRoles: ["service-hero", "area-hero"],
    notes: "Context image only.",
  },
  "/client/turf-installation.webp": {
    subject: "turf installation support image",
    qualityScore: 64,
    preferredRoles: ["supporting-card"],
    avoidRoles: ["service-hero", "area-hero", "home-hero"],
    notes: "Peripheral image; avoid unless the section is specifically about turf or cleanup context.",
  },
  "/client/services/cinder-block-walls/cinder-block-wall-construction.jpg": {
    qualityScore: 58,
    preferredRoles: ["legacy-service", "article-support"],
    avoidRoles: ["home-hero", "area-hero", "service-hero"],
    notes: "Legacy service image; keep out of primary rotations.",
    status: "legacy",
  },
  "/client/services/cinder-block-walls/cinder-block-wall-finished.jpg": {
    qualityScore: 57,
    preferredRoles: ["legacy-service", "article-support"],
    avoidRoles: ["home-hero", "area-hero", "service-hero"],
    notes: "Legacy service image; keep out of primary rotations.",
    status: "legacy",
  },
  "/client/services/custom-fence/custom-fence-design-1.jpg": {
    qualityScore: 60,
    preferredRoles: ["legacy-service", "gallery-card"],
    avoidRoles: ["home-hero", "area-hero", "service-hero"],
    notes: "Reserve only if custom-fence content returns.",
    status: "legacy",
  },
  "/client/services/custom-fence/custom-fence-design-2.jpg": {
    qualityScore: 61,
    preferredRoles: ["legacy-service", "gallery-card"],
    avoidRoles: ["home-hero", "area-hero", "service-hero"],
    notes: "Reserve only if custom-fence content returns.",
    status: "legacy",
  },
};

function titleCase(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugToWords(value) {
  return value.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").trim();
}

function buildTags(parts, fileName) {
  const tokens = [...parts.flatMap((part) => slugToWords(part).split(" ")), ...slugToWords(fileName).split(" ")];
  const tags = new Set();

  for (const token of tokens) {
    const normalized = token.toLowerCase();
    if (tokenMap.has(normalized)) {
      tags.add(tokenMap.get(normalized));
    }
  }

  if (parts.includes("locations")) {
    tags.add("local");
  }
  if (parts.includes("gallery")) {
    tags.add("gallery");
  }
  if (parts.includes("projects")) {
    tags.add("project-proof");
  }
  if (parts.includes("gbp")) {
    tags.add("real-photo");
  }
  if (parts.includes("about")) {
    tags.add("brand-proof");
  }

  return [...tags];
}

function inferCategory(relativePath) {
  const parts = relativePath.split("/");
  if (parts[0] === "about") return "about";
  if (parts[0] === "home") return "home";
  if (parts[0] === "gallery") return "gallery";
  if (parts[0] === "gbp") return "gbp";
  if (parts[0] === "locations") return `location:${parts[1] ?? "general"}`;
  if (parts[0] === "projects") return "projects";
  if (parts[0] === "services") return `service:${parts[1] ?? "general"}`;
  if (parts.length === 1 && parts[0] === "logo.png") return "brand";
  if (parts.length === 1) return "top-level";
  return "misc";
}

function inferSubject(relativePath, category) {
  const parts = relativePath.split("/");
  const fileName = parts.at(-1);

  if (category === "brand") return "Empire Fence logo";
  if (category.startsWith("location:")) {
    const city = category.split(":")[1].replace(/-/g, " ");
    return `${titleCase(slugToWords(fileName))} for ${titleCase(city)}`;
  }
  if (category.startsWith("service:")) {
    const service = category.split(":")[1].replace(/-/g, " ");
    return `${titleCase(slugToWords(fileName))} for ${titleCase(service)}`;
  }

  return titleCase(slugToWords(fileName));
}

function inferPreferredRoles(category, orientation, tags, width, height) {
  const roles = new Set();
  const wide = width >= 1200 || height >= 1200;

  switch (true) {
    case category === "brand":
      roles.add("brand-only");
      break;
    case category === "home":
      roles.add("home-hero");
      roles.add("page-hero");
      roles.add("social-share");
      break;
    case category === "about":
      roles.add("about-story");
      roles.add("trust-section");
      break;
    case category === "gallery":
      roles.add("gallery-grid");
      roles.add("gallery-card");
      if (wide && orientation === "landscape") roles.add("gallery-hero");
      break;
    case category === "gbp":
      roles.add("supporting-card");
      roles.add("blog-support");
      if (tags.includes("crew")) roles.add("trust-section");
      if (tags.includes("gate")) roles.add("service-support");
      if (tags.includes("patio") || tags.includes("deck") || tags.includes("outdoor-living")) {
        roles.add("supporting-scope");
      }
      if (orientation === "landscape" && wide) roles.add("gallery-hero");
      break;
    case category.startsWith("location:"):
      roles.add("area-card");
      roles.add("local-proof");
      if (orientation === "landscape") roles.add("area-hero");
      if (wide) roles.add("social-share");
      break;
    case category === "projects":
      roles.add("project-proof");
      roles.add("before-after");
      roles.add("blog-support");
      break;
    case category.startsWith("service:"):
      roles.add("service-card");
      roles.add("service-support");
      roles.add("gallery-card");
      if (orientation === "landscape") roles.add("service-hero");
      if (wide) roles.add("social-share");
      break;
    case category === "top-level":
      roles.add("service-support");
      roles.add("gallery-card");
      break;
    default:
      roles.add("supporting-card");
  }

  if (tags.includes("privacy")) roles.add("privacy-proof");
  if (tags.includes("security")) roles.add("security-proof");
  if (tags.includes("repair")) roles.add("repair-proof");
  if (tags.includes("gate")) roles.add("gate-proof");
  if (tags.includes("team")) roles.add("team-proof");

  return [...roles];
}

function inferAvoidRoles(category, orientation, qualityScore) {
  const avoid = new Set();

  if (category === "brand") {
    avoid.add("content-image");
  }
  if (orientation === "portrait") {
    avoid.add("wide-hero");
    avoid.add("homepage-wide");
  }
  if (qualityScore < 72) {
    avoid.add("home-hero");
    avoid.add("area-hero");
  }
  if (category === "top-level") {
    avoid.add("home-hero");
  }
  if (category.includes("cinder-block-walls") || category.includes("custom-fence")) {
    avoid.add("service-hero");
    avoid.add("area-hero");
    avoid.add("home-hero");
  }

  return [...avoid];
}

function qualityScoreFor({ width, height, category, tags, fileName }) {
  let score = 55;
  const maxSide = Math.max(width, height);
  const minSide = Math.min(width, height);
  const megaPixels = (width * height) / 1_000_000;

  if (maxSide >= 1900) score += 18;
  else if (maxSide >= 1500) score += 14;
  else if (maxSide >= 1200) score += 10;
  else if (maxSide >= 1000) score += 7;
  else if (maxSide >= 800) score += 4;

  if (megaPixels >= 2.5) score += 6;
  else if (megaPixels >= 1.5) score += 3;

  if (minSide < 600) score -= 6;

  if (category === "home") score += 10;
  if (category.startsWith("location:")) score += 10;
  if (category === "gallery") score += 6;
  if (category === "gbp") score += 7;
  if (category === "about") score += 4;
  if (category === "projects") score += 4;
  if (category.startsWith("service:")) score += 6;
  if (category === "brand") score -= 20;
  if (category.includes("cinder-block-walls") || category.includes("custom-fence")) score -= 10;

  if (tags.includes("privacy")) score += 3;
  if (tags.includes("security")) score += 2;
  if (tags.includes("project-proof")) score += 2;
  if (tags.includes("crew")) score += 1;
  if (tags.includes("real-photo")) score += 2;

  if (fileName.includes("before") || fileName.includes("damage")) score -= 4;
  if (fileName.includes("logo")) score -= 10;

  return Math.max(40, Math.min(95, score));
}

function qualityBand(score) {
  if (score >= 90) return "premium";
  if (score >= 82) return "strong";
  if (score >= 72) return "usable";
  if (score >= 62) return "supporting";
  return "reserve";
}

function statusFor(score, category, overrideStatus) {
  if (overrideStatus) return overrideStatus;
  if (category === "brand") return "brand-only";
  if (category.includes("cinder-block-walls") || category.includes("custom-fence")) return "legacy";
  if (score >= 88) return "primary";
  if (score >= 76) return "secondary";
  if (score >= 64) return "supporting";
  return "reserve";
}

function noteFor({ status, orientation, category }) {
  if (status === "brand-only") return "Use only as a brand mark or favicon-style asset.";
  if (status === "legacy") return "Legacy/support image. Keep out of core hero rotations.";
  if (orientation === "portrait") return "Best used in cards, editorial supports, or cropped detail slots.";
  if (category.startsWith("location:")) return "Good candidate for localized city/area trust sections.";
  if (category.startsWith("service:")) return "Use where the service topic specifically matches the photo.";
  return "Usable library image; slot it where topic match and crop safety stay strong.";
}

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return getFiles(fullPath);
      }
      return [fullPath];
    }),
  );

  return files.flat().sort();
}

async function buildManifest() {
  const files = (await getFiles(clientRoot)).filter((file) => !file.endsWith(".DS_Store"));
  const manifest = [];

  for (const file of files) {
    const metadata = await sharp(file).metadata();
    const relativePath = path.relative(clientRoot, file).replaceAll(path.sep, "/");
    const publicPath = `/client/${relativePath}`;
    const parts = relativePath.split("/");
    const fileName = parts.at(-1);
    const category = inferCategory(relativePath);
    const tags = buildTags(parts.slice(0, -1), fileName);
    const orientation =
      metadata.width === metadata.height ? "square" : metadata.width > metadata.height ? "landscape" : "portrait";
    const override = explicitOverrides[publicPath] ?? {};
    const baseQualityScore = qualityScoreFor({
      width: metadata.width ?? 0,
      height: metadata.height ?? 0,
      category,
      tags,
      fileName,
    });
    const score = override.qualityScore ?? baseQualityScore;
    const roles = override.preferredRoles ?? inferPreferredRoles(category, orientation, tags, metadata.width ?? 0, metadata.height ?? 0);
    const avoidRoles = override.avoidRoles ?? inferAvoidRoles(category, orientation, score);
    const subject = override.subject ?? inferSubject(relativePath, category);
    const status = statusFor(score, category, override.status);

    manifest.push({
      id: relativePath.replace(/[/.]/g, "-"),
      path: publicPath,
      width: metadata.width ?? null,
      height: metadata.height ?? null,
      orientation,
      category,
      subject,
      tags,
      qualityScore: score,
      qualityBand: qualityBand(score),
      preferredRoles: roles,
      avoidRoles,
      status,
      notes: override.notes ?? noteFor({ status, orientation, category }),
    });
  }

  return manifest.sort((a, b) => a.path.localeCompare(b.path));
}

function buildRoleIndex(manifest) {
  const index = {};
  for (const item of manifest) {
    for (const role of item.preferredRoles) {
      index[role] ??= [];
      index[role].push(item.path);
    }
  }

  for (const role of Object.keys(index)) {
    index[role] = index[role]
      .sort((a, b) => {
        const aScore = manifest.find((item) => item.path === a)?.qualityScore ?? 0;
        const bScore = manifest.find((item) => item.path === b)?.qualityScore ?? 0;
        return bScore - aScore || a.localeCompare(b);
      });
  }

  return index;
}

async function main() {
  const manifest = await buildManifest();
  const byPath = Object.fromEntries(manifest.map((item) => [item.path, item]));
  const byRole = buildRoleIndex(manifest);

  const output = `export const clientImageManifest = ${JSON.stringify(manifest, null, 2)};\n\nexport const clientImageManifestByPath = ${JSON.stringify(byPath, null, 2)};\n\nexport const clientImageManifestByRole = ${JSON.stringify(byRole, null, 2)};\n`;

  await fs.writeFile(outputPath, output);
  console.log(`Wrote ${manifest.length} client image entries to ${path.relative(projectRoot, outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
