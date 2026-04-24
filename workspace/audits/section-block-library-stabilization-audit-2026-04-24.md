# Section and Block Library Stabilization Audit

Date: 2026-04-24

Status: review artifact only. No theme runtime files were changed by this audit.

## 1. Goal

Stabilize the section and block library before preset work begins.

This audit lists the current Stone V2 sections, classifies their purpose, identifies missing structural sections, identifies which sections need blocks, separates reusable sections from PDP/collection/content support sections, and proposes a build order.

## 2. Evidence Used

Verified:
- Source theme path: `C:\ELoS\projects\stonev2\project`
- DOM reference path: `C:\ELoS\projects\stonev2\shopify_theme_dom`
- Current section files found: 41 Liquid section files in `project/sections`
- Current standalone block files found: 0 Liquid block files in `project/blocks`
- Current JSON section group files found: 0 JSON files in `project/sections`
- Current global header/footer implementation exists as snippets:
  - `project/snippets/stone-global-header.liquid`
  - `project/snippets/stone-global-footer.liquid`
- DOM reference indexes found: 8 `inspiration-index.md` files
- DOM reference section records found: 3,177 records

DOM type counts:

| Type guess | Count |
| --- | ---: |
| editorial-media | 1,061 |
| hero | 751 |
| content-section | 540 |
| product-grid | 417 |
| cta-section | 249 |
| category-row | 97 |
| slider-section | 62 |

Top useful pattern tags:

| Pattern tag | Count |
| --- | ---: |
| editorial-media | 2,149 |
| image-heavy | 2,018 |
| cta-cluster | 1,913 |
| product-commerce | 1,573 |
| slider | 1,417 |
| card-grid | 1,355 |
| category-navigation | 1,299 |
| top-of-page | 1,051 |
| hero-candidate | 751 |
| video | 72 |
| marquee | 55 |

Inference:
- The reference corpus points toward a theme system dominated by editorial media, heroes, product merchandising, CTA clusters, category navigation, and reusable card grids.
- The current Stone V2 library already has useful runtime proof sections, but it does not yet have the global structural shell needed for stable theme-editor composition.

Unknowns:
- The exact Shopify section-group file implementation should be verified immediately before coding the group files. This audit identifies the required groups, not the final file format.

## 3. Current Stone V2 Sections

