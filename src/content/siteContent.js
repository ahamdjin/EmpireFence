export const business = {
  name: "Empire Fence Inc",
  phoneDisplay: "(951) 398-2016",
  phoneHref: "tel:9513982016",
  email: "solution.gf@gmail.com",
  emailHref: "mailto:solution.gf@gmail.com",
  location: "Jurupa Valley, CA",
  hours: "Mon-Sat / 7 AM-7 PM",
  mapHref: "https://maps.app.goo.gl/xRa6wkZfcRGdspvU6",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Reliable%20Fence%20Inc.%20Fontana%2C%20CA%2C%20USA&t=m&z=9&output=embed&iwloc=near",
  facebook: "https://www.facebook.com/ReliableFenceCA/",
  yelp: "https://www.yelp.com/biz/reliable-fence-jurupa-valley-2",
  google: "https://maps.app.goo.gl/xRa6wkZfcRGdspvU6",
};

export const chatWidget = {
  widgetId: "69c01d67633c74d10c369675",
  locationId: "VUXXwCAxSkjuGBKAjon6",
  loaderSrc: "https://widgets.leadconnectorhq.com/loader.js",
  resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
};

export const bookingWidget = {
  iframeSrc: "https://api.leadconnectorhq.com/widget/booking/U8dcaomRA4oKx7KP7z2Q",
  iframeId: "U8dcaomRA4oKx7KP7z2Q_1774568093366",
  scriptSrc: "https://link.msgsndr.com/js/form_embed.js",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "Coverage", href: "#coverage" },
  { label: "Quote", href: "#estimate" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Fence and gate contractor / Inland Empire",
  title: ["Perimeter work", "that feels", "resolved."],
  lede:
    "Empire Fence installs wrought iron, vinyl, wood, chain link, and gate systems with cleaner lines, stronger frontage, and less project drag.",
  primaryCta: { label: "Start the estimate", href: "#estimate" },
  secondaryCta: { label: "View selected work", href: "#gallery" },
  facts: [
    { value: "40+", label: "years in the field" },
    { value: "Free", label: "estimates" },
    { value: "Inland Empire", label: "service area" },
  ],
  highlights: [
    "Wrought iron, vinyl, wood, chain link, and gates",
    "Residential and commercial installs",
    "Exterior upgrades when needed",
  ],
  visualNotes: [
    { label: "Open hours", value: business.hours },
    { label: "Service area", value: "Jurupa Valley + Inland Empire" },
  ],
  primaryImage: {
    src: "/images/hero-fence.jpg",
    alt: "Empire Fence wrought iron install",
  },
  secondaryImage: {
    src: "/images/detail-fence.jpg",
    alt: "Fence detail close-up",
  },
};

export const story = {
  eyebrow: "Why Empire Fence",
  title: "Built for stronger lines, smoother gate function, and a cleaner street view.",
  intro:
    "Empire Fence handles fence installs, gates, and related exterior scope so the finished perimeter feels clean instead of pieced together.",
  points: [
    {
      title: "Fence first. Exterior scope if needed.",
      body:
        "Vinyl, wood, chain link, wrought iron, gates, and the exterior upgrades that keep the final perimeter result coherent.",
    },
    {
      title: "Cleaner line work and less project drag.",
      body:
        "Straighter runs, stronger gate alignment, quicker answers, and a finish that still reads clean later.",
    },
  ],
};

export const services = [
  {
    id: "wrought-iron",
    number: "01",
    title: "Wrought iron fencing",
    copy:
      "Decorative frontage, stronger security presence, and gate pairings that make the property read more intentional from the street.",
    detail: "Best for curb appeal and visible perimeter work.",
    image: "/images/hero-fence.jpg",
    chips: ["Frontage", "Decorative security", "Custom gates"],
    tone: "dark",
  },
  {
    id: "vinyl-wood",
    number: "02",
    title: "Vinyl and wood fencing",
    copy:
      "Residential privacy installs built around clean lines, durable material choices, and a calmer finished look.",
    detail: "A good fit when enclosure, maintenance, and appearance all matter.",
    image: "/images/detail-fence.jpg",
    chips: ["Privacy", "Residential", "Low maintenance"],
    tone: "light",
  },
  {
    id: "chain-link",
    number: "03",
    title: "Chain link and perimeter control",
    copy:
      "Practical lot coverage, utility edges, and commercial boundary work where function and access matter first.",
    detail: "Built for faster installation and straightforward perimeter control.",
    image: "/images/hero-fence.jpg",
    chips: ["Commercial", "Utility zones", "Fast coverage"],
    tone: "light",
  },
  {
    id: "gates-exterior",
    number: "04",
    title: "Gates and exterior scope",
    copy:
      "Manual and automatic gates, repair and alignment work, plus turf, walls, patios, and related exterior upgrades.",
    detail: "Useful when the perimeter needs to be solved as one coordinated scope.",
    image: "/images/detail-fence.jpg",
    chips: ["Access", "Walls + patios", "Full perimeter scope"],
    tone: "accent",
  },
];

