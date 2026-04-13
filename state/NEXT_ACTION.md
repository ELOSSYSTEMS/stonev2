# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-119` Execute the shoppable-media overlay slice.

## Objective

- `Verified`: Implement the first overlay-style shoppable-media proof as one section-scoped layered overlay reveal for exactly two linked products.
- `Verified`: Keep the implementation inside the exact approved six-file runtime boundary.
- `Verified`: Keep `stone-product-card` unchanged and keep JS local to `project/assets/stone-runtime.js`.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-overlay-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/sections/stone-shoppable-media-overlay.liquid`
- `project/templates/page.stone-runtime-shoppable-media-overlay.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if the overlay implementation needs modal semantics, dialog API, body scroll lock, document-level overlay containers, snippet edits, block files, a third product, loops, heavier commerce actions, or JS outside `project/assets/stone-runtime.js`. Fail closed instead of normalizing drift.