| Section file | Purpose class | Current role | Current schema blocks | Reusable across presets | Support surface | Decision |
| --- | --- | --- | ---: | --- | --- | --- |
| `stone-blog-article-highlights.liquid` | Content / blog | Blog/article promotion strip | 0 | Optional | Content | Keep, later add article/card blocks |
| `stone-category-entry-grid.liquid` | Collection navigation | Category entry grid | 0 | Yes | Home, collection | Keep, should gain category/card blocks |
| `stone-category-media-band.liquid` | Editorial media | Category media band | 0 | Yes | Home, collection, content | Keep, likely settings-first |
| `stone-collection-context-card.liquid` | Collection support | Collection context card | 0 | Optional | Collection | Keep, later add context/item blocks |
| `stone-content-card-strip.liquid` | Content cards | Repeating content card strip | 1 | Yes | Home, content | Keep, block-bearing |
| `stone-curated-product-trio.liquid` | Product merchandising | Curated three-product feature | 0 | Optional | Home, PDP, collection | Keep, later add product/card blocks |
| `stone-editorial-quote.liquid` | Editorial content | Quote / brand proof | 0 | Yes | Home, content, PDP | Keep, settings-first |
| `stone-featured-collection-grid.liquid` | Product merchandising | Featured collection grid | 0 | Yes | Home, collection | Keep, later add collection/product source controls |
| `stone-featured-product-showcase.liquid` | Product merchandising | Featured product showcase | 0 | Optional | Home, PDP | Keep, later add product/media blocks |
| `stone-hero-opening.liquid` | Hero | Homepage proof hero | 0 | Yes | Home, landing, content | Keep, refine as canonical hero |
| `stone-main-article.liquid` | Template host | Main article renderer | 0 | Required | Article | Keep |
| `stone-main-blog.liquid` | Template host | Main blog renderer | 0 | Required | Blog | Keep |
| `stone-main-collection.liquid` | Template host | Main collection renderer | 0 | Required | Collection | Keep, later add filter/sort shell |
| `stone-main-product.liquid` | Template host | Main product renderer | 0 | Required | PDP | Keep, later split/extend PDP blocks |
| `stone-main-search.liquid` | Template host | Main search renderer | 0 | Required | Search | Keep |
| `stone-pdp-size-chart.liquid` | PDP support | Apparel size chart | 1 | No | PDP optional | Keep, apparel-specific optional support |
| `stone-pdp-spec-sheet.liquid` | PDP support | Product spec sheet | 1 | No | PDP optional | Keep, electronics/home/tool-specific optional support |
| `stone-process-steps.liquid` | Trust / process | Process steps | 1 | Yes | Home, PDP, content | Keep, block-bearing |
| `stone-product-context-card.liquid` | PDP support | Product context card | 0 | Optional | PDP | Keep, later add context/item blocks |
| `stone-product-pair-comparison.liquid` | PDP / merchandising | Product pair comparison | 0 | Optional | PDP, collection | Keep, later add comparison blocks |
| `stone-shoppable-media-drawer.liquid` | Shoppable media | Drawer-style shoppable media | 0 | Optional | Home, PDP, content | Keep, normalize under overlay/content rules |
| `stone-shoppable-media-focus.liquid` | Shoppable media | Focused shoppable media | 0 | Optional | Home, PDP, content | Keep, later add marker/product blocks |
| `stone-shoppable-media-motion-story.liquid` | Shoppable media | Motion story | 0 | Optional | Home, content | Keep, later verify motion/accessibility |
| `stone-shoppable-media-overlay.liquid` | Shoppable media | Media overlay story | 0 | Optional | Home, PDP, content | Keep, but distinguish from global overlay group |
| `stone-shoppable-media-story.liquid` | Shoppable media | Shoppable media story | 0 | Optional | Home, PDP, content | Keep, later add marker/product blocks |
| `stone-story-split.liquid` | Editorial media | Split story section | 0 | Yes | Home, content, PDP | Keep |
| `stone-trust-faq.liquid` | Trust / support | FAQ accordion/list | 1 | Yes | Home, PDP, content | Keep, block-bearing |
| `stone-trust-help-prompt.liquid` | Trust / support | Help prompt CTA | 0 | Yes | Home, PDP, collection | Keep |
| `stone-trust-logo-rail.liquid` | Trust / proof | Logo rail | 1 | Yes | Home, PDP, content | Keep, block-bearing |
| `stone-trust-reassurance-lane.liquid` | Trust / proof | Reassurance icons/text | 1 | Yes | Home, PDP, collection | Keep, block-bearing |
| `stone-trust-stat-strip.liquid` | Trust / proof | Stats strip | 1 | Yes | Home, PDP, content | Keep, block-bearing |
| `stone-trust-testimonial.liquid` | Trust / proof | Testimonials | 1 | Yes | Home, PDP, content | Keep, block-bearing |
| `stone-utility-action-group.liquid` | Utility | Reusable actions/buttons | 1 | Yes | All | Keep, block-bearing |
| `stone-utility-block-stack.liquid` | Utility / layout | Block stack | 3 | Yes | All | Keep, block-bearing |
| `stone-utility-divider-band.liquid` | Utility / layout | Divider band | 0 | Yes | All | Keep |
| `stone-utility-key-value-list.liquid` | Utility / data | Key/value list | 1 | Yes | PDP, content | Keep, block-bearing |
| `stone-utility-layout-composition.liquid` | Utility / layout | Layout composition | 3 | Yes | All | Keep, block-bearing |
| `stone-utility-notice.liquid` | Utility / messaging | Notice banner | 0 | Yes | All | Keep |
| `stone-utility-prompt.liquid` | Utility / CTA | Prompt / CTA block | 0 | Yes | All | Keep |
| `stone-utility-richtext.liquid` | Utility / content | Rich text section | 0 | Yes | All | Keep |
| `stone-utility-spacer.liquid` | Utility / layout | Spacer | 0 | Yes | All | Keep |

