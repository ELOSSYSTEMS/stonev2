# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-112` Verify the shoppable-media focus slice.

## Objective

- `Verified`: Verify that the shoppable-media focus slice stayed inside the exact approved six-file runtime boundary.
- `Verified`: Verify that `stone-shoppable-media-focus` reuses `stone-product-card` unchanged, stays limited to one image picker, two product settings, and four marker-position range settings, and keeps JS local to `project/assets/stone-runtime.js`.
- `Verified`: Verify that the slice remained free of protected-surface or heavier interaction drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-interaction-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/sections/stone-shoppable-media-focus.liquid`
- `project/templates/page.stone-runtime-shoppable-media-focus.json`
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

Stop if verification finds any runtime file outside the approved six runtime files, any snippet drift, any JS outside `project/assets/stone-runtime.js`, any settings-shape drift, or any heavier shoppable-media interaction. Fail closed instead of normalizing drift.
