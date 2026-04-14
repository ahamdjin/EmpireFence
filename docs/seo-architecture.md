# Empire Fence SEO Architecture

## Core goal

Build a local-service SEO structure that can scale cleanly across:

- service pages
- city pages
- blog content
- contact / trust pages

## Existing route groups

- `/`
- `/about-us`
- `/services`
- `/services/{service-slug}`
- `/gallery`
- `/areas`
- `/areas/{city-slug}`
- `/contact-us`
- `/blog`
- `/blog/{post-slug}`

## Primary SEO layers

### Metadata

- default site metadata in `app/layout.js`
- page metadata on key static routes
- dynamic metadata in:
  - `app/services/[slug]/page.js`
  - `app/areas/[slug]/page.js`
  - `app/blog/[slug]/page.js`

### Structured data

- add `LocalBusiness` / `HomeAndConstructionBusiness` JSON-LD at layout level
- later add `Service` schema on service pages
- later add `BlogPosting` schema on blog detail pages

### Crawl assets

- `app/sitemap.js`
- `app/robots.js`

## Content priorities

### Service pages

Each service page should target:

- one primary service keyword
- one local modifier
- one problem/outcome framing

### City pages

Each city page should target:

- `service + city`
- `fence contractor + city`
- local project scope language

### Blog

Blog should support:

- buying questions
- service comparison
- estimate prep
- maintenance and planning
- city-specific exterior concerns

## Rules

- Titles should stay concise and service-led
- Descriptions should emphasize Jurupa Valley + Inland Empire relevance
- Avoid duplicated intros across service pages over time
- Internal links should reinforce:
  - service -> contact
  - city -> service
  - blog -> service/contact

## Next SEO additions

1. keep service/city metadata copy sharp as content expands
2. keep sitemap dates tied to real content updates
3. keep Open Graph image choices intentional by route group
4. avoid reintroducing duplicate legacy paths without a real migration need
