# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: collection filter runtime proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-180` passed by implementing the collection filter runtime proof, and now admits only `UNIT-181` as verification/frontier review.

## Objective

- `Verified`: Verify the exact four-file native collection filter runtime proof.
- `Verified`: Confirm locale validity, section schema validity, locale parity, exact file scope, and protected-surface stability.
- `Verified`: Keep final preset assignment, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

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

Fail closed if `UNIT-181` makes runtime edits, assigns final preset collection composition, opens predictive search or JavaScript filtering, creates per-preset collection architecture, edits product cards, changes templates/snippets/JavaScript, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
