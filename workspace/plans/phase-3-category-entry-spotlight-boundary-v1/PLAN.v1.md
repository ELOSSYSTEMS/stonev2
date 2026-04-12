# Phase 3 Category Entry Spotlight Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 after the verified category-entry merchandising slice.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **category-entry spotlight variant** rather than opening a second collection-discovery section or shifting into heavier merchandising behavior.
- `Verified`: The next honest step should extend `stone-category-entry-grid` with one promotion-first spotlight mode while reusing `stone-collection-card`.

## Exact Frontier Verdict

- `Verified`: The verified category-entry slice proves Stone V2 can now merchandise curated collection destinations as a distinct object domain beside product discovery.
- `Verified`: The current category-entry surface has only one balanced grid mode.
- `Verified`: The next honest in-family step is one spotlight variant that emphasizes a lead collection while preserving the same shared collection-card contract.
- `Verified`: Opening a second collection-discovery section now would be premature because the current family has not yet proven its own internal variant range.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **spotlight layout mode** inside `stone-category-entry-grid` consisting of:
  1. one lead collection rendered with stronger visual emphasis through `stone-collection-card`
  2. up to two supporting collection entries rendered through the same shared snippet
  3. one editor-facing `layout_mode` setting that switches between balanced grid and spotlight mode
- `Verified`: This is materially distinct from the verified balanced grid because it changes hierarchy, emphasis, and entry rhythm without changing the underlying collection-discovery object type.

## Preserved Constraints

- `Verified`: Liquid-first remains mandatory.
- `Verified`: No frontend framework remains mandatory.
- `Verified`: No web components remains mandatory.
- `Verified`: JS remains disallowed.
- `Verified`: RTL-native and Hebrew-first assumptions remain mandatory.
- `Verified`: Bilingual editor coverage remains mandatory.
- `Verified`: No reference-theme code copying remains mandatory.
- `Verified`: Protected surfaces remain disallowed.
- `Verified`: Pricing logic, product-card behavior, blocks, list settings, rails/carousels, shoppable-media behavior, and commerce actions remain disallowed.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-collection-card.liquid`
- `project/sections/stone-category-entry-grid.liquid`
- `project/templates/page.stone-runtime-category-entry-grid.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Add one `layout_mode` setting with `grid` and `spotlight` options.
- `Verified`: Keep the section limited to the same three explicit collection settings.
- `Verified`: Reuse `stone-collection-card` as the only collection-card snippet surface.
- `Verified`: Allow restrained lead-card emphasis and supporting-card hierarchy, but no new data sources and no new runtime files.

## Explicitly Disallowed Even Under This Next Boundary

- `Verified`: No new snippet file.
- `Verified`: No new section file.
- `Verified`: No new template file.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No blocks, list settings, or new collection-query logic.
- `Verified`: No product data, pricing data, compare-at pricing, sale badging, urgency messaging, rails, carousels, or shoppable-media behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact six approved runtime files.
- `Verified`: Confirm `stone-category-entry-grid` still reuses `stone-collection-card`.
- `Verified`: Confirm `layout_mode` is limited to balanced grid and spotlight.
- `Verified`: Confirm the section still exposes exactly three explicit collection settings.
- `Verified`: Confirm JS remains untouched.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs blocks, list settings, a second snippet, a second section, a second template, protected-surface edits, JS changes, or heavier merchandising behavior.
- `Verified`: Stop if the spotlight variant no longer reads as an in-family extension of the verified category-entry surface.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that deepens the category-entry family through a spotlight variant.
- `Verified`: The intended next execution target is `UNIT-090`.
