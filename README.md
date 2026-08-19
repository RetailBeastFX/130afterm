# 130 AM

> *1:30 after midnight. The hour noise stops and real work starts.*

Personal operating system with a public read-only layer. Built on [Astro](https://astro.build), deployed on [Netlify](https://netlify.com).

**Live:** [130afterm.netlify.app](https://130afterm.netlify.app)

---

## Architecture

```
                    130AFTERM
                         │
             ┌───────────┴───────────┐
             │                       │
       ACTIVITY LOG               NOW STATE
       "what happened"            "what's happening"
             │                       │
       activity.ts              /api/now (Netlify Blobs)
             │                       │
       ┌─────┴─────┐           ┌─────┴─────┐
       │           │           │           │
    Homepage    Archive       /now      Terminal
```

### Data model

| Layer | Type | Source | Mutable? |
|---|---|---|---|
| `ActivityEvent` | Historical / durable | `src/data/activity.ts` + Netlify Blobs | No (append-only) |
| `NowState` | Ephemeral / real-time | Netlify Blobs (`now_state` store) | Yes (via Terminal) |

### Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — window into the system |
| `/now` | Current heartbeat — live NowState |
| `/archive` | Historical memory — ActivityEvent timeline |
| `/terminal` | Control layer — read both, write NowState |
| `/connect` | Social links |

### API

| Endpoint | Method | Auth | Purpose |
|---|---|---|---|
| `/api/now` | `GET` | None | Fetch current NowState |
| `/api/now` | `POST` | `NOW_API_TOKEN` | Update NowState fields |
| `/api/activity` | `GET` | None | Fetch dynamic ActivityEvents from Blobs |
| `/api/activity` | `POST` | `NOW_API_TOKEN` | Log a new ActivityEvent to Blobs |

---

## Terminal commands

The Terminal at `/terminal` is the primary control interface.

- **`[ COMMIT SNAPSHOT ]`** — writes the current form state to `NowState` via `POST /api/now`. Updates `/now` immediately.
- **`[ LOG THIS ]`** — captures the current state as a permanent `ActivityEvent` via `POST /api/activity`. Appears at the top of `/archive`.

These are intentionally separate operations. `COMMIT` updates the present. `LOG THIS` says *this moment is worth remembering*.

---

## Local development

```bash
npm install
npm run dev        # Astro dev server at localhost:4321
```

### Environment variables

For the Terminal write operations to work locally with Netlify Dev:

```bash
# .env (gitignored)
NOW_API_TOKEN=your_secret_token_here
```

Run with:

```bash
npx netlify dev    # Serves Netlify Functions locally
```

---

## Deployment

Deployed automatically via Netlify on push to `master`.

Manual deploy:

```bash
netlify deploy --prod
```

### Required environment variable (Netlify UI)

| Key | Value |
|---|---|
| `NOW_API_TOKEN` | Secret token for Terminal write access |

---

## Project structure

```
src/
  components/        # Astro components (ActivityTimeline, RecentActivity, Navbar…)
  data/              # Static data (activity.ts, now.ts)
  layouts/           # Layout.astro — global shell + inline scripts
  lib/now/           # NowState read/write helpers
  pages/             # Route pages (index, now, archive, terminal, connect)
  styles/            # global.css
  types/             # TypeScript interfaces (ActivityEvent, NowState)
netlify/
  functions/         # Serverless functions (now.ts, activity.ts)
public/              # Static assets
```

---

## Design philosophy

> *The site shouldn't ask 'What does Bo do?' It should answer 'What is Bo doing right now?'*

- **Archive = memory.** Historical ActivityEvents are append-only and permanent.
- **Homepage = window.** A public read-only view of both live state and recent history.
- **Now = heartbeat.** Ephemeral NowState that reflects the current moment.
- **Terminal = interface.** The only write path into the system.

Don't blur the line between state and memory. That's the architectural rule worth protecting.
