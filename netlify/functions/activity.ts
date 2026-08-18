import type { Config, Context } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

export default async function handler(req: Request, context: Context) {
  const store = getStore('activity_log');

  // GET: Fetch all dynamic activity events
  if (req.method === 'GET') {
    try {
      const existingStr = await store.get('events', { type: 'text' });
      if (existingStr) {
        return new Response(existingStr, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response('[]', {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response('[]', {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // POST: Create a new activity event
  if (req.method === 'POST') {
    // Check auth token
    const authHeader = req.headers.get('authorization');
    const expectedToken = `Bearer ${process.env.NOW_API_TOKEN}`;
    
    if (!process.env.NOW_API_TOKEN || authHeader !== expectedToken) {
      return new Response('Unauthorized', { status: 401 });
    }

    try {
      const body = await req.json();
      
      // We expect the terminal to send the current NowState to log
      // But just to be safe, we'll format it on the server
      const { building, trading, working_on, mood, location } = body;
      
      // Create the new event
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().substring(0, 5);
      
      // Build a summary from the state
      const summaryParts = [];
      if (building) summaryParts.push(`Building: ${building}`);
      if (trading) summaryParts.push(`Trading: ${trading}`);
      if (mood) summaryParts.push(`Mood: ${mood}`);
      if (location) summaryParts.push(`Location: ${location}`);
      
      const newEvent = {
        id: `log-${now.getTime()}`,
        date: dateStr,
        time: timeStr,
        type: 'thought',
        title: working_on || 'System State Snapshot',
        summary: summaryParts.join(' | '),
        tags: ['snapshot'],
        status: 'published'
      };

      // Get existing events
      let events = [];
      try {
        const existingStr = await store.get('events', { type: 'text' });
        if (existingStr) {
          events = JSON.parse(existingStr);
        }
      } catch (e) {
        console.log('No existing events or failed to parse');
      }

      // Prepend the new event
      events.unshift(newEvent);

      // Save back to blob store
      await store.setJSON('events', events);

      return new Response(JSON.stringify({ success: true, event: newEvent }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}

export const config: Config = {
  path: '/api/activity'
};
