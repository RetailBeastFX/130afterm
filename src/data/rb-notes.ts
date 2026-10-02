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
];

/** Newest note first. */
export const latestNote = (): RbNote | undefined => rbNotes[0];

/** Everything after the newest. */
export const olderNotes = (): RbNote[] => rbNotes.slice(1);
