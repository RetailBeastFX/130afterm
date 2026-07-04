export type TradeOutcome = "win" | "loss" | "breakeven";
export type TradeInstrument = "SPY" | "XAUUSD" | "IWM" | "SOFI" | "AAL" | "MARA" | "NVDA";
export type TradeSession = "NY" | "London" | "Asian" | "Pre-Market";

export interface TradeEntry {
  id: string;
  date: string;        // YYYY-MM-DD
  instrument: string;
  type: string;
  session: TradeSession;
  entry: number;       // price per share/contract
  exit: number;
  contracts: number;
  outcome: TradeOutcome;
  pnl: number;         // in dollars
  note: string;
  tags: string[];
}

// ─── Real trades from Webull export ──────────────────────────────
// Each entry represents a completed round-trip (buy → sell).
// Prices are per-share; multiply by 100 for actual P&L per contract.

export const TRADES: TradeEntry[] = [
  {
    "id": "2026-07-02-spy-c-01",
    "date": "2026-07-02",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 1.65,
    "exit": 2.17,
    "contracts": 1,
    "outcome": "win",
    "pnl": 52,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-07-01-spy-c-02",
    "date": "2026-07-01",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 1.05,
    "exit": 1.54,
    "contracts": 1,
    "outcome": "win",
    "pnl": 49,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-07-01-spy-c-03",
    "date": "2026-07-01",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 1.1,
    "exit": 1.14,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-30-spy-c-04",
    "date": "2026-06-30",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.66,
    "exit": 0.79,
    "contracts": 2,
    "outcome": "win",
    "pnl": 28,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-30-spy-c-05",
    "date": "2026-06-30",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.64,
    "exit": 0.67,
    "contracts": 2,
    "outcome": "win",
    "pnl": 6,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-29-spy-c-06",
    "date": "2026-06-29",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.51,
    "exit": 0.84,
    "contracts": 1,
    "outcome": "win",
    "pnl": 33,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-26-spy-c-07",
    "date": "2026-06-26",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.32,
    "exit": 0.53,
    "contracts": 1,
    "outcome": "win",
    "pnl": 21,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-26-iwm-c-08",
    "date": "2026-06-26",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.19,
    "exit": 0.28,
    "contracts": 1,
    "outcome": "win",
    "pnl": 9,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-26-iwm-c-09",
    "date": "2026-06-26",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.32,
    "exit": 0.29,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -3,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-25-iwm-p-10",
    "date": "2026-06-25",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.2,
    "exit": 0.32,
    "contracts": 1,
    "outcome": "win",
    "pnl": 12,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-25-sofi-p-11",
    "date": "2026-06-25",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.11,
    "exit": 0.16,
    "contracts": 1,
    "outcome": "win",
    "pnl": 5,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-24-sofi-p-12",
    "date": "2026-06-24",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.08,
    "exit": 0.09,
    "contracts": 1,
    "outcome": "win",
    "pnl": 1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-24-sofi-c-13",
    "date": "2026-06-24",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.14,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-24-sofi-p-14",
    "date": "2026-06-24",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.08,
    "exit": 0.06,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -4,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-24-iwm-c-15",
    "date": "2026-06-24",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.26,
    "exit": 0.19,
    "contracts": 3,
    "outcome": "loss",
    "pnl": -20,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-23-iwm-c-16",
    "date": "2026-06-23",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.28,
    "exit": 0.33,
    "contracts": 1,
    "outcome": "win",
    "pnl": 5,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-23-sofi-c-17",
    "date": "2026-06-23",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.24,
    "exit": 0.28,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-22-sofi-c-18",
    "date": "2026-06-22",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.21,
    "contracts": 2,
    "outcome": "win",
    "pnl": 7,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-22-sofi-p-19",
    "date": "2026-06-22",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.17,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-18-sofi-c-20",
    "date": "2026-06-18",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.19,
    "exit": 0.21,
    "contracts": 1,
    "outcome": "win",
    "pnl": 2,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-18-sofi-c-21",
    "date": "2026-06-18",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.05,
    "exit": 0.07,
    "contracts": 3,
    "outcome": "win",
    "pnl": 6,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-18-sofi-p-22",
    "date": "2026-06-18",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.08,
    "contracts": 2,
    "outcome": "breakeven",
    "pnl": 0,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "breakeven"
    ]
  },
  {
    "id": "2026-06-18-sofi-c-23",
    "date": "2026-06-18",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.06,
    "exit": 0.03,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -3,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-17-sofi-c-24",
    "date": "2026-06-17",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.08,
    "exit": 0.11,
    "contracts": 1,
    "outcome": "win",
    "pnl": 3,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-16-iwm-p-25",
    "date": "2026-06-16",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.07,
    "exit": 0.14,
    "contracts": 1,
    "outcome": "win",
    "pnl": 7,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-16-iwm-c-26",
    "date": "2026-06-16",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.27,
    "exit": 0.15,
    "contracts": 3,
    "outcome": "loss",
    "pnl": -35,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-16-sofi-c-27",
    "date": "2026-06-16",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.09,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-16-iwm-p-28",
    "date": "2026-06-16",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.13,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -10,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-15-iwm-p-29",
    "date": "2026-06-15",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.24,
    "contracts": 1,
    "outcome": "win",
    "pnl": 6,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-15-iwm-c-30",
    "date": "2026-06-15",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.28,
    "exit": 0.06,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -22,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-12-iwm-c-31",
    "date": "2026-06-12",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.72,
    "exit": 0.63,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -20,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-11-iwm-c-32",
    "date": "2026-06-11",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.45,
    "exit": 0.59,
    "contracts": 2,
    "outcome": "win",
    "pnl": 28,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-10-sofi-p-33",
    "date": "2026-06-10",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.44,
    "exit": 0.46,
    "contracts": 2,
    "outcome": "win",
    "pnl": 5,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-10-sofi-c-34",
    "date": "2026-06-10",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.4,
    "exit": 0.35,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -9,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-10-mara-p-35",
    "date": "2026-06-10",
    "instrument": "MARA",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.46,
    "exit": 0.43,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -3,
    "note": "Parsed from Webull export.",
    "tags": [
      "MARA",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-10-sofi-c-36",
    "date": "2026-06-10",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.25,
    "exit": 0.33,
    "contracts": 1,
    "outcome": "win",
    "pnl": 8,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-10-sofi-p-37",
    "date": "2026-06-10",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.09,
    "contracts": 1,
    "outcome": "breakeven",
    "pnl": 0,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "breakeven"
    ]
  },
  {
    "id": "2026-06-09-iwm-c-38",
    "date": "2026-06-09",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.21,
    "exit": 0.27,
    "contracts": 1,
    "outcome": "win",
    "pnl": 6,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-08-iwm-c-39",
    "date": "2026-06-08",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.14,
    "exit": 0.1,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -4,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-08-mara-c-40",
    "date": "2026-06-08",
    "instrument": "MARA",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.17,
    "exit": 0.15,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -2,
    "note": "Parsed from Webull export.",
    "tags": [
      "MARA",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-08-sofi-c-41",
    "date": "2026-06-08",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.09,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-08-iwm-p-42",
    "date": "2026-06-08",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.38,
    "exit": 0.31,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -7,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-05-iwm-c-43",
    "date": "2026-06-05",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.35,
    "exit": 0.25,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -10,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-04-iwm-c-44",
    "date": "2026-06-04",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.17,
    "exit": 0.28,
    "contracts": 1,
    "outcome": "win",
    "pnl": 11,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-03-iwm-c-45",
    "date": "2026-06-03",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.33,
    "exit": 0.24,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -9,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-06-02-iwm-c-46",
    "date": "2026-06-02",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.26,
    "exit": 0.45,
    "contracts": 1,
    "outcome": "win",
    "pnl": 19,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-06-01-sofi-c-47",
    "date": "2026-06-01",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.11,
    "exit": 0.15,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-29-sofi-c-48",
    "date": "2026-05-29",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.12,
    "exit": 0.22,
    "contracts": 1,
    "outcome": "win",
    "pnl": 10,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-28-sofi-c-49",
    "date": "2026-05-28",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.16,
    "contracts": 1,
    "outcome": "win",
    "pnl": 6,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-28-iwm-p-50",
    "date": "2026-05-28",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.06,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -3,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-28-iwm-c-51",
    "date": "2026-05-28",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.07,
    "exit": 0.05,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -2,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-27-iwm-c-52",
    "date": "2026-05-27",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.04,
    "exit": 0.01,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -3,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-27-iwm-c-53",
    "date": "2026-05-27",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.11,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -7,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-26-iwm-p-54",
    "date": "2026-05-26",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.11,
    "exit": 0.13,
    "contracts": 1,
    "outcome": "win",
    "pnl": 2,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-26-iwm-c-55",
    "date": "2026-05-26",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.24,
    "exit": 0.17,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -7,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-26-spy-c-56",
    "date": "2026-05-26",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.26,
    "exit": 0.26,
    "contracts": 1,
    "outcome": "breakeven",
    "pnl": 0,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "breakeven"
    ]
  },
  {
    "id": "2026-05-22-sofi-c-57",
    "date": "2026-05-22",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.09,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-22-nvda-p-58",
    "date": "2026-05-22",
    "instrument": "NVDA",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.15,
    "exit": 0.13,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -2,
    "note": "Parsed from Webull export.",
    "tags": [
      "NVDA",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-22-iwm-c-59",
    "date": "2026-05-22",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.13,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-21-iwm-c-60",
    "date": "2026-05-21",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.34,
    "exit": 0.08,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -26,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-20-mara-p-61",
    "date": "2026-05-20",
    "instrument": "MARA",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.05,
    "exit": 0.05,
    "contracts": 1,
    "outcome": "breakeven",
    "pnl": 0,
    "note": "Parsed from Webull export.",
    "tags": [
      "MARA",
      "0DTE",
      "breakeven"
    ]
  },
  {
    "id": "2026-05-20-iwm-p-62",
    "date": "2026-05-20",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.01,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -17,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-19-iwm-c-63",
    "date": "2026-05-19",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.12,
    "exit": 0.23,
    "contracts": 1,
    "outcome": "win",
    "pnl": 11,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-19-iwm-p-64",
    "date": "2026-05-19",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.33,
    "exit": 0.11,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -22,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-19-sofi-p-65",
    "date": "2026-05-19",
    "instrument": "SOFI",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.22,
    "exit": 0.28,
    "contracts": 2,
    "outcome": "win",
    "pnl": 11,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-19-sofi-c-66",
    "date": "2026-05-19",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.32,
    "exit": 0.3,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -2,
    "note": "Parsed from Webull export.",
    "tags": [
      "SOFI",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-18-aal-c-67",
    "date": "2026-05-18",
    "instrument": "AAL",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.23,
    "exit": 0.22,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "AAL",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-18-spy-c-68",
    "date": "2026-05-18",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 1.09,
    "exit": 0.08,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -101,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-05-15-spy-c-69",
    "date": "2026-05-15",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.77,
    "exit": 0.92,
    "contracts": 2,
    "outcome": "win",
    "pnl": 30,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-05-14-spy-c-70",
    "date": "2026-05-14",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.32,
    "exit": 0.56,
    "contracts": 1,
    "outcome": "win",
    "pnl": 24,
    "note": "748C. Clean structure play. Held into displacement, exited near session high.",
    "tags": [
      "SPY",
      "0DTE",
      "call",
      "structure"
    ]
  },
  {
    "id": "2026-05-13-spy-p-71",
    "date": "2026-05-13",
    "instrument": "SPY",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.36,
    "exit": 0.59,
    "contracts": 1,
    "outcome": "win",
    "pnl": 23,
    "note": "733P. Bearish open, took put off NY open. Quick execution, clean exit.",
    "tags": [
      "SPY",
      "0DTE",
      "put",
      "bearish",
      "NY"
    ]
  },
  {
    "id": "2026-05-12-spy-p-72",
    "date": "2026-05-12",
    "instrument": "SPY",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.42,
    "exit": 0.4,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -4,
    "note": "732P. Put on anticipating continuation lower. Market reversed. Cut fast.",
    "tags": [
      "SPY",
      "0DTE",
      "put",
      "loss",
      "early-exit"
    ]
  },
  {
    "id": "2026-05-12-spy-c-73",
    "date": "2026-05-12",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.44,
    "exit": 0.31,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -13,
    "note": "739C. Tried to catch reversal too early. Market kept pushing lower.",
    "tags": [
      "SPY",
      "0DTE",
      "call",
      "fade",
      "loss"
    ]
  },
  {
    "id": "2026-05-11-spy-c-74",
    "date": "2026-05-11",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.45,
    "exit": 0.55,
    "contracts": 3,
    "outcome": "win",
    "pnl": 29,
    "note": "740C. Clean BOS off NY open. Held for first target, exited at prior high.",
    "tags": [
      "SPY",
      "0DTE",
      "call",
      "BOS",
      "NY"
    ]
  },
  {
    "id": "2026-05-07-iwm-p-75",
    "date": "2026-05-07",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.18,
    "exit": 0.22,
    "contracts": 1,
    "outcome": "win",
    "pnl": 4,
    "note": "IWM 284P. Small scalp. Testing non-SPY instruments. Tight range, quick exit.",
    "tags": [
      "IWM",
      "put",
      "scalp",
      "experiment"
    ]
  },
  {
    "id": "2026-05-06-sofi-c-76",
    "date": "2026-05-06",
    "instrument": "SOFI",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.2,
    "exit": 0.15,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -5,
    "note": "SOFI 16.5C. Low-priced experiment. No clear structure, shouldn't have taken it.",
    "tags": [
      "SOFI",
      "call",
      "lesson",
      "no-setup"
    ]
  },
  {
    "id": "2026-05-05-aal-c-77",
    "date": "2026-05-05",
    "instrument": "AAL",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.23,
    "exit": 0.24,
    "contracts": 1,
    "outcome": "win",
    "pnl": 1,
    "note": "AAL 12C. Near scratch. Learning single-stock 0DTE. Need higher conviction setups.",
    "tags": [
      "AAL",
      "call",
      "learning",
      "scratch"
    ]
  },
  {
    "id": "2026-05-04-iwm-c-78",
    "date": "2026-05-04",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.13,
    "exit": 0.16,
    "contracts": 1,
    "outcome": "win",
    "pnl": 3,
    "note": "IWM 282C. Small win. Opened week with a clean structure entry.",
    "tags": [
      "IWM",
      "call",
      "structure"
    ]
  },
  {
    "id": "2026-02-05-aal-p-79",
    "date": "2026-02-05",
    "instrument": "AAL",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.02,
    "exit": 0.01,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "AAL",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-02-04-nvda-p-80",
    "date": "2026-02-04",
    "instrument": "NVDA",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.03,
    "exit": 0.03,
    "contracts": 1,
    "outcome": "breakeven",
    "pnl": 0,
    "note": "Parsed from Webull export.",
    "tags": [
      "NVDA",
      "0DTE",
      "breakeven"
    ]
  },
  {
    "id": "2026-02-03-iwm-c-81",
    "date": "2026-02-03",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.11,
    "exit": 0.07,
    "contracts": 2,
    "outcome": "loss",
    "pnl": -9,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-02-02-iwm-c-82",
    "date": "2026-02-02",
    "instrument": "IWM",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.02,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -7,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-02-02-iwm-p-83",
    "date": "2026-02-02",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.07,
    "exit": 0.05,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -2,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "loss"
    ]
  },
  {
    "id": "2026-01-30-iwm-p-84",
    "date": "2026-01-30",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.1,
    "exit": 0.2,
    "contracts": 1,
    "outcome": "win",
    "pnl": 10,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-01-29-iwm-p-85",
    "date": "2026-01-29",
    "instrument": "IWM",
    "type": "0DTE Put",
    "session": "NY",
    "entry": 0.09,
    "exit": 0.12,
    "contracts": 1,
    "outcome": "win",
    "pnl": 3,
    "note": "Parsed from Webull export.",
    "tags": [
      "IWM",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-01-27-spy-c-86",
    "date": "2026-01-27",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.04,
    "exit": 0.07,
    "contracts": 1,
    "outcome": "win",
    "pnl": 3,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "win"
    ]
  },
  {
    "id": "2026-01-26-spy-c-87",
    "date": "2026-01-26",
    "instrument": "SPY",
    "type": "0DTE Call",
    "session": "NY",
    "entry": 0.04,
    "exit": 0.03,
    "contracts": 1,
    "outcome": "loss",
    "pnl": -1,
    "note": "Parsed from Webull export.",
    "tags": [
      "SPY",
      "0DTE",
      "loss"
    ]
  }
];

