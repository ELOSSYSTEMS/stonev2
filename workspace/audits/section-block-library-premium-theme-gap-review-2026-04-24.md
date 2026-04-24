# Section / Block Library Premium Theme Gap Review

**Intended target path:** `C:\ELoS\projects\stonev2\workspace\audits\section-block-library-premium-theme-gap-review-2026-04-24.md`

**Created:** 2026-04-24  
**Purpose:** Review the Stone v2 section/block library direction against commonly used sections and blocks in high-performing, high-end Shopify themes.

---

## 1. Scope

This document is an addendum to the Stone v2 section/block library stabilization work.

It answers one question:

> Against premium Shopify theme patterns, what section/block capabilities appear missing, under-specified, or not yet promoted to first-class library status?

This is not a code implementation plan. It is a product/theme architecture review.

---

## 2. Evidence base

### 2.1 Internal Stone / prior uploaded-library evidence

The exact local file below was not directly accessible from this chat:

```text
C:\ELoS\projects\stonev2\workspace\audits\section-block-library-stabilization-audit-2026-04-24.md
```

However, the available internal references indicate that the current theme thinking already covers a strong primitive and runtime foundation.

Observed internal primitive/component coverage includes:

- content primitives: heading, rich text, image, video, badge, accordion, icon, button, button group
- commerce primitives: product card, horizontal product card, product gallery, product info, variant picker, quantity selector, price list, line item
- discovery primitives: facets, price range, predictive search result item, pagination, collection layout switch
- navigation primitives: mega menu, header search, header sidebar
- behavioral primitives: cart drawer, product form, product recommendations, product sticky bar, countdown timer, before/after, newsletter popup, privacy banner, media grid, marquee text, images-with-text-scroll, story/modal-type overlay patterns
- shell/runtime concepts: global language/direction governance, token injection, overlay group, custom element runtime, shared CSS/JS variable layer, accessibility live regions

**Interpretation:** Stone v2 appears strong at the primitive layer. The likely remaining gap is the composed merchant-facing section layer and conversion journey coverage.

### 2.2 External benchmark sources

Public Shopify theme-store pages and Shopify documentation were reviewed as premium-theme benchmarks.

Key sources:

1. Shopify Help Center — Sections and blocks  
   https://help.shopify.com/en/manual/online-store/themes/theme-structure/sections-and-blocks

2. Shopify Theme Store — Prestige by Maestrooo  
   https://themes.shopify.com/themes/prestige

3. Shopify Theme Store — Prestige / Prestige style  
   https://themes.shopify.com/themes/prestige/styles/prestige

4. Shopify Theme Store — Impact by Maestrooo  
   https://themes.shopify.com/themes/impact/styles/impact

5. Shopify Theme Store — Impulse by Archetype Themes  
   https://themes.shopify.com/themes/impulse

6. Shopify Theme Store — Broadcast by Presidio  
   https://themes.shopify.com/themes/broadcast/styles/broadcast

---

## 3. Benchmark summary: what high-end Shopify themes commonly expose

Premium themes tend to cluster capabilities into five major areas:

1. **Cart and checkout-adjacent conversion**
2. **Marketing and promotion surfaces**
3. **Merchandising and storytelling surfaces**
4. **Product discovery and navigation**
5. **Theme-editor architecture and extensibility**

The important point is that high-end themes do not merely include “many sections.” They provide a coherent commercial operating system for:

- browsing,
- evaluating,
- trusting,
- deciding,
- adding to cart,
- recovering hesitation,
- and finding the next product.

---

## 4. Shopify platform constraints and architecture requirements

### 4.1 Sections and blocks are the editor-facing composition model

Shopify defines templates as structures composed of sections, and sections as structures composed of blocks. Merchants can add, remove, reorder, hide, duplicate, and configure these surfaces in the theme editor.

### 4.2 Relevant limits

Shopify documents the following limits:

- each template can have up to 25 sections;
- each template can contain up to 1250 blocks across all sections;
- blocks that support nesting can have up to eight levels of nested blocks.

### 4.3 Block-source model

Shopify distinguishes between:

- **section blocks**: blocks defined for a specific section;
- **theme blocks**: reusable theme-level blocks that can support nesting and dynamic behavior;
- **app blocks**: blocks injected by installed apps.

### 4.4 Dynamic sources

Shopify supports dynamic sources from metafields and metaobjects for compatible section/block settings. A premium theme should deliberately decide which settings support dynamic sources.

### 4.5 Architectural implication for Stone

Stone should not only list sections. It should define:

- which surfaces are full sections;
- which are section-specific blocks;
- which are reusable theme blocks;
- which allow app blocks;
- which support dynamic sources;
- which are allowed to nest;
- which are structural and cannot be safely removed;
- which must remain RTL-safe by default.

