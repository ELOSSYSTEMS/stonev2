# Stone V2 Final Section Architecture Implementation Plan

Date: 2026-04-24

Artifact type: docs-only implementation plan

Status: READY FOR REVIEW; BLOCKED FOR RUNTIME EXECUTION UNTIL OWNER AUTHORIZATION

Runtime files changed by this plan: none

## Goal

Build Stone V2 into a premium Shopify theme with a secure root architecture, a stable section/block trunk, and full merchant-facing section branches across global shell, PDP, collection, cart, promotion, editorial commerce, support, system templates, and presets.

## Scope

In scope:

- Secure the roots before broad feature construction.
- Define the complete implementation sequence for all suggested sections and blocks from the audit stack.
- Preserve Liquid-first, no frontend framework, no web components, RTL-native, Hebrew-first, bilingual editor support.
- Use the Prestige theme only as capability evidence, not as code to copy.
- Keep every runtime phase small enough to verify and roll back.

Out of scope:

- No runtime implementation in this plan.
- No Shopify theme publishing.
- No live theme mutation.
- No preset composition until the root and trunk gates pass.
- No copy/paste from Prestige or other reference themes.

## Source Artifacts Read

- `workspace/audits/section-block-library-stabilization-audit-2026-04-24.md`: VERIFIED
- `workspace/audits/section-block-library-premium-theme-gap-review-2026-04-24.md`: VERIFIED
- `workspace/audits/section-block-library-completion-addendum-prestige-crosscheck-2026-04-24.md`: VERIFIED
- `workspace/audits/section-architecture-implementation-control-matrix-2026-04-24.md`: VERIFIED
- `state/NEXT_ACTION.md`: VERIFIED
- `state/STATUS.md`: VERIFIED
- `state/ORCHESTRATION_STATE.md`: VERIFIED
- `workspace/handoff/CURRENT_HANDOFF.md`: VERIFIED

## Current Repo Evidence

Verified:

- Current runtime root is `project/`.
- Current theme has Shopify runtime folders: `assets`, `blocks`, `config`, `layout`, `locales`, `sections`, `snippets`, and `templates`.
- Current state says broad preset runtime composition remains blocked.
- Current state says no further Shopify upload-repair unit is approved.
- Current state says `UNIT-184` remains blocked pending owner runtime composition inputs.
- Control matrix requires a saved implementation plan before runtime edits.
- Control matrix requires explicit block model classification before section work.

Inference:

- The final product should be built as a sequence of gates, not as one broad section drop.
- The right order is roots, trunk, primary branches, secondary branches, then preset leaves.

## Control Matrix Rows Affected

| Section / Surface | Current status | Target status | Priority |
| --- | --- | --- | --- |
| `header-group.json` | MISSING/PARTIAL | PRESENT | P0 |
| `footer-group.json` | MISSING/PARTIAL | PRESENT | P0 |
| `overlay-group.json` | MISSING/PARTIAL | PRESENT | P0 |
| `apps.liquid` | MISSING | PRESENT | P0 |
| `_blocks.liquid` | MISSING | PRESENT or INTENTIONALLY_EXCLUDED | P0 decision |
| `/blocks` minimum set | MISSING/PARTIAL | PRESENT | P0 |
| `cart-drawer.liquid` | MISSING | PRESENT | P0 |
| `main-cart.liquid` | MISSING | PRESENT | P0 |
| `stone-main-product` | PARTIAL | PRESENT | P0 |
| `related-products.liquid` | MISSING | PRESENT | P0 |
| `recently-viewed-products.liquid` | MISSING | PRESENT | P0 |
| `complementary-products` | MISSING/PARTIAL | PRESENT | P0 |
| `collection-banner.liquid` | MISSING/PARTIAL | PRESENT | P0 |
| `stone-main-collection` | PARTIAL | PRESENT | P0 |
| `collection-list.liquid` | MISSING | PRESENT | P0 |
| promotion family | MISSING/PARTIAL | PRESENT | P0 |
| `shop-the-look.liquid` | PARTIAL/MISSING | PRESENT | P0/P1 |
| `image-hotspot.liquid` | PARTIAL/MISSING | PRESENT | P0/P1 |
| editorial media family | MISSING/PARTIAL | PRESENT | P1 |
| support/trust family | PARTIAL | PRESENT | P1 |
| system templates | PARTIAL/MISSING | PRESENT | P0/P1 |
| customer templates | MISSING | PRESENT or INTENTIONALLY_EXCLUDED | P1 decision |
| preset JSON composition | BLOCKED | PRESENT after gates | P0 final product |

