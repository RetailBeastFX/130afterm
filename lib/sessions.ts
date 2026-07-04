export type Session = "asian" | "london" | "new-york" | "overlap" | "after-hours";

export interface SessionInfo {
  name: string;
  label: string;
  utcStart: number; // hours in UTC
  utcEnd: number;
  description: string;
}

export const SESSIONS: Record<Session, SessionInfo> = {
  asian: {
    name: "Asian Session",
    label: "ASIAN",
    utcStart: 0,
    utcEnd: 9,
    description: "Tokyo + Sydney. Price often ranges, builds liquidity for London.",
  },
  london: {
    name: "London Session",
    label: "LONDON",
    utcStart: 8,
    utcEnd: 17,
    description: "Highest volatility window. Most institutional flow.",
  },
  overlap: {
    name: "London/NY Overlap",
    label: "OVERLAP",
    utcStart: 13,
    utcEnd: 17,
    description: "Peak volatility. Both markets active. Best conditions for 0DTE.",
  },
  "new-york": {
    name: "New York Session",
    label: "NEW YORK",
    utcStart: 13,
    utcEnd: 22,
    description: "Continuation or reversal from London. SPY 0DTE primary window.",
  },
  "after-hours": {
    name: "After Hours",
    label: "AFTER HOURS",
    utcStart: 22,
    utcEnd: 24,
    description: "1:30 after midnight. The quiet before structure forms.",
  },
};

export function getCurrentSession(): Session {
  const now = new Date();
  const utcHour = now.getUTCHours();

  if (utcHour >= 13 && utcHour < 17) return "overlap";
  if (utcHour >= 13 && utcHour < 22) return "new-york";
  if (utcHour >= 8 && utcHour < 17) return "london";
  if (utcHour >= 0 && utcHour < 9) return "asian";
  return "after-hours";
}

export function isSessionActive(session: Session): boolean {
  const now = new Date();
  const utcHour = now.getUTCHours();

  switch (session) {
    case "asian":
      return utcHour >= 0 && utcHour < 9;
    case "london":
      return utcHour >= 8 && utcHour < 17;
    case "new-york":
      return utcHour >= 13 && utcHour < 22;
    case "overlap":
      return utcHour >= 13 && utcHour < 17;
    default:
      return false;
  }
}

export function getSessionColor(session: Session): string {
  if (session === "after-hours") return "#454550";
  return "#D4973B";
}