---

## 5. Premium-theme feature benchmark

### 5.1 Prestige benchmark

Prestige positions itself as a high-end premium theme and advertises 30+ highly configurable sections.

High-signal features listed publicly include:

#### Cart and checkout

- cart notes
- in-store pickups
- quick buy
- slide-out cart
- sticky cart

#### Marketing and conversion

- stock counter
- right-to-left support
- recommended products
- recently viewed
- quick view
- quick order list
- promo tiles
- promo popups
- promo banners
- product badges
- press coverage
- in-menu promos
- FAQ page
- customizable contact form
- cross-selling
- countdown timer
- blogs
- quantity pricing for Shopify Plus

#### Merchandising

- usage information
- slideshow
- size chart
- product videos
- product tabs
- product options
- lookbooks
- ingredients or nutritional information
- image zoom
- image rollover
- image hotspot
- image galleries
- high-resolution images
- color swatches
- before/after image slider
- animation
- combined listing for Shopify Plus

#### Product discovery

- collection page navigation
- enhanced search
- mega menu
- product filtering and sorting
- recently viewed
- recommended products
- sticky header
- swatch filters

### 5.2 Impact benchmark

Impact publicly emphasizes:

- 35+ sections;
- gradients;
- big headings;
- subtle animations;
- performance, SEO, and accessibility;
- quick buy on collection pages;
- sticky add to cart;
- complementary products on product pages.

The practical takeaway is that modern premium themes treat product page upsell and sticky purchase affordances as core conversion infrastructure, not optional decoration.

### 5.3 Impulse benchmark

Impulse publicly emphasizes:

- quick add to cart from collection contexts;
- advanced custom promotions;
- mobile-first behavior;
- homepage promotions;
- collection-page banners;
- large product-photo promotions;
- footer promotions.

It also lists:

- age verifier;
- countdown timer;
- cross-selling;
- press coverage;
- product badges;
- promo banners;
- promo popups;
- promo tiles;
- quick view;
- recently viewed;
- recommended products;
- stock counter;
- trust badges;
- breadcrumbs;
- enhanced search;
- mega menu;
- product filtering and sorting;
- sticky header.

The practical takeaway is that promotions are not one section. They are a system of placements across homepage, collection, product, footer, menu, popup, and cart surfaces.

### 5.4 Broadcast benchmark

Broadcast publicly lists:

#### Cart and checkout

- pre-order
- quick buy
- sign in with Shop
- slide-out cart
- sticky cart
- cart notes
- in-store pickups

#### Marketing and conversion

- back-in-stock alert
- countdown timer
- cross-selling
- FAQ page
- in-menu promos
- press coverage
- product badges
- promo banners
- promo popups
- quick view
- recently viewed
- recommended products
- stock counter
- trust badges

#### Merchandising

- before/after image slider
- color swatches
- image galleries
- image hotspot
- image rollover
- image zoom
- product options
- product tabs
- product videos
- shipping/delivery information
- size chart
- slideshow

#### Product discovery

- back-to-top button
- breadcrumbs
- collection page navigation
- enhanced search
- mega menu
- product filtering and sorting
- recently viewed
- recommended products
- sticky header

The practical takeaway is that inventory-state and purchase-state features such as pre-order and back-in-stock are common premium conversion requirements.

---

## 6. Gap analysis: likely missing or under-specified capabilities

The following items should be treated as missing unless already explicitly present in the unavailable local audit file.

Priority levels:

- **P0:** Required for premium completeness.
- **P1:** Strong premium expectation.
- **P2:** Useful differentiator or vertical-specific surface.

---

## 7. P0 gaps — required for premium completeness

### 7.1 Shop-the-look / shoppable lookbook

**Status:** likely missing or under-promoted.  
**Priority:** P0.  
**Capability type:** composed merchandising section.

#### Why it matters

High-end themes commonly support lifestyle merchandising, where an image or editorial composition contains multiple purchasable products.

This is not the same as a gallery. It connects brand storytelling to product discovery and purchase.

#### Required behavior

A production-ready Stone section should support:

- hero image or editorial image;
- selectable product list;
- product hotspot placement or product rail;
- mobile-safe layout;
- RTL-aware hotspot positioning;
- optional quick add;
- optional product-card density controls;
- optional overlay or split-layout mode;
- dynamic source support via metaobjects where possible.

#### Recommended section slug

```text
shop-the-look.liquid
```

#### Recommended block model

- `heading`
- `rich_text`
- `image`
- `look_product`
- `hotspot`
- `button`

#### Acceptance test

