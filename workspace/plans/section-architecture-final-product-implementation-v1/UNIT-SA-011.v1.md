# UNIT-SA-011.v1: Phase 3B Next-Slice Boundary After Mobile Drawer Proof

Date: 2026-04-24

Status: DOCS ONLY; READY FOR OWNER REVIEW; NOT RUNTIME AUTHORIZATION

Runtime files changed by this unit: none

## Goal

Decide the next smallest safe Phase 3B runtime slice after the mobile navigation drawer passed preview validation.

## Scope

This docs-only unit covers only:

- Record the verified status of `UNIT-SA-007`, `UNIT-SA-008`, `UNIT-SA-009`, and `UNIT-SA-010`.
- Identify the smallest safe next runtime boundary after the mobile drawer proof.
- Define the exact allowed and disallowed future write sets for that next runtime boundary.
- Define pass/fail gates, stop conditions, rollback, and final recommendation.

## Out Of Scope

This unit does not authorize or perform:

- Runtime edits.
- `project/**` edits.
- Shopify theme push.
- Shopify theme dev.
- Remote theme mutation.
- Cart drawer runtime.
- Search drawer runtime.
- Predictive search runtime.
- Modal stack runtime.
- Overlay group runtime.
- Theme-block architecture.
- Preset composition.
- Template, snippet, config, locale, or section construction.

## Source Evidence Read

Verified:

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-006.v1.md`
- `workspace/qa/reports/unit-sa-007-mobile-drawer-report.md`
- `workspace/qa/reports/unit-sa-009-mobile-drawer-preview-report.md`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-mobile-navigation-drawer.liquid`
- `project/assets/stone-drawer.js`
- `project/sections/stone-main-search.liquid`
- `state/NEXT_ACTION.md`
- `state/ORCHESTRATION_STATE.md`
- `state/STATUS.md`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `git status --short`

## Verified Status Of UNIT-SA-007 Through UNIT-SA-010

Verified:

- `UNIT-SA-007` implemented the mobile navigation drawer shell and behavior inside the exact six-file runtime boundary defined by `UNIT-SA-006`.
- `UNIT-SA-008` verified the exact runtime file boundary, JavaScript syntax, locale JSON validity, embedded section schema validity, Theme Check, and protected-surface drift scan.
- `UNIT-SA-009` preview-validated the mobile drawer against unpublished `Stonev2` theme id `156487712965`.
- `UNIT-SA-009` browser proof confirmed home route status 200, mobile trigger visibility, drawer open/close behavior, focus movement into the drawer, Escape close, focus return, Shift+Tab focus trapping, desktop trigger/nav behavior, `/he` status 200, `lang="he"`, `dir="rtl"`, and right-side RTL drawer placement.
- `UNIT-SA-010` repaired the RTL drawer placement defect with a CSS-only change in `project/assets/stone-base.css`.
- `shopify theme check --path project --no-color` passed after the repair.
- Required harness checks passed after state synchronization.
- The mobile drawer lane is implemented, preview-tested, and complete for its approved scope.

## Current Runtime Evidence

Verified:

- `project/assets/stone-drawer.js` is currently mobile-drawer-specific and uses `data-stone-mobile-drawer*` selectors and body lock state.
- `project/sections/stone-header-main.liquid` contains the live mobile drawer trigger and embedded mobile drawer shell.
- `project/sections/stone-mobile-navigation-drawer.liquid` exists as a standalone section file with matching mobile drawer behavior attributes.
- `project/sections/stone-main-search.liquid` already provides a no-JS search route form and paginated search results.
- The header currently includes a no-JS search form when `show_search` is enabled.

Inference:

- Adding search drawer, cart drawer, predictive search, or modal behavior as the next runtime step would force a second interactive surface before the drawer primitive is generalized and regression-tested.
- Cart drawer is purchase-adjacent and should remain behind a later cart-specific boundary.
- Predictive search requires a separate data/API contract and should not be bundled with drawer shell behavior.
- The smallest safe next runtime slice is to generalize and regression-proof the existing drawer primitive before adding a second drawer.

## Phase 3B Boundary Decision

Selected next runtime slice:

`UNIT-SA-012: Shared Drawer Primitive Generalization And Mobile Drawer Regression Proof`

Purpose:

- Convert the current mobile-specific drawer behavior into a shared drawer primitive that can support later drawer surfaces without adding those surfaces in the same unit.
- Preserve the existing mobile navigation drawer behavior and preview proof expectations.
- Avoid introducing search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, or preset composition.

Reason:

- The first drawer is now proven.
- The next safest move is to stabilize the shared drawer behavior contract before building another drawer.
- This avoids coupling search/cart feature work to behavior refactoring.
- It preserves the no-JS search route and cart link while deferring richer surfaces to later derivative units.

## Exact Proposed Next Runtime Unit

Unit:

`UNIT-SA-012: Shared Drawer Primitive Generalization And Mobile Drawer Regression Proof`

Execution class:

- Bounded runtime implementation.

Prerequisites:

- Owner explicitly authorizes `UNIT-SA-012`.
- `UNIT-SA-011` is accepted or superseded.
- `project/**` is clean or any unrelated dirty runtime files are explicitly classified before work begins.
- The unit does not add a second drawer surface.

Runtime objective:

- Generalize the drawer controller and attributes enough to support future drawer instances while preserving the existing mobile navigation drawer behavior.

## Exact Allowed Future Write Set For UNIT-SA-012

