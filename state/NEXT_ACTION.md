# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-124` Verify the shoppable-media motion story slice.

## Objective

- `Verified`: Verify the first motion-aware shoppable-media proof stayed one non-JS video-first story surface with exactly two linked products.
- `Verified`: Confirm the implementation stayed inside the exact approved five-file runtime boundary.
- `Verified`: Confirm `stone-product-card` stayed unchanged and `project/assets/stone-runtime.js` stayed unchanged.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-motion-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-shoppable-media-motion-story.liquid`
- `project/templates/page.stone-runtime-shoppable-media-motion-story.json`
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

Fail verification if the motion slice requires JS, autoplay, looping policy changes, custom playback controls, snippet edits, block files, a third product, loops, heavier commerce actions, or any runtime file outside the exact approved five-file scope. Fail closed instead of normalizing drift.
