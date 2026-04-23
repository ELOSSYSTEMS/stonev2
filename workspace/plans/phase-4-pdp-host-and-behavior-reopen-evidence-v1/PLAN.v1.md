# Phase 4 PDP Host And Behavior Reopen Evidence v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-158` verified the homepage, shell/navigation, and collection host/product-grid lanes strongly enough that PDP host absence is now the strongest remaining structural blocker.
- `Verified`: This package does not authorize runtime edits by itself.

## Evidence

- `Verified`: `project/templates/product.json` does not exist.
- `Verified`: Product-supporting sections already exist as reusable primitives: `stone-featured-product-showcase.liquid`, `stone-product-context-card.liquid`, `stone-product-pair-comparison.liquid`, and `stone-curated-product-trio.liquid`.
- `Verified`: `project/snippets/stone-product-card.liquid` exists and is read-oriented; it links to products but does not include a product form.
- `Verified`: Literal searches over `project/` found no `product-form`, `/cart/add`, `form 'product'`, or variant-id input pattern.
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` keeps PDP companion distinct from homepage-first storytelling and identifies PDP companion as reassurance, recommendation, complementary, and product-detail support.
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` treats PDP support behavior, recommendation behavior, trust cue behavior, and cart/search entry behavior as separate settings domains.

## Option A: Keep PDP Blocked

- `Inference`: Keeping PDP blocked would preserve maximum safety, but it would leave the theme without a canonical product host after homepage, shell, and collection hosts are now verified.
- `Inference`: This is too conservative for the current frontier because the missing surface is identifiable and can be narrowed to product host/product-form proof before companion behavior.

## Option B: Narrow PDP Host And Behavior Reopen

- `Verified`: This option admits only a later docs-only runtime-boundary package.
- `Inference`: The narrow lane should cover one canonical product host, one main product section, product title/metadata/media, price, variant selection if available, a standard no-JS Shopify product form, description, sold-out/unavailable messaging, and bilingual labels.
- `Inference`: This is the strongest next lane because it addresses the missing PDP host without treating deferred PDP companion behavior as resolved.

## Option C: Broad PDP Reopen

- `Inference`: Broad PDP reopen would combine product host, media interaction, AJAX cart, recommendations, complementary products, reassurance strips, comparison context, subscriptions, pickup/inventory complexity, and broader companion behavior.
- `Verified`: This option is rejected because prior state explicitly deferred PDP companion work and no current evidence resolves the full support/recommendation/cart behavior domain.

## Decision

- `Verified`: Admit only `UNIT-160` as a docs-only PDP host/behavior runtime-boundary package.
- `Verified`: Do not authorize direct PDP implementation from this package.
- `Verified`: Keep `PDP companion`, recommendations, complementary products, AJAX cart, dynamic cart drawer behavior, subscriptions, pickup/inventory complexity, search, preset realization, and hardening blocked.

## Acceptance Criteria

1. `Verified`: Compare keep-blocked, narrow PDP reopen, and broad PDP reopen.
2. `Verified`: Record that only a later docs-only PDP host/behavior runtime boundary is admitted.
3. `Verified`: Keep `PDP companion`, wider JavaScript, heavier commerce, recommendations, cart drawer behavior, search, preset, and hardening blocked.
4. `Verified`: Verify that no `project/` runtime files changed.

## Intended Next Step

- `Verified`: Execute `UNIT-160` only as docs-only PDP host/behavior runtime-boundary authoring.
