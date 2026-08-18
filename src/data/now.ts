import type { NowState } from '../types/now';

/**
 * Static base NowState.
 *
 * This is the server-side default. At runtime, the Lanyard integration
 * merges live data on top of this shape client-side.
 *
 * ─── Architecture note ──────────────────────────────────────────────────────
 *
 * NowState is a PARALLEL system to ActivityEvent. It is NOT the same thing.
 *
 *   ActivityEvent = historical log (activity.ts)
 *   NowState      = current snapshot (this file)
 *
 * The /now page reads from this file as its static baseline.
 * The Lanyard WebSocket/REST response augments it client-side.
 * The /api/now Netlify function stores the manually-updated fields.
 *
 * ─── Future Lanyard integration point ───────────────────────────────────────
 *
 * When ready, create `src/lib/lanyard.ts` with:
 *
 *   import type { NowState } from '../types/now';
 *
 *   export async function fetchLanyardState(
 *     discordUserId: string
 *   ): Promise<Partial<NowState>> {
 *     const res = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
 *     const { data } = await res.json();
 *
 *     return {
 *       status: data.discord_status,
 *       playing: data.activities?.find(a => a.type === 0)?.name,
 *       listening: data.listening_to_spotify && data.spotify
 *         ? {
 *             song: data.spotify.song,
 *             artist: data.spotify.artist,
 *             albumArtUrl: data.spotify.album_art_url,
 *             trackId: data.spotify.track_id,
 *           }
 *         : undefined,
 *       customStatus: data.activities?.find(a => a.type === 4)?.state,
 *     };
 *   }
 *
 * Then in now.astro (if using SSR) or client-side JS:
 *   const liveState = await fetchLanyardState(DISCORD_ID);
 *   const state = { ...baseNowState, ...liveState };
 *
 * ────────────────────────────────────────────────────────────────────────────
 */
export const baseNowState: NowState = {
  status: 'online',
  building: '130AfterM — Architecture refactor',
  trading: 'Watching SPY + XAUUSD',
  working_on: 'Unified activity data layer',
  mood: 'After hours. Locked in.',
  location: 'After Hours',
  updatedAt: '2026-08-17T00:00:00-04:00',
};

/**
 * Row configuration for the Now page display.
 *
 * Each entry defines how a NowState field is presented.
 * The `key` is the field name in NowState, `label` is the display label.
 *
 * Reorder here to change the display order on /now.
 */
export const NOW_ROWS: Array<{
  key: keyof NowState;
  label: string;
  icon: string;
}> = [
  { key: 'trading',    label: 'TRADING',    icon: '📈' },
  { key: 'building',   label: 'BUILDING',   icon: '🛠' },
  { key: 'playing',    label: 'PLAYING',    icon: '🎮' },
  { key: 'listening',  label: 'LISTENING',  icon: '🎧' },
  { key: 'working_on', label: 'WORKING ON', icon: '⚡' },
  { key: 'mood',       label: 'MOOD',       icon: '🔵' },
];
