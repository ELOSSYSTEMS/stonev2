# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only preset-pack realization boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-168` passed and now admits only `UNIT-169` as exact five-file preset-pack runtime proof.

## Objective

- `Verified`: Implement one shared `stone_preset_pack` selector with five roadmap preset options.
- `Verified`: Emit the selected preset as a body-level data attribute.
- `Verified`: Add shared CSS tone/density hooks and bilingual labels.
- `Verified`: Keep templates, sections, snippets, JavaScript, homepage sequence mutation, host assignment mutation, predictive search, cart behavior, recommendations, companion behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/plans/phase-4-preset-pack-runtime-proof-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `project/layout/theme.liquid`
- `project/config/settings_schema.json`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`
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

Fail closed if `UNIT-169` changes templates, sections, snippets, JavaScript, any unapproved runtime file, homepage sequence, host assignments, predictive search, cart behavior, recommendations, companion behavior, checkout/billing-sensitive behavior, or hardening.
