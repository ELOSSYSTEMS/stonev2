# Collection Merchandising Surface Map

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define collection and search merchandising surfaces before runtime edits.

## Surface Map

| Surface | Candidate file | Priority | Status | Block model | Dependencies | Fallback | QA |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| Collection banner | `project/sections/stone-collection-banner.liquid` | P0 | MISSING/PARTIAL | SECTION_BLOCK_SECTION | media/rich text | Text-only if no image | No image, long Hebrew title |
| Main collection | `project/sections/stone-main-collection.liquid` | P0 | PARTIAL | SECTION_BLOCK_SECTION | product-card, facets, pagination | Empty state | Empty/many/filter/sort |
| Collection list/cards | `project/sections/stone-collection-list.liquid` | P0 | MISSING | SECTION_BLOCK_SECTION | collection-card/media | Hide missing collections | No image, long names |
| Category entry grid | existing/candidate section | P0/P1 | PRESENT/PARTIAL | SECTION_BLOCK_SECTION | collection/card blocks | Editor placeholder if empty | 1/2/4/long labels |
| Featured collection grid | existing/candidate section | P0 | PRESENT/PARTIAL | SECTION_BLOCK_SECTION | product-card | Hide if no products | Sale/sold-out |
| Collection promo card | `project/sections/stone-collection-grid-promo-card.liquid` | P0 | MISSING | SECTION_BLOCK_SECTION | promo taxonomy | Hide if no content | Desktop/mobile position |
| Collection promo banner | `project/sections/stone-collection-promo-banner.liquid` | P0 | MISSING | SECTION_BLOCK_SECTION | promo taxonomy/media | Text-only or hidden | Long promo copy |
| Filters/facets | `project/snippets/stone-facets.liquid` or collection section | P0 | PARTIAL | SECTION_BLOCK_SECTION | Shopify filters | Hide if no filters | Many filters, price |
| Sort | collection section | P0 | PRESENT/PARTIAL | SECTION_BLOCK_SECTION | Shopify sort options | Hide if unavailable | Sort select RTL |
| Pagination | `project/snippets/stone-pagination.liquid` | P0 | PARTIAL | STATIC/SNIPPET | paginate object | Hide if one page | Previous/next RTL |
| Quick buy | product-card/PDP integration | P1 | BLOCKED until approved | SECTION_BLOCK_SECTION | product form, variant picker | Link to PDP | Single/many variants |
| Swatch/color filters | facets/product-card | P1 | BLOCKED until approved | SECTION_BLOCK_SECTION | metafields/options | Text fallback | Color labels RTL |
| Main search | `project/sections/stone-main-search.liquid` | P0/P1 | PARTIAL | SECTION_BLOCK_SECTION | product-card/article-card | No results state | Hebrew query |
| Predictive search | `project/sections/stone-search-drawer.liquid` | P1 | BLOCKED | SECTION_BLOCK_SECTION | drawer JS, search API | No results state | Keyboard/ESC |

## App Block Rule

- App blocks are blocked inside product-card loops.
- App blocks may be considered below collection content only through a derivative plan.

## Required QA

- Empty collection.
- Collection without image.
- Collection with many products.
- Product card with sale price.
- Product card sold out.
- Many filters.
- Price filter.
- Sort selection.
- Pagination.
- Hebrew search query.
- No search results.
- RTL facets and pagination.

## Fail-Closed Rules

- If product-card dependency is missing, collection merchandising runtime is blocked.
- If exact promo insertion position policy is unknown, collection promo card runtime is blocked.
- If predictive search behavior lacks drawer/focus contract, predictive search is blocked.
