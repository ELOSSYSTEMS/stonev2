# Phase 3 Shoppable Media Interaction Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes the first interaction-aware boundary for Stone V2 shoppable media.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **interactive shoppable media focus** proof rather than jumping directly to drawers or overlays.
- `Verified`: The smallest honest interaction-aware exception is limited progressive JS inside `project/assets/stone-runtime.js` only.
- `Verified`: The first interaction-aware proof should keep all interaction in-section and should avoid drawers, modals, overlays, and protected-surface edits.

## Exact Boundary Verdict

- `Verified`: The first safe interaction-aware shoppable-media boundary is one media-first section with exactly two markers that toggle an in-section focus state for two existing product outcomes.
- `Verified`: This proof stays distinct from the earlier static story because marker interaction now changes visible in-section state.
- `Verified`: This proof stays lighter than drawer-based or overlay-based shoppable media because the interaction remains local, bounded, and progressive.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **interactive shoppable media focus** surface consisting of:
  1. one primary still image surface
  2. exactly two interactive markers
  3. exactly two explicitly selected products rendered through the existing shared `stone-product-card` contract
  4. one bounded progressive-enhancement controller in `project/assets/stone-runtime.js`
  5. one neutral host template for validation
- `Verified`: This is materially distinct from the first shoppable-media story because marker interaction changes active focus rather than only linking statically.
- `Verified`: This remains lighter than drawers, modals, hotspot lookbooks, or bundle behavior.

## Exact JS And Surface Decision

- `Verified`: Limited progressive JS is authorized only in `project/assets/stone-runtime.js`.
- `Verified`: No protected-surface exception is authorized.
- `Verified`: No new snippet file is authorized.
- `Verified`: No block file is authorized.
- `Verified`: The existing `stone-product-card` snippet may be reused unchanged.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/sections/stone-shoppable-media-focus.liquid`
- `project/templates/page.stone-runtime-shoppable-media-focus.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first shoppable-media section with one still image and exactly two markers that toggle local focus state between two linked products.
- `Verified`: Keep product linkage editor-driven through exactly two explicit product settings.
- `Verified`: Reuse `stone-product-card` unchanged for the two linked products.
- `Verified`: Keep interaction local, bounded, and progressively enhanced.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Allowed Section Settings Shape

- `Verified`: One image picker setting for the primary media.
- `Verified`: Exactly two product settings.
- `Verified`: Exactly four range settings for marker positions, two x-axis and two y-axis values.
- `Verified`: Standard shell controls already normalized in earlier bounded families may remain allowed.

## Explicitly Disallowed Even Under This Boundary

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No new snippet file.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid`.
- `Verified`: No blocks, no drawers, no overlays, no modals, and no off-canvas behavior.
- `Verified`: No third product, no product loops, no recommendation behavior, no carousel, and no bundle behavior.
- `Verified`: No add-to-cart, no product forms, and no variant-selection behavior.
- `Verified`: No JS outside `project/assets/stone-runtime.js`.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm `stone-product-card` is reused unchanged.
- `Verified`: Confirm the section stays limited to one image setting, two product settings, and four marker-position range settings.
- `Verified`: Confirm JS changes stay local to the approved in-section focus behavior.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs drawers, overlays, modals, snippet edits, block files, a third product, loops, heavier interaction, or JS outside `project/assets/stone-runtime.js`.
- `Verified`: Stop if the exact six-file runtime scope is insufficient.
- `Verified`: Stop if the interaction no longer reads as a bounded in-section focus state.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that proves the first interaction-aware shoppable-media surface.
- `Verified`: The intended next execution target is `UNIT-111`.
