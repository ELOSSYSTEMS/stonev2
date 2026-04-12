# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-065` Author one docs-only Phase 2 frontier replan package after rejecting the minimal blog-highlights runtime slice.

## Objective

- `Verified`: Define the next safer governed direction after `UNIT-064` rejected the blog-highlights runtime candidate, and capture that as a docs-only frontier replan package with explicit alternatives, tradeoffs, and stop conditions.
- `Verified`: Keep `UNIT-065` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-blog-highlights-distinctness-review-v1/PLAN.v1.md`

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

Stop if the frontier replan begins authorizing runtime work without first establishing a materially distinct family boundary; stop if the replan needs `project/` edits; replan on docs-only surfaces only.
