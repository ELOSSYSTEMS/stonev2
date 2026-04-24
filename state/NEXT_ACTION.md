# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only collection/filter capability boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-177` passed by verifying the exact five-file no-JS PDP capability proof, and now admits only `UNIT-178` as docs-only collection/filter capability boundary authoring.

## Objective

- `Verified`: Define the collection/filter capability model before preset-specific collection composition.
- `Verified`: Decide which collection controls are shared native capabilities, which are preset-selective later, and which remain blocked.
- `Verified`: Keep runtime edits, final preset assignment, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-capability-boundary-v1/`
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

Fail closed if `UNIT-178` attempts runtime edits, assigns final preset collection composition, implements filters directly, opens predictive search or JavaScript filtering, creates per-preset collection architecture, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
