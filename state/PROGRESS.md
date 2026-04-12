# PROGRESS

## Current Phase

- `Verified`: Roadmap phase: the merchandising family spotlight variant is verified and the repo is positioned for a docs-only post-spotlight frontier review.

## Approved Next Action

- `Verified`: `UNIT-086` author the post-spotlight merchandising frontier review.

## Last Completed Unit

- `Verified`: Unit ID: `UNIT-085`
- `Verified`: Summary: verified that the spotlight variant stayed inside the exact approved six-file runtime boundary, remained an in-family extension of the existing merchandising family, and avoided protected-surface or heavier-commerce drift.

## Verification Status

- `Verified`: Verdict: PASS for `UNIT-085`; the bounded spotlight-variant extension of the merchandising family remains valid after verification.
- `Verified`: Evidence: `git show --stat --name-only --format=fuller HEAD`; `git diff --name-only HEAD^ HEAD`; `git diff --name-only HEAD^ HEAD -- project`; exact runtime boundary validation via `node -`; template and locale parity validation via `node -`; `grep` render-call checks for `stone-product-card`; `grep` spotlight checks for `card_emphasis: 'spotlight'`, `show_excerpt: true`, and `layout_mode`; `grep` selected-collection checks for `section.settings.collection` and `stone_selected_collection.products`; forbidden-scope grep via `grep`; protected-surface diff via `git diff --name-only`; `node HARNESS/checks/check-state-artifacts.mjs`; `node HARNESS/checks/check-next-action-scope.mjs`; `node HARNESS/checks/check-plan-exists.mjs`; `node HARNESS/checks/check-handoff-completeness.mjs`; `node HARNESS/checks/check-approval-state.mjs`; `node HARNESS/checks/check-lock-state.mjs`; `node HARNESS/checks/harness-check.mjs`

## Active Blockers

- `Verified`: Runtime expansion remains paused until `UNIT-086` records the next bounded Phase 3 decision.
- `Inference`: Any discovered need for second-file proliferation, compare-at pricing logic, badges, urgency logic, JS, protected-surface edits, rails/carousels, or shoppable-media behavior remains a new boundary problem rather than permission to widen the verified spotlight slice.

## Resume Notes

- `Verified`: Resume from branch `codex/unit-085-merchandising-spotlight-verify`.
- `Verified`: Use `UNIT-086` only for docs-only re-evaluation and next-boundary definition.
- `Verified`: Do not touch `project/` runtime files until a new explicit planning package is authored and approved.