## Block Model Decisions

| Section | Block model | Reason |
| --- | --- | --- |
| Header/footer/overlay groups | GROUP_CONFIG | Shopify group config, not regular section composition. |
| `apps.liquid` | APP_WRAPPER_SECTION | Required safe app-block wrapper. |
| `_blocks.liquid` | THEME_BLOCK_SECTION | Top-level theme block wrapper if reusable block composition is admitted. |
| Flexible editorial sections | THEME_BLOCK_SECTION preferred | Reusable merchant composition and nesting are useful. |
| PDP core | SECTION_BLOCK_SECTION first | Current PDP is partial; safer to stabilize controlled product blocks before any theme-block rewrite. |
| Cart drawer | SECTION_BLOCK_SECTION first | Cart state is sensitive; use controlled slots before flexible composition. |
| Main cart | SECTION_BLOCK_SECTION | Controlled cart blocks and safe app zone below core cart. |
| Collection grid | SECTION_BLOCK_SECTION | Avoid app/theme blocks inside product-card loops. |
| Promo tile grid | SECTION_BLOCK_SECTION | Controlled tile count and predictable layout. |
| Static system hosts | STATIC_NO_BLOCK_SECTION or limited SECTION_BLOCK_SECTION | Stability matters more than composition. |
| Theme block primitives | `/blocks/*.liquid` | Required for reusable rich sections. |

## Dependencies

| Dependency | Status | Action |
| --- | --- | --- |
| `snippets/product-card.liquid` | Verify before product rails | Stabilize before related/recent/complementary/collection cards. |
| `snippets/price.liquid` | Verify before PDP/product cards/cart | Build or normalize once. |
| `snippets/media.liquid` | Verify before media-heavy sections | Build responsive image/video helper before slideshow/media grid/hotspots. |
| `snippets/button.liquid` | Verify before CTA sections | Build shared CTA rendering. |
| `snippets/icon.liquid` | Verify before navigation/trust | Build accessible icon helper. |
| `snippets/form-errors.liquid` | Verify before contact/newsletter/customer | Build accessible error rendering. |
| `snippets/pagination.liquid` | Verify before collection/search/blog | Build RTL-safe pagination. |
| `snippets/facets.liquid` | Verify before collection/search hardening | Extract from current collection if reuse is justified. |
| `snippets/quantity-input.liquid` | Verify before PDP/cart | Build accessible quantity control once. |
| `snippets/variant-picker.liquid` | Verify before PDP rewrite | Build no-JS baseline and optional enhanced path. |
| `assets/drawer.js` | Missing/verify | Required before cart/search/menu drawers. |
| `assets/modal.js` | Missing/verify | Required before newsletter, info drawers, media modal. |
| `assets/carousel.js` | Missing/verify | Required before slideshow/testimonials/carousels. |
| `assets/accordion.js` | Missing/verify | Required before FAQ/tabs/PDP accordions if JS is needed. |
| RTL CSS pattern | Partial/verify | Required for every phase. |
| QA harness | Present | Run after every state or runtime phase. |

## App Block Policy Impact

Allowed:

- PDP below product form.
- PDP after product info.
- Featured product outside critical add-to-cart controls.
- Cart page below cart items.
- Footer with visual containment.
- Generic `apps.liquid`.
- Customer/account pages only if admitted.
- Blog/article below content only if admitted.

Restricted or blocked:

- Header by default.
- Product form critical path.
- Collection product-card loops.
- Static-rendered sections.
- Overlay internals unless focus behavior is explicit.

## Accessibility Requirements

All interactive branches must define:

- Keyboard path.
- Focus order.
- Focus trap for modal/drawer/popover.
- Escape behavior.
- Return focus behavior.
- ARIA role/name/state where applicable.
- Reduced-motion behavior.
- No keyboard trap failure.

High-risk components:

- Header mega menu.
- Mobile navigation drawer.
- Cart drawer.
- Search drawer.
- Newsletter modal.
- Privacy banner.
- Product info drawer.
- Image hotspot popover.
- Slideshow/carousel.
- Tabs.

## RTL Requirements

All sections must:

- Use logical CSS properties by default.
- Avoid hard-coded left/right assumptions unless deliberate and documented.
- Pass Hebrew long-text checks.
- Preserve mixed Hebrew/English/product-code readability.
- Keep drawers, popovers, carousels, filters, pagination, and product media direction explicit.

## Performance Budget

