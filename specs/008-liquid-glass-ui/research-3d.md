# Research: making the museum "street" 3D

**Question**: The Heritage Museum's gallery is a flat grid of exhibit cards. Can we turn it into something the visitor walks through, and what would that cost?

## What already exists

| Piece | Where | Relevance |
|---|---|---|
| `three@^0.184` (no React Three Fiber) | `heritage_graph_ui/package.json` | Already in the bundle, used by the 360° viewer. Adding a scene costs no new dependency. |
| `PanoramaViewer.tsx` | `src/app/(site)/heritage-museum/components/xr/` | Imperative three.js and WebXR. It already resolves Wikimedia `File:` URLs to direct image URLs and loads them with `crossOrigin='anonymous'`. |
| `panorama-support.ts` | `src/lib/heritage-museum/` | Only offers 360° for ~2:1 images. The corpus has none, so the viewer never opens in practice. |
| Cesium + Resium globe | `/atlas` | A real 3D globe, but it is about geography, not exhibits. |
| Leaflet street tiles | museum map view, geo-point form field | 2D only. |
| CSP `img-src` | `next.config.ts` | Already allows `*.wikimedia.org`, so textures load without a policy change. |

## Options compared

| Option | What the visitor gets | New deps | Assets needed | Effort | Risk |
|---|---|---|---|---|---|
| **A. Imperative three.js corridor** *(chosen)* | Exhibits hang as framed panels on both walls of a receding street. Walk with wheel, drag or keys, and click to open. | none | The existing exhibit photographs | ~1.5 days | Low. Same pattern as PanoramaViewer. |
| B. React Three Fiber + drei | Same scene, declarative | `@react-three/fiber`, `@react-three/drei` (~150 kB gz) | same | ~1.5 days | Medium. Two three.js idioms in one codebase, and an R3F/React 19 version pin. |
| C. CSS 3D (`perspective` + `translateZ`) | A shallow parallax "street" of DOM cards | none | same | ~0.5 day | Low, but it only looks 3D within a narrow angle, and every card stays in the DOM, which is heavy with 100+ exhibits. |
| D. Street-level photos (Mapillary / KartaView) | Real street-level imagery near each site | an SDK and an API key | Third-party coverage, which is patchy in Kathmandu's old cores | 3–5 days | High. Licensing (CC BY-SA 4.0 on Mapillary, but per-image attribution), a backend proxy for the key, and coverage gaps. |
| E. Photogrammetry / Gaussian splats of monuments | True 3D monuments | a splat renderer | Capture campaigns per monument | Weeks, plus fieldwork | High. This is a content project, not a frontend one. |
| F. Cesium 3D Tiles (OSM buildings) | Extruded buildings around each zone on `/atlas` | none (Cesium is present) | A Cesium ion token or self-hosted tiles | ~2 days | Medium. Needs a token and env var, so it is not frontend-only. |

## Why A

- **It uses only what the platform already has**: the photographs, their credits, and three.js.
- **It follows PanoramaViewer's pattern**, so one person can maintain both.
- **It degrades cleanly.** Without WebGL2, or under reduced motion, the grid stays, and the grid is the default anyway.
- **It keeps the D4 credit rule.** Attribution is a DOM overlay, never a texture, so it is selectable, translatable and readable by screen readers.

## Design of the corridor

```
           ┌──────────── far end (fog) ────────────┐
   left    │  [ex 5]                      [ex 6]   │   right
   wall    │       [ex 3]            [ex 4]        │   wall
           │            [ex 1]  [ex 2]             │
           └──────────── camera walks −z ──────────┘
```

- **Layout**: exhibit *i* goes on the left wall when *i* is even and the right when odd, at `z = −floor(i/2) × spacing`. Panels turn about 70° toward the aisle so they read from the centre line. The layout is pure maths in `src/lib/heritage-museum/street-layout.ts`, with unit tests.
- **Camera**: walks from z=+2 to the last exhibit, damped (`z += (target − z) × 0.12`). Wheel, drag, ←/→/↑/↓, W/S and PageUp/PageDown move the target. The focused exhibit is the one nearest the camera's look-ahead point.
- **Textures**: only the N=12 nearest exhibits have textures. The rest are plain frames. Leaving the window disposes a texture (LRU).
- **Frame budget**: render on demand, i.e. only while the camera is settling or a texture has just arrived. The canvas pauses when the tab is hidden. DPR is capped at 2.
- **Materials**: `MeshBasicMaterial`, so there is no lighting cost. Fog (`scene.fog`) hides pop-in at the far end. The floor and wall are plain planes using colours read from CSS tokens at mount, so the street follows the theme.
- **Credits**: a DOM glass overlay shows the focused exhibit's title, type, `ImageAttribution` and Open button, plus a collapsible "Credits for what you can see" list of every textured panel.

## Follow-ups worth doing later

1. **Real panoramas (D or own capture).** Once the corpus has 2:1 images, PanoramaViewer lights up with no code change.
2. **3D Tiles on `/atlas` (F).** Worth doing when someone can own a Cesium ion token in deployment.
3. **Photogrammetry (E).** Pair with CAIR-Nepal field documentation. Splat viewers are now small enough (~60 kB) to load on demand.
