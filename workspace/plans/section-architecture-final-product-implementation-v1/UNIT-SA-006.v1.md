# UNIT-SA-006.v1: Phase 3B Global Behavior Boundary Plan

Date: 2026-04-24

Status: DOCS ONLY; READY FOR OWNER REVIEW; NOT RUNTIME AUTHORIZATION

Runtime files changed by this unit: none

## Goal

Close the header/footer proof lane after UNIT-SA-005 and the RTL retry, then define the smallest safe Phase 3B runtime boundary without implementing it.

## Scope

This docs-only unit covers only:

- Record the current UNIT-SA-004 and UNIT-SA-005 proof status.
- Identify the first safe Phase 3B runtime slice.
- Define the exact allowed and disallowed future write sets for that next runtime slice.
- Define pass/fail gates, stop conditions, rollback, and final recommendation.

## Out Of Scope

This unit does not authorize or perform:

- Runtime edits.
- `project/**` edits.
- Shopify theme push.
- Shopify theme dev.
- Remote theme mutation.
- `overlay-group.json`.
- `/blocks` files.
- `_blocks.liquid`.
- Cart drawer runtime.
- Search drawer runtime.
- Predictive search runtime.
- Modal stack runtime.
- Overlay group runtime.
- Theme-block architecture.
- Preset composition.
- Template, snippet, asset, section, config, or locale edits.

## Source Evidence Read

