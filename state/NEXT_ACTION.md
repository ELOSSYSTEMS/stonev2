# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-066` Author one docs-only controlled-expansion proposal for the next governed runtime frontier.

## Objective

- `Verified`: Define one controlled-expansion proposal for the next governed runtime frontier after the current micro-slice runway was judged locally exhausted.
- `Verified`: Keep `UNIT-066` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-frontier-replan-v1/PLAN.v1.md`

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

Stop if the controlled-expansion proposal starts authorizing runtime work without explicit rule changes, exact allowed surfaces, and exact stop conditions; stop if the proposal needs `project/` edits; stay docs-only.