Targets:

- Minimum average Lighthouse performance: 70.
- Preferred average Lighthouse performance: 80+.
- No critical template below 60 without explicit waiver.

Implementation rules:

- Shared JS modules only.
- No per-section duplicated heavy scripts.
- Lazy-load below-fold images.
- Preserve width/height or aspect-ratio.
- Initialize drawers, modals, tabs, and carousels only when needed.
- Hide unavailable dynamic sections cleanly.

## Data Fallbacks

Every section must define:

- Missing image behavior.
- Missing product behavior.
- Missing collection behavior.
- Empty collection behavior.
- Product unavailable behavior.
- Variant unavailable behavior.
- Missing metafield/metaobject behavior.
- Missing menu behavior.
- Missing app block behavior.
- Form error behavior.

No production fallback may use fake merchant claims.

## Builder

The build should be sequenced as roots, trunk, branches, leaves.

Roots are the foundations that keep the theme safe:

1. Control artifacts and governance.
2. Shared snippets and render primitives.
3. Global section groups.
4. Block architecture and app-block policy.
5. Shared JS/CSS behavior for drawers, modals, carousels, accordions, RTL, and performance.

The trunk is the reusable commerce operating layer:

1. Product card, price, media, button, icon, form error, quantity, variant picker, pagination, and facets.
2. PDP block contract.
3. Cart and recovery system.
4. Collection merchandising system.
5. Promotion system.

Branches are merchant-facing section families:

1. Global shell: header, footer, overlay.
2. PDP: main product, product facts, accordions/info drawers, recommendations, complementary products, recently viewed, size/spec/care/compatibility.
3. Collection/search: banner, filters, sort, empty state, collection list, promo insertion, product grid cards.
4. Cart: drawer, main cart, notes, free-shipping/progress if admitted, trust, upsell, empty-cart recovery.
5. Promotion: announcement, countdown/discount, promo banner, tile grid, popup, in-menu promo, collection promo card, cart promo message, footer promo.
6. Editorial commerce: shop the look, image hotspot, lookbook, media grid, slideshow, before/after, tabs, timeline, video, scrolling/marquee.
7. Trust/support: FAQ, advanced FAQ/TOC, testimonials, testimonial carousel, press coverage, trust badge strip, logo rail, contact, newsletter.
8. System templates: page, 404, policy, password, gift card, cart, search, blog, article, list collections, optional customer templates.

Leaves are final preset compositions:

1. Apparel preset.
2. Electronics/technical preset.
3. Home/lifestyle preset.
4. Editorial/brand preset.
5. Flower/gift or Stone-specific commerce preset if owner confirms.

The Builder approach is to implement one gated phase at a time and never start a branch until its root dependency is present and verified.

## Adversarial reviewer

Main risks:

1. The plan can become too broad and accidentally authorize runtime work beyond the current block.
2. Building many section files before shared snippets will create inconsistent markup and settings.
3. Introducing theme blocks too late will force duplicate section schemas.
4. Introducing theme blocks too early can destabilize PDP/cart critical paths.
5. App-block support can break architecture if allowed in static sections or critical loops.
6. Drawers/modals/carousels can ship with poor focus behavior if visual proof comes before accessibility proof.
7. Promotion surfaces can sprawl unless a taxonomy is defined before implementation.
8. PDP and cart are purchase-critical; changes must be smaller than editorial section changes.
9. Presets can hide unfinished root problems by arranging existing sections attractively without solving architecture.
10. Prestige can bias the plan toward section-count parity instead of product-fit completeness.

Safer constraints:

- Treat theme blocks as a deliberate root decision, not an incidental implementation detail.
- Keep PDP and cart on controlled section-block contracts until their critical flows are stable.
- Build app block support only in declared zones.
- Require every drawer/modal/popover to ship with focus tests.
- Require every media-heavy section to ship with performance budget notes.
- Keep presets blocked until the root and trunk phases pass.

## Final recommendation or Reconciliation

Use a two-lane build strategy:

1. Architecture lane: roots and trunk.
2. Product lane: branches and preset leaves.

The architecture lane must finish first. The product lane can only start when the relevant architecture gate passes.

Rejected alternatives:

- Rejected: build every section file first, then normalize later. This creates schema drift and inconsistent behavior.
- Rejected: copy Prestige structure directly. Prestige is evidence, not a source template.
- Rejected: start with presets. Presets depend on stable sections, blocks, template mutation policy, and starter content.
- Rejected: make every section a theme-block section. PDP/cart/collection loops need controlled contracts.
- Rejected: make every section section-block only. Flexible editorial composition needs reusable theme blocks.

