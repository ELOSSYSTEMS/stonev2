# UNIT-SA-020.v1: Cart Route Host Boundary

Date: 2026-04-25

Status: DOCS ONLY; READY FOR OWNER REVIEW; NOT RUNTIME AUTHORIZATION

Runtime files changed by this unit: none

## Goal

Decide the smallest safe cart route host boundary after `UNIT-SA-019` proved the cart drawer shell behavior but recorded direct `/cart` status `404`.

## Scope

This docs-only unit covers only:

- Record the verified status of `UNIT-SA-018` and `UNIT-SA-019`.
- Record the direct `/cart` route gap.
- Decide whether a cart route host/template runtime unit is safe to admit.
- Define the exact allowed and disallowed future write sets.
- Define pass/fail gates, stop conditions, rollback, and final recommendation.

## Out Of Scope

This unit does not authorize or perform:

- Runtime edits.
- `project/**` edits.
- Shopify theme push.
- Shopify theme dev.
- Remote theme mutation.
- Cart route template runtime.
- Cart quantity updates.
- Cart item removal.
- Add-to-cart behavior.
- Checkout behavior.
- AJAX cart.
- Cart JavaScript.
- Predictive search runtime.
- Modal stack runtime.
- Overlay group runtime.
- Theme-block architecture.
- Preset composition.
- Snippet, config, or runtime-locale edits.

## Source Evidence Read

Verified:

- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-017.v1.md`
- `workspace/qa/reports/unit-sa-018-cart-drawer-report.md`
- `workspace/qa/reports/unit-sa-019-cart-drawer-preview-report.md`
- `workspace/qa/reports/unit-sa-019-browser-proof.json`
- `project/sections/stone-cart-drawer.liquid`
- `project/templates/`
- `state/NEXT_ACTION.md`
- `state/ORCHESTRATION_STATE.md`
- `state/STATUS.md`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `git status --short`

## Verified Status Of UNIT-SA-018 And UNIT-SA-019

Verified:

- `UNIT-SA-018` implemented a non-mutating cart drawer shell inside the exact five-file runtime boundary defined by `UNIT-SA-017`.
- `UNIT-SA-018` preserved the route-based cart fallback link and did not add cart forms, quantity inputs, removal controls, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, or Shopify remote mutation.
- `UNIT-SA-019` preview-validated cart drawer behavior against unpublished `Stonev2` theme id `156487712965`.
- `UNIT-SA-019` proved cart drawer open, close control close, Escape close, focus trap, focus return, body lock restore, one header/footer, `/he` `lang="he"`, `/he` `dir="rtl"`, RTL logical-start placement, and fallback cart links in LTR and RTL.
- `UNIT-SA-019` recorded direct `http://127.0.0.1:9292/cart` status `404`.
- `shopify theme check --path project --no-color` passed during `UNIT-SA-019` with `101 files inspected with no offenses found`.
- No `project/**` files were changed by `UNIT-SA-019`.

## Current Cart Route Evidence

Verified:

- No cart template file exists under `project/templates/`.
- `project/sections/stone-cart-drawer.liquid` exists as a drawer shell only.
- The drawer links to `routes.cart_url`, which resolved to `/cart` for LTR and `/he/cart` for RTL during preview.
- Direct `/cart` returned `404` in local preview.

Inference:

- The route fallback was preserved as a link, but the route host itself is missing.
- A cart route host is narrower than broader cart behavior if it stays display-only and no-JS.
- The next safe cart route unit should add only a cart route template and one main cart section, with optional CSS and schema-locale labels.
- Cart quantity update, item removal, checkout mutation, AJAX cart, and cart JavaScript should remain blocked until a later cart-behavior boundary.

## Phase 3B Boundary Decision

Selected next runtime slice:

`UNIT-SA-021: Cart Route Host Only`

Purpose:

- Add a minimal cart route host so `/cart` can return a usable cart page.
- Render empty-cart and non-empty-cart display states from Liquid's `cart` object.
- Preserve route-based navigation only.
- Avoid cart forms, quantity update, item removal, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, and preset composition.

Reason:

- `UNIT-SA-019` proved drawer behavior but exposed the missing route host.
- A cart drawer that links to `/cart` needs a route host before broader cart behavior is considered.
- Display-only cart route hosting can remain non-mutating and no-JS.
- This keeps money-adjacent mutation and checkout behavior blocked.

## Exact Proposed Next Runtime Unit

Unit:

`UNIT-SA-021: Cart Route Host Only`

Execution class:

- Bounded runtime implementation after explicit owner authorization.

Prerequisites:

- Owner explicitly authorizes `UNIT-SA-021`.
- `UNIT-SA-020` is accepted or superseded.
- `project/**` is clean or any unrelated dirty runtime files are explicitly classified before work begins.
- The unit does not add cart forms, cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, or preset composition.

