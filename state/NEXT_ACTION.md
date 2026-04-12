# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-091` Verify the category-entry spotlight variant slice.

## Objective

- `Verified`: Verify that the category-entry spotlight variant stayed inside the exact approved six-file runtime boundary.
- `Verified`: Verify that `stone-category-entry-grid` still reuses `stone-collection-card`, exposes only the same three explicit collection settings, and limits `layout_mode` to `grid` and `spotlight`.
- `Verified`: Verify that the slice remained non-JS, collection-link-only, and free of protected-surface or heavier-commerce drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-category-entry-spotlight-boundary-v1/PLAN.v1.md`

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

Stop if verification finds any runtime file outside the approved six runtime files, any missing shared-snippet reuse, any extra setting or new runtime file, any layout-mode drift beyond `grid` and `spotlight`, any JS or protected-surface edits, or any heavier-commerce behavior. Fail closed instead of normalizing drift.
