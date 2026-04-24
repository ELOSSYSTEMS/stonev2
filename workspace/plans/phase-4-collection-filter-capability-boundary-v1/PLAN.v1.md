# Phase 4 Collection Filter Capability Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows verified PDP capability stabilization.
- `Verified`: It does not authorize runtime edits.

## Current Collection Capability

- `Verified`: `stone-main-collection` renders collection title, description, product count, native sort, product grid, empty state, and pagination.
- `Verified`: `stone-main-collection` does not render Shopify collection filters or facets.
- `Verified`: No collection filter section or snippet exists.
- `Verified`: No preset-specific collection control assignment exists.

## Boundary Decision

- `Verified`: Collection filters should be stabilized as a shared native collection capability before final preset collection composition.
- `Verified`: The first filter capability must use Shopify's native `collection.filters` surface.
- `Verified`: Filter state should be submitted with a native GET form.
- `Verified`: JavaScript filtering, predictive search, custom search, and collection app behavior remain blocked.
- `Verified`: Preset-specific filter differences remain deferred until the shared filter capability exists and is verified.

## Capability Classification

| Capability | Verdict | Reason |
| --- | --- | --- |
| Sort | `Verified`: Existing capability | `stone-main-collection` already renders native sort. |
| Pagination | `Verified`: Existing capability | `stone-main-collection` already renders native pagination. |
| Product count | `Verified`: Existing capability | `stone-main-collection` already renders total product count. |
| Vendor/price card visibility | `Verified`: Existing capability | Existing settings pass vendor and price flags to `stone-product-card`. |
| Native filters/facets | `Verified`: New shared collection capability needed | Collection pages need filter capability before preset-specific collection differences can be assigned. |
| JavaScript filtering | `Verified`: Blocked | The theme remains Liquid-first and no-JS for this lane. |
| Predictive search or search merchandising | `Verified`: Blocked | Search behavior remains separate and blocked from collection filtering. |
| Preset-specific filter defaults | `Verified`: Deferred | Assignment by preset must wait until the shared collection filter capability is stable. |

## Shared Collection Filter Rules

- `Verified`: Filters must stay shared and native.
- `Verified`: Filters must not be hard-coded per preset.
- `Verified`: Filters must not depend on JavaScript.
- `Verified`: Filters must preserve current collection sort and pagination behavior.
- `Verified`: Filters must not edit product cards.
- `Verified`: Filters must not introduce search, recommendation, cart, checkout, or billing-sensitive behavior.

## Candidate Future Runtime Scope

- `Verified`: Add native filter rendering to `stone-main-collection`.
- `Verified`: Add a section setting to show or hide filters.
- `Verified`: Add a section setting to choose filter layout mode only if it stays no-JS.
- `Verified`: Add CSS for filter groups, active filters, and reset/apply controls.
- `Verified`: Add bilingual labels.

## Non-Scope

- `Verified`: No runtime edits in this unit.
- `Verified`: No final preset assignment.
- `Verified`: No preset-specific filter configuration.
- `Verified`: No product-card edits.
- `Verified`: No JavaScript.
- `Verified`: No predictive search, search suggestions, search merchandising, recommendations, cart, checkout, billing-sensitive behavior, or hardening.

## Next Unit Boundary

- `Verified`: The next unit should stay docs-only.
- `Verified`: The next unit should state the exact future runtime file boundary for native collection filters or stop in a governed block.
- `Verified`: The next unit must define protected surfaces and checks before implementation.

## Readiness Verdict

- `Verified`: READY as a docs-only collection/filter capability boundary.
- `Inference`: The next honest unit is a docs-only collection filter runtime-boundary package.
