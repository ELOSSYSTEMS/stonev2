# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-068` Execute one bounded object-aware article-highlights implementation slice.

## Objective

- `Verified`: Implement the first approved object-aware content/blog proof under the formalized expanded boundary.
- `Verified`: Keep `UNIT-068` limited to the exact approved five runtime files plus `state/` and `workspace/handoff/CURRENT_HANDOFF.md` only.

## Plan Reference

- `Path:` `workspace/plans/phase-2-object-aware-content-blog-boundary-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-base.css`
- `project/sections/stone-blog-article-highlights.liquid`
- `project/templates/page.stone-runtime-blog-article-highlights.json`
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

Stop if implementation needs any runtime file outside the approved five runtime files; stop if it needs protected-surface edits, `project/blocks/`, a new snippet, a second section, a second template, JS, filters, tags, search, pagination, slider behavior, drawer behavior, overlay behavior, commerce semantics, or broader composition, and fail closed instead of broadening scope.
