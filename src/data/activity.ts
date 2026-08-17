import type { ActivityEvent } from '../types/activity';

/**
 * Single source of truth for public 130AfterM activity.
 *
 * Keep events intentionally small. Rich entries can later move into
 * content collections without changing the UI contract.
 */
export const activity: ActivityEvent[] = [
  {
    id: '130-after-hours',
    date: '2026-08-17',
    type: 'life',
    title: 'After hours.',
    summary: 'Building. Trading. Living.',
    tags: ['130AfterM'],
    href: '/now',
    featured: true,
    status: 'published',
  },
];

export const latestActivity = (limit = 6) =>
  [...activity]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
