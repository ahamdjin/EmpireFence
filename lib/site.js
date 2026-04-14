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
    image: "/client/locations/riverside/riverside-ca-fence-project.jpg",
    intro:
      "Trusted fence installation, fence repair, gate work, and outdoor upgrades for Riverside homes and businesses.",
    summary:
      "Riverside jobs usually start with practical needs: replacing aging fence lines, improving privacy, tightening curb-facing sections, and planning gates or transitions that still look finished from the street.",
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
    image: "/client/locations/ontario/ontario-ca-fence-installation.jpg",
    intro:
      "Fence installation, repairs, gates, patio enclosures, and railing work for Ontario homes and commercial properties.",
    summary:
      "Ontario brings a mixed workload: newer residential lots, busy commercial corridors, and industrial properties that all need different boundary, access, and privacy decisions from the start.",
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
    image: "/client/locations/chino/chino-backyard-fence.jpg",
    intro:
      "Professional fence installation, repairs, and outdoor improvement work tailored to Chino homes and larger-lot properties.",
    summary:
      "Chino properties often need more than a simple boundary line. Wider lots, backyard privacy, side-yard gates, and outdoor-use upgrades all push the layout to be more deliberate from the first estimate.",
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
    image: "/client/locations/rancho-cucamonga/rancho-cucamonga-ca-fence.jpg",
    intro:
      "Fence installation, repairs, gates, and polished outdoor improvements for Rancho Cucamonga properties that need a cleaner finished result.",
    summary:
      "Rancho Cucamonga work tends to be more finish-sensitive: front-facing presentation, gates, railings, and better material coordination all carry more weight because the property edge stays highly visible.",
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
    image: "/client/locations/fontana/fontana-ca-security-fence.jpg",
    intro:
      "Fence installation, repairs, secure perimeter work, and outdoor upgrades for Fontana homes and businesses.",
    summary:
      "Fontana brings a lot of practical fence work: privacy runs, secure gates, longer fence lines, and repair-versus-replacement decisions on properties where durability matters more than decorative extras.",
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
    image: "/client/locations/san-bernardino/san-bernardino-ca-fence.jpg",
    intro:
      "Fence installation, repairs, chain link, metal, and outdoor boundary work for San Bernardino homes and business properties.",
    summary:
      "San Bernardino projects often need stronger perimeter control, practical material choices, and honest repair-or-replace judgment on properties where durability and security matter more than decoration.",
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
