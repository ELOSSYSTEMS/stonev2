# PROGRESS

## Current Phase

- `Verified`: Roadmap phase: the verified merchandising foundation is extended through one bounded in-family spotlight variant and the repo is positioned for the corresponding verification unit.

## Approved Next Action

- `Verified`: `UNIT-085` verify the post-foundation merchandising spotlight variant slice.

## Last Completed Unit

- `Verified`: Unit ID: `UNIT-084`
- `Verified`: Summary: extended the existing merchandising family through one promotion-first spotlight mode inside `stone-featured-collection-grid`, updated the shared `stone-product-card` contract to support restrained emphasis and optional excerpt display, and kept the runtime change inside the same approved six-file boundary.

## Verification Status

- `Verified`: Verdict: PASS for `UNIT-084`; the post-foundation merchandising spotlight variant slice is complete.
- `Verified`: Evidence: `project/assets/stone-base.css`; `project/snippets/stone-product-card.liquid`; `project/sections/stone-featured-collection-grid.liquid`; `project/templates/page.stone-runtime-featured-collection-grid.json`; `project/locales/he.default.schema.json`; `project/locales/en.schema.json`; template and locale validation via `node -`; `grep` render-call checks for `stone-product-card`; `grep` spotlight variant checks for `card_emphasis: 'spotlight'` and `show_excerpt: true`; `grep` selected-collection checks for `section.settings.collection` and `stone_selected_collection.products`; forbidden-scope grep via `grep`; protected-surface diff via `git diff --name-only`; exact runtime boundary validation via `node -`; `node HARNESS/checks/check-state-artifacts.mjs`; `node HARNESS/checks/check-next-action-scope.mjs`; `node HARNESS/checks/check-plan-exists.mjs`; `node HARNESS/checks/check-handoff-completeness.mjs`; `node HARNESS/checks/check-approval-state.mjs`; `node HARNESS/checks/check-lock-state.mjs`; `node HARNESS/checks/harness-check.mjs`

## Active Blockers

- `Verified`: Runtime expansion remains paused beyond the approved `UNIT-085` verification scope until the spotlight variant is verified and the next frontier is re-evaluated.
- `Inference`: Any discovered need for second-file proliferation, compare-at pricing logic, badges, urgency logic, JS, protected-surface edits, rails/carousels, or shoppable-media behavior remains a new boundary problem rather than permission to widen `UNIT-084`.

## Resume Notes

- `Verified`: Resume from branch `codex/unit-084-merchandising-spotlight-impl`.
- `Verified`: Verify the exact same six runtime files only.
- `Verified`: Confirm the spotlight mode remained an in-family extension rather than a second merchandising section concept.
