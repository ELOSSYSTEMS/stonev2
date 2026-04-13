# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-111` Execute the shoppable-media focus slice.

## Objective

- `Verified`: Prove the first interaction-aware shoppable-media surface for Stone V2.
- `Verified`: Keep interaction local, bounded, and free of protected-surface or heavier interaction drift.
- `Verified`: Reuse `stone-product-card` unchanged for exactly two linked products.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-interaction-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/sections/stone-shoppable-media-focus.liquid`
- `project/templates/page.stone-runtime-shoppable-media-focus.json`
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

Stop if implementation needs drawers, overlays, modals, snippet edits, block files, a third product, loops, heavier interaction, or JS outside `project/assets/stone-runtime.js`. Fail closed instead of normalizing expansion.
