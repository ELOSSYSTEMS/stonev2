# Phase 4 PDP Host Behavior Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-159` admitted this package as the only next PDP lane.
- `Verified`: This package states one exact later runtime proof boundary.

## Exact Future Runtime Boundary

- `Verified`: `project/templates/product.json`
- `Verified`: `project/sections/stone-main-product.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Admissible Runtime Behavior For Later Proof

- `Verified`: One canonical `product.json` host that renders one main PDP section.
- `Verified`: Product title, vendor, type, static media display, current variant price, product description, unavailable/sold-out messaging, and bilingual labels.
- `Verified`: One standard no-JS Shopify product form using the selected or first available variant, variant selection when multiple variants exist, a local quantity field if kept inside the native form, and a submit button that posts through Shopify's normal product form path.
- `Verified`: Shared CSS support only in `stone-base.css`.
- `Verified`: No JavaScript, no AJAX cart, no cart drawer behavior, and no product-card snippet edits.

## Blocked Until Separately Reopened

- `Verified`: PDP companion sections.
- `Verified`: Recommendation and complementary-product logic.
- `Verified`: Dynamic media galleries.
- `Verified`: Quick add, quick view, subscriptions, pickup/inventory complexity, cart drawer behavior, search, preset realization, and hardening.

## Decision

- `Verified`: Admit only `UNIT-161` as the exact five-file no-JS PDP host/product-form runtime proof.
- `Verified`: Require verification after `UNIT-161` before any PDP companion, search, preset, cart, or hardening lane can reopen.