Current sections with schema blocks:

| Section | Block types |
| --- | --- |
| `stone-content-card-strip.liquid` | `item` |
| `stone-pdp-size-chart.liquid` | `row` |
| `stone-pdp-spec-sheet.liquid` | `row` |
| `stone-process-steps.liquid` | `item` |
| `stone-trust-faq.liquid` | `item` |
| `stone-trust-logo-rail.liquid` | `item` |
| `stone-trust-reassurance-lane.liquid` | `item` |
| `stone-trust-stat-strip.liquid` | `item` |
| `stone-trust-testimonial.liquid` | `item` |
| `stone-utility-action-group.liquid` | `action` |
| `stone-utility-block-stack.liquid` | `heading`, `richtext`, `list` |
| `stone-utility-key-value-list.liquid` | `item` |
| `stone-utility-layout-composition.liquid` | `heading`, `richtext`, `list` |

## 4. Missing Structural Sections

These are structural gaps, not preset choices.

### 4.1 Header Group

Required before presets:

| Suggested section | Purpose | Needed blocks |
| --- | --- | --- |
| `stone-announcement-bar` | Sitewide announcement strip | Announcement item, link/action |
| `stone-header-main` | Main brand/navigation/search/cart shell | Menu item, utility action, promo slot |
| `stone-header-mega-menu` | Large navigation panels | Menu column, featured collection, promo tile, image tile |
| `stone-mobile-navigation-drawer` | Mobile navigation structure | Menu group, featured link, account/cart/search action |

Decision:
- Header must become editable through a header group instead of living only as a fixed snippet.
- The current header snippet can be reused as implementation material, but the editable structure should live in section/group contracts.

### 4.2 Footer Group

Required before presets:

| Suggested section | Purpose | Needed blocks |
| --- | --- | --- |
| `stone-footer-main` | Main footer layout | Link column, newsletter, social link, contact text, brand text |
| `stone-footer-legal` | Policy/localization/copyright row | Policy link, payment badge, locale/country control |
| `stone-footer-brand-story` | Optional footer brand/content band | Text, image/media, CTA |

Decision:
- Footer must become editable through a footer group instead of living only as a fixed snippet.
- Footer should be shared by every preset unless a preset explicitly overrides content, not structure.

### 4.3 Overlay Group

Required before presets:

| Suggested section | Purpose | Needed blocks |
| --- | --- | --- |
| `stone-cart-drawer` | Cart overlay shell | Cart line, checkout action, trust item, upsell slot |
| `stone-search-drawer` | Search overlay / predictive search shell | Search suggestion, collection suggestion, product suggestion |
| `stone-newsletter-modal` | Optional capture modal | Text, form, action, image |
| `stone-product-quick-view` | Optional product quick-view overlay | Product summary, variant/buy controls, media |
| `stone-localization-modal` | Country/language selector | Locale item, market item |
| `stone-media-lightbox` | Product/content media overlay | Media item, caption |

Decision:
- The current `stone-shoppable-media-overlay` is a content section, not a complete global overlay group.
- Overlay structure should be established early because cart/search/mobile drawers affect the whole site.

## 5. Suggested Section Library

This is the proposed chooser list for review.

### 5.1 Required Global Structure

| Section | Keep/build | Scope |
| --- | --- | --- |
| Header group | Build | All presets |
| Footer group | Build | All presets |
| Overlay group | Build | All presets |
| Announcement bar | Build | All presets |
| Main header | Build | All presets |
| Mega menu | Build | All presets |
| Mobile navigation drawer | Build | All presets |
| Main footer | Build | All presets |
| Footer legal row | Build | All presets |
| Cart drawer | Build | All presets |
| Search drawer | Build | All presets |

### 5.2 Required Template Hosts

