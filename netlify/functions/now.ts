import type { Config, Context } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

export default async function handler(req: Request, context: Context) {
  // Get the store
  const store = getStore('now_state');

  // Handle GET request to fetch current state
  if (req.method === 'GET') {
    try {
      const existingStr = await store.get('current', { type: 'text' });
      if (existingStr) {
        return new Response(existingStr, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response('{}', {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response('{}', {
        headers: { 'Content-Type': 'application/json' }
      });
    }
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

    // Merge in new data
    const updatedData = {
      ...currentData,
      ...body,
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
