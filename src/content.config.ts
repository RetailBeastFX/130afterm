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

// The Trading Lab — public research journal for Bo's trading development.
// Evolving notes, not posts: each note carries a research status and gets
// updated as evidence accumulates. Never a conclusion, never a signal.
const lab = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    /** Research note number, shown as 001, 002… */
    number: z.number().int().positive(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    status: z
      .enum(['observation', 'hypothesis', 'testing', 'validated'])
      .default('observation'),
    instruments: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, lab };
