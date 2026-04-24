# UNIT-SA-012 Drawer Primitive Report

Date: 2026-04-24

Status: PASS for local implementation checks; browser preview not run

## Authorization

Owner authorized:

```text
AUTHORIZED: EXECUTE UNIT-SA-012
```

## Scope

Implemented only the shared drawer primitive generalization and mobile drawer regression slice defined by `UNIT-SA-011`.

## Files Changed

Runtime files:

- `project/assets/stone-drawer.js`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-mobile-navigation-drawer.liquid`
- `project/assets/stone-base.css`

Verification/state files:

- `workspace/qa/reports/unit-sa-012-drawer-primitive-report.md`

## Runtime Changes

Verified:

- `stone-drawer.js` now recognizes generic drawer selectors:
  - `data-stone-drawer`
  - `data-stone-drawer-trigger`
  - `data-stone-drawer-close`
  - `data-stone-drawer-panel`
  - `data-stone-drawer-state`
- `stone-drawer.js` preserves legacy mobile drawer selectors:
  - `data-stone-mobile-drawer`
  - `data-stone-mobile-drawer-trigger`
  - `data-stone-mobile-drawer-close`
  - `data-stone-mobile-drawer-panel`
  - `data-stone-mobile-drawer-state`
- The drawer controller still supports open/close, `Escape` close, focus trap, focus return, navigation-link close, reduced-motion timing, and body scroll-lock restore.
- Existing mobile drawer markup now carries both generic and mobile-specific drawer attributes.
- CSS now includes generic open-state and body-lock aliases while preserving mobile-specific selectors.

## Commands Run

- `node --check project/assets/stone-drawer.js`
- Embedded section schema parse for:
  - `project/sections/stone-header-main.liquid`
  - `project/sections/stone-mobile-navigation-drawer.liquid`
- Drawer primitive evidence scan for generic and legacy selectors.
- Exact project write-set comparison.
- `shopify theme check --path project --no-color`

## Results

- JavaScript syntax: PASS.
- Section schema parse: PASS.
- Drawer primitive evidence scan: PASS.
- Exact runtime write set: PASS.
- Theme Check: PASS; 99 files inspected with no offenses found.

## Not Run

- Shopify theme push: not run.
- Shopify theme dev / browser preview: not run.
- Live or unpublished remote mutation: not run.

## Not Done

- No search drawer.
- No cart drawer.
- No predictive search.
- No modal stack.
- No overlay group.
- No theme blocks.
- No template edits.
- No snippet edits.
- No config edits.
- No locale edits.
- No preset composition.

## Remaining Verification

Browser regression proof remains required before adding any second drawer surface.

Recommended next unit:

`UNIT-SA-013: Browser Preview Regression Proof For Shared Drawer Primitive`

`UNIT-SA-013` should require explicit store and preview target authorization before running `theme dev`.

## Final Verdict

PASS for local `UNIT-SA-012` implementation and static verification.

The drawer behavior is now generalized at the primitive level while preserving the proven mobile navigation drawer compatibility path.
