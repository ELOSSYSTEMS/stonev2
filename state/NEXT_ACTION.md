# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-129` Author the Phase 3 collection-companion controlled expansion proposal.

## Objective

- `Verified`: Determine which narrowed collection-first companion lane, if any, is the next honest planning problem inside the reopened broader boundary.
- `Verified`: Keep the work docs-only and fail closed on runtime authorization.
- `Verified`: Do not reopen `PDP companion` implicitly, and do not normalize collection-template rewrites, archive controls, broader motion/media scope, preset-pack implementation, wider JS, or heavier commerce as implicit next steps.

## Plan Reference

- `Path:` `workspace/plans/phase-3-collection-companion-broader-boundary-v1/HANDOFF.v1.md`

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

Fail closed if the proposal starts authorizing runtime work directly, or if it treats collection-template rewrites, collection archive controls, PDP-template rewrites, broader motion/media scope, preset-pack implementation, wider JS, or heavier commerce as implicitly approved.