Runtime objective:

- Add one non-mutating cart route host using a minimal cart template and main cart section.

## Exact Allowed Future Write Set For UNIT-SA-021

If `UNIT-SA-021` is authorized, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/templates/cart.json` | Create | Cart route host template containing only the main cart section. |
| `project/sections/stone-main-cart.liquid` | Create | Display-only cart page section with empty and non-empty states from Liquid's `cart` object. |
| `project/assets/stone-base.css` | Modify | Main cart page layout, spacing, item display, and focus-visible states only. |
| `project/locales/en.schema.json` | Modify | English schema labels for the main cart section only. |
| `project/locales/he.default.schema.json` | Modify | Hebrew schema labels for the main cart section only. |

Allowed verification artifacts for `UNIT-SA-021`:

- `workspace/qa/reports/unit-sa-021-cart-route-host-report.md`
- `workspace/qa/reports/unit-sa-021-*.png` only if browser proof is authorized and captured.
- `workspace/verify/unit-sa-021/**` only if command receipts are needed.

## Exact Disallowed Write Set

Disallowed for `UNIT-SA-020`:

- `project/**`
- Shopify remote themes

Disallowed for future `UNIT-SA-021` unless separately authorized:

- `project/assets/stone-cart.js`
- `project/assets/stone-search.js`
- `project/assets/stone-modal.js`
- `project/sections/overlay-group.json`
- `project/sections/apps.liquid`
- `project/sections/_blocks.liquid`
- `project/blocks/**`
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
- Any preset composition or template JSON mutation outside `project/templates/cart.json`.

## Pass/Fail Gates

Pass gates for this docs-only `UNIT-SA-020`:

- PASS: `UNIT-SA-020.v1.md` exists.
- PASS: Only this docs-only plan file and state/handoff files are added or changed by the unit.
- PASS: No `project/**` changes are introduced.
- PASS: Required non-runtime harness checks pass.
- PASS: The next runtime slice is bounded to cart route host only and does not authorize cart mutation behavior.

Pass gates for future `UNIT-SA-021`:

- PASS: Exact write set is limited to the allowed runtime files listed above.
- PASS: `/cart` returns status `200` in browser preview if preview execution is authorized.
- PASS: `/he/cart` returns status `200` or an explicitly equivalent localized cart route status in browser preview if preview execution is authorized.
- PASS: Cart page renders exactly one main cart host section.
- PASS: Empty-cart state is safe without JavaScript.
- PASS: Non-empty-cart display state uses Liquid's `cart` object only.
- PASS: No cart mutation forms, quantity inputs, removal controls, checkout mutation, AJAX cart, or cart JavaScript are introduced.
- PASS: Theme Check and harness checks pass.
- PASS: Existing cart drawer behavior is not changed except through shared CSS if necessary.

Fail gates:

- FAIL: Any write occurs under `project/**` during `UNIT-SA-020`.
- FAIL: Future `UNIT-SA-021` writes outside the allowed write set.
- FAIL: Future `UNIT-SA-021` introduces cart mutation behavior.
- FAIL: Future `UNIT-SA-021` introduces checkout mutation or billing-sensitive behavior.
- FAIL: Future `UNIT-SA-021` introduces cart JavaScript or AJAX cart behavior.
- FAIL: Predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, or preset composition are bundled into the cart route host unit.

## Stop Conditions

Stop `UNIT-SA-020` if:

- A runtime edit is required.
- A Shopify remote command is required.
- `project/**` changes appear from this unit.
- Required source evidence is missing and cannot be classified.

Stop future `UNIT-SA-021` if:

- Owner has not explicitly authorized `UNIT-SA-021` runtime execution.
- The repo has unclassified dirty `project/**` files.
- The implementation requires cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, or preset composition.
- Route behavior cannot be verified and the owner has not explicitly waived browser proof.
- Any command would mutate a live Shopify theme or require `--allow-live`.

## Rollback

Rollback for this docs-only `UNIT-SA-020`:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-020.v1.md`.
- Revert related state/handoff updates from this unit.

Rollback for future `UNIT-SA-021`:

- Revert only:
  - `project/templates/cart.json`
  - `project/sections/stone-main-cart.liquid`
  - `project/assets/stone-base.css`
  - `project/locales/en.schema.json`
  - `project/locales/he.default.schema.json`
- Delete only `UNIT-SA-021` QA or verification artifacts created for that unit.
- Do not touch cart drawer, search drawer, mobile drawer, overlay, blocks, snippets, config, runtime locale, or preset files as part of rollback unless a separately authorized unit changed them.

## Final Recommendation

Use `UNIT-SA-020` as the Phase 3B cart route host boundary.

Recommended next step:

- Authorize `UNIT-SA-021: Cart Route Host Only`.

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

The correct next runtime move is a display-only cart route host only, with the exact future write set listed in this plan.
