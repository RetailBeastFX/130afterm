import type { ActivityEvent, ActivityType } from '../types/activity';

/**
 * Single source of truth for public 130AfterM activity.
 *
 * Keep events intentionally small. Rich entries can later move into
 * content collections without changing the UI contract.
 */
export const activity: ActivityEvent[] = [
  // ── Oct 2026 ──────────────────────────────────────────────────────────
  {
    id: 'wealth-os-v12',
    date: '2026-10-01',
    time: '21:30',
    type: 'build',
    title: 'Wealth-OS V1.2 tagged — Live Holdings + Encrypted Backup',
    summary: 'Live holdings ingestion wired in, AES-256-GCM encrypted backup/restore shipped. 251 tests green.',
    tags: ['Wealth-OS', 'build'],
    featured: true,
    status: 'published',
  },
  {
    id: 'wealth-os-v11',
    date: '2026-10-01',
    time: '18:00',
    type: 'build',
    title: 'Wealth-OS V1.1 sealed — Rules & Auto-Categorization Engine',
    summary: 'Order-aware rule center with priority reorder, live simulation, and re-run on pending items.',
    tags: ['Wealth-OS', 'build'],
    status: 'published',
  },
  {
    id: 'wealth-os-review',
    date: '2026-10-01',
    time: '14:00',
    type: 'build',
    title: 'Full Wealth-OS codebase review — all findings fixed',
    summary: '2 criticals + 7 importants reviewed, fixed on branch, merged to main. Backlog closed.',
    tags: ['Wealth-OS', 'review'],
    status: 'published',
  },
  {
    id: 'roblox-repo',
    date: '2026-10-01',
    time: '12:00',
    type: 'build',
    title: 'Roblox economy-sim repo created',
    summary: 'New playground: Luau/Rojo setup, gaming + world-building lane for 130AM Studios.',
    tags: ['Roblox', 'gaming', 'build'],
    status: 'published',
  },
  {
    id: 'two-brand-framework',
    date: '2026-10-01',
    time: '10:00',
    type: 'thought',
    title: 'Two brands, one person',
    summary: 'RetailBeastFX teaches the mechanics. 130AM Studios documents the person. This site is the 130AM home.',
    tags: ['strategy', '130AM'],
    featured: true,
    status: 'published',
  },
  {
    id: 'rbfx-curriculum',
    date: '2026-09-30',
    time: '22:00',
    type: 'project',
    title: '64-video RetailBeastFX curriculum drafted',
    summary: 'Six phases from market basics to strategies. RB mascot video pipeline approved.',
    tags: ['RetailBeastFX', 'content'],
    status: 'published',
  },
  // ── Aug 2026 ──────────────────────────────────────────────────────────
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
