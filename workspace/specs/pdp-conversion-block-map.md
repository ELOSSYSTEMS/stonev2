# PDP Conversion Block Map

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define the premium PDP block contract before runtime edits to `stone-main-product` or adjacent PDP sections.

## Architecture Decision

Decision:

- PDP core remains `SECTION_BLOCK_SECTION` unless a later owner-approved derivative plan authorizes a rewrite.
- App blocks are allowed only in safe zones outside critical product form controls.
- Theme blocks are not allowed inside PDP core in the current plan.

## Block Map

| Block / Surface | Priority | Status | App blocks | Dynamic source | Dependencies | Fallback | QA |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Vendor | P0 | MISSING/PARTIAL | No | Product vendor | product object | Hide if blank | Product with/without vendor |
| Title | P0 | PARTIAL | No | Product title | product object | Required product title | Long Hebrew title |
| SKU | P1 | MISSING | No | Variant SKU | selected variant | Hide if blank | Variant with/without SKU |
| Badges | P0/P1 | MISSING | No | Tags/metafields | badge renderer | Hide if none | Sale/sold-out/custom |
| Price | P0 | PARTIAL | No | Variant price | price snippet | Show current price | Sale/compare/unit price |
| Rating host | P1 | MISSING | Safe app zone | App/metafield | app policy | Hide if empty | App present/missing |
| Payment terms | P1 | MISSING | No | Shopify payment terms | product form context | Hide if unavailable | Eligible/ineligible |
| Description | P0 | PARTIAL | No | Product description/metafield | product object | Hide if blank | Long Hebrew |
| Variant picker | P0 | PARTIAL | No | Product variants | variant picker | Hidden for single default variant | One/many/sold-out |
| Quantity selector | P0 | PARTIAL | No | Cart/product rules | quantity input | Default 1 | Min/max/disabled |
| Inventory/stock | P0/P1 | MISSING | No | Variant inventory | selected variant | Hide if unavailable | In stock/low/sold out |
| Buy buttons | P0 | PARTIAL | No | Product form | product form | Disabled if unavailable | Add success/error |
| Pickup availability | P1 | MISSING | No | Shopify pickup | selected variant | Hide if unavailable | Available/unavailable |
| Delivery/shipping info | P1 | MISSING | No | Page/metafield/metaobject | delivery policy | Hide if blank | Market/product-specific |
| Trust badges | P1 | PARTIAL | No | Blocks/metaobjects | icon/trust renderer | Hide if none | PDP/cart consistency |
| Accordion row | P1 | PARTIAL | No | Blocks/page/metafield | accordion behavior | Hide empty rows | Keyboard toggle |
| Info drawer trigger | P0/P1 | MISSING | No | Page/metafield/metaobject | modal/drawer behavior | Hide if no target | Focus trap/ESC |
| Product facts | P1 | MISSING | No | Product metafields | key/value renderer | Hide missing rows | Materials/dimensions |
| Materials/care | P1 | MISSING/PARTIAL | No | Page/metafield | rich text/accordion | Hide if blank | Apparel/home cases |
| Compatibility/fit | P1 | MISSING | No | Metafields/metaobjects | table/key-value | Hide if blank | Electronics/parts |
| Size chart | P0/P1 | PRESENT/PARTIAL | No | Section blocks/page/metafield | size chart section | Hide if not assigned | Table RTL |
| Spec sheet | P0/P1 | PRESENT/PARTIAL | No | Section blocks/metafields | spec section | Hide if not assigned | Technical rows |
| Custom liquid | P1 | MISSING | No app by default | Merchant code | controlled block | Empty block hidden | Safety review |
| Share buttons | P1 | MISSING | No | Product URL | social/link helper | Hide if disabled | Labels/RTL |
| App block safe zone | P0 | MISSING | Yes | App-provided | app policy | Collapse if empty | App present/missing |

## Critical Path Rules

- No app block inside variant picker, quantity selector, price, or buy buttons.
- No theme blocks in PDP core until explicitly approved.
- No schema ID rename without migration review.
- No cart drawer behavior inside PDP derivative unit.

## Required PDP QA

- Product with one variant.
- Product with many variants.
- Sold-out product.
- Unavailable variant.
- Product without media.
- Product with image/video.
- Long Hebrew product title.
- App block present and missing.
- Add-to-cart success/error if behavior is touched.
