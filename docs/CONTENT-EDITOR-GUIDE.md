# Empire Fence Content Editor Guide

This project is editable without touching layout code if you stay inside the content files and image folders listed here.

This guide covers:

1. How to change images
2. How to update an existing blog post
3. How to create a new blog post
4. How a GitHub API blog-publishing flow can work
5. What the current SEO condition is

## 1. Fast rules

Only touch these places for normal content work:

- `content/blog/*.md`
- `content/services/*.md`
- `public/client/...` image folders

Avoid editing these unless you want to change site behavior or layout:

- `app/...`
- `components/...`
- `lib/site.js`
- `lib/seo.js`
- `lib/image-presentation.js`

## 2. Where images live

Client-facing images live under:

- `public/client/home`
- `public/client/about`
- `public/client/gallery`
- `public/client/projects`
- `public/client/locations/{city}`
- `public/client/services/{service-slug}`
- `public/client/gbp`
- `public/client/blog`

Important rule:

- Image paths used in markdown must start with `/client/...`
- Example:
  - real file: `public/client/blog/my-post/hero.jpg`
  - markdown path: `/client/blog/my-post/hero.jpg`

## 3. How to change an image on an existing page

### A. Blog post image

Open the blog file:

- `content/blog/{slug}.md`

Change this field:

```md
heroImage: /client/blog/my-post/hero.jpg
```

That image is used for:

- the blog post hero
- the blog card image
- Open Graph / Twitter image
- blog article schema image

### B. Service page image

Open the service file:

- `content/services/{slug}.md`

Change this field:

```md
heroImage: /client/services/vinyl-fence/my-image.jpg
```

That image is used for:

- the service hero
- service cards
- service schema image

### C. Shared section images

These are not controlled from markdown.

They live mainly in:

- `lib/site.js`

This file controls things like:

- homepage featured project images
- about-page supporting images
- area-page city images

If you want to swap one of those, update the relevant `image:` field there.

## 4. How to update an existing blog post

Open:

- `content/blog/{slug}.md`

Each blog file has:

1. Frontmatter at the top
2. The article body below it

Example:

```md
---
slug: chain-link-fence-for-home-or-business
title: Is Chain Link Fence Better for Homes or Businesses?
date: 2026-04-05
modifiedDate: 2026-04-12
excerpt: Why chain link stays one of the smartest fence systems for both residential and commercial sites when the priority is enclosure, visibility, and practical value.
heroImage: /client/services/chain-link-fence/chain-link-security-fence.jpg
articleSection: Security Planning
keywords:
  - chain link fence for home
  - chain link fence for business
relatedServices:
  - chain-link-fence
relatedCities:
  - jurupa-valley-ca
---
Article content starts here...
```

### Required frontmatter for blog posts

These must exist or the content system will reject the post:

- `title`
- `date`
- `excerpt`
- `heroImage`

### Strongly recommended fields

- `slug`
- `modifiedDate`
- `articleSection`
- `keywords`
- `relatedServices`
- `relatedCities`

### Draft mode

If you want to keep a post hidden:

```md
draft: true
```

The loader ignores draft posts.

## 5. How to create a new blog post

Create a new file:

- `content/blog/{slug}.md`

Recommended slug rules:

- lowercase only
- use hyphens
- no spaces
- no dates in the slug unless you really need them

Good example:

- `how-to-choose-a-front-yard-fence.md`

Bad example:

- `My New Blog Post!!.md`

### Recommended process

1. Pick a slug
2. Upload the hero image into:
   - `public/client/blog/{slug}/hero.jpg`
3. Create:
   - `content/blog/{slug}.md`
4. Fill the frontmatter
5. Write the article body

### Recommended blog frontmatter template

```md
---
slug: your-post-slug
title: Your Post Title
date: 2026-04-12
modifiedDate: 2026-04-12
excerpt: One clear sentence that explains what the article helps the reader decide or understand.
heroImage: /client/blog/your-post-slug/hero.jpg
articleSection: Fence Planning
keywords:
  - primary keyword
  - secondary keyword
relatedServices:
  - vinyl-fence
relatedCities:
  - riverside-ca
---
Start with the real customer question.

Explain the decision clearly.

Use short sections with useful headings.

Keep the article practical, local-service relevant, and specific.
```

## 6. Image quality rules

Do not upload random images just because they fit the topic.

Prefer images that are:

- sharp
- well lit
- actually related to the page topic
- safe to crop in wide hero cards
- not already heavily reused elsewhere

Avoid images that are:

- blurry
- too dark
- tilted in a distracting way
- too zoomed in for hero use
- showing the wrong service type

## 7. Can you publish a new blog post with the GitHub API?

Yes.

This setup already supports that.

You do **not** need a CMS for basic automated blog publishing if your system can:

1. upload an image file to the repo
2. create a markdown file in `content/blog`
3. commit it to GitHub

### Minimum GitHub API flow

For each new post:

1. Upload image:
   - `public/client/blog/{slug}/hero.jpg`
2. Create markdown file:
   - `content/blog/{slug}.md`
3. Commit both files in the same commit

### Important conditions

Your API flow must guarantee:

- unique `slug`
- valid `heroImage` path
- valid `date`
- no missing required frontmatter
- image file really exists in the repo
- article body is not thin or junk

### Best practice for automation

Your automation should generate:

- `title`
- `slug`
- `date`
- `modifiedDate`
- `excerpt`
- `heroImage`
- `articleSection`
- `keywords`
- `relatedServices`
- `relatedCities`
- body content

If your automation skips those and only creates a title + body, the SEO output will still be weak.

## 8. Current SEO condition

Blunt version:

- The SEO baseline is now decent to strong for a local service site
- The blog system is structured well enough for automated publishing
- But the SEO quality still depends on the quality of each article

### What is already good

- blog listing page has structured blog schema
- blog post pages output `BlogPosting` schema
- blog post image is used in metadata and schema
- service and area pages have strong enough route structure
- sitemap and metadata system are already in place

### What can still hurt SEO

- thin AI posts
- repeated topics with slightly different wording
- weak excerpts
- wrong image-to-topic pairing
- publishing daily content that is low value just to increase volume

### Practical SEO judgment

Right now, the system is good enough for API-driven blog publishing **if**:

- each post is genuinely useful
- each post has a clear search intent
- each post has proper frontmatter
- each post has a relevant image

If the content becomes thin or repetitive, the system will still publish fine, but the SEO quality will fall.

## 9. Best next improvement

If you want this to be even easier later, the next improvement should be:

- a small script or API contract that validates blog frontmatter before commit

That would stop bad automated posts from entering the repo.
