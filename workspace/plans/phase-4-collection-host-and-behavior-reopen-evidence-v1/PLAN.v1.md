# Phase 4 Collection Host And Behavior Reopen Evidence v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: Homepage proof, shell/navigation boundary, shell/navigation runtime proof, and shell/navigation verification have passed.
- `Verified`: This package does not authorize runtime edits by itself.

## Scope

- `Verified`: Reassess collection host surfaces, product-grid behavior, filter/sort/paginate behavior, and collection companion fit.
- `Verified`: Use the corpus and prior collection support strip decisions without pretending they already authorize runtime.
- `Verified`: Decide whether one exact collection reopen lane is justified and how narrow it must be.

## Evidence Reviewed

- `Verified`: `project/templates/` has no canonical `collection.json` host.
- `Verified`: `project/sections/stone-featured-collection-grid.liquid` renders selected collection products through `stone-product-card`, but it is a reusable section proof and not a native collection host.
- `Verified`: `project/snippets/stone-product-card.liquid` exists and can render product cards with vendor and price.
- `Verified`: `project/snippets/stone-collection-card.liquid` exists and can render collection cards.
- `Verified`: `shopify_theme_dom/allbirds/elements/www_allbirds_com_collections_mens.md` shows a collection header followed by a product-grid section with filter and sort language.
- `Verified`: `shopify_theme_dom/athora/elements/athora_theme_myshopify_com_collections_frontpage.md` shows a collection banner followed by a product-grid section with filter and sort language.
- `Verified`: `shopify_theme_dom/dynamic-preview/elements/dynamic_preview_myshopify_com_collections_all.md` shows collection/all product-grid surfaces with filter and sort language.
- `Verified`: Prior Phase 3 state kept broader collection companion, archive controls, collection-template rewrites, banner authority, navigation-system behavior, broader JS, heavier commerce, and product-card behavior reuse fail-closed.

## Option Comparison

### Keep Collection Blocked

- `Verified`: This option preserves the previous fail-closed posture.
- `Inference`: It is now too conservative because homepage and global shell blockers have been resolved, and the corpus plus existing product-card primitives provide enough evidence to define a narrow next boundary.

### Reopen Narrow Collection Host/Product-Grid Boundary

- `Verified`: This option can stay docs-only and define one later boundary before implementation.
- `Verified`: It can admit only a canonical collection host, native collection title/description context, basic product-grid rendering through existing product-card primitives, and native pagination or limited native filter/sort form review.
- `Verified`: It can keep collection companion, archive controls, banner/explainer/editorial drift, navigation strategy, PDP, search, cart, preset, and hardening domains blocked.
- `Inference`: This is the strongest next lane.

### Reopen Broad Collection Companion Behavior

- `Verified`: This option would combine collection host, product grid, support-strip, banner, explainer, navigation aids, archive controls, and product-card behavior reuse.
- `Inference`: It repeats the Phase 3 drift risk and exceeds the current evidence.
- `Verified`: This option remains rejected.

## Admissible Next Boundary Surfaces

- `Verified`: Canonical collection host boundary definition.
- `Verified`: Native collection title and description context.
- `Verified`: Basic collection product grid using existing `stone-product-card` semantics.
- `Verified`: Empty collection state.
- `Verified`: Pagination boundary definition.
- `Verified`: Filter/sort boundary review only if it stays Shopify-native and no-JS.

## Still Blocked Surfaces

- `Verified`: Direct collection runtime implementation.
- `Verified`: Collection companion runtime work.
- `Verified`: Archive controls beyond a later explicitly stated boundary.
- `Verified`: Collection banner authority.
- `Verified`: Curated collection explainer/editorial drift.
- `Verified`: Navigation-aid strategy beyond already verified global shell links.
- `Verified`: PDP behavior.
- `Verified`: Search-results and predictive-search behavior.
- `Verified`: Cart drawer and checkout-sensitive behavior.
- `Verified`: Preset-pack realization.
- `Verified`: Phase 5 hardening.
- `Verified`: JavaScript collection behavior.

## Acceptance Criteria

1. `Verified`: Reassess collection surfaces against prior Phase 3 blocked surfaces explicitly.
2. `Verified`: Record which collection behaviors are admissible now versus still blocked.
3. `Verified`: Keep product-card reuse authority explicit rather than implied.
4. `Verified`: Keep broader collection companion breadth blocked unless separately justified.

## Intended Next Step

- `Verified`: Route only to `UNIT-156`, a docs-only collection host/product-grid runtime-boundary package.

## Readiness Verdict

- `Verified`: PASS. One later docs-only collection host/product-grid boundary is justified; direct implementation is not.
