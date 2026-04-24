# Stone V2 Section Architecture Implementation Control Matrix

Date: 2026-04-24  
Artifact type: implementation control artifact  
Audience: Codex / automated implementation agent  
Target folder: `C:\ELoS\projects\stonev2\workspace\audits\`  
Recommended filename: `section-architecture-implementation-control-matrix-2026-04-24.md`  
Status: REQUIRED CONTROL ARTIFACT BEFORE SECTION/PRESET IMPLEMENTATION  
Runtime files changed by this artifact: none

---

## 0. Operating Contract

### 0.1 Purpose

This file converts the section/block audit and Prestige cross-check into implementation controls.

Codex MUST use this file to decide:

1. Which section/block surfaces are allowed.
2. Which implementation mode is allowed for each surface.
3. Which app/theme/section block model is valid.
4. Which dependencies must exist before implementation.
5. Which accessibility, RTL, performance, fallback, and QA rules must pass.
6. Which changes are blocked until policy files or dependencies exist.

### 0.2 Required Inputs

Codex MUST read these artifacts before modifying theme runtime files:

```text
C:\ELoS\projects\stonev2\workspace\audits\section-block-library-stabilization-audit-2026-04-24.md
C:\ELoS\projects\stonev2\workspace\audits\section-block-library-premium-theme-gap-review-2026-04-24.md
C:\ELoS\projects\stonev2\workspace\audits\section-block-library-completion-addendum-prestige-crosscheck-2026-04-24.md
C:\ELoS\projects\stonev2\workspace\audits\section-architecture-implementation-control-matrix-2026-04-24.md
```

If any file is missing, Codex MUST stop and report:

```text
BLOCKED: required control artifact missing.
Missing file(s):
- <path>
```

### 0.3 Non-Negotiable Rules

Codex MUST NOT:

1. Implement broad section families without first creating or updating the relevant matrix rows in this file or a derivative implementation plan.
2. Mix Shopify section blocks and theme blocks inside the same section.
3. Add app blocks to statically rendered sections.
4. Add `limit` to blocks of type `@app`.
5. Add `templates` or `enabled_on/disabled_on.templates` to `sections/apps.liquid`.
6. Implement drawers, modals, popovers, menus, sliders, or overlays without keyboard/focus rules.
7. Implement media-heavy sections without lazy loading, image sizing, and CLS safeguards.
8. Rename schema setting IDs without a migration/deprecation note.
9. Remove existing merchant-facing setting IDs unless explicitly authorized.
10. Claim premium completeness until all P0 rows are `PRESENT` or `INTENTIONALLY_EXCLUDED`.

### 0.4 Claim Tags

Codex MUST tag claims in reports using:

- `VERIFIED`: proven by repository inspection, command output, or source artifact.
- `INFERENCE`: reasoned from available evidence.
- `SPECULATIVE`: possible but unproven.
- `BLOCKED`: action cannot proceed safely.
- `DECISION_REQUIRED`: user decision required before implementation.

---

## 1. External Platform Constraints

### 1.1 Shopify Section/Block Model

VERIFIED platform constraints:

1. Shopify themes use templates composed of sections, and sections are composed of blocks.
2. Templates can contain up to 25 sections.
3. Templates can contain up to 1250 blocks across all sections.
4. A section can accept section blocks or theme blocks, but not both.
5. Theme blocks are stored in `/blocks`.
6. Theme blocks are reusable across sections.
7. Theme blocks can be nested.
8. Theme blocks can include static blocks.
9. Section blocks are local to one section and cannot be nested.
10. App blocks are provided by apps and require explicit theme/schema support.

Implementation consequence:

```text
Before adding blocks to any section, Codex MUST classify the section as exactly one of:
- SECTION_BLOCK_SECTION
- THEME_BLOCK_SECTION
- APP_WRAPPER_SECTION
- STATIC_NO_BLOCK_SECTION
```

### 1.2 App Block Constraints

VERIFIED platform constraints:

1. Blocks of type `@app` are not supported in statically rendered sections.
2. App blocks should be supported in JSON-template sections where app placement is expected.
3. To support app blocks, the schema must include `{ "type": "@app" }`.
4. App blocks render with `{% render block %}` when iterating `section.blocks`.
5. Theme-block based render surfaces use `{% content_for 'blocks' %}`.
6. `@app` blocks cannot use `limit`.
7. `apps.liquid` must include app block support and a preset to override Shopify's default wrapper.
8. `apps.liquid` cannot include the `templates` schema attribute.
9. `apps.liquid` cannot be manually rendered with `{% section 'apps' %}`.

Implementation consequence:

```text
Codex MUST create or validate:
- sections/apps.liquid
- optional sections/_blocks.liquid only if theme-block top-level wrapper is intentionally supported
- at least one safe app-block zone on PDP
- at least one safe app-block zone outside PDP
```

### 1.3 Accessibility Constraints

VERIFIED platform constraints:

Shopify accessibility best practices are WCAG-informed and cover:

- keyboard and gesture controls
- page structure
- media
- color and contrast
- dynamic components
- touch and mobile devices

Implementation consequence:

```text
Any interactive section MUST define:
- keyboard path
- focus order
- focus trap if modal/drawer/popover
- escape behavior if modal/drawer/popover
- ARIA role/name/state where required
- reduced-motion behavior
- no keyboard trap failure
```

### 1.4 Performance Constraints

VERIFIED platform constraints:

1. Shopify states theme performance affects conversion, repeat business, and SEO.
2. Shopify Theme Store submission tests average Lighthouse performance across home, product, and collection pages.
3. Shopify Theme Store acceptance requires a minimum average Lighthouse performance score of 60 across home, product, and collection pages.

Implementation consequence:

```text
Stone internal target MUST be stricter than acceptance floor:
- minimum average Lighthouse performance score: 70
- preferred average Lighthouse performance score: 80+
- no single critical template should fall below 60 unless explicitly waived
```

---

## 2. Implementation Status Vocabulary

Codex MUST use only these statuses:

| Status | Meaning | Allowed next action |
| --- | --- | --- |
| `PRESENT` | Runtime file and template/group integration exist. | Validate and refine only. |
| `PARTIAL` | File exists but lacks required blocks, policy, fallback, QA, or integration. | Stabilize before expansion. |
| `MISSING` | No sufficient implementation exists. | Implement only after dependencies are satisfied. |
| `INTENTIONALLY_EXCLUDED` | Written decision excludes this capability. | Do not implement. |
| `BLOCKED` | Missing dependency, unclear scope, or unsafe architecture. | Stop and report. |

Priority vocabulary:

| Priority | Meaning |
| --- | --- |
| `P0` | Required before premium-complete claim. |
| `P1` | Required before broad merchant-facing release. |
| `P2` | Vertical-specific or enhancement. |

---

## 3. Section Architecture Control Matrix

Codex MUST maintain this matrix when implementing section families.

| Section / Surface | Family | Priority | Required? | Implementation status | Block model | App blocks | Dynamic sources | RTL risk | Accessibility risk | Dependencies | Empty/fallback state | Performance budget | Required QA cases |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `header-group.json` | Global group | P0 | Yes | MISSING/PARTIAL expected | GROUP_CONFIG | No by default | Menus, logo, localization | High | High | announcement bar, header, mega menu, search drawer | Missing menu/logo renders safe header | JS <= 20KB incremental | desktop/mobile, RTL nav, keyboard menu, sticky behavior |
| `footer-group.json` | Global group | P0 | Yes | MISSING/PARTIAL expected | GROUP_CONFIG | Restricted | Menus, social, newsletter, policies | Medium | Medium | footer, newsletter, logo list, text-with-icons | Missing menu/social renders clean layout | JS <= 5KB incremental | long Hebrew links, policy links, mobile stacking |
| `overlay-group.json` | Global group | P0 | Yes | MISSING/PARTIAL expected | GROUP_CONFIG | Restricted | Cart, newsletter, privacy, chat | High | Critical | cart drawer, search drawer, newsletter popup, privacy banner | Disabled overlay must not render broken markup | JS <= 30KB incremental | focus trap, ESC, body scroll lock, RTL drawer side |
| `apps.liquid` | App wrapper | P0 | Yes | MISSING expected | APP_WRAPPER_SECTION | Required | App-provided | Medium | Medium | none | No app blocks = render nothing safely | JS = app-controlled; wrapper zero JS | app block present, app block missing, spacing on/off |
| `_blocks.liquid` | Generic block wrapper | P0 decision | Conditional | MISSING expected | THEME_BLOCK_SECTION | Optional | Theme/app blocks | Medium | Medium | `/blocks` folder | No blocks = render nothing safely | JS <= 5KB incremental | theme block render, app block render, no blocks |
| `cart-drawer.liquid` | Cart recovery | P0 | Yes | MISSING expected | SECTION_BLOCK_SECTION or THEME_BLOCK_SECTION, decide once | Restricted | cart, products, recommendations | High | Critical | cart items, price renderer, quantity controls, drawer system | Empty cart recovery CTA | JS <= 30KB incremental | add item, remove item, quantity update, empty cart, focus trap |
| `main-cart.liquid` | Cart recovery | P0 | Yes | MISSING expected | SECTION_BLOCK_SECTION | Safe below core cart | cart, recommendations | Medium | Medium | cart item renderer, totals, note field | Empty cart with continue-shopping CTA | JS <= 20KB incremental | empty/full cart, note, discounts text, RTL totals |
| `main-product.liquid` / `stone-main-product` | PDP conversion | P0 | Yes | PARTIAL expected | SECTION_BLOCK_SECTION unless theme-block rewrite approved | Yes in safe zones | product, variants, metafields | High | High | product form, variant picker, price, media, inventory | Missing product impossible on product template; missing media safe | JS <= 40KB incremental | sold out, one variant, many variants, long Hebrew, app block |
| `related-products.liquid` | PDP recovery | P0 | Yes | MISSING expected | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No by default | product recommendations | Medium | Low | product-card, carousel/grid | No recs = section hidden | JS <= 15KB if carousel | no recs, 4 recs, RTL carousel |
| `recently-viewed-products.liquid` | Recovery | P0 | Yes | MISSING expected | STATIC_NO_BLOCK_SECTION | No by default | local storage / product handles | Medium | Medium | product-card, storage helper | No history = hidden | JS <= 15KB | first visit, repeat visit, RTL, storage disabled |
| `complementary-products.liquid` or PDP block | PDP upsell | P0 | Yes | MISSING/PARTIAL expected | PDP block or section, decide once | No by default | Shopify complementary products | Medium | Low | product-card, product recommendations | No products = hidden | JS <= 10KB grid; <= 15KB carousel | no comps, with comps, mobile |
| `collection-banner.liquid` | Collection merchandising | P0 | Yes | MISSING/PARTIAL expected | SECTION_BLOCK_SECTION | No by default | collection image/title/description/metafields | Medium | Low | responsive media, rich text | Missing image/text still renders balanced header | JS <= 0-5KB | no image, long Hebrew title, mobile |
| `main-collection.liquid` | Collection merchandising | P0 | Yes | PARTIAL expected | SECTION_BLOCK_SECTION | No in product-card loops | collection, filters, products | High | Medium | facets, sort, product-card, pagination | Empty collection state | JS <= 30KB incremental | empty, many filters, RTL facets, no JS |
| `collection-list.liquid` | Discovery | P0 | Yes | MISSING expected | SECTION_BLOCK_SECTION | No by default | collections | Medium | Low | collection-card | No collections = hide or editor placeholder | JS <= 5KB | no image, long Hebrew names |
| `promo-banner.liquid` | Promotion | P0 | Yes | MISSING expected | SECTION_BLOCK_SECTION or THEME_BLOCK_SECTION | No by default | image, link, text | Medium | Low | media, buttons | Missing image/text fallback to editor placeholder | JS <= 0-5KB | long copy, no image, RTL CTA |
| `promo-tile-grid.liquid` | Promotion | P0 | Yes | MISSING expected | SECTION_BLOCK_SECTION | No by default | image, collection/product/page links | Medium | Low | cards, media | Empty blocks = editor placeholder | JS <= 5KB | 1/2/3/4 tiles, RTL |
| `newsletter-popup.liquid` | Overlay/promotion | P1 | Yes if overlay group exists | MISSING expected | SECTION_BLOCK_SECTION | No by default | newsletter/customer form | High | Critical | modal system, form handling | Disabled = no markup; submit errors visible | JS <= 20KB | focus trap, ESC, form error, reduced motion |
| `privacy-banner.liquid` | Compliance overlay | P1 | Yes if EU/global | MISSING expected | STATIC_NO_BLOCK_SECTION | No | localization text | High | High | cookie/local storage helper | No JS = visible or fail-safe policy | JS <= 10KB | accept/reject, keyboard, RTL |
| `search-drawer.liquid` / predictive search | Search | P1 | Yes for premium | MISSING/PARTIAL expected | SECTION_BLOCK_SECTION | No by default | predictive search API | High | Critical | drawer, search form, product-card, article-card | No results state | JS <= 25KB | keyboard, ESC, Hebrew query, no results |
| `shop-the-look.liquid` | Editorial commerce | P0/P1 | Yes for premium visual commerce | PARTIAL/MISSING expected | THEME_BLOCK_SECTION preferred | No by default | products, images, metaobjects | High | Medium | hotspots, product-card, media | Missing products = editorial-only image | JS <= 20KB | no products, 1 product, RTL hotspot positions |
| `image-hotspot.liquid` | Editorial commerce | P0/P1 | Yes for premium visual commerce | PARTIAL/MISSING expected | THEME_BLOCK_SECTION preferred | No by default | products/metaobjects | High | Medium | hotspot engine, popover | Missing hotspot product = hide hotspot | JS <= 20KB | keyboard hotspot, mobile tap, RTL |
| `media-grid.liquid` | Editorial | P1 | Yes | MISSING expected | THEME_BLOCK_SECTION preferred | No by default | images/videos | Medium | Low | media renderer | Empty media = placeholder | JS <= 10KB plus video lazy-load | mixed media, mobile, no image |
| `slideshow.liquid` | Editorial | P1 | Yes | MISSING expected | THEME_BLOCK_SECTION preferred with static controls | No by default | images/videos/text | High | High | carousel engine, controls, media | Single slide = no controls | JS <= 25KB | keyboard controls, pause, reduced motion, RTL direction |
| `tabs.liquid` | Editorial / PDP info | P1 | Yes | MISSING expected | THEME_BLOCK_SECTION preferred | Possible only non-critical | rich text/pages/metafields | Medium | High | tab controller | No tabs = placeholder | JS <= 10KB | keyboard tablist, RTL, long content |
| `before-after.liquid` | Editorial | P1/P2 | Optional | MISSING expected | SECTION_BLOCK_SECTION | No | images | High | High | image compare control | Missing side image = placeholder | JS <= 15KB | keyboard slider, touch, reduced motion |
| `faq.liquid` | Support/content | P1 | Yes | PARTIAL expected | SECTION_BLOCK_SECTION or THEME_BLOCK_SECTION | Restricted | pages/metaobjects/metafields | Medium | Medium | accordion | No questions = placeholder | JS <= 10KB | keyboard accordion, long Hebrew |
| `contact.liquid` | System template | P1 | Yes | MISSING expected | SECTION_BLOCK_SECTION | Restricted below form | contact form, page content | Medium | Medium | form markup | Form errors visible; success visible | JS <= 5KB | required fields, Hebrew labels |
| `gift-card.liquid` | System template | P0/P1 | Required for completeness | MISSING expected | STATIC_NO_BLOCK_SECTION | No | gift card object | Medium | Medium | QR/code renderer | Missing object not applicable | JS <= 5KB | print, QR, RTL |
| `password.liquid` | System template | P0/P1 | Required for completeness | MISSING expected | SECTION_BLOCK_SECTION | Restricted | shop/password form | Medium | Medium | password form, newsletter | Errors visible | JS <= 5KB | login form, newsletter |
| `404.liquid` | System template | P0/P1 | Required for completeness | MISSING/PARTIAL expected | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No | routes/search | Low | Low | search form optional | Always useful CTA/search | JS <= 5KB | RTL copy, search |
| `policy.liquid` / page host | System template | P0/P1 | Required for completeness | MISSING/PARTIAL expected | STATIC_NO_BLOCK_SECTION | No | page/policy content | Medium | Low | page content renderer | Missing policy = title only safe | JS <= 0KB | long Hebrew, links |
| Customer account templates | Customer/system | P1 decision | Conditional | MISSING expected | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | Restricted | customer/order/address | High | Medium | customer forms | Errors visible; auth state safe | JS <= 10KB | login/register/reset/address RTL |
| Blog/article commerce sections | Editorial commerce | P1 | Yes for premium content | PARTIAL expected | SECTION_BLOCK_SECTION/THEME_BLOCK_SECTION by section | Restricted | blog/articles/products | Medium | Medium | article-card, product-card, share | No articles/products = hidden/placeholder | JS <= 10KB | long Hebrew, share links, related articles |

---

## 4. Block Model Decision Rules

### 4.1 SECTION_BLOCK_SECTION

Use this when:

- Blocks are specific to one section.
- No nesting is required.
- Merchant should configure a controlled list.
- The section does not need reusable block files.

Valid examples:

- PDP legacy block stack.
- FAQ with local question blocks.
- Promo tile grid.
- Contact form.
- Collection banner.

Rules:

```text
- Define blocks inside the section schema.
- Do not include `{% content_for 'blocks' %}`.
- Do not add `{ "type": "@theme" }`.
- May include `{ "type": "@app" }` only where allowed by app-block policy.
```

### 4.2 THEME_BLOCK_SECTION

Use this when:

- Blocks should be reusable across sections.
- Nesting is required.
- Merchant composition is central.
- Static blocks are useful.
- Section resembles Horizon-style composable architecture.

Valid examples:

- `_blocks.liquid`
- shop-the-look
- slideshow
- media grid
- tabs
- rich editorial layouts
- flexible content sections

Rules:

```text
- Use `/blocks/*.liquid`.
- Use `{% content_for 'blocks' %}` in the section or parent theme block.
- Declare `"blocks": [{ "type": "@theme" }]` or restricted theme block types.
- Add `{ "type": "@app" }` only if app-block policy allows it.
- Do not mix section-defined blocks with theme blocks in one section.
```

### 4.3 APP_WRAPPER_SECTION

Use only for:

```text
sections/apps.liquid
```

Rules:

```text
- Include `"blocks": [{ "type": "@app" }]`.
- Include a preset.
- Do not include `templates`.
- Do not include `enabled_on.templates` or `disabled_on.templates`.
- Do not manually render this section.
- Render all app blocks safely.
```

### 4.4 STATIC_NO_BLOCK_SECTION

Use this when:

- The section is a simple required system host.
- Merchant composition adds little value.
- The section should be stable and low-risk.

Valid examples:

- 404 host
- policy host
- gift card host
- simple related-products section
- recently-viewed section

Rules:

```text
- No blocks unless a clear merchant use case exists.
- Prioritize stable rendering and fallbacks.
```

---

## 5. App Block Placement Policy

### 5.1 Allowed Zones

Codex MAY allow `@app` blocks in:

| Zone | Allowed? | Conditions |
| --- | --- | --- |
| PDP below product form | Yes | Must not interrupt required buy flow. |
| PDP after product info | Yes | Good for reviews, sizing apps, subscriptions, custom forms. |
| Featured product section | Yes | Only outside critical add-to-cart controls. |
| Cart page below cart items | Yes | Good for upsells, trust, shipping apps. |
| Footer | Restricted | Only if visual containment exists. |
| Generic app wrapper | Yes | Via `sections/apps.liquid`. |
| Customer/account pages | Conditional | Only if account templates are in scope. |
| Blog/article below content | Conditional | Only for content apps; no blocking UX. |

### 5.2 Restricted Zones

Codex MUST NOT add `@app` blocks to:

| Zone | Reason |
| --- | --- |
| Header critical navigation | App output can break navigation, CLS, focus, and brand shell. |
| Product form core controls | App output can break variant/add-to-cart flow. |
| Collection product-card loops | App blocks can multiply unpredictably and harm performance. |
| Overlay focus-critical internals | App output can break focus trap and escape behavior. |
| Cart line-item controls | App output can break quantity/remove behavior. |
| Statically rendered sections | Shopify does not support app blocks there. |

### 5.3 Rendering Contract

Every section that supports `@app` MUST include:

```liquid
{% for block in section.blocks %}
  {% case block.type %}
    {% when '@app' %}
      {% render block %}
  {% endcase %}
{% endfor %}
```

or if theme-block based:

```liquid
{% content_for 'blocks' %}
```

Every app zone MUST:

1. Wrap app content in a neutral layout container.
2. Avoid fixed height.
3. Avoid overflow hidden unless necessary.
4. Preserve theme spacing tokens.
5. Render safely if app block outputs empty content.
6. Avoid duplicating resource settings that create autofill ambiguity.

---

## 6. Theme Block Policy

### 6.1 Minimum `/blocks` Set

If Stone introduces theme blocks, Codex SHOULD implement this minimum set first:

```text
blocks/heading.liquid
blocks/rich-text.liquid
blocks/button.liquid
blocks/button-group.liquid
blocks/image.liquid
blocks/video.liquid
blocks/icon.liquid
blocks/badge.liquid
blocks/accordion.liquid
blocks/custom-liquid.liquid
blocks/page-content.liquid
blocks/group.liquid
```

### 6.2 Static Blocks

Codex SHOULD use static blocks when:

- Controls must always exist.
- Layout integrity depends on the block.
- Merchant may hide/customize but should not delete/reorder it.

Valid static-block candidates:

```text
slideshow controls
carousel controls
modal close button
drawer close button
shop-the-look product panel shell
tablist controller
```

### 6.3 Theme Block Compatibility Matrix

Codex MUST define allowed child blocks per parent:

| Parent | Allowed child blocks | Disallowed child blocks |
| --- | --- | --- |
| `group` | heading, rich-text, button, button-group, image, icon, badge, accordion, custom-liquid | product-form, cart-items unless explicitly designed |
| `slide` | heading, rich-text, button-group, image, video, badge | cart-items, product-form |
| `hotspot` | heading, rich-text, button, image, product-card reference | drawer, modal unless explicitly designed |
| `tab` | heading, rich-text, accordion, page-content, custom-liquid | nested tab unless explicitly tested |
| `accordion` | rich-text, page-content, image, custom-liquid | interactive nested accordions unless tested |
| `media-card` | image, video, heading, rich-text, button | product-form |

Codex MUST NOT allow all theme blocks everywhere by default.

---

## 7. Section Dependency Map

Codex MUST create or validate shared dependencies before implementing dependent sections.

| Dependency | Required by | Required behavior |
| --- | --- | --- |
| `snippets/product-card.liquid` | collection grids, recommendations, recently viewed, complementary products | image, title, price, vendor optional, badges, swatches optional, quick buy optional |
| `snippets/price.liquid` | PDP, product cards, cart, recommendations | compare-at, sale, unit price, variant price |
| `snippets/media.liquid` or equivalent | PDP media, image banner, media grid, slideshow, hotspot | responsive image/video, lazy loading, width/height, alt text |
| `snippets/button.liquid` | all CTA sections | consistent classes, link handling, disabled state |
| `snippets/icon.liquid` | header, cart, accordions, badges, trust sections | accessible labels or aria-hidden |
| `snippets/form-errors.liquid` | contact, customer, newsletter, password | accessible errors |
| `snippets/pagination.liquid` | collection, blog, search | RTL-safe controls |
| `snippets/facets.liquid` | collection/search | keyboard and RTL behavior |
| `snippets/quantity-input.liquid` | PDP/cart | min/max, disabled, accessible labels |
| `snippets/variant-picker.liquid` | PDP/featured product | radio/select, sold-out, unavailable |
| `assets/drawer.js` | cart drawer, search drawer, menu drawer | focus trap, ESC, body scroll lock |
| `assets/modal.js` | newsletter popup, product info modal, media modal | focus trap, ESC, return focus |
| `assets/carousel.js` | slideshow, testimonials, media grid, recommendations if carousel | keyboard, reduced motion, RTL direction |
| `assets/accordion.js` | FAQ, PDP accordions | ARIA expanded, keyboard |
| `assets/theme-rtl.css` or equivalent | all | logical properties, direction-safe spacing |
| `assets/section-performance.css/js` pattern | all sections | no duplicated heavy code |

If dependency is missing, Codex MUST either:

1. Implement the dependency first in the same plan; or
2. Mark the dependent section `BLOCKED`.

---

## 8. Accessibility Acceptance Matrix

### 8.1 Universal Rules

Every section MUST pass:

| Rule | Requirement |
| --- | --- |
| Heading hierarchy | Section must not force invalid global heading order. Merchant heading size must not equal semantic heading automatically unless controlled. |
| Images | Informative images require alt text. Decorative images must be empty-alt or hidden from assistive tech. |
| Links/buttons | Links navigate. Buttons act. Do not use clickable divs. |
| Focus state | Visible focus must remain visible in light/dark/color schemes. |
| Color contrast | Text and controls must remain readable across schemes. |
| Touch targets | Mobile controls must be large enough for reliable tapping. |
| Reduced motion | Animations/transitions must respect reduced-motion settings. |
| No keyboard trap | Keyboard user must enter and exit every interactive component. |
| Error messages | Form errors must be visible and associated with fields. |

### 8.2 Interactive Component Rules

| Component | Required keyboard behavior | Required ARIA/focus behavior |
| --- | --- | --- |
| Drawer | Open moves focus into drawer. ESC closes. Close button closes. Focus returns to trigger. Tab remains inside. | role/dialog or equivalent, accessible name, body scroll lock |
| Modal | Same as drawer. | role/dialog, aria-modal, accessible name |
| Popover | Trigger toggles. ESC closes. Outside click closes. Focus behavior documented. | aria-expanded, aria-controls where applicable |
| Accordion | Enter/Space toggles. Tab reaches triggers/content links. | aria-expanded on trigger; content associated |
| Tabs | Arrow keys optional but preferred. Tab order sane. | role=tablist/tab/tabpanel or equivalent |
| Carousel | Controls keyboard reachable. Autoplay must pause/disable. | Buttons named; current slide state exposed where feasible |
| Hotspots | Each hotspot keyboard reachable. Enter/Space opens. ESC closes. | accessible label; popover associated |
| Mega menu | Keyboard can open, traverse, close. | aria-expanded; focus return |
| Predictive search | Query field remains focus anchor. Results reachable. ESC closes drawer/results. | live region or clear results announcement where feasible |

Codex MUST NOT implement custom JS components without adding QA notes for these behaviors.

---

## 9. RTL Acceptance Matrix

Every section MUST be tested in RTL with Hebrew content.

### 9.1 Universal RTL Rules

Codex MUST prefer:

```css
margin-inline-start
margin-inline-end
padding-inline-start
padding-inline-end
inset-inline-start
inset-inline-end
border-inline-start
border-inline-end
text-align: start
text-align: end
```

Codex MUST avoid hard-coded directional assumptions unless deliberately scoped:

```css
left
right
margin-left
margin-right
padding-left
padding-right
translateX positive/negative assumptions
```

### 9.2 RTL Component Rules

| Component | RTL expectation |
| --- | --- |
| Header | Logo, menu, icons, and drawers align correctly. |
| Mega menu | Columns flow correctly; keyboard order remains logical. |
| Cart drawer | Drawer side is deliberate and documented. Totals align correctly. |
| Product media gallery | Thumbnail direction and arrow direction are logical. |
| Variant picker | Swatches and labels align correctly. |
| Facets/filter drawer | Checkboxes, labels, counts, and nested groups align. |
| Pagination | Previous/next icons and labels are not semantically reversed incorrectly. |
| Carousel | Visual direction and arrow controls are tested. |
| Hotspots | Absolute positioning must be percentage-based and not broken by direction. |
| Forms | Labels, errors, placeholders, and inputs align correctly. |
| Tables | Numeric values and labels remain readable. |

---

## 10. Performance Budget

### 10.1 Global Budgets

Stone MUST target:

```text
Minimum average Lighthouse performance: 70
Preferred average Lighthouse performance: 80+
Absolute Shopify Theme Store floor: 60 average across home/product/collection
```

### 10.2 Section Incremental Budgets

Codex MUST estimate incremental cost for every new section:

| Section type | JS budget | CSS budget | Media rules |
| --- | ---: | ---: | --- |
| Static text/image | 0-5KB | 0-6KB | responsive images, width/height |
| Grid/list | 0-10KB | 0-8KB | lazy-load below fold |
| Carousel/slideshow | 15-25KB | 0-10KB | no eager load for non-first slides |
| Drawer/modal | 15-30KB shared | 0-8KB | no layout shift on open |
| PDP product form | 25-40KB shared | 0-12KB | variant JS only once |
| Predictive search | 20-30KB | 0-8KB | debounce, no request flood |
| Hotspot/lookbook | 15-25KB | 0-10KB | popover code shared |
| Video section | 0-10KB custom | 0-8KB | lazy-load iframe/video; poster required |

### 10.3 Performance Rules

Codex MUST:

1. Use shared JS modules instead of per-section duplicated scripts.
2. Lazy-load non-critical media.
3. Provide image dimensions or aspect-ratio containers.
4. Avoid layout shift from late-loading images, app blocks, dynamic recommendations, drawers, or popups.
5. Avoid initializing sliders/drawers/tabs until required.
6. Respect reduced motion.
7. Keep critical CSS minimal.
8. Avoid blocking third-party scripts in theme code.
9. Prefer progressive enhancement.
10. Hide dynamic sections cleanly when data is unavailable instead of rendering skeletons permanently.

---

## 11. Data Fallback Rules

Every section MUST define fallback behavior.

| Data missing | Required behavior |
| --- | --- |
| Image missing | Render editor placeholder in editor; hide or text-only layout on storefront if appropriate. |
| Product missing | Hide product-card-dependent output or show editor placeholder only in editor. |
| Collection missing | Hide section or show editor placeholder. |
| Empty collection | Render empty state with merchant-editable text/CTA. |
| Product unavailable | Disable buy controls; show unavailable/sold-out messaging. |
| Variant unavailable | Disable variant option or mark unavailable. |
| Metafield missing | Hide the dependent row/block. |
| Metaobject missing | Hide dependent block or render safe placeholder in editor. |
| Menu missing | Render no navigation list; do not error. |
| Blog missing | Hide blog feed or show editor placeholder. |
| App block empty | Preserve spacing only if configured; do not create large blank regions. |
| Video missing poster | Require poster or render static fallback. |
| Form error | Show accessible error summary and field-level messages. |

Codex MUST NOT use placeholder production content as a fallback.

---

## 12. Schema And Settings Governance

### 12.1 Naming Rules

Codex MUST use stable, descriptive setting IDs.

Allowed style:

```json
{
  "id": "heading",
  "id": "subheading",
  "id": "body",
  "id": "image",
  "id": "mobile_image",
  "id": "color_scheme",
  "id": "section_width",
  "id": "media_position",
  "id": "text_alignment",
  "id": "enable_sticky",
  "id": "show_vendor"
}
```

Avoid vague IDs:

```json
{
  "id": "text1",
  "id": "option",
  "id": "setting_a",
  "id": "toggle"
}
```

### 12.2 Default Rules

Every setting MUST have a sensible default when schema supports defaults.

Rules:

1. Defaults must render a clean section.
2. Defaults must not depend on a store-specific product/collection.
3. Defaults must not use fake claims.
4. Defaults must support RTL.
5. Defaults must not create excessive vertical whitespace.

### 12.3 Preset Rules

Every merchant-addable section MUST include a preset unless intentionally hidden.

Preset names MUST be merchant-facing and short:

```text
Image banner
Media grid
Shop the look
Promo tiles
FAQ
Testimonials
```

Avoid internal names:

```text
Stone Section 04
Experimental Shoppable Thing
Premium Conversion Layout
```

### 12.4 Block Limits

Codex MUST set limits when unlimited blocks could harm UX/performance.

Recommended limits:

| Block type | Default max |
| --- | ---: |
| Promo tiles | 2-6 |
| FAQ questions | 20 |
| Slideshow slides | 5 |
| Testimonial cards | 8 |
| Icon/text items | 6 |
| Hotspots per image | 6 |
| Footer columns | 4 |
| Mega menu promo cards | 2 |
| PDP accordions | 8 |

### 12.5 Migration Rules

Before changing schema IDs, Codex MUST:

1. Search for existing setting ID usage in templates.
2. Preserve existing IDs where possible.
3. Add a migration note if rename is unavoidable.
4. Avoid breaking existing JSON templates.
5. Report every schema ID removed or renamed.

Output required:

```text
Schema migration review:
- preserved IDs:
- renamed IDs:
- removed IDs:
- added IDs:
- risk:
```

---

## 13. QA Matrix

Codex MUST add or execute QA cases for every implemented section.

### 13.1 Universal QA Cases

Every section:

```text
[ ] Renders in theme editor.
[ ] Renders on storefront.
[ ] Does not throw Liquid error.
[ ] Works with no optional image.
[ ] Works with long Hebrew text.
[ ] Works on mobile width.
[ ] Works in RTL.
[ ] Supports light/dark or configured color scheme.
[ ] Does not create horizontal scroll.
[ ] Does not create obvious CLS.
[ ] Has accessible focus states for controls.
[ ] Has safe empty state.
```

### 13.2 PDP QA Cases

```text
[ ] Product with one variant.
[ ] Product with many variants.
[ ] Sold-out product.
[ ] Unavailable variant.
[ ] Product without media.
[ ] Product with video/media.
[ ] Quantity change.
[ ] Add to cart success.
[ ] Add to cart error.
[ ] App block present.
[ ] App block missing.
[ ] Complementary products missing.
[ ] Related products missing.
```

### 13.3 Collection/Search QA Cases

```text
[ ] Empty collection.
[ ] Collection with many products.
[ ] Collection without image.
[ ] Filter drawer open/close.
[ ] Sort selection.
[ ] Pagination or infinite-load behavior.
[ ] Product card with sale price.
[ ] Product card with sold-out product.
[ ] Swatch/color filter if implemented.
[ ] Hebrew search query.
[ ] No search results.
```

### 13.4 Overlay QA Cases

```text
[ ] Opens by mouse.
[ ] Opens by keyboard.
[ ] ESC closes.
[ ] Close button closes.
[ ] Focus moves into overlay.
[ ] Focus returns to trigger.
[ ] Body scroll locked while open.
[ ] Body scroll restored after close.
[ ] Tab does not escape modal/drawer.
[ ] Reduced motion honored.
[ ] Mobile viewport safe.
```

### 13.5 Performance QA Cases

```text
[ ] Home Lighthouse run.
[ ] Product Lighthouse run.
[ ] Collection Lighthouse run.
[ ] No single new section loads unnecessary JS globally.
[ ] Images have width/height or aspect-ratio.
[ ] Below-fold images lazy-load.
[ ] First slide/hero image not lazy-loaded if LCP candidate.
[ ] Non-first carousel slides lazy-load.
[ ] No permanent skeleton layout.
```

---

## 14. Theme Store / Public Release Checklist

If Stone is intended for public release or Theme Store submission, Codex MUST add this checklist to the implementation plan.

```text
[ ] Home/product/collection average Lighthouse >= 70 internal target.
[ ] No tested core template below Shopify minimum floor without explicit waiver.
[ ] Sections render without app dependencies.
[ ] Theme does not require private apps for core behavior.
[ ] Dynamic sources supported where expected.
[ ] App blocks supported in safe JSON-template zones.
[ ] Accessibility QA complete for menus, drawers, modals, forms, tabs, accordions, sliders.
[ ] RTL QA complete.
[ ] Locale strings extracted where appropriate.
[ ] No hardcoded merchant-specific claims.
[ ] No broken templates: product, collection, cart, page, blog, article, search, 404, password, gift card.
[ ] Theme editor presets are merchant-readable.
[ ] Settings are grouped and named clearly.
[ ] Existing setting IDs preserved or migration documented.
```

---

## 15. Implementation Gate

Before editing runtime files, Codex MUST produce an implementation plan with this exact structure:

```md
# Implementation Plan

