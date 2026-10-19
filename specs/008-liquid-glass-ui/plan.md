# Implementation Plan: Liquid-glass interface (008)

**Branch**: `feat/liquid-glass-ui` | **Date**: 2026-10-19 | **Spec**: [spec.md](./spec.md)

## Summary

This is a presentational refresh of the two Next.js apps. Everything it adds is listed below; nothing touches the API, models or environment.

- **Glass tokens**: token-driven liquid-glass utilities, a near-black default dark theme, and a new type pairing.
- **Motion primitives**: `Reveal`, `BlurText` and `PinnedRail`.
- **Navigation**: a glass pill nav shared by both shells.
- **Home page**: a rebuilt full-bleed hero.
- **Museum**: an opt-in three.js corridor view of the gallery.

## Technical Context

**Language/Version**: TypeScript 5, React 19.1, Next.js 15.5 (App Router)
**Primary Dependencies**: Tailwind CSS v4, framer-motion 12, three 0.184, next-intl 4, next-themes, shadcn/ui (new-york). **No new runtime dependencies.** Fonts come through `next/font/google`.
**Testing**: vitest (node env, `src/**/*.test.ts`) for pure layout and segmentation maths. `tsc --noEmit`, ESLint, `check:locales` and `next build`.
**Target Platform**: Evergreen browsers. Glass needs `backdrop-filter` (Safari 15.4+, Chromium 76+, Firefox 103+), with an opaque fallback otherwise.
**Performance Goals**: Hero LCP stays on one `priority` image. 3D at 60fps on integrated GPUs, DPR ≤ 2, ≤ 12 textures.
**Constraints**: Server-rendered HTML is identical regardless of motion preference. `en`/`ne` key parity. Colours only in `globals.css`.

## Constitution Check

| Gate | Status |
|---|---|
| Work from `v1`, imperative commits | ✅ Branch `feat/liquid-glass-ui` cut from `v1`. |
| No secrets / `.env` / `node_modules` / `.next` committed | ✅ Staging by explicit path. The tracked `heritage_graph_landing/.next/*` files are never staged. |
| TypeScript typechecks and builds | ✅ Checked before each commit. |
| New env vars in `.env.example` | n/a, none added. |
| Docs updated when affected | ✅ `AGENTS.md`, `CHANGELOG.md`, `documentation/developer/SKILLS.md`. |
| Breaking changes have a rollout plan | ✅ [proposal.md §5](./proposal.md#5-rollout). There is no API surface; reverting is one commit. |

## Project Structure

```text
heritage_graph_ui/
├── src/app/globals.css                    # tokens, @utility liquid-glass*, font-display, keyframes
├── src/app/layout.tsx                     # Barlow + Instrument Serif via next/font
├── src/app/SessionProvider.tsx            # defaultTheme="dark"
├── src/components/motion/
│   ├── reveal.tsx                         # Reveal (mount: CSS, view: armed after mount)
│   ├── blur-text.tsx                      # BlurText (Intl.Segmenter words)
│   ├── pinned-rail.tsx                    # PinnedRail (sticky stage, horizontal travel)
│   ├── scroll-vars.ts                     # one rAF scroll loop writing CSS vars
│   └── __tests__/…                        # segmentation + rail maths
├── src/components/site-nav.tsx            # glass pill nav
├── src/components/site-chrome.tsx         # SiteBar (overHero), HeaderControls pill, SiteFooter
├── src/app/(dashboard)/components/app-sidebar.tsx   # class names only
├── src/components/unesco/
│   ├── UnescoEntry.tsx                    # hero stage + section order
│   ├── HeroPhotographs.tsx                # full-bleed, Ken Burns, glass control pill
│   ├── HeroStats.tsx                      # NEW: two glass stat cards from ground-truth
│   ├── TrustBar.tsx                       # NEW: real sources strip
│   ├── HowItWorks.tsx                     # glass capability cards
│   ├── entry-sections.tsx                 # zone rail
│   └── NextSteps.tsx                      # glass doors
├── src/lib/heritage-museum/
│   ├── xr-theme.ts                        # museum panels → liquid-glass
│   ├── wikimedia-texture.ts               # NEW: shared resolver (moved from PanoramaViewer)
│   └── street-layout.ts                   # NEW: pure corridor layout + texture window
└── src/app/(site)/heritage-museum/components/xr/
    ├── StreetGallery3D.tsx                # NEW: three.js corridor
    └── ImmersiveScene.tsx                 # Grid / Street toggle

heritage_graph_landing/
├── src/app/globals.css                    # same token names, glass utilities
├── src/app/layout.tsx                     # same fonts
├── src/components/public-site-header.tsx  # glass pill
└── src/app/page.tsx                       # glass search, display headings
```

## Key decisions

1. **`@utility` over `@layer components`.** Tailwind v4 utilities accept variants (`md:liquid-glass`, `hover:liquid-glass-strong`) and sort correctly against other utilities.
2. **A separate `--cta` token.** In dark mode the CTA is white. Reusing `--primary` would have turned every `text-primary` link on dashboard pages white too.
3. **The hero carries the `dark` class.** Photographs are dark in both themes, so the hero and the bar floating over it opt into the dark tokens locally. Portalled menus render outside that subtree and keep the user's theme.
4. **CSS-first entrances.** Above-the-fold text uses the `animate-blur-rise` keyframe. It runs before hydration, needs no JS, and the server HTML never contains an opacity-0 inline style.
5. **Scroll-linked values are CSS custom properties.** One passive listener, throttled to one `requestAnimationFrame` per frame, writes `--rail-progress` on each registered stage. React re-renders only when a derived *index* changes.
6. **Imperative three.js, not R3F.** It matches `PanoramaViewer` and adds no dependency. See [research-3d.md](./research-3d.md).
