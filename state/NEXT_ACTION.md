# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-3-docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-083` Author the post-foundation merchandising frontier review.

## Objective

- `Verified`: Re-evaluate Stone V2 immediately after the verified first broader merchandising foundation slice.
- `Verified`: Decide whether the next broader merchandising step should be authorized, narrowed further, or paused.
- `Verified`: If continuation is justified, author one docs-only planning package with exact scope, checks, risks, and stop conditions for the next honest bounded step.

## Plan Reference

- `Not required`: This is a docs-only frontier review following verified `UNIT-082`.

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

Stop if the frontier review attempts to execute runtime work, widen beyond docs-only planning surfaces, retroactively loosen the verified `UNIT-080` boundary, or authorize JS, protected-surface edits, additional runtime files, or heavier commerce behavior without a new explicit bounded package.
