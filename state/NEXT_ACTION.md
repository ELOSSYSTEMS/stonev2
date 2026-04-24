# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only preset assignment decision package
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-182` passed by authoring the preset capability composition boundary, and now admits only `UNIT-183` as a docs-only preset assignment decision package or hard-block record.

## Objective

- `Verified`: Decide whether current evidence is enough to state exact preset-to-capability assignments.
- `Verified`: If enough, author docs-only exact assignment rules and protected runtime boundary questions.
- `Verified`: If not enough, record the missing owner inputs as a hard block.
- `Verified`: Keep runtime edits, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-runtime-boundary-v1/`
- `workspace/plans/phase-4-preset-capability-composition-boundary-v1/`
- `workspace/plans/phase-4-preset-assignment-decision-v1/`
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

Fail closed if `UNIT-183` makes runtime edits, creates per-preset templates or section architectures, opens predictive search or JavaScript filtering, edits product cards, changes templates/snippets/JavaScript, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
