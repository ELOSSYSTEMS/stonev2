# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-010` Execute the bounded Phase 2 minimal utility block stack implementation slice.

## Objective

- `Verified`: Implement the next smallest useful Phase 2 runtime slice after the verified minimal section runtime substrate by proving one utility-only block-bearing section on a neutral page host without broadening into unplanned storefront work.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-utility-block-stack-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-utility-block-stack.liquid`
- `project/templates/page.stone-runtime-block-stack.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if implementation needs any runtime file outside the approved five-file scope, if it touches `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`, or if it broadens into homepage, preset, collection, PDP, blog or editorial, merchandising, multi-section composition, `project/blocks/`, or polished storefront implementation without a separately bounded package.
