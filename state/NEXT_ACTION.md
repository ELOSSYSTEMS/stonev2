# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-029` Verify the bounded Phase 2 minimal utility prompt implementation slice.

## Objective

- `Verified`: Verify that the completed minimal utility prompt slice stayed inside the approved five-file runtime boundary and remained utility-only, shell-stable, template-neutral, and bilingual.
- `Verified`: Keep `UNIT-029` limited to verification evidence, state updates, and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-prompt-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-prompt.liquid`
- `project/templates/page.stone-runtime-prompt.json`
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

Stop if verification evidence shows the implementation touched any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-prompt.liquid`, `project/templates/page.stone-runtime-prompt.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`; stop if verification reveals protected-surface edits, `project/blocks/`, any new snippet file, any second section file, any second template file, JS-driven behavior, icon-driven alert behavior, support behavior, promo behavior, conversion-callout behavior, locale drift, or broader family work, and record failure instead of normalizing scope expansion.
