# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-132` Author the Phase 3 collection support strip runtime-facing boundary package.

## Objective

- `Verified`: Define whether one exact runtime-facing `collection support strip` boundary can be stated for an editor-authored collection-page-hosted support strip without authorizing runtime implementation.
- `Verified`: Keep the work docs-only and fail closed on runtime authorization.
- `Verified`: Do not normalize collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media scope, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as implicit next steps.
- `Verified`: Keep `support-strip visibility` narrow and reference-only, and keep the strip contract editor-authored rather than collection-derived.

## Plan Reference

- `Path:` `workspace/plans/phase-3-collection-support-strip-runtime-readiness-proposal-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/`
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

Fail closed if the boundary package starts authorizing runtime work directly, or if it treats collection-derived content, collection-template rewrites, collection archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media scope, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as implicitly approved.
