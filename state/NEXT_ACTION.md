# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-093` Execute the category media band slice.

## Objective

- `Verified`: Broaden Stone V2 merchandising into one image-led category-band surface.
- `Verified`: Reuse `stone-collection-card` as the only collection-card snippet surface.
- `Verified`: Keep the slice non-JS, collection-link-only, and free of protected-surface or heavier-commerce drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-category-media-band-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/snippets/stone-collection-card.liquid`
- `project/sections/stone-category-media-band.liquid`
- `project/templates/page.stone-runtime-category-media-band.json`
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

Stop if implementation needs any runtime file outside the approved six runtime files, any new snippet, extra section files, extra template files, blocks, list settings, pricing logic, product behavior, rails, carousels, shoppable-media behavior, JS changes, or protected-surface edits. Fail closed instead of normalizing scope expansion.
