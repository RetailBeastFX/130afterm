# 130AfterM — Design System

## Color Hierarchy

| Token | Hex | Use |
|---|---|---|
| `void` | `#080808` | Page background |
| `surface` | `#111113` | Card background |
| `border` | `#1E1E22` | Card borders |
| `subtle` | `#2A2A30` | Hover states |
| `primary` | `#E8E8E8` | Main readable text |
| `secondary` | `#8A8A95` | Supporting text |
| `muted` | `#454550` | Labels, metadata |
| `ghost` | `#2A2A35` | Barely visible |
| `amber` | `#D4973B` | Primary accent — used sparingly |
| `amber-dim` | `#8B6428` | Amber hover state |
| `live` | `#3B9B5E` | Active sessions, wins |
| `inactive` | `#3A3A40` | Closed states |

**Rule:** Amber appears in < 20% of interactive elements.

## Typography

| Scale | Size | Weight | Font | Use |
|---|---|---|---|---|
| `xs` | 11px | 400 | JetBrains Mono | Labels, status, ALL CAPS |
| `sm` | 13px | 400 | JetBrains Mono | Metadata, timestamps |
| `base` | 15px | 300 | Inter | Body text |
| `md` | 17px | 400 | Inter | Emphasized body |
| `lg` | 22px | 500 | Inter | Section headings |
| `xl` | 32px | 300 | Inter | Page headings (light weight) |
| `2xl` | 48px | 200 | Inter | Hero identity text |

## Cards

```
Background: #111113
Border: 1px solid #1E1E22
Border-radius: 2px (near-sharp)
Padding: 24px
Hover: background → #141418, border → #2A2A30
Active: left border → 3px solid #8B6428
Shadow: none
Gradient: none
```

## Spacing

| Token | Value | Use |
|---|---|---|
| micro | 4px | Inline gaps, badge spacing |
| xs | 8px | Internal card padding (tight) |
| sm | 16px | Standard internal padding |
| md | 24px | Between sections within card |
| lg | 32px | Between cards |
| xl | 48px | Between major sections |
| 2xl | 72px | Page section breaks |
| 3xl | 96px | Hero / above-fold breathing room |

## Motion Rules

**Permitted:**
- `opacity` transitions: 150ms ease-out
- `translateY(-2px)` on card hover: 100ms
- Status pulse (live only): 2s interval
- Page transitions: 200ms fade

**Forbidden:**
- Scroll-triggered reveals on every card
- Parallax
- Hover color explosions
- Loading spinners (skeleton states only)
- Entrance animations that delay reading
