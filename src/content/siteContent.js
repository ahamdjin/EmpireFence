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
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "Quote", href: "#estimate" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Fence and gate contractor / Inland Empire",
  title: ["Fence work", "that looks", "finished."],
  lede:
    "Wrought iron, wood, vinyl, chain link, and gates built with cleaner lines and faster communication.",
  primaryCta: { label: "Start the estimate", href: "#estimate" },
  secondaryCta: { label: "View selected work", href: "#gallery" },
  facts: [
    { value: "40+", label: "years" },
    { value: "Free", label: "estimates" },
    { value: "Local", label: "service area" },
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
  title: "Built for stronger lines and smoother gate function.",
  intro: "Fence installs, gates, and exterior work that feel clean from the street.",
  points: [
    {
      title: "Fence first. Exterior scope if needed.",
      body: "Fence, gates, and exterior scope handled as one plan.",
    },
    {
      title: "Cleaner line work and less project drag.",
      body: "Straighter runs, cleaner alignment, quicker answers.",
    },
  ],
};

export const services = [
  {
    id: "wrought-iron",
    number: "01",
    title: "Wrought iron fencing",
    copy: "Decorative frontage and stronger street presence.",
    detail: "Curb appeal and visible perimeter work.",
    image: "/images/hero-fence.jpg",
    chips: ["Frontage", "Decorative security", "Custom gates"],
    tone: "dark",
  },
  {
    id: "vinyl-wood",
    number: "02",
    title: "Vinyl and wood fencing",
    copy: "Residential privacy installs with a calmer finished look.",
    detail: "Privacy, maintenance, and appearance.",
    image: "/images/detail-fence.jpg",
    chips: ["Privacy", "Residential", "Low maintenance"],
    tone: "light",
  },
  {
    id: "chain-link",
    number: "03",
    title: "Chain link and perimeter control",
    copy: "Practical lot coverage and commercial boundary work.",
    detail: "Fast installation and straightforward perimeter control.",
    image: "/images/hero-fence.jpg",
    chips: ["Commercial", "Utility zones", "Fast coverage"],
    tone: "light",
  },
  {
    id: "gates-exterior",
    number: "04",
    title: "Gates and exterior scope",
    copy: "Manual and automatic gates plus related exterior upgrades.",
    detail: "One coordinated scope.",
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
  title: "Cleaner process. Less friction.",
  differentiators: [
    {
      title: "Faster communication",
      copy: "Quick answers and clearer scope.",
    },
    {
      title: "Field-tested judgment",
      copy: "Better material and layout decisions in the field.",
    },
    {
      title: "Finish that still reads clean later",
      copy: "Gate alignment and finish detail treated as part of the job.",
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
  body: "Quick review for nearby projects.",
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
  title: "Start with the scope.",
  quoteTitle: "Send the job details.",
  bookingTitle: "Book a walkthrough.",
  contactPoints: [
    { label: "Call", value: business.phoneDisplay, href: business.phoneHref },
    { label: "Email", value: business.email, href: business.emailHref },
    { label: "Location", value: business.location, href: business.mapHref },
  ],
};

export const faqs = [
  {
    question: "What fence types do you install?",
    answer: "Wrought iron, vinyl, wood, chain link, gates, and related exterior work.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes. Free estimates are available.",
  },
  {
    question: "Can you handle residential and commercial work?",
    answer: "Yes. Residential and commercial projects are both handled.",
  },
  {
    question: "Do you only build fences?",
    answer: "No. Gates and related exterior work can be included when needed.",
  },
  {
    question: "Is there warranty coverage?",
    answer: "Warranty details can be confirmed during the estimate.",
  },
];
