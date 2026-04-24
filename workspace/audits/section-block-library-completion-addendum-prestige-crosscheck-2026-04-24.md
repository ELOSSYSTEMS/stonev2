# Section / Block Library Completion Addendum: Prestige Cross-Check

Date: 2026-04-24

Status: review artifact only. No theme runtime files were changed by this audit.

## 1. Goal

Complete the Stone V2 section/block stabilization audit by cross-checking it against the local Prestige theme at `C:\ELoS\projects\PRESTIGE\THEME` and the premium-theme gap review.

## 2. Evidence Used

Verified:
- Stone source theme path: `C:\ELoS\projects\stonev2\project`
- Stone stabilization audit: `workspace/audits/section-block-library-stabilization-audit-2026-04-24.md`
- Stone premium gap review: `workspace/audits/section-block-library-premium-theme-gap-review-2026-04-24.md`
- Prestige source theme path: `C:\ELoS\projects\PRESTIGE\THEME`
- Prestige has 71 Liquid section files in `sections/`.
- Prestige has 3 JSON section group files in `sections/`: `header-group.json`, `footer-group.json`, and `overlay-group.json`.
- Prestige has 11 standalone theme block files in `blocks/`.
- Prestige has 88 configured section instances across JSON templates/groups.
- Prestige has 259 configured block instances across JSON templates/groups.
- Stone currently has 41 Liquid section files in `project/sections`.
- Stone currently has 0 standalone Liquid block files in `project/blocks`.
- Stone currently has 0 JSON section group files in `project/sections`.
- Stone currently has 39 configured section instances across JSON templates.
- Stone currently has 32 configured block instances across JSON templates.

Inference:
- Prestige confirms that the stabilization audit is directionally correct: Stone's largest missing layer is not isolated section count, but editor-facing composition depth across global groups, theme blocks, product conversion, cart recovery, collection merchandising, app-block compatibility, and configured template presets.
- Prestige also shows that premium-theme completeness depends on heavily configured template instances, not only on the number of section files.

Unknowns:
- The exact intended Stone target verticals are not fully fixed in this audit. Apparel, electronics, B2B, subscriptions, regulated products, and flower-commerce needs should remain separately tagged instead of forced into one required build list.
- The user-provided Prestige schema block count is 142. A local parser counted 140 because two Prestige section schemas contain JSON parse errors under strict parsing. This does not change the gap conclusions.

## 3. What The Existing Audit Already Covers Correctly

Verified:
- The stabilization audit already identifies missing global group structure: header group, footer group, and overlay group.
- The stabilization audit already identifies missing required template hosts: page, cart, 404, contact, policy, gift card, and password.
- The stabilization audit already identifies missing or under-specified commerce and PDP support: product carousel, collection list/cards, related products, recently viewed products, reviews/rating host, care/materials guide, compatibility/fit guide, and sticky add-to-cart.
- The stabilization audit already identifies missing collection support: collection hero, filter/sort structural model, promo insertion card, merchandising banner, and empty collection state.
- The stabilization audit already identifies missing compatibility hosts: custom Liquid and app block host.

Inference:
- The first audit should not be replaced. It should be promoted from "section inventory" to "premium completeness checklist" by adding explicit status values and a Prestige-backed priority model.

## 4. Prestige-Confirmed Completion Gaps

### 4.1 Global Groups Are P0, Not Optional

Verified:
- Prestige has `sections/header-group.json`, `sections/footer-group.json`, and `sections/overlay-group.json`.
- Prestige header group configures `announcement-bar`, `countdown-condensed`, and `header`.
- Prestige footer group configures `text-with-icons`, `logo-list`, and `footer`.
- Prestige overlay group configures `cart-drawer`, `newsletter-popup`, `privacy-banner`, and `whatsapp-chat`.
- Stone has no JSON section group files.

Decision:
- Keep the original first implementation recommendation: global group shell stabilization should remain the next structural unit.
- Expand the acceptance criteria: the shell should include real group files and at least one configured section instance per group, not only section files.

### 4.2 Standalone Theme Blocks Are A Premium Architecture Gap

Verified:
- Prestige has standalone theme blocks: `accordion`, `badge`, `button-group`, `button`, `heading`, `icon`, `image`, `liquid`, `page-content`, `rich-text`, and `video`.
- Prestige has a `_blocks.liquid` section that allows `@theme` and `@app` blocks.
- Stone has no standalone theme block files.

Decision:
- Add a required governance choice before large preset work: Stone should either introduce `project/blocks` in the stabilization phase or explicitly defer theme blocks with a written reason.
- The minimum Stone theme-block set should be: heading, rich text, button, button group, image, video, icon, page/content, accordion, custom liquid, and badge.

### 4.3 App-Block Placement Policy Is Missing

Verified:
- Prestige uses `@app` blocks in general app sections, footer, cart, account pages, featured product, and main product.
- Stone only shows `enabled_on` metadata in two PDP support sections and does not show an explicit app-block policy.