A merchant can create a lifestyle image, attach 2–6 products, and let customers move from inspiration to purchase without leaving the section.

---

### 7.2 Image hotspot / shoppable image

**Status:** likely missing or under-promoted.  
**Priority:** P0.  
**Capability type:** merchandising + discovery section.

#### Why it matters

Prestige, Impulse, and Broadcast list image hotspot. It is a recurring premium capability because it lets the merchant annotate visual content without turning the page into a product grid.

#### Required behavior

Stone should support:

- desktop and mobile hotspot coordinates;
- image focal point safety;
- product, collection, page, or custom link target;
- popover/card display;
- RTL-aware popover alignment;
- keyboard accessible hotspot navigation;
- reduced-motion fallback;
- optional numbered or icon-based pins.

#### Recommended section slug

```text
image-hotspot.liquid
```

#### Recommended block model

- `hotspot`
- `product_hotspot`
- `link_hotspot`
- `text_hotspot`

#### Acceptance test

A merchant can place 3 hotspots on a campaign image, each resolving to product or informational content, without writing code.

---

### 7.3 Promotion system, not only banners

**Status:** likely under-specified.  
**Priority:** P0.  
**Capability type:** cross-template promotion architecture.

#### Why it matters

Premium themes list multiple promotion placements:

- promo banners;
- promo tiles;
- promo popups;
- in-menu promos;
- collection-page banners;
- product-photo promotions;
- footer promotions.

A single announcement bar or image banner does not satisfy this requirement.

#### Required Stone surfaces

Stone should define a promotion family:

1. `promo-banner`
2. `promo-tile-grid`
3. `promo-popup`
4. `in-menu-promo-block`
5. `collection-promo-card`
6. `product-media-promo-overlay`
7. `footer-promo-block`
8. `cart-promo-message`

#### Required shared settings

- start/end scheduling if possible;
- heading;
- subheading;
- body;
- badge/eyebrow;
- link target;
- image/video;
- color scheme;
- audience or market condition where feasible;
- dismissibility for popups;
- frequency control for popups;
- RTL-safe alignment.

#### Acceptance test

A merchant can run one campaign across homepage, menu, collection, product, popup, footer, and cart without reinventing the content model for each placement.

---

### 7.4 Product-page info drawer blocks

**Status:** likely missing.  
**Priority:** P0.  
**Capability type:** PDP trust/conversion block.

#### Why it matters

Premium merchants need compact PDP trust affordances that reveal detailed information without pushing the purchase area down the page.

A recent Prestige review explicitly asks for native product-page buttons that open side drawers linked to a page or section. This indicates demand even inside a mature premium theme.

#### Required behavior

Stone should support PDP blocks that open drawers or modals for:

- size guide;
- delivery and returns;
- product care;
- materials;
- warranty;
- store policies;
- pickup availability explanation;
- custom page content;
- metafield/metaobject content.

#### Recommended primitive

```text
info-drawer-trigger
```

#### Recommended PDP block slug

```text
product-info-drawer-block
```

#### Acceptance test

A merchant can add 3–6 compact trust buttons near the buy buttons, each opening structured content without leaving the PDP.

---

### 7.5 Complementary products / PDP cross-sell

**Status:** likely needs first-class treatment.  
**Priority:** P0.  
**Capability type:** PDP conversion section/block.

#### Why it matters

Impact explicitly positions complementary products on product pages as part of conversion optimization. Prestige and Broadcast also list cross-selling/recommended products.

#### Required behavior

Stone should support:

- manual complementary products;
- Shopify product recommendations;
- metafield-driven product list;
- bundle-like presentation;
- optional quick add;
- optional variant selection;
- mobile carousel or compact list;
- cart-drawer compatibility.

#### Recommended surfaces

```text
complementary-products.liquid
product-cross-sell-block.liquid
cart-cross-sell.liquid
```

#### Acceptance test

A merchant can place relevant add-on products on the PDP and cart drawer with quick-add behavior and coherent product-card styling.

---

### 7.6 Recently viewed products

**Status:** likely covered by runtime concept but should be explicit.  
**Priority:** P0.  
**Capability type:** product discovery and recovery.

#### Why it matters

Prestige, Impulse, and Broadcast list recently viewed products. It is a standard browsing recovery surface.

#### Required behavior

Stone should support:

- recently viewed product rail;
- product-card reuse;
- empty-state behavior;
- local storage / privacy-safe client state;
- RTL carousel handling;
- section availability on product, collection, search, and cart-adjacent pages.

#### Recommended section slug

```text
recently-viewed-products.liquid
```

#### Acceptance test

After viewing multiple products, the shopper sees a coherent recently viewed rail on PDP or relevant templates.

---

### 7.7 Back-in-stock alert

