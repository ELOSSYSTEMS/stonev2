# Phase 3 Merchandising Foundation Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes the first broader execution boundary after the Phase 2 bounded proof frontier.
- `Verified`: It does not execute broader runtime build itself.

## Decision

- `Verified`: Carry forward one broader **merchandising foundation** slice as the first Phase 3 execution target.
- `Verified`: The first broader slice should establish one shared product-card contract and one featured-collection merchandising proof.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is no longer a single isolated proof section. It is one reusable merchandising foundation step consisting of:
  1. one shared product-card snippet contract
  2. one merchandising section that renders a selected collection through that shared card contract
  3. one neutral host template for validation
- `Verified`: This is materially distinct from Phase 2 because it introduces a reusable commerce-aware snippet surface and normalized merchandising structure rather than one isolated static or object-aware proof.
- `Verified`: This is the smallest honest broader step that can support future merchandising, collection support, and selective PDP support without pretending the old five-file micro-slice still fits.

## Preserved Constraints

- `Verified`: Liquid-first remains mandatory.
- `Verified`: No frontend framework remains mandatory.
- `Verified`: No web components remains mandatory.
- `Verified`: JS remains disallowed for this first broader slice.
- `Verified`: RTL-native and Hebrew-first assumptions remain mandatory.
- `Verified`: Bilingual editor coverage remains mandatory.
- `Verified`: No reference-theme code copying remains mandatory.
- `Verified`: Protected surfaces remain disallowed unless a later boundary explicitly changes that rule.

## Exact Newly Allowed Surfaces

- `Verified`: One new snippet file is allowed for the shared product-card contract.
- `Verified`: One merchandising section may use read-only collection selection and product iteration from the selected collection.
- `Verified`: The runtime boundary may now cover six runtime files rather than five.
- `Verified`: Native product links and native money rendering are allowed.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-product-card.liquid`
- `project/sections/stone-featured-collection-grid.liquid`
- `project/templates/page.stone-runtime-featured-collection-grid.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one shared product-card contract with restrained media, title, vendor, optional price, and native product-link behavior.
- `Verified`: Use that contract inside one collection-selected featured collection grid section.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Disallowed Even Under This Broader Boundary

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No second snippet file.
- `Verified`: No collection template edits.
- `Verified`: No product template edits.
- `Verified`: No add-to-cart, no product forms, no quick-add, no quick-view, no drawers, no overlays, no modals, and no variant selectors.
- `Verified`: No inventory messaging, no selling-plan behavior, no recommendation logic, no related-products logic, and no complementary-products logic.
- `Verified`: No sliders, no carousels, no tabs, no accordion behavior, and no campaign composition.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm the product-card snippet is reused by the merchandising section rather than duplicated inline.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.
- `Verified`: Confirm the section uses read-only collection/product access only.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs a second snippet, second section, second template, protected-surface edits, JS changes, collection-template edits, or product-template edits.
- `Verified`: Stop if implementation starts requiring add-to-cart, product forms, quick-add, quick-view, drawers, overlays, variant selectors, inventory messaging, recommendation behavior, or campaign composition.
- `Verified`: Stop if the shared product-card contract cannot stay restrained and reusable across future merchandising work.

## Readiness Verdict

- `Verified`: READY for one broader bounded implementation unit under this exact boundary.
- `Verified`: The intended next execution target is `UNIT-081`.
