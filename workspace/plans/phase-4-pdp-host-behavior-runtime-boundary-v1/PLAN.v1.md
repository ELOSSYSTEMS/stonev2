# Phase 4 PDP Host Behavior Runtime Boundary v1

## Status

- `Verified`: This package is seeded for `UNIT-160`.
- `Verified`: It must remain docs-only.
- `Verified`: It must not authorize implementation until it states and verifies one exact future runtime boundary.

## Candidate Boundary To Decide

- `Inference`: The likely future implementation boundary is one no-JS PDP host proof using `project/templates/product.json`, one main product section, shared CSS, and bilingual locale keys.
- `Inference`: The likely admissible behavior is product title, product metadata, product media display, price, variant selector when variants exist, no-JS Shopify product form, description, unavailable/sold-out messaging, and basic trust copy only if it can stay static and local to the main section.

## Blocked Until Separately Reopened

- `Verified`: PDP companion sections.
- `Verified`: Recommendation and complementary-product logic.
- `Verified`: AJAX cart, cart drawer behavior, quick add, quick view, subscriptions, pickup/inventory complexity, dynamic media galleries, search, preset realization, and hardening.

## Required Output

- `Verified`: `UNIT-160` must either state one exact runtime file boundary for a later implementation unit or stop in a governed block.
