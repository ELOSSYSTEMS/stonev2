# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-063` Author one bounded planning unit for the next Phase 2 runtime slice after verified minimal editorial quote completion.

## Objective

- `Verified`: Define the next smallest safe Phase 2 runtime slice after the verified minimal editorial quote proof and capture it as a documentation-only plan package with explicit scope, checks, risks, and stop conditions.
- `Verified`: Keep `UNIT-063` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-editorial-quote-v1/PLAN.v1.md`

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

Stop if planning needs to touch `project/` runtime files, protected surfaces, `project/blocks/`, new snippets, more than one future section, more than one future template, runtime JS, or broad family build-out; stop if the next slice cannot be bounded clearly enough to fit a documentation-only plan package and replan the roadmap instead of improvising scope.
