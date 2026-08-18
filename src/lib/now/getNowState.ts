import type { NowState } from '../../types/now';
import { baseNowState } from '../../data/now';

/**
 * getNowState — fetches the current persisted NowState from /api/now.
 *
 * Returns the persisted fields merged on top of `baseNowState`.
 * If the API is unavailable, falls back cleanly to `baseNowState`.
 *
 * Architecture:
 *   baseNowState  (src/data/now.ts)     → default/static values
 *   /api/now      (netlify/functions)   → persisted overrides
 *   Lanyard       (external API)        → live presence (NOT in NowState persistence)
 *
 * This function handles the merge of the first two layers only.
 * Lanyard augmentation happens separately at runtime in the browser.
 *
 * Usage (client-side):
 *   import { getNowState } from '../lib/now/getNowState';
 *   const state = await getNowState();
 *
 * Usage (Astro SSR, if adapter added):
 *   const state = await getNowState('/api/now');
 */
export async function getNowState(apiUrl = '/api/now'): Promise<NowState> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) return baseNowState;
    const persisted = await res.json();
    // Merge persisted overrides on top of the static base
    return { ...baseNowState, ...persisted } as NowState;
  } catch {
    return baseNowState;
  }
}
