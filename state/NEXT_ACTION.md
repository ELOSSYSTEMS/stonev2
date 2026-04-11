# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-020` Verify the bounded Phase 2 minimal utility key-value list implementation slice.

## Objective

- `Verified`: Verify that the completed minimal utility key-value list slice stayed inside the approved five-file runtime boundary and remained utility-only, shell-stable, template-neutral, and bilingual.
- `Verified`: Keep `UNIT-020` limited to verification evidence, state updates, and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-key-value-list-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-key-value-list.liquid`
- `project/templates/page.stone-runtime-key-value-list.json`
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

Stop if verification evidence shows the implementation touched any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-key-value-list.liquid`, `project/templates/page.stone-runtime-key-value-list.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`; stop if verification reveals protected-surface edits, `project/blocks/`, any new snippet file, any second section file, any second template file, JS-driven behavior, media-led behavior, comparison-table behavior, non-utility behavior, locale drift, or broader family work, and record failure instead of normalizing scope expansion.