Selected strategy:

- Secure roots: governance, snippets, block policy, global groups, JS/CSS primitives.
- Build trunk: product/card/media/form systems, PDP/cart/collection/promotion foundations.
- Build branches: full section families.
- Build leaves: preset composition and starter content.

## Phase 0: Planning And Authorization Gate

Purpose:

- Confirm this plan is the active roadmap for full section/block final product work.

Implementation:

1. Review this plan.
2. Decide whether `/blocks` theme-block architecture is admitted now.
3. Decide whether customer templates are in scope for first premium-complete pass.
4. Decide whether quick order, volume pricing, age verifier, and combined listings are first-pass or later.
5. Decide whether final target includes flower/gift-specific sections beyond generic commerce.
6. Create the first runtime implementation plan using the control matrix Section 15 structure.

Verification:

- Plan file exists.
- No runtime files changed.
- Owner authorization captured before runtime work.

Rollback:

- Remove or supersede this docs-only plan.

Exit criteria:

- Owner approves the phase sequence and authorizes the first runtime unit.

## Phase 1: Roots - Governance, Inventory, And Matrix Normalization

Purpose:

- Make the implementation control surface complete before any build.

Implementation:

1. Convert all audit findings into a machine-checkable status matrix.
2. Mark every suggested section/block as `PRESENT`, `PARTIAL`, `MISSING`, or `INTENTIONALLY_EXCLUDED`.
3. Add rows for every final-product section and block listed in this plan.
4. Add the app-block placement policy as a committed artifact.
5. Add the dynamic-source compatibility matrix.
6. Add the RTL acceptance checklist.
7. Add the promotion surface taxonomy.
8. Add the product-page conversion block map.
9. Add the collection merchandising surface map.
10. Add the cart recovery surface map.

Files or surfaces:

- `workspace/audits/`
- `workspace/plans/`
- `workspace/specs/`
- `state/` only if a governed unit is opened.

Verification:

- Required artifacts exist.
- Matrix has no P0 row without status, block model, dependencies, fallback, QA, and priority.

Rollback:

- Revert docs-only artifacts.

Exit criteria:

- No P0 implementation target is ambiguous.

## Phase 2: Roots - Shared Render Primitives

Purpose:

- Secure the common rendering layer before building rich sections.

Implementation:

1. Audit existing snippets and assets.
2. Add or stabilize:
   - `product-card`
   - `price`
   - `media`
   - `button`
   - `icon`
   - `form-errors`
   - `pagination`
   - `facets`
   - `quantity-input`
   - `variant-picker`
3. Add locale keys for reusable labels.
4. Add no-JS fallbacks where possible.
5. Add RTL-safe CSS utilities where needed.

Block model:

- Snippet layer, not a section model.

Verification:

- Theme Check.
- JSON parse for templates/locales.
- Locale parity.
- Render smoke tests for pages that use touched snippets.

Rollback:

- Revert added snippets/assets/locales for this phase.

Exit criteria:

- Product, collection, cart, media, forms, and CTAs can reuse one stable primitive layer.

## Phase 3: Roots - Global Groups And App Wrapper

Purpose:

- Build the global shell before page-specific branches.

Implementation:

1. Add `sections/header-group.json`.
2. Add `sections/footer-group.json`.
3. Add `sections/overlay-group.json`.
4. Add `sections/apps.liquid`.
5. Add minimal editable global sections:
   - announcement bar
   - main header
   - mobile navigation drawer
   - mega menu shell
   - main footer
   - footer legal row
   - cart drawer shell
   - search drawer shell
6. Keep visual design minimal.
7. Do not implement deep cart/search behavior until later phases unless required for shell proof.

Block model:

- Groups: `GROUP_CONFIG`.
- `apps.liquid`: `APP_WRAPPER_SECTION`.
- Header/footer section internals: controlled section blocks.

Verification:

- Theme Check.
- Shopify upload dry proof when available.
- Header/footer render on home/product/collection/page.
- Keyboard open/close for mobile menu if implemented.
- RTL nav and footer layout check.

Rollback:

- Remove group files and new global shell sections.

Exit criteria:

- Global shell is editable, safe, and does not depend on presets.

## Phase 4: Roots - Theme Blocks Minimum Set

Purpose:

- Add reusable blocks before flexible editorial branches.

Implementation:

