# Proposal: a liquid-glass interface for HeritageGraph (008)

**Author**: Bhuwan Joshi (@BhuwanJoshi-01)
**Created**: 2026-10-19
**Status**: Proposed. Implementation lives on `feat/liquid-glass-ui`.
**Scope**: Frontend only (`heritage_graph_ui`, `heritage_graph_landing`). No API, model or migration changes.
**Spec**: [spec.md](./spec.md) · **Plan**: [plan.md](./plan.md) · **Tasks**: [tasks.md](./tasks.md) · **3D research**: [research-3d.md](./research-3d.md)

---

## 1. The problem

The data underneath HeritageGraph is careful work: every UNESCO fact comes from one module, every photograph carries its licence, every record says who checked it. The interface in front of it does not look that careful.

- [UI_AUDIT.md](../../UI_AUDIT.md) scored visual maturity at **52/100**. Its findings: mixed radii, an ad-hoc shadow scale, no type scale and no motion system. Several fixes have landed since (see [last_edit.md](../../last_edit.md)). The sidebar collapse, type and spacing tokens, and a shared motion language are still open.
- The top bar is a flat strip with a wordmark and a row of text links. Nothing about it says "this is the front door of a heritage archive", and the same bar is all a contributor sees inside the workspace.
- The entry page does a lot right: rotating credited photographs, a pause control, plain-language copy. But it reads as a long column of sections at one tempo. Nothing moves with the reader except a parallax offset.
- The Heritage Museum has the richest material on the platform and shows it as a flat grid. The only 3D on the site is a 360° viewer, and no image in the corpus qualifies for it (see `documentation/FEATURE_WALKTHROUGH.md` §6).

The result: people who arrive through the front door leave before they reach the museum or the contribute flow, and those two are where the platform's value is.

## 2. What I am proposing

One visual language across both apps, built from three pieces:

1. **Liquid glass on a near-black ground.** Panels are near-invisible fills with a gradient stroke and a backdrop blur, so the photography behind them stays the subject. There are two strengths, `liquid-glass` and `liquid-glass-strong`. Both are defined once in `globals.css` and driven by tokens, so they follow the theme and never hard-code a colour in a component.
2. **A type and motion system.** Instrument Serif italic for display, Barlow for body, Geist Mono for labels. Entrances use one curve: blur 10px → 0, opacity 0 → 1, rise 20px → 0, over 0.8s. Headlines reveal word by word, and long collections scroll sideways inside a pinned stage. Every animation has a reduced-motion path, and none of them hides content before JavaScript runs.
3. **A walkable museum.** An opt-in **Street (3D)** view of the museum gallery: exhibits hung on both walls of a receding corridor, walked with the scroll wheel, a drag or the keyboard. It uses three.js, which the project already ships for the panorama viewer, so there is no new 3D dependency.

The navigation becomes a **floating glass pill**:
- Left: the logo mark in a glass circle.
- Centre: the primary destinations, the About menu and a white **Contribute** button.
- Right: the existing controls (search, language, sign-in, theme).

It floats transparent over the home-page photograph and settles into a glass bar everywhere else, including the signed-in workspace, so moving between the two shells still feels like one site.

## 3. Non-goals

- **No backend change.** No new endpoint, model, migration or environment variable.
- **No new data claims.** The hero's figures are the ones `src/lib/unesco/ground-truth.ts` already carries: 7 monument zones, inscribed 1979; Lumbini, 1997. The "trusted by" strip lists the sources the platform actually draws on (UNESCO World Heritage List, Wikimedia Commons, Wikidata, OpenStreetMap, DANAM) and the model it maps to (CIDOC-CRM). No logos, no customer counts.
- **No stock media.** The cinematic background is the existing CC BY-SA photography, credited frame by frame. No third-party video.
- **No change to any dashboard behaviour.** The sidebar keeps every link, role check and collapse state. Only class names change.
- **No street-level map or 3D buildings.** That needs 3D tiles or 360° capture the project does not have yet; [research-3d.md](./research-3d.md) costs it out as follow-up work.

## 4. Constraints this respects

