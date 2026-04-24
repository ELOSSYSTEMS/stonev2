# UNIT-SA-014.v1: Phase 3B Second-Drawer Candidate Boundary

Date: 2026-04-24

Status: DOCS ONLY; READY FOR OWNER REVIEW; NOT RUNTIME AUTHORIZATION

Runtime files changed by this unit: none

## Goal

Choose the next smallest safe second-drawer Phase 3B runtime candidate after the shared drawer primitive passed browser preview regression proof.

## Scope

This docs-only unit covers only:

- Record the verified status of `UNIT-SA-012` and `UNIT-SA-013`.
- Choose the next smallest safe second drawer candidate.
- Define the exact allowed and disallowed future write sets.
- Define pass/fail gates, stop conditions, rollback, and final recommendation.

## Out Of Scope

This unit does not authorize or perform:

- Runtime edits.
- `project/**` edits.
- Shopify theme push.
- Shopify theme dev.
- Remote theme mutation.
- Cart drawer runtime.
- Predictive search runtime.
- Search API JavaScript.
- Modal stack runtime.
- Overlay group runtime.
- Theme-block architecture.
- Preset composition.
- Template, snippet, config, or locale edits.

## Source Evidence Read

Verified:

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-011.v1.md`
- `workspace/qa/reports/unit-sa-012-drawer-primitive-report.md`
- `workspace/qa/reports/unit-sa-013-drawer-preview-regression-report.md`
- `workspace/qa/reports/unit-sa-013-browser-proof.json`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-main-search.liquid`
- `project/assets/stone-drawer.js`
- `state/NEXT_ACTION.md`
- `state/ORCHESTRATION_STATE.md`
- `state/STATUS.md`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `git status --short`

## Verified Status Of UNIT-SA-012 And UNIT-SA-013

Verified:

- `UNIT-SA-012` generalized `stone-drawer.js` to shared drawer attributes while preserving mobile drawer compatibility.
- `UNIT-SA-012` changed only `project/assets/stone-drawer.js`, `project/sections/stone-header-main.liquid`, `project/sections/stone-mobile-navigation-drawer.liquid`, and `project/assets/stone-base.css`.
- `UNIT-SA-012` did not add search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, or preset composition.
- `UNIT-SA-013` preview-validated the shared drawer primitive against unpublished `Stonev2` theme id `156487712965`.
- `UNIT-SA-013` browser proof passed mobile LTR, desktop, and mobile RTL regression checks.
- `UNIT-SA-013` proved generic and legacy drawer states, body locks, focus trap, Escape close, focus return, desktop trigger suppression, `/he` `lang="he"` and `dir="rtl"`, and RTL right-side drawer placement.
- `shopify theme check --path project --no-color` passed during `UNIT-SA-013`.
- The shared drawer primitive lane is implemented, preview-tested, and complete for its approved scope.

## Current Runtime Evidence

Verified:

- `project/sections/stone-main-search.liquid` already provides a no-JS search route form and paginated search results.
- `project/sections/stone-header-main.liquid` already includes a no-JS search form when `show_search` is enabled.
- `project/assets/stone-drawer.js` now supports generic drawer attributes that can be reused without introducing a search-specific JavaScript module.

Inference:

- A search drawer shell can reuse the shared drawer primitive and submit to `routes.search_url` without predictive search.
- A cart drawer remains purchase-adjacent and should stay behind a later cart-specific boundary with cart state and checkout-risk gates.
- Predictive search requires a separate data/API contract and should not be bundled with the shell drawer.
- The smallest safe second drawer candidate is a search drawer shell only, using no predictive search and no search JavaScript.

## Phase 3B Boundary Decision

Selected next runtime slice:

`UNIT-SA-015: Search Drawer Shell Only`

Purpose:

- Add a basic search drawer shell that reuses the shared drawer primitive.
- Submit searches through Shopify's existing no-JS search route.
- Preserve the existing full search route and search results section.
- Avoid predictive search, cart drawer, modal stack, overlay group, theme blocks, templates, snippets, config, and preset composition.

Reason:

- Search drawer shell is less purchase-risky than cart drawer.
- It can be progressive and route-based without predictive search or API JavaScript.
- It exercises the shared drawer primitive with a second drawer surface while keeping behavior bounded.

## Exact Proposed Next Runtime Unit

Unit:

`UNIT-SA-015: Search Drawer Shell Only`

Execution class:

- Bounded runtime implementation.

Prerequisites:

- Owner explicitly authorizes `UNIT-SA-015`.
- `UNIT-SA-014` is accepted or superseded.
- `project/**` is clean or any unrelated dirty runtime files are explicitly classified before work begins.
- The unit does not add cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, or preset composition.

Runtime objective:

- Add one search drawer shell using the existing shared drawer primitive and route-based search form only.

## Exact Allowed Future Write Set For UNIT-SA-015

