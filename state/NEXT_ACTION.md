# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-081` Execute the first broader merchandising foundation implementation slice.

## Objective

- `Verified`: Implement the first broader bounded merchandising foundation slice under the formalized boundary.
- `Verified`: Keep `UNIT-081` limited to the exact approved six runtime files plus `state/` and `workspace/handoff/CURRENT_HANDOFF.md` only.

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

Stop if implementation needs any runtime file outside the approved six runtime files; stop if it needs a second snippet, a second section, a second template, protected-surface edits, JS changes, collection-template edits, product-template edits, add-to-cart, product forms, quick-add, quick-view, drawers, overlays, variant selectors, inventory messaging, recommendation logic, or campaign composition, and fail closed instead of broadening scope.
