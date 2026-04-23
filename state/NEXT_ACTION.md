# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only collection host/behavior reopen evidence
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-154` passed and now admits only `UNIT-155` as a docs-only collection host/behavior reopen evidence package.

## Objective

- `Verified`: Execute `UNIT-155` only as a docs-only evidence decision using the existing collection reopen package.
- `Verified`: Decide whether one exact collection host/behavior lane can reopen after the verified homepage proof and verified global shell/navigation proof.
- `Verified`: Keep direct collection runtime implementation out of scope.
- `Verified`: Restate blocked collection companion, archive behavior, navigation strategy, banner/explainer, PDP, search-results, predictive-search, cart drawer, checkout-sensitive, preset realization, and hardening surfaces.
- `Verified`: Do not treat `UNIT-154` shell verification as permission for broad collection or archive implementation.

## Plan Reference

- `Path:` `workspace/plans/phase-4-collection-host-and-behavior-reopen-evidence-v1/HANDOFF.v1.md`

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

Fail closed if `UNIT-155` authorizes collection runtime implementation directly, weakens the verified shell/navigation boundary, admits collection companion or archive behavior prematurely, admits PDP/search/cart/preset/hardening domains, or cannot state at most one exact next collection boundary.
