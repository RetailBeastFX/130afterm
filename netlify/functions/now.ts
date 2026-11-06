import type { Config, Context } from '@netlify/functions';
import { getStore } from '@netlify/blobs';
import { baseNowState } from '../../src/data/now';

/**
 * Allowlist of fields that can be written via this API.
 *
 * Lanyard-derived fields (playing, listening, watching) are NOT writable here.
 * ActivityEvent data is never touched by this function.
 *
 * This mirrors EDITABLE_FIELDS in src/lib/now/updateNowState.ts.
 * Keep them in sync.
 */
const EDITABLE_FIELDS = new Set([
  'building',
  'trading',
  'working_on',
  'mood',
  'location',
]);

export default async function handler(req: Request, context: Context) {
  // Handle GET request to fetch current state.
  // Returns the static baseline merged with any stored overrides,
  // so clients (and Ask RB) always get a complete picture.
  // Blobs access is guarded: if the store is unreachable, the
  // baseline still answers instead of the whole function failing.
  if (req.method === 'GET') {
    let stored: Record<string, unknown> = {};
    try {
      const store = getStore('now_state');
      const existingStr = await store.get('current', { type: 'text' });
      if (existingStr) stored = JSON.parse(existingStr);
    } catch (e) {
      // Blobs unavailable — baseline stays
    }
    return new Response(JSON.stringify({ ...baseNowState, ...stored }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Only allow POST for updates
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Check auth token
  const authHeader = req.headers.get('authorization');
  const expectedToken = `Bearer ${process.env.NOW_API_TOKEN}`;
  
  if (!process.env.NOW_API_TOKEN || authHeader !== expectedToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body = await req.json();

    // Strip fields not in the allowlist — Lanyard fields, ActivityEvent data, etc.
    const filteredBody: Record<string, string> = {};
    for (const [key, val] of Object.entries(body)) {
      if (EDITABLE_FIELDS.has(key) && typeof val === 'string' && val.trim().length > 0 && val.length <= 120) {
        filteredBody[key] = val.trim();
      }
    }

    if (Object.keys(filteredBody).length === 0) {
      return new Response(JSON.stringify({ error: 'No valid fields to update.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the store
    const store = getStore('now_state');
    
    // Get existing data to merge
    let currentData = {};
    try {
      const existingStr = await store.get('current', { type: 'text' });
      if (existingStr) {
        currentData = JSON.parse(existingStr);
      }
    } catch (e) {
      console.log('No existing data or failed to parse');
    }

    // Merge in validated data only
    const updatedData = {
      ...currentData,
      ...filteredBody,
      updated: new Date().toISOString()
    };

    // Save back to blob store
    await store.setJSON('current', updatedData);

    return new Response(JSON.stringify({ success: true, data: updatedData }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const config: Config = {
  path: '/api/now'
};
