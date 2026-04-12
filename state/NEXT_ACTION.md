# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-runtime-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-082` Verify the first broader merchandising foundation implementation slice.

## Objective

- `Verified`: Verify that `UNIT-081` stayed inside the exact approved six-file runtime boundary.
- `Verified`: Confirm the shared product-card snippet was reused by the featured-collection merchandising section.
- `Verified`: Confirm the slice remained non-JS, read-only, and free of protected-surface edits and commerce-action behavior.

## Plan Reference

- `Path:` `workspace/plans/phase-3-merchandising-foundation-boundary-v1/PLAN.v1.md`

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

Stop if verification shows any runtime file outside the approved six-file boundary, protected-surface edits, JS edits, a second snippet, a second section, a second template, collection-template edits, product-template edits, add-to-cart behavior, product forms, quick-add, quick-view, drawers, overlays, variant selectors, inventory messaging, recommendation logic, or campaign composition. Fail closed instead of normalizing scope expansion.