## Goal
<one sentence>

## Scope
<files/families in scope>

## Out Of Scope
<explicit exclusions>

## Source Artifacts Read
- <path>: VERIFIED / missing

## Current Repo Evidence
- <finding>: VERIFIED

## Control Matrix Rows Affected
| Section / Surface | Current status | Target status | Priority |
| --- | --- | --- | --- |

## Block Model Decisions
| Section | Block model | Reason |
| --- | --- | --- |

## Dependencies
| Dependency | Status | Action |
| --- | --- | --- |

## App Block Policy Impact
<none / exact zones>

## Accessibility Requirements
<component-specific requirements>

## RTL Requirements
<component-specific requirements>

## Performance Budget
<expected JS/CSS/media impact>

## Data Fallbacks
<per section>

## QA Plan
<commands + manual checks>

## Rollback Plan
<files to revert>

## Authorization Required
AUTHORIZED: EXECUTE PLAN
```

Codex MUST NOT implement until the plan is created and saved as Markdown.

---

## 16. Reporting Contract

After implementation, Codex MUST report:

```md
# Implementation Report

## Files Changed
- <path>

## Files Created
- <path>

## Schema IDs Added
- <id>

## Schema IDs Preserved
- <id>

## Schema IDs Removed/Renamed
- <id or none>

