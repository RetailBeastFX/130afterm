/**
 * Favorite quotes — the wall.
 *
 * Bo's own lines and the ones he lives by. Add a new entry to pin another
 * quote to the wall. Placeholders are marked — replace them with the real
 * favorites whenever he's ready.
 */

export interface Quote {
  text: string;
  author: string;
  /** Optional margin note in Bo's voice. */
  note?: string;
  /** True while this is a placeholder waiting for a real favorite. */
  placeholder?: boolean;
}

export const quotes: Quote[] = [
  {
    text: '1:30 after midnight. The hour noise stops and real work starts.',
    author: 'the room itself',
    note: 'the whole site is built on this sentence.',
  },
  {
    text: 'Your favorite quote goes here.',
    author: '—',
    note: 'send them over and the wall fills up.',
    placeholder: true,
  },
  {
    text: 'Another one lives here.',
    author: '—',
    note: 'trading, life, whatever stuck with you.',
    placeholder: true,
  },
];
