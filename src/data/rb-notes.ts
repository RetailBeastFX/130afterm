/**
 * RB's corner — signed notes from the room.
 *
 * Append a new entry to add a note to the homepage. Keep it short,
 * warm, and in RB's voice: the room's host, not a press release.
 *
 *   {
 *     id: '2026-10-05-welcome-back',
 *     date: '2026-10-05',
 *     title: 'A short headline',
 *     body: 'Two or three warm sentences.',
 *   },
 *
 * Newest note is featured. Everything else stacks underneath.
 * Muse drafts notes; Bo approves them before they go live here.
 */

export interface RbNote {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  body: string;
}

export const rbNotes: RbNote[] = [
  {
    id: '2026-10-01-first-night',
    date: '2026-10-01',
    title: 'First night in the new room',
    body: 'Redid the whole spot. Same 130 AM soul — just warmer, like a room you actually want to sit in. Guestbook\'s real now, so sign the wall before you head out. Glad you stopped by.',
  },
  {
    id: '2026-10-02-late-note',
    date: '2026-10-02',
    title: '10.02.26 // 1:17 AM',
    body: 'Been messing with the site again. Quote wall, top 8, the rant room — it\'s starting to feel like an actual corner of the internet instead of a brochure. I think I\'m finally getting it where I want it.',
  },
];

/** Newest note first. */
export const latestNote = (): RbNote | undefined => rbNotes[0];

/** Everything after the newest. */
export const olderNotes = (): RbNote[] => rbNotes.slice(1);
