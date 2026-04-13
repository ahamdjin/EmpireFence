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
  facebook: "https://www.facebook.com/EmpireFenceCA",
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

export const contactFormWidget = {
  iframeSrc: "https://api.leadconnectorhq.com/widget/form/n65H1m5VKEMKwdLlQGZh",
  formId: "n65H1m5VKEMKwdLlQGZh",
  formName: "EmpireFence - Contact Us Form",
  scriptSrc: "https://link.msgsndr.com/js/form_embed.js",
  defaultHeight: 630,
};

export const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export const socialLinks = [
  { href: business.mapHref, label: "Google Maps" },
  { href: business.facebook, label: "Facebook" },
  { href: business.yelp, label: "Yelp" },
].filter((link) => link.href);

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
    image: "/client/locations/riverside/riverside-ca-fence-installation.jpg",
  },
  {
    eyebrow: "Supporting scope",
    title: "Gates and transitions under one tighter path.",
    copy:
      "The fence line, gate details, and entry transitions can stay coordinated instead of getting split into disconnected handoffs after the install starts.",
    image: "/client/services/gates/single-vinyl-gate.jpg",
  },
];

export const featuredProjects = [
  {
    image: "/client/services/vinyl-fence/vinyl-privacy-fence-side-yard.jpg",
    eyebrow: "Vinyl privacy",
    title: "Privacy fencing that keeps the property edge clean and consistent.",
  },
  {
    image: "/client/services/wrought-iron-fence/wrought-iron-decorative-fence.jpg",
    eyebrow: "Wrought iron",
    title: "Decorative iron work that sharpens the frontage instead of closing it off.",
  },
  {
    image: "/client/services/gates/double-vinyl-gates.jpg",
    eyebrow: "Gate detail",
    title: "Entry and gate details that make the whole fence system feel finished.",
  },
  {
    image: "/client/services/chain-link-fence/chain-link-security-fence.jpg",
    eyebrow: "Perimeter work",
    title: "Security-driven fence runs that stay practical on larger boundaries.",
  },
];

