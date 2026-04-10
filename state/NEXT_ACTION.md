# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-minimal-section-runtime-substrate-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-008` Verify the bounded Phase 2 minimal section runtime substrate implementation slice.

## Objective

- `Verified`: Verify that `UNIT-007` touched only the approved six-file runtime scope, kept the shared snippet neutral, kept the section utility-only, kept the template neutral and single-purpose, preserved bilingual locale parity, and avoided settings-schema or runtime-JS expansion.

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

Stop if verification requires changing runtime files to explain away boundary expansion, if any evidence suggests edits outside the approved six-file scope, if `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json` were changed, or if the implemented section, snippet, or template broadened into homepage, preset, collection, PDP, blog or editorial, merchandising, or polished storefront work.
