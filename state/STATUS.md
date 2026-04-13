# STATUS

## Snapshot

- `Verified`: Repo state: harness foundation populated
- `Verified`: Storefront runtime state: bounded merchandising is complete, the first static shoppable-media proof is verified, the first interaction-aware shoppable-media focus proof is verified, the first drawer-style shoppable-media proof is verified, and the first overlay-style shoppable-media surface is now implemented inside the approved six-file runtime boundary.
- `Verified`: Architecture authority: the five documents under `docs/architecture/`
- `Verified`: Current active planning package: `workspace/plans/phase-3-shoppable-media-overlay-boundary-v1/`

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md`
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md`
- `Verified`: `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`
- `Verified`: `workspace/plans/phase-3-shoppable-media-overlay-boundary-v1/PLAN.v1.md`

## Constraints

- `Verified`: Liquid-first
- `Verified`: No frontend framework
- `Verified`: No web components
- `Verified`: Preserve RTL-native assumptions
- `Verified`: Preserve Hebrew-first assumptions
- `Verified`: Treat bilingual Hebrew and English editor support as a core architectural requirement
- `Verified`: Do not copy code or markup from external reference themes
- `Verified`: JS is allowed only in `project/assets/stone-runtime.js` for this proof
- `Verified`: No protected-surface or snippet exception is approved for this proof

## Current Outcome

- `Verified`: `UNIT-119` implemented `project/sections/stone-shoppable-media-overlay.liquid`, `project/templates/page.stone-runtime-shoppable-media-overlay.json`, bounded CSS in `project/assets/stone-base.css`, local progressive JS in `project/assets/stone-runtime.js`, and paired locale updates in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`.
- `Verified`: `UNIT-119` stayed inside the exact approved six runtime files and reused `stone-product-card` unchanged.
- `Verified`: `UNIT-119` stayed limited to one image picker, two product settings, and four marker-position range settings.
- `Inference`: The repo is ready for bounded verification of the first overlay-style shoppable-media family proof.

## Risks And Blocks

- `Verified`: Runtime expansion remains paused pending `UNIT-120` verification.
- `Inference`: Any discovered need for modal semantics, dialog API, document-level overlay containers, snippet changes, blocks, third-product expansion, loops, or JS outside `project/assets/stone-runtime.js` should trigger a new docs-only boundary decision rather than widening the approved slice.
