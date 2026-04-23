# Phase 4 Collection Host Product Grid Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It is conditional on `UNIT-155` passing.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to state one exact future collection host/product-grid runtime boundary.

## Scope

- `Verified`: Define the smallest acceptable runtime file boundary for a native collection host and product-grid proof.
- `Verified`: Keep the boundary no-JS unless exact evidence proves otherwise.
- `Verified`: Keep collection companion, archive controls, banner/explainer/editorial drift, PDP, search, cart, preset, and hardening domains out of scope.

## Candidate Runtime Surfaces

- `Inference`: The future implementation may need `project/templates/collection.json`.
- `Inference`: The future implementation may need one collection main section.
- `Inference`: The future implementation may need `project/snippets/stone-product-card.liquid` only if product-card parameters need a bounded host-safe adjustment.
- `Inference`: The future implementation may need `project/assets/stone-base.css`.
- `Inference`: The future implementation may need the two locale schema files.

## Acceptance Criteria

1. `Verified`: State exact future runtime files before implementation.
2. `Verified`: Keep JavaScript blocked unless separately justified.
3. `Verified`: Keep collection companion, archive, PDP, search, cart, preset, and hardening domains blocked.
4. `Verified`: Route to implementation only if the boundary stays minimal and reversible.

## Intended Next Step If This Unit Passes

- `Inference`: Route to one bounded collection host/product-grid runtime proof implementation unit.

## Readiness Verdict

- `Verified`: READY only if `UNIT-155` passes first.
