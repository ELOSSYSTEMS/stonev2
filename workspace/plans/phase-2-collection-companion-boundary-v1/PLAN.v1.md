# Phase 2 Collection Companion Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes one possible collection-companion expansion after the first verified object-aware content/blog proof.
- `Verified`: It does not authorize any broader collection, merchandising, or storefront runtime work beyond one exact bounded case.

## Decision

- `Verified`: Carry forward one bounded **collection context card** proof as the only approved collection-companion candidate.
- `Verified`: Reject any broader collection-companion or merchandising expansion in this boundary.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one read-only collection-aware support surface that renders a selected collection's own title, optional image, optional description excerpt, product count, and one native collection link.
- `Verified`: This is materially distinct from the verified article-highlights proof because it uses one collection object rather than one blog object and does not render article lists.
- `Verified`: This is materially distinct from story/editorial and content-card proofs because the structure is anchored to collection metadata and a single category-entry action rather than manual narrative cards or editorial layouts.
- `Verified`: This is not a merchandising rail, featured-collection product grid, toolbar, filter bar, or archive surface.

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

- `Verified`: Allow one bounded section file to perform read-only Liquid access to one collection object selected by an explicit section setting.
- `Verified`: Allow that section to render collection title, optional collection image, optional trimmed collection description, collection product count, and one native collection link.
- `Verified`: Allow one restrained surface-style choice only if implemented inside the approved section schema and base CSS extension.
- `Verified`: Do not allow any other collection-aware expansion in this boundary.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/sections/stone-collection-context-card.liquid`
- `project/templates/page.stone-runtime-collection-context-card.json`
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
- `Verified`: No collection template edits.
- `Verified`: No product loops, product cards, quick-add, quick-view, price blocks, badges, or merchandising cards.
- `Verified`: No collection filters, sorting, tags, pagination, search, toolbar behavior, or archive controls.
- `Verified`: No sliders, drawers, overlays, modals, tabs, accordions, or comparison behavior.
- `Verified`: No campaign composition, no homepage composition, no PDP companion behavior, and no trust/support expansion.

## Intended Runtime Objective

- `Verified`: Prove one collection-companion structure that is materially distinct from prior static editorial and content-card proofs while staying lighter than merchandising.
- `Inference`: The section should behave like a category-entry context card, not like a collection page system.

## Exact Acceptance Frame For The Future Runtime Unit

- `Verified`: The future implementation must stay inside the exact five runtime files above.
- `Verified`: The future implementation must remain non-JS.
- `Verified`: The future implementation must reuse `stone-section-shell` unchanged.
- `Verified`: The future implementation must remain read-only with respect to the selected collection object.
- `Verified`: The future implementation must not iterate products or implement archive controls.
- `Verified`: The future implementation must remain materially distinct from merchandising, article-highlights, content-card-strip, and story-split proofs.

## Stop Conditions

- `Verified`: Stop if the future slice needs any runtime file outside the approved five runtime files.
- `Verified`: Stop if the future slice needs protected-surface edits, `project/blocks/`, a new snippet, a second section, or a second template.
- `Verified`: Stop if the future slice starts requiring JS, product loops, product cards, filters, sorting, tags, pagination, search, toolbar behavior, sliders, drawers, overlays, accordions, tabs, or commerce semantics.
- `Verified`: Stop if the future slice cannot stay clearly distinct from merchandising or from the already verified editorial/content/blog proofs.
- `Verified`: Stop if the future slice drifts into real collection-page composition, campaign framing, homepage composition, PDP companion behavior, or trust/support expansion.

## Readiness Verdict

- `Verified`: READY for one separately governed bounded implementation unit under this boundary.
- `Verified`: The intended next execution target is `UNIT-072`.
