import type { Config, Context } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

/**
 * Post comments — per-blog-post threads on Netlify Blobs.
 *
 * GET  /api/comments?slug=<post-slug>  → comments, newest first
 * POST /api/comments { slug, name, message, website? } → add a comment
 *
 * Same house rules as the guestbook: validated server-side, honeypot,
 * no-link rule. The slug is sanitized to a safe charset before use as a key.
 */

const STORE = 'comments';
const MAX_ENTRIES = 200;
const NAME_MAX = 40;
const MSG_MAX = 500;
const SLUG_MAX = 120;

interface CommentEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

function cleanSlug(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const slug = raw.trim().slice(0, SLUG_MAX);
  if (!slug || !/^[a-zA-Z0-9/_-]+$/.test(slug)) return null;
  return slug;
}

async function readComments(slug: string): Promise<CommentEntry[]> {
  const store = getStore(STORE);
  try {
    const raw = await store.get(`post/${slug}.json`, { type: 'text' });
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.log('comments: no existing entries or parse failed for', slug);
  }
  return [];
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: Request, _context: Context) {
  // GET: comments for a post, newest first
  if (req.method === 'GET') {
    const url = new URL(req.url);
    const slug = cleanSlug(url.searchParams.get('slug'));
    if (!slug) return json({ error: 'Missing or invalid slug.' }, 400);
    return json(await readComments(slug));
  }

  // POST: leave a comment
  if (req.method === 'POST') {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return json({ error: 'Invalid JSON.' }, 400);
    }

    // Honeypot — bots fill this, humans never see it
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      return json({ success: true });
    }

    const slug = cleanSlug(body.slug);
    if (!slug) return json({ error: 'Missing or invalid slug.' }, 400);

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name) return json({ error: 'A name is required.' }, 400);
    if (!message) return json({ error: 'A message is required.' }, 400);
    if (name.length > NAME_MAX) return json({ error: `Name must be ${NAME_MAX} characters or fewer.` }, 400);
    if (message.length > MSG_MAX) return json({ error: `Message must be ${MSG_MAX} characters or fewer.` }, 400);

    // Basic no-link rule — threads stay clean
    if (/https?:\/\//i.test(name) || /https?:\/\//i.test(message)) {
      return json({ error: 'No links in the comments, please.' }, 400);
    }

    const entry: CommentEntry = {
      id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.slice(0, NAME_MAX),
      message: message.slice(0, MSG_MAX),
      createdAt: new Date().toISOString(),
    };

    const store = getStore(STORE);
    const entries = await readComments(slug);
    entries.unshift(entry);
    await store.setJSON(`post/${slug}.json`, entries.slice(0, MAX_ENTRIES));

    return json({ success: true, entry });
  }

  return new Response('Method Not Allowed', { status: 405 });
}

export const config: Config = {
  path: '/api/comments',
};
