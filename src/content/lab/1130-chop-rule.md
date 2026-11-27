---
title: "The 11:30 Chop Rule"
number: 7
date: 2026-11-26
updated: 2026-11-26
description: "If we're still inside the ORB at 11:30, is the day a chop day? Alex's claim, tested on 44 days of SPY and QQQ."
status: hypothesis
instruments: ["SPY", "QQQ"]
tags: ["orb", "chop", "11:30", "intraday", "journal"]
---

## The claim

Alex's read, via Bo (Nov 26, 2026): *"If we're inside orb by 11:30 we're probably gonna be in a chop."*

Testable version: on days with no confirmed 15m-ORB break (close outside) by 11:30 ET, the day is a chop day — small day range, price ends back inside — and late breaks (first break close after 11:30) underperform early breaks.

## What I tested

Same 44-day window (Sep 15 – Nov 13, 2026), same cached Yahoo 15m bars as the main ORB work. SPY and QQQ separately, never pooled. Trade outcomes joined from the break-timing trades.

## Results

| | SPY | QQQ |
|---|---|---|
| Days total | 44 | 44 |
| Early break (close ≤ 11:30) | 43 | 40 |
| Late break (close > 11:30) | 0 | 3 |
| No break at all | 1 | 1 |
| Median day range, early-break days | 6.55 pts (104% of overall median) | 9.47 pts (109%) |
| Median day range, late-break days | — | 5.24 pts (60%) |
| Day range, no-break day | 3.61 pts (57%) | 4.49 pts (52%) |
| No-break days ending back inside ORB | 1/1 | 1/1 |
| Late-break trades, plain | n=0 | n=3, −0.97R mean, 0/3 wins |
| Late-break trades, gated | n=0 | n=0 — the gate refused all 3 |
| Early-break trades, plain | n=42, −0.45R, 16/42 | n=39, −0.09R, 17/39 |
| Early-break trades, gated | n=24, +0.18R, 15/24 | n=30, +0.09R, 15/30 |

## Verdict: lead, not a finding

- **Direction agrees with Alex.** The 5 symbol-days with no break by 11:30 (3 late + 2 no-break) ran day ranges at 52–60% of the overall median, both no-break days closed back inside the ORB, and the 3 late-break trades all lost (−0.97R mean, plain).
- **Sample is too small to confirm.** n=5 days, n=3 trades. No significance test is meaningful at this n.
- **It's rare.** Only ~6% of symbol-days (5/88) are still inside at 11:30, so the rule would not come up often.
- **The regime gate already filters it.** The gate refused all 3 late QQQ breaks (gated late n=0), so in the gated variant the rule barely matters — the late-break losers only exist in the plain variant.

## Next step

Long-window candidate for the TradingView run (2023–2025): days with no break by 11:30 — day-range distribution, late-break trade outcomes, and whether the gate keeps refusing them. Not a filter for the indicator now.

---

*Status: hypothesis — a lead, not a finding. No filter added.*