## Commands Run
- <command>: PASS/FAIL

## Validation Results
- Liquid/theme check:
- Build:
- Lint:
- Lighthouse if run:
- Manual QA:

## Control Matrix Updates
| Section / Surface | Old status | New status |
| --- | --- | --- |

## Remaining Risks
- <risk>

## Next Actions
- <action>
```

---

## 17. Recommended Next Implementation Order

Codex SHOULD implement in this order unless user overrides:

1. `sections/header-group.json`
2. `sections/footer-group.json`
3. `sections/overlay-group.json`
4. `sections/apps.liquid`
5. app-block placement policy embedded into relevant schemas
6. `/blocks` minimum set or written deferral decision
7. cart drawer + main cart
8. PDP conversion block contract stabilization
9. related products + complementary products + recently viewed
10. collection banner + collection list/cards + collection promo slot
11. collection/search filtering and empty states
12. promotion taxonomy sections
13. shop-the-look + image hotspot
14. media grid + slideshow + tabs
15. system templates: 404, contact, policy/page, password, gift card
16. customer templates if in scope
17. presets only after above foundations pass QA

---

## 18. Fail-Closed Conditions

Codex MUST stop and report `BLOCKED` if:

1. It cannot find the Stone project path.
2. It cannot find the required audit files.
3. It cannot determine whether a section uses section blocks or theme blocks.
4. A planned section would mix section blocks and theme blocks.
5. A planned app-block zone is static-rendered.
6. A drawer/modal/popover lacks accessibility behavior.
7. A PDP/cart change risks breaking add-to-cart without a test plan.
8. A schema change removes/renames existing merchant settings without migration review.
9. A collection/product/card dependency is missing and not included in scope.
10. RTL behavior cannot be verified for a directional component.
11. Performance impact is unknown for media-heavy or JS-heavy sections.

---

## 19. Source Notes For Codex

External sources used when drafting this control artifact:

```text
Shopify Help Center — Sections and blocks
https://help.shopify.com/en/manual/online-store/themes/theme-structure/sections-and-blocks

