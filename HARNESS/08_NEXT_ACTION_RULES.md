# Stone V2 Next Action Rules

## Purpose

- `Verified`: `state/NEXT_ACTION.md` defines the single approved execution target for the next session.
- `Verified`: The next action exists to keep work bounded, testable, and phase-aware.

## Required Shape

- `Verified`: A next action must declare approval state, execution class, and priority.
- `Verified`: A next action must contain exactly one approved unit bullet.
- `Verified`: A next action must list explicit allowed files or surfaces.
- `Verified`: A next action must list explicit required checks.
- `Verified`: A next action must state a stop condition that blocks uncontrolled scope growth.
- `Inference`: A documentation-only unit may mark plan reference as not required when it is canonizing prerequisites rather than implementing runtime code.

## Scope Rules

- `Verified`: A next action must stay within the current roadmap phase.
- `Verified`: Runtime implementation cannot be smuggled into a canon or planning unit.
- `Verified`: If the required surface expands materially, the unit should stop and the state should be updated before continuing.

## Quality Rules

- `Verified`: Prefer one reusable atomic unit over a mixed bundle of unrelated work.
- `Verified`: Allowed surfaces should be specific enough that a checker can validate intent.
- `Inference`: The most reliable next action for this repo immediately after Phase 0 is a canon package for section families, settings taxonomy, and bilingual schema strategy.
