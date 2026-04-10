# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-014` Verify the bounded Phase 2 minimal utility layout composition implementation slice.

## Objective

- `Verified`: Verify that `UNIT-013` stayed inside the approved minimal utility layout composition slice and did not broaden beyond one utility-only two-region composition proof.
- `Verified`: Keep `UNIT-014` limited to the approved five runtime files plus state and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-layout-composition-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-layout-composition.liquid`
- `project/templates/page.stone-runtime-layout-composition.json`
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

Stop if verification needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-layout-composition.liquid`, `project/templates/page.stone-runtime-layout-composition.json`, `project/locales/he.default.schema.json`, `project/locales/en.schema.json`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`; stop if protected-surface edits, `project/blocks/`, any new snippet file, any second section file, any second template file, page-composition growth, non-utility behavior, or broader family work becomes necessary, and replan instead of broadening scope.
