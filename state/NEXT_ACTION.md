# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-191` is approved as the next bounded upload-repair unit: repair the invalid prompt template URL rejected by Shopify.

## Objective

- `Verified`: Replace the invalid `action_link` value in `project/templates/page.stone-runtime-prompt.json` with a Shopify-accepted URL value.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not edit locales, section schema, Shopify remote state, or preset composition in this unit.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/templates/page.stone-runtime-prompt.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-191/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if the prompt template URL repair requires broader template composition changes or product-owner content decisions.
