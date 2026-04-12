# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-084` Execute the post-foundation merchandising spotlight variant slice.

## Objective

- `Verified`: Extend the verified merchandising family through one promotion-first spotlight mode inside the existing `stone-featured-collection-grid` family.
- `Verified`: Keep the shared `stone-product-card` contract as the only product-card snippet surface.
- `Verified`: Keep the slice non-JS, selected-collection, read-only, and free of commerce-action or protected-surface drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-foundation-merchandising-frontier-review-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/snippets/stone-product-card.liquid`
- `project/sections/stone-featured-collection-grid.liquid`
- `project/templates/page.stone-runtime-featured-collection-grid.json`
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

Stop if implementation needs any runtime file outside the approved six runtime files, a second snippet, a second section, a second template, protected-surface edits, JS changes, collection-template rewrites, product-template rewrites, compare-at pricing logic, badges, urgency logic, rails, carousels, shoppable-media behavior, add-to-cart, product forms, quick-add, quick-view, or any heavier commerce behavior. Fail closed instead of normalizing scope expansion.
