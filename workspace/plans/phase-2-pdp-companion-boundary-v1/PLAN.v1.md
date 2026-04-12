# Phase 2 PDP Companion Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes one possible PDP companion expansion after the first verified collection-companion proof.
- `Verified`: It does not authorize any broader PDP, merchandising, or storefront runtime work beyond one exact bounded case.

## Decision

- `Verified`: Carry forward one bounded **product context card** proof as the only approved PDP companion candidate.
- `Verified`: Reject any broader PDP companion or commerce-surface expansion in this boundary.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one read-only product-aware support surface that renders a selected product's own title, optional featured image, optional vendor, optional product type, optional trimmed description excerpt, and one native product link.
- `Verified`: This is materially distinct from the verified article-highlights proof because it uses one product object rather than one blog object and does not render article lists.
- `Verified`: This is materially distinct from the verified collection context card because it is anchored to one product object rather than one collection object and does not render collection metadata or category-entry framing.
- `Verified`: This is not a buy box, featured product sales module, recommendation rail, variant selector, price block, media gallery, or product-card system.

## Preserved Rules

- `Verified`: Preserve one-section discipline.
- `Verified`: Preserve one-template discipline.
- `Verified`: Preserve a five-runtime-file boundary.
- `Verified`: Preserve non-JS execution.
- `Verified`: Preserve protected-surface prohibitions.
- `Verified`: Preserve `project/blocks/` prohibition.
- `Verified`: Preserve new-snippet prohibition.
- `Verified`: Preserve broader page-composition prohibition.

## Exact New Allowance

- `Verified`: Allow one bounded section file to perform read-only Liquid access to one product object selected by an explicit section setting.
- `Verified`: Allow that section to render product title, optional featured image, optional vendor, optional product type, optional trimmed description excerpt, and one native product link.
- `Verified`: Allow one restrained surface-style choice only if implemented inside the approved section schema and base CSS extension.
- `Verified`: Do not allow any other product-aware expansion in this boundary.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/sections/stone-product-context-card.liquid`
- `project/templates/page.stone-runtime-product-context-card.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Explicitly Disallowed Even Under This Boundary

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No edits to `project/snippets/stone-section-shell.liquid`.
- `Verified`: No files under `project/blocks/`.
- `Verified`: No new snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No product template edits.
- `Verified`: No buy box behavior, no form actions, no add-to-cart, no quick-add, no quick-view, no price blocks, no variant selectors, no inventory messaging, and no selling-plan behavior.
- `Verified`: No media gallery, no thumbnail system, no recommendation rail, no complementary products, no related products, and no product loops.
- `Verified`: No sliders, drawers, overlays, modals, tabs, accordions, comparison behavior, or campaign composition.
- `Verified`: No homepage composition, no collection companion behavior, no trust/support expansion, and no merchandising expansion.

## Intended Runtime Objective

- `Verified`: Prove one PDP-companion structure that is materially distinct from prior editorial, content/blog, and collection-aware proofs while staying lighter than commerce or recommendation systems.
- `Inference`: The section should behave like a product context note, not like a sales module.

## Exact Acceptance Frame For The Future Runtime Unit

- `Verified`: The future implementation must stay inside the exact five runtime files above.
- `Verified`: The future implementation must remain non-JS.
- `Verified`: The future implementation must reuse `stone-section-shell` unchanged.
- `Verified`: The future implementation must remain read-only with respect to the selected product object.
- `Verified`: The future implementation must not render price, variants, forms, inventory, gallery behavior, or recommendation behavior.
- `Verified`: The future implementation must remain materially distinct from merchandising, collection-context, article-highlights, content-card-strip, and story-split proofs.

## Stop Conditions

- `Verified`: Stop if the future slice needs any runtime file outside the approved five runtime files.
- `Verified`: Stop if the future slice needs protected-surface edits, `project/blocks/`, a new snippet, a second section, or a second template.
- `Verified`: Stop if the future slice starts requiring JS, buy-box behavior, forms, add-to-cart, quick-add, quick-view, price blocks, variant selectors, inventory messaging, media galleries, recommendations, product loops, sliders, drawers, overlays, accordions, tabs, or broader composition.
- `Verified`: Stop if the future slice cannot stay clearly distinct from commerce modules or from the already verified editorial/content/blog/collection proofs.
- `Verified`: Stop if the future slice drifts into real PDP composition, campaign framing, homepage composition, collection companion behavior, trust/support expansion, or merchandising expansion.

## Readiness Verdict

- `Verified`: READY for one separately governed bounded implementation unit under this boundary.
- `Verified`: The intended next execution target is `UNIT-076`.