**Status:** likely missing.  
**Priority:** P0 for product-heavy stores; P1 otherwise.  
**Capability type:** inventory-state conversion.

#### Why it matters

Broadcast lists back-in-stock alert. This is a high-intent recovery tool for out-of-stock products.

#### Required behavior

Stone should define a native placement contract even if final notification logic depends on an app.

Support:

- out-of-stock conditional rendering;
- email/phone field or app block zone;
- product/variant context;
- success/error state;
- app block compatibility;
- accessibility messaging;
- RTL-safe form layout.

#### Recommended PDP block slug

```text
back-in-stock-block.liquid
```

#### Acceptance test

When a selected variant is unavailable, the PDP can switch from buy-button intent to notification intent without layout breakage.

---

### 7.8 Pre-order state

**Status:** likely missing.  
**Priority:** P0 for stores using prelaunch or made-to-order sales; P1 otherwise.  
**Capability type:** product purchase-state variant.

#### Why it matters

Impact and Broadcast list pre-order. Premium themes often support products that are not in standard in-stock purchase mode.

#### Required behavior

Stone should support:

- product or variant pre-order state;
- button label override;
- delivery estimate messaging;
- terms acknowledgment if required;
- inventory messaging;
- cart line-item property or selling-plan compatibility where relevant;
- app-block compatibility.

#### Recommended PDP block/primitive

```text
pre-order-state-block.liquid
```

#### Acceptance test

A merchant can sell a pre-order item with a clear CTA and delivery expectation without hardcoding PDP copy.

---

### 7.9 Collection promo slots

**Status:** likely missing or too generic.  
**Priority:** P0.  
**Capability type:** collection merchandising.

#### Why it matters

Impulse explicitly emphasizes promotions in collection-page banners. Collection pages are high-intent browsing surfaces; premium themes frequently allow product-grid interruption with editorial or campaign cards.

#### Required behavior

Stone should support:

- promo card injected into collection grid;
- promo banner above collection grid;
- position controls;
- mobile position controls;
- image/video/text CTA;
- color scheme;
- collection-specific configuration;
- dynamic source compatibility if driven by collection metafields.

#### Recommended section/block slugs

```text
collection-promo-banner.liquid
collection-grid-promo-card.liquid
```

#### Acceptance test

A merchant can insert a campaign card after product 4 on desktop and after product 2 on mobile without breaking the product grid.

---

### 7.10 Product media promotion overlay

**Status:** likely missing.  
**Priority:** P0/P1.  
**Capability type:** PDP merchandising.

#### Why it matters

Impulse references promotions on large product photos. This pattern matters for visually led brands where the product gallery is the highest-attention surface.

#### Required behavior

Stone should support:

- optional product-gallery overlay badge/promo;
- media-specific promotional copy;
- link or disclosure action;
- safe-area controls;
- RTL position logic;
- mobile fallback.

#### Recommended primitive

```text
media-promo-overlay
```

#### Acceptance test

A merchant can attach a non-destructive promotional overlay to a product media item without editing image files.

---

## 8. P1 gaps — strong premium expectations

### 8.1 Press coverage section

**Status:** likely missing or covered only as generic testimonial.  
**Priority:** P1.  
**Capability type:** social proof / brand authority.

#### Why it matters

Prestige, Impulse, and Broadcast list press coverage. Premium brands frequently use press/logo proof as a trust surface separate from testimonials.

#### Required behavior

Stone should support:

- press logo grid;
- quote excerpts;
- publication name;
- link to article;
- optional grayscale/monochrome logo style;
- carousel/grid modes;
- RTL-safe quote alignment;
- accessibility labels for logos.

#### Recommended section slug

```text
press-coverage.liquid
```

#### Acceptance test

A merchant can show 3–8 press mentions without misusing a testimonial slider.

---

### 8.2 Trust badges / trust strip

**Status:** likely partially covered by badge primitive; should become composed section/block.  
**Priority:** P1.  
**Capability type:** trust and friction reduction.

#### Why it matters

Impulse and Broadcast list trust badges. A badge primitive is not enough; merchants need a composed trust strip near PDP, cart, footer, and landing-page surfaces.

#### Required behavior

Stone should support:

- icon + label + optional detail;
- payment/security/shipping/returns badges;
- section and block usage;
- PDP near-buy placement;
- cart drawer placement;
- footer placement;
- localized text;
- RTL-safe icon/text ordering.

#### Recommended slugs

```text
trust-badge-strip.liquid
trust-badge-block.liquid
```

#### Acceptance test

A merchant can place trust badges below buy buttons and in the cart drawer using the same content model.

---

### 8.3 Advanced FAQ with table of contents

