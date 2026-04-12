# Phase 3 Post-Foundation Merchandising Frontier Review v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It re-evaluates Stone V2 immediately after the verified first broader merchandising foundation slice.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **in-family merchandising variant** step rather than pausing or creating a second merchandising section file.
- `Verified`: The next honest step should expand the verified `stone-featured-collection-grid` family through one restrained promotion-first spotlight mode that still reuses the shared `stone-product-card` contract.

## Exact Frontier Verdict

- `Verified`: `UNIT-081` and `UNIT-082` proved the minimum broader merchandising foundation successfully.
- `Verified`: The strongest next question is no longer whether merchandising work is allowed at all. The question is whether Stone V2 should grow the family through shared variants or immediately sprawl into new files and heavier commerce behavior.
- `Verified`: The correct answer is to grow the existing merchandising family first.
- `Verified`: A second section file is not yet justified because the section-family ledger explicitly prefers presets and variants while structure remains grid, rail, or comparison-driven.
- `Verified`: A quick jump to recommendations, quick-add, product forms, shoppable media, or collection-template coupling would be premature and would weaken the newly verified foundation.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one **promotion-first spotlight variant** inside the existing `stone-featured-collection-grid` family.
- `Verified`: This remains materially distinct from `UNIT-081` because it changes the merchandising emphasis from category-first summary plus uniform grid into one lead-product spotlight plus secondary supporting cards.
- `Verified`: This remains architecturally coherent because it grows the existing merchandising family through a variant rather than inventing a second section file.
- `Verified`: This is the smallest honest next step that proves the shared product-card contract can survive multiple merchandising emphases without widening into heavier commerce behavior.

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

- `Verified`: No new runtime surface is introduced beyond the already verified merchandising foundation files.
- `Verified`: The next runtime unit may modify the existing shared snippet and existing merchandising section to add one new layout-emphasis mode.
- `Verified`: The next runtime unit may update the existing validation template defaults so the new variant can be validated directly.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/snippets/stone-product-card.liquid`
- `project/sections/stone-featured-collection-grid.liquid`
- `project/templates/page.stone-runtime-featured-collection-grid.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Add one merchandising layout setting to `stone-featured-collection-grid` that enables a promotion-first spotlight composition.
- `Verified`: Keep collection selection read-only and keep product sourcing limited to the selected collection.
- `Verified`: Reuse `stone-product-card` rather than duplicating product markup inline.
- `Verified`: Allow the shared card contract to support one restrained emphasis treatment suitable for a lead product without widening into offer logic, campaign logic, or commerce actions.
- `Verified`: Keep the validation template neutral and use it only to expose the new variant for bounded verification.

## Explicitly Disallowed Even Under This Next Boundary

- `Verified`: No second snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No edits to collection templates or product templates.
- `Verified`: No product badges, no compare-at pricing logic, no sale labeling, no campaign countdowns, and no promotional urgency logic.
- `Verified`: No rails, no sliders, no carousels, no drawers, no hotspots, and no shoppable-media behavior.
- `Verified`: No add-to-cart, no product forms, no quick-add, no quick-view, no modal product details, and no variant selectors.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact same six approved runtime files.
- `Verified`: Confirm `stone-product-card` remains the only product-card snippet surface.
- `Verified`: Confirm the spotlight mode remains selected-collection and read-only.
- `Verified`: Confirm the new variant does not introduce forbidden commerce terms or protected-surface edits.
- `Verified`: Confirm locale parity remains intact.
- `Verified`: Confirm the existing merchandising family becomes more capable without spawning a second merchandising section file.

## Stop Conditions

- `Verified`: Stop if implementation needs any runtime file outside the approved six runtime files.
- `Verified`: Stop if implementation needs a second snippet, second section, second template, protected-surface edits, JS changes, template rewrites, or block-system expansion.
- `Verified`: Stop if the spotlight variant cannot stay coherent without compare-at pricing, badging, urgency messaging, quick-add behavior, rails/carousels, or shoppable-media interaction.
- `Verified`: Stop if the variant no longer reads as a family extension and instead becomes a materially separate section concept.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that extends the verified merchandising family through a spotlight variant.
- `Verified`: The intended next execution target is `UNIT-084`.