Decision:
- Add `app-block-placement-policy.md` or a section inside the stabilization audit before implementation begins.
- Required allowed zones: PDP below/within product info, cart page/drawer non-critical region, footer, general app host, account pages if customer templates are included.
- Required restricted zones: header, product form critical path, collection product-card loops, and overlays with strict focus management unless deliberately designed.

### 4.4 Product Page Conversion Blocks Are Underbuilt

Verified:
- Prestige `main-product` exposes block types for vendor, title, SKU, badges, price, rating, payment terms, description, variant picker, product variations, line item property, quantity selector, volume pricing, inventory, buy buttons, pickup availability, complementary products, offers, feature with icon, accordion, modal, image, button, share buttons, and custom product-specific blocks.
- Stone `stone-main-product` currently has a basic variant selector, quantity input, price, and add-to-cart form.

Decision:
- Treat Stone PDP as PARTIAL, not PRESENT.
- The next PDP stabilization pass should define block contracts for product identity, pricing, variant picker, quantity selector, buy buttons, inventory/stock, pickup/delivery, accordions/info drawers, complementary products, recommendations, app blocks, trust badges, share buttons, and custom Liquid.

### 4.5 Cart And Recovery Surfaces Are Missing From The Audit Priority Floor

Verified:
- Prestige has `cart-drawer.liquid`, `main-cart.liquid`, `recently-viewed-products.liquid`, `related-products.liquid`, and overlay-group cart configuration.
- Stone has no cart template host section and no cart drawer group.

Decision:
- Promote cart drawer, main cart, cart notes, cart upsell/cross-sell, empty-cart recovery, and recently viewed from optional follow-up to premium completeness floor.
- Do not wait for presets to define cart recovery. Presets can style it later.

### 4.6 Promotion Is A Cross-Surface System

Verified:
- Prestige includes `announcement-bar`, `countdown`, `countdown-condensed`, `discount-bar`, `popup-module`, `newsletter-popup`, `collection-banner`, rich-text campaign content, footer group promo-like trust/logo surfaces, and slideshow/media sections.
- Stone currently has utility notices/prompts and editorial sections, but no explicit promotion taxonomy.

Decision:
- Add a promotion surface taxonomy before broad section implementation.
- Minimum family: announcement bar, countdown/discount bar, promo banner, promo tile/card, popup/modal promo, collection promo slot, cart promo message, footer promo/trust surface, and in-menu promo.

### 4.7 Collection Merchandising Needs Grid-Level Controls

Verified:
- Prestige has `collection-banner`, `collection-list`, `main-collection`, collection template slideshow/rich-text/testimonials placement, and configured blocks around collection pages.
- Stone has main collection, category entry grid, collection context card, and featured collection grid, but no explicit collection promo slot or grid insertion model.

Decision:
- Keep collection hero/filter/sort/empty-state in the stabilization audit.
- Add collection grid promo slot, collection banner, collection list/cards, quick buy from collection cards, and swatch/color filter handling as separate checklist lines.

### 4.8 Editorial Commerce Needs Merchant-Facing Sections

Verified:
- Prestige includes slideshow, video, media grid, multi-column, multiple media with text, images-with-text-scroll, before-after, shop-the-look, timeline, tabs, blog posts, testimonials, and testimonials carousel.
- Stone has editorial, trust, and shoppable-media foundations, but lacks clear merchant-facing equivalents for several composed patterns.

Decision:
- Add or explicitly defer: shop-the-look, image hotspot, media grid, slideshow/carousel, before-after, tabs, timeline, blog post grid, testimonial carousel, and press coverage.
- Stone's existing shoppable-media sections should be normalized into a clear family instead of treated as separate one-off experiments.

### 4.9 Customer, Gift Card, Password, And System Templates Are A Completeness Gap

Verified:
- Prestige includes customer account/login/register/order/address/reset/activation sections, gift card, password, cart, list-collections, 404, page, contact, blog, article, collection, product, and search template hosts.
- Stone has main article, blog, collection, product, and search hosts, but the audit marks several system hosts as missing.

Decision:
- Add customer account templates to the missing template-host list, even if deferred.
- Keep gift card/password/404/cart/page/contact/policy as required host decisions before "premium complete" can be claimed.

### 4.10 Dynamic Data And Metaobject Strategy Needs A Matrix

Verified:
- Prestige uses metafield/metaobject references in product and custom sections, including product media/custom data and highlight metaobjects.
- The premium gap review already proposes a dynamic-source compatibility matrix.

Decision:
- Add `dynamic-source-compatibility-matrix.md` or embed a matrix in the audit.
- Required rows: product facts, size/care/materials, delivery info, FAQs, testimonials, press, lookbook/hotspots, collection promos, product comparisons, and trust badges.

## 5. Revised Premium Completeness Checklist

Use these statuses against Stone after the current audit:

