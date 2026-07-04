// ─── NOW Block ───────────────────────────────────────────────────────────────
// Update this manually to reflect current focus and activity.
// This is what makes the site feel alive between visits.

export interface NowState {
  session: string;
  focus: string;
  studying: string;
  system: string;
  playing?: string;
  updated: string; // ISO date string
}

export const NOW: NowState = {
  session: "NY / After Hours",
  focus: "XAUUSD structure + SPY 0DTE setups",
  studying: "ICT PD Arrays — Fair Value Gaps",
  system: "RetailBeastFX v6 — SMC + Execution Engine",
  playing: "late night charts",
  updated: "2026-07-03",
};
