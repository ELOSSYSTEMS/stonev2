# Phase 4 Collection Host Product Grid Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-155` passed and admitted only this docs-only boundary package.
- `Verified`: This package does not authorize runtime edits by itself.
- `Verified`: This package states one exact future collection host/product-grid runtime boundary.

## Scope

- `Verified`: Define the smallest acceptable runtime file boundary for a native collection host and product-grid proof.
- `Verified`: Keep the boundary no-JS.
- `Verified`: Keep collection companion, archive controls, banner/explainer/editorial drift, PDP, search, cart, preset, and hardening domains out of scope.

## Evidence Reviewed

- `Verified`: `project/templates/` has no canonical `collection.json`.
- `Verified`: `project/templates/index.json` demonstrates the current canonical host template shape.
- `Verified`: `project/templates/page.stone-runtime-featured-collection-grid.json` demonstrates existing section-host JSON shape for collection-related reusable section proof.
- `Verified`: `project/sections/stone-featured-collection-grid.liquid` demonstrates product-card rendering through `stone-product-card`, but it is not a native collection host.
- `Verified`: `project/snippets/stone-product-card.liquid` already renders product cards with title, vendor, price, excerpt, image, and link, so `UNIT-157` does not need to edit it.

## Exact Future Runtime Boundary For UNIT-157

- `Verified`: `project/templates/collection.json`
- `Verified`: `project/sections/stone-main-collection.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Admitted Behavior For UNIT-157

- `Verified`: Render native collection title.
- `Verified`: Render native collection description when present.
- `Verified`: Render native collection product count.
- `Verified`: Render collection products through existing `stone-product-card` without editing that snippet.
- `Verified`: Render empty collection state.
- `Verified`: Render no-JS pagination when collection products exceed the page size.
- `Verified`: Render optional no-JS sort form using Shopify-native collection sort options.
- `Verified`: Add CSS for the collection host/product-grid proof.
- `Verified`: Add bilingual locale labels only for the admitted collection host section.

## Blocked Behavior For UNIT-157

- `Verified`: Editing `project/snippets/stone-product-card.liquid`.
- `Verified`: Editing `project/assets/stone-runtime.js`.
- `Verified`: Collection companion runtime work.
- `Verified`: Archive controls beyond native collection pagination/sort.
- `Verified`: Collection banner authority.
- `Verified`: Curated explainer/editorial drift.
- `Verified`: Navigation-aid strategy beyond the verified global shell links.
- `Verified`: PDP behavior.
- `Verified`: Search-results and predictive-search behavior.
- `Verified`: Cart drawer and checkout-sensitive behavior.
- `Verified`: Preset-pack realization.
- `Verified`: Phase 5 hardening.

## Required Future Checks For UNIT-157

- `Verified`: `git diff --name-only -- project`
- `Verified`: Confirm project diff is limited to the exact five-file boundary.
- `Verified`: JSON parsing for `project/templates/collection.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`
- `Verified`: Locale parity check for `sections.stone_main_collection`
- `Verified`: Confirm `project/assets/stone-runtime.js` is unchanged.
- `Verified`: Confirm `project/snippets/stone-product-card.liquid` is unchanged.
- `Verified`: Confirm no product, blog, article, search, list-collections, or cart template is added.
- `Verified`: `node HARNESS/checks/check-state-artifacts.mjs`
- `Verified`: `node HARNESS/checks/check-next-action-scope.mjs`
- `Verified`: `node HARNESS/checks/check-plan-exists.mjs`
- `Verified`: `node HARNESS/checks/check-handoff-completeness.mjs`
- `Verified`: `node HARNESS/checks/check-approval-state.mjs`
- `Verified`: `node HARNESS/checks/check-lock-state.mjs`
- `Verified`: `node HARNESS/checks/harness-check.mjs`

## Decision

- `Verified`: `UNIT-157` may implement one no-JS collection host/product-grid proof only inside the exact five-file runtime boundary above.
- `Verified`: No other runtime, template, JavaScript, companion, archive, PDP, search, cart, preset, or hardening surface is admitted.

## Readiness Verdict

- `Verified`: PASS. `UNIT-156` admits only `UNIT-157`, the bounded no-JS collection host/product-grid runtime proof implementation.
