# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-126` Author the post-shoppable-media controlled expansion proposal.

## Objective

- `Verified`: Determine the next honest higher-boundary planning problem, if any, after the bounded shoppable-media runway was judged locally exhausted.
- `Verified`: Keep the work docs-only and fail closed on runtime authorization.
- `Verified`: Do not normalize broader motion-system scope, autoplay, looping, custom controls, wider JS, or heavier commerce as implicit next steps.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-motion-story-frontier-review-v1/HANDOFF.v1.md`

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

Fail closed if the proposal starts authorizing runtime work directly, or if it treats broader motion-system scope, autoplay, looping, custom controls, wider JS, or heavier commerce as implicitly approved.