**Status:** likely primitive exists; composed page section may need explicit treatment.  
**Priority:** P1.  
**Capability type:** support/trust content.

#### Why it matters

FAQ pages are listed across premium themes. The available internal primitive model references FAQ TOC behavior, but Stone should define a merchant-facing FAQ architecture.

#### Required behavior

- FAQ categories;
- accordion items;
- optional table of contents;
- schema.org FAQ support where appropriate;
- search/filter optionality;
- PDP usage and standalone page usage;
- dynamic source support for repeated content.

#### Recommended slugs

```text
faq-section.liquid
faq-toc.liquid
faq-category-block.liquid
faq-item-block.liquid
```

#### Acceptance test

A merchant can build a long FAQ page with categories and anchored navigation without custom code.

---

### 8.4 Breadcrumbs

**Status:** unknown.  
**Priority:** P1.  
**Capability type:** navigation/discovery.

#### Why it matters

Impulse and Broadcast list breadcrumbs. They support orientation and SEO-adjacent internal linking.

#### Required behavior

Stone should support:

- product breadcrumbs;
- collection breadcrumbs;
- article/page breadcrumbs;
- RTL separator handling;
- optional hiding on homepage or landing pages;
- JSON-LD breadcrumb schema if implemented.

#### Recommended primitive/section

```text
breadcrumbs.liquid
```

#### Acceptance test

A shopper landing on a PDP can understand hierarchy and navigate back to a parent collection.

---

### 8.5 Back-to-top button

**Status:** unknown.  
**Priority:** P1/P2.  
**Capability type:** navigation utility.

#### Why it matters

Broadcast lists back-to-top button. It is especially useful on long mobile collection pages.

#### Required behavior

Stone should support:

- threshold-based visibility;
- reduced-motion fallback;
- mobile-safe placement;
- RTL-aware edge placement;
- accessibility label.

#### Recommended primitive

```text
back-to-top-button
```

---

### 8.6 Quick order list

**Status:** likely missing.  
**Priority:** P1 for B2B/catalog-heavy stores; P2 otherwise.  
**Capability type:** bulk purchase.

#### Why it matters

Prestige lists quick order list. This matters for B2B, repeat purchase, wholesale, and catalog workflows.

#### Required behavior

Stone should support a fast product-entry or variant-list purchase model:

- product rows;
- quantity controls;
- variant selectors;
- bulk add;
- stock/availability display;
- price display;
- error handling;
- RTL table/list layout.

#### Recommended section slug

```text
quick-order-list.liquid
```

#### Acceptance test

A repeat buyer can add multiple variants quickly without visiting each PDP.

---

### 8.7 Quantity pricing / volume pricing display

**Status:** likely missing.  
**Priority:** P1 for Shopify Plus/B2B; P2 otherwise.  
**Capability type:** pricing communication.

#### Why it matters

Prestige lists quantity pricing for Shopify Plus. Even if Stone does not implement Plus-specific logic initially, it should have a design contract for volume pricing display.

#### Required behavior

- tiered price table;
- quantity break messaging;
- product/variant scope;
- dynamic source or native Shopify data compatibility where available;
- compact PDP rendering;
- cart consistency.

#### Recommended block slug

```text
quantity-pricing-block.liquid
```

---

### 8.8 Shipping / delivery information section and PDP block

**Status:** likely partially covered by Forever Flowers delivery-date primitive; needs generic premium treatment.  
**Priority:** P1.  
**Capability type:** trust and purchase clarity.

#### Why it matters

Impulse and Broadcast list shipping/delivery information. For Israeli/RTL stores, shipping clarity is a major conversion factor.

#### Required behavior

Stone should separate:

1. generic shipping information;
2. operational delivery-date picking;
3. market-specific delivery/pickup messaging.

#### Recommended surfaces

```text
shipping-delivery-info.liquid
product-delivery-info-block.liquid
delivery-date-picker.liquid
```

#### Acceptance test

A merchant can explain delivery policy globally and display product-specific delivery constraints locally.

---

### 8.9 Size chart / measurement guide

**Status:** likely unknown.  
**Priority:** P1 for apparel, accessories, home goods; P2 for flowers.  
**Capability type:** PDP trust.

#### Why it matters

Prestige, Impulse, and Broadcast list size chart. The generalized pattern is not only apparel sizing; it is measurement and fit guidance.

#### Required behavior

- drawer/modal/page link modes;
- table support;
- image support;
- product-type conditional content;
- dynamic source support;
- RTL-safe table layout.

#### Recommended block slug

```text
size-chart-block.liquid
```

---

### 8.10 Ingredients / materials / usage information

**Status:** likely missing as composed PDP content family.  
**Priority:** P1.  
**Capability type:** product information architecture.

