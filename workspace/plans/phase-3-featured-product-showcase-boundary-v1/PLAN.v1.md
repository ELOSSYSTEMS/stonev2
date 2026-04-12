# Phase 3 Featured Product Showcase Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 after the verified category media band slice.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **featured product showcase** step rather than forcing more category-discovery variants.
- `Verified`: The next honest step should establish one merchandising section that spotlights a single selected product through the shared `stone-product-card` contract.

## Exact Frontier Verdict

- `Verified`: The merchandising family has now proven three distinct structural lanes: product-discovery collection grids, collection-entry discovery grids, and image-led category bands.
- `Verified`: Another category-discovery runtime step would likely collapse into stylistic churn rather than materially new merchandising structure.
- `Verified`: The next honest expansion should shift back to product merchandising, but through a single featured-product showcase rather than a product loop or comparison surface.
- `Verified`: This keeps Stone V2 inside the merchandising family while avoiding premature drift into compare tables, recommendation logic, or heavier commerce behavior.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **featured product showcase** consisting of:
  1. one shared `stone-product-card` contract with restrained showcase emphasis
  2. one merchandising section that renders exactly one selected product
  3. one neutral host template for validation
- `Verified`: This is materially distinct from the existing featured-collection grid because it merchandises one selected product instead of products from a selected collection.
- `Verified`: This is materially distinct from the earlier product-context-card proof because it belongs to the homepage-first merchandising family, reuses the broader shared product-card contract, and is framed as a showcase surface rather than a PDP-companion informational card.

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
- `project/sections/stone-featured-product-showcase.liquid`
- `project/templates/page.stone-runtime-featured-product-showcase.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first merchandising section that spotlights exactly one selected product.
- `Verified`: Reuse `stone-product-card` as the only product-card snippet surface.
- `Verified`: Keep product selection editor-driven through one explicit product setting.
- `Verified`: Allow restrained showcase emphasis, excerpt support, and native product-link behavior, but no commerce actions.
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
- `Verified`: No add-to-cart, no product forms, and no variant-selection behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm the section reuses `stone-product-card` rather than duplicating product markup inline.
- `Verified`: Confirm the section stays limited to exactly one explicit product setting.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs blocks, list settings, product loops, a second section, a second template, protected-surface edits, JS changes, or heavier commerce behavior.
- `Verified`: Stop if the featured product showcase no longer reads as a distinct merchandising surface.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that broadens merchandising into a single-product showcase surface.
- `Verified`: The intended next execution target is `UNIT-096`.
