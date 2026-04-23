# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only preset-pack realization boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-170` passed and now admits only `UNIT-171` as docs-only post-preset-selector frontier review.

## Objective

- `Verified`: Decide whether any next preset-pack lane can honestly advance after selector-only runtime proof.
- `Verified`: Keep selector plumbing distinct from complete preset rollout.
- `Verified`: Decide whether host assignment, homepage sequence, starter content, or hardening should remain blocked, be routed to a bounded docs-only package, or stop in a governed block.
- `Verified`: Do not authorize runtime edits from this frontier review unit.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-post-preset-selector-frontier-review-v1/`
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

Fail closed if `UNIT-171` attempts runtime edits, treats selector plumbing as complete preset rollout, opens host assignment or starter content without exact file/content boundaries, routes into hardening prematurely, or reopens predictive search, cart behavior, recommendations, companion behavior, checkout/billing-sensitive behavior, or per-preset architecture.