#### Why it matters

Prestige lists usage information and ingredients/nutritional information. This generalizes to any structured product facts:

- materials;
- care;
- dimensions;
- contents;
- compatibility;
- origin;
- certifications;
- instructions.

#### Required behavior

Stone should support structured product facts via blocks/metafields.

#### Recommended slugs

```text
product-facts.liquid
product-materials-block.liquid
product-care-block.liquid
product-usage-block.liquid
```

#### Acceptance test

A merchant can expose structured product facts without collapsing everything into a long description.

---

## 9. P2 gaps — useful differentiators or vertical-specific surfaces

### 9.1 Age verifier

**Status:** likely missing.  
**Priority:** P2 except regulated categories.  
**Capability type:** compliance gate.

Impulse lists age verifier. It is not necessary for most Stone target stores, but the overlay architecture should not make it impossible.

Recommended treatment:

- define as optional compliance overlay;
- do not prioritize unless target vertical requires it;
- ensure overlay system can support blocking/dismissible gates.

Recommended slug:

```text
age-verifier-overlay.liquid
```

---

### 9.2 Sign in with Shop placement

**Status:** likely missing.  
**Priority:** P2.  
**Capability type:** checkout acceleration.

Broadcast lists Sign in with Shop. Stone should ensure account/cart/header surfaces do not conflict with Shop-related Shopify features.

Recommended treatment:

- app/native compatibility zone;
- cart/account placement rules;
- no hardcoded assumptions that prevent Shopify-native identity surfaces.

---

### 9.3 Combined listings / Shopify Plus merchandising

**Status:** likely missing.  
**Priority:** P2 unless targeting enterprise catalogs.  
**Capability type:** advanced catalog merchandising.

Prestige and Impulse list combined listing for Shopify Plus. Stone should not block the pattern, but it does not need to be first-phase unless the target audience includes Plus stores.

Recommended treatment:

- product-card support for sibling products;
- swatch/link presentation compatibility;
- collection-grid compatibility.

---

### 9.4 Product comparison section

**Status:** likely unknown.  
**Priority:** P2/P1 depending on vertical.  
**Capability type:** decision support.

Some premium internal primitive references include comparison-like runtime behavior. Stone should decide whether to expose comparison as a first-class merchant section.

Recommended behavior:

- compare 2–4 products;
- rows driven by metafields;
- sticky product headers on mobile;
- RTL-safe table behavior;
- optional quick add.

Recommended slug:

```text
product-comparison.liquid
```

---

### 9.5 Before/after as first-class marketing section

**Status:** likely primitive exists; section status unknown.  
**Priority:** P2/P1 depending on vertical.  
**Capability type:** visual proof.

Prestige, Impulse, and Broadcast list before/after image slider. If Stone already has the primitive, confirm it is available as a merchant-facing section with clear settings.

Recommended slug:

```text
before-after.liquid
```

Acceptance test:

A merchant can create a before/after visual proof section without custom JS.

---

### 9.6 Blog / article merchandising blocks

**Status:** likely under-specified.  
**Priority:** P2/P1 for editorial brands.  
**Capability type:** content commerce.

Premium themes list blogs, but the deeper requirement is commerce-aware editorial content.

Recommended blocks:

- featured article;
- article card grid;
- article product callout;
- article author block;
- article share block;
- related articles;
- article table of contents;
- article product carousel.

Recommended slugs:

```text
featured-blog-posts.liquid
article-product-callout.liquid
related-articles.liquid
article-toc.liquid
```

---

## 10. Missing policy layer: app blocks and theme blocks

### 10.1 App-block placement policy

**Status:** likely missing from section audit.  
**Priority:** P0.  
**Capability type:** theme extensibility governance.

Shopify app blocks let installed apps inject functionality into compatible theme sections. A mature theme should specify where app blocks are accepted.

Recommended policy:

- PDP main section should accept app blocks in controlled zones.
- Cart drawer may accept app blocks only in safe non-checkout-breaking regions.
- Header should be restrictive.
- Footer can allow selected app blocks or custom liquid.
- Product information drawers should support page/metafield content but not arbitrary app injection unless intentionally governed.
- Collection grid should avoid arbitrary app blocks inside product-card loops unless explicitly designed.

Acceptance test:

A merchant can add review, subscription, preorder, back-in-stock, loyalty, or delivery apps without breaking section architecture.

---

### 10.2 Theme-block nesting policy

**Status:** likely missing from section audit.  
**Priority:** P0.  
**Capability type:** editor architecture.

Shopify supports theme blocks that can nest up to eight levels. Stone should define where nesting is allowed and where it is prohibited.

