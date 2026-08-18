import type { ActivityEvent, ActivityType } from '../types/activity';

/**
 * Single source of truth for public 130AfterM activity.
 *
 * Keep events intentionally small. Rich entries can later move into
 * content collections without changing the UI contract.
 */
export const activity: ActivityEvent[] = [
  {
    id: 'rbfx-v7-deploy',
    date: '2026-08-17',
    time: '01:30',
    type: 'build',
    title: 'Deployed RetailBeastFX v7',
    summary: 'Operator HUD live. ORB Momentum Engine + 9/21 EMA filtering active.',
    tags: ['RBFX', 'build', 'trading'],
    featured: true,
    status: 'published',
  },
  {
    id: '130-site-refactor',
    date: '2026-08-17',
    time: '00:15',
    type: 'project',
    title: 'Refactoring 130AfterM to unified activity model',
    summary: 'Migrating from static HTML to a live data-driven architecture.',
    tags: ['130AfterM', 'architecture'],
    href: '/archive',
    status: 'published',
  },
  {
    id: '130-after-hours',
    date: '2026-08-16',
    type: 'life',
    title: 'After hours.',
    summary: 'Building. Trading. Living.',
    tags: ['130AfterM'],
    href: '/now',
    featured: true,
    status: 'published',
  },
  {
    id: 'spy-orb-session',
    date: '2026-08-15',
    type: 'trade',
    title: 'SPY 0DTE — ORB breakout session',
    summary: 'Clean displacement above range. Momentum confirmed. Managed to R3.',
    tags: ['SPY', 'options', 'ORB'],
    status: 'published',
  },
  {
    id: 'xauusd-fvg-setup',
    date: '2026-08-14',
    type: 'trade',
    title: 'XAUUSD — FVG reclaim + BOS confirmation',
    summary: 'ICT model. Asia range sweep, London FVG fill, NY continuation.',
    tags: ['XAUUSD', 'ICT', 'forex'],
    status: 'published',
  },
];

// ── Query helpers ──────────────────────────────────────────────────────────

/** Returns all activity sorted by date desc (most recent first). */
export const sortedActivity = () =>
  [...activity].sort((a, b) => b.date.localeCompare(a.date));

/** Returns the N most recent events, optionally filtered by type(s). */
export const latestActivity = (
  limit = 6,
  types?: ActivityType[]
): ActivityEvent[] => {
  let result = sortedActivity();
  if (types?.length) result = result.filter(e => types.includes(e.type));
  return result.slice(0, limit);
};

/** Returns only featured events, most recent first. */
export const featuredActivity = (limit = 3): ActivityEvent[] =>
  sortedActivity()
    .filter(e => e.featured)
    .slice(0, limit);
