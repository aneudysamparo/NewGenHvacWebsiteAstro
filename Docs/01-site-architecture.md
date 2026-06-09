# Site Architecture — NewGen HVAC (Astro + Directus)

## Stack
- **Astro** — static/SSG front end, content collections, great Core Web Vitals (SEO win).
- **Directus** (headless CMS on your Dokploy) — content source. Astro pulls from the Directus
  REST/GraphQL API at build time (and can rebuild on a webhook when you edit content).
- **Bilingual** via Astro i18n routing + Directus native Translations.

## URL structure (clean, SEO-friendly)
```
/                                   Home
/about
/services                          Services index
/services/commercial-hvac
/services/residential-hvac
/services/commercial-refrigeration
/services/commercial-kitchen-equipment
/comfort-plan                       (membership — top-level, not under /services, it's a product)
/service-areas
/service-areas/[town-state]         e.g. /service-areas/methuen-ma
/blog
/blog/[slug]
/contact
```
**Spanish mirror** (recommended): `/es/`, `/es/servicios/...`, etc., with `hreflang` tags
linking each EN page to its ES twin. Spanish content generated as a follow-up step.

## Navigation
- **Header:** Logo · Services (dropdown: the 4 services) · Comfort Plan · Service Areas · Blog ·
  About · **[Book / Free Estimate]** (primary button) · **(978) 876-8558** (tap-to-call) · EN/ES toggle
- **Footer:** NAP, hours, 24/7 emergency line, service links, service-area links, social, legal.

## SEO strategy (the point of the rebuild)
- One clear **H1 per page**, target keyword in title + meta description + first paragraph.
- **LocalBusiness / HVACBusiness schema** (JSON-LD) on every page using the NAP from globals;
  **FAQPage schema** on service pages (the FAQs are already structured for this).
- Each **service-area page must be unique** — real local copy, not a town name swapped into a
  template. Thin duplicate pages are what dragged the old site; quality over quantity.
- Fast by default (Astro ships almost no JS). Compress hero images, use Astro `<Image>`.
- Internal links: every service page links to the Comfort Plan and to relevant blog posts;
  blog posts link back to their service. (Cross-links already written into the content.)
- Real **Google reviews** feed the testimonials block (see `testimonials.md`) — never placeholders.

## Conversion (the other point)
- Above-the-fold on every page: phone (tap-to-call), a Book/Free-Estimate CTA, and the
  bilingual + refrigeration + local trust signals.
- Sticky mobile call button. Lead form posts to Jobber (and/or GoHighLevel) — wire in build.

---

## Suggested Directus collections (maps 1:1 to this content kit)
> Field names are a starting point; adjust to taste. Use Directus **Translations** for ES.

**`globals`** (singleton) — `business_name`, `legal_name`, `phone`, `email`, `address`,
`hours`, `tagline`, `emergency_note`, `social_links[]`, `founded_year`.

**`pages`** (singleton-style or by slug) — `slug`, `title`, `meta_description`, `og_image`,
`hero_heading`, `hero_subheading`, `body` (rich text / blocks). Used for Home, About, Contact,
Services index.

**`services`** — `slug`, `title`, `order`, `icon`, `meta_description`, `hero_heading`,
`intro`, `secondary_heading`, `secondary_intro`, `features[]` (list),
`faqs[]` (question/answer), `related_posts[]` (M2M → posts). One row per service.

**`comfort_plan`** (singleton) — tiers (`name`, `annual`, `monthly`, `tuneups`),
`addon_annual`, `addon_monthly`, `benefits[]`, `system_count_rule`, `tagline`, `meta_description`.
(Pricing is frozen — edit only when Pricing Structure v2.0 changes.)

**`posts`** — `slug`, `title`, `excerpt`, `body`, `hero_image`, `published_date`, `author`,
`tags[]`, `meta_description`, `target_keyword`, `related_service` (M2O → services).

**`service_areas`** — `slug`, `town`, `state`, `intro`, `body`, `meta_description`,
`nearby_areas[]`. One row per town (start from the pruned list in business-facts).

**`testimonials`** — `name`, `role`, `quote`, `rating`, `source` (e.g. "Google"), `date`,
`featured` (bool). Populate from real Google reviews only.

## Build order (for the Claude Code phase)
1. Stand up Directus on Dokploy, create the collections above.
2. Seed Directus from this content kit (the markdown files map field-for-field).
3. Scaffold the Astro site (layouts, i18n routing, schema components, Directus fetch).
4. Wire the design from the Stitch output onto the Astro components.
5. Connect lead form → Jobber/GoHighLevel; add JSON-LD; submit sitemap to Search Console.
