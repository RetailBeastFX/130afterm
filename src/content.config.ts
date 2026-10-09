import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The rant room — Bo's personal blog. Thoughts, rants, whatever's on his mind.
// New post = new markdown file in src/content/blog/. Drafts are excluded
// from the index, post pages, and RSS until `draft` is removed or false.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Shelf the post lives on: Life, Relationships, Money, Trading, Mindset, Society. */
    category: z.string().default('Life'),
    /** One line pulled from the post, shown highlighted on cards. */
    highlight: z.string().optional(),
  }),
});

export const collections = { blog };