export const serviceAreas = [
  {
    slug: "riverside-ca",
    title: "Riverside, CA",
    image: "/client/locations/riverside/riverside-ca-wood-fence.jpg",
    intro:
      "Fence, gate, and exterior work across Riverside with clean installs and practical planning.",
    summary:
      "Riverside projects usually need a mix of privacy, frontage cleanup, and durable gates that hold up on lots with older fencing, visible street edges, and mixed property styles.",
    propertyFocus: [
      {
        title: "Established neighborhoods",
        copy:
          "A lot of Riverside work starts with replacing aging wood, cleaning up mismatched repairs, or upgrading front-facing runs that have lost their line.",
      },
      {
        title: "Visible frontage work",
        copy:
          "Properties near busier streets often need stronger gate layout, cleaner transitions, and materials that still look finished from the road.",
      },
      {
        title: "Mixed residential and commercial use",
        copy:
          "Riverside also brings light commercial and rental-property scope where durability, access control, and lower maintenance all matter at once.",
      },
    ],
    featuredServiceSlugs: ["vinyl-fence", "wood-fence", "wrought-iron-fence", "fence-repairs"],
    estimateLead:
      "Share photos of frontage sections, gates, and any older fence runs that need to tie into new work so the estimate can focus on the full property edge instead of just one section.",
    localFaqs: [
      {
        question: "What fence projects are most common in Riverside?",
        answer:
          "Riverside clients usually ask for privacy fence replacement, front-yard wrought iron, gate upgrades, and repair work on older fence lines that no longer sit straight.",
      },
      {
        question: "Can Empire Fence help when part of the fence is old and part needs to be rebuilt?",
        answer:
          "Yes. Riverside projects often involve tying new work into existing fence runs, gates, or wall sections, and the estimate should account for those transitions early.",
      },
      {
        question: "Is Riverside a good fit for vinyl or wood fencing?",
        answer:
          "Both work well. Vinyl is strong for lower-maintenance privacy, while wood fits properties that need a warmer look or more flexibility in the layout.",
      },
    ],
  },
  {
    slug: "ontario-ca",
    title: "Ontario, CA",
    image: "/client/locations/ontario/ontario-ca-vinyl-fence.jpg",
    intro:
      "Residential and commercial perimeter work with detail-focused planning from the first visit.",
    summary:
      "Ontario projects often move faster because the properties range from newer residential lots to commercial sites that need cleaner perimeter planning, better gates, and straightforward material decisions.",
    propertyFocus: [
      {
        title: "Newer residential tracts",
        copy:
          "A lot of homeowners in Ontario want cleaner privacy, matching side-yard runs, and gates that feel consistent with the rest of the exterior.",
      },
      {
        title: "Warehouse and business edges",
        copy:
          "Ontario also brings perimeter work where chain link, metal fencing, and durable gates need to be practical first without looking patched together.",
      },
      {
        title: "Speed with scope clarity",
        copy:
          "The best Ontario jobs lock in layout and access points early so the installation can move efficiently once material and footage are clear.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "metal-fence", "vinyl-fence", "fence-repairs"],
    estimateLead:
      "For Ontario properties, include gate width, driveway notes, and any business access requirements so the quote reflects how the site is actually used.",
    localFaqs: [
      {
        question: "Does Empire Fence work on both residential and commercial properties in Ontario?",
        answer:
          "Yes. Ontario is one of the cities where residential privacy fencing and commercial perimeter work both fit the service mix well.",
      },
      {
        question: "What fencing materials are common in Ontario?",
        answer:
          "Vinyl, chain link, and metal are all common choices depending on whether the priority is privacy, security, or lower maintenance across a larger run.",
      },
      {
        question: "Can Ontario projects include gates and access control planning?",
        answer:
          "Yes. Gates are often part of the Ontario estimate because driveways, service access, and day-to-day circulation shape the final layout.",
      },
    ],
  },
  {
    slug: "chino-ca",
    title: "Chino, CA",
    image: "/client/locations/chino/chino-privacy-fence.jpg",
    intro:
      "Fence builds, privacy upgrades, and outdoor scope that fit the layout of the property.",
    summary:
      "Chino projects often need privacy, secure side-yard separation, and fence layouts that make sense on wider lots where the property line has to work hard without feeling overbuilt.",
    propertyFocus: [
      {
        title: "Wider residential lots",
        copy:
          "Chino properties often have enough width that the fence line, gate placement, and transitions matter more than simply choosing the cheapest panel.",
      },
      {
        title: "Family-use backyards",
        copy:
          "Backyard fencing in Chino often centers on privacy, pets, play areas, and a cleaner edge around patios or outdoor sitting zones.",
      },
      {
        title: "Custom layout over stock feel",
        copy:
          "This is a city where a simple material can still look much better when the run is aligned well and the gates are planned with the lot.",
      },
    ],
    featuredServiceSlugs: ["wood-fence", "vinyl-fence", "patio-enclosures", "gazebo-builder"],
    estimateLead:
      "For Chino estimates, include how the backyard is used, where pets or family traffic move through the property, and whether the fence ties into patio or shade work.",
    localFaqs: [
      {
        question: "What type of fence is usually the best fit in Chino?",
        answer:
          "The answer depends on the property, but vinyl and wood are both common because they handle privacy well and can be tailored to the way the yard is used.",
      },
      {
        question: "Can a Chino project include patio or gazebo work too?",
        answer:
          "Yes. Chino properties often benefit from bundled outdoor scope when the fence project is part of a bigger backyard improvement plan.",
      },
      {
        question: "Does Empire Fence help with side-yard gates in Chino?",
        answer:
          "Yes. Gates are part of many Chino projects because side-yard access and everyday circulation usually matter just as much as the fence panels themselves.",
      },
    ],
  },
  {
    slug: "rancho-cucamonga-ca",
    title: "Rancho Cucamonga, CA",
    image: "/client/locations/rancho-cucamonga/rancho-cucamonga-ca-wrought-iron.jpg",
    intro:
      "High-visibility frontage, gate work, and polished outdoor upgrades across Rancho Cucamonga.",
    summary:
      "Rancho Cucamonga projects often lean more visible and finish-sensitive, with front-yard presentation, gates, and cleaner material choices carrying more weight in the final decision.",
    propertyFocus: [
      {
        title: "Curb appeal first",
        copy:
          "A lot of Rancho Cucamonga work starts with the way the frontage reads from the street, not just the need to close off the yard.",
      },
      {
        title: "Gate and entry detail",
        copy:
          "Visible entries need gate proportions, latch placement, and fence transitions that feel deliberate rather than added at the end.",
      },
      {
        title: "Sharper finish expectations",
        copy:
          "Clients in Rancho Cucamonga often care about materials, lines, and how the fence supports the rest of the exterior architecture.",
      },
    ],
    featuredServiceSlugs: ["wrought-iron-fence", "metal-fence", "vinyl-fence", "railing-contractor"],
    estimateLead:
      "For Rancho Cucamonga properties, it helps to send frontage photos, driveway views, and any inspiration notes so the material and gate direction can be framed properly from the start.",
    localFaqs: [
      {
        question: "Is wrought iron a common fit in Rancho Cucamonga?",
        answer:
          "Yes. Rancho Cucamonga is a strong fit for wrought iron when the project needs security and a more refined front-facing look.",
      },
      {
        question: "Can Empire Fence coordinate railings or gates with the fence design?",
        answer:
          "Yes. Rancho Cucamonga projects often benefit from handling those details together so the entry sequence feels more complete.",
      },
      {
        question: "What if I want privacy in the backyard and a different look in the front?",
        answer:
          "That is common. The estimate can break the project into separate material zones so the frontage and backyard each get the right treatment.",
      },
    ],
  },
  {
    slug: "fontana-ca",
    title: "Fontana, CA",
    image: "/client/locations/fontana/fontana-ca-perimeter-fence.jpg",
    intro:
      "Fast-moving fence projects, secure perimeter work, and exterior improvements tailored to Fontana properties.",
    summary:
      "Fontana brings a lot of practical fence work: privacy runs, secure gates, long property lines, and replacement projects where the old fence is no longer stable or worth saving.",
    propertyFocus: [
      {
        title: "Longer fence runs",
        copy:
          "Many Fontana projects involve side-yard and backyard runs where durability, straight layout, and gate placement matter more than decorative extras.",
      },
      {
        title: "Security-minded upgrades",
        copy:
          "Properties that need more control at driveways, service paths, or storage edges often lean toward chain link, metal, or durable gate planning.",
      },
      {
        title: "Repair versus replacement decisions",
        copy:
          "Fontana also sees a lot of older fence lines where the estimate has to determine whether to repair sections or rebuild the run cleanly.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "fence-repairs", "metal-fence", "vinyl-fence"],
    estimateLead:
      "For Fontana estimates, send long-run photos, driveway access notes, and any damaged sections that may affect whether the project should be repaired or replaced.",
    localFaqs: [
      {
        question: "Is chain link common in Fontana?",
        answer:
          "Yes. Fontana properties often use chain link where security, coverage, and speed matter more than a decorative frontage finish.",
      },
      {
        question: "Can Empire Fence quote repair and replacement options in Fontana?",
        answer:
          "Yes. That comparison is useful on Fontana properties where storm wear, impact damage, or older materials make the next step less obvious.",
      },
      {
        question: "Does Fontana work often include gates too?",
        answer:
          "Yes. Gates are a common part of Fontana projects because access and day-to-day use often drive the whole fence layout.",
      },
    ],
  },
  {
    slug: "san-bernardino-ca",
    title: "San Bernardino, CA",
    image: "/client/locations/san-bernardino/san-bernardino-ca-chain-link.jpg",
    intro:
      "Fence, chain link, and boundary work for homes, businesses, and larger lots across San Bernardino.",
    summary:
      "San Bernardino projects often need stronger boundary control, repair-or-replace judgment, and fence systems that stay practical across both residential and business properties.",
    propertyFocus: [
      {
        title: "Security and visibility",
        copy:
          "A lot of San Bernardino properties need a fence that improves control and definition without creating blind spots where visibility still matters.",
      },
      {
        title: "Mixed-use project types",
        copy:
          "The city regularly brings a mix of homes, small business sites, storage edges, and larger lots that each need a slightly different material strategy.",
      },
      {
        title: "Durability over decoration",
        copy:
          "Many San Bernardino jobs are less about ornament and more about building a fence line that stays secure, stable, and easier to maintain.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "metal-fence", "fence-repairs", "wrought-iron-fence"],
    estimateLead:
      "For San Bernardino projects, include access points, any damaged sections, and whether the priority is privacy, visibility, or stronger perimeter security so the scope can be narrowed fast.",
    localFaqs: [
      {
        question: "What services are most common in San Bernardino?",
        answer:
          "Chain link, metal fencing, repairs, and secure gate layouts are common because many San Bernardino properties prioritize control, durability, and practical coverage.",
      },
      {
        question: "Can Empire Fence handle both homes and business properties in San Bernardino?",
        answer:
          "Yes. San Bernardino is one of the cities where the work mix regularly includes both residential and commercial fence projects.",
      },
      {
        question: "Is San Bernardino only a good fit for chain link?",
        answer:
          "No. Chain link is common, but vinyl, wrought iron, and metal all have a place depending on whether the site needs privacy, appearance, or more visible security.",
      },
    ],
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
