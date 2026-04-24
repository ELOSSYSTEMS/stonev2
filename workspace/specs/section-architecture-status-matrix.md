# Section Architecture Status Matrix

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Provide the Phase 1 machine-checkable status matrix required before runtime implementation.

## Status Vocabulary

Allowed statuses:

- `PRESENT`
- `PARTIAL`
- `MISSING`
- `INTENTIONALLY_EXCLUDED`
- `BLOCKED`
- `BLOCKED_PENDING_OWNER_DECISION`

## P0 Matrix

| Target | Priority | Status | Classification | App policy | Dynamic source policy | Dependencies | Fallback | Required QA |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| Header group | P0 | MISSING/PARTIAL | GROUP_CONFIG | No app blocks | Menus/logo/localization | header shell sections | Safe header without menu/logo | Desktop/mobile, RTL nav, keyboard menu |
| Footer group | P0 | MISSING/PARTIAL | GROUP_CONFIG | Restricted via child footer | Menus/social/newsletter/policies | footer shell sections | Clean layout without menu/social | Long Hebrew links, mobile stack |
| Overlay group | P0 | MISSING/PARTIAL | GROUP_CONFIG | Restricted via child overlays | Cart/newsletter/privacy/chat | overlay shell sections, drawer/modal policy | Disabled overlay renders nothing broken | Integration validation, focus behavior later |
| Apps wrapper | P0 | MISSING | APP_WRAPPER_SECTION | Required | App-provided | none | No app blocks renders nothing | App present/missing, no templates schema |
| Theme block wrapper | P0 decision | BLOCKED_PENDING_OWNER_DECISION | THEME_BLOCK_SECTION | Optional by policy | Theme/app blocks | `/blocks` owner decision | No blocks renders nothing | Theme block render if approved |
| Announcement bar | P0 | MISSING | SECTION_BLOCK_SECTION | No | Text/link/metaobject optional | header group | Hide if no messages | Long Hebrew, multiple messages |
| Main header | P0 | MISSING/PARTIAL | SECTION_BLOCK_SECTION | No by default | Menus/logo/localization | header group, nav snippets | Logo/menu missing safe | Desktop/mobile, RTL, keyboard |
| Mega menu | P0 | MISSING | SECTION_BLOCK_SECTION | No | Menu/metaobject promos | header shell | No promos still navigates | Keyboard traversal, RTL columns |
| Mobile navigation drawer | P0 | MISSING | SECTION_BLOCK_SECTION | No | Menus | drawer JS | No menu renders closeable drawer | Focus trap, ESC, RTL side |
| Main footer | P0 | MISSING/PARTIAL | SECTION_BLOCK_SECTION | Restricted | Menus/newsletter/social | footer group | Empty columns collapse | Mobile stack, long Hebrew |
| Footer legal | P0 | MISSING | SECTION_BLOCK_SECTION | No | Policies/localization | footer group | Copyright only | Policy links, RTL |
| Cart drawer shell | P0 | MISSING | SECTION_BLOCK_SECTION | Restricted outside core | Cart/products | drawer JS, cart line item | Empty cart CTA | Focus, empty/full cart |
| Search drawer shell | P0/P1 | MISSING | SECTION_BLOCK_SECTION | No | Search API | drawer/search behavior | No results state | Keyboard, Hebrew query |
| Main product | P0 | PARTIAL | SECTION_BLOCK_SECTION | Safe zones only | Product/variant/metafields | price/media/variant/quantity/product form | Product object required; media safe | One variant, sold out, app missing |
| Related products | P0 | MISSING | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No by default | Shopify recommendations | product-card | Hide if no recs | No recs, 4 recs, RTL |
| Recently viewed | P0 | MISSING | STATIC_NO_BLOCK_SECTION | No | Local product history | product-card/storage helper | Hide if no history | First/repeat visit, storage disabled |
| Complementary products | P0 | MISSING/PARTIAL | SECTION_BLOCK_SECTION | No by default | Shopify complementary products | product-card/recommendations | Hide if none | No comps/with comps/mobile |
| Main cart | P0 | MISSING | SECTION_BLOCK_SECTION | Safe below core cart | Cart/recommendations | cart line item, totals, quantity | Empty cart CTA | Empty/full/note/RTL totals |
| Collection banner | P0 | MISSING/PARTIAL | SECTION_BLOCK_SECTION | No | Collection image/title/description/metafields | media/rich text | Text-only if no image | No image, long Hebrew |
| Main collection | P0 | PARTIAL | SECTION_BLOCK_SECTION | No in product loops | Collection/products/filters | product-card/facets/pagination | Empty collection state | Empty/many filters/sort/RTL |
| Collection list/cards | P0 | MISSING | SECTION_BLOCK_SECTION | No | Collections | collection-card/media | Hide missing collections | No image, long names |
| Collection promo slot | P0 | MISSING | SECTION_BLOCK_SECTION | No | Collection metafields/metaobjects | promo taxonomy/product grid | Hide if no content | Desktop/mobile positions |
| Promo banner | P0 | MISSING | SECTION_BLOCK_SECTION | No | Text/image/link/metaobject | media/button | Text-only or editor placeholder | No image, long copy, RTL |
| Promo tile grid | P0 | MISSING | SECTION_BLOCK_SECTION | No | Image/link references | media/cards | Empty blocks editor placeholder | 1/2/3/4 tiles, RTL |
| Cart promo message | P0/P1 | MISSING | SECTION_BLOCK_SECTION | No | Text/link/metaobject | promotion taxonomy | Hide if blank | Empty/full cart, long Hebrew |
| Shop the look | P0/P1 | PARTIAL/MISSING | THEME_BLOCK_SECTION preferred | No by default | Products/images/metaobjects | theme blocks, hotspots, product-card | Editorial image without products | 0/1/many products, hotspot RTL |
| Image hotspot | P0/P1 | PARTIAL/MISSING | THEME_BLOCK_SECTION preferred | No by default | Product/page/collection/metaobject links | hotspot behavior/media | Hide broken hotspot | Keyboard hotspot, mobile tap |
| Media grid | P1/P0 support | MISSING | THEME_BLOCK_SECTION preferred | No by default | Images/videos | media renderer | Placeholder or hide | Mixed media, lazy loading |
| Slideshow | P1/P0 support | MISSING | THEME_BLOCK_SECTION preferred | No | Images/videos/text | carousel/media | Single slide no controls | Keyboard, reduced motion, RTL |
| Main page | P0/P1 | MISSING/PARTIAL | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No | Page content | page renderer | Title/content safe | Long Hebrew page |
| Main search | P0/P1 | PARTIAL | SECTION_BLOCK_SECTION | No by default | Search results | product-card/article-card | No results state | Hebrew query, no results |
| Main blog | P0/P1 | PRESENT/PARTIAL | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | Restricted below content | Blog/articles | article-card/pagination | Hide empty feed | Long Hebrew titles |
| Main article | P0/P1 | PRESENT/PARTIAL | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | Restricted below content | Article/page/products | article renderer/share | Article content safe | Long content, share links |
| Main 404 | P0/P1 | MISSING | STATIC_NO_BLOCK_SECTION | No | Routes/search optional | search/link helper | Useful CTA/search | RTL copy |
| Main contact | P0/P1 | MISSING | SECTION_BLOCK_SECTION | Restricted below form | Contact form/page content | form-errors | Errors/success visible | Required fields, Hebrew labels |
| Main policy/page host | P0/P1 | MISSING/PARTIAL | STATIC_NO_BLOCK_SECTION | No | Policy/page content | page renderer | Title only safe | Long Hebrew, links |
| Gift card | P0/P1 | MISSING | STATIC_NO_BLOCK_SECTION | No | Gift card object | Shopify-supported architecture verification | Not applicable outside gift card | Print/QR/RTL after verification |
| Password | P0/P1 | MISSING | SECTION_BLOCK_SECTION | Restricted | Password/newsletter form | form-errors/newsletter | Errors visible | Login/newsletter |

## Current Phase Verdict

Verified:

- This matrix is sufficient for docs/spec normalization.

Blocked:

- Runtime implementation remains blocked until a derivative unit plan names exact files and owner authorization exists.
