/**
 * Bo's Top 8 — genuinely personal, MySpace-style.
 *
 * Not a productivity dashboard. Artist, game, show, website, app, idea,
 * trading tool, random obsession — whatever's current. Change them whenever.
 * Placeholders are marked; replace with the real picks whenever he's ready.
 */

export interface Top8Entry {
  slot: string;
  icon: string;
  pick: string;
  /** Optional margin note. */
  note?: string;
  /** True while this is a placeholder waiting for a real pick. */
  placeholder?: boolean;
}

export const top8: Top8Entry[] = [
  { slot: 'artist', icon: '🎵', pick: '—', note: 'on repeat lately', placeholder: true },
  { slot: 'game', icon: '🎮', pick: '—', note: 'when the charts are quiet', placeholder: true },
  { slot: 'show', icon: '📺', pick: '—', note: 'current watch', placeholder: true },
  { slot: 'website', icon: '🌐', pick: '—', note: 'lives in my tabs', placeholder: true },
  { slot: 'app', icon: '📱', pick: '—', note: 'actually gets opened', placeholder: true },
  { slot: 'idea', icon: '🧠', pick: '—', note: 'stuck in my head', placeholder: true },
  { slot: 'trading tool', icon: '📈', pick: 'RetailBeastFX', note: 'obviously.' },
  { slot: 'random obsession', icon: '🍿', pick: '—', note: 'changes weekly', placeholder: true },
];
