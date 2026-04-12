# Phase 2 Minimal Blog Highlights Checks v1

## Planning Checks

- `Verified`: Create all five planning artifacts inside `workspace/plans/phase-2-minimal-blog-highlights-v1/`.
- `Verified`: Update `state/ORCHESTRATION_STATE.md`, `state/NEXT_ACTION.md`, `state/STATUS.md`, `state/PROGRESS.md`, `state/FEATURE_STATUS.md`, and `workspace/handoff/CURRENT_HANDOFF.md` to reflect the completed planning unit and the next implementation gate.
- `Verified`: Keep all edits inside `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.

## Future Implementation Checks For `UNIT-064`

- `Verified`: Confirm only `project/assets/stone-base.css`, `project/sections/stone-blog-highlights.liquid`, `project/templates/page.stone-runtime-blog-highlights.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json` change, plus normal state and handoff updates.
- `Verified`: Confirm `project/snippets/stone-section-shell.liquid` is reused unchanged.
- `Verified`: Confirm the section remains static, non-JS, and bounded to one restrained lead-plus-secondary manual highlight composition.
- `Verified`: Confirm no live objects, filters, dates, tags, sliders, drawers, overlays, or product-card behavior appear in the slice.
- `Verified`: Confirm the resulting structure remains materially distinct from `stone-content-card-strip.liquid`.
- `Verified`: Confirm Hebrew and English locale additions remain structurally aligned.

## Required Commands

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`