| Capability | Stone status | Prestige evidence | Completion decision |
| --- | --- | --- | --- |
| Header group | Missing | `header-group.json` | P0 build |
| Footer group | Missing | `footer-group.json` | P0 build |
| Overlay group | Missing | `overlay-group.json` | P0 build |
| Cart drawer | Missing | `cart-drawer.liquid` | P0 build |
| Main cart | Missing | `main-cart.liquid` | P0 build |
| App block host/policy | Missing | `apps.liquid`, `@app` zones | P0 specify |
| Standalone theme blocks | Missing | 11 files in `blocks/` | P0 decide/build |
| PDP block model | Partial | Prestige `main-product` block stack | P0 rebuild contract |
| Product recommendations | Missing | `related-products.liquid` | P0 build |
| Recently viewed | Missing | `recently-viewed-products.liquid` | P0 build |
| Complementary products | Missing/partial | PDP block type exists in Prestige | P0 build |
| Pickup/delivery/inventory | Missing/partial | PDP block types exist in Prestige | P0/P1 build |
| Pre-order template/state | Missing | `product.pre-order.json` | P1 unless target requires P0 |
| Volume pricing | Missing | PDP `volume_pricing` block | P1/P2 by market |
| Collection banner | Missing/partial | `collection-banner.liquid` | P0 build |
| Collection list/cards | Missing | `collection-list.liquid` | P0 build |
| Collection promo insertion | Missing | collection campaign placement exists | P0 specify |
| Quick buy/quick order | Missing | `quick-order-list.liquid` | P1 build/defer by market |
| Shop the look | Partial via shoppable sections | `shop-the-look.liquid` | P0 normalize |
| Image hotspot | Partial via shoppable focus markers | shoppable/look sections | P0 normalize |
| Before/after | Missing | `before-after.liquid` | P1/P2 by market |
| Media grid | Missing | `media-grid.liquid` | P1 build |
| Slideshow | Missing | `slideshow.liquid` | P1 build |
| Tabs | Missing | `tabs.liquid` | P1 build |
| FAQ page architecture | Partial | `faq.liquid` category/question blocks | P1 strengthen |
| Contact form | Missing | `contact.liquid` | P1 build |
| Newsletter | Missing | `newsletter.liquid`, `newsletter-popup.liquid` | P1 build |
| Press coverage | Missing | premium benchmark, logo/testimonial pattern | P1 build |
| Trust badge strip | Partial | footer `text-with-icons`, logo list | P1 build |
| System templates | Partial | 404/cart/page/password/gift/customer hosts | P0/P1 decide |
| Dynamic-source matrix | Missing | metafield/metaobject usage | P0 specify |
| RTL acceptance checklist | Partial/implicit | Stone goal, not enough policy | P0 specify |

## 6. Recommended Completion Of The Existing Audit

Add these missing sections to the stabilization audit before presets:

1. Prestige cross-check summary.
2. Status matrix using `PRESENT`, `PARTIAL`, `MISSING`, and `INTENTIONALLY_EXCLUDED`.
3. App-block placement policy.
4. Theme-block introduction or deferral decision.
5. Dynamic-source compatibility matrix.
6. Promotion surface taxonomy.
7. Product-page conversion block map.
8. Cart and recovery surface map.
9. Collection merchandising surface map.
10. System/customer template-host decision list.
11. RTL acceptance checklist for sections, blocks, overlays, popovers, drawers, and carousel direction.

## 7. Revised Build Order

1. Global groups: header, footer, overlay.
2. Theme blocks and app-block policy.
3. Required template hosts: page, cart, 404, contact, policy, gift card, password, and customer/account if in scope.
4. PDP block contract: product identity, variant/buy flow, trust/info drawers, app blocks, recommendations, complementary products, inventory/delivery.
5. Cart recovery: cart drawer, main cart, notes, upsell/cross-sell, empty-cart recovery, recently viewed.
6. Collection merchandising: collection banner, collection list/cards, filter/sort, empty state, promo insertion, quick buy.
7. Promotion taxonomy: announcement, countdown/discount, promo banner/card/popup/footer/cart/menu.
8. Editorial commerce: shop-the-look, hotspot, media grid, slideshow, before-after, tabs, timeline, press/testimonials.
9. Dynamic-source and RTL acceptance checks.
10. Presets last.

## 8. Bottom Line

Verified:
- The first stabilization audit correctly identifies the central structural gaps.
- The premium gap review correctly identifies the missing merchant-facing capability layer.
- The local Prestige theme confirms both findings with concrete files and configured template/group instances.

Inference:
- Stone is not "missing everything"; it has a useful primitive and section foundation.
- Stone is not yet premium-complete because the editor-facing architecture is shallow compared with Prestige: no group files, no standalone theme blocks, limited configured blocks, no app-block policy, and incomplete PDP/cart/collection conversion journeys.

Decision:
- Complete the audit by converting it into a status matrix and policy checklist before implementing presets.
- Do not use Prestige's count as a direct target. Use Prestige to prove the missing capability families and editor composition depth.
