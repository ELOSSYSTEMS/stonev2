# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-190` is approved as the next bounded upload-repair unit: repair the Hebrew runtime locale filename rejected by Shopify.

## Objective

- `Verified`: Rename the Hebrew runtime locale from `he.default.json` to a non-default Hebrew runtime locale file so Shopify has only one default runtime locale.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not edit English runtime locale text, schema locale files, templates, or Shopify remote state in this unit.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/locales/he.default.json`
- `project/locales/he.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-190/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if the locale filename repair cannot preserve English/Hebrew runtime key parity or requires copy changes outside the filename correction.
