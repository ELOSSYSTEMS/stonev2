# Phase 4 Preset Assignment Decision v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows the preset capability composition boundary.
- `Verified`: It does not authorize runtime edits.
- `Verified`: It records the current hard block for runtime preset composition.

## Decision Inputs

- `Verified`: The active preset values are `jewelry`, `apparel`, `electronics`, `beauty`, and `home_lifestyle`.
- `Verified`: `stone-pdp-size-chart` exists as a shared optional PDP section.
- `Verified`: `stone-pdp-spec-sheet` exists as a shared optional PDP section.
- `Verified`: `stone-main-collection` exposes native Shopify collection filters through a shared `show_filters` setting.
- `Verified`: Existing reusable utility, story, merchandising, shoppable media, and trust/support sections remain shared.

## Docs-Only Assignment Decision

| Preset | PDP Size Chart | PDP Spec Sheet | Collection Filters | Decision |
| --- | --- | --- | --- | --- |
| `jewelry` | Omit | Omit by default | Available through shared filter surface | Keep PDP lean; use existing trust/story/merchandising sections first. |
| `apparel` | Include | Omit | Available through shared filter surface | Apparel is the first preset assigned to size-chart capability. |
| `electronics` | Omit | Include | Available through shared filter surface | Electronics is the first preset assigned to spec-sheet capability. |
| `beauty` | Omit | Omit by default | Available through shared filter surface | Use existing rich text, key-value, FAQ, and notice surfaces for ingredients, routines, or usage notes first. |
| `home_lifestyle` | Omit | Omit by default | Available through shared filter surface | Use existing story, merchandising, key-value, and trust sections first; spec sheet requires later evidence. |

## Collection Filter Decision

- `Verified`: Collection filters remain one shared native capability.
- `Verified`: All presets may use `show_filters` later.
- `Verified`: Preset-specific filter emphasis depends on Shopify filter configuration and is not hard-coded in theme architecture.
- `Inference`: Apparel likely needs size, color, material, availability, and price filters when configured.
- `Inference`: Electronics likely needs price, availability, vendor, product type, and configured spec metafield filters when configured.
- `Inference`: Jewelry, beauty, and home-lifestyle can use configured Shopify filters without separate theme architectures.

## Runtime Hard Block

- `Verified`: Runtime preset composition is still blocked.
- `Verified`: Exact template JSON mutation policy is still missing.
- `Verified`: Exact starter content payloads are still missing.
- `Verified`: Exact per-preset section order and section settings are still missing.
- `Verified`: Exact policy for whether one shared template or separate preset starter templates should host assignments is still missing.
- `Verified`: The current repo does not have an approved runtime boundary that can safely mutate product or collection templates per preset.

## Required Owner Inputs To Unblock Runtime

1. `Verified`: Approve whether runtime preset composition should mutate existing shared templates or create separate starter template variants.
2. `Verified`: Approve exact per-preset PDP section order and default section settings.
3. `Verified`: Approve exact per-preset collection section order and filter defaults.
4. `Verified`: Provide or approve starter content defaults for size charts, spec sheets, and collection filter presentation.
5. `Verified`: Approve whether the existing global preset selector should remain descriptive only or drive runtime defaults.

## Non-Scope

- `Verified`: No runtime edits.
- `Verified`: No product template mutation.
- `Verified`: No collection template mutation.
- `Verified`: No per-preset template files.
- `Verified`: No per-preset section files.
- `Verified`: No JavaScript filtering or predictive search.
- `Verified`: No product-card edits.
- `Verified`: No recommendations, cart, checkout, billing-sensitive behavior, or hardening.

## Final Verdict

- `Verified`: Assignment decisions are documented at capability level.
- `Verified`: Runtime preset composition is blocked until owner inputs above are supplied or explicitly overridden.
- `Inference`: The autonomous lane should stop here because the next action would require product-owner decisions, not more repo discovery.
