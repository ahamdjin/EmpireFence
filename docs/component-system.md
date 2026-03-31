# Empire Fence Component System

## Core components

### 1. `SiteHeader`

- Variants:
  - default
  - scrolled
  - mobile open
- Responsibilities:
  - brand mark
  - top-level navigation
  - call CTA
  - book CTA

### 2. `HeroFrame`

- Variants:
  - home hero
  - internal page hero
- Responsibilities:
  - framed shell
  - top information bar
  - headline block
  - image stage
  - supporting CTA row

### 3. `SectionHeading`

- Variants:
  - split
  - centered
  - contrast
- Responsibilities:
  - eyebrow
  - section title
  - optional copy

### 4. `ServiceCard`

- Variants:
  - `feature`
  - `tile`
  - `default`
- Responsibilities:
  - service image
  - eyebrow
  - title
  - summary
  - optional bullets
  - CTA

### 5. `TrustCard`

- Variants:
  - editorial light
  - contrast dark
  - staggered layout positioning

### 6. `GalleryTile`

- Variants:
  - tall
  - medium
  - square

### 7. `InfoPanel`

- Variants:
  - soft
  - dark
  - framed map

### 8. `QuoteForm`

- Variants:
  - full
  - compact
- Responsibilities:
  - lead capture
  - service selection
  - city/details
  - mailto fallback

### 9. `BookingWidget`

- Variants:
  - dark host panel
  - standalone booking section
- Constraint:
  - iframe content is third-party; only the host shell is styled

### 10. `ChatWidget`

- Variants:
  - global site widget only
- Constraint:
  - third-party widget UI cannot be fully redesigned from site CSS

## Responsive behavior

- Header collapses to menu button under tablet
- Hero switches to stacked layout under tablet
- Service feature collapses to single column under tablet
- Card grids collapse to one column under mobile
- Map and booking split sections stack on smaller viewports

## Scroll behavior

- Header gains denser background on scroll
- Reveal components animate once on intersection
- Staggered cards lose offset on smaller breakpoints

## Next rebuild rule

Any future visual pass should:

1. change component internals
2. preserve component names and responsibilities
3. avoid reintroducing page-specific one-off sections unless they become reusable
