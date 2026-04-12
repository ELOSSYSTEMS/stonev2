# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-080` Author the first broader Phase 3 merchandising foundation boundary package.

## Objective

- `Verified`: Author the first broader docs-only execution boundary for Phase 3 merchandising foundation work.
- `Verified`: Keep `UNIT-080` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-3-broader-merchandising-platform-v1/PLAN.v1.md`

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

Stop if the next step starts broader runtime build without first recording an exact broader execution boundary with allowed files, preserved constraints, newly allowed surfaces, verification expectations, and exact stop conditions; keep work docs-only until that boundary is formalized.