1. Decide whether `_blocks.liquid` is included in first pass.
2. Add minimum theme block files:
   - `heading`
   - `rich-text`
   - `button`
   - `button-group`
   - `image`
   - `video`
   - `icon`
   - `badge`
   - `accordion`
   - `page-content`
   - `liquid`
3. Define allowed parent/child block compatibility.
4. Do not allow all theme blocks everywhere.
5. Do not mix theme blocks with section-defined blocks in one section.

Block model:

- `THEME_BLOCK_SECTION` only where admitted.

Verification:

- Theme Check.
- Schema validation.
- Render wrapper with no blocks.
- Render wrapper with each minimum block.
- RTL long text check.

Rollback:

- Remove block files and wrapper.

Exit criteria:

- Flexible sections can reuse a governed block vocabulary.

## Phase 5: Trunk - Shared JS/CSS Behavior

Purpose:

- Build accessible behavior once before interactive sections multiply.

Implementation:

1. Add or stabilize shared drawer module.
2. Add or stabilize shared modal module.
3. Add or stabilize carousel module.
4. Add or stabilize accordion/tabs module.
5. Add focus trap and return-focus helpers.
6. Add reduced-motion handling.
7. Add RTL direction helpers for carousels/drawers.
8. Add performance initialization rules.

Verification:

- Keyboard tests for each component.
- ESC close.
- Focus return.
- Body scroll lock.
- Reduced motion.
- No global JS loaded for pages with no matching component unless intentionally shared and small.

Rollback:

- Revert shared assets and any sections depending on them.

Exit criteria:

- Drawers, modals, tabs, carousels, accordions, and hotspots have safe shared behavior.

## Phase 6: Trunk - PDP Conversion Contract

Purpose:

- Turn PDP from partial host into premium product decision and purchase surface.

Implementation:

1. Stabilize `stone-main-product` block contract.
2. Add controlled blocks:
   - vendor
   - title
   - SKU
   - badges
   - price
   - rating host/app zone
   - payment terms
   - description
   - variant picker
   - quantity selector
   - inventory/stock counter
   - buy buttons
   - pickup availability
   - delivery/shipping info
   - trust badges
   - accordion row
   - info drawer trigger
   - product facts
   - materials/care
   - compatibility/fit
   - size chart
   - spec sheet
   - custom liquid
   - share buttons
   - app block safe zone
3. Preserve existing merchant-facing schema IDs unless migration is documented.
4. Keep size chart and spec sheet optional and shared.
5. Add pre-order and back-in-stock placement contracts, but only implement behavior once purchase-state rules are decided.

Verification:

- One variant.
- Many variants.
- Sold out.
- Unavailable variant.
- Product without media.
- Product with media/video.
- Add to cart success/error if testable.
- App block present/missing.
- Hebrew long product title.
- RTL variant picker.

Rollback:

- Revert PDP section, snippets, assets, and locale changes.

Exit criteria:

- PDP can host all premium product decision blocks without preset-specific hacks.

## Phase 7: Trunk - Cart And Recovery System

Purpose:

- Build purchase recovery before final merchandising branches.

Implementation:

1. Add `cart-drawer.liquid`.
2. Add `main-cart.liquid`.
3. Add cart line item renderer.
4. Add quantity update controls.
5. Add cart notes.
6. Add empty-cart recovery CTA.
7. Add trust badge placement.
8. Add cart upsell/cross-sell slot.
9. Add cart promo message.
10. Add free-shipping progress only if owner confirms it fits target markets.
11. Keep checkout/billing-sensitive behavior conservative.

Verification:

- Empty cart.
- Full cart.
- Quantity update.
- Remove item.
- Cart note.
- App block safe zone.
- Focus trap for drawer.
- RTL totals.
- No JS failure leaves cart inaccessible.

Rollback:

- Revert cart sections/snippets/assets/locales.

Exit criteria:

- Cart journey is complete enough for premium product browsing recovery.

## Phase 8: Trunk - Product Recovery Rails

Purpose:

- Add product discovery and recovery surfaces shared by PDP, cart, collection, and search.

Implementation:

1. Add `related-products.liquid`.
2. Add `recently-viewed-products.liquid`.
3. Add `complementary-products.liquid` or PDP block.
4. Add product carousel/grid mode using shared product card.
5. Add empty hidden state.
6. Add local-storage behavior for recently viewed with privacy-safe fallback.

Verification:

- No recommendations.
- 1, 4, and many recommendations.
- First visit recently viewed.
- Repeat visit recently viewed.
- Storage disabled.
- RTL carousel/grid.