export const gallery = [
  {
    title: "Street-facing iron work",
    copy: "Decorative linework with tighter finish detail.",
    image: "/images/hero-fence.jpg",
    variant: "tall",
    position: "56% center",
  },
  {
    title: "Closer finish quality",
    copy: "Detail decisions that keep the install reading clean later.",
    image: "/images/detail-fence.jpg",
    variant: "wide",
    position: "center center",
  },
  {
    title: "Residential perimeter",
    copy: "Privacy, access, and stronger edge definition.",
    image: "/images/hero-fence.jpg",
    variant: "square",
    position: "38% center",
  },
  {
    title: "Commercial boundary control",
    copy: "Coverage, access, and practical perimeter planning.",
    image: "/images/detail-fence.jpg",
    variant: "square",
    position: "center center",
  },
];

export const proof = {
  eyebrow: "Why the work closes",
  title: "Cleaner process. Better trust. Less friction.",
  differentiators: [
    {
      title: "Faster communication",
      copy: "Quick answers, clearer scope, and less drift once the job starts.",
    },
    {
      title: "Field-tested judgment",
      copy: "Material and layout decisions improve when the crew already knows the tricky version of the work.",
    },
    {
      title: "Finish that still reads clean later",
      copy: "Gate alignment, corners, transitions, and edge control are treated as part of the work, not leftovers.",
    },
  ],
  testimonial: {
    quote:
      "I spoke to George, got an estimate the same day, and the work was scheduled and completed within days.",
    source: "Yelp review",
  },
  process: [
    "Walk the property and set the line.",
    "Lock the material, access, and details.",
    "Install with cleaner alignment and finish.",
  ],
};

export const coverage = {
  eyebrow: "Coverage",
  title: "Jurupa Valley base. Inland Empire reach.",
  body:
    "If the property sits in or around the Inland Empire, the scope can usually be reviewed quickly.",
  areas: [
    "Jurupa Valley",
    "Riverside",
    "Ontario",
    "Chino",
    "Rancho Cucamonga",
    "Fontana",
    "San Bernardino",
  ],
  links: [
    { label: "Google reviews", href: business.google },
    { label: "Yelp profile", href: business.yelp },
    { label: "Open map", href: business.mapHref },
  ],
};

export const estimate = {
  eyebrow: "Estimate / booking",
  title: "Start with the scope. Book if timing works.",
  quoteTitle: "Share enough detail to get the estimate moving.",
  bookingTitle: "Live booking inside the site.",
  contactPoints: [
    { label: "Call", value: business.phoneDisplay, href: business.phoneHref },
    { label: "Email", value: business.email, href: business.emailHref },
    { label: "Location", value: business.location, href: business.mapHref },
  ],
};

export const faqs = [
  {
    question: "What fence types do you install?",
    answer:
      "Empire Fence handles wrought iron, vinyl, wood, chain link, gate work, and select exterior upgrades tied to the perimeter project.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. The current business positioning is built around direct quote requests and free estimates.",
  },
  {
    question: "Can you handle residential and commercial work?",
    answer:
      "Yes. The business presents itself for residential, commercial, education, and industrial property work across the Inland Empire.",
  },
  {
    question: "Do you only build fences?",
    answer:
      "No. Gates, walls, patios, turf, and surrounding exterior work can stay inside the same overall scope when needed.",
  },
  {
    question: "Is there warranty coverage?",
    answer:
      "The current business messaging references a one-year warranty. Exact warranty detail should be confirmed during the estimate for the specific project.",
  },
];
