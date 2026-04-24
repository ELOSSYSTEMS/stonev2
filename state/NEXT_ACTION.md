# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only next-slice boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-014` is approved only as a docs-only Phase 3B second-drawer candidate boundary after shared drawer primitive preview regression proof.

## Objective

- `Verified`: Preserve `UNIT-SA-013` as complete for browser preview regression proof of the shared drawer primitive.
- `Verified`: Decide the next smallest safe Phase 3B candidate without implementing runtime.
- `Verified`: Keep search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, and Shopify publish operations blocked unless the docs-only boundary explicitly narrows a later unit.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-011.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-014.v1.md`
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

Stop if the next step requires runtime edits, Shopify preview/dev/push, search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, publish, delete operations, or any file outside the docs-only `UNIT-SA-014` surfaces.
