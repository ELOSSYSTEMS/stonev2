# Phase 2 Minimal Process Steps Checks v1

## Planning Checks

- `Verified`: Create all five planning artifacts inside `workspace/plans/phase-2-minimal-process-steps-v1/`.
- `Verified`: Update `state/ORCHESTRATION_STATE.md`, `state/NEXT_ACTION.md`, `state/STATUS.md`, `state/PROGRESS.md`, `state/FEATURE_STATUS.md`, and `workspace/handoff/CURRENT_HANDOFF.md` to reflect the completed planning unit and the next implementation unit.
- `Verified`: Keep all edits inside `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.

## Future Implementation Checks For `UNIT-058`

- `Verified`: Confirm only `project/assets/stone-base.css`, `project/sections/stone-process-steps.liquid`, `project/templates/page.stone-runtime-process-steps.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json` change, plus normal state and handoff updates.
- `Verified`: Confirm `project/snippets/stone-section-shell.liquid` is reused unchanged.
- `Verified`: Confirm the section remains static, non-JS, and bounded to a restrained editorial process sequence.
- `Verified`: Confirm no accordion behavior, tab behavior, icon systems, illustration dependencies, or campaign process behavior appear in the slice.
- `Verified`: Confirm Hebrew and English locale additions remain structurally aligned.

## Required Commands

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`
