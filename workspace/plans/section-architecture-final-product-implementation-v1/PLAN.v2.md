# Stone V2 Final Section Architecture Implementation Plan

Date: 2026-04-24

Artifact type: parent roadmap and control plan

Status: READY FOR DERIVATIVE UNIT PLAN; NOT RUNTIME AUTHORIZATION

Runtime files changed by this plan: none

## Goal

Build Stone V2 into a premium Shopify theme with secure roots, a stable section/block trunk, and full merchant-facing section branches across global shell, PDP, collection, search, cart, promotion, editorial commerce, trust/support, system templates, and final presets.

## Scope

In scope:

- Define the safe implementation order from roots to trunk to branches to leaves.
- Include all suggested premium section/block families from the audit stack.
- Correct the v1 roadmap so it cannot be mistaken for runtime authorization.
- Add the first bounded unit candidate as docs/spec normalization only.
- Add owner decision defaults, app-block mechanics, per-section classification, schema migration reporting, phase file candidates, and fail-closed rules.

Out of scope:

- No runtime theme edits.
- No Shopify upload or publish.
- No preset composition.
- No code copy from Prestige or any reference theme.
- No broad implementation authorization.

## Source Artifacts Read

- `workspace/audits/section-block-library-stabilization-audit-2026-04-24.md`: VERIFIED
- `workspace/audits/section-block-library-premium-theme-gap-review-2026-04-24.md`: VERIFIED
- `workspace/audits/section-block-library-completion-addendum-prestige-crosscheck-2026-04-24.md`: VERIFIED
- `workspace/audits/section-architecture-implementation-control-matrix-2026-04-24.md`: VERIFIED
- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v1.md`: VERIFIED
- `state/NEXT_ACTION.md`: VERIFIED
- `state/STATUS.md`: VERIFIED
- `state/ORCHESTRATION_STATE.md`: VERIFIED
- `workspace/handoff/CURRENT_HANDOFF.md`: VERIFIED

## Current Repo Evidence

Verified:

- Runtime root is `project/`.
- Current theme has Shopify runtime folders: `assets`, `blocks`, `config`, `layout`, `locales`, `sections`, `snippets`, and `templates`.
- Current state says broad preset runtime composition remains blocked.
- Current state says `UNIT-184` remains blocked pending owner runtime composition inputs.
- The control matrix requires a saved implementation plan before runtime edits.
- The control matrix requires exact block model classification before section work.

Inference:

- This document is a parent roadmap. It is not narrow enough to authorize runtime writes.
- The first safe implementation step is docs/spec normalization, not runtime section construction.

## Runtime Authorization Boundary

PLAN.v2.md is not runtime authorization.

Runtime execution remains blocked until a narrower derivative unit plan exists with:

- exact files to create or modify
- exact allowed writes and disallowed writes
- exact block model decisions
- exact app-block mechanics
- exact schema migration review
- exact validation commands
- exact rollback list
- owner authorization

Required owner authorization phrase for runtime work:

```text
AUTHORIZED: EXECUTE PLAN
```

Fail-closed rule:

If the exact write set is unknown, stop and request a derivative unit plan.

## Owner Decisions Required Before Runtime

| Decision | Required before phase | Default if unresolved |
| --- | ---: | --- |
| Admit `/blocks` theme-block architecture | Phase 4 | BLOCKED |
| Include `_blocks.liquid` | Phase 4 | BLOCKED_PENDING_OWNER_DECISION |
| Include customer templates first pass | Phase 13 | INTENTIONALLY_EXCLUDED |
| Include quick order | Phase 14 | INTENTIONALLY_EXCLUDED |
| Include volume pricing | Phase 14 | INTENTIONALLY_EXCLUDED |
| Include age verifier | Phase 14 | INTENTIONALLY_EXCLUDED |
| Include combined listings | Phase 14 | INTENTIONALLY_EXCLUDED |
| Include flower/gift-specific sections | Phase 16 | INTENTIONALLY_EXCLUDED until product strategy approval |
| Include free-shipping progress | Phase 7 | INTENTIONALLY_EXCLUDED until market policy approval |
| Include predictive search | Phase 3B / Phase 9 | BLOCKED until drawer/search JS contract exists |
| Include preorder behavior | Phase 14 | INTENTIONALLY_EXCLUDED until purchase-state policy approval |
| Include back-in-stock behavior | Phase 14 | INTENTIONALLY_EXCLUDED until app/native notification policy approval |

## First Authorized Unit Candidate

Recommended first unit:

`UNIT-SA-001: Global group shell inventory and docs-only normalization`

Unit class:

- Docs/spec only.
- No runtime theme writes.
- No Shopify upload.
- No preset composition.

Allowed writes:

- `workspace/specs/app-block-placement-policy.md`
- `workspace/specs/dynamic-source-compatibility-matrix.md`
- `workspace/specs/rtl-acceptance-checklist.md`
- `workspace/specs/promotion-surface-taxonomy.md`
- `workspace/specs/pdp-conversion-block-map.md`
- `workspace/specs/collection-merchandising-surface-map.md`
- `workspace/specs/cart-recovery-surface-map.md`
- `workspace/specs/section-architecture-status-matrix.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`

Disallowed writes:

- `project/assets/**`
- `project/blocks/**`
- `project/sections/**`
- `project/snippets/**`
- `project/templates/**`
- `project/config/**`
- `project/locales/**`
- Shopify remote themes

Exit criteria:

- All P0 rows have status, block model, dependencies, fallback, QA, and priority.
- App-block policy exists and includes schema/render mechanics.
- Dynamic-source matrix exists.
- RTL checklist exists.
- Promotion taxonomy exists.
- PDP, collection, and cart maps exist.
- No runtime files changed.
- Next runtime unit is proposed separately.

Validation commands:

- `git status --short`
- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

Rollback:

- Delete or revert only the `workspace/specs/**` files and `UNIT-SA-001.v1.md` created by this unit.

## Shopify Platform Constraints

Verified:

- Shopify themes use templates composed of sections and sections composed of blocks.
- A section can accept section blocks or theme blocks, but a single section must not mix both models.
- Theme blocks live in `/blocks`.
- App blocks require explicit schema support.
- App blocks are not supported in statically rendered sections.
- Blocks of type `@app` must not use `limit`.
- Section groups can render up to 25 sections, and each section can have up to 50 blocks.

Implementation mechanics for app blocks:

```liquid
{% for block in section.blocks %}
  {% case block.type %}
    {% when '@app' %}
      {% render block %}
  {% endcase %}
{% endfor %}
```

Required schema mechanic:

```json
{
  "type": "@app"
}
```

Hard rules:

- Never support app blocks in statically rendered sections.
- Never add `limit` to an `@app` block.
- Never add `templates` or `enabled_on/disabled_on.templates` to `sections/apps.liquid`.
- Never mix `{% content_for 'blocks' %}` with section-defined schema blocks in the same section.
- Never allow all theme blocks everywhere by default.

## Full P0 Per-Section Classification Table

| Target | File candidate | Classification | App blocks allowed | Theme blocks allowed | Section blocks allowed | Static? |
| --- | --- | --- | --- | --- | --- | --- |
| Header group | `project/sections/header-group.json` | GROUP_CONFIG | No | No | No | N/A |
| Footer group | `project/sections/footer-group.json` | GROUP_CONFIG | Restricted via child sections | No | No | N/A |
| Overlay group | `project/sections/overlay-group.json` | GROUP_CONFIG | Restricted via child sections | No | No | N/A |
| Apps wrapper | `project/sections/apps.liquid` | APP_WRAPPER_SECTION | Yes | No | No | No |
| Theme block wrapper | `project/sections/_blocks.liquid` | THEME_BLOCK_SECTION | Optional by policy | Yes | No | No |
| Announcement bar | `project/sections/stone-announcement-bar.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Main header | `project/sections/stone-header-main.liquid` | SECTION_BLOCK_SECTION | No by default | No | Yes | No |
| Mega menu | `project/sections/stone-header-mega-menu.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Mobile navigation drawer | `project/sections/stone-mobile-navigation-drawer.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Main footer | `project/sections/stone-footer-main.liquid` | SECTION_BLOCK_SECTION | Restricted | No | Yes | No |
| Footer legal | `project/sections/stone-footer-legal.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Cart drawer shell | `project/sections/stone-cart-drawer.liquid` | SECTION_BLOCK_SECTION | Restricted outside core cart | No | Yes | No |
| Search drawer shell | `project/sections/stone-search-drawer.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Newsletter popup | `project/sections/stone-newsletter-popup.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Privacy banner | `project/sections/stone-privacy-banner.liquid` | STATIC_NO_BLOCK_SECTION | No | No | No | No |
| Main product | `project/sections/stone-main-product.liquid` | SECTION_BLOCK_SECTION | Safe zones only | No | Yes | No |
| Related products | `project/sections/stone-related-products.liquid` | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No by default | No | Optional | No |
| Recently viewed products | `project/sections/stone-recently-viewed-products.liquid` | STATIC_NO_BLOCK_SECTION | No | No | No | No |
| Complementary products | `project/sections/stone-complementary-products.liquid` | SECTION_BLOCK_SECTION | No by default | No | Yes | No |
| Main cart | `project/sections/stone-main-cart.liquid` | SECTION_BLOCK_SECTION | Safe zone below core cart | No | Yes | No |
| Collection banner | `project/sections/stone-collection-banner.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Main collection | `project/sections/stone-main-collection.liquid` | SECTION_BLOCK_SECTION | No in product-card loops | No | Yes | No |
| Collection list | `project/sections/stone-collection-list.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Collection promo card | `project/sections/stone-collection-grid-promo-card.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Promo banner | `project/sections/stone-promo-banner.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Promo tile grid | `project/sections/stone-promo-tile-grid.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Cart promo message | `project/sections/stone-cart-promo-message.liquid` | SECTION_BLOCK_SECTION | No | No | Yes | No |
| Shop the look | `project/sections/stone-shop-the-look.liquid` | THEME_BLOCK_SECTION preferred | No by default | Yes | No | No |
| Image hotspot | `project/sections/stone-image-hotspot.liquid` | THEME_BLOCK_SECTION preferred | No by default | Yes | No | No |
| Media grid | `project/sections/stone-media-grid.liquid` | THEME_BLOCK_SECTION preferred | No by default | Yes | No | No |
| Slideshow | `project/sections/stone-slideshow.liquid` | THEME_BLOCK_SECTION preferred | No | Yes | No | No |
| Main page | `project/sections/stone-main-page.liquid` | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | No | No | Optional | No |
| Main search | `project/sections/stone-main-search.liquid` | SECTION_BLOCK_SECTION | No by default | No | Yes | No |
| Main blog | `project/sections/stone-main-blog.liquid` | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | Restricted below content | No | Optional | No |
| Main article | `project/sections/stone-main-article.liquid` | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | Restricted below content | No | Optional | No |
| Main 404 | `project/sections/stone-main-404.liquid` | STATIC_NO_BLOCK_SECTION | No | No | No | No |
| Main contact | `project/sections/stone-main-contact.liquid` | SECTION_BLOCK_SECTION | Restricted below form | No | Yes | No |
| Main policy/page host | `project/sections/stone-main-policy.liquid` | STATIC_NO_BLOCK_SECTION | No | No | No | No |
| Gift card | `project/sections/stone-main-gift-card.liquid` | STATIC_NO_BLOCK_SECTION | No | No | No | No |
| Password | `project/sections/stone-main-password.liquid` | SECTION_BLOCK_SECTION | Restricted | No | Yes | No |

Overlay group note:

- Overlay group is a deliberate Stone/Prestige-inspired architecture choice. Shopify documentation primarily recommends section groups for header/footer; validate layout integration before runtime implementation.

Gift card rule:

- Verify Shopify-supported gift card template architecture before writing gift card runtime files.

## P1/P2 Classification Defaults

| Target | File candidate | Classification | Default status until derivative plan |
| --- | --- | --- | --- |
| FAQ / FAQ TOC | `project/sections/stone-faq.liquid` | SECTION_BLOCK_SECTION | PARTIAL/MISSING |
| Trust badge strip | `project/sections/stone-trust-badge-strip.liquid` | SECTION_BLOCK_SECTION | PARTIAL |
| Press coverage | `project/sections/stone-press-coverage.liquid` | SECTION_BLOCK_SECTION | MISSING |
| Testimonials carousel | `project/sections/stone-testimonials-carousel.liquid` | SECTION_BLOCK_SECTION or THEME_BLOCK_SECTION | MISSING |
| Tabs | `project/sections/stone-tabs.liquid` | THEME_BLOCK_SECTION preferred | MISSING |
| Timeline | `project/sections/stone-timeline.liquid` | SECTION_BLOCK_SECTION or THEME_BLOCK_SECTION | MISSING |
| Before/after | `project/sections/stone-before-after.liquid` | SECTION_BLOCK_SECTION | MISSING |
| Product comparison | `project/sections/stone-product-comparison.liquid` | SECTION_BLOCK_SECTION | MISSING |
| Quick order list | `project/sections/stone-quick-order-list.liquid` | SECTION_BLOCK_SECTION | INTENTIONALLY_EXCLUDED until approved |
| Volume pricing display | PDP block or `stone-volume-pricing.liquid` | SECTION_BLOCK_SECTION | INTENTIONALLY_EXCLUDED until approved |
| Age verifier | `project/sections/stone-age-verifier.liquid` | STATIC_NO_BLOCK_SECTION | INTENTIONALLY_EXCLUDED until approved |
| Customer templates | `project/sections/stone-main-customers-*.liquid` | STATIC_NO_BLOCK_SECTION or SECTION_BLOCK_SECTION | INTENTIONALLY_EXCLUDED until approved |
| Flower/gift finder | `project/sections/stone-gift-finder.liquid` | SECTION_BLOCK_SECTION | INTENTIONALLY_EXCLUDED until approved |

## Schema Migration Review Required Per Runtime Unit

Each runtime implementation report must include:

| Category | IDs |
| --- | --- |
| Preserved schema IDs | |
| Added schema IDs | |
| Renamed schema IDs | |
| Removed schema IDs | |
| JSON templates affected | |
| Merchant customization risk | LOW / MEDIUM / HIGH |

Fail-closed rules:

- If any existing schema ID would be renamed, stop unless the derivative unit includes a migration/deprecation note.
- If any JSON template uses a schema setting that would be removed, stop.
- If the runtime unit cannot list preserved, added, renamed, and removed IDs, stop.

## Builder

The corrected strategy is to treat PLAN.v2.md as a parent roadmap and require derivative unit plans for every runtime phase.

Build order:

1. Roots: docs/spec control, exact matrix, owner decisions, app-block policy, dynamic-source matrix, RTL checklist.
2. Roots: shared render primitives and global shell scaffolds.
3. Trunk: PDP, cart, collection, search, product recovery, promotion primitives.
4. Branches: editorial commerce, trust/support, system/customer templates, advanced verticals.
5. Leaves: preset composition only after all required P0 roots/trunk rows are present or intentionally excluded.

The first unit is docs/spec normalization only because it secures the root contract and creates the exact status matrix required before any build.

## Adversarial reviewer

Risks:

1. A broad roadmap can be misread as authorization.
2. Theme blocks are still a critical unresolved owner decision.
3. Global groups can become too wide if behavior is bundled with group JSON scaffolding.
4. App-block zones can break Shopify rules if implementation mechanics are implicit.
5. PDP/cart changes can damage purchase flow if they are implemented before shared snippets and QA gates.
6. Media-heavy branches can damage performance if budgets are not phase-level.
7. Presets can hide incomplete architecture if started too early.

Corrections in PLAN.v2.md:

- Readiness is downgraded to `READY FOR DERIVATIVE UNIT PLAN`.
- First unit is docs/spec only.
- Runtime phases require exact file candidates.
- Phase 3 is split into 3A and 3B.
- App-block schema and render mechanics are explicit.
- Per-section classification is explicit for P0 targets.
- Schema migration reporting is required per runtime unit.
- Unknown write sets are fail-closed.

## Final recommendation or Reconciliation

Use PLAN.v2.md as the parent roadmap.

Do not authorize PLAN.v2.md for runtime implementation.

Authorize only a derivative unit plan. The first recommended derivative unit is `UNIT-SA-001`, a docs/spec-only normalization unit. Runtime section files should not be touched until `UNIT-SA-001` produces the complete status matrix and policy artifacts.

Rejected:

- Directly authorizing PLAN.v1.md or PLAN.v2.md for runtime work.
- Starting with global group behavior.
- Starting with presets.
- Making `/blocks` PRESENT without owner approval.
- Allowing app blocks without schema/render mechanics.

Selected:

- Docs/spec root normalization first.
- Then derivative plan for global group shell scaffolding.
- Then shared primitives.
- Then behavior modules.
- Then PDP/cart/collection.
- Then branches.
- Then presets.

## Phase 0: Parent Roadmap Review

Purpose:

- Confirm PLAN.v2.md as the parent roadmap and block broad runtime execution.

Candidate files:

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`

Allowed writes:

- This plan file only.

Disallowed writes:

- `project/**`

Pass/fail gates:

- PASS: PLAN.v2.md exists.
- PASS: Readiness verdict is `READY FOR DERIVATIVE UNIT PLAN`.
- PASS: Plan states it is not runtime authorization.
- FAIL: Any runtime file changes.

Rollback:

- Delete or supersede `PLAN.v2.md`.

## Phase 1: Docs/Spec Root Normalization

Purpose:

- Create the exact control documents required before implementation.

Candidate files:

- `workspace/specs/app-block-placement-policy.md`
- `workspace/specs/dynamic-source-compatibility-matrix.md`
- `workspace/specs/rtl-acceptance-checklist.md`
- `workspace/specs/promotion-surface-taxonomy.md`
- `workspace/specs/pdp-conversion-block-map.md`
- `workspace/specs/collection-merchandising-surface-map.md`
- `workspace/specs/cart-recovery-surface-map.md`
- `workspace/specs/section-architecture-status-matrix.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`

Disallowed files:

- `project/**`

Pass/fail gates:

- PASS: Every P0 target has status, classification, app-block policy, dynamic-source policy, dependencies, fallback, QA, and priority.
- PASS: App-block policy includes `{ "type": "@app" }`, `{% render block %}`, and no static app blocks.
- PASS: No runtime files changed.
- FAIL: Any P0 row lacks required control data.
- FAIL: Any write occurs under `project/`.

Rollback:

- Revert created docs/spec files.

## Phase 2: Shared Render Primitive Audit And Plan

Purpose:

- Prepare but do not yet build the shared primitive layer unless a derivative runtime unit authorizes it.

Candidate files for derivative runtime unit:

- `project/snippets/stone-product-card.liquid`
- `project/snippets/stone-price.liquid`
- `project/snippets/stone-media.liquid`
- `project/snippets/stone-button.liquid`
- `project/snippets/stone-icon.liquid`
- `project/snippets/stone-form-errors.liquid`
- `project/snippets/stone-pagination.liquid`
- `project/snippets/stone-facets.liquid`
- `project/snippets/stone-quantity-input.liquid`
- `project/snippets/stone-variant-picker.liquid`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.schema.json` or current Hebrew schema locale path

Pass/fail gates:

- PASS: Derivative plan lists exact snippets to add/modify.
- PASS: Schema migration review is complete.
- PASS: Locale additions are listed.
- FAIL: Primitive unit includes unrelated section families.
- FAIL: Exact write set is unknown.

Rollback:

- Revert only touched snippets/assets/locales.

## Phase 3A: Global Group JSON And Shell Section Scaffolding

Purpose:

- Add editable group structure and non-behavioral shell sections.

Candidate files for derivative runtime unit:

- `project/sections/header-group.json`
- `project/sections/footer-group.json`
- `project/sections/overlay-group.json`
- `project/sections/apps.liquid`
- `project/sections/stone-announcement-bar.liquid`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-footer-main.liquid`
- `project/sections/stone-footer-legal.liquid`
- `project/locales/en.schema.json`
- `project/locales/he.schema.json` or current Hebrew schema locale path

Explicitly excluded from Phase 3A:

- Cart drawer behavior.
- Search drawer behavior.
- Predictive search.
- Mobile drawer focus trap.
- Modal behavior.
- Cart quantity/update logic.

Pass/fail gates:

- PASS: Group JSON parses.
- PASS: Section schemas parse.
- PASS: `apps.liquid` includes `{ "type": "@app" }`, renders app blocks with `{% render block %}`, has a preset, and has no `templates` schema attribute.
- PASS: No app blocks are added to static sections.
- FAIL: Any drawer/search/cart behavior is included.
- FAIL: Any mixed theme-block/section-block section is introduced.

Rollback:

- Revert group JSON, shell sections, locale changes.

## Phase 3B: Global Drawer/Search/Cart Behavior

Purpose:

- Add behavior only after shared JS behavior exists.

Prerequisite:

- Phase 5 shared JS behavior plan or implementation must pass first.

Candidate files for derivative runtime unit:

- `project/sections/stone-mobile-navigation-drawer.liquid`
- `project/sections/stone-cart-drawer.liquid`
- `project/sections/stone-search-drawer.liquid`
- `project/sections/stone-newsletter-popup.liquid`
- `project/sections/stone-privacy-banner.liquid`
- `project/assets/stone-drawer.js`
- `project/assets/stone-modal.js`
- `project/assets/stone-search.js`
- `project/assets/stone-base.css`
- locale files for labels

Pass/fail gates:

- PASS: Keyboard open/close documented.
- PASS: ESC close.
- PASS: Focus trap where drawer/modal.
- PASS: Focus returns to trigger.
- PASS: Reduced motion honored.
- PASS: Body scroll lock restored.
- FAIL: Focus behavior is not testable.
- FAIL: App blocks are introduced inside strict overlay internals without policy.

Rollback:

- Revert drawer/search/modal sections, assets, and locale changes.

## Phase 4: Theme Block Architecture Decision

Purpose:

- Decide and implement `/blocks` only if explicitly admitted.

Default:

- `/blocks` architecture is BLOCKED until owner approval.
- `_blocks.liquid` is BLOCKED_PENDING_OWNER_DECISION until owner approval.
- If theme-block architecture is admitted, static theme blocks may be used for fixed controls that should be customizable but not removable/reorderable.

Candidate files if approved:

- `project/sections/_blocks.liquid`
- `project/blocks/heading.liquid`
- `project/blocks/rich-text.liquid`
- `project/blocks/button.liquid`
- `project/blocks/button-group.liquid`
- `project/blocks/image.liquid`
- `project/blocks/video.liquid`
- `project/blocks/icon.liquid`
- `project/blocks/badge.liquid`
- `project/blocks/accordion.liquid`
- `project/blocks/page-content.liquid`
- `project/blocks/liquid.liquid`
- locale files for block labels

Pass/fail gates:

- PASS: Owner decision recorded.
- PASS: No section mixes theme blocks and section blocks.
- PASS: Parent/child compatibility matrix exists.
- FAIL: `/blocks` are created without owner approval.
- FAIL: All theme blocks are allowed everywhere by default.

Rollback:

- Revert created block files, wrapper section, and locale changes.

## Phase 5: Shared Interactive JS/CSS Behavior

Purpose:

- Build behavior modules once before interactive sections depend on them.

Candidate files:

- `project/assets/stone-drawer.js`
- `project/assets/stone-modal.js`
- `project/assets/stone-carousel.js`
- `project/assets/stone-accordion.js`
- `project/assets/stone-tabs.js`
- `project/assets/stone-hotspot.js`
- `project/assets/stone-base.css`
- `project/snippets/stone-icon.liquid`

Pass/fail gates:

- PASS: Each module has keyboard behavior notes.
- PASS: Reduced-motion path exists.
- PASS: RTL behavior is documented for drawers/carousels/hotspots.
- PASS: Incremental JS budget is stated.
- FAIL: Any interactive component lacks focus/ESC/return-focus tests.

Rollback:

- Revert behavior assets and any linked section changes.

## Phase 6: PDP Conversion Contract

Purpose:

- Stabilize purchase-critical PDP as controlled section-block architecture.

Candidate files:

- `project/sections/stone-main-product.liquid`
- `project/sections/stone-pdp-size-chart.liquid`
- `project/sections/stone-pdp-spec-sheet.liquid`
- `project/snippets/stone-price.liquid`
- `project/snippets/stone-media.liquid`
- `project/snippets/stone-variant-picker.liquid`
- `project/snippets/stone-quantity-input.liquid`
- `project/snippets/stone-product-form.liquid`
- `project/snippets/stone-form-errors.liquid`
- `project/assets/stone-product.js` if required
- `project/assets/stone-base.css`
- locale files

Pass/fail gates:

- PASS: Schema migration table is complete.
- PASS: Existing merchant-facing IDs are preserved or migration note exists.
- PASS: One variant, many variants, sold-out, unavailable variant, no media, and app-block missing/present are covered.
- PASS: Add-to-cart behavior has a test plan.
- FAIL: PDP changes include cart drawer behavior.
- FAIL: App block is inserted inside critical product form controls.

Rollback:

- Revert PDP section, snippets, assets, and locales.

## Phase 7: Cart And Recovery

Purpose:

- Build cart page and cart drawer only after primitives and drawer behavior exist.

Candidate files:

- `project/sections/stone-main-cart.liquid`
- `project/sections/stone-cart-drawer.liquid`
- `project/snippets/stone-cart-line-item.liquid`
- `project/snippets/stone-price.liquid`
- `project/snippets/stone-quantity-input.liquid`
- `project/snippets/stone-product-card.liquid`
- `project/assets/stone-cart.js`
- `project/assets/stone-drawer.js`
- `project/assets/stone-base.css`
- locale files

Pass/fail gates:

- PASS: Empty cart, full cart, quantity update, remove item, cart note, and RTL totals are tested or documented.
- PASS: Drawer focus trap passes if drawer is included.
- FAIL: Checkout/billing-sensitive behavior is modified without explicit authorization.
- FAIL: Free-shipping progress included without owner market policy approval.

Rollback:

- Revert cart sections/snippets/assets/locales.

## Phase 8: Product Recovery Rails

Candidate files:

- `project/sections/stone-related-products.liquid`
- `project/sections/stone-recently-viewed-products.liquid`
- `project/sections/stone-complementary-products.liquid`
- `project/snippets/stone-product-card.liquid`
- `project/assets/stone-recently-viewed.js`
- `project/assets/stone-carousel.js` if carousel mode is used
- locale files

Pass/fail gates:

- PASS: No-products hidden state exists.
- PASS: Storage-disabled fallback exists for recently viewed.
- PASS: RTL carousel/grid is verified.
- FAIL: Rails depend on preset composition.

Rollback:

- Revert product recovery sections/assets/locales.

## Phase 9: Collection And Search Merchandising

Candidate files:

- `project/sections/stone-main-collection.liquid`
- `project/sections/stone-collection-banner.liquid`
- `project/sections/stone-collection-list.liquid`
- `project/sections/stone-collection-grid-promo-card.liquid`
- `project/sections/stone-main-search.liquid`
- `project/snippets/stone-product-card.liquid`
- `project/snippets/stone-facets.liquid`
- `project/snippets/stone-pagination.liquid`
- `project/assets/stone-base.css`
- locale files

Pass/fail gates:

- PASS: Empty collection, many products, no image, many filters, sort, pagination, and no search results are covered.
- PASS: No app blocks in product-card loops.
- FAIL: Predictive search included before Phase 3B/5 behavior passes.

Rollback:

- Revert collection/search sections/snippets/assets/locales.

## Phase 10: Promotion System

Candidate files:

- `project/sections/stone-promo-banner.liquid`
- `project/sections/stone-promo-tile-grid.liquid`
- `project/sections/stone-promo-popup.liquid`
- `project/sections/stone-discount-bar.liquid`
- `project/sections/stone-countdown-bar.liquid`
- `project/sections/stone-collection-promo-banner.liquid`
- `project/sections/stone-cart-promo-message.liquid`
- `project/assets/stone-modal.js` if popup included
- `project/assets/stone-base.css`
- locale files

Pass/fail gates:

- PASS: Promotion taxonomy maps each placement.
- PASS: Missing image/text fallback exists.
- PASS: Popup has focus trap if included.
- FAIL: Scheduling/audience targeting implemented without policy.

Rollback:

- Revert promotion sections/assets/locales.

## Phase 11: Editorial Commerce

Candidate files:

- `project/sections/stone-shop-the-look.liquid`
- `project/sections/stone-image-hotspot.liquid`
- `project/sections/stone-lookbook.liquid`
- `project/sections/stone-media-grid.liquid`
- `project/sections/stone-slideshow.liquid`
- `project/sections/stone-video.liquid`
- `project/sections/stone-before-after.liquid`
- `project/sections/stone-tabs.liquid`
- `project/sections/stone-timeline.liquid`
- `project/assets/stone-hotspot.js`
- `project/assets/stone-carousel.js`
- `project/assets/stone-tabs.js`
- `project/assets/stone-base.css`
- theme block files only if Phase 4 approved
- locale files

Pass/fail gates:

- PASS: No-media fallback exists.
- PASS: Hotspots keyboard reachable.
- PASS: Slideshow reduced-motion behavior exists.
- PASS: Incremental JS budget is stated.
- FAIL: Theme block sections are implemented before Phase 4 decision.

Rollback:

- Revert editorial sections/assets/blocks/locales.

## Phase 12: Trust, Support, And Content

Candidate files:

- `project/sections/stone-faq.liquid`
- `project/sections/stone-faq-toc.liquid`
- `project/sections/stone-main-contact.liquid`
- `project/sections/stone-newsletter.liquid`
- `project/sections/stone-testimonials-carousel.liquid`
- `project/sections/stone-press-coverage.liquid`
- `project/sections/stone-trust-badge-strip.liquid`
- `project/sections/stone-logo-list.liquid`
- `project/sections/stone-store-location.liquid`
- `project/sections/stone-shipping-delivery-info.liquid`
- `project/sections/stone-featured-blog-posts.liquid`
- `project/sections/stone-related-articles.liquid`
- `project/sections/stone-article-product-callout.liquid`
- `project/snippets/stone-form-errors.liquid`
- `project/assets/stone-accordion.js`
- `project/assets/stone-base.css`
- locale files

Pass/fail gates:

- PASS: Form error/success states are accessible.
- PASS: FAQ keyboard behavior documented.
- PASS: Long Hebrew text tested.
- FAIL: Contact/newsletter forms ship without error handling.

Rollback:

- Revert trust/support/content sections/assets/locales.

## Phase 13: System And Customer Templates

Candidate files:

- `project/sections/stone-main-page.liquid`
- `project/sections/stone-main-cart.liquid`
- `project/sections/stone-main-404.liquid`
- `project/sections/stone-main-contact.liquid`
- `project/sections/stone-main-policy.liquid`
- `project/sections/stone-main-gift-card.liquid`
- `project/sections/stone-main-password.liquid`
- `project/sections/stone-main-list-collections.liquid`
- `project/templates/page.json`
- `project/templates/cart.json`
- `project/templates/404.json`
- `project/templates/password.json`
- `project/templates/gift_card.json` or platform-correct gift card template path
- customer sections/templates only if owner approves
- locale files

Pass/fail gates:

- PASS: Customer templates are excluded unless owner approved.
- PASS: 404, password, gift card, and policy routes have safe fallbacks.
- FAIL: Auth/customer templates are added without decision.

Rollback:

- Revert system/customer sections/templates/locales.

## Phase 14: Advanced And Vertical-Specific Capabilities

Candidate files only if owner approves:

- `project/sections/stone-quick-order-list.liquid`
- `project/sections/stone-product-comparison.liquid`
- `project/sections/stone-age-verifier.liquid`
- `project/sections/stone-back-in-stock.liquid`
- `project/sections/stone-preorder-state.liquid`
- `project/sections/stone-delivery-date-picker.liquid`
- `project/sections/stone-gift-finder.liquid`
- matching assets/locales/snippets

Pass/fail gates:

- PASS: Each advanced feature has an explicit include/exclude decision.
- PASS: Compliance or purchase-state features have policy.
- FAIL: Regulated or purchase-state behavior ships half-defined.

Rollback:

- Revert approved advanced feature files.

## Phase 15: Preset Composition Policy

Candidate files:

- `workspace/specs/preset-composition-policy.md`
- `workspace/specs/template-json-mutation-policy.md`
- `workspace/specs/starter-content-defaults.md`
- `workspace/specs/preset-host-assignment-rules.md`
- `workspace/specs/collection-filter-defaults-by-preset.md`

Pass/fail gates:

- PASS: `UNIT-184` owner inputs are resolved or explicitly overridden.
- PASS: Exact template mutation policy exists.
- FAIL: Any preset JSON mutation occurs before policy approval.

Rollback:

- Revert policy docs.

## Phase 16: Preset Runtime Composition

Candidate files:

- `project/templates/index.json`
- `project/templates/product*.json`
- `project/templates/collection*.json`
- `project/templates/page*.json`
- `project/config/settings_data.json` only if explicitly approved
- locale files only if preset labels/settings require them

Pass/fail gates:

- PASS: Preset composition uses only completed section families.
- PASS: JSON parse passes.
- PASS: Theme Check passes.
- PASS: RTL and Hebrew starter content checks pass.
- FAIL: Presets use blocked section families.
- FAIL: Presets hide missing P0 architecture.

Rollback:

- Revert affected JSON templates/settings only.

## Phase 17: Final Hardening And Release Readiness

Candidate files:

- `workspace/verify/final-section-architecture/**`
- `workspace/reports/final-section-architecture-report.md`
- runtime files only through separate defect-specific derivative units

Pass/fail gates:

- PASS: All P0 rows are `PRESENT` or `INTENTIONALLY_EXCLUDED`.
- PASS: Theme Check passes.
- PASS: JSON/template/config/locales parse.
- PASS: Section and block schemas parse.
- PASS: Shopify upload proof passes against unpublished theme.
- PASS: Home/product/collection Lighthouse average is at least 70 internal target or waiver exists.
- PASS: No critical template is below 60 without waiver.
- FAIL: Any P0 row remains `MISSING`, `PARTIAL`, or `BLOCKED`.

Rollback:

- Revert defect-specific runtime units; keep verification receipts.

## Universal Runtime Unit Requirements

Every derivative runtime unit must include:

- Goal.
- Scope.
- Out of scope.
- Source artifacts read.
- Current repo evidence.
- Control matrix rows affected.
- Exact write set.
- Exact disallowed write set.
- Block model decisions.
- App-block policy impact.
- Accessibility requirements.
- RTL requirements.
- Performance budget.
- Data fallbacks.
- Schema migration review.
- QA commands.
- Manual QA cases.
- Rollback list.
- Authorization required.

Fail-closed conditions:

- Unknown write set.
- Unknown block model.
- Missing owner decision.
- Missing schema migration review.
- App block in static section.
- Mixed section/theme block model.
- Drawer/modal/popover without focus behavior.
- Media-heavy section without performance budget.
- Purchase-critical PDP/cart change without test plan.

## Readiness Verdict

READY FOR DERIVATIVE UNIT PLAN

This document is a roadmap and control plan. It is not sufficient authorization for runtime writes.

Next handoff:

- Create `UNIT-SA-001.v1.md` for docs/spec-only normalization.
- After that passes, create a separate derivative runtime unit plan.
