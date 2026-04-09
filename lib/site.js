export const business = {
  name: "Empire Fence Inc.",
  shortName: "Empire Fence",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "empirefenceinc@gmail.com",
  emailHref: "mailto:empirefenceinc@gmail.com",
  city: "Jurupa Valley, CA",
  address: "4020 Bain St, Jurupa Valley, CA",
  hours: "Mon-Sat / 7 AM-7 PM",
  website: "https://empirefenceca.com/",
  mapHref:
    "https://www.google.com/maps/place/Empire+Fence/@34.0208855,-117.7884372,10z/data=!3m1!4b1!4m6!3m5!1s0x80dcb59eeef40d83:0x17bc7ac13579206f!8m2!3d34.0213271!4d-117.458118!16s%2Fg%2F11ss8kct1t?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105794.54977796878!2d-117.7884372!3d34.0208855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb59eeef40d83%3A0x17bc7ac13579206f!2sEmpire%20Fence!5e0!3m2!1sen!2sus!4v1712678400000!5m2!1sen!2sus",
  yelp: "https://www.yelp.com/biz/empire-fence-jurupa-valley-2?osq=Empirefence&override_cta=Get+a+quote",
  facebook: "https://www.facebook.com/ReliableFenceCA/",
  reviewSummary:
    "Fence installation, repairs, railings, patio enclosures, gazebo builds, and related exterior boundary work across Jurupa Valley and nearby Inland Empire cities.",
};

export const chatWidget = {
  widgetId: "69cd30d134c04424ce26efa7",
  loaderSrc: "https://widgets.leadconnectorhq.com/loader.js",
  resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
};

export const bookingWidget = {
  iframeSrc: "https://api.leadconnectorhq.com/widget/booking/U8dcaomRA4oKx7KP7z2Q",
  iframeId: "U8dcaomRA4oKx7KP7z2Q_1774568093366",
  scriptSrc: "https://link.msgsndr.com/js/form_embed.js",
};

export const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export const socialLinks = [
  { href: business.mapHref, label: "Google Maps" },
  { href: business.facebook, label: "Facebook" },
  { href: business.yelp, label: "Yelp" },
];

export const highlightStats = [
  { value: "40+", label: "Years of combined field experience" },
  { value: "10", label: "Service paths on the lineup" },
  { value: "Free", label: "Estimate path for new projects" },
];

export const trustPoints = [
  {
    title: "Clear scope before install",
    copy:
      "Fence line, gate clearance, wall transitions, and finish details are mapped before the crews start.",
  },
  {
    title: "One contractor for the property edge",
    copy:
      "Gates, fence lines, and wall transitions can stay coordinated instead of splitting into scattered handoffs.",
  },
  {
    title: "Fast estimate path",
    copy:
      "Quick answers, practical recommendations, and a cleaner handoff from estimate to install.",
  },
];

export const aboutHighlights = [
  {
    eyebrow: "Fence installation",
    title: "Privacy runs that sit clean from the street.",
    copy:
      "Vinyl, wood, chain link, and iron work are planned around grade, transitions, and the way the frontage actually reads once the install is done.",
    image: "/client/vinyl-fence.jpg",
  },
  {
    eyebrow: "Supporting scope",
    title: "Gates and walls under one tighter path.",
    copy:
      "The fence line, gate details, and wall transitions can stay coordinated instead of getting split into disconnected handoffs after the install starts.",
    image: "/client/cinder-block-wall.jpg",
  },
];

export const featuredProjects = [
  {
    image: "/client/wrought-fence.jpg",
    eyebrow: "Wrought iron",
    title: "Decorative frontage with sharper gate detail.",
  },
  {
    image: "/client/vinyl-fence.jpg",
    eyebrow: "Vinyl privacy",
    title: "Long privacy runs that read clean from the street.",
  },
  {
    image: "/client/wood-fence.jpg",
    eyebrow: "Wood boundary",
    title: "Warm boundary work for side yards and larger lots.",
  },
  {
    image: "/client/cinder-block-wall.jpg",
    eyebrow: "Wall detail",
    title: "Block wall work when the frontage needs more than fencing.",
  },
];

export const serviceAreas = [
  {
    slug: "riverside-ca",
    title: "Riverside, CA",
    image: "/client/location-riverside.jpg",
    intro:
      "Fence, gate, and exterior work across Riverside with clean installs and practical planning.",
  },
  {
    slug: "ontario-ca",
    title: "Ontario, CA",
    image: "/client/gallery-1.webp",
    intro:
      "Residential and commercial perimeter work with detail-focused planning from the first visit.",
  },
  {
    slug: "chino-ca",
    title: "Chino, CA",
    image: "/client/gallery-2.webp",
    intro:
      "Fence builds, privacy upgrades, and outdoor scope that fit the layout of the property.",
  },
  {
    slug: "rancho-cucamonga-ca",
    title: "Rancho Cucamonga, CA",
    image: "/client/gallery-3.webp",
    intro:
      "High-visibility frontage, gate work, and polished outdoor upgrades across Rancho Cucamonga.",
  },
  {
    slug: "fontana-ca",
    title: "Fontana, CA",
    image: "/client/location-fontana.jpg",
    intro:
      "Fast-moving fence projects, secure perimeter work, and exterior improvements tailored to Fontana properties.",
  },
  {
    slug: "san-bernardino-ca",
    title: "San Bernardino, CA",
    image: "/client/gallery-4.webp",
    intro:
      "Fence, chain link, and boundary work for homes, businesses, and larger lots across San Bernardino.",
  },
];

export const coverageNotes = [
  {
    title: "Residential frontage",
    copy: "Privacy fencing, curb-facing iron work, and side-yard runs for homes that need a cleaner edge.",
  },
  {
    title: "Commercial perimeter",
    copy: "Entry gates, secure perimeter work, and layout decisions that fit higher-traffic properties.",
  },
  {
    title: "Bundled outdoor scope",
    copy: "Walls and gate scope when the property edge needs more than a single fence run.",
  },
];

export const industries = [
  "Residential",
  "Commercial",
  "Industrial",
  "Education",
  "Multi-property upgrades",
];

export const faqs = [
  {
    question: "What services does Empire Fence handle?",
    answer:
      "Empire Fence handles vinyl, wood, chain link, wrought iron, metal fencing, fence repairs, gazebo builds, fence supply support, railing work, and patio enclosures.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Free estimates are the main first step for new fence, gate, wall, and exterior upgrade projects.",
  },
  {
    question: "Do you work outside Jurupa Valley?",
    answer:
      "Yes. The active coverage includes Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, and San Bernardino.",
  },
  {
    question: "Can the team handle more than fencing?",
    answer:
      "Yes. The lineup also includes fence repairs, railings, patio enclosures, gazebo building, and fence supply support when the property needs a more complete exterior scope.",
  },
];

export const contactPrompts = [
  "Property address or city",
  "Material direction if you already know it",
  "Approximate scope or linear footage",
  "Photos of the current fence line or entry",
];

export const galleryCollections = [
  {
    title: "Privacy fencing",
    copy: "Vinyl and wood runs for side yards, backyards, and clean perimeter coverage.",
  },
  {
    title: "Decorative frontage",
    copy: "Wrought iron, gates, and curb-facing fence work that adds sharper street presence.",
  },
  {
    title: "Bundled exterior work",
    copy: "Walls and gate sections when the frontage needs a more complete finish.",
  },
];
