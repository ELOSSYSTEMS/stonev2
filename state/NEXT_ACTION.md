# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-138` Author the Phase 4 preset-pack shared-defaults proposal.

## Objective

- `Verified`: Define shared preset defaults for the five roadmap presets only across fields that `UNIT-137` judged ready or partially ready now.
- `Verified`: Author homepage sequence, tone and density defaults, homepage-safe merchandising emphasis, homepage-safe trust and support assumptions, and matching homepage starter content structure using admitted shared families and shared settings only.
- `Verified`: Keep collection-dependent and PDP-dependent assumptions explicit, blocked, or placeholder-bound rather than silently filling them in.
- `Verified`: Keep the work docs-only and fail closed on runtime authorization.
- `Verified`: Do not treat preset defaults as implementation approval.
- `Verified`: Do not reopen broader `collection companion` review, broader companion-family review, support-strip implementation admission, collection-derived strip content, collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media scope, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as implicit next steps.

## Plan Reference

- `Path:` `workspace/plans/phase-4-preset-pack-boundary-proposal-v1/HANDOFF.v1.md`

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

Fail closed if the proposal starts authorizing runtime work directly, if it treats deferred `collection companion` or `PDP companion` work as implicitly resolved by Phase 4 planning, if it fills collection behavior, PDP support behavior, collection-template starter structure, or PDP-template starter structure as if companion-family evidence already exists, or if it reopens broader `collection companion`, broader companion-family review, support-strip implementation admission, collection-derived content, collection-template rewrites, collection archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media scope, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as implicitly approved.
