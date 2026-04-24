# Phase 4 Collection Filter Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows `UNIT-178` collection/filter capability boundary.
- `Verified`: It does not authorize runtime edits by itself.

## Evidence

- `Verified`: Shopify exposes storefront filters through the Liquid `collection.filters` surface.
- `Verified`: `stone-main-collection` already owns the collection host, sort form, product grid, and pagination.

## Exact Future Runtime Files

- `Verified`: `project/sections/stone-main-collection.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `project/locales/he.default.schema.json`

## Runtime Contract

- `Verified`: Add native no-JS collection filters to `stone-main-collection`.
- `Verified`: Add a `show_filters` setting.
- `Verified`: Render filters only when `collection.filters` has filters and `show_filters` is true.
- `Verified`: Preserve current sort behavior.
- `Verified`: Preserve current product grid behavior and `stone-product-card` usage.
- `Verified`: Add active-filter display and reset/apply controls.
- `Verified`: Add neutral CSS for the filter surface.
- `Verified`: Add bilingual labels.

## Filter Type Scope

- `Verified`: Support `list` and `boolean` filters through native checkbox inputs.
- `Verified`: Support `price_range` filters through native min/max number inputs.
- `Verified`: Preserve active values using Shopify filter value state.
- `Verified`: Do not implement custom filtering logic.

## Protected Surfaces

- `Verified`: No template edits.
- `Verified`: No product-card snippet edit.
- `Verified`: No JavaScript edit.
- `Verified`: No predictive search, search suggestions, search merchandising, recommendations, cart, checkout, billing-sensitive behavior, or hardening.
- `Verified`: No final preset assignment.

## Verification Requirements

- `Verified`: Confirm only the exact four runtime files changed.
- `Verified`: Parse locale JSON.
- `Verified`: Parse `stone-main-collection` section schema.
- `Verified`: Confirm locale parity for `sections.stone_main_collection`.
- `Verified`: Confirm no diff for templates, snippets, `project/assets/stone-runtime.js`, or `stone-product-card`.
- `Verified`: Run required harness checks.

## Next Unit Boundary

- `Verified`: If this package passes, the next unit may implement only the exact four-file no-JS collection filter proof.

## Readiness Verdict

- `Verified`: READY as a docs-only collection filter runtime boundary.
- `Inference`: The next honest unit is the exact four-file no-JS implementation proof.
