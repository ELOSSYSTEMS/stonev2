# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only preset capability composition boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-181` passed by verifying the collection filter runtime proof, and now admits only `UNIT-182` as docs-only preset capability composition boundary authoring.

## Objective

- `Verified`: Map stabilized shared PDP and collection capabilities into a later preset composition decision boundary.
- `Verified`: Define which preset-specific differences are now possible versus still blocked, without implementing per-preset templates or assignments.
- `Verified`: Keep runtime edits, final preset assignment, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-runtime-boundary-v1/`
- `workspace/plans/phase-4-preset-capability-composition-boundary-v1/`
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

Fail closed if `UNIT-182` makes runtime edits, assigns final preset composition, creates per-preset templates or section architectures, opens predictive search or JavaScript filtering, edits product cards, changes templates/snippets/JavaScript, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
