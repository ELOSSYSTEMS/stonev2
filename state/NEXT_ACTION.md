# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only PDP host and behavior reopen evidence
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-158` passed and now admits only `UNIT-159` as a docs-only PDP host/behavior reopen evidence package.

## Objective

- `Verified`: Compare keep-blocked, narrow PDP host/behavior reopen, and broad PDP reopen.
- `Verified`: Decide whether one exact PDP lane is justified after verified homepage, shell/navigation, and collection host/product-grid proofs.
- `Verified`: Record which PDP host behaviors are admissible now versus blocked later behaviors.
- `Verified`: Keep deferred `PDP companion`, wider JavaScript, heavier commerce, cart-path risk, media behavior, recommendations, search, preset realization, and hardening explicit and fail-closed unless separately justified.
- `Verified`: Do not authorize runtime edits from this evidence package.

## Plan Reference

- `Path:` `workspace/plans/phase-4-pdp-host-and-behavior-reopen-evidence-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-pdp-host-and-behavior-reopen-evidence-v1/`
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

Fail closed if `UNIT-159` attempts project runtime edits, treats deferred `PDP companion` behavior as resolved, authorizes direct PDP implementation without a separate boundary unit, opens wider JavaScript or heavier commerce behavior, weakens product-form/cart-path risk, or routes into search, preset, cart, or hardening work prematurely.