Verified:

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-004.v1.md`
- `workspace/qa/reports/unit-sa-004-header-footer-preview-report.md`
- `workspace/qa/reports/unit-sa-004-rerun-after-unit-sa-005-report.md`
- `workspace/qa/reports/unit-sa-004-rtl-retry-theme-dev.err.log`
- `workspace/qa/reports/unit-sa-004-rtl-retry2-theme-dev.err.log`
- `state/NEXT_ACTION.md`
- `state/ORCHESTRATION_STATE.md`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `git show --oneline --stat --summary --no-renames 4267ce0`
- `git status --short`
- `git status --short -- project`
- `git diff --name-only -- project`
- `git ls-files --others --exclude-standard -- project`

Inference:

- The current user request is the explicit authorization for this docs-only UNIT-SA-006 artifact because current state files still route to the older UNIT-192 / UNIT-184 lane.

## Verified Status Of UNIT-SA-004 And UNIT-SA-005

Verified:

- Current branch is `codex/unit-141-phase-4-homepage-first-preset-governed-pause`.
- `4267ce0` is `Complete UNIT-SA-005 header footer shell styling`.
- `4267ce0` changed only `project/assets/stone-base.css` and `project/assets/stone-tokens.css`.
- The original UNIT-SA-004 preview report failed visual QA because header navigation and footer spacing were not release-quality.
- The UNIT-SA-004 rerun report after UNIT-SA-005 passed LTR render, visual spacing, responsive mobile wrapping, Theme Check, and harness checks.
- The UNIT-SA-004 rerun report still marked RTL as partial because `/he` returned 404 during that rerun.
- The first RTL retry log shows `/he` and `/he/` returning 200 before later 500s on `/he`.
- The second RTL retry log shows `/he`, `/he/`, and `/he/collections/all` returning 200 after preview restart.
- Current `project/**` status is clean at the time this plan was authored.

Inference:

- UNIT-SA-005 cleared the visual defect that blocked UNIT-SA-004.
- The second RTL retry clears the route-availability blocker recorded by the rerun report.
- The header/footer proof lane can be treated as closed for Phase 3B boundary planning.

Unknown:

- No text artifact found in `workspace/qa/reports/` records the exact HTML attributes `lang="he"` and `dir="rtl"` from the RTL retry. The current user prompt states that proof, but this plan does not treat it as independently reverified from a persisted text artifact.

## Phase 3B Boundary Decision

Selected first runtime slice:

`UNIT-SA-007: Mobile Navigation Drawer Shell And Behavior`

Purpose:

- Add only the mobile navigation drawer shell and minimum drawer behavior required to open, close, trap focus, restore focus, honor reduced motion, and avoid body scroll leakage.

Reason:

- Mobile navigation is the smallest global behavior slice that depends directly on the completed header/footer shell.
- It does not require cart state, search API behavior, predictive search, modal stacking, overlay group architecture, theme blocks, or preset composition.

## Exact Proposed Next Runtime Unit

Unit:

`UNIT-SA-007: Mobile Navigation Drawer Shell And Behavior`

Execution class:

- Bounded runtime implementation.

Prerequisites:

- Owner explicitly authorizes UNIT-SA-007.
- This UNIT-SA-006 plan is accepted or superseded.
- `project/**` is clean or any unrelated dirty runtime files are explicitly classified before work begins.
- No cart/search/predictive-search behavior is bundled into the unit.

Runtime objective:

- Add a mobile drawer section and connect it to the existing header with lightweight progressive JavaScript.

## Exact Allowed Future Write Set For UNIT-SA-007

If UNIT-SA-007 is authorized, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/sections/stone-mobile-navigation-drawer.liquid` | Create | Mobile navigation drawer shell, section schema, section-block navigation/link content, and no cart/search behavior. |
| `project/sections/stone-header-main.liquid` | Modify | Add the minimum mobile drawer trigger and ARIA wiring only. |
| `project/assets/stone-drawer.js` | Create | Lightweight drawer open/close, ESC close, focus trap, focus return, and scroll-lock restore. |
| `project/assets/stone-base.css` | Modify | Drawer layout, responsive visibility, RTL-safe spacing, reduced-motion states, and focus-visible styles. |
| `project/locales/en.schema.json` | Modify | English schema labels for the mobile drawer and trigger only. |
| `project/locales/he.default.schema.json` | Modify | Hebrew schema labels for the mobile drawer and trigger only. |

Allowed verification artifacts for UNIT-SA-007:

- `workspace/qa/reports/unit-sa-007-mobile-drawer-report.md`
- `workspace/qa/reports/unit-sa-007-*.png` only if browser proof is authorized and captured.
- `workspace/verify/unit-sa-007/**` only if command receipts are needed.

## Exact Disallowed Write Set

Disallowed for UNIT-SA-006:

- `project/**`
- Shopify remote themes

Disallowed for future UNIT-SA-007 unless separately authorized:

- `project/sections/overlay-group.json`
- `project/sections/stone-cart-drawer.liquid`
- `project/sections/stone-search-drawer.liquid`
- `project/sections/stone-newsletter-popup.liquid`
- `project/sections/stone-privacy-banner.liquid`
- `project/sections/apps.liquid`
- `project/sections/_blocks.liquid`
- `project/blocks/**`
- `project/templates/**`
- `project/snippets/**`
- `project/config/**`
- `project/assets/stone-modal.js`
- `project/assets/stone-search.js`
- `project/assets/stone-cart.js`
- `project/layout/theme.liquid`
- `project/locales/en.default.json`
- `project/locales/he.json`
- Any predictive-search endpoint or predictive-search JavaScript.
- Any cart quantity, cart form, add-to-cart, checkout, or billing-sensitive behavior.
- Any preset composition or template JSON mutation.
- Any theme-block architecture.

## Pass/Fail Gates

Pass gates for this docs-only UNIT-SA-006:

- PASS: `UNIT-SA-006.v1.md` exists.
- PASS: Only this docs-only plan file is added or changed by the unit.
- PASS: No `project/**` changes are introduced.
- PASS: Required non-runtime harness checks are run and results are recorded.
- PASS: The next runtime slice is bounded to mobile navigation drawer shell/behavior only.

Pass gates for future UNIT-SA-007:

- PASS: Exact write set is limited to the six runtime files listed above.
- PASS: Drawer opens from the mobile header trigger.
- PASS: Drawer closes by close button, ESC, outside click if implemented, and navigation action if applicable.
- PASS: Focus is trapped inside the open drawer.
- PASS: Focus returns to the triggering control.
- PASS: Body scroll lock is applied and restored.
- PASS: Reduced motion is honored.
- PASS: Drawer labels and schema text exist in English and Hebrew schema locale files.
- PASS: RTL layout is verified on `/he` or another confirmed RTL route.
- PASS: No cart drawer, search drawer, predictive search, modal stack, overlay group, theme blocks, or preset composition are introduced.
- PASS: Theme Check and harness checks pass.

Fail gates:

- FAIL: Any write occurs under `project/**` during UNIT-SA-006.
- FAIL: Future UNIT-SA-007 writes outside the allowed write set.
- FAIL: Drawer behavior lacks testable focus management.
- FAIL: Drawer behavior cannot restore focus to the trigger.
- FAIL: Body scroll lock can remain stuck after drawer close.
- FAIL: RTL route is unavailable and no owner waiver is recorded.
- FAIL: Cart, search, predictive search, overlay group, theme blocks, templates, snippets, config, or preset composition are bundled into the mobile drawer slice.

## Stop Conditions

Stop UNIT-SA-006 if:

- A runtime edit is required.
- A Shopify remote command is required.
- `project/**` changes appear from this unit.
- Required source evidence is missing and cannot be classified.

Stop future UNIT-SA-007 if:

- Owner has not explicitly authorized UNIT-SA-007 runtime execution.
- The repo has unclassified dirty `project/**` files.
- The implementation requires cart, search, predictive search, overlay group, or theme-block work.
- The drawer requires template mutation.
- Accessibility behavior cannot be verified.
- RTL cannot be verified and the owner has not explicitly waived the RTL gate.
- Any command would mutate a live Shopify theme or require `--allow-live`.

## Rollback

Rollback for this docs-only UNIT-SA-006:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-006.v1.md`.

Rollback for future UNIT-SA-007:

- Revert only:
  - `project/sections/stone-mobile-navigation-drawer.liquid`
  - `project/sections/stone-header-main.liquid`
  - `project/assets/stone-drawer.js`
  - `project/assets/stone-base.css`
  - `project/locales/en.schema.json`
  - `project/locales/he.default.schema.json`
- Delete only UNIT-SA-007 QA or verification artifacts created for that unit.
- Do not touch cart, search, overlay, blocks, templates, snippets, config, or preset files as part of rollback unless a separately authorized unit changed them.

## Final Recommendation

Use UNIT-SA-006 as the Phase 3B boundary plan.

Recommended next step:

- Authorize `UNIT-SA-007: Mobile Navigation Drawer Shell And Behavior` as the first Phase 3B runtime slice.

Do not authorize:

- Cart drawer.
- Search drawer.
- Predictive search.
- Modal stack.
- Overlay group.
- Theme blocks.
- Preset composition.

The correct next runtime move is the mobile navigation drawer only, with the exact six-file runtime write set listed in this plan.
