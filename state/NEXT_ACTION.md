# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only collection filter runtime boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-178` passed by authoring the collection/filter capability boundary, and now admits only `UNIT-179` as docs-only collection filter runtime-boundary authoring.

## Objective

- `Verified`: State an exact future runtime file boundary for native collection filters/facets or stop in a governed block.
- `Verified`: Define exact settings, locale keys, CSS scope, protected surfaces, and checks before implementation.
- `Verified`: Keep final preset assignment, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-capability-boundary-v1/`
- `workspace/plans/phase-4-collection-filter-runtime-boundary-v1/`
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

Fail closed if `UNIT-179` attempts runtime edits, cannot state an exact future file boundary, assigns final preset collection composition, opens predictive search or JavaScript filtering, creates per-preset collection architecture, edits product cards, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
