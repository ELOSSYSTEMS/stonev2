# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only collection host/product-grid runtime-boundary authoring
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-155` passed and now admits only `UNIT-156` as a docs-only collection host/product-grid runtime-boundary package.

## Objective

- `Verified`: Author `UNIT-156` only as a docs-only boundary that states exact future runtime files before collection implementation.
- `Verified`: Preserve that `UNIT-155` admitted a boundary package, not runtime implementation.
- `Verified`: Keep collection companion, archive controls, banner/explainer/editorial drift, navigation-aid strategy, PDP behavior, search behavior, cart behavior, preset realization, hardening, and JavaScript collection behavior blocked.
- `Verified`: Do not treat existing collection/product card primitives as permission for broad collection implementation.

## Plan Reference

- `Path:` `workspace/plans/phase-4-collection-host-product-grid-runtime-boundary-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/`
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

Fail closed if `UNIT-156` authorizes runtime implementation directly, cannot state an exact minimal runtime file boundary, admits JavaScript without hard evidence, or reopens collection companion, archive, PDP, search, cart, preset, or hardening domains.
