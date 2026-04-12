# PROGRESS

## Current Phase

- `Verified`: Roadmap phase: the first broader merchandising foundation slice is verified and the repo is positioned for a docs-only post-foundation frontier review.

## Approved Next Action

- `Verified`: `UNIT-083` author the post-foundation merchandising frontier review.

## Last Completed Unit

- `Verified`: Unit ID: `UNIT-082`
- `Verified`: Summary: verified that `UNIT-081` stayed inside the exact approved six-file runtime boundary, reused the shared product-card snippet, stayed non-JS, and avoided protected-surface or heavier-commerce drift.

## Verification Status

- `Verified`: Verdict: PASS for `UNIT-082`; the first broader merchandising foundation implementation slice remains valid after bounded verification.
- `Verified`: Evidence: `git show --stat --name-only --format=fuller HEAD`; `git diff --name-only HEAD^ HEAD`; `git diff --name-only HEAD^ HEAD -- project`; exact runtime boundary validation via `node -`; template-shape and locale-subtree parity validation via `node -`; `grep` render-call check for `stone-product-card`; `grep` selected-collection checks for `section.settings.collection` and `stone_selected_collection.products`; `grep` native money-rendering check; forbidden-scope grep via `grep`; protected-surface diff via `git diff --name-only`; `node HARNESS/checks/check-state-artifacts.mjs`; `node HARNESS/checks/check-next-action-scope.mjs`; `node HARNESS/checks/check-plan-exists.mjs`; `node HARNESS/checks/check-handoff-completeness.mjs`; `node HARNESS/checks/check-approval-state.mjs`; `node HARNESS/checks/check-lock-state.mjs`; `node HARNESS/checks/harness-check.mjs`

## Active Blockers

- `Verified`: Runtime expansion remains paused until `UNIT-083` records the next bounded Phase 3 decision.
- `Inference`: Any discovered need for JS, protected-surface edits, extra snippets, extra sections, extra templates, or commerce-action behavior remains a new boundary problem rather than permission to widen the verified foundation slice.

## Resume Notes

- `Verified`: Resume from branch `codex/unit-082-merchandising-foundation-verify`.
- `Verified`: Use `UNIT-083` only for docs-only re-evaluation and next-boundary definition.
- `Verified`: Do not touch `project/` runtime files until a new explicit planning package is authored and approved.