Rollback:

- Revert product recovery sections/assets/locales.

Exit criteria:

- Product recovery is reusable and not tied to one preset.

## Phase 9: Trunk - Collection And Search Merchandising

Purpose:

- Build high-intent browsing surfaces before campaign branches.

Implementation:

1. Stabilize `stone-main-collection`.
2. Add or refine:
   - collection banner
   - collection hero
   - filters/facets
   - sort
   - pagination
   - empty collection state
   - product grid card contract
   - quick buy if admitted
   - collection promo card injection
   - collection promo banner
   - collection list/cards
   - swatch/color filter handling if admitted
3. Stabilize `stone-main-search`.
4. Add search empty state and result card consistency.
5. Add predictive search only after drawer/focus behavior is proven.

Verification:

- Empty collection.
- Many products.
- Collection without image.
- Many filters.
- Price filter.
- Sort.
- Pagination.
- Sold-out product card.
- Sale price product card.
- Hebrew search query.
- No search results.
- RTL facets.

Rollback:

- Revert collection/search sections/snippets/assets/locales.

Exit criteria:

- Collection and search support premium browsing without relying on preset composition.

## Phase 10: Branches - Promotion System

Purpose:

- Build promotions as a coherent cross-surface system.

Implementation:

1. Add promotion taxonomy artifact.
2. Add:
   - announcement bar
   - countdown bar
   - discount bar
   - promo banner
   - promo tile grid
   - promo popup
   - in-menu promo block
   - collection promo card
   - collection promo banner
   - product media promo overlay
   - footer promo block
   - cart promo message
3. Define shared settings:
   - heading
   - subheading
   - body
   - badge/eyebrow
   - link target
   - image/video
   - color scheme
   - dismissible where applicable
   - frequency control where applicable
   - market/audience condition only if safe.

Verification:

- Each placement renders independently.
- Missing image/text fallback.
- Popup focus trap.
- Dismiss persistence.
- Long Hebrew campaign copy.
- RTL CTA alignment.

Rollback:

- Revert promotion sections/assets/locales.

Exit criteria:

- Merchant can run one campaign across multiple placements without custom code.

## Phase 11: Branches - Editorial Commerce

Purpose:

- Build premium visual storytelling and shoppable content.

Implementation:

1. Normalize existing shoppable-media sections into a clear family.
2. Add or stabilize:
   - shop the look
   - image hotspot
   - lookbook
   - media grid
   - slideshow
   - video banner
   - before/after
   - image collage
   - images with text scroll
   - multiple media with text
   - side-by-side
   - timeline
   - tabs
   - scrolling content/marquee
3. Use theme blocks for flexible content where admitted.
4. Keep hotspot coordinates percentage-based.
5. Keep product markers keyboard reachable.

Verification:

- No media.
- One image.
- Mixed image/video.
- Keyboard hotspot.
- Mobile hotspot.
- Slideshow reduced motion.
- RTL carousel direction.
- Long Hebrew captions.

Rollback:

- Revert editorial sections/theme blocks/assets/locales.

Exit criteria:

- Visual commerce sections are merchant-facing, accessible, and not experimental one-offs.

## Phase 12: Branches - Trust, Support, And Content

Purpose:

- Build trust/support surfaces that premium stores expect.

Implementation:

1. Stabilize FAQ.
2. Add advanced FAQ with categories and optional TOC.
3. Add contact form.
4. Add newsletter section.
5. Add newsletter popup if not already included.
6. Add testimonials carousel.
7. Add press coverage.
8. Add trust badge strip.
9. Add logo list.
10. Add store/location block.
11. Add shipping/delivery info.
12. Add policy/page rich content host.
13. Add blog/article commerce blocks:
    - featured blog posts
    - article product callout
    - related articles
    - article TOC
    - share block

Verification:

- Form required fields.
- Form error/success.
- FAQ keyboard behavior.
- Long Hebrew FAQ.
- Press logos with labels.
- Newsletter no-JS fallback if possible.
- Article with no related content.

Rollback:

- Revert trust/support sections/assets/locales.

Exit criteria:

- Store has complete trust and support journey independent of presets.

## Phase 13: Branches - System And Customer Templates

Purpose:

- Complete all non-marketing templates expected of a premium theme.

Implementation:

1. Add or stabilize:
   - `main-page`
   - `main-cart`
   - `main-not-found`
   - `main-contact`
   - `main-policy` or page/policy host
   - `main-gift-card`
   - `main-password`
   - `main-list-collections`