// ─── Monthly summaries ───────────────────────────────────────────────────────

export interface MonthlySummary {
  month: string;
  totalTrades: number;
  wins: number;
  losses: number;
  breakevens: number;
  totalPnl: number;
  keyLesson: string;
}

export const MONTHLY_SUMMARIES: MonthlySummary[] = [
  {
    "month": "Jul 2026",
    "totalTrades": 3,
    "wins": 3,
    "losses": 0,
    "breakevens": 0,
    "totalPnl": 105,
    "keyLesson": "Awaiting post-month review. Focus on execution and process."
  },
  {
    "month": "Jun 2026",
    "totalTrades": 44,
    "wins": 24,
    "losses": 18,
    "breakevens": 2,
    "totalPnl": 76,
    "keyLesson": "Awaiting post-month review. Focus on execution and process."
  },
  {
    "month": "May 2026",
    "totalTrades": 31,
    "wins": 13,
    "losses": 16,
    "breakevens": 2,
    "totalPnl": -58,
    "keyLesson": "Stick to SPY. Single-stock 0DTE experiments showed weaker structure and lower conviction. Best trades came from NY open with clear BOS."
  },
  {
    "month": "Feb 2026",
    "totalTrades": 5,
    "wins": 0,
    "losses": 4,
    "breakevens": 1,
    "totalPnl": -19,
    "keyLesson": "Awaiting post-month review. Focus on execution and process."
  },
  {
    "month": "Jan 2026",
    "totalTrades": 4,
    "wins": 3,
    "losses": 1,
    "breakevens": 0,
    "totalPnl": 15,
    "keyLesson": "Awaiting post-month review. Focus on execution and process."
  }
];

export function getTradeSummary(trades: TradeEntry[]) {
  const wins = trades.filter((t) => t.outcome === "win").length;
  const losses = trades.filter((t) => t.outcome === "loss").length;
  const totalPnl = trades.reduce((sum, t) => sum + t.pnl, 0);
  const winRate = trades.length > 0 ? Math.round((wins / trades.length) * 100) : 0;
  return { wins, losses, totalPnl, winRate, total: trades.length };
}
