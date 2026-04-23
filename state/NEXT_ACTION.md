# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only editorial and search host boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-162` passed and now admits only `UNIT-163` as docs-only editorial/search host boundary authoring.

## Objective

- `Verified`: Record exact host needs for blog, article, and search surfaces.
- `Verified`: Decide whether one later bounded editorial/search host package is justified after verified homepage, shell/navigation, collection, and PDP hosts.
- `Verified`: Reuse current editorial/object-aware primitives where possible.
- `Verified`: Keep predictive-search behavior, broader editorial-family expansion, cart, preset realization, and hardening out of scope.
- `Verified`: Do not authorize runtime edits from this boundary unit.

## Plan Reference

- `Path:` `workspace/plans/phase-4-editorial-and-search-host-boundary-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-editorial-and-search-host-boundary-v1/`
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

Fail closed if `UNIT-163` attempts project runtime edits, treats predictive search as approved, opens broader editorial-family growth, routes directly to implementation without a bounded host package, or routes into cart, preset, or hardening work prematurely.
