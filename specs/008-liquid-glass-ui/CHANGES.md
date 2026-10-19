# Change log: `feat/liquid-glass-ui` (008)

Every commit on the branch, in order, with what it changed and why. Each one is self-contained:
the app typechecks, keeps locale parity and builds after every commit. The full message of each
commit (`git log v1..feat/liquid-glass-ui`) carries the longer reasoning; this page is the map.

| # | Commit | What changed | Main files |
|---|---|---|---|
| 1 | Propose the liquid-glass interface as spec 008 | Proposal, spec, plan, tasks and 3D research. | `specs/008-liquid-glass-ui/*` |
| 2 | Add liquid-glass tokens, utilities and the blur-rise entrance | `--glass-*` / `--cta` tokens in both themes; near-black dark neutrals; `liquid-glass`, `liquid-glass-strong`, `font-display`; reveal states; reduced-motion and Nepali overrides. | `heritage_graph_ui/src/app/globals.css` |
| 3 | Load Barlow and Instrument Serif, and default to the dark theme | Barlow replaces Poppins (same five weights); Instrument Serif as `--font-display`; Nepali rebinds it to Noto Serif Devanagari; `defaultTheme="dark"`. | `src/app/layout.tsx`, `src/app/SessionProvider.tsx`, `globals.css` |
| 4 | Add Reveal, BlurText and PinnedRail motion primitives | Server-visible reveals, word-by-word headlines, a pinned horizontal rail on one rAF scroll loop. Unit-tested maths. | `src/components/motion/*` |
| 5 | Turn the top bar into a glass pill nav for both shells | Mark · destinations pill · controls pill; Contribute is the solid CTA; transparent over the hero; compact controls at mid widths. | `src/components/site-nav.tsx`, `site-chrome.tsx`, `theme-toggle.tsx`, `AuthButtons.tsx`, `command-menu.tsx`, `language-switcher.tsx`, `notification-bell.tsx` |
| 6 | Restyle the workspace sidebar to match the glass nav | Pill items, mono group labels, glass scroll-to-top. Behaviour unchanged. | `nav-main.tsx`, `nav-knowledgebase.tsx`, `(dashboard)/components/app-sidebar.tsx` |
| 7 | Rebuild the entry hero as a full-screen glass stage | Full-viewport photographs with a glass credit/pause pill; badge, BlurText headline, CTAs, sourced figures, sources strip. | `src/components/unesco/{UnescoEntry,HeroPhotographs,HeroStats,TrustBar}.tsx`, `(site)/page.tsx`, messages |
| 8 | Show how it works as three glass panels over a photograph | Capability-card section over a credited, scrimmed photograph; tags per step. | `src/components/unesco/HowItWorks.tsx`, messages |
| 9 | Pin the seven zones to a horizontal rail | Zones walk sideways inside a pinned stage; counter changes on index only; static grid fallback. | `src/components/unesco/entry-sections.tsx`, `motion/pinned-rail.tsx` |
| 10 | Restyle next steps, Lumbini and the boundary note on glass | Glass doors, display headings, glass buttons; museum panels use the same glass. | `NextSteps.tsx`, `UnescoEntry.tsx`, `entry-sections.tsx`, `lib/heritage-museum/xr-theme.ts` |
| 11 | Add an opt-in 3D street view of the museum gallery | three.js corridor, Grid / Street toggle, DOM credits, texture window, disposal; shared Wikimedia resolver. | `xr/StreetGallery3D.tsx`, `xr/ImmersiveScene.tsx`, `xr/PanoramaViewer.tsx`, `lib/heritage-museum/{street-layout,wikimedia-texture}.ts`, messages |
| 12 | Restyle the landing app in the liquid-glass language | Same palette, fonts, glass header and dark default as the main app; glass search band. | `heritage_graph_landing/src/**` |
| 13 | Document the liquid-glass interface | CHANGELOG, AGENTS, SKILLS, this log, PR description, Nepali review list. | `CHANGELOG.md`, `AGENTS.md`, `documentation/developer/SKILLS.md`, `specs/008-liquid-glass-ui/*` |

## Verification run on the branch

| Check | Result |
|---|---|
| `npx tsc --noEmit` (`heritage_graph_ui`) | pass |
| ESLint, `src --quiet` (`heritage_graph_ui`) | pass with `ESLINT_USE_FLAT_CONFIG=false` (see note below) |
| `npm run check:locales` | pass, 1320 keys in each locale (30 added) |
| `npx vitest run` | 34 tests pass (20 added: motion maths, street layout) |
| `npm run build` (`heritage_graph_ui`) | pass |
| `next build` (`heritage_graph_landing`) | pass (built from a copy, see note below) |
| Browser checks (Playwright, Chromium) | `/` at 390 / 1024 / 1280 / 1440px, dark + light, `en` + `ne`, reduced motion; rail flush at start and end at 1440×900 and 1366×768, keyboard focus brings off-screen cards into view; `/heritage-museum` Street (dark theme; the light-theme run was cut short by the test machine running out of memory): keyboard walk, Enter opens the record, credits listed, no canvas left after 10 grid↔street toggles; `/dashboard`, `/knowledge/entity`, `/about`; landing `/` dark + light + 390px |

## Notes for reviewers

- **ESLint and CI.** The repo has `.eslintrc.json` but ESLint 9 is installed, which looks for
  `eslint.config.*` first. `npx eslint src --quiet`, as `frontend-checks.yml` runs it, fails at
  config lookup on `v1` too, before and after this branch. With `ESLINT_USE_FLAT_CONFIG=false` it
  runs the existing rules and passes. Migrating to flat config belongs in its own PR.
- **`heritage_graph_landing/.next/` is tracked in git** (43 build files), and it showed as modified
  before this branch existed. This branch does not stage any of it. The landing app was built from a
  scratch copy so that output stayed untouched. Untracking it (`git rm -r --cached
  heritage_graph_landing/.next`) is a separate, one-line PR.
- **`heritage_graph/apps/cidoc_data/shacl_validate.py`** had an unrelated local formatting change
  before this work started. It is not part of this branch.
- **Console warning, not introduced here (as far as I can tell).** On `/`, framer-motion logs
  "Please ensure that the container has a non-static position" from the `useScroll` in
  `components/unesco/depth.tsx` (`Parallax`, used by the Lumbini photograph). This branch does not
  change that component. I did not confirm the warning on `v1`.
