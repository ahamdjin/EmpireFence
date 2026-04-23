export const business = {
  name: "Empire Fence Inc.",
  shortName: "Empire Fence",
  phoneDisplay: "+1 951-783-2965",
  phoneHref: "tel:+19517832965",
  email: "george@empirefenceca.com",
  emailHref: "mailto:george@empirefenceca.com",
  city: "Jurupa Valley, CA",
  zipCode: "91752",
  address: "4020 Bain St, Jurupa Valley. CA 91752",
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

export const contentDates = {
  site: "2026-04-15",
  services: "2026-04-12",
  areas: "2026-04-15",
  legal: "2026-04-13",
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

function createAreaServiceSections({ installation, repair, supply, patio, gazebo, railing }) {
  return [
    { title: "Fence installation", copy: installation },
    { title: "Fence repair", copy: repair },
    { title: "Fence supply support", copy: supply },
    { title: "Patio enclosures", copy: patio },
    { title: "Gazebo builder", copy: gazebo },
    { title: "Railing contractor", copy: railing },
  ];
}

function createFenceTypeSections({ vinyl, wroughtIron, wood, chainLink, metal }) {
  return [
    { title: "Vinyl fence", copy: vinyl },
    { title: "Wrought iron fence", copy: wroughtIron },
    { title: "Wood fence", copy: wood },
    { title: "Chain link fence", copy: chainLink },
    { title: "Metal fence", copy: metal },
  ];
}

export const serviceAreas = [
  {
    slug: "riverside-ca",
    title: "Riverside, CA",
    zipCode: "92501",
    image: "/client/services/wood-fence/wood-fence-property-line.jpg",
    intro:
      "Trusted fence installation, fence repair, gate work, and outdoor upgrades for Riverside homes and businesses.",
    summary:
      "Riverside jobs usually start with practical needs: replacing aging fence lines, improving privacy, tightening curb-facing sections, and planning gates or transitions that still look finished from the street.",
    seoTitle: "Fence Contractor Riverside, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Riverside, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Riverside projects usually start with one obvious problem and then widen into a more complete scope. A customer may call about a leaning backyard run, but once the estimate starts, the real job often includes gate layout, frontage cleanup, or a material change that improves both privacy and curb appeal.",
      "That is why the right Riverside estimate should not stop at a panel count. It should account for grade, transitions, access points, visible front sections, and whether the property needs a straight repair, a full replacement, or a cleaner combination of both.",
    ],
    propertyFocus: [
      {
        title: "Backyard privacy and replacement work",
        copy:
          "A lot of Riverside properties need older fence lines replaced or repaired where the current run no longer feels straight, stable, or worth patching again.",
      },
      {
        title: "Front-facing boundaries and gates",
        copy:
          "Front sections in Riverside often need more than a basic panel swap. The material, openness, and gate layout all affect how the property reads from the street.",
      },
      {
        title: "Property-specific material fit",
        copy:
          "Vinyl, wood, wrought iron, chain link, and metal all have a place here. The right choice depends on whether the priority is privacy, security, appearance, or lower maintenance.",
      },
    ],
    featuredServiceSlugs: ["vinyl-fence", "wood-fence", "wrought-iron-fence", "fence-repairs"],
    serviceBreakdown: [
      {
        title: "Fence installation that fits the property",
        copy:
          "New Riverside installations often include backyard privacy runs, side-yard separation, frontage replacement, and cleaner material coordination where the old fence no longer matches the property.",
      },
      {
        title: "Fence repair before full replacement gets pushed",
        copy:
          "A lot of Riverside jobs are worth repairing first when the structure still has useful life. The estimate should clearly separate what can be restored from what is no longer worth patching.",
      },
      {
        title: "Front-facing gates and transitions",
        copy:
          "Riverside properties often need more than a straight run of panels. Pedestrian gates, side-yard entries, and visible transitions all affect how the finished edge reads from the street.",
      },
      {
        title: "Material direction based on real priorities",
        copy:
          "Vinyl, wood, wrought iron, chain link, and metal can all make sense in Riverside. The best fit depends on whether the job is driven by privacy, lower maintenance, security, or a stronger frontage finish.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Riverside fence installation work usually includes backyard privacy runs, side-yard separation, frontage replacements, and cleaner gate transitions where the old fence no longer suits the property or how it is used.",
      repair:
        "Riverside fence repairs often focus on leaning posts, damaged panels, worn gates, and sections that have been patched too many times. When a repair still makes sense, the goal is to restore function without pretending the entire run needs to be rebuilt.",
      supply:
        "Fence supply support is useful on Riverside projects that need matching replacement panels, posts, rails, gates, or hardware so the repaired or upgraded sections do not feel disconnected from the rest of the property edge.",
      patio:
        "Patio enclosures in Riverside help turn open outdoor areas into more usable family space while also improving separation, privacy, and the way the yard connects back to the house.",
      gazebo:
        "Gazebo builds are a good fit on Riverside properties that need shade, a clearer gathering point, or a more finished backyard layout instead of an open area that feels underused.",
      railing:
        "Railing work matters on Riverside homes and properties where steps, raised sections, or walkways need both safer support and a cleaner finished edge.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Riverside choice when the priority is privacy, a clean consistent appearance, and lower maintenance over time.",
      wroughtIron:
        "Wrought iron works well on Riverside front boundaries and entry areas where the property needs structure and visibility without fully closing off the frontage.",
      wood:
        "Wood remains a useful Riverside option for backyard privacy, side-yard separation, and a more natural residential look when flexibility matters.",
      chainLink:
        "Chain link is practical on Riverside properties that need durable enclosure, clearer lot definition, or more straightforward perimeter coverage.",
      metal:
        "Metal fencing is a dependable fit when the Riverside project needs a stronger physical boundary, longer-term durability, or a more security-driven finish.",
    }),
    estimateLead:
      "For Riverside estimates, send photos of the full run, any damaged or leaning sections, and notes about gates, slopes, or existing structures so the quote reflects the real layout instead of a guessed section count.",
    quoteChecklist: [
      "Photos of the full fence line from both directions",
      "Any leaning posts, impact damage, or sections that have already been patched before",
      "Gate widths, walkway access, and whether pets or vehicles affect the layout",
      "Slope changes, block walls, or other structures the new work needs to tie into",
    ],
    trustBullets: [
      "40 years of field experience across residential and commercial work",
      "1-year workmanship warranty on completed projects",
      "Straight repair-versus-replacement guidance instead of automatic upsell pressure",
      "Riverside quotes built around the actual layout, not a generic linear-foot guess",
    ],
    whyChooseNarrative: [
      "Riverside property owners usually want strong workmanship, straightforward communication, and a quote that reflects what the property actually needs instead of pushing one standard solution. That is where Empire Fence tends to win the work.",
      "The team is useful when the job involves repair-versus-replacement judgment, gate transitions, frontage decisions, and material choices that need to hold up in the real world while still making the property look better.",
    ],
    recentProjectNote:
      "Recent Riverside-type jobs usually include backyard privacy replacements, front-facing wrought iron upgrades, repairs on aging wood sections, and gate updates that make the whole property edge feel straighter and more complete.",
    localFaqs: [
      {
        question: "What kinds of fence projects are most common in Riverside?",
        answer:
          "Privacy fence replacement, repairs on aging wood sections, front-facing wrought iron, and gate upgrades are all common in Riverside because many properties need both function and a cleaner finished look.",
      },
      {
        question: "Can Empire Fence repair part of a fence or does Riverside work always mean full replacement?",
        answer:
          "Not every Riverside fence needs a full replacement. If the main structure still has useful life, a targeted repair can make more sense. If replacement is the better long-term move, the estimate should make that clear early.",
      },
      {
        question: "Which fence materials tend to work best in Riverside?",
        answer:
          "Vinyl is strong when lower maintenance and a cleaner, uniform appearance matter. Wood works well when the project needs a more natural residential feel or more layout flexibility.",
      },
    ],
  },
  {
    slug: "ontario-ca",
    title: "Ontario, CA",
    zipCode: "91761",
    image: "/client/services/vinyl-fence/vinyl-privacy-fence-pool.jpg",
    intro:
      "Fence installation, repairs, gates, patio enclosures, and railing work for Ontario homes and commercial properties.",
    summary:
      "Ontario brings a mixed workload: newer residential lots, busy commercial corridors, and industrial properties that all need different boundary, access, and privacy decisions from the start.",
    seoTitle: "Fence Contractor Ontario, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Ontario, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Ontario jobs tend to move in two directions: residential privacy work that needs a cleaner finished look, or higher-demand commercial and industrial perimeter work where durability, access, and daily use matter more than decoration.",
      "Because the city includes homes, warehouses, business sites, and mixed-use properties, the right scope usually depends on how the space is actually used. The estimate needs to frame traffic flow, driveway access, gate direction, and maintenance expectations before the material is locked in.",
    ],
    propertyFocus: [
      {
        title: "Residential privacy and clean layout",
        copy:
          "Ontario homeowners often want backyard privacy, side-yard separation, and gates that feel consistent with the rest of the property instead of looking patched in later.",
      },
      {
        title: "Commercial and industrial perimeter work",
        copy:
          "Business and warehouse properties in Ontario often need stronger perimeter fencing, durable gates, and material choices that prioritize daily use, access, and long-term performance.",
      },
      {
        title: "Practical repairs instead of automatic replacement",
        copy:
          "Ontario projects often move faster once the team knows whether the site needs a full new run, a repair, or a targeted upgrade with better gate planning and stronger sections.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "metal-fence", "vinyl-fence", "fence-repairs"],
    serviceBreakdown: [
      {
        title: "Residential privacy and side-yard installs",
        copy:
          "Ontario homeowners often need vinyl or wood privacy work around backyards and side yards where the goal is separation, cleaner lines, and a more finished residential look.",
      },
      {
        title: "Commercial and industrial perimeter fencing",
        copy:
          "Business and warehouse properties in Ontario often need chain link, metal, and gate work that stays practical under heavier use and larger coverage areas.",
      },
      {
        title: "Repair work that restores function faster",
        copy:
          "Not every Ontario property needs a full tear-out. In the right conditions, targeted repairs can restore control, alignment, and usability without rebuilding the entire run.",
      },
      {
        title: "Gates, access points, and supporting upgrades",
        copy:
          "Ontario estimates often involve driveway gates, service access, patio enclosure tie-ins, or railing work where circulation matters as much as the fence line itself.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Ontario fence installation work ranges from residential privacy runs to commercial and industrial perimeter fencing, and the layout usually needs to reflect traffic, access, and the way the site is used every day.",
      repair:
        "Fence repairs in Ontario often deal with damaged posts, vehicle impact, broken gates, worn hardware, or sections that need to be restored without replacing the entire perimeter.",
      supply:
        "Fence supply support helps Ontario properties match the right panels, posts, rails, and hardware when the project includes repairs, phased upgrades, or additional sections that need to stay consistent.",
      patio:
        "Patio enclosures are useful on Ontario properties where the outdoor area needs more privacy, cleaner definition, and a better day-to-day connection to the rest of the site.",
      gazebo:
        "Gazebo builds in Ontario make sense when the property needs shade, a stronger outdoor focal point, or a more finished gathering space instead of an open yard that does not get used well.",
      railing:
        "Railing work is a practical Ontario add-on for stairs, patio edges, walkways, and other transitions where safety and a more finished presentation both matter.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is common in Ontario for residential privacy because it stays clean, consistent, and easier to maintain on busy household properties.",
      wroughtIron:
        "Wrought iron is a strong Ontario option for decorative frontage, entry definition, and properties that want visibility with a more elevated finished look.",
      wood:
        "Wood fencing works well in Ontario where the owner wants stronger privacy, flexible layout options, and a more traditional residential feel.",
      chainLink:
        "Chain link remains one of the smartest Ontario choices for utility areas, larger perimeters, industrial properties, and sites where security and practical coverage matter first.",
      metal:
        "Metal fencing is a dependable fit in Ontario when the project needs a more substantial boundary, long-term durability, and a finish built around heavier use.",
    }),
    estimateLead:
      "For Ontario estimates, include driveway width, gate requirements, and whether the property is residential, commercial, or industrial so the scope can be framed around the way the site is actually used.",
    quoteChecklist: [
      "Whether the site is residential, commercial, or industrial",
      "Driveway width, gate swing needs, and access points used every day",
      "Photos showing the full perimeter, not only the damaged section",
      "Notes about privacy, security, traffic, or maintenance priorities",
    ],
    trustBullets: [
      "Residential and commercial service across mixed-use Ontario properties",
      "1-year workmanship warranty and practical material recommendations",
      "Repair-first judgment when a full replacement is not the smartest move",
      "Scope built around traffic, circulation, and the way the site is actually used",
    ],
    whyChooseNarrative: [
      "Ontario customers usually choose Empire Fence when they need a contractor who can handle both residential privacy work and more demanding commercial or industrial perimeter requirements without changing the level of discipline.",
      "The strongest value here is direct scope judgment: understanding the property type first, then matching the material, gate direction, and repair-versus-replacement path to the way the site actually functions.",
    ],
    recentProjectNote:
      "Recent Ontario-type projects usually include backyard privacy installations, driveway gate planning, chain link and metal perimeter work for utility-heavy sites, and repairs that restore control without forcing a full replacement.",
    localFaqs: [
      {
        question: "Does Empire Fence work on both residential and commercial properties in Ontario?",
        answer:
          "Yes. Ontario is one of the strongest mixed-use cities in the service area, so the work regularly includes residential privacy fencing, commercial perimeter installs, repairs, and gate planning.",
      },
      {
        question: "What fencing materials are common in Ontario?",
        answer:
          "Vinyl is common for residential privacy. Chain link and metal are often the better fit for utility areas, larger perimeters, and properties where security and durability carry more weight.",
      },
      {
        question: "Can Ontario projects include gates and access control planning?",
        answer:
          "Yes. Gates matter on a lot of Ontario jobs because daily circulation, service access, and driveway use often shape the whole fence layout.",
      },
    ],
  },
  {
    slug: "chino-ca",
    title: "Chino, CA",
    zipCode: "91710",
    image: "/client/services/patio-enclosures/driveway-patio-cover-2.jpg",
    intro:
      "Professional fence installation, repairs, and outdoor improvement work tailored to Chino homes and larger-lot properties.",
    summary:
      "Chino properties often need more than a simple boundary line. Wider lots, backyard privacy, side-yard gates, and outdoor-use upgrades all push the layout to be more deliberate from the first estimate.",
    seoTitle: "Fence Contractor Chino, CA | Empire Fence Inc",
    metaDescription:
      "Need a trusted fence contractor in Chino, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Chino work often starts with privacy or boundary control, but the real project usually connects to how the outdoor space is used every day. Larger lots, family use, pets, side-yard circulation, and visible backyard zones all affect the layout more than they do on a smaller standard parcel.",
      "That makes Chino a city where the estimate should look at the whole outdoor setup. Fence lines, gates, patio enclosures, gazebo features, and related improvements often work better when they are planned together instead of added one by one after the first install.",
    ],
    propertyFocus: [
      {
        title: "Larger-lot fence planning",
        copy:
          "Chino lots often have enough width that the fence line, gate placement, and transition details matter just as much as the material itself.",
      },
      {
        title: "Backyard use and privacy",
        copy:
          "A lot of Chino work centers on privacy, family use, pets, and outdoor areas that need to feel better organized without overbuilding the whole yard.",
      },
      {
        title: "Outdoor improvements beyond the fence line",
        copy:
          "Patio enclosures, gazebo work, railings, and fence upgrades often overlap in Chino when the owner wants the whole outdoor setup to feel more complete.",
      },
    ],
    featuredServiceSlugs: ["wood-fence", "vinyl-fence", "patio-enclosures", "gazebo-builder"],
    serviceBreakdown: [
      {
        title: "Fence installation for larger and wider lots",
        copy:
          "Chino properties often need longer runs, wider side-yard transitions, and more deliberate gate placement so the fence works with the lot instead of cutting through it awkwardly.",
      },
      {
        title: "Privacy fencing built around daily use",
        copy:
          "Backyard privacy is common in Chino, especially where family activity, pets, pools, or outdoor seating areas need the fence to feel useful instead of purely decorative.",
      },
      {
        title: "Patio, gazebo, and bundled outdoor scope",
        copy:
          "Chino is one of the places where patio enclosures, gazebo work, railings, and fence upgrades often overlap, so the best result usually comes from treating them as one exterior improvement plan.",
      },
      {
        title: "Repairs and upgrades without guessing",
        copy:
          "When there is an older fence already in place, the estimate should clarify what can be repaired, what should be replaced, and whether a larger outdoor-use change makes more sense at the same time.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Fence installation in Chino often involves larger lots, longer side-yard runs, family-oriented backyard privacy, and layouts that need to work with the way the outdoor space is actually used.",
      repair:
        "Chino fence repairs usually focus on restoring function where the structure still has good life left, especially when the owner wants to avoid replacing an entire run that only has a few weak sections.",
      supply:
        "Fence supply support helps Chino projects stay consistent when the work includes replacement panels, gate hardware, or additional material for phased property upgrades.",
      patio:
        "Patio enclosures are a strong Chino fit when the owner wants to make the outdoor area more usable, more defined, and better connected to the rest of the yard.",
      gazebo:
        "Gazebo builds work well on Chino properties that have enough open space to benefit from shade, seating, and a more intentional backyard feature rather than another empty hardscape corner.",
      railing:
        "Railing work supports Chino patios, stairs, and raised transitions where safety matters but the finish also needs to feel clean and visually connected to the rest of the outdoor scope.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Chino option when the owner wants durable privacy fencing with less upkeep and a cleaner consistent finish across longer backyard sections.",
      wroughtIron:
        "Wrought iron works best in Chino where the property needs structure, visibility, and a more decorative front-facing edge instead of full visual enclosure.",
      wood:
        "Wood stays popular in Chino because it fits backyard privacy well and can be tailored more naturally to larger-lot residential layouts.",
      chainLink:
        "Chain link makes sense on Chino properties that need enclosure for pets, side areas, utility zones, or larger boundaries where straightforward coverage matters most.",
      metal:
        "Metal fencing is a dependable Chino choice when the project needs stronger perimeter definition, more substantial durability, or a more security-driven finish.",
    }),
    estimateLead:
      "For Chino estimates, include how the outdoor space is used, where family or pet traffic moves, and whether the fence ties into patio, gate, or shade improvements so the layout fits real daily use.",
    quoteChecklist: [
      "Photos showing how the yard, side path, or outdoor space is actually used",
      "Any notes about pets, children, pool areas, or outdoor seating zones",
      "Gate locations and the pathways people use every day",
      "Whether the project may also connect to patio, gazebo, or railing work",
    ],
    trustBullets: [
      "40 years of combined field experience across practical residential fence work",
      "Direct recommendations based on lot use, not just standard panel layouts",
      "1-year workmanship warranty on completed scope",
      "Cleaner bundled planning when the fence touches patio, gate, or shade upgrades",
    ],
    whyChooseNarrative: [
      "Chino property owners usually need more than a standard boundary install. The job often involves how the yard is used, where people move through the space, and whether the fence also connects to patio, gate, or shade improvements.",
      "Empire Fence is a good fit there because the work can be planned around the whole outdoor layout instead of treating every fence run like an isolated panel job.",
    ],
    recentProjectNote:
      "Recent Chino-type work usually includes backyard privacy fences, side-yard access gates, repairs on older residential runs, and bundled patio or gazebo improvements that make the outdoor setup feel more complete.",
    localFaqs: [
      {
        question: "What type of fence is usually the best fit in Chino?",
        answer:
          "Vinyl and wood are both strong fits in Chino because they handle privacy well and can be tailored to the way the property is actually used. The right choice depends on maintenance expectations, layout, and the look you want.",
      },
      {
        question: "Can a Chino project include patio or gazebo work too?",
        answer:
          "Yes. Chino is one of the cities where fence work often overlaps with patio enclosures, gazebo features, and other outdoor improvements that make the space more usable.",
      },
      {
        question: "Does Empire Fence help with side-yard gates in Chino?",
        answer:
          "Yes. Side-yard gates, access paths, and circulation points are a regular part of Chino estimates because the fence has to work with the way the property is used every day.",
      },
    ],
  },
  {
    slug: "rancho-cucamonga-ca",
    title: "Rancho Cucamonga, CA",
    zipCode: "91730",
    image: "/client/services/wrought-iron-fence/wrought-iron-decorative-fence.jpg",
    intro:
      "Fence installation, repairs, gates, and polished outdoor improvements for Rancho Cucamonga properties that need a cleaner finished result.",
    summary:
      "Rancho Cucamonga work tends to be more finish-sensitive: front-facing presentation, gates, railings, and better material coordination all carry more weight because the property edge stays highly visible.",
    seoTitle: "Fence Contractor Rancho Cucamonga, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Rancho Cucamonga, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Rancho Cucamonga projects are usually more appearance-sensitive than purely utilitarian. Front-facing sections, visible driveways, and polished entry sequences often matter just as much as privacy or perimeter control, which means the material, height, and openness of the fence all need more deliberate planning.",
      "This is also one of the cities where the fence rarely stands alone. Gates, railings, wall transitions, and separate front-versus-backyard material zones often determine whether the property ends up looking intentional or patched together.",
    ],
    propertyFocus: [
      {
        title: "Frontage and curb appeal",
        copy:
          "A lot of Rancho Cucamonga projects start with how the frontage reads from the street, not just the need to close off a yard or property line.",
      },
      {
        title: "Gate, entry, and railing coordination",
        copy:
          "Visible entries often need more deliberate gate proportions, transitions, and railing details so the final result feels planned instead of pieced together.",
      },
      {
        title: "Material choice with appearance in mind",
        copy:
          "Vinyl, wrought iron, wood, chain link, and metal all have a place here, but Rancho Cucamonga owners usually care more about finish quality, consistency, and overall presentation.",
      },
    ],
    featuredServiceSlugs: ["wrought-iron-fence", "metal-fence", "vinyl-fence", "railing-contractor"],
    serviceBreakdown: [
      {
        title: "Front-facing fence installation with stronger presentation",
        copy:
          "A lot of Rancho Cucamonga installs are judged from the street first, so the fence needs to improve curb appeal while still solving privacy, separation, or perimeter needs.",
      },
      {
        title: "Decorative iron, metal, and mixed-material solutions",
        copy:
          "Wrought iron and metal are strong fits where visibility, structure, and a more refined frontage matter, while privacy materials can stay concentrated in the backyard or side-yard zones.",
      },
      {
        title: "Gates, entries, and railing coordination",
        copy:
          "Many Rancho Cucamonga jobs look better when the fence, pedestrian gate, driveway gate, and any railings are designed as one coordinated sequence rather than separate fixes.",
      },
      {
        title: "Repair work that preserves a cleaner finish",
        copy:
          "When an existing fence still has good bones, repairs can restore the property edge without losing the look and continuity that matter on a more presentation-driven site.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Rancho Cucamonga fence installation usually needs to improve both function and presentation, especially where the frontage, driveway entry, or visible property edge plays a big role in how the site is judged.",
      repair:
        "Fence repairs in Rancho Cucamonga often focus on restoring a cleaner finish without disturbing sections that are still sound, which makes repair work especially valuable on appearance-sensitive properties.",
      supply:
        "Fence supply support helps Rancho Cucamonga projects maintain consistency when they need matching posts, panels, rails, or hardware for upgrades, repairs, and entry improvements.",
      patio:
        "Patio enclosures are a good fit in Rancho Cucamonga where outdoor areas need stronger definition, more comfort, and a finish that matches the quality expected from the rest of the property.",
      gazebo:
        "Gazebo builds work well on Rancho Cucamonga properties that need shade and presence, especially when the goal is to make the outdoor space feel more polished and complete.",
      railing:
        "Railing work is especially relevant in Rancho Cucamonga because visible stairs, patio edges, and entry transitions often need support details that also hold the overall presentation together.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Rancho Cucamonga option when the owner wants a clean refined finish, reliable privacy, and lower maintenance across visible residential areas.",
      wroughtIron:
        "Wrought iron is one of the best Rancho Cucamonga fits for front boundaries, entries, and properties that want visibility, structure, and stronger curb-facing presence.",
      wood:
        "Wood works well where the backyard needs privacy and a warmer residential character, especially when the front and back of the property are being treated differently.",
      chainLink:
        "Chain link is still useful in Rancho Cucamonga for side areas, utility zones, and practical security work where efficiency matters more than decorative impact.",
      metal:
        "Metal fencing gives Rancho Cucamonga properties a more substantial and durable boundary when the project needs both performance and a clean finished edge.",
    }),
    estimateLead:
      "For Rancho Cucamonga estimates, send frontage photos, driveway views, and any notes about desired appearance so the material, gate direction, and any railing work can be framed properly from the start.",
    quoteChecklist: [
      "Frontage and driveway photos from the street view",
      "Any notes about appearance goals, openness, or decorative direction",
      "Gate locations, railing tie-ins, and entry sequence details",
      "Whether the backyard should use a different material than the front",
    ],
    trustBullets: [
      "40 years of experience handling both durable scope and polished frontage work",
      "1-year workmanship warranty on installed and coordinated scope",
      "Strong fit for projects where fence, gate, and railing details need to align",
      "Material guidance built around finished presentation, not only basic enclosure",
    ],
    whyChooseNarrative: [
      "Rancho Cucamonga owners usually expect the fence to do more than close a boundary. It needs to hold up, fit the property, and look intentional from the street, especially when gates and railing details are involved.",
      "Empire Fence tends to be the right fit when the project needs material judgment, better finish quality, and tighter coordination between privacy areas, frontage work, and entry features.",
    ],
    recentProjectNote:
      "Recent Rancho Cucamonga-type jobs usually include decorative front-facing fencing, mixed front-and-back material layouts, coordinated gates and railings, and repairs that preserve a higher-finish property edge.",
    localFaqs: [
      {
        question: "Is wrought iron a strong fit in Rancho Cucamonga?",
        answer:
          "Yes. Wrought iron is a strong choice in Rancho Cucamonga when the property needs visibility, structure, and a more refined front-facing look.",
      },
      {
        question: "Can Empire Fence coordinate railings or gates with the fence design?",
        answer:
          "Yes. Rancho Cucamonga projects often look better when fences, gates, and railings are handled together so the entry sequence feels more complete and intentional.",
      },
      {
        question: "What if I want privacy in the backyard and a different look in the front?",
        answer:
          "That is common. The project can be split into separate material zones so the backyard gets the privacy it needs while the front keeps a more open or decorative look.",
      },
    ],
  },
  {
    slug: "fontana-ca",
    title: "Fontana, CA",
    zipCode: "92335",
    image: "/client/gallery/warehouse-chain-link-enclosure-overview.jpg",
    intro:
      "Fence installation, repairs, secure perimeter work, and outdoor upgrades for Fontana homes and businesses.",
    summary:
      "Fontana brings a lot of practical fence work: privacy runs, secure gates, longer fence lines, and repair-versus-replacement decisions on properties where durability matters more than decorative extras.",
    seoTitle: "Fence Contractor Fontana, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Fontana, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Fontana projects are often shaped by use first: long fence runs, driveway access, side-yard circulation, business perimeter needs, and stronger wear over time. The right solution usually comes from choosing the most durable and practical path instead of over-designing the property edge.",
      "That does not mean everything here is chain link or purely utilitarian. Fontana still includes residential privacy work, cleaner vinyl upgrades, and repair-driven jobs where the owner needs a straight answer about whether the current fence is worth saving or should be replaced.",
    ],
    propertyFocus: [
      {
        title: "Long runs and heavier daily wear",
        copy:
          "Many Fontana properties need longer side-yard, backyard, or perimeter runs where straight layout, durable materials, and usable gate placement matter most.",
      },
      {
        title: "Security-focused property use",
        copy:
          "Driveways, service access points, utility edges, and business properties in Fontana often need chain link, metal, or gate planning that prioritizes control and durability first.",
      },
      {
        title: "Repairs that still make practical sense",
        copy:
          "A lot of Fontana jobs start with the question of whether the old fence should be repaired or fully rebuilt. The estimate should help make that decision clearly instead of guessing.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "fence-repairs", "metal-fence", "vinyl-fence"],
    serviceBreakdown: [
      {
        title: "Long-run fence installation that stays durable",
        copy:
          "Fontana properties regularly need longer perimeter runs, side-yard layouts, and driveway boundaries where straight alignment and durable materials matter more than decorative detailing.",
      },
      {
        title: "Repair-versus-replacement decisions made clearly",
        copy:
          "A lot of Fontana owners need an honest comparison between repairing what is there and replacing it with something stronger, straighter, and easier to maintain.",
      },
      {
        title: "Chain link, metal, and security-focused scope",
        copy:
          "Chain link and metal are common fits when the property needs control, visibility, utility access, or stronger perimeter security around larger or more heavily used areas.",
      },
      {
        title: "Gates and access planning for daily use",
        copy:
          "Driveway access, equipment movement, side-yard use, and commercial circulation often shape the whole Fontana layout, so gate planning cannot be treated as an afterthought.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Fontana fence installation often centers on longer runs, stronger perimeter work, side-yard boundaries, and layouts that need to stay practical under heavier daily use.",
      repair:
        "Fontana fence repairs usually involve worn posts, leaning sections, impact damage, and older runs where the key question is whether a targeted fix still makes sense or replacement has become the better move.",
      supply:
        "Fence supply support helps Fontana customers source replacement panels, posts, rails, gates, and hardware for practical repairs or phased improvements that need to stay durable and consistent.",
      patio:
        "Patio enclosures work well in Fontana when the owner wants the outdoor area to feel more usable and organized without taking the project into a fully separate remodel path.",
      gazebo:
        "Gazebo builds are a good Fontana add-on when the outdoor space needs shade, structure, and a stronger purpose instead of another open area that stays underused.",
      railing:
        "Railing work supports Fontana patios, walkways, and access transitions where everyday safety matters and the space still needs a finished dependable look.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is useful in Fontana where the job needs privacy and a cleaner low-maintenance appearance without creating extra upkeep.",
      wroughtIron:
        "Wrought iron works best in Fontana on properties that want a more open front-facing boundary while still adding structure and security.",
      wood:
        "Wood can still be a solid Fontana choice for backyard privacy and side-yard separation where a traditional residential look matters.",
      chainLink:
        "Chain link is especially common in Fontana for larger footprints, utility edges, commercial sites, and practical security-driven perimeter control.",
      metal:
        "Metal fencing is a dependable Fontana option when the project needs long-term durability, stronger enclosure, and a more substantial physical boundary.",
    }),
    estimateLead:
      "For Fontana estimates, send long-run photos, driveway access notes, and any damaged sections or worn posts so the quote can compare repair versus replacement when that question is still open.",
    quoteChecklist: [
      "Long-run photos showing the full property edge or perimeter",
      "Driveway, side-yard, or equipment access notes",
      "Close photos of damaged posts, leaning sections, or worn hardware",
      "Whether the priority is privacy, visibility, or stronger security",
    ],
    trustBullets: [
      "Practical recommendations for both residential and commercial Fontana properties",
      "1-year workmanship warranty and direct repair-versus-replacement guidance",
      "Strong fit for longer runs, security-driven layouts, and gate planning",
      "Quotes shaped around wear, access, and actual site use instead of generic scope",
    ],
    whyChooseNarrative: [
      "Fontana customers usually choose Empire Fence when they need a contractor who understands long-run wear, heavier daily use, and the practical difference between a repair worth doing and a full replacement that is overdue.",
      "The team is especially useful when the project involves gates, commercial-style access, or perimeter work that needs to stay durable instead of just looking good on day one.",
    ],
    recentProjectNote:
      "Recent Fontana-type work usually includes longer privacy runs, chain link and metal security sections, driveway and access gates, and repair-versus-replacement quotes on older heavily used fence lines.",
    localFaqs: [
      {
        question: "Is chain link common in Fontana?",
        answer:
          "Yes. Chain link is common in Fontana where security, larger coverage areas, utility edges, and straightforward perimeter control matter more than a decorative frontage finish.",
      },
      {
        question: "Can Empire Fence quote repair and replacement options in Fontana?",
        answer:
          "Yes. That comparison is useful in Fontana where age, damage, or heavier use may leave the next step less obvious at first glance.",
      },
      {
        question: "Does Fontana work often include gates too?",
        answer:
          "Yes. Gates are a common part of Fontana projects because driveway access, side-yard circulation, and commercial use often shape the whole layout.",
      },
    ],
  },
  {
    slug: "san-bernardino-ca",
    title: "San Bernardino, CA",
    zipCode: "92401",
    image: "/client/gallery/white-commercial-sliding-gate-open.jpg",
    intro:
      "Fence installation, repairs, chain link, metal, and outdoor boundary work for San Bernardino homes and business properties.",
    summary:
      "San Bernardino projects often need stronger perimeter control, practical material choices, and honest repair-or-replace judgment on properties where durability and security matter more than decoration.",
    seoTitle: "Fence Contractor San Bernardino, CA | Empire Fence Inc",
    metaDescription:
      "Need a trusted fence contractor in San Bernardino, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "San Bernardino work is usually more practical than ornamental. A lot of properties need stronger boundary control, durable materials, and layouts that balance privacy, visibility, and daily access without adding unnecessary complexity.",
      "That is why the best estimate here usually comes from understanding how the site functions first. Residential lots, mixed-use properties, business edges, and higher-traffic access points all need different fence and gate strategies even when they are in the same city.",
    ],
    propertyFocus: [
      {
        title: "Security without losing visibility",
        copy:
          "A lot of San Bernardino properties need a boundary that improves control and definition without fully closing off visibility around access points, lots, or business edges.",
      },
      {
        title: "Mixed residential and commercial property types",
        copy:
          "The city regularly brings homes, business properties, mixed-use zones, and larger sites that each need a slightly different material and gate strategy.",
      },
      {
        title: "Practical material decisions",
        copy:
          "Many San Bernardino jobs are less about ornamental frontage and more about building a fence line that stays secure, stable, and easier to maintain over time.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "metal-fence", "fence-repairs", "wrought-iron-fence"],
    serviceBreakdown: [
      {
        title: "Fence installation built around control and function",
        copy:
          "San Bernardino installations often prioritize privacy, perimeter definition, and safer everyday use rather than a purely decorative frontage treatment.",
      },
      {
        title: "Repairs that keep the property usable",
        copy:
          "Older and harder-used fence lines can often be repaired effectively when the core structure is still sound, especially when the priority is restoring control quickly.",
      },
      {
        title: "Chain link and metal for practical coverage",
        copy:
          "Chain link and metal are strong choices when visibility, durability, and larger coverage areas matter more than a closed privacy finish.",
      },
      {
        title: "Gate layout and access-point planning",
        copy:
          "A lot of San Bernardino jobs depend on getting the access points right, especially when the property needs secure circulation, clearer entry control, or a more usable perimeter edge.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "San Bernardino fence installation work usually needs to improve privacy, control, and everyday function on properties that range from residential lots to mixed-use and commercial sites.",
      repair:
        "Fence repairs in San Bernardino often focus on stabilizing worn or damaged sections so the property can regain security and usability without automatically replacing the whole run.",
      supply:
        "Fence supply support helps San Bernardino projects source the right replacement materials for repairs, add-on sections, and phased upgrades that need to stay consistent and dependable.",
      patio:
        "Patio enclosures make sense on San Bernardino properties where outdoor space needs clearer definition, more usability, and a better connection to how the property is actually lived in.",
      gazebo:
        "Gazebo builds are a good fit in San Bernardino when the goal is to create more shade, a stronger yard focal point, and an outdoor area that feels intentionally finished.",
      railing:
        "Railing work is useful in San Bernardino for stairs, patios, raised sections, and walkways that need support, safer use, and a cleaner final edge.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl works well in San Bernardino when the property needs privacy, a clean uniform appearance, and less maintenance over time.",
      wroughtIron:
        "Wrought iron is a strong San Bernardino option for entry areas and front boundaries that need visibility, structure, and a more finished street-facing look.",
      wood:
        "Wood remains a practical choice where San Bernardino homes need backyard privacy, boundary definition, and a more traditional residential finish.",
      chainLink:
        "Chain link is one of the strongest San Bernardino fits for security, utility edges, larger coverage areas, and properties where visibility matters alongside enclosure.",
      metal:
        "Metal fencing gives San Bernardino properties a stronger long-term boundary when the priority is durability, security, and a more substantial perimeter edge.",
    }),
    estimateLead:
      "For San Bernardino estimates, include access points, any damaged sections, and whether the site needs privacy, visibility, or stronger perimeter security so the material direction can be narrowed faster.",
    quoteChecklist: [
      "Photos of the full boundary plus any security-sensitive access points",
      "Any damaged or unstable sections that may be repairable",
      "Whether the site needs privacy, open visibility, or controlled access",
      "Notes about residential, mixed-use, or business property demands",
    ],
    trustBullets: [
      "40 years of combined field experience across practical perimeter work",
      "1-year workmanship warranty on completed projects",
      "Useful for residential, commercial, and mixed-use San Bernardino sites",
      "Scope recommendations built around control, durability, and real property function",
    ],
    whyChooseNarrative: [
      "San Bernardino owners usually need a contractor who can handle real-world property conditions without overcomplicating the recommendation. The right solution here often comes down to control, durability, and how the property is actually used.",
      "Empire Fence is a strong fit because the estimate process can separate privacy needs, security needs, and repair-versus-replacement decisions before the work gets priced into the wrong direction.",
    ],
    recentProjectNote:
      "Recent San Bernardino-type projects usually include chain link and metal perimeter work, repair-focused quotes on aging boundaries, secure access-point planning, and residential privacy upgrades where the owner needs stronger control without losing function.",
    localFaqs: [
      {
        question: "What services are most common in San Bernardino?",
        answer:
          "Chain link, metal fencing, repairs, and secure gate layouts are common because a lot of San Bernardino properties prioritize control, durability, and practical coverage first.",
      },
      {
        question: "Can Empire Fence handle both homes and business properties in San Bernardino?",
        answer:
          "Yes. San Bernardino regularly includes both residential and commercial fence work, which is why the right scope depends on how the specific property is used.",
      },
      {
        question: "Is San Bernardino only a chain link market?",
        answer:
          "No. Chain link is common, but vinyl, wrought iron, and metal all have a place depending on whether the property needs privacy, appearance, or a more open security setup.",
      },
    ],
  },
  {
    slug: "pomona-ca",
    title: "Pomona, CA",
    zipCode: "91766",
    image: "/client/services/custom-fence/custom-fence-design-1.jpg",
    intro:
      "Fence installation, fence repair, patio enclosures, railing work, and outdoor boundary upgrades for Pomona homes and businesses.",
    summary:
      "Pomona projects usually need more than a basic fence line. A lot of properties need better privacy, stronger security, cleaner street-facing boundaries, and layouts that work better around gates, access points, and shared edges.",
    seoTitle: "Fence Contractor Pomona, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Pomona, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Pomona fencing work often has to solve several problems at once. One property may need privacy behind the home while also improving the way the frontage reads from the street. Another may need perimeter control, safer access, and a cleaner boundary around parking, storage, or shared-use areas.",
      "That is why the best Pomona estimate starts with how the site is actually used. Once the daily use is clear, the material direction, gate layout, and repair-versus-replacement decision usually become much easier to narrow down.",
    ],
    propertyFocus: [
      {
        title: "Mixed residential and commercial conditions",
        copy:
          "Pomona brings backyard privacy projects, frontage cleanup, business perimeters, and managed properties that all call for slightly different fence recommendations.",
      },
      {
        title: "Privacy, security, and presentation at the same time",
        copy:
          "A lot of Pomona jobs are not only about enclosure. They also need to improve curb-facing appearance, secure access points, and make the whole property edge feel better organized.",
      },
      {
        title: "Real layout decisions around gates and shared boundaries",
        copy:
          "Pomona estimates often come down to how the fence line interacts with neighbors, driveways, side-yard circulation, and the way people move through the property every day.",
      },
    ],
    featuredServiceSlugs: ["vinyl-fence", "chain-link-fence", "fence-repairs", "railing-contractor"],
    serviceBreakdown: [
      {
        title: "Fence installation that improves function and finish",
        copy:
          "Pomona installations often include backyard privacy runs, side-yard fencing, street-facing upgrades, and commercial-style perimeter sections that need to feel more complete once finished.",
      },
      {
        title: "Fence repair that avoids unnecessary replacement",
        copy:
          "Leaning sections, broken panels, loose rails, and gate problems are common in Pomona. When a focused repair still makes sense, the quote should say that instead of pushing a full rebuild by default.",
      },
      {
        title: "Supply support for matching upgrades and replacements",
        copy:
          "Pomona projects often need the right panels, posts, gates, and hardware to keep repairs and partial upgrades looking consistent instead of pieced together.",
      },
      {
        title: "Outdoor upgrades that make the property feel more usable",
        copy:
          "Patio enclosures, railings, and gazebo work are a good fit when the outdoor space needs stronger day-to-day function as well as a more finished look.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Pomona fence installation work regularly includes backyard privacy fencing, frontage improvements, side-yard separation, perimeter definition, and custom layouts that need to fit both residential and commercial use.",
      repair:
        "Fence repairs in Pomona often deal with leaning posts, broken panels, loosened rails, worn hardware, and gates that no longer work correctly. The goal is to restore function when a targeted repair still makes practical sense.",
      supply:
        "Fence supply support helps Pomona jobs source matching panels, posts, rails, gates, hardware, and replacement parts so repairs and phased improvements hold up and look consistent.",
      patio:
        "Patio enclosures in Pomona give outdoor areas more privacy, more structure, and a stronger everyday use case without making the property feel closed off.",
      gazebo:
        "Gazebo builds are a good fit for Pomona yards and shared exterior spaces that need shade, a clearer focal point, and a more intentional finished layout.",
      railing:
        "Railing work in Pomona is useful on stairs, patios, raised walkways, and transition zones where safety and cleaner definition both matter.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Pomona choice when the property needs privacy, a clean consistent look, and lower maintenance over the long term.",
      wroughtIron:
        "Wrought iron works well in Pomona for front-facing sections and entry areas that need structure, visibility, and a more refined curb-facing finish.",
      wood:
        "Wood remains a practical Pomona option for backyard privacy, shared boundaries, and homes that need a warmer, more traditional residential look.",
      chainLink:
        "Chain link is useful in Pomona when the priority is secure enclosure, visibility, and durable coverage around side yards, storage areas, or larger business edges.",
      metal:
        "Metal fencing is a strong Pomona fit where the site needs durability, stronger perimeter definition, and a clean professional boundary.",
    }),
    estimateLead:
      "For Pomona estimates, send photos of the full run, any gate areas, shared boundaries, and the parts of the property that need privacy, visibility, or stronger security so the recommendation reflects the real layout.",
    quoteChecklist: [
      "Full-run photos from both directions",
      "Gate locations, driveways, and side-yard access notes",
      "Any leaning sections, damaged panels, or worn hardware",
      "Whether the main goal is privacy, security, curb appeal, or a mix of all three",
    ],
    trustBullets: [
      "40 years of fencing experience",
      "Residential and commercial service",
      "1-year workmanship warranty",
      "Custom fence repair solutions with direct repair-versus-replace guidance",
    ],
    whyChooseNarrative: [
      "Pomona owners usually want a contractor who can look at the whole property and make a practical recommendation instead of forcing the same fence package onto every site. That is especially useful when privacy, security, and street-facing appearance all matter at once.",
      "Empire Fence tends to win this work because the estimate process stays direct. The team helps separate what the property actually needs from what would only add cost without improving the result.",
    ],
    recentProjectNote:
      "Recent Pomona-type work usually includes privacy fence replacements, commercial-style perimeter sections, gate corrections, and repair-focused quotes where the property owner wants a cleaner boundary without wasting scope.",
    localFaqs: [
      {
        question: "What types of fence projects are most common in Pomona?",
        answer:
          "Pomona regularly brings backyard privacy work, frontage improvements, business perimeter fencing, gate corrections, and repair-versus-replacement estimates on older fence lines.",
      },
      {
        question: "Can Empire Fence handle both home and business properties in Pomona?",
        answer:
          "Yes. Pomona includes residential, landlord, commercial, and mixed-use properties, so the work often needs a more flexible approach than a single-material recommendation.",
      },
      {
        question: "Is a full replacement always necessary when a Pomona fence is damaged?",
        answer:
          "No. If the surrounding structure still has useful life, a targeted repair may be the better option. If replacement makes more sense long term, the estimate should explain why clearly.",
      },
    ],
  },
  {
    slug: "redlands-ca",
    title: "Redlands, CA",
    zipCode: "92373",
    image: "/client/services/wood-fence/wood-fence-natural-finish.jpg",
    intro:
      "Fence installation, fence repair, patio enclosures, railing work, and outdoor upgrades for Redlands homes and business properties.",
    summary:
      "Redlands properties often need fencing that respects the look of the site as much as it improves privacy and security. The right recommendation usually needs to feel clean, established, and appropriate to the property instead of overly heavy or out of place.",
    seoTitle: "Fence Contractor Redlands, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Redlands, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Redlands jobs usually call for a more thoughtful fence approach. Some homes need stronger backyard privacy without losing the character of the house. Others need a cleaner front-facing boundary, a better side-yard enclosure, or a repair that restores function while keeping the property looking established.",
      "That is why the estimate has to start with the property itself. Once the layout, appearance goals, and daily use are clear, it becomes much easier to choose the right material and decide whether the job should be a repair, a replacement, or a broader outdoor improvement.",
    ],
    propertyFocus: [
      {
        title: "Established homes that need the right visual fit",
        copy:
          "Redlands properties often benefit from fencing that feels intentional and in proportion with the home instead of looking overly industrial or too heavy for the setting.",
      },
      {
        title: "Privacy without losing neighborhood character",
        copy:
          "A lot of Redlands work is about finding the line between stronger privacy and a finished look that still feels welcoming and appropriate for the street.",
      },
      {
        title: "Repairs that preserve the property’s appearance",
        copy:
          "Redlands owners often want a repair that restores function while keeping the fence and frontage from looking patched together or visually out of place.",
      },
    ],
    featuredServiceSlugs: ["wood-fence", "vinyl-fence", "wrought-iron-fence", "fence-repairs"],
    serviceBreakdown: [
      {
        title: "Installation that feels like it belongs on the property",
        copy:
          "Redlands installations usually need to improve privacy and security without compromising the established feel of the house, yard, or visible frontage.",
      },
      {
        title: "Repairs that restore function cleanly",
        copy:
          "Damaged posts, panels, rails, and gates can often be repaired in Redlands without making the finished result feel mismatched or temporary.",
      },
      {
        title: "Material choices shaped by appearance and upkeep",
        copy:
          "Wood, vinyl, wrought iron, chain link, and metal can all make sense in Redlands, but the right answer usually depends on both the property style and the long-term maintenance preference.",
      },
      {
        title: "Outdoor scope that adds usable finished space",
        copy:
          "Patio enclosures, gazebos, and railings are useful in Redlands when the outdoor area needs more structure and a stronger visual connection to the home.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Redlands fence installation work usually includes backyard privacy upgrades, cleaner front-facing boundaries, side-yard enclosure, gate planning, and custom layouts that need to fit the property naturally.",
      repair:
        "Fence repairs in Redlands often focus on restoring leaning sections, worn gates, damaged posts, and failing panels without making the property look patched or unfinished.",
      supply:
        "Fence supply support helps Redlands jobs source matching components and better materials so repairs and phased upgrades maintain a stronger finished appearance.",
      patio:
        "Patio enclosures are a strong Redlands fit when the goal is to create more usable outdoor living space that still feels connected to the house and yard.",
      gazebo:
        "Gazebo projects in Redlands work well on properties that need shade, a stronger yard focal point, and a more intentional gathering space outdoors.",
      railing:
        "Railing work helps Redlands patios, stairs, walkways, and raised transitions stay safer while also feeling cleaner and more complete visually.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl works well in Redlands when the property needs privacy, a polished long-term appearance, and lower maintenance over time.",
      wroughtIron:
        "Wrought iron is a strong Redlands choice for front sections and entries that need structure, visibility, and a more refined architectural edge.",
      wood:
        "Wood remains one of the best Redlands fits for privacy, warmth, and a more traditional residential finish that complements established homes.",
      chainLink:
        "Chain link is useful in Redlands where the site needs practical enclosure and visibility around service areas, side boundaries, or business properties.",
      metal:
        "Metal fencing gives Redlands properties a durable, substantial perimeter when the project needs long-term performance with a cleaner professional look.",
    }),
    estimateLead:
      "For Redlands estimates, include full-run photos, any visible front-facing sections, and notes about gates or slope changes so the quote reflects both the function and the way the property should read once the work is finished.",
    quoteChecklist: [
      "Photos of the full fence line and any street-facing sections",
      "Details about gates, side-yard access, and visible entry points",
      "Any damaged panels, posts, or alignment issues",
      "Whether the priority is privacy, lower maintenance, presentation, or a blend of those goals",
    ],
    trustBullets: [
      "40 years of fencing experience",
      "Residential and commercial service",
      "1-year workmanship warranty",
      "Repair recommendations that respect the finished look of the property",
    ],
    whyChooseNarrative: [
      "Redlands property owners usually want practical service, but they also care about whether the finished work feels right for the setting. That means the estimate has to consider appearance, scale, and daily use instead of only linear footage.",
      "Empire Fence is a strong fit when the job needs honest repair-versus-replacement guidance, material recommendations that suit the property, and workmanship that improves the way the site looks as well as how it functions.",
    ],
    recentProjectNote:
      "Recent Redlands-type work usually includes backyard privacy upgrades, front-facing wrought iron or wood recommendations, gate corrections, and repair-focused quotes on older residential fence lines.",
    localFaqs: [
      {
        question: "What kind of fencing tends to work best in Redlands?",
        answer:
          "That depends on the property, but Redlands often benefits from wood, vinyl, and wrought iron because they can balance privacy, curb appeal, and a more established finished look.",
      },
      {
        question: "Can a Redlands fence repair still look clean and intentional?",
        answer:
          "Yes, when the surrounding fence is still in workable condition and the repair is planned around matching materials and restoring alignment instead of just patching the damage quickly.",
      },
      {
        question: "Does Empire Fence work on business properties in Redlands too?",
        answer:
          "Yes. Empire Fence handles both residential and commercial work in Redlands, including perimeter fencing, access-point planning, and broader outdoor boundary upgrades.",
      },
    ],
  },
  {
    slug: "upland-ca",
    title: "Upland, CA",
    zipCode: "91786",
    image: "/client/services/vinyl-fence/vinyl-fence-installation.jpg",
    intro:
      "Fence installation, fence repair, patio enclosures, railing work, and outdoor upgrades for Upland homes and businesses.",
    summary:
      "Upland fencing is usually about more than a simple boundary line. A lot of properties need privacy without losing openness, security without sacrificing curb appeal, and improvements that fit the character of the home or business.",
    seoTitle: "Fence Contractor Upland, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Upland, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Upland properties often need a more considered fence recommendation than a generic package quote. Some owners want stronger backyard privacy while keeping the neighborhood feel intact. Others need front-facing fencing, side-yard enclosure, or a repair that restores function without making the property look downgraded.",
      "The right estimate comes from understanding how the property is used and what the finished result is supposed to accomplish. Once that is clear, the right combination of material, gate planning, and scope becomes much easier to recommend.",
    ],
    propertyFocus: [
      {
        title: "Privacy that still feels open and balanced",
        copy:
          "A lot of Upland properties want enclosure, but not at the cost of making the yard or frontage feel boxed in or visually heavy.",
      },
      {
        title: "Higher attention to finish and fit",
        copy:
          "Upland work often benefits from tighter alignment, cleaner spacing, and materials that look like they belong with the home instead of reading like an afterthought.",
      },
      {
        title: "Repair-or-replace decisions that protect value",
        copy:
          "Some Upland owners need to restore a damaged section without losing the overall look of the property, while others are better served by replacing a fence that has already reached the end of its useful life.",
      },
    ],
    featuredServiceSlugs: ["vinyl-fence", "wood-fence", "wrought-iron-fence", "fence-repairs"],
    serviceBreakdown: [
      {
        title: "Fence installation that supports the site visually",
        copy:
          "Upland installations often need to improve privacy and security while still feeling balanced with the architecture and layout of the property.",
      },
      {
        title: "Repairs that keep the fence usable and presentable",
        copy:
          "Gate problems, weak posts, broken panels, and worn sections can often be repaired effectively when the rest of the fence is still worth preserving.",
      },
      {
        title: "Material direction based on the property’s character",
        copy:
          "In Upland, the best fence choice often comes down to the visual feel of the site as much as the practical needs for privacy, security, and maintenance.",
      },
      {
        title: "Supporting outdoor work that completes the space",
        copy:
          "Patio enclosures, gazebos, and railing projects make sense when the goal is to make the exterior area feel more intentional and more finished overall.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Upland fence installation work regularly includes backyard privacy upgrades, front-yard boundaries, side-yard separation, entry areas, and custom layouts that need to fit the site cleanly.",
      repair:
        "Fence repairs in Upland often focus on damaged posts, broken panels, misaligned gates, worn hardware, and unstable sections that can still be restored instead of fully rebuilt.",
      supply:
        "Fence supply support helps Upland projects source stronger matching materials for repairs, phased improvements, and component replacements that need to stay consistent.",
      patio:
        "Patio enclosures in Upland are useful when an open exterior area needs more definition, more comfort, and a stronger everyday use without feeling disconnected from the property.",
      gazebo:
        "Gazebo projects are a strong Upland fit when the yard needs shade, a more intentional focal point, and a better place for gathering or relaxing outdoors.",
      railing:
        "Railing work supports Upland patios, stairs, and raised areas where safety matters but the finished line still needs to look polished and appropriate for the property.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Upland option when the property needs privacy, a clean appearance, and lower maintenance with a more polished finished look.",
      wroughtIron:
        "Wrought iron works especially well in Upland for front-facing sections, entry areas, and driveways that need structure and curb appeal without closing off visibility.",
      wood:
        "Wood remains one of the best Upland fits for backyard privacy, side-yard enclosure, and homes that need a warmer, more traditional residential feel.",
      chainLink:
        "Chain link is useful in Upland where the priority is straightforward enclosure, side-boundary function, service-area separation, or practical perimeter control.",
      metal:
        "Metal fencing is a dependable Upland choice for properties that need durability, stronger perimeter definition, and a clean professional edge.",
    }),
    estimateLead:
      "For Upland estimates, send photos of the full run, any front-facing sections, and notes about gates, side-yard access, or slope changes so the quote can balance function with the right finished look.",
    quoteChecklist: [
      "Wide photos of the full fence line",
      "Any front-facing or entry sections that need special attention",
      "Gate locations, side-yard access notes, and slope changes",
      "Whether privacy, curb appeal, security, or lower maintenance matters most",
    ],
    trustBullets: [
      "40 years of fencing experience",
      "Residential and commercial service",
      "1-year workmanship warranty",
      "Direct recommendations shaped around both use and finish quality",
    ],
    whyChooseNarrative: [
      "Upland owners usually want more than a contractor who can simply install panels. They want guidance on what will look right, perform well, and add long-term value to the property.",
      "Empire Fence is a strong fit when the project needs honest recommendations, cleaner execution, and a fence solution that supports both the practical use and the visual quality of the site.",
    ],
    recentProjectNote:
      "Recent Upland-type projects usually include vinyl privacy upgrades, wood boundary replacements, wrought iron entry work, and repair-first estimates where preserving the property’s overall feel still matters.",
    localFaqs: [
      {
        question: "What fence materials tend to work best in Upland?",
        answer:
          "Wood, vinyl, and wrought iron are all strong Upland fits depending on whether the property needs privacy, lower maintenance, or a more refined front-facing appearance.",
      },
      {
        question: "Can Empire Fence repair only part of a damaged Upland fence?",
        answer:
          "Yes. If the surrounding fence is still in workable condition, a targeted repair may be the better option. If replacement is smarter long term, the quote should make that clear.",
      },
      {
        question: "Does Upland work only mean residential projects?",
        answer:
          "No. Empire Fence handles both residential and commercial properties in Upland, including perimeter work, repairs, and supporting outdoor improvements.",
      },
    ],
  },
  {
    slug: "moreno-valley-ca",
    title: "Moreno Valley, CA",
    zipCode: "92553",
    image: "/client/services/wood-fence/wood-privacy-fence-backyard.jpg",
    intro:
      "Fence installation, fence repair, patio enclosures, railing work, and outdoor boundary upgrades for Moreno Valley homes and businesses.",
    summary:
      "Moreno Valley properties often need fencing that can handle several priorities at once: privacy for busy backyards, clearer side-yard boundaries, dependable access points, and durable perimeter lines that improve both function and appearance.",
    seoTitle: "Fence Contractor Moreno Valley, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Moreno Valley, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Moreno Valley jobs are often shaped by active day-to-day use. Some homes need stronger privacy for family backyards. Others need cleaner side-yard separation, gates that work better, or a more organized outdoor layout that makes the property easier to use every day.",
      "That is why the strongest estimate here usually focuses on practical function first. Once the site use is clear, the right material, repair path, and scope of work usually become much easier to define.",
    ],
    propertyFocus: [
      {
        title: "Busy family yards and growing households",
        copy:
          "A lot of Moreno Valley projects center on backyard privacy, safer side-yard circulation, and fence layouts that can hold up to constant daily use.",
      },
      {
        title: "Perimeter definition that feels cleaner and more organized",
        copy:
          "Many Moreno Valley properties need a boundary that improves the visual order of the lot while also helping with privacy, containment, or access control.",
      },
      {
        title: "Materials chosen for both function and maintenance",
        copy:
          "Moreno Valley owners often want a fence that not only solves the current problem but also stays easier to maintain over time as the property continues to be heavily used.",
      },
    ],
    featuredServiceSlugs: ["vinyl-fence", "wood-fence", "fence-repairs", "chain-link-fence"],
    serviceBreakdown: [
      {
        title: "Fence installation for active residential and business sites",
        copy:
          "Moreno Valley installations often need to improve privacy, side-yard separation, and perimeter definition while still fitting the practical movement around the property.",
      },
      {
        title: "Repairs that restore usable boundaries",
        copy:
          "Broken panels, damaged posts, sagging sections, and worn gates can often be repaired effectively when the rest of the fence still has useful life left in it.",
      },
      {
        title: "Lower-maintenance options for everyday use",
        copy:
          "Vinyl and some metal options are often useful in Moreno Valley when the owner wants a cleaner finished look with less upkeep over time.",
      },
      {
        title: "Outdoor upgrades that make the yard easier to use",
        copy:
          "Patio enclosures, gazebos, and railings are strong additions when the goal is to give the outdoor space more structure and daily function.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Moreno Valley fence installation work usually includes backyard privacy runs, side-yard separation, access-point improvements, perimeter boundaries, and custom layouts for both homes and businesses.",
      repair:
        "Fence repairs in Moreno Valley often address worn posts, broken panels, loose rails, sagging sections, and gate issues so the property can regain privacy and function without an automatic full replacement.",
      supply:
        "Fence supply support helps Moreno Valley projects source stronger matching components for repairs, section replacements, and phased upgrades that need to stay durable and consistent.",
      patio:
        "Patio enclosures in Moreno Valley help turn open yards into more usable exterior rooms that feel better connected to the home and easier to enjoy throughout the year.",
      gazebo:
        "Gazebo builds are a good fit when a Moreno Valley yard needs shade, a stronger focal point, and a clearer place for gathering or relaxing outdoors.",
      railing:
        "Railing work supports Moreno Valley stairs, patios, raised walks, and transition areas where safety and a cleaner finished edge both matter.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a practical Moreno Valley choice for properties that need privacy, a clean finished look, and lower maintenance for busy everyday use.",
      wroughtIron:
        "Wrought iron works well in Moreno Valley on front-facing sections and entry points where the property needs structure and visibility without feeling closed in.",
      wood:
        "Wood remains a strong Moreno Valley option for privacy, character, and flexible backyard or side-yard separation where a warmer residential look is preferred.",
      chainLink:
        "Chain link is useful in Moreno Valley where the site needs practical enclosure, larger coverage areas, utility edges, or more straightforward perimeter control.",
      metal:
        "Metal fencing gives Moreno Valley properties stronger long-term durability and a more substantial perimeter when security and definition matter most.",
    }),
    estimateLead:
      "For Moreno Valley estimates, include photos of the full fence line, notes on gates and side-yard circulation, and whether the site needs stronger privacy, easier maintenance, or more durable perimeter control.",
    quoteChecklist: [
      "Photos of the full run and any active backyard or side-yard areas",
      "Gate locations and notes on how people or vehicles use the property",
      "Any damaged or unstable sections that may be repairable",
      "Whether the main goal is privacy, lower maintenance, stronger security, or a mix",
    ],
    trustBullets: [
      "40 years of fencing experience",
      "Residential and commercial service",
      "1-year workmanship warranty",
      "Straight guidance on repair, replacement, and material fit",
    ],
    whyChooseNarrative: [
      "Moreno Valley owners usually want direct guidance on what will work best for the way the property is actually used. That means the estimate needs to account for family use, access, durability, and whether the current fence still has useful life left in it.",
      "Empire Fence is a strong fit because the recommendation stays practical. The team can narrow the right material and scope based on the real conditions of the site instead of pushing a one-size-fits-all package.",
    ],
    recentProjectNote:
      "Recent Moreno Valley-type work usually includes backyard privacy fence replacements, side-yard enclosure, gate fixes, and lower-maintenance upgrades where the owner wants a cleaner and more dependable property edge.",
    localFaqs: [
      {
        question: "What fence option works well for a Moreno Valley family backyard?",
        answer:
          "Vinyl is often a strong choice when privacy and lower maintenance both matter. Wood can also work well when the owner wants a more natural look. The best fit depends on the property and upkeep preference.",
      },
      {
        question: "Can Empire Fence repair part of a Moreno Valley fence instead of replacing all of it?",
        answer:
          "Yes. If the surrounding fence is still in workable condition, a targeted repair may be the better solution. If replacement makes more sense, the estimate should explain why clearly.",
      },
      {
        question: "Does Moreno Valley work include commercial fencing too?",
        answer:
          "Yes. Empire Fence works on both residential and commercial properties in Moreno Valley, including perimeter fencing, repairs, and supporting outdoor improvements.",
      },
    ],
  },
  {
    slug: "norco-ca",
    title: "Norco, CA",
    zipCode: "92860",
    image: "/client/services/chain-link-fence/chain-link-security-fence.jpg",
    intro:
      "Fence installation, fence repair, patio enclosures, railing work, and stronger perimeter upgrades for Norco homes and business properties.",
    summary:
      "Norco projects often need fencing that can cover more ground and work harder than in nearby cities. Larger lots, more open layouts, and stronger containment needs make perimeter definition, gate access, and durable materials especially important here.",
    seoTitle: "Fence Contractor Norco, CA | Empire Fence Inc",
    metaDescription:
      "Looking for a trusted fence contractor in Norco, CA? Empire Fence Inc provides fence installation, fence repair, patio enclosures, railings, and more for homes and businesses. Call +1 951-783-2965 for a free quote.",
    serviceNarrative: [
      "Norco work is usually shaped by space, access, and long-term function. Some properties need more privacy around larger outdoor areas. Others need stronger boundary definition, dependable gates, and repairs that restore real security without overcomplicating the property.",
      "That is why the best Norco estimate is usually built around how the site performs every day. Once the use of the lot is clear, it becomes much easier to choose the right material, the right gate layout, and whether the job should be a repair or a broader upgrade.",
    ],
    propertyFocus: [
      {
        title: "Larger lots and broader perimeter coverage",
        copy:
          "A lot of Norco properties need a fence system that can define a wider footprint and still stay practical, durable, and easier to maintain over time.",
      },
      {
        title: "Gate access and usable movement through the site",
        copy:
          "Norco estimates often need to think carefully about entry points, side access, and how the fence will support the way the property is actually used every day.",
      },
      {
        title: "Privacy without overcomplicating the layout",
        copy:
          "Some Norco jobs need more privacy while others need stronger perimeter control and visibility. The right recommendation usually comes from balancing those needs instead of overbuilding the site.",
      },
    ],
    featuredServiceSlugs: ["chain-link-fence", "metal-fence", "wood-fence", "fence-repairs"],
    serviceBreakdown: [
      {
        title: "Fence installation for bigger and harder-working sites",
        copy:
          "Norco installations often need stronger perimeter definition, better use of larger outdoor areas, and materials that can stay practical across longer runs.",
      },
      {
        title: "Repairs that restore security and function",
        copy:
          "Damaged gates, worn posts, sagging sections, and weakened rails can often be repaired effectively when the rest of the fence is still structurally worth keeping.",
      },
      {
        title: "Material recommendations based on long-term use",
        copy:
          "Norco projects usually benefit from material choices that account for broader lot coverage, containment, durability, and whether the site needs privacy or visibility more.",
      },
      {
        title: "Outdoor improvements that make the property more usable",
        copy:
          "Patio enclosures, gazebos, and railing work are useful when the property needs more shade, better transitions, or clearer support around outdoor areas.",
      },
    ],
    fullServiceSections: createAreaServiceSections({
      installation:
        "Norco fence installation work often includes perimeter boundaries, side-yard and backyard enclosure, access-point planning, larger-lot layouts, and custom fence runs built around how the property needs to function daily.",
      repair:
        "Fence repairs in Norco commonly focus on restoring damaged gates, weak posts, broken panels, worn rails, and sagging sections so the site can regain containment and everyday usability.",
      supply:
        "Fence supply support helps Norco projects source the right panels, posts, gates, rails, and replacement components when repairs or phased upgrades need to hold up across larger runs.",
      patio:
        "Patio enclosures in Norco help turn open exterior areas into more comfortable and usable spaces without making the property feel boxed in or disconnected.",
      gazebo:
        "Gazebo projects are a strong Norco fit when the yard needs shade, stronger structure, and a more purposeful outdoor gathering area.",
      railing:
        "Railing work in Norco helps stairs, walkways, patios, and raised transitions feel safer, more usable, and more finished.",
    }),
    fenceTypeSections: createFenceTypeSections({
      vinyl:
        "Vinyl is a strong Norco option when the property needs privacy, cleaner appearance, and lower maintenance over time.",
      wroughtIron:
        "Wrought iron works well in Norco where front-facing sections and entries need structure, visibility, and a more defined finished edge without closing off the property too much.",
      wood:
        "Wood remains useful in Norco for backyard privacy, side-yard separation, and larger residential properties that need a warmer and more natural visual fit.",
      chainLink:
        "Chain link is one of the most practical Norco choices for perimeter control, larger boundaries, utility areas, and properties where durability and visibility matter most.",
      metal:
        "Metal fencing gives Norco properties a stronger long-term perimeter when the priority is durable enclosure, security, and a more substantial finished boundary.",
    }),
    estimateLead:
      "For Norco estimates, include photos of the full perimeter, gate and access-point notes, and whether the site needs privacy, visibility, or stronger containment so the material and layout direction can be narrowed faster.",
    quoteChecklist: [
      "Long-run photos showing the full perimeter or boundary sections",
      "Driveway, side-access, and gate location notes",
      "Any damaged sections, unstable posts, or failing hardware",
      "Whether the site needs privacy, visibility, perimeter control, or a mix",
    ],
    trustBullets: [
      "40 years of fencing experience",
      "Residential and commercial service",
      "1-year workmanship warranty",
      "Strong fit for larger lots, longer runs, and practical perimeter planning",
    ],
    whyChooseNarrative: [
      "Norco owners usually need a contractor who can look at the whole property and recommend a fence system that stays practical over a bigger footprint. That means the quote has to account for access, lot size, durability, and how the site is used every day.",
      "Empire Fence is a strong fit because the estimate process stays grounded in the real conditions of the property. The goal is to build a boundary that works well long term, not just one that looks acceptable on day one.",
    ],
    recentProjectNote:
      "Recent Norco-type work usually includes longer privacy runs, perimeter chain link and metal sections, gate layout corrections, and repair-versus-replacement quotes on older boundaries that still cover a lot of ground.",
    localFaqs: [
      {
        question: "What kind of fencing is most common on Norco properties?",
        answer:
          "That depends on the site, but Norco often leans toward chain link, wood, metal, and privacy-focused layouts because larger lots and practical perimeter use matter so much here.",
      },
      {
        question: "Can Empire Fence handle larger-lot perimeter work in Norco?",
        answer:
          "Yes. Norco is exactly the kind of market where perimeter definition, gate planning, and durable materials need to be matched to a bigger and more actively used property.",
      },
      {
        question: "Does a Norco fence repair always require full replacement?",
        answer:
          "No. If the surrounding fence still has useful life, a targeted repair may be the better move. If replacement makes more sense, the estimate should explain that clearly.",
      },
    ],
  },
];

const normalizeCoverageCity = (label) => label.replace(/,\s*CA$/, "");

export const coverageZipCodes = [
  { city: normalizeCoverageCity(business.city), zip: business.zipCode },
  ...serviceAreas
    .filter((area) => area.zipCode)
    .map((area) => ({
      city: normalizeCoverageCity(area.title),
      zip: area.zipCode,
    })),
].filter(
  (item, index, list) =>
    list.findIndex((candidate) => candidate.city === item.city && candidate.zip === item.zip) === index
);

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
      "Yes. The active coverage includes Jurupa Valley and nearby Inland Empire cities such as Riverside, Ontario, Chino, Rancho Cucamonga, Fontana, San Bernardino, Pomona, Redlands, Upland, Moreno Valley, and Norco.",
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
