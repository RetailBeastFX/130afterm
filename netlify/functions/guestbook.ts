import type { Config, Context } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

const STORE = 'guestbook';
const KEY = 'entries';
const MAX_ENTRIES = 200;
const NAME_MAX = 40;
const MSG_MAX = 280;

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

async function readEntries(): Promise<GuestbookEntry[]> {
  const store = getStore(STORE);
  try {
    const raw = await store.get(KEY, { type: 'text' });
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.log('guestbook: no existing entries or parse failed');
  }
  return [];
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: Request, context: Context) {
  // GET: public wall, newest first
  if (req.method === 'GET') {
    const entries = await readEntries();
    return json(entries);
  }

  // POST: sign the wall
  if (req.method === 'POST') {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return json({ error: 'Invalid JSON.' }, 400);
    }

    // Honeypot — bots fill this, humans never see it
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      // Pretend success so bots move on
      return json({ success: true });
    }

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name) return json({ error: 'A name is required.' }, 400);
    if (!message) return json({ error: 'A message is required.' }, 400);
    if (name.length > NAME_MAX) return json({ error: `Name must be ${NAME_MAX} characters or fewer.` }, 400);
    if (message.length > MSG_MAX) return json({ error: `Message must be ${MSG_MAX} characters or fewer.` }, 400);

    // Basic no-link rule — walls stay clean
    if (/https?:\/\//i.test(name) || /https?:\/\//i.test(message)) {
      return json({ error: 'No links on the wall, please.' }, 400);
    }

    const entry: GuestbookEntry = {
      id: `gb-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.slice(0, NAME_MAX),
      message: message.slice(0, MSG_MAX),
      createdAt: new Date().toISOString(),
    };

    const store = getStore(STORE);
    const entries = await readEntries();
    entries.unshift(entry);
    await store.setJSON(KEY, entries.slice(0, MAX_ENTRIES));

    return json({ success: true, entry });
  }

  return new Response('Method Not Allowed', { status: 405 });
}

export const config: Config = {
  path: '/api/guestbook',
};
