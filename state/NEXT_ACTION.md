# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-087` Execute the category-entry merchandising slice.

## Objective

- `Verified`: Broaden Stone V2 merchandising from product discovery into curated collection-entry discovery.
- `Verified`: Establish one shared `stone-collection-card` contract and one category-entry grid section that renders exactly three selected collections.
- `Verified`: Keep the slice non-JS, collection-link-only, and free of protected-surface or heavier-commerce drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-category-entry-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/snippets/stone-collection-card.liquid`
- `project/sections/stone-category-entry-grid.liquid`
- `project/templates/page.stone-runtime-category-entry-grid.json`
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

Stop if implementation needs any runtime file outside the approved six runtime files, blocks, list settings, a second snippet, a second section, a second template, protected-surface edits, JS changes, pricing logic, product-card behavior, rails, carousels, shoppable-media behavior, or any heavier-commerce drift. Fail closed instead of normalizing scope expansion.
