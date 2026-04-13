# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-107` Execute the shoppable media story slice.

## Objective

- `Verified`: Prove the first non-JS shoppable-media surface for Stone V2.
- `Verified`: Keep the section media-first, product-link-only, and free of protected-surface or interaction-substrate drift.
- `Verified`: Reuse `stone-product-card` unchanged for exactly two linked products.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-story-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-shoppable-media-story.liquid`
- `project/templates/page.stone-runtime-shoppable-media-story.json`
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

Stop if implementation needs JS, protected-surface edits, drawer behavior, overlay behavior, snippet edits, block files, a third product, loops, or heavier shoppable-media interaction. Fail closed instead of normalizing expansion.
