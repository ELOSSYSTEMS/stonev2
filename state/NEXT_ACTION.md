# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only PDP capability runtime boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-174` passed by authoring the PDP capability boundary, and now admits only `UNIT-175` as docs-only PDP capability runtime-boundary authoring.

## Objective

- `Verified`: State an exact future runtime file boundary for shared PDP size chart and spec sheet sections or stop in a governed block.
- `Verified`: Define exact section files, template behavior, locale keys, CSS scope, and protected-surface checks before implementation.
- `Verified`: Keep final preset assignment, collection filters, cart/checkout behavior, recommendations, and hardening out of scope.
- `Verified`: Keep runtime edits blocked from this docs-only unit.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-section-block-stabilization-frontier-v1/`
- `workspace/plans/phase-4-pdp-capability-boundary-v1/`
- `workspace/plans/phase-4-pdp-capability-runtime-boundary-v1/`
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

Fail closed if `UNIT-175` attempts runtime edits, assigns final preset content, builds size chart/spec sheet UI directly, creates per-preset architecture, reopens cart/checkout/billing-sensitive behavior, opens recommendations, or jumps to collection filters before the PDP capability runtime boundary is complete.