Shopify Help Center — Theme structure
https://help.shopify.com/en/manual/online-store/themes/theme-structure

Shopify Dev — Blocks
https://shopify.dev/docs/storefronts/themes/architecture/blocks

Shopify Dev — Theme blocks
https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks

Shopify Dev — App blocks for themes
https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks

Shopify Dev — Accessibility best practices for Shopify themes
https://shopify.dev/docs/storefronts/themes/best-practices/accessibility

Shopify Help Center — Accessibility for themes
https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility

Shopify Dev — Performance best practices for Shopify themes
https://shopify.dev/docs/storefronts/themes/best-practices/performance

Shopify Help Center — Theme architecture versions and sources
https://help.shopify.com/en/manual/online-store/themes/themes-by-shopify/about-themes
```

---

## 20. Bottom Line For Codex

Do not treat this as a feature wishlist.

Treat this as a gate.

A section is not complete when a Liquid file exists.  
A section is complete only when all of the following are true:

```text
[ ] correct block model selected
[ ] dependencies exist
[ ] app-block policy respected
[ ] dynamic-source behavior defined
[ ] RTL behavior verified
[ ] accessibility behavior verified
[ ] data fallbacks implemented
[ ] performance budget respected
[ ] schema settings governed
[ ] QA cases documented and passed
[ ] control matrix status updated
```
