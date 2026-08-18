/**
 * NowState — ephemeral, real-time representation of what Bo is doing right now.
 *
 * This is NOT ActivityEvent. These are two parallel systems:
 *
 *   ActivityEvent = historical, durable, worth remembering
 *   NowState      = ephemeral, current moment, will change
 *
 * NowState is consumed by:
 *   - /now page (primary display)
 *   - Terminal (status sidebar, future)
 *   - Navbar presence badge (future)
 *
 * NowState does NOT automatically generate ActivityEvents.
 * If a future "Log this" action is desired, it should be an
 * explicit user-triggered action that creates an ActivityEvent
 * from a NowState snapshot.
 */

export type OnlineStatus = 'online' | 'idle' | 'dnd' | 'offline';

export interface SpotifyState {
  song: string;
  artist: string;
  album?: string;
  albumArtUrl?: string;
  trackId?: string;
}

/**
 * The core NowState shape.
 *
 * All fields are optional except `status` and `updatedAt`.
 * Fields are populated either statically (from now.ts) or
 * dynamically (from the Lanyard integration at runtime).
 *
 * Future Lanyard integration point:
 *   See src/data/now.ts for the mapping stub.
 *   The Lanyard response should be mapped via:
 *   `mapLanyardToNowState(lanyardData): Partial<NowState>`
 *   and merged on top of baseNowState at runtime.
 */
export interface NowState {
  // --- Core status ---
  status: OnlineStatus;

  // --- What I am doing ---
  building?: string;    // e.g. "RetailBeastFX v7", "130AfterM refactor"
  trading?: string;     // e.g. "Watching SPY", "XAUUSD session open"
  working_on?: string;  // higher-level context, e.g. "130AfterM architecture"
  mood?: string;        // e.g. "Locked in", "After hours"
  location?: string;    // e.g. "After Hours", "Market Hours"

  // --- Live presence (Lanyard-augmented at runtime) ---
  playing?: string;            // Current game being played
  listening?: SpotifyState;    // Spotify track (mapped from Lanyard)
  watching?: string;           // Stream / video being watched

  // --- Metadata ---
  updatedAt: string;           // ISO 8601 — last manual or auto-update

  /**
   * FUTURE: Custom status message from Discord custom status activity.
   * Lanyard exposes this as activities[].type === 4.
   */
  customStatus?: string;
}
