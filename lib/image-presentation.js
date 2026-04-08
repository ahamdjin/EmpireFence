const contextDefaults = {
  heroStage: { position: "50% 50%", scale: "1.08", hoverScale: "1.12" },
  heroStageSecondary: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  pageHero: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  pageHeroSecondary: { position: "50% 50%", scale: "1.06", hoverScale: "1.09" },
  story: { position: "50% 50%", scale: "1.04", hoverScale: "1.07" },
  railSticky: { position: "50% 50%", scale: "1.04", hoverScale: "1.08" },
  galleryFeature: { position: "50% 50%", scale: "1.06", hoverScale: "1.11" },
  galleryShowcase: { position: "50% 50%", scale: "1.08", hoverScale: "1.13" },
  galleryGrid: { position: "50% 50%", scale: "1.05", hoverScale: "1.1" },
  projectSpotlight: { position: "50% 50%", scale: "1.04", hoverScale: "1.07" },
  serviceEditorial: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  serviceFeature: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  serviceTile: { position: "50% 50%", scale: "1.04", hoverScale: "1.07" },
  serviceCard: { position: "50% 50%", scale: "1.04", hoverScale: "1.07" },
  postCard: { position: "50% 50%", scale: "1.04", hoverScale: "1.07" },
  journalFeature: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  articleHero: { position: "50% 50%", scale: "1.04", hoverScale: "1.06" },
  aboutCanvas: { position: "50% 50%", scale: "1.07", hoverScale: "1.1" },
  aboutEditorial: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
  locationCard: { position: "50% 50%", scale: "1.05", hoverScale: "1.08" },
};

const focalPoints = {
  "/client/hero-western.webp": {
    heroStage: "58% 46%",
  },
  "/client/wrought-fence.jpg": {
    heroStageSecondary: "58% 38%",
    story: "58% 42%",
    aboutCanvas: "62% 42%",
    aboutEditorial: "58% 44%",
    serviceEditorial: "58% 44%",
    serviceFeature: "58% 44%",
    galleryFeature: "58% 42%",
    pageHero: "58% 44%",
  },
  "/client/vinyl-fence.jpg": {
    railSticky: "52% 58%",
    serviceEditorial: "52% 58%",
    serviceFeature: "52% 58%",
    serviceTile: "52% 58%",
    serviceCard: "52% 58%",
    pageHero: "52% 58%",
    galleryFeature: "52% 58%",
    galleryShowcase: "52% 58%",
    galleryGrid: "52% 58%",
  },
  "/client/wood-fence.jpg": {
    serviceEditorial: "50% 56%",
    serviceFeature: "50% 56%",
    serviceTile: "50% 56%",
    serviceCard: "50% 56%",
    galleryFeature: "50% 56%",
    galleryShowcase: "50% 56%",
    galleryGrid: "50% 56%",
  },
  "/client/chain-link.jpg": {
    serviceEditorial: "62% 46%",
    serviceFeature: "62% 46%",
    serviceTile: "62% 46%",
    serviceCard: "62% 46%",
  },
  "/client/cinder-block-wall.jpg": {
    projectSpotlight: "54% 56%",
    serviceEditorial: "54% 58%",
    serviceFeature: "54% 58%",
    pageHero: "54% 58%",
  },
  "/client/custom-fence.webp": {
    serviceEditorial: "54% 48%",
    serviceFeature: "54% 48%",
    serviceTile: "54% 48%",
    serviceCard: "54% 48%",
  },
  "/client/location-riverside.jpg": {
    pageHero: "52% 56%",
    locationCard: "52% 56%",
    galleryShowcase: "54% 56%",
  },
  "/client/location-fontana.jpg": {
    pageHero: "54% 54%",
    locationCard: "54% 54%",
    galleryGrid: "54% 54%",
  },
  "/client/gallery-1.webp": {
    galleryFeature: "52% 48%",
    galleryShowcase: "52% 48%",
    galleryGrid: "52% 48%",
  },
  "/client/gallery-2.webp": {
    galleryFeature: "48% 54%",
    galleryShowcase: "48% 54%",
    galleryGrid: "48% 54%",
  },
  "/client/gallery-3.webp": {
    galleryFeature: "50% 52%",
    galleryShowcase: "50% 52%",
    galleryGrid: "50% 52%",
    articleHero: "50% 52%",
    journalFeature: "50% 52%",
    postCard: "50% 52%",
  },
  "/client/gallery-4.webp": {
    galleryFeature: "56% 48%",
    galleryShowcase: "56% 48%",
    galleryGrid: "56% 48%",
  },
};

export function getImagePresentation(src, context) {
  const defaults = contextDefaults[context] ?? {};
  const settings = focalPoints[src] ?? {};

  const position = settings[context] ?? settings.default ?? defaults.position ?? "50% 50%";
  const scale = settings[`${context}Scale`] ?? settings.scale ?? defaults.scale ?? "1.03";
  const hoverScale =
    settings[`${context}HoverScale`] ??
    settings.hoverScale ??
    defaults.hoverScale ??
    scale;

  return {
    "--media-object-position": position,
    "--media-scale": String(scale),
    "--media-hover-scale": String(hoverScale),
  };
}
