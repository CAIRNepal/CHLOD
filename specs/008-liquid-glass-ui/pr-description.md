# PR: Liquid-glass interface, glass pill nav and a 3D museum street (spec 008)

> Paste everything below the line as the pull request body. Base: `v1` (the project's working
> branch, per CONTRIBUTING.md). Merging `v1` into `main` is the maintainers' release step.

---

## Summary

This is a frontend-only refresh of HeritageGraph's look and navigation, plus an opt-in walkable 3D
view of the museum gallery. **No API, model, migration or environment change.**

- **Liquid glass on a near-black ground.** Token-driven `liquid-glass` / `liquid-glass-strong`
  utilities, Instrument Serif display type (`font-display`), Barlow body text, and one entrance
  animation (blur → focus, fade, rise). Dark is the default theme; light still works.
- **One glass pill nav for both shells.** Logo mark, a pill of destinations with **Contribute** as
  the solid button, and a pill of controls. It floats transparent over the home hero and becomes a
  glass bar elsewhere, including the signed-in workspace. The sidebar is restyled to match, with no
  behaviour change.
- **Entry page rebuilt.**
  - A full-screen hero over the existing credited UNESCO photographs, with the pause button and
    per-photo credit kept.
  - Two figures read from `ground-truth.ts`: 7 zones, inscribed 1979; Lumbini, 1997.
  - A strip naming the open sources the record is built on, limited to what the `/methods` licence
    matrix lists.
  - How it works as glass panels, and the seven zones as a pinned horizontal rail.
- **Museum → Street (3D).** The gallery's exhibits hang along a three.js corridor you walk with the
  wheel, a drag or the arrow keys.
  - It renders only while the camera moves and keeps at most 12 textures in GPU memory.
  - Credits stay in the DOM.
  - It is disabled without WebGL 2 or under reduced motion.
- **Landing app** (`heritage_graph_landing`) restyled to the same palette, fonts and glass header.

Proposal and reasoning: [`specs/008-liquid-glass-ui/proposal.md`](../specs/008-liquid-glass-ui/proposal.md).
3D options compared: [`research-3d.md`](../specs/008-liquid-glass-ui/research-3d.md).
Per-commit map: [`CHANGES.md`](../specs/008-liquid-glass-ui/CHANGES.md).

## Constraints kept

- **UNESCO facts** come only from `src/lib/unesco/ground-truth.ts`, and photographs only via
  `src/lib/unesco/imagery`. Numbers are ICU parameters, never literals in copy. Nothing renders
  `node.unescoStatus`.
- **CC BY-SA credit (D4)** stays visible for every photograph on screen: in the hero's control pill,
  under the How-it-works backdrop, and in the 3D overlay. Nothing floating covers a credit.
- **Colours live in `globals.css`.** New tokens: `--glass-*` and `--cta`. Chart, status and medal
  tokens are unchanged.
- **`en` / `ne` parity.** 30 keys added to both files. The Nepali drafts need native review; see
  [`ne-drafts.md`](../specs/008-liquid-glass-ui/ne-drafts.md).
- **Reduced motion.** Nothing auto-advances, the rail becomes a static grid, Street is disabled,
  and all text is visible.
- **No hydration-sensitive output.** Above-the-fold entrances are CSS-only, and scroll reveals arm
  only after mount.

## How to test

```bash
git fetch origin && git checkout feat/liquid-glass-ui
cd heritage_graph_ui && npm ci && npm run dev          # http://localhost:3000
cd ../heritage_graph_landing && npm ci && npm run dev  # http://localhost:3001
```

- [ ] `/`
  - The hero fills the screen, and the bar floats over it before turning into glass once you scroll.
  - Pause stops the rotation, and the credit always matches the photograph.
  - The zones rail scrubs sideways, and Tab reaches every card.
- [ ] `/` with **Reduce motion** on in the OS: everything is visible, nothing moves on its own, and
  the zones show as a grid.
- [ ] `/` in Nepali (language menu): headlines are upright Devanagari with no clipped matras.
- [ ] `/heritage-museum` → **Street (3D)**: walk with the wheel, a drag and the arrow keys. Enter
  opens the exhibit in front of you. "Credits for what you can see" lists every photograph.
- [ ] `/dashboard`, a `/contribute/<type>` form, `/knowledge/entity`
  - The sidebar sits under the bar, and charts, medals and warnings are still readable.
  - The theme toggle works.
- [ ] Phone width (≤ 400px): the menu button opens the sheet with every destination.
- [ ] Landing app `/`: glass header, glass search, both themes.

Automated checks run on the branch:
- `heritage_graph_ui`: `tsc --noEmit`, ESLint, `check:locales`, `vitest` (34 tests) and `next build`
  all pass.
- `heritage_graph_landing`: `next build` passes.

See CHANGES.md for the ESLint config note.

## Screenshots

<!-- Attach: home hero (dark, light, Nepali, mobile), how-it-works, zones rail, museum street,
     dashboard with sidebar at 1024px, landing app. -->

## Decisions for reviewers

1. Is a dark default right for a public heritage site, or should it stay `system`?
2. Barlow replacing Poppins as the body face.
3. The `CardWeb` filaments are no longer drawn on the zones rail. They cannot follow cards inside a
   transformed track, so they remain only where the grid is.
4. Street (3D) stays opt-in, with Grid as the default.

## Out of scope / follow-ups

- Untrack `heritage_graph_landing/.next/` (43 committed build files).
- Migrate ESLint to the flat config, so `npx eslint src --quiet` in CI runs again.
- Retire Fraunces from the remaining dashboard pages, and collapse the sidebar (UI_AUDIT §6).
- Real 360° panoramas or 3D Tiles. See `research-3d.md` for costs.