Recommended policy:

Allow nesting in:

- rich content sections;
- editorial split sections;
- slide blocks;
- card grids;
- FAQ categories;
- mega menu promo groups;
- lookbook/hotspot compositions.

Disallow or restrict nesting in:

- product form core blocks;
- cart line item rendering;
- critical checkout-adjacent logic;
- collection product-card loops;
- performance-sensitive carousels;
- overlays with strict focus management.

Acceptance test:

A merchant can compose flexible content without creating unbounded editor complexity or fragile markup.

---

### 10.3 Dynamic-source compatibility checklist

**Status:** likely missing or implicit.  
**Priority:** P0.  
**Capability type:** data architecture.

Stone should classify which settings can connect to metafields/metaobjects.

Recommended dynamic-source targets:

- product facts;
- size/measurement guides;
- materials/care;
- shipping/delivery notes;
- trust badges;
- press mentions;
- testimonials;
- lookbook entries;
- hotspots;
- collection promo content;
- FAQ items;
- product comparison rows;
- delivery restrictions.

Avoid dynamic-source complexity for:

- core layout settings;
- spacing tokens;
- global motion behavior;
- critical product form settings;
- cart state behavior.

Acceptance test:

A merchant can maintain repeatable content through metafields/metaobjects instead of duplicating text across templates.

---

## 11. Missing journey-level section families

A premium theme library should be reviewed by shopper journey, not only by section names.

### 11.1 Homepage journey

Required surfaces:

- hero / slideshow;
- image with text;
- media grid;
- featured collection;
- featured product;
- shop-the-look;
- promo banner;
- promo tile grid;
- press coverage;
- testimonials;
- trust badge strip;
- FAQ preview;
- newsletter signup;
- blog/editorial preview.

### 11.2 Collection journey

Required surfaces:

- collection banner;
- filters and sorting;
- swatch filters;
- collection navigation;
- product grid;
- quick buy;
- collection promo card;
- collection promo banner;
- recently viewed;
- recommended products;
- breadcrumbs;
- back-to-top.

### 11.3 Product journey

Required surfaces:

- product gallery;
- image zoom;
- image rollover;
- variant picker;
- color swatches;
- quantity selector;
- buy buttons;
- sticky add to cart;
- stock counter;
- trust badges;
- product tabs;
- info drawer buttons;
- size chart;
- shipping/delivery information;
- product facts/materials/care;
- complementary products;
- recently viewed;
- recommended products;
- back-in-stock;
- pre-order;
- product media promo overlay.

### 11.4 Cart journey

Required surfaces:

- slide-out cart;
- cart notes;
- free-shipping progress;
- discount field if supported;
- trust badges;
- cart upsell/cross-sell;
- delivery/pickup messaging;
- empty-cart recovery path;
- checkout CTA clarity;
- line item quantity editing;
- error states.

### 11.5 Support / trust journey

Required surfaces:

- FAQ page;
- contact form;
- store policies;
- press coverage;
- testimonials;
- trust badges;
- shipping/returns pages;
- privacy/cookie banner where relevant;
- accessibility baseline.

---

## 12. Recommended additions to the Stone section/block library

### 12.1 New first-class sections

Add or explicitly confirm:

```text
shop-the-look.liquid
image-hotspot.liquid
lookbook.liquid
promo-banner.liquid
promo-tile-grid.liquid
promo-popup.liquid
collection-promo-banner.liquid
collection-grid-promo-card.liquid
press-coverage.liquid
trust-badge-strip.liquid
complementary-products.liquid
recently-viewed-products.liquid
quick-order-list.liquid
faq-section.liquid
before-after.liquid
product-comparison.liquid
featured-blog-posts.liquid
related-articles.liquid
shipping-delivery-info.liquid
```

### 12.2 New or promoted product-page blocks

Add or explicitly confirm:

```text
product-info-drawer-block.liquid
size-chart-block.liquid
shipping-delivery-block.liquid
product-facts-block.liquid
product-materials-block.liquid
product-care-block.liquid
product-usage-block.liquid
complementary-product-block.liquid
back-in-stock-block.liquid
pre-order-state-block.liquid
quantity-pricing-block.liquid
trust-badge-block.liquid
app-block-slot.liquid
```

### 12.3 New or promoted primitives

Add or explicitly confirm:

```text
info-drawer-trigger
hotspot-pin
hotspot-popover
promo-card
promo-overlay
trust-badge
press-logo
product-fact-row
volume-pricing-table
back-to-top-button
breadcrumb-list
app-block-zone
nested-theme-block-zone
```

### 12.4 New governance documents

Add to the audit/governance layer:

