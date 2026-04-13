# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-097` Verify the featured product showcase slice.

## Objective

- `Verified`: Verify that the featured product showcase slice stayed inside the exact approved six-file runtime boundary.
- `Verified`: Verify that `stone-featured-product-showcase` reuses `stone-product-card`, stays limited to exactly one explicit product setting, and remains product-link-only.
- `Verified`: Verify that the slice remained non-JS and free of protected-surface or heavier-commerce drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-featured-product-showcase-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/snippets/stone-product-card.liquid`
- `project/sections/stone-featured-product-showcase.liquid`
- `project/templates/page.stone-runtime-featured-product-showcase.json`
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

Stop if verification finds any runtime file outside the approved six runtime files, any missing shared-snippet reuse, any extra setting or new runtime file, any JS or protected-surface edits, or any heavier-commerce behavior. Fail closed instead of normalizing drift.
