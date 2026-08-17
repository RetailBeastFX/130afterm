# 130AfterM Architecture

## Direction

130AfterM is a personal broadcast terminal: a living record of what is being built, traded, played, documented, and lived.

The site is organized around **activity**, not around a single niche.

## Target structure

```text
src/
├── components/
│   ├── ActivityTicker.astro
│   ├── ActivityTimeline.astro
│   ├── AmbientBackground.astro
│   ├── EngineCanvas.tsx
│   ├── Navbar.astro
│   └── Welcome.astro
│
├── data/
│   └── activity.ts
│
├── layouts/
│   └── Layout.astro
│
├── pages/
│   ├── index.astro       # broadcast/home surface
│   ├── now.astro         # current state
│   ├── archive.astro     # historical activity
│   ├── terminal.astro    # command interface
│   ├── workspace.astro   # creator cockpit
│   └── connect.astro     # external identity/distribution
│
├── styles/
│   └── global.css
│
└── types/
    └── activity.ts
```

## Content model

Everything public is an `ActivityEvent` first. The UI decides how to present it.

Supported types:

- `trade`
- `build`
- `media`
- `life`
- `gaming`
- `stream`
- `thought`
- `project`

This lets trading, gaming, fatherhood, builds, reactions, streaming, and ordinary life coexist without separate application logic.

## Migration order

1. Establish the activity data contract. **Done.**
2. Build reusable timeline/event UI. **Done.**
3. Replace hard-coded archive entries with activity data.
4. Replace hard-coded homepage activity with the same data source.
5. Make `/now` consume a current-state data model.
6. Make `/terminal` route commands into the same site surfaces.
7. Move long-form entries into Astro content collections when the event volume justifies it.
8. Optimize assets and metadata after the architecture is stable.

## Rule

Do not rebuild the visual identity during this migration. Preserve the existing aesthetic and improve the underlying system first.
