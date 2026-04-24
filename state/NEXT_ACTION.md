# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-189` is approved as the next bounded upload-repair unit: push the repaired source to the existing unpublished `Stonev2` theme.

## Objective

- `Verified`: Push the full `project/` theme root to existing unpublished theme id `156487712965` on `elos-dev.myshopify.com`.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not publish the theme, create a fresh theme, or change files in this unit unless remote validation exposes a hard blocker.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- Shopify CLI operation against unpublished theme id `156487712965`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-189/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if Shopify CLI auth fails, the target theme id is not `156487712965`, the push would publish the theme, or remote upload reports a new hard blocker that requires code changes outside the approved repair plan.
