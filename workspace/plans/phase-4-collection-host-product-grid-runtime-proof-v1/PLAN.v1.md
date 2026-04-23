# Phase 4 Collection Host Product Grid Runtime Proof v1

## Status

- `Verified`: This package defines one bounded runtime implementation unit.
- `Verified`: It is conditional on `UNIT-156` passing.
- `Verified`: It admits only a no-JS collection host/product-grid proof.

## Exact Runtime Boundary

- `Verified`: `project/templates/collection.json`
- `Verified`: `project/sections/stone-main-collection.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Scope

- `Verified`: Add one canonical collection host template.
- `Verified`: Add one native collection main section.
- `Verified`: Add CSS for the collection host/product-grid proof.
- `Verified`: Add bilingual section labels.
- `Verified`: Keep JavaScript untouched.
- `Verified`: Keep product-card snippet untouched.

## Acceptance Criteria

1. `Verified`: The implementation changes only the exact five runtime files above.
2. `Verified`: Collection products render through existing `stone-product-card`.
3. `Verified`: Sort and pagination remain no-JS and native.
4. `Verified`: Product-card edits, collection companion behavior, archive controls, PDP/search/cart/preset/hardening domains, and JavaScript remain blocked.
5. `Verified`: Required harness and JSON checks pass.

## Intended Next Step If This Unit Passes

- `Inference`: Verify the collection host/product-grid runtime proof before opening PDP, search, preset, or hardening lanes.

## Readiness Verdict

- `Verified`: READY only if `UNIT-156` passes first.