| Section | Current status | Scope |
| --- | --- | --- |
| Main product | Exists | PDP |
| Main collection | Exists | Collection |
| Main search | Exists | Search |
| Main blog | Exists | Blog |
| Main article | Exists | Article |
| Main page | Missing | Content pages |
| Main cart | Missing or not yet audited as a section | Cart page |
| Main 404 | Missing | System page |
| Main contact | Missing | Contact page |
| Main policy | Missing | Policy pages |
| Gift card | Missing | Gift card |
| Password page | Missing or not yet audited | Password/storefront lock |

### 5.3 Editorial and Content Sections

| Section | Current status | Reusable |
| --- | --- | --- |
| Hero opening | Exists | Yes |
| Split story | Exists | Yes |
| Editorial quote | Exists | Yes |
| Category media band | Exists | Yes |
| Content card strip | Exists | Yes |
| Rich text | Exists | Yes |
| Prompt / CTA | Exists | Yes |
| Action group | Exists | Yes |
| Process steps | Exists | Yes |
| Video/media banner | Missing | Yes |
| Slideshow / carousel hero | Missing | Optional |
| Marquee / ticker | Missing | Optional |
| Image collage | Missing | Optional |
| Before/after or comparison media | Missing | Optional |
| Blog/article highlights | Exists | Optional |

### 5.4 Commerce and Merchandising Sections

| Section | Current status | Reusable |
| --- | --- | --- |
| Featured collection grid | Exists | Yes |
| Featured product showcase | Exists | Yes |
| Curated product trio | Exists | Optional |
| Product pair comparison | Exists | Optional |
| Product context card | Exists | Optional |
| Collection context card | Exists | Optional |
| Category entry grid | Exists | Yes |
| Product carousel | Missing | Yes |
| Collection list / collection cards | Missing | Yes |
| Related products | Missing | PDP optional |
| Recently viewed products | Missing | PDP/collection optional |
| Promo tile grid | Missing | Home/collection optional |
| Product markers / shop the look | Missing as block model | Optional |

### 5.5 PDP Support Sections

| Section | Current status | Preset use |
| --- | --- | --- |
| Main product | Exists | All PDPs |
| Size chart | Exists | Apparel only |
| Spec sheet | Exists | Electronics, tools, home, technical products |
| Product context card | Exists | Optional |
| Product pair comparison | Exists | Optional |
| Trust FAQ | Exists | Optional |
| Reassurance lane | Exists | Optional |
| Key/value list | Exists | Optional |
| Product recommendations | Missing | Optional |
| Product reviews/rating host | Missing | Optional/app-dependent |
| Care/materials guide | Missing | Apparel, home, beauty optional |
| Compatibility/fit guide | Missing | Electronics, parts, accessories optional |
| Sticky add-to-cart | Missing | Optional, should wait until main PDP is stable |

### 5.6 Collection Support Sections

| Section | Current status | Preset use |
| --- | --- | --- |
| Main collection | Exists | All collection pages |
| Collection hero | Missing or should be split from context card | All collection presets |
| Filter/sort controls | Missing as explicit structural model | Collection pages |
| Category entry grid | Exists | Optional |
| Collection context card | Exists | Optional |
| Promo insertion card | Missing | Optional |
| Merchandising banner | Missing | Optional |
| Empty collection state | Missing or not yet audited | Required fallback |

### 5.7 Trust and Support Sections

| Section | Current status | Reusable |
| --- | --- | --- |
| Trust FAQ | Exists | Yes |
| Help prompt | Exists | Yes |
| Logo rail | Exists | Yes |
| Reassurance lane | Exists | Yes |
| Stat strip | Exists | Yes |
| Testimonial | Exists | Yes |
| Process steps | Exists | Yes |
| Contact form | Missing | Optional |
| Newsletter form | Missing | Optional |
| Store/location block | Missing | Optional |

### 5.8 Utility and Layout Sections