2. Decide customer template scope.
3. If admitted, add:
   - account
   - login
   - register
   - order
   - addresses
   - reset password
   - activate account
4. Add app block zones only where policy allows.

Verification:

- 404 useful CTA/search.
- Password form errors.
- Gift card QR/print.
- Contact success/error.
- Long policy text.
- Customer auth forms if included.
- RTL forms.

Rollback:

- Revert system/customer sections/templates/locales.

Exit criteria:

- Core Shopify template coverage is complete.

## Phase 14: Branches - Advanced And Vertical-Specific Capabilities

Purpose:

- Add specialized features after core premium completeness is stable.

Implementation:

1. Quick order list.
2. Quantity/volume pricing display.
3. Product comparison.
4. Age verifier overlay.
5. Sign in with Shop compatibility zones.
6. Combined listings compatibility.
7. Back-in-stock contract.
8. Pre-order state contract and template.
9. Delivery date picker only if target commerce requires it.
10. Flower/gift-specific chooser or bouquet finder only if owner confirms this belongs in Stone V2 core.

Verification:

- Each feature has explicit inclusion decision.
- No regulated/compliance feature ships half-defined.
- Purchase-state messaging is unambiguous.
- App dependencies are optional or declared.

Rollback:

- Revert vertical-specific sections/assets/locales/templates.

Exit criteria:

- Advanced features are either present or intentionally excluded.

## Phase 15: Leaves - Preset Composition Policy

Purpose:

- Define how presets can safely use the completed section/block library.

Implementation:

1. Decide template JSON mutation policy.
2. Decide starter content defaults.
3. Decide per-preset host assignment rules.
4. Decide collection filter defaults by preset.
5. Decide global preset selector runtime behavior.
6. Define preset section ordering rules.
7. Define how much content can be shared across presets.
8. Define exact rollback for each preset JSON mutation.

Verification:

- Policy file exists.
- Owner inputs captured.
- No preset JSON mutation until approved.

Rollback:

- Revert policy artifact or supersede it.

Exit criteria:

- `UNIT-184` owner-input block is resolved or explicitly overridden.

## Phase 16: Leaves - Preset Runtime Composition

Purpose:

- Build final product presets using stable roots, trunk, and branches.

Implementation:

1. Apparel preset:
   - hero/slideshow
   - collection list
   - featured collection
   - shop the look
   - size chart
   - care/materials
   - product recommendations
   - reviews/app zone
2. Electronics/technical preset:
   - spec sheet
   - compatibility/fit
   - product comparison
   - quick order if appropriate
   - delivery/shipping info
   - related products
3. Home/lifestyle preset:
   - media grid
   - before/after if relevant
   - product facts
   - collection promo slots
   - trust badge strip
4. Editorial/brand preset:
   - timeline
   - press coverage
   - blog/article commerce
   - testimonials carousel
   - newsletter
5. Flower/gift preset if admitted:
   - delivery info
   - product care
   - gift messaging
   - bouquet finder only if owner confirms.

Verification:

- Each preset template parses.
- Theme Check clean.
- Locale parity.
- Home/product/collection/search/blog/article/page/cart/system routes render.
- RTL and Hebrew content checks.
- Lighthouse home/product/collection.
- Shopify upload proof against unpublished theme.

Rollback:

- Revert only affected JSON templates/settings for each preset.

Exit criteria:

- Presets are complete and do not mask missing section architecture.

## Phase 17: Final Hardening And Release Readiness

Purpose:

- Confirm premium completeness with evidence.

Implementation:

1. Full Theme Check.
2. Locale key parity.
3. JSON parse all templates/config/locales.
4. Schema parse all sections/blocks.
5. Shopify upload proof to unpublished theme.
6. Browser smoke tests across core routes.
7. RTL visual pass.
8. Accessibility keyboard pass.
9. Lighthouse home/product/collection.
10. Broken-link and missing-media fallback pass.
11. App-block present/missing pass.
12. Create implementation report.

Verification:

- All P0 rows are `PRESENT` or `INTENTIONALLY_EXCLUDED`.
- No P0 row remains `MISSING`, `PARTIAL`, or `BLOCKED`.
- P1 release rows are present or intentionally deferred.

Rollback:

- Roll back by phase, not whole repo, using file lists from each implementation report.

Exit criteria:

- Final product claim is evidence-backed.

## Full Suggested Section Inventory

P0 roots and trunk:

