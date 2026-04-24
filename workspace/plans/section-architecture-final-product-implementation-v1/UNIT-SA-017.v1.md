# UNIT-SA-017.v1: Phase 3B Post-Search-Drawer Boundary

Date: 2026-04-25

Status: DOCS ONLY; READY FOR OWNER REVIEW; NOT RUNTIME AUTHORIZATION

Runtime files changed by this unit: none

## Goal

Decide the next smallest safe Phase 3B runtime slice after the search drawer shell passed browser preview proof.

## Scope

This docs-only unit covers only:

- Record the verified status of `UNIT-SA-015` and `UNIT-SA-016`.
- Review the current cart surface in the repo.
- Choose the next smallest safe runtime candidate or stop condition.
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
- Cart quantity updates.
- Cart item removal.
- Add-to-cart behavior.
- Checkout behavior.
- Predictive search runtime.
- Search JavaScript.
- Modal stack runtime.
- Overlay group runtime.
- Theme-block architecture.
- Preset composition.
- Template, snippet, config, or runtime-locale edits.

## Source Evidence Read

Verified:

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-014.v1.md`
- `workspace/qa/reports/unit-sa-015-search-drawer-report.md`
- `workspace/qa/reports/unit-sa-016-search-drawer-preview-report.md`
- `workspace/qa/reports/unit-sa-016-browser-proof.json`
- `project/sections/stone-header-main.liquid`
- `project/assets/stone-drawer.js`
- `project/assets/stone-base.css`
- `state/NEXT_ACTION.md`
- `state/ORCHESTRATION_STATE.md`
- `state/STATUS.md`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `git status --short`

## Verified Status Of UNIT-SA-015 And UNIT-SA-016

Verified:

- `UNIT-SA-015` added a route-based search drawer shell using the shared drawer primitive.
- `UNIT-SA-015` changed only `project/sections/stone-search-drawer.liquid`, `project/sections/stone-header-main.liquid`, `project/assets/stone-base.css`, `project/locales/en.schema.json`, and `project/locales/he.default.schema.json`.
- `UNIT-SA-015` did not add cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, or Shopify remote mutation.
- `UNIT-SA-016` preview-validated the search drawer against unpublished `Stonev2` theme id `156487712965`.
- `UNIT-SA-016` browser proof passed mobile LTR, desktop, route-based search submission, and mobile RTL checks.
- `UNIT-SA-016` proved search drawer open, close control close, Escape close, focus trap, focus return, body lock restore, one header/footer, `/he` `lang="he"`, `/he` `dir="rtl"`, and RTL logical-start drawer placement.
- `shopify theme check --path project --no-color` passed during `UNIT-SA-016` with `100 files inspected with no offenses found`.
- No `project/**` files were changed by `UNIT-SA-016`.
- The search drawer lane is implemented, preview-tested, and complete for its approved scope.

## Current Cart Surface Evidence

Verified:

- `project/sections/stone-header-main.liquid` currently exposes cart only as an optional link to `{{ routes.cart_url }}`.
- `project/sections/stone-header-main.liquid` uses the runtime label key `snippets.stone_global_header.cart` for that link.
- No cart section file exists under `project/sections/`.
- No cart template file exists under `project/templates/`.
- No cart asset file exists under `project/assets/`.
- `project/assets/stone-drawer.js` already supports generic drawer attributes that can open and close another drawer without adding a cart-specific JavaScript file.

Inference:

- A cart drawer is more purchase-adjacent than mobile navigation or route-based search and should be smaller than a full cart system.
- The safest next cart candidate is a display-only cart drawer shell that preserves the existing cart route fallback and avoids cart mutations.
- Cart quantity update, item removal, add-to-cart, checkout, AJAX cart, and cart JavaScript should stay blocked until a later cart-behavior boundary exists.
- A non-mutating cart drawer shell can test the shared drawer primitive with a third drawer surface while keeping money-adjacent behavior out of scope.

## Phase 3B Boundary Decision

Selected next runtime slice:

`UNIT-SA-018: Cart Drawer Shell Only`

Purpose:

- Add a non-mutating cart drawer shell that reuses the shared drawer primitive.
- Preserve the existing cart route fallback.
- Provide cart summary/display affordance only if available from Liquid's `cart` object.
- Use route links only for cart and checkout-adjacent navigation.
- Avoid cart quantity updates, item removal, add-to-cart behavior, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, and preset composition.

Reason:

- Mobile navigation drawer and search drawer are implemented and preview-proven.
- The current cart surface is only a route link, so the next safe cart move is not cart behavior; it is a shell-only drawer boundary.
- The shared drawer primitive can support the shell without adding a cart-specific JavaScript module.
- A shell-only unit keeps purchase-adjacent mutation and checkout behavior blocked.

## Exact Proposed Next Runtime Unit

Unit:

`UNIT-SA-018: Cart Drawer Shell Only`

Execution class:

- Bounded runtime implementation after explicit owner authorization.

Prerequisites:

- Owner explicitly authorizes `UNIT-SA-018`.
- `UNIT-SA-017` is accepted or superseded.
- `project/**` is clean or any unrelated dirty runtime files are explicitly classified before work begins.
- The unit does not add cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition.

Runtime objective:

- Add one non-mutating cart drawer shell using the existing shared drawer primitive and route-based cart fallback only.

## Exact Allowed Future Write Set For UNIT-SA-018

If `UNIT-SA-018` is authorized, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/sections/stone-cart-drawer.liquid` | Create | Non-mutating cart drawer shell with generic drawer attributes, cart summary/display only, and route links only. |
| `project/sections/stone-header-main.liquid` | Modify | Add minimum cart drawer trigger and ARIA wiring while preserving the existing cart route fallback policy. |
| `project/assets/stone-base.css` | Modify | Cart drawer layout, responsive visibility, focus-visible states, and RTL-safe spacing only. |
| `project/locales/en.schema.json` | Modify | English schema labels for the cart drawer only. |
| `project/locales/he.default.schema.json` | Modify | Hebrew schema labels for the cart drawer only. |

Allowed verification artifacts for `UNIT-SA-018`:

- `workspace/qa/reports/unit-sa-018-cart-drawer-report.md`
- `workspace/qa/reports/unit-sa-018-*.png` only if browser proof is authorized and captured.
- `workspace/verify/unit-sa-018/**` only if command receipts are needed.

## Exact Disallowed Write Set

Disallowed for `UNIT-SA-017`:

- `project/**`
- Shopify remote themes

Disallowed for future `UNIT-SA-018` unless separately authorized:

- `project/assets/stone-cart.js`
- `project/assets/stone-search.js`
- `project/assets/stone-modal.js`
- `project/sections/overlay-group.json`
- `project/sections/apps.liquid`
- `project/sections/_blocks.liquid`
- `project/blocks/**`
- `project/templates/**`
- `project/snippets/**`
- `project/config/**`
- `project/layout/theme.liquid`
- `project/locales/en.default.json`
- `project/locales/he.json`
- Any AJAX cart endpoint behavior.
- Any cart quantity update form.
- Any cart item removal form.
- Any add-to-cart behavior.
- Any checkout mutation or billing-sensitive behavior.
- Any predictive-search endpoint or predictive-search JavaScript.
- Any modal stack runtime.
- Any theme-block architecture.
- Any preset composition or template JSON mutation.

## Pass/Fail Gates

Pass gates for this docs-only `UNIT-SA-017`:

- PASS: `UNIT-SA-017.v1.md` exists.
- PASS: Only this docs-only plan file and state/handoff files are added or changed by the unit.
- PASS: No `project/**` changes are introduced.
- PASS: Required non-runtime harness checks pass.
- PASS: The next runtime slice is bounded to cart drawer shell only and does not authorize cart mutation behavior.

Pass gates for future `UNIT-SA-018`:

- PASS: Exact write set is limited to the allowed runtime files listed above.
- PASS: Cart drawer opens from the header cart trigger.
- PASS: Existing cart route link fallback remains present.
- PASS: Cart drawer closes by close control and `Escape`.
- PASS: Focus is trapped inside the open cart drawer.
- PASS: Focus returns to the triggering control.
- PASS: Body scroll lock is applied and restored.
- PASS: Empty-cart and non-empty-cart states are safe without JavaScript.
- PASS: RTL layout is verified on `/he` or another confirmed RTL route.
- PASS: Theme Check and harness checks pass.
- PASS: No cart quantity update, item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition are introduced.

Fail gates:

- FAIL: Any write occurs under `project/**` during `UNIT-SA-017`.
- FAIL: Future `UNIT-SA-018` writes outside the allowed write set.
- FAIL: Future `UNIT-SA-018` introduces cart mutation behavior.
- FAIL: Existing cart route fallback is removed.
- FAIL: Focus trap, Escape close, focus return, or body scroll-lock restore regresses.
- FAIL: RTL drawer placement regresses.
- FAIL: Cart JavaScript, AJAX cart, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition are bundled into the cart drawer shell unit.

## Stop Conditions

Stop `UNIT-SA-017` if:

- A runtime edit is required.
- A Shopify remote command is required.
- `project/**` changes appear from this unit.
- Required source evidence is missing and cannot be classified.

Stop future `UNIT-SA-018` if:

- Owner has not explicitly authorized `UNIT-SA-018` runtime execution.
- The repo has unclassified dirty `project/**` files.
- The implementation requires cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, or preset composition.
- Accessibility behavior cannot be verified.
- RTL cannot be verified and the owner has not explicitly waived the RTL gate.
- Any command would mutate a live Shopify theme or require `--allow-live`.

## Rollback

Rollback for this docs-only `UNIT-SA-017`:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-017.v1.md`.
- Revert related state/handoff updates from this unit.

Rollback for future `UNIT-SA-018`:

- Revert only:
  - `project/sections/stone-cart-drawer.liquid`
  - `project/sections/stone-header-main.liquid`
  - `project/assets/stone-base.css`
  - `project/locales/en.schema.json`
  - `project/locales/he.default.schema.json`
- Delete only `UNIT-SA-018` QA or verification artifacts created for that unit.
- Do not touch search drawer, mobile drawer, overlay, blocks, templates, snippets, config, runtime locale, or preset files as part of rollback unless a separately authorized unit changed them.

## Final Recommendation

Use `UNIT-SA-017` as the Phase 3B post-search-drawer boundary.

Recommended next step:

- Authorize `UNIT-SA-018: Cart Drawer Shell Only`.

Do not authorize yet:

- Cart quantity updates.
- Cart item removal.
- Add-to-cart behavior.
- Checkout mutation.
- AJAX cart.
- Cart JavaScript.
- Predictive search.
- Modal stack.
- Overlay group.
- Theme blocks.
- Preset composition.

The correct next runtime move is a non-mutating cart drawer shell only, using the shared drawer primitive and the exact future write set listed in this plan.
