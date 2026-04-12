# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-077` Verify the bounded product context card implementation slice.

## Objective

- `Verified`: Verify that the completed product context card slice stayed inside the approved five-file runtime boundary, remained read-only, reused the shared shell unchanged, and preserved the newly formalized stop conditions.
- `Verified`: Keep `UNIT-077` limited to verification evidence, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-pdp-companion-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-product-context-card.liquid`
- `project/templates/page.stone-runtime-product-context-card.json`
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

Stop if verification evidence shows runtime changes outside the approved five files, or reveals protected-surface edits, `project/blocks/`, new snippets, a second section, a second template, buy-box behavior, forms, add-to-cart, quick-add, quick-view, price blocks, variant selectors, inventory messaging, galleries, recommendations, product loops, JS, sliders, drawers, overlays, accordions, tabs, or broader composition, and record failure instead of normalizing scope expansion.
