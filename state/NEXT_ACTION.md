# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-127` Author the Phase 3 companion-systems controlled expansion proposal.

## Objective

- `Verified`: Determine whether Stone V2 should reopen `collection companion` and `PDP companion` work as a broader Phase 3 planning track, and which family, if any, should go first.
- `Verified`: Keep the work docs-only and fail closed on runtime authorization.
- `Verified`: Do not normalize broader motion/media scope, template-coupled runtime work, preset-pack implementation, wider JS, or heavier commerce as implicit next steps.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-controlled-expansion-proposal-v1/HANDOFF.v1.md`

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

Fail closed if the proposal starts authorizing runtime work directly, or if it treats broader motion/media scope, collection-template or PDP-template runtime work, preset-pack implementation, wider JS, or heavier commerce as implicitly approved.
