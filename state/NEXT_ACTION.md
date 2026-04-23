# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only preset-pack realization boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-169` passed and now admits only `UNIT-170` as verification/frontier review of the exact five-file preset-pack runtime proof.

## Objective

- `Verified`: Verify that `UNIT-169` changed only the exact five approved runtime files.
- `Verified`: Confirm JSON validity and locale parity for the new preset-pack labels.
- `Verified`: Confirm no template, section, snippet, or JavaScript drift.
- `Verified`: Decide the next honest lane without treating selector plumbing as complete preset rollout.

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

Fail closed if `UNIT-170` finds template, section, snippet, JavaScript, unapproved runtime file, homepage sequence, host assignment, predictive search, cart behavior, recommendation, companion behavior, checkout/billing-sensitive behavior, or hardening drift.