| Rule | Where it comes from | How the design keeps it |
|---|---|---|
| UNESCO facts only from `ground-truth.ts`, photos only from `unesco-imagery.json`. Never render `node.unescoStatus`. | `AGENTS.md` (public entry), commits D6/D7 | The hero stats read `KATHMANDU_VALLEY_ZONE_COUNT` and `yearInscribed` as ICU parameters. No copy contains a number. |
| CC BY-SA credit must stay visible with its image. | Rule D4, `HeroPhotographs.tsx` | The credit moves into the hero's glass control pill and changes with the frame. In 3D, the focused exhibit's credit and a list of every loaded panel's credit are always on screen. |
| Colours live in `globals.css` tokens. | `CONTRIBUTING.md` | New tokens: `--glass-*`, `--cta`. The only literal colours are the black photo scrims that already existed. |
| `en` and `ne` stay in key parity. | CI `check:locales` | Every new string ships in both files. The Nepali drafts are listed in [ne-drafts.md](./ne-drafts.md) for native review. |
| Content moving on its own must be pausable (WCAG 2.2.2). | Museum P1 | The hero keeps its pause button, and nothing auto-advances under reduced motion. |
| Devanagari must render properly. | `body:lang(ne)` rebinding | Instrument Serif has no Devanagari, so `--font-display` rebinds to Noto Serif Devanagari, upright, with no negative tracking. Headlines split on words, never letters, so conjuncts stay intact. |

## 5. Rollout

The change is presentational, so the rollout is simple:

1. Review this proposal and the screenshots in the PR.
2. Merge to `v1` behind no flag. The theme toggle still offers the previous light palette (retuned only for glass), so anyone who prefers it keeps it.
3. A native speaker reviews the Nepali strings in [ne-drafts.md](./ne-drafts.md). Until then they ship as drafts, which is what the locale gate allows today.
4. Follow-ups, each its own PR: retire Fraunces from the dashboard pages, collapse the 35-item sidebar (UI_AUDIT §6), source real 360° panoramas, untrack `heritage_graph_landing/.next/`.

Reverting is one `git revert` of the merge. Nothing persists outside the frontend bundle.

## 6. Risks and how they are handled

| Risk | Mitigation |
|---|---|
| Server/client hydration mismatch from motion preferences | Above-the-fold entrances are pure CSS. Scroll reveals arm only after mount, the pattern `src/lib/use-reveal.ts` already established. |
| Content stuck invisible if an observer never fires | Reveals never start hidden on the server. Anything already in view at mount is shown, not animated. |
| `position: sticky` broken by an `overflow` ancestor | The rail checks this at mount and falls back to the static grid. Ancestors use `overflow-x: clip`. |
| Glass text contrast in light mode | Light-mode glass has a more opaque fill. Text pairs are checked at ≥ 4.5:1 against the composited colour. |
| WebGL memory and battery | DPR is capped at 2. The scene renders only while moving, holds at most 12 textures (LRU) and disposes everything on exit. It is opt-in, and disabled under reduced motion or without WebGL2. |
| Bigger hero image (LCP) | Only the first frame has `priority`, and the next is pre-decoded. Two frames are in the DOM, never eight. |

## 7. What I am asking reviewers to decide

1. **Dark by default.** Is a near-black default theme acceptable for a public heritage site, or should the default stay `system`?
2. **Barlow replacing Poppins** as the body face. The weight count is the same (five), so the bytes are about the same.
3. **Dropping the `CardWeb` filaments** from the zone collection on the home page. They cannot follow cards that slide sideways inside a pinned stage. They remain on the How-it-works and grid fallbacks.
4. **The Street (3D) view as opt-in.** Grid stays the default.

## 8. How to review

```bash
git fetch origin feat/liquid-glass-ui && git checkout feat/liquid-glass-ui
cd heritage_graph_ui && npm ci && npm run dev    # http://localhost:3000
cd ../heritage_graph_landing && npm ci && npm run dev   # http://localhost:3001
```

Pages to look at, at phone and desktop width, in both themes and both languages:
- `/`
- `/heritage-museum`: press **Street (3D)**
- `/dashboard`
- any `/contribute/<type>` form
- `/about#image-credits`

Then turn on *Reduce motion* in your OS and load `/` again. Everything should be visible, with nothing moving on its own.

The per-commit change log is in [CHANGES.md](./CHANGES.md).