- Header group
- Footer group
- Overlay group
- Apps wrapper
- Theme block wrapper or written exclusion
- Announcement bar
- Header
- Mega menu
- Mobile navigation drawer
- Footer
- Footer legal row
- Cart drawer
- Search drawer
- Main product
- Main collection
- Main cart
- Main page
- Main search
- Main blog
- Main article
- Main 404
- Main contact
- Main policy/page host
- Gift card
- Password
- Product card
- Collection card
- Price renderer
- Media renderer
- Variant picker
- Quantity selector
- Buy buttons
- Product recommendations
- Complementary products
- Recently viewed products
- Collection banner
- Collection list/cards
- Collection promo card
- Promo banner
- Promo tile grid
- Shop the look
- Image hotspot

P1 premium release:

- Newsletter
- Newsletter popup
- Privacy banner
- Predictive search
- Related products
- Product facts
- Product info drawer
- Shipping/delivery info
- Size chart
- Spec sheet
- Materials/care
- Compatibility/fit
- Trust badge strip
- FAQ
- FAQ TOC/category model
- Contact form
- Press coverage
- Testimonials
- Testimonials carousel
- Media grid
- Slideshow
- Video banner
- Tabs
- Timeline
- Before/after
- Lookbook
- Blog posts
- Related articles
- Article product callout
- Store/location

P2 or vertical-specific:

- Quick order list
- Quantity/volume pricing
- Product comparison
- Age verifier
- Sign in with Shop compatibility
- Combined listings compatibility
- Pre-order state
- Back-in-stock placement
- Delivery date picker
- Bouquet/gift finder
- WhatsApp/chat contact

## Full Suggested Theme Block Inventory

Minimum P0/P1 reusable blocks:

- heading
- rich-text
- button
- button-group
- image
- video
- icon
- badge
- accordion
- page-content
- liquid
- media-card
- promo-card
- trust-badge
- product-fact-row
- hotspot-pin
- hotspot-popover
- tab
- slide

PDP and commerce section blocks:

- vendor
- title
- sku
- badges
- price
- rating
- payment terms
- separator
- description
- variant picker
- product variations
- line item property
- quantity selector
- inventory
- buy buttons
- pickup availability
- complementary products
- offers
- feature with icon
- text
- accordion
- modal/info drawer
- image
- button
- share buttons
- app block slot
- size row
- spec row
- care row
- compatibility row
- trust badge block

Navigation/global blocks:

- announcement item
- menu link
- menu column
- mega menu promo tile
- featured collection
- social link
- policy link
- payment badge
- localization item
- newsletter block
- contact text

Promotion blocks:

- promo tile
- promo card
- promo banner content
- countdown item
- discount message
- cart promo message
- footer promo block
- in-menu promo block

Editorial blocks:

- slide
- media item
- image with text
- video with text
- look product
- hotspot
- quote
- timeline item
- tab
- article card
- product callout

## QA Plan

Commands:

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`
- Theme Check from `project/` after runtime phases.
- JSON parse for `project/templates`, `project/sections/*.json`, `project/config`, and `project/locales`.
- Section schema parse for all `project/sections/*.liquid`.
- Block schema parse for all `project/blocks/*.liquid`.
- Shopify upload proof to unpublished theme when runtime changes are ready.
- Browser smoke tests for home, product, collection, cart, page, blog, article, search, 404, password, gift card.

Manual checks:

- Keyboard path.
- Focus states.
- Drawer/modal escape and return focus.
- RTL Hebrew content.
- Long text overflow.
- Missing media/product/collection fallbacks.
- App block present/missing.
- Mobile viewport.
- Lighthouse home/product/collection.

## Rollback Plan

Rollback by phase:

1. Each implementation unit must list exact files changed.
2. Each unit must avoid unrelated refactors.
3. Each unit must preserve existing merchant-facing schema IDs unless migration is documented.
4. Each unit must provide a state/report artifact before the next unit starts.
5. If Shopify upload proof fails, stop and record exact remote blockers before more implementation.

## Authorization Required

Runtime execution is not authorized by this plan.

To start implementation, owner must approve one bounded first runtime unit and explicitly say:

```text
AUTHORIZED: EXECUTE PLAN
```

## Readiness Verdict

READY

Next handoff:

- `$project-build` after owner authorization for the first bounded runtime unit.

Blocked for runtime execution until:

- Owner approves this plan or a narrower derivative plan.
- Owner authorizes the first bounded runtime unit.
- `UNIT-184` preset-composition block is resolved or the next unit explicitly remains pre-preset root/trunk work.