| Section | Current status | Reusable |
| --- | --- | --- |
| Utility action group | Exists | Yes |
| Utility block stack | Exists | Yes |
| Utility divider band | Exists | Yes |
| Utility key/value list | Exists | Yes |
| Utility layout composition | Exists | Yes |
| Utility notice | Exists | Yes |
| Utility prompt | Exists | Yes |
| Utility rich text | Exists | Yes |
| Utility spacer | Exists | Yes |
| Custom Liquid host | Missing | Optional, should be controlled |
| App block host | Missing | Optional, Shopify app compatibility |

## 6. Suggested Block Library

The theme does not currently have standalone block files. The first stabilization pass should define a consistent schema-block vocabulary used inside sections.

### 6.1 Core Content Blocks

| Block | Use |
| --- | --- |
| Heading | Titles, section headings, card headings |
| Eyebrow | Small label above heading |
| Rich text | Body copy and editorial content |
| Text item | Simple repeated text |
| Button/action | Primary/secondary CTAs |
| Link list | Navigation and grouped links |

### 6.2 Media Blocks

| Block | Use |
| --- | --- |
| Image | Standard image slot |
| Video | Video/media banner support |
| Media card | Image plus text/action |
| Logo | Trust/logo rail |
| Icon item | Reassurance, features, process steps |
| Product marker | Shoppable image markers |

### 6.3 Commerce Blocks

| Block | Use |
| --- | --- |
| Product card | Product grid/carousel/trio |
| Product reference | Featured product and PDP support |
| Collection card | Collection list/category entry |
| Promo tile | Collection and homepage promo insert |
| Upsell item | Cart drawer and PDP support |
| Comparison item | Product comparison sections |

### 6.4 PDP/Data Blocks

| Block | Use |
| --- | --- |
| Size row | Size chart |
| Spec row | Spec sheet |
| Key/value row | Technical facts, materials, care |
| Accordion row | PDP info tabs and FAQ |
| Compatibility row | Electronics/parts/accessories |
| Care row | Apparel/home/beauty support |

### 6.5 Global Structure Blocks

| Block | Use |
| --- | --- |
| Announcement item | Announcement bar |
| Menu column | Mega menu and footer |
| Menu link | Header/footer/mobile nav |
| Social link | Footer |
| Policy link | Footer legal |
| Trust badge | Footer/cart/PDP |
| Localization item | Locale/country modal |

## 7. Sections That Need Blocks Next

High priority:

| Section | Why blocks are needed |
| --- | --- |
| Header group sections | Navigation, promo slots, utility actions, and mobile links must be editable |
| Footer group sections | Footer columns, social links, newsletter, and legal rows must be editable |
| Overlay group sections | Cart/search/menu/modal content needs predictable editable slots |
| Main product | PDP needs stable internal blocks before apparel/electronics divergence |
| Main collection | Filters, sort, promo insertions, empty states, and collection hero need stable slots |
| Category entry grid | Category cards should be repeated blocks |
| Featured collection grid | Collection/product sources need a clear block or setting contract |
| Featured product showcase | Product/media/action composition should be explicit |
| Curated product trio | Products should be editable as product reference blocks |
| Product pair comparison | Comparison items should be block based |
| Shoppable media sections | Product markers should be blocks |
| Blog article highlights | Article/card entries should be blocks or source settings |

Already block-bearing and should be kept:

| Section | Existing block model |
| --- | --- |
| Content card strip | Repeating `item` blocks |
| PDP size chart | Repeating `row` blocks |
| PDP spec sheet | Repeating `row` blocks |
| Process steps | Repeating `item` blocks |
| Trust FAQ | Repeating `item` blocks |
| Logo rail | Repeating `item` blocks |
| Reassurance lane | Repeating `item` blocks |
| Stat strip | Repeating `item` blocks |
| Testimonial | Repeating `item` blocks |
| Utility action group | Repeating `action` blocks |
| Utility key/value list | Repeating `item` blocks |
| Utility block stack | `heading`, `richtext`, `list` blocks |
| Utility layout composition | `heading`, `richtext`, `list` blocks |

## 8. Reusable Across All Presets

These should be stable before any preset-specific assembly:

