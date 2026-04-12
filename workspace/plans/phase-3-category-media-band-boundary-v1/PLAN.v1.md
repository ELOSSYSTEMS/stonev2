# Phase 3 Category Media Band Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 after the verified category-entry spotlight slice.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **image-led category band** rather than forcing further variants into `stone-category-entry-grid`.
- `Verified`: The next honest step should establish one new collection-discovery section with materially different structure while reusing `stone-collection-card`.

## Exact Frontier Verdict

- `Verified`: The merchandising family has now proven two internal variant ranges: product-discovery grid plus spotlight, and category-entry grid plus spotlight.
- `Verified`: A further runtime step inside `stone-category-entry-grid` would likely collapse into stylistic churn rather than materially new merchandising structure.
- `Verified`: A second collection-discovery section is now justified because the current category-entry family has already proven its own internal range.
- `Verified`: The next honest expansion is one **image-led category band** that shifts the structure from card-grid discovery to editorial band-style collection discovery while staying collection-link-only and non-JS.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **category media band** consisting of:
  1. one image-led lead collection using the shared `stone-collection-card` contract with stronger emphasis
  2. one supporting collection entry using the same shared snippet
  3. one section structure that behaves as a band, not a grid
  4. one neutral host template for validation
- `Verified`: This is materially distinct from `stone-category-entry-grid` because the structural behavior shifts from even discovery grid to asymmetric editorial band composition.

## Preserved Constraints

- `Verified`: Liquid-first remains mandatory.
- `Verified`: No frontend framework remains mandatory.
- `Verified`: No web components remains mandatory.
- `Verified`: JS remains disallowed.
- `Verified`: RTL-native and Hebrew-first assumptions remain mandatory.
- `Verified`: Bilingual editor coverage remains mandatory.
- `Verified`: No reference-theme code copying remains mandatory.
- `Verified`: Protected surfaces remain disallowed.
- `Verified`: Pricing logic, product behavior, blocks, list settings, rails/carousels, shoppable-media behavior, and commerce actions remain disallowed.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-collection-card.liquid`
- `project/sections/stone-category-media-band.liquid`
- `project/templates/page.stone-runtime-category-media-band.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Create one new image-led category-band section for curated collection discovery.
- `Verified`: Reuse `stone-collection-card` as the only collection-card snippet surface.
- `Verified`: Keep the section limited to exactly two explicit collection settings, one lead and one supporting collection.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Disallowed Even Under This Next Boundary

- `Verified`: No new snippet file.
- `Verified`: No second new section file.
- `Verified`: No second template file.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No blocks, list settings, or new collection-query logic.
- `Verified`: No product data, pricing data, compare-at pricing, sale badging, urgency messaging, rails, carousels, or shoppable-media behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm `stone-category-media-band` reuses `stone-collection-card`.
- `Verified`: Confirm the section stays limited to exactly two explicit collection settings.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs blocks, list settings, a second snippet, extra section files, extra template files, protected-surface edits, JS changes, or heavier merchandising behavior.
- `Verified`: Stop if the category media band no longer reads as a structurally distinct editorial-band merchandising surface.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that broadens merchandising into an image-led category-band surface.
- `Verified`: The intended next execution target is `UNIT-093`.
