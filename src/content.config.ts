import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Blog collection — markdown posts from the content kit (Docs/*.md → here).
 * Maps 1:1 to the Directus `posts` collection. The id (URL slug) comes from
 * each file's name. GUARDRAIL §6.3: posts with `draft: true` (the parked
 * NFPA-96 hood-cleaning post) are NEVER published — filtered out of the index
 * AND getStaticPaths, so no live page is generated.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('NewGen HVAC'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    targetKeyword: z.string().optional(),
    relatedService: z.string().nullable().optional(),
    lang: z.string().default('en'),
    draft: z.boolean().default(false),
    // `slug` exists in the kit frontmatter but the id is derived from the
    // filename; keep it optional so validation passes.
    slug: z.string().optional(),
  }),
});

export const collections = { blog };
