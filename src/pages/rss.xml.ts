import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { postSlug, sortNewest } from '../lib/blog';

// RSS feed for the rant room. Hand-rolled — no extra dependencies.
const SITE = 'https://130afterm.netlify.app';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(sortNewest);

  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${postSlug(p)}/`;
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>130 AM // the rant room</title>
    <link>${SITE}/blog/</link>
    <description>Bo's personal blog — thoughts, rants, and whatever's on his mind.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