- Header group
- Footer group
- Overlay group
- Announcement bar
- Main header
- Main footer
- Cart drawer
- Search drawer
- Main product
- Main collection
- Main search
- Main blog
- Main article
- Main page
- Hero opening
- Split story
- Rich text
- Content card strip
- Featured collection grid
- Category entry grid
- Trust FAQ
- Help prompt
- Logo rail
- Reassurance lane
- Stat strip
- Testimonial
- Process steps
- Utility action group
- Utility block stack
- Utility divider band
- Utility key/value list
- Utility layout composition
- Utility notice
- Utility prompt
- Utility spacer

## 9. Optional PDP / Collection / Content Supports

### PDP optional support

- Size chart: apparel only
- Spec sheet: electronics, tools, home, technical products
- Product context card
- Product pair comparison
- Related products
- Recently viewed products
- Reviews/rating host
- Care/materials guide
- Compatibility/fit guide
- Sticky add-to-cart

### Collection optional support

- Collection hero
- Category entry grid
- Collection context card
- Promo insertion card
- Merchandising banner
- Collection list
- Product carousel
- Empty collection state

### Content optional support

- Blog/article highlights
- Video/media banner
- Slideshow/carousel hero
- Marquee/ticker
- Image collage
- Newsletter form
- Contact form
- Store/location block

## 10. Recommended Build Order

Do not start with presets. Presets should consume the stabilized library after the structure is proven.

1. Freeze the section and block registry.
   - Review this audit.
   - Decide which suggested sections are in scope for the first stabilization run.
   - Mark deferred sections explicitly.

2. Build the global groups.
   - Header group.
   - Footer group.
   - Overlay group.
   - Keep the implementation narrow and prove each group renders.

3. Stabilize the block vocabulary.
   - Normalize repeated blocks such as item, row, heading, richtext, action, product card, collection card, accordion row, and key/value row.
   - Avoid preset-specific language in shared block schemas.

4. Stabilize required template hosts.
   - Product.
   - Collection.
   - Search.
   - Blog.
   - Article.
   - Page.
   - Cart.
   - 404.
   - Contact.
   - Policy.

5. Stabilize commerce primitives.
   - Product card.
   - Collection card.
   - Featured collection.
   - Product grid/carousel.
   - Category grid.
   - Promo tile.

6. Stabilize PDP support sections.
   - Keep apparel size chart separate from electronics/technical spec sheet.
   - Add care/materials and compatibility/fit only after the base PDP contract is stable.

7. Stabilize collection support sections.
   - Collection hero.
   - Filter/sort shell.
   - Promo insertions.
   - Empty state.

8. Stabilize editorial/content sections.
   - Hero.
   - Media banner.
   - Story split.
   - Content cards.
   - Trust/support sections.

9. Run render and upload checks.
   - Verify schema validity.
   - Verify theme upload accepts all section/group files.
   - Verify homepage, PDP, collection, search, blog, article, and page routes render.

10. Build presets last.
   - Apparel can include size chart.
   - Electronics can include spec sheet.
   - Other presets only receive relevant PDP/collection/content support sections.

## 11. First Implementation Unit Recommendation

The next implementation unit should be:

`Global group shell stabilization`

Deliverable:
- Add or convert the editable header group.
- Add or convert the editable footer group.
- Add the overlay group shell.
- Keep visual design minimal.
- Prove Shopify accepts the files.
- Do not add presets.

Reason:
- Header, footer, and overlay groups are cross-site structural dependencies.
- Presets built before these groups would be unstable and likely need rework.

## 12. Review Questions

1. Which suggested global sections should be included in the first group build: announcement bar, main header, mega menu, mobile drawer, main footer, footer legal, cart drawer, search drawer?
2. Should quick view, newsletter modal, localization modal, and media lightbox be part of the first overlay group, or deferred?
3. Should PDP support start with only size chart and spec sheet, or should care/materials and compatibility/fit be added to the first support batch?
4. Should collection support include filters/sort immediately, or should that wait until the main collection section is rebuilt?
5. Should standalone `project/blocks` files be introduced later, or should the first pass keep all blocks inside section schemas?
