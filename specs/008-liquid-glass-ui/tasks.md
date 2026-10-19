---
description: "Task list for the liquid-glass interface"
---

# Tasks: Liquid-glass interface (008)

**Input**: [spec.md](./spec.md), [plan.md](./plan.md), [research-3d.md](./research-3d.md)

## Constitution Gates (apply to all tasks)

- No committed secrets, `.env`, `node_modules` or `.next`. Stage by explicit path.
- TypeScript typechecks and `next build` passes for every touched app.
- `messages/en.json` and `messages/ne.json` stay in key parity (`npm run check:locales`).
- Docs updated: `AGENTS.md`, `CHANGELOG.md`, `documentation/developer/SKILLS.md`.

## Phase 1: Foundation

- [ ] T001 Write the proposal, spec, plan and 3D research under `specs/008-liquid-glass-ui/`
- [ ] T002 Add glass, CTA and display tokens, the `liquid-glass*` / `font-display` utilities and the `blur-rise` keyframes in `heritage_graph_ui/src/app/globals.css`
- [ ] T003 Load Barlow and Instrument Serif in `src/app/layout.tsx`, rebind `--font-display` for `body:lang(ne)`, default to dark in `src/app/SessionProvider.tsx`
- [ ] T004 [P] Add `Reveal`, `BlurText`, `PinnedRail` and the scroll loop in `src/components/motion/`, with vitest coverage

## Phase 2: User Story 2, navigation (P1)

- [ ] T005 [US2] Glass pill nav in `src/components/site-nav.tsx`, `SiteBar` over-hero state and the control pill in `src/components/site-chrome.tsx`
- [ ] T006 [US2] Restyle `src/app/(dashboard)/components/app-sidebar.tsx` on glass tokens (presentation only)

## Phase 3: User Story 1, the entry page (P1)

- [ ] T007 [US1] Full-bleed hero: `HeroPhotographs.tsx`, `UnescoEntry.tsx`, new `HeroStats.tsx` and `TrustBar.tsx`, en/ne strings
- [ ] T008 [US1] Glass capability cards in `HowItWorks.tsx`
- [ ] T009 [US1] Pinned horizontal rail for the zones in `entry-sections.tsx`
- [ ] T010 [US1] Glass doors, Lumbini and credits; museum panels share the glass in `xr-theme.ts`

## Phase 4: User Story 3, the 3D street (P2)

- [ ] T011 [US3] Move the Wikimedia resolver to `src/lib/heritage-museum/wikimedia-texture.ts`
- [ ] T012 [US3] Corridor layout and texture window in `src/lib/heritage-museum/street-layout.ts`, with tests
- [ ] T013 [US3] `xr/StreetGallery3D.tsx` and the Grid / Street toggle in `ImmersiveScene.tsx`, en/ne strings

## Phase 5: User Story 4, the landing app (P3)

- [ ] T014 [US4] Tokens, fonts, glass header and glass search in `heritage_graph_landing/`

## Phase 6: Polish

- [ ] T015 `CHANGELOG.md`, `AGENTS.md`, `documentation/developer/SKILLS.md`
- [ ] T016 `CHANGES.md` (per-commit log), `pr-description.md`, `ne-drafts.md`
- [ ] T017 Full verification pass (see [plan.md](./plan.md) and the PR checklist)