If `UNIT-SA-015` is authorized, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/sections/stone-search-drawer.liquid` | Create | Search drawer shell with generic drawer attributes and route-based search form only. |
| `project/sections/stone-header-main.liquid` | Modify | Add minimum search drawer trigger and ARIA wiring only; preserve existing no-JS search fallback policy. |
| `project/assets/stone-base.css` | Modify | Search drawer layout, responsive visibility, focus-visible states, and RTL-safe spacing only. |
| `project/locales/en.schema.json` | Modify | English schema labels for the search drawer only. |
| `project/locales/he.default.schema.json` | Modify | Hebrew schema labels for the search drawer only. |

Allowed verification artifacts for `UNIT-SA-015`:

- `workspace/qa/reports/unit-sa-015-search-drawer-report.md`
- `workspace/qa/reports/unit-sa-015-*.png` only if browser proof is authorized and captured.
- `workspace/verify/unit-sa-015/**` only if command receipts are needed.

## Exact Disallowed Write Set

Disallowed for `UNIT-SA-014`:

- `project/**`
- Shopify remote themes

Disallowed for future `UNIT-SA-015` unless separately authorized:

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
- `project/assets/stone-search.js`
- `project/assets/stone-cart.js`
- `project/assets/stone-modal.js`
- `project/layout/theme.liquid`
- `project/locales/en.default.json`
- `project/locales/he.json`
- Any predictive-search endpoint or predictive-search JavaScript.
- Any cart quantity, cart form, add-to-cart, checkout, or billing-sensitive behavior.
- Any preset composition or template JSON mutation.
- Any theme-block architecture.

## Pass/Fail Gates

Pass gates for this docs-only `UNIT-SA-014`:

- PASS: `UNIT-SA-014.v1.md` exists.
- PASS: Only this docs-only plan file and state/handoff files are added or changed by the unit.
- PASS: No `project/**` changes are introduced.
- PASS: Required non-runtime harness checks pass.
- PASS: The next runtime slice is bounded to search drawer shell only.

Pass gates for future `UNIT-SA-015`:

- PASS: Exact write set is limited to the allowed runtime files listed above.
- PASS: Search drawer opens from the header search trigger.
- PASS: Search drawer closes by close control and `Escape`.
- PASS: Focus is trapped inside the open search drawer.
- PASS: Focus returns to the triggering control.
- PASS: Body scroll lock is applied and restored.
- PASS: Search form submits to `routes.search_url` with method `get`.
- PASS: Empty query behavior is safe and does not require JavaScript.
- PASS: Existing full search route remains intact.
- PASS: RTL layout is verified on `/he` or another confirmed RTL route.
- PASS: Theme Check and harness checks pass.
- PASS: No cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition are introduced.

Fail gates:

- FAIL: Any write occurs under `project/**` during `UNIT-SA-014`.
- FAIL: Future `UNIT-SA-015` writes outside the allowed write set.
- FAIL: Search drawer requires predictive search or search JavaScript.
- FAIL: Existing search route or `stone-main-search` behavior regresses.
- FAIL: Focus trap, Escape close, focus return, or body scroll-lock restore regresses.
- FAIL: RTL drawer placement regresses.
- FAIL: Cart, predictive search, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition are bundled into the search drawer shell unit.

## Stop Conditions

Stop `UNIT-SA-014` if:

- A runtime edit is required.
- A Shopify remote command is required.
- `project/**` changes appear from this unit.
- Required source evidence is missing and cannot be classified.

Stop future `UNIT-SA-015` if:

- Owner has not explicitly authorized `UNIT-SA-015` runtime execution.
- The repo has unclassified dirty `project/**` files.
- The implementation requires cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition.
- Accessibility behavior cannot be verified.
- RTL cannot be verified and the owner has not explicitly waived the RTL gate.
- Any command would mutate a live Shopify theme or require `--allow-live`.

## Rollback

Rollback for this docs-only `UNIT-SA-014`:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-014.v1.md`.
- Revert related state/handoff updates from this unit.

Rollback for future `UNIT-SA-015`:

- Revert only:
  - `project/sections/stone-search-drawer.liquid`
  - `project/sections/stone-header-main.liquid`
  - `project/assets/stone-base.css`
  - `project/locales/en.schema.json`
  - `project/locales/he.default.schema.json`
- Delete only `UNIT-SA-015` QA or verification artifacts created for that unit.
- Do not touch cart drawer, predictive search, overlay, blocks, templates, snippets, config, runtime locale, or preset files as part of rollback unless a separately authorized unit changed them.

## Final Recommendation

Use `UNIT-SA-014` as the Phase 3B second-drawer candidate boundary.

Recommended next step:

- Authorize `UNIT-SA-015: Search Drawer Shell Only`.

Do not authorize yet:

- Cart drawer.
- Predictive search.
- Search JavaScript.
- Modal stack.
- Overlay group.
- Theme blocks.
- Preset composition.

The correct next runtime move is the search drawer shell only, using the shared drawer primitive and route-based search form with the exact future write set listed in this plan.
