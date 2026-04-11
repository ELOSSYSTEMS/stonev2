# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-033` Author one bounded planning unit for the next Phase 2 runtime slice after verified utility spacer completion.

## Objective

- `Verified`: Define one documentation-only planning unit for the next bounded Phase 2 runtime slice after the verified utility spacer proof.
- `Verified`: Keep `UNIT-033` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/`

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

Stop if planning requires touching any `project/` runtime file, introduces protected-surface changes, assumes a broad family rollout without a bounded proof, or proposes a next slice without explicit file scope, checks, risks, and rejected broader alternatives; stop and replan instead of broadening scope.
