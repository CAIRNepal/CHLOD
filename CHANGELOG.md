# Changelog

All notable changes to HeritageGraph are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the project aims to follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Liquid-glass interface** (spec [008](specs/008-liquid-glass-ui/proposal.md)) — token-driven
  `liquid-glass` / `liquid-glass-strong` utilities, `font-display` (Instrument Serif) and a single
  `blur-rise` entrance in `heritage_graph_ui/src/app/globals.css`; `--glass-*` and `--cta` tokens in
  both themes.
- **Motion primitives** in `heritage_graph_ui/src/components/motion/`: `Reveal`, `BlurText`
  (word-by-word, Devanagari-safe) and `PinnedRail` (sticky stage, one rAF scroll loop writing CSS
  variables), with static fallbacks on the server, on phones and under reduced motion.
- **Museum "Street (3D)" view** — the gallery as a walkable three.js corridor
  (`xr/StreetGallery3D.tsx`): on-demand rendering, at most 12 textures, DOM credits for every visible
  photograph, opt-in and disabled without WebGL 2 or under reduced motion.
- Entry page: full-screen hero with sourced figures (`HeroStats`) and the open sources the record is
  built on (`TrustBar`); How it works as glass panels; the seven zones as a pinned horizontal rail.
- **Gold-standard evaluation runner** (`manage.py kg_evaluate`) — precision / recall / F1
  for type assignment, relationship triples, and external alignment against
  `evaluation/gold/`.
- **Linked Yale LUX layer** in the museum projection — a connected sample of imported
  LUX stubs is surfaced as a clearly-tagged external layer (`sourceLayer: lux`,
  configurable via `RDF_LUX_SAMPLE_LIMIT`), kept separate from the curated graph.
- Release metadata: `.zenodo.json`, versioned `CITATION.cff`, this changelog.

### Changed
- **Navigation** is a glass pill in both shells (mark · destinations · controls, Contribute as the one
  solid button); it floats over the entry hero and becomes a glass bar elsewhere. The workspace
  sidebar is restyled to match, with no behaviour change.
- **Theme**: dark is the default and its neutrals are near-black; body type is Barlow (was Poppins).
  Chart, status and medal tokens are unchanged.
- **Landing app** (`heritage_graph_landing`) uses the same palette, glass header, fonts and dark
  default as the main app.
- The Wikimedia direct-URL resolver moved from `PanoramaViewer` to
  `lib/heritage-museum/wikimedia-texture.ts`, shared with the street view.
- **Curation gate at projection time** — RDF projection now publishes only entities
  in a published review status (`apps.cidoc_data.publication_policy`), and the public
  `kg/graph` defaults to `scope=reviewed` (unauthenticated callers cannot request the
  unreviewed graph).
- CIDOC-CRM/LinkedArt interop scaffolding added to the ontology for LUX alignment
  (non-contributable classes, kept out of the contribution forms).

### Fixed
- Embedded-store read coherence: reads reuse the process's read-write handle so
  freshly written edges/deletes are visible (dev/embedded only).
- Cultural Entity contribution pipeline (serializer, projection, museum-renderable type).
- Green test suite (58 tests): publication-gated projection test and the LUX
  museum-projection mock updated for the sample path.

## [0.1.0] - 2026-06-10

Initial public baseline: CIDOC-CRM knowledge-graph engine on Oxigraph with a
contribution → review → projection pipeline, provenance partitions, SHACL,
RDFS/OWL inference, FAIR publishing (nanopublications, RDF-star, linksets,
VoID/DCAT, SKOS), and graph / atlas / museum frontends.
