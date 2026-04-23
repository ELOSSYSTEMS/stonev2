# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only shell/navigation runtime-boundary authoring
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-146` passed and now admits only `UNIT-152` as the next docs-only shell/navigation runtime-boundary package; keep `UNIT-147` through `UNIT-151` blocked until predecessor checks explicitly approve their domains.

## Objective

- `Verified`: Author `UNIT-152` as a docs-only global shell/navigation runtime-boundary package that states one exact future implementation boundary before any runtime edits.
- `Verified`: Preserve that `UNIT-146` admitted only a docs-only next boundary unit, not shell/navigation runtime implementation.
- `Verified`: Preserve that `UNIT-143` through `UNIT-145` happened inside the user-directed homepage-first override lane.
- `Verified`: Keep `collection companion`, `PDP companion`, `collection behavior`, `PDP support behavior`, `collection-template starter structure`, and `PDP-template starter structure` explicit and blocked.
- `Verified`: Keep search-results behavior, predictive search, collection/archive behavior, PDP behavior, cart drawer behavior, checkout-sensitive behavior, preset realization, and hardening out of scope.
- `Verified`: Do not treat the shell/navigation boundary decision as permission for broad theme-shell runtime implementation.

## Plan Reference

- `Path:` `workspace/plans/phase-4-global-shell-navigation-runtime-boundary-v1/HANDOFF.v1.md`

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

Fail closed if `UNIT-152` authorizes runtime implementation directly, weakens the `UNIT-146` docs-only boundary, reopens `UNIT-147` through `UNIT-151`, admits collection/archive behavior, admits PDP behavior, admits search-results or predictive-search behavior, admits cart drawer or checkout-sensitive behavior, or turns shell/navigation into broad theme completion authority.
