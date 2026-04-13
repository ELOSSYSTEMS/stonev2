# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-108` Verify the shoppable media story slice.

## Objective

- `Verified`: Verify that the shoppable media story slice stayed inside the exact approved five-file runtime boundary.
- `Verified`: Verify that `stone-shoppable-media-story` reuses `stone-product-card` unchanged, stays limited to one image picker, two product settings, and four marker-position range settings, and remains non-JS.
- `Verified`: Verify that the slice remained free of protected-surface or interaction-substrate drift.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-story-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-shoppable-media-story.liquid`
- `project/templates/page.stone-runtime-shoppable-media-story.json`
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

Stop if verification finds any runtime file outside the approved five runtime files, any snippet drift, any JS or protected-surface edits, any settings-shape drift, or any heavier shoppable-media interaction. Fail closed instead of normalizing drift.
