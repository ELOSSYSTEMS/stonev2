# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-011` Verify the bounded Phase 2 minimal utility block stack implementation slice.

## Objective

- `Verified`: Verify that the completed minimal utility block stack slice stayed inside the approved five-file runtime boundary, consumed the shared section shell unchanged, remained utility-only, kept the neutral page host isolated, and preserved bilingual locale alignment before any broader runtime work resumes.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-block-stack-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-block-stack.liquid`
- `project/templates/page.stone-runtime-block-stack.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if verification requires new runtime edits, broader runtime execution, protected-surface changes, or scope expansion beyond the approved five-file slice; record the failure precisely and replan instead of expanding work.
