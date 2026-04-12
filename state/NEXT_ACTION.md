# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-061` Execute the bounded Phase 2 minimal editorial quote implementation slice.

## Objective

- `Verified`: Implement the approved minimal editorial quote slice and keep it bounded to one restrained quote-led story-and-editorial proof.
- `Verified`: Keep `UNIT-061` limited to the approved five runtime files plus state and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-editorial-quote-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-editorial-quote.liquid`
- `project/templates/page.stone-runtime-editorial-quote.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
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

Stop if implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-editorial-quote.liquid`, `project/templates/page.stone-runtime-editorial-quote.json`, `project/locales/he.default.schema.json`, `project/locales/en.schema.json`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`; stop if protected-surface edits, `project/blocks/`, any new snippet file, any second section file, any second template file, testimonial-stack behavior, ratings, logos, avatars, accordion behavior, tab behavior, icon systems, illustration dependencies, overlay behavior, custom JS-driven behavior, or broader family work becomes necessary, and replan instead of broadening scope.