```text
app-block-placement-policy.md
theme-block-nesting-policy.md
dynamic-source-compatibility-matrix.md
promotion-surface-taxonomy.md
product-page-conversion-block-map.md
collection-merchandising-surface-map.md
rtl-section-block-acceptance-checklist.md
```

---

## 13. Recommended priority order

### Phase 1 — Premium completeness floor

Implement/spec first:

1. `shop-the-look`
2. `image-hotspot`
3. promotion system family
4. PDP info drawer blocks
5. complementary products / cross-sell
6. recently viewed products
7. collection promo slots
8. back-in-stock placement contract
9. pre-order state contract
10. dynamic-source compatibility matrix
11. app-block placement policy
12. theme-block nesting policy

### Phase 2 — Trust and decision support

Implement/spec second:

1. press coverage
2. trust badge strip
3. advanced FAQ / TOC
4. shipping/delivery information
5. product facts/materials/care
6. size chart / measurement guide
7. breadcrumbs
8. back-to-top

### Phase 3 — Advanced / vertical-specific capabilities

Implement/spec third:

1. quick order list
2. quantity pricing
3. product comparison
4. age verifier
5. Sign in with Shop compatibility
6. combined listings compatibility
7. editorial commerce article blocks

---

## 14. RTL-first requirements for every new section

Every new Stone section/block should pass these RTL checks:

1. Uses logical properties where possible.
2. Does not hardcode left/right layout assumptions unless mirrored intentionally.
3. Supports Hebrew heading/body typography without overflow.
4. Handles mixed Hebrew/English/product-code text safely.
5. Mirrors directional icons where semantically required.
6. Does not mirror icons where mirroring would change meaning incorrectly.
7. Keeps popovers/drawers aligned to the correct reading edge.
8. Keeps carousel navigation intuitive in RTL.
9. Preserves keyboard order and screen-reader semantics.
10. Supports localized labels through translation files, not hardcoded section text.

---

## 15. Final assessment

### 15.1 What appears strong

Stone’s conceptual base appears strong at the primitive/runtime layer:

- reusable content primitives;
- reusable commerce primitives;
- runtime custom elements;
- overlay thinking;
- product-card and product-form thinking;
- RTL-first ambition;
- section settings grammar;
- shell/system architecture.

### 15.2 What appears missing

The likely missing layer is not more atomic primitives. It is composed, merchant-facing, premium-theme capability coverage:

- shop-the-look;
- image hotspots;
- complete promotion system;
- PDP trust drawers;
- PDP cross-sell/complementary products;
- recently viewed;
- back-in-stock;
- pre-order;
- collection promo injection;
- press coverage;
- trust badges;
- structured product facts;
- app-block governance;
- theme-block nesting governance;
- dynamic-source matrix.

### 15.3 Bottom line

Stone should not measure completeness by section count alone.

A high-end Shopify theme feels complete when it gives merchants first-class tools for:

- editorial storytelling;
- campaign placement;
- collection merchandising;
- PDP trust and decision support;
- purchase-state handling;
- cart recovery;
- social proof;
- product discovery;
- app compatibility;
- and RTL-safe composition.

The next stabilization step should be to convert this review into a checklist against the actual `section-block-library-stabilization-audit-2026-04-24.md` file and mark each item as:

```text
PRESENT / PARTIAL / MISSING / INTENTIONALLY EXCLUDED
```

---

## 16. Machine-checkable checklist

```yaml
premium_theme_gap_review:
  p0_required:
    shop_the_look: unknown
    image_hotspot: unknown
    promotion_system_family: partial_or_unknown
    pdp_info_drawer_blocks: unknown
    complementary_products: unknown
    recently_viewed_products: unknown
    collection_promo_slots: unknown
    back_in_stock_contract: unknown
    preorder_contract: unknown
    app_block_placement_policy: unknown
    theme_block_nesting_policy: unknown
    dynamic_source_matrix: unknown
  p1_expected:
    press_coverage: unknown
    trust_badge_strip: unknown
    advanced_faq_toc: unknown
    breadcrumbs: unknown
    back_to_top: unknown
    quick_order_list: unknown
    quantity_pricing_display: unknown
    shipping_delivery_info: partial_or_unknown
    size_chart_measurement_guide: unknown
    product_facts_materials_care: unknown
  p2_differentiators:
    age_verifier: unknown
    sign_in_with_shop_compatibility: unknown
    combined_listings_compatibility: unknown
    product_comparison: unknown
    before_after_section: partial_or_unknown
    editorial_commerce_blocks: unknown
  required_next_action:
    compare_against_exact_local_audit_file: true
    output_status_values:
      - PRESENT
      - PARTIAL
      - MISSING
      - INTENTIONALLY_EXCLUDED
```
