import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** URL slug for a blog post, derived from its content id. */
export const postSlug = (post: BlogPost): string =>
  post.id.replace(/\.mdx?$/, '');

/** Newest first, drafts already filtered by callers. */
export const sortNewest = (a: BlogPost, b: BlogPost): number =>
  b.data.date.getTime() - a.data.date.getTime();

/** Rough reading time in minutes (200 wpm), minimum 1. */
export const readingTime = (post: BlogPost): number =>
  Math.max(1, Math.ceil(post.body.split(/\s+/).length / 200));
