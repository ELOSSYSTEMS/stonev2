# Dynamic Source Compatibility Matrix

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define which Stone V2 settings should support Shopify dynamic sources through product, collection, page, metafield, or metaobject data.

## Matrix

| Surface | Dynamic source targets | Priority | Status | Notes |
| --- | --- | ---: | --- | --- |
| PDP product facts | Product metafields, metaobjects | P0 | REQUIRED | Materials, dimensions, origin, included items, certifications. |
| PDP size chart | Page, metaobject, product metafield | P0/P1 | REQUIRED | Already has a section; drawer/modal policy remains separate. |
| PDP spec sheet | Product metafields, metaobjects | P0/P1 | REQUIRED | Technical/electronics/home support. |
| PDP care/materials | Product metafields, page, metaobject | P1 | REQUIRED | Can reuse facts/accordion until dedicated section is justified. |
| PDP compatibility/fit | Product metafields, metaobjects | P1 | REQUIRED WHERE BUILT | Needed for electronics, parts, accessories. |
| PDP delivery/shipping info | Product metafields, market/page content | P1 | REQUIRED | Must distinguish general policy from operational delivery picker. |
| PDP info drawers | Page, metafield, metaobject | P0/P1 | REQUIRED | Drawer trigger near buy area; behavior deferred to runtime unit. |
| Complementary products | Shopify recommendations, product references | P0 | REQUIRED | Must hide safely when empty. |
| Related products | Shopify recommendations, collection/product references | P0 | REQUIRED | Must hide safely when empty. |
| Recently viewed | Local product history, product handles | P0 | REQUIRED | Privacy-safe local storage fallback. |
| Collection banner | Collection image/title/description/metafields | P0 | REQUIRED | Must render without image. |
| Collection promo slots | Collection metafields, metaobjects | P0 | REQUIRED | Position policy required before runtime. |
| Collection list/cards | Collection references | P0 | REQUIRED | Must handle missing collection image. |
| Promotion surfaces | Metaobjects, text/image/link fields | P0 | REQUIRED | Shared campaign model preferred. |
| Trust badges | Metaobjects or settings blocks | P1 | REQUIRED | Shared model for PDP/cart/footer. |
| FAQ | Metaobjects, pages, section blocks | P1 | REQUIRED | Category/TOC support can be later. |
| Press coverage | Metaobjects, image/link/text | P1 | REQUIRED | Separate from testimonials. |
| Testimonials | Metaobjects, section blocks | P1 | REQUIRED | Logo/quote/source fields. |
| Shop the look | Products, image, metaobjects | P0/P1 | REQUIRED IF BUILT | Hotspot/product rail source. |
| Image hotspot | Product/page/collection/metaobject links | P0/P1 | REQUIRED IF BUILT | Coordinates must remain settings-driven. |
| Blog/article commerce | Articles, products, metaobjects | P1 | REQUIRED IF BUILT | Related articles and product callouts. |
| Gift card | Gift card object | P0/P1 | VERIFY BEFORE RUNTIME | Confirm Shopify-supported architecture first. |

## Do Not Dynamic-Source By Default

| Setting family | Reason |
| --- | --- |
| Core layout density | Avoid hard-to-debug cross-template layout drift. |
| Spacing tokens | Theme-level consistency. |
| Motion behavior | Accessibility and performance control. |
| Product form critical controls | Purchase-critical stability. |
| Cart state behavior | Cart integrity and data correctness. |
| App-block policy | Must be architectural, not content-driven. |

## Fail-Closed Rules

- If a setting controls purchase behavior, do not dynamic-source it without a derivative runtime plan.
- If a missing metafield would create fake production content, hide the dependent row or use editor-only placeholder.
- If metaobject shape is unknown, mark the surface `BLOCKED` until the schema is specified.
