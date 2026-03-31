# Blog CMS

Add each blog post as one markdown file in this folder.

Required frontmatter:

```md
---
slug: your-post-slug
title: Your Post Title
date: 2026-03-31
excerpt: One short summary sentence for cards and SEO.
heroImage: /client/your-image.webp
---
```

Notes:
- `slug` becomes the URL at `/blog/{slug}`
- `date` should use `YYYY-MM-DD`
- `excerpt` should stay short
- `heroImage` should point to an existing image in `public/client`
- files starting with `_` are ignored by the site
