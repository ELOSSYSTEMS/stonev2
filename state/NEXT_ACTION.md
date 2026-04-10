# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-minimal-section-runtime-substrate-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-007` Execute the bounded Phase 2 minimal section runtime substrate implementation slice.

## Objective

- `Verified`: Implement the first reusable section runtime substrate on top of the verified foundation by touching only the approved six-file runtime scope defined in the new plan package, while preserving the ban on broader section-family, homepage, preset, collection, PDP, and storefront work.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-section-runtime-substrate-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/snippets/stone-section-shell.liquid`
- `project/sections/stone-utility-richtext.liquid`
- `project/templates/page.stone-runtime.json`
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

Stop if implementation needs any runtime file outside the approved six-file scope, edits `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`, introduces a second section, snippet, or template file, or broadens into homepage, preset, collection, PDP, blog or editorial, merchandising, or polished storefront work.
