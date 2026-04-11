# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-016` Execute the bounded Phase 2 minimal utility action group implementation slice.

## Objective

- `Verified`: Implement the approved minimal utility action group slice and keep it bounded to one neutral utility-only native action-group proof.
- `Verified`: Keep `UNIT-016` limited to the approved five runtime files plus state and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-action-group-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-action-group.liquid`
- `project/templates/page.stone-runtime-action-group.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
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

Stop if implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-action-group.liquid`, `project/templates/page.stone-runtime-action-group.json`, `project/locales/he.default.schema.json`, `project/locales/en.schema.json`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`; stop if protected-surface edits, `project/blocks/`, any new snippet file, any second section file, any second template file, JS-driven behavior, media-led behavior, non-utility behavior, or broader family work becomes necessary, and replan instead of broadening scope.
