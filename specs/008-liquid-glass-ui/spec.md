# Feature Specification: Liquid-glass interface (008)

**Feature Branch**: `feat/liquid-glass-ui`
**Created**: 2026-10-19
**Status**: Draft
**Input**: "Improve the UI. The navigation bar and the overall look are too old; make it modern. Investigate making the museum's gallery strip 3D. Frontend only, do not break anything."
**Proposal**: [proposal.md](./proposal.md)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A first-time visitor understands where they are (Priority: P1)

Someone arrives at `/` from a search result or a shared link. Within one screen they see a photograph of an actual inscribed place, what HeritageGraph is in one sentence, and two obvious ways in: the museum, or how the record is built.

**Why this priority**: The entry page is the platform's front door. If the visitor leaves from here, nothing downstream matters.

**Independent Test**: Load `/` at 375px and 1440px. The hero fills the viewport, the headline and lede are readable over the photograph, both CTAs are reachable by keyboard, and the photo credit is visible.

**Acceptance Scenarios**:

1. **Given** a cold load of `/`, **When** the page paints, **Then** the first photograph is visible immediately, with no opacity-0 entrance on the image, and the text rises in over at most 1.4s.
2. **Given** the hero is rotating, **When** the visitor presses *Pause*, **Then** rotation stops and the credit stays on the current photograph.
3. **Given** the OS has *Reduce motion* on, **When** `/` loads, **Then** nothing moves on its own and all text is visible without scrolling into view.
4. **Given** locale `ne`, **When** `/` loads, **Then** headlines render in Noto Serif Devanagari, upright, with no clipped matras.

---

### User Story 2 - Navigation that looks and behaves the same everywhere (Priority: P1)

A contributor moves from the public museum into the workspace and back. The top navigation is the same glass pill in both places, the active page is marked, and on a phone the same destinations are one tap away in a sheet.

**Why this priority**: The bar appears on every page. It is the highest-leverage change.

**Independent Test**: Visit `/`, `/heritage-museum`, `/dashboard` and `/contribute`. The pill renders identically, the active link is marked, the workspace bar still has its sidebar trigger, and the sidebar sits below the bar with no overlap.

**Acceptance Scenarios**:

1. **Given** `/` at the top of the page, **When** it renders, **Then** the bar is transparent over the photograph and its contents are light-on-dark in both themes.
2. **Given** `/` scrolled past the hero, **When** the hero leaves the viewport, **Then** the bar becomes a glass surface that follows the user's theme.
3. **Given** a 375px viewport, **When** the menu button is pressed, **Then** a sheet lists every primary and About destination.
4. **Given** the workspace shell, **When** the sidebar is collapsed and expanded, **Then** behaviour is unchanged from `v1`.

---

### User Story 3 - Walk the museum gallery in 3D (Priority: P2)

On `/heritage-museum`, with no record selected, the visitor switches the gallery from *Grid* to *Street (3D)* and walks down a corridor of exhibits. Clicking a panel opens that record, as clicking a grid card does today.

**Why this priority**: It is the most visible "new" feature, but the museum already works without it.

**Independent Test**: Toggle *Street (3D)*. Walk with the wheel, a drag and the arrow keys. Every visible photograph's credit is listed on screen. Pressing Enter on the focused exhibit opens its record. Toggling back to *Grid* frees the WebGL context.

**Acceptance Scenarios**:

1. **Given** a browser without WebGL2, or with *Reduce motion* on, **When** the gallery renders, **Then** *Street (3D)* is disabled and the reason is shown.
2. **Given** the Street view, **When** the visitor walks past 30 exhibits, **Then** no more than 12 textures are resident at once.
3. **Given** a screen reader, **When** the Street view is active, **Then** the exhibits are reachable as a list of buttons and the canvas is hidden from the accessibility tree.

---

### User Story 4 - The landing search app matches (Priority: P3)

The separate discovery app (`heritage_graph_landing`, port 3001) uses the same glass header, palette and display type, so following a link from one app to the other does not feel like a different product.

**Independent Test**: Run both apps and click *Open app* from the landing header. The header, colours and type match.

### Edge Cases

- **A photograph fails to load.** The hero keeps its scrim and text, and the credit row shows the place name only.
- **The museum has no records with media.** The Street toggle is hidden, because there is nothing to hang.
- **Wikimedia `File:` page URLs.** These are resolved to direct image URLs before texture loading, using the same resolver as the panorama viewer.
- **The window is resized while the rail is pinned.** The travel distance is re-measured, and the progress maths uses the new width.
- **Long Nepali nav labels.** The pill collapses to the sheet at a container width, not a viewport width, so the workspace bar (narrowed by the sidebar) collapses correctly.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-008-001**: Colours MUST be defined only in `globals.css`. New tokens: `--glass-fill`, `--glass-fill-strong`, `--glass-stroke-strong`, `--glass-stroke-soft`, `--glass-shadow`, `--cta`, `--cta-foreground`, each in light and dark.
- **FR-008-002**: The `liquid-glass` and `liquid-glass-strong` utilities MUST fall back to an opaque card surface where `backdrop-filter` is unsupported.
- **FR-008-003**: Every new user-facing string MUST exist in `messages/en.json` and `messages/ne.json`. Numbers and years MUST be ICU parameters.
- **FR-008-004**: The hero MUST take UNESCO facts only from `src/lib/unesco/ground-truth.ts` and photographs only via `src/lib/unesco/imagery`.
- **FR-008-005**: A CC BY-SA credit MUST be visible for every photograph on screen, in 2D and 3D.
- **FR-008-006**: Under `prefers-reduced-motion: reduce`, all content MUST be visible without animation. Pinned stages MUST render as static flow, and nothing may auto-advance.
- **FR-008-007**: Server-rendered markup MUST NOT depend on motion preference or viewport. Zero hydration warnings.
- **FR-008-008**: The 3D view MUST cap device pixel ratio at 2, keep at most 12 textures resident, and dispose its renderer, geometries, materials and textures on unmount.
- **FR-008-009**: The workspace sidebar MUST keep every link, role gate and collapse behaviour. Only presentation may change.
- **FR-008-010**: The bar MUST stay 56px tall (`h-14`), so the sidebar's `top-14` offset stays correct.

### Key Entities

None. This feature adds no data.

## Success Criteria *(mandatory)*

- **SC-001**: `tsc --noEmit`, ESLint, `check:locales`, `vitest` and `next build` pass for `heritage_graph_ui`, and `next build` passes for `heritage_graph_landing`.
- **SC-002**: Zero hydration warnings on `/`, `/heritage-museum` and `/dashboard`.
- **SC-003**: Text on glass meets WCAG AA (≥ 4.5:1) in both themes.
- **SC-004**: Leaving and re-entering the Street view 10 times leaves no WebGL context alive (checked in DevTools).
