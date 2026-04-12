# Phase 3 Category Entry Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 after the verified spotlight extension of the merchandising family.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **category-entry merchandising** step rather than forcing a third variant into `stone-featured-collection-grid`.
- `Verified`: The next honest step should establish one shared collection-card contract and one category-entry grid section for curated collection discovery.

## Exact Frontier Verdict

- `Verified`: The verified spotlight variant proves the existing merchandising family can already grow through shared variants without immediate section sprawl.
- `Verified`: A third runtime step inside `stone-featured-collection-grid` would likely collapse into style churn rather than a materially new merchandising surface.
- `Verified`: The next honest expansion should change merchandising object type from products-in-one-collection to curated collection-entry discovery.
- `Verified`: This keeps Stone V2 inside the merchandising family while avoiding premature drift into shoppable media, recommendation systems, or heavier commerce behavior.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **category-entry grid** consisting of:
  1. one shared collection-card snippet contract
  2. one merchandising section that renders exactly three selected collections through that shared card contract
  3. one neutral host template for validation
- `Verified`: This is materially distinct from the existing featured-collection grid because it merchandises curated collection destinations rather than products from one selected collection.
- `Verified`: This is the smallest honest next step that broadens merchandising coverage without forcing product-card overfitting or requiring heavier commerce behavior.

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

## Exact Newly Allowed Surfaces

- `Verified`: One new snippet file is allowed for the shared collection-card contract.
- `Verified`: One new merchandising section file is allowed for curated category-entry discovery.
- `Verified`: One new neutral host template is allowed for validation.
- `Verified`: The runtime boundary remains six runtime files total.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-collection-card.liquid`
- `project/sections/stone-category-entry-grid.liquid`
- `project/templates/page.stone-runtime-category-entry-grid.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one shared collection-card contract with restrained image, title, short description, and native collection-link behavior.
- `Verified`: Use that contract inside one category-entry merchandising section that renders exactly three selected collections.
- `Verified`: Keep collection selection editor-driven through three explicit collection settings rather than block-system expansion.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Disallowed Even Under This Next Boundary

- `Verified`: No second snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No blocks, no collection lists, and no dynamic collection-query logic beyond the three explicit selected collections.
- `Verified`: No edits to collection templates or product templates.
- `Verified`: No product-card logic, no pricing logic, no compare-at pricing, no sale badging, no urgency messaging, no product recommendations, and no commerce actions.
- `Verified`: No rails, no sliders, no carousels, and no shoppable-media behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm the collection-card snippet is reused by the category-entry section rather than duplicated inline.
- `Verified`: Confirm the section stays limited to exactly three explicit collection settings.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs blocks, list settings, a second snippet, a second section, a second template, protected-surface edits, JS changes, template rewrites, or heavier commerce behavior.
- `Verified`: Stop if the collection-card contract cannot stay restrained without product data, pricing data, or campaign behavior.
- `Verified`: Stop if the category-entry step no longer reads as a distinct merchandising surface.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that broadens merchandising from product discovery into curated collection-entry discovery.
- `Verified`: The intended next execution target is `UNIT-087`.