If `UNIT-SA-012` is authorized, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/assets/stone-drawer.js` | Modify | Introduce shared drawer behavior selectors/state while preserving mobile drawer compatibility, focus trap, Escape close, focus return, and body scroll-lock restore. |
| `project/sections/stone-header-main.liquid` | Modify | Add or align generic drawer attributes for the existing mobile drawer trigger and embedded drawer only. |
| `project/sections/stone-mobile-navigation-drawer.liquid` | Modify | Add or align generic drawer attributes for the standalone mobile drawer section only. |
| `project/assets/stone-base.css` | Modify only if required | Add generic drawer state/body-lock aliases only if needed for compatibility; no new drawer visual system. |

Allowed verification artifacts for `UNIT-SA-012`:

- `workspace/qa/reports/unit-sa-012-drawer-primitive-report.md`
- `workspace/qa/reports/unit-sa-012-*.png` only if browser proof is run and captured.
- `workspace/verify/unit-sa-012/**` only if command receipts are needed.

## Exact Disallowed Write Set

Disallowed for `UNIT-SA-011`:

- `project/**`
- Shopify remote themes

Disallowed for future `UNIT-SA-012` unless separately authorized:

- `project/sections/stone-search-drawer.liquid`
- `project/sections/stone-cart-drawer.liquid`
- `project/sections/stone-newsletter-popup.liquid`
- `project/sections/stone-privacy-banner.liquid`
- `project/sections/overlay-group.json`
- `project/sections/apps.liquid`
- `project/sections/_blocks.liquid`
- `project/blocks/**`
- `project/templates/**`
- `project/snippets/**`
- `project/config/**`
- `project/locales/**`
- `project/assets/stone-modal.js`
- `project/assets/stone-search.js`
- `project/assets/stone-cart.js`
- `project/layout/theme.liquid`
- Any predictive-search endpoint or predictive-search JavaScript.
- Any cart quantity, cart form, add-to-cart, checkout, or billing-sensitive behavior.
- Any preset composition or template JSON mutation.
- Any theme-block architecture.

## Pass/Fail Gates

Pass gates for this docs-only `UNIT-SA-011`:

- PASS: `UNIT-SA-011.v1.md` exists.
- PASS: Only this docs-only plan file and state/handoff files are added or changed by the unit.
- PASS: No `project/**` changes are introduced.
- PASS: Required non-runtime harness checks pass.
- PASS: The next runtime slice is bounded to shared drawer primitive generalization and mobile drawer regression proof only.

Pass gates for future `UNIT-SA-012`:

- PASS: Exact write set is limited to the allowed runtime files listed above.
- PASS: Existing mobile navigation drawer still opens from the mobile header trigger.
- PASS: Existing mobile navigation drawer still closes by close control, Escape, and navigation link activation.
- PASS: Focus is still trapped inside the open drawer.
- PASS: Focus still returns to the triggering control.
- PASS: Body scroll lock is still applied and restored.
- PASS: Reduced motion remains honored.
- PASS: RTL drawer placement remains right-aligned on `/he`.
- PASS: Desktop trigger/nav behavior remains unchanged.
- PASS: Theme Check and harness checks pass.
- PASS: Browser regression proof passes if preview execution is authorized.
- PASS: No search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, or preset composition are introduced.

Fail gates:

- FAIL: Any write occurs under `project/**` during `UNIT-SA-011`.
- FAIL: Future `UNIT-SA-012` writes outside the allowed write set.
- FAIL: Mobile drawer behavior regresses.
- FAIL: Focus trap, Escape close, focus return, or body scroll-lock restore regresses.
- FAIL: RTL drawer placement regresses.
- FAIL: Any second drawer surface is introduced in `UNIT-SA-012`.
- FAIL: Search, cart, predictive search, overlay group, theme blocks, templates, snippets, config, locales, or preset composition are bundled into the drawer primitive unit.

## Stop Conditions

Stop `UNIT-SA-011` if:

- A runtime edit is required.
- A Shopify remote command is required.
- `project/**` changes appear from this unit.
- Required source evidence is missing and cannot be classified.

Stop future `UNIT-SA-012` if:

- Owner has not explicitly authorized `UNIT-SA-012` runtime execution.
- The repo has unclassified dirty `project/**` files.
- The implementation requires search drawer, cart drawer, predictive search, overlay group, modal stack, theme blocks, templates, snippets, config, locales, or preset composition.
- Accessibility behavior cannot be verified.
- RTL cannot be verified and the owner has not explicitly waived the RTL gate.
- Any command would mutate a live Shopify theme or require `--allow-live`.

## Rollback

Rollback for this docs-only `UNIT-SA-011`:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-011.v1.md`.
- Revert related state/handoff updates from this unit.

Rollback for future `UNIT-SA-012`:

- Revert only:
  - `project/assets/stone-drawer.js`
  - `project/sections/stone-header-main.liquid`
  - `project/sections/stone-mobile-navigation-drawer.liquid`
  - `project/assets/stone-base.css` if touched
- Delete only `UNIT-SA-012` QA or verification artifacts created for that unit.
- Do not touch search drawer, cart drawer, overlay, blocks, templates, snippets, config, locale, or preset files as part of rollback unless a separately authorized unit changed them.

## Final Recommendation

Use `UNIT-SA-011` as the Phase 3B next-slice boundary after mobile drawer proof.

Recommended next step:

- Authorize `UNIT-SA-012: Shared Drawer Primitive Generalization And Mobile Drawer Regression Proof`.

Do not authorize yet:

- Search drawer.
- Cart drawer.
- Predictive search.
- Modal stack.
- Overlay group.
- Theme blocks.
- Preset composition.

The correct next runtime move is not a new drawer feature. It is the shared drawer primitive generalization and regression proof, with the exact future write set listed in this plan.
