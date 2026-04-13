# Phase 3 Shoppable Media Story Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes the first controlled boundary for Stone V2 shoppable media.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **shoppable media story** proof rather than pausing shoppable media entirely.
- `Verified`: The first honest shoppable-media proof should remain non-JS and media-first.
- `Verified`: The first proof should avoid drawers, hotspots with reveal logic, and any protected-surface or interaction substrate expansion.

## Exact Boundary Verdict

- `Verified`: The first safe shoppable-media boundary is one image-first story section that links restrained static hotspot markers to exactly two explicitly selected products rendered below the media.
- `Verified`: This proof stays distinct from merchandising because the primary structure is one editorial media surface with product linkage layered onto it.
- `Verified`: This proof stays lighter than hotspot drawers, interactive lookbooks, or image-first bundle builders.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **shoppable media story** consisting of:
  1. one primary still image surface
  2. exactly two static hotspot markers positioned by editor settings
  3. exactly two explicitly selected products rendered through the existing shared `stone-product-card` contract
  4. one neutral host template for validation
- `Verified`: This is materially distinct from the merchandising family because media is the primary structural spine and the product surfaces are subordinate linked outcomes.
- `Verified`: This is materially distinct from a hotspot drawer pattern because markers only provide native link behavior and do not open overlays or drawers.

## Exact JS And Surface Decision

- `Verified`: No JS is authorized for this first proof.
- `Verified`: No protected-surface exception is authorized for this first proof.
- `Verified`: No new snippet file is authorized for this first proof.
- `Verified`: No block file is authorized for this first proof.
- `Verified`: The existing `stone-product-card` snippet may be reused unchanged.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/sections/stone-shoppable-media-story.liquid`
- `project/templates/page.stone-runtime-shoppable-media-story.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first shoppable-media section with one editor-selected still image and exactly two static linked markers.
- `Verified`: Keep marker behavior native and non-JS.
- `Verified`: Keep product linkage editor-driven through exactly two explicit product settings.
- `Verified`: Reuse `stone-product-card` unchanged for the two linked products.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Allowed Section Settings Shape

- `Verified`: One image picker setting for the primary media.
- `Verified`: Exactly two product settings.
- `Verified`: Exactly four range settings for marker positions, two x-axis and two y-axis values.
- `Verified`: Standard shell controls already normalized in earlier bounded families may remain allowed.

## Explicitly Disallowed Even Under This Boundary

- `Verified`: No JS edits.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No new snippet file.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid`.
- `Verified`: No blocks, no drawers, no overlays, no modals, and no hotspot reveal logic.
- `Verified`: No third product, no product loops, no recommendation behavior, no carousel, and no shoppable-media bundle behavior.
- `Verified`: No add-to-cart, no product forms, and no variant-selection behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact five approved runtime files.
- `Verified`: Confirm `stone-product-card` is reused unchanged.
- `Verified`: Confirm the section stays limited to one image setting, two product settings, and four marker-position range settings.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs JS, protected-surface edits, drawer behavior, overlay behavior, snippet edits, block files, a third product, loops, or heavier shoppable-media interaction.
- `Verified`: Stop if the media-first story no longer reads as a distinct shoppable-media surface.
- `Verified`: Stop if the exact five-file runtime scope is insufficient.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that proves the first non-JS shoppable-media story surface.
- `Verified`: The intended next execution target is `UNIT-107`.
