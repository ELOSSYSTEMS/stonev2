# Stone V2 Handoff Rules

## Handoff Purpose

- `Verified`: `workspace/handoff/CURRENT_HANDOFF.md` is the canonical resume artifact for the next governed session.
- `Verified`: Handoffs must preserve the current state, the last completed bounded unit, the active next action, and any unresolved assumptions.

## Required Handoff Content

- `Verified`: A concise summary of what changed or was seeded.
- `Verified`: The current repo state and active phase.
- `Verified`: Explicit file or surface references for the changes that matter next.
- `Verified`: Open assumptions or unresolved ambiguities stated explicitly.
- `Verified`: A recommended next bounded step that stays within roadmap phase discipline.
- `Verified`: Resume checks that should run before work continues.

## Handoff Quality Rules

- `Verified`: Do not describe a pass as complete unless the listed checks actually ran.
- `Verified`: Do not hide blockers, phase boundaries, or runtime gaps.
- `Inference`: The strongest handoff is short, evidence-backed, and aligned with `state/`.

## Synchronization Rules

- `Verified`: `CURRENT_HANDOFF.md` must agree with `state/STATUS.md`, `state/PROGRESS.md`, and `state/NEXT_ACTION.md`.
- `Verified`: A completed bounded unit should update the handoff before the session ends.
- `Inference`: History entries under `workspace/handoff/history/` should only be added when the current handoff is intentionally rotated.
