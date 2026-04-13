# Phase 3 Shoppable Media Overlay Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes the first overlay-style boundary for Stone V2 shoppable media.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **shoppable media overlay** proof rather than escalating directly to modal, quick-view, or heavier commerce interaction.
- `Verified`: The smallest honest overlay-style exception remains limited progressive JS inside `project/assets/stone-runtime.js` only.
- `Verified`: The first overlay-style proof must keep all interaction section-scoped, progressive, and lighter than global modal or quick-view behavior.

## Exact Boundary Verdict

- `Verified`: The first safe overlay-style shoppable-media boundary is one media-first section with exactly two markers that open one section-scoped layered overlay panel for exactly two explicitly selected products.
- `Verified`: This proof stays distinct from the earlier drawer surface because product context now appears as a layered reveal over the media area rather than a detached lower drawer state.
- `Verified`: This proof stays lighter than modal or global quick-view systems because the overlay remains inside the section box and does not require document-level locking or protected-surface changes.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **shoppable media overlay** surface consisting of:
  1. one primary still image surface
  2. exactly two interactive markers
  3. exactly two explicitly selected products rendered through the existing shared `stone-product-card` contract
  4. one section-scoped layered overlay panel that opens over the media area for the active product context and may close back to a neutral state
  5. one bounded progressive-enhancement controller in `project/assets/stone-runtime.js`
  6. one neutral host template for validation
- `Verified`: This is materially distinct from the drawer proof because the active product state becomes layered over the media surface.
- `Verified`: This remains lighter than modal, quick-view, recommendation overlay, or add-to-cart overlay behavior.

## Exact JS And Surface Decision

- `Verified`: Limited progressive JS is authorized only in `project/assets/stone-runtime.js`.
- `Verified`: No protected-surface exception is authorized.
- `Verified`: No new snippet file is authorized.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid` are authorized.
- `Verified`: No block file is authorized.
- `Verified`: The existing `stone-product-card` snippet may be reused unchanged.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/sections/stone-shoppable-media-overlay.liquid`
- `project/templates/page.stone-runtime-shoppable-media-overlay.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first shoppable-media section with one still image and exactly two markers that open a section-scoped layered overlay panel for two linked products.
- `Verified`: Keep product linkage editor-driven through exactly two explicit product settings.
- `Verified`: Reuse `stone-product-card` unchanged for the two linked products.
- `Verified`: Keep the overlay section-scoped, progressively enhanced, and closable back to a neutral media state.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Allowed Section Settings Shape

- `Verified`: One image picker setting for the primary media.
- `Verified`: Exactly two product settings.
- `Verified`: Exactly four range settings for marker positions, two x-axis and two y-axis values.
- `Verified`: Standard shell controls already normalized in earlier bounded families may remain allowed.

## Explicitly Allowed Interaction Behavior

- `Verified`: One active layered overlay state at a time.
- `Verified`: Marker activation may open the overlay and switch the active product context.
- `Verified`: One local close control may return the section to a neutral closed state.
- `Verified`: The overlay may remain visible by default only when JS is unavailable if the fallback remains section-scoped and non-blocking.

## Explicitly Disallowed Even Under This Boundary

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No new snippet file.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid`.
- `Verified`: No modal semantics, no dialog API requirement, no body scroll lock, no off-canvas system, and no document-level overlay container.
- `Verified`: No third product, no product loops, no recommendation behavior, no carousel, and no bundle behavior.
- `Verified`: No add-to-cart, no product forms, no quick-add, no quick-view, and no variant-selection behavior.
- `Verified`: No JS outside `project/assets/stone-runtime.js`.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm `stone-product-card` is reused unchanged.
- `Verified`: Confirm the section stays limited to one image setting, two product settings, and four marker-position range settings.
- `Verified`: Confirm JS changes stay local to the approved section-scoped overlay behavior.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs modal semantics, dialog API, body scroll lock, document-level overlay containers, snippet edits, block files, a third product, loops, heavier commerce actions, or JS outside `project/assets/stone-runtime.js`.
- `Verified`: Stop if the exact six-file runtime scope is insufficient.
- `Verified`: Stop if the overlay no longer reads as a bounded section-scoped layered reveal and instead becomes a quick-view or modal system.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that proves the first overlay-style shoppable-media surface.
- `Verified`: The intended next execution target is `UNIT-119`.
