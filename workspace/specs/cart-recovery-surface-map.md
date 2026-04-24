# Cart Recovery Surface Map

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define cart and purchase recovery surfaces before runtime edits.

## Surface Map

| Surface | Candidate file | Priority | Status | Block model | App blocks | Dependencies | Fallback | QA |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| Cart drawer | `project/sections/stone-cart-drawer.liquid` | P0 | MISSING | SECTION_BLOCK_SECTION | Restricted outside core cart | drawer JS, cart line item, quantity | Empty cart CTA | Open/ESC/focus/empty/full |
| Main cart | `project/sections/stone-main-cart.liquid` | P0 | MISSING | SECTION_BLOCK_SECTION | Safe zone below cart items | cart line item, totals, note field | Empty cart CTA | Empty/full/note/totals |
| Cart line item | `project/snippets/stone-cart-line-item.liquid` | P0 | MISSING | SNIPPET | No | price, quantity, media | Hide missing image safely | Quantity/remove |
| Quantity update | `project/snippets/stone-quantity-input.liquid`, `project/assets/stone-cart.js` | P0 | MISSING/PARTIAL | SNIPPET/JS | No | cart endpoint/form | No-JS form fallback | Min/max/errors |
| Cart notes | main cart/cart drawer | P1 | MISSING | SECTION_BLOCK_SECTION | No | cart form | Hide if disabled | Save note |
| Cart promo message | `project/sections/stone-cart-promo-message.liquid` | P0/P1 | MISSING | SECTION_BLOCK_SECTION | No | promotion taxonomy | Hide if blank | Long Hebrew |
| Cart trust badges | cart block/section | P1 | PARTIAL/MISSING | SECTION_BLOCK_SECTION | No | trust badge model | Hide if empty | PDP/cart consistency |
| Cart upsell/cross-sell | cart block/section | P0/P1 | MISSING | SECTION_BLOCK_SECTION | Restricted app alternative | product-card/recommendations | Hide if no products | No products/mobile |
| Recently viewed in cart | `stone-recently-viewed-products` | P0/P1 | MISSING | STATIC_NO_BLOCK_SECTION | No | recently-viewed storage | Hide if no history | Storage disabled |
| Empty-cart recovery | main cart/cart drawer | P0 | MISSING | SECTION_BLOCK_SECTION | No | collection/link settings | Continue-shopping CTA | Empty cart |
| Free-shipping progress | cart block | P2/P1 | INTENTIONALLY_EXCLUDED until approved | SECTION_BLOCK_SECTION | No | market/currency policy | Hide if not configured | Market threshold |

## Purchase-Sensitive Rules

- Do not alter checkout/billing behavior without explicit authorization.
- Do not implement discount-code behavior unless platform policy and UX are specified.
- Do not add free-shipping progress until market/currency threshold policy exists.
- App blocks may appear below core cart items only.

## Required QA

- Empty cart.
- Full cart.
- Quantity update.
- Remove item.
- Cart note.
- Cart app block present/missing if app zone is implemented.
- Drawer open by mouse and keyboard.
- ESC close.
- Focus trap and return focus.
- RTL totals and line item controls.

## Fail-Closed Rules

- If drawer focus behavior is unavailable, cart drawer runtime is blocked.
- If cart line item dependency is missing, main cart/cart drawer runtime is blocked.
- If update/remove behavior has no test plan, cart behavior runtime is blocked.
