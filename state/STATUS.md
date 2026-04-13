# STATUS

## Snapshot

- `Verified`: Repo state: harness foundation populated
- `Verified`: Storefront runtime state: bounded merchandising is complete through verified curated-product-trio work, and the first shoppable-media family surface is now implemented inside the approved five-file runtime boundary.
- `Verified`: Architecture authority: the five documents under `docs/architecture/`
- `Verified`: Current active planning package: `workspace/plans/phase-3-shoppable-media-story-boundary-v1/`

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md`
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md`
- `Verified`: `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`
- `Verified`: `workspace/plans/phase-3-shoppable-media-story-boundary-v1/PLAN.v1.md`

## Constraints

- `Verified`: Liquid-first
- `Verified`: No frontend framework
- `Verified`: No web components
- `Verified`: Preserve RTL-native assumptions
- `Verified`: Preserve Hebrew-first assumptions
- `Verified`: Treat bilingual Hebrew and English editor support as a core architectural requirement
- `Verified`: Do not copy code or markup from external reference themes
- `Verified`: No JS is approved for the first shoppable-media proof
- `Verified`: No protected-surface or snippet exception is approved for the first shoppable-media proof

## Current Outcome

- `Verified`: `UNIT-107` implemented `project/sections/stone-shoppable-media-story.liquid`, `project/templates/page.stone-runtime-shoppable-media-story.json`, bounded CSS in `project/assets/stone-base.css`, and paired locale updates in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`.
- `Verified`: `UNIT-107` stayed inside the exact approved five runtime files and reused `stone-product-card` unchanged.
- `Verified`: `UNIT-107` stayed limited to one image picker, two product settings, and four marker-position range settings.
- `Inference`: The repo is ready for bounded verification of the first shoppable-media family proof.

## Risks And Blocks

- `Verified`: Runtime expansion remains paused pending `UNIT-108` verification.
- `Inference`: Any discovered need for JS, snippet changes, blocks, drawers, overlays, protected-surface edits, third-product expansion, or heavier interaction should trigger a new docs-only boundary decision rather than widening the approved slice.
