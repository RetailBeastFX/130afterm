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
| `/` | Homepage — the hangout spot: profile, right now, RB's corner, pinboard, shelf, guestbook, link garden |
| `/now` | Current heartbeat — live NowState |
| `/archive` | Historical memory — ActivityEvent timeline |
| `/terminal` | Control layer — read both, write NowState |
| `/links` | Link-in-bio hub — avatar, bio, full link stack (the social-bio URL) |
| `/blog` | The rant room — Bo's personal blog (thoughts, rants), newest first |
| `/blog/:slug` | Individual post pages |
| `/rss.xml` | RSS feed for the rant room |
| `/connect` | Removed (2026-10 redesign) — redirects to `/links` |

### API

| Endpoint | Method | Auth | Purpose |
|---|---|---|---|
| `/api/now` | `GET` | None | Fetch current NowState |
| `/api/now` | `POST` | `NOW_API_TOKEN` | Update NowState fields |
| `/api/activity` | `GET` | None | Fetch dynamic ActivityEvents from Blobs |
| `/api/activity` | `POST` | `NOW_API_TOKEN` | Log a new ActivityEvent to Blobs |
| `/api/guestbook` | `GET` | None | Fetch guestbook entries (newest first) |
| `/api/guestbook` | `POST` | None (honeypot + validation) | Sign the guestbook |
| `/api/ask-rb` | `POST` | None (per-IP throttle) | Ask RB — chat proxy to Anthropic |

### Ask RB (chat widget)

The floating chat bubble answers visitor questions via `netlify/functions/ask-rb.ts`.

**Default mode — zero cost, always works.** Answers come from a built-in
local knowledge base in the function (keyword/intent matching: who Bo is,
130 AM, builds, trading, socials, guestbook, RB's corner). No external calls,
no key needed. Trading-advice requests are deflected warmly, in either mode.

**Optional upgrade — Anthropic API.** If `ANTHROPIC_API_KEY` is set, questions
are routed to the Anthropic Messages API with the RB system prompt for
smarter, conversational answers (falls back to the local KB if the API fails).
Set it in Netlify UI → Site settings → Environment variables.
(Optional) `RB_CHAT_MODEL` overrides the model (default: `claude-haiku-4-5`).

The key is never hardcoded and never committed. Rate limited to 20
requests/hour per IP; messages capped at 500 chars.

### RB's corner (notes)

Signed notes on the homepage come from `src/data/rb-notes.ts`.
New notes are a one-line append to that array — Muse drafts them,
Bo approves, then they're committed. Newest note is featured automatically.

## Writing a rant (blog workflow)

1. New file: `src/content/blog/my-post-slug.md` with frontmatter (`title`, `date: YYYY-MM-DD`, `description`, `tags: []`, optional `draft: true`).
2. Write the post in markdown below the frontmatter.
3. `git add`, commit, `git push` — Netlify rebuilds and it goes live.
4. Drafts (`draft: true`) are hidden from `/blog`, post pages, and RSS until published.
5. Feed lives at `/rss.xml`; the homepage shows the 3 newest rants automatically.

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
# First time on a fresh clone — link to the correct Netlify site
netlify link --name 130afterm

# Then deploy
netlify deploy --prod
```

> **Note:** `.netlify/state.json` (which stores the site link) is gitignored because it contains absolute local paths. Run `netlify link --name 130afterm` once after cloning on a new machine.

### Required environment variables (Netlify UI)

| Key | Value |
|---|---|
| `NOW_API_TOKEN` | Secret token for Terminal write access |
| `ANTHROPIC_API_KEY` | Optional — unlocks the smarter Anthropic-powered answers in the Ask RB widget (works fine without it) |

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
