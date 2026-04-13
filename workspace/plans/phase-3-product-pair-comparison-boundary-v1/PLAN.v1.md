# Phase 3 Product Pair Comparison Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 after the verified featured-product showcase slice.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **product pair comparison** step rather than pausing immediately or forcing a heavier merchandising expansion.
- `Verified`: The next honest step should establish one comparison-friendly merchandising section that renders exactly two selected products through the shared `stone-product-card` contract.

## Exact Frontier Verdict

- `Verified`: The merchandising family has now proven collection-led discovery, category-led discovery, image-led category promotion, and single-product showcase behavior.
- `Inference`: The remaining honest gap inside the current non-JS merchandising lane is a restrained comparison-friendly product surface.
- `Verified`: A product pair comparison step is more structurally distinct than another showcase variant and lighter than curated rails, recommendation logic, or shoppable-media behavior.
- `Verified`: This keeps Stone V2 inside the merchandising family while avoiding premature drift into compare tables, recommendation engines, carousels, or heavier commerce behavior.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **product pair comparison** consisting of:
  1. one shared `stone-product-card` contract with restrained comparison emphasis
  2. one merchandising section that renders exactly two explicitly selected products
  3. one neutral host template for validation
- `Verified`: This is materially distinct from the existing featured-collection grid because it compares two selected products instead of looping through a selected collection.
- `Verified`: This is materially distinct from the featured-product showcase because it uses paired product contrast rather than single-product focus.
- `Verified`: This remains lighter than a true comparison table because it does not introduce attribute matrices, sticky behavior, or expanded commerce logic.

## Preserved Constraints

- `Verified`: Liquid-first remains mandatory.
- `Verified`: No frontend framework remains mandatory.
- `Verified`: No web components remains mandatory.
- `Verified`: JS remains disallowed.
- `Verified`: RTL-native and Hebrew-first assumptions remain mandatory.
- `Verified`: Bilingual editor coverage remains mandatory.
- `Verified`: No reference-theme code copying remains mandatory.
- `Verified`: Protected surfaces remain disallowed.
- `Verified`: Add-to-cart, product forms, quick-add, quick-view, drawers, overlays, modals, variant selectors, inventory messaging, recommendation logic, and template rewrites remain disallowed.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-product-card.liquid`
- `project/sections/stone-product-pair-comparison.liquid`
- `project/templates/page.stone-runtime-product-pair-comparison.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first merchandising section that compares exactly two selected products.
- `Verified`: Reuse `stone-product-card` as the only product-card snippet surface.
- `Verified`: Keep product selection editor-driven through exactly two explicit product settings.
- `Verified`: Allow restrained paired emphasis, excerpt support, and native product-link behavior, but no commerce actions.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Disallowed Even Under This Next Boundary

- `Verified`: No new snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No blocks, no list settings, and no product loops.
- `Verified`: No compare-at pricing, sale badging, urgency messaging, recommendation behavior, rails, carousels, or shoppable-media behavior.
- `Verified`: No comparison table, no attribute matrix, and no sticky comparison controls.
- `Verified`: No add-to-cart, no product forms, and no variant-selection behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm the section reuses `stone-product-card` rather than duplicating product markup inline.
- `Verified`: Confirm the section stays limited to exactly two explicit product settings.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs blocks, list settings, product loops, a second section, a second template, protected-surface edits, JS changes, or heavier commerce behavior.
- `Verified`: Stop if the product pair comparison no longer reads as a distinct comparison-friendly merchandising surface.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that broadens merchandising into a paired-product comparison surface.
- `Verified`: The intended next execution target is `UNIT-099`.
