# Phase 4 Preset Capability Composition Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows verified shared PDP size-chart/spec-sheet capability and verified shared collection filter capability.
- `Verified`: It does not authorize runtime edits or final preset assignment.

## Stabilized Capability Inputs

- `Verified`: The active preset values are `jewelry`, `apparel`, `electronics`, `beauty`, and `home_lifestyle`.
- `Verified`: `stone-pdp-size-chart` exists as a shared optional PDP section.
- `Verified`: `stone-pdp-spec-sheet` exists as a shared optional PDP section.
- `Verified`: `stone-main-collection` now has a shared optional native Shopify filter surface controlled by `show_filters`.
- `Verified`: The preset selector exists, but it does not assign sections, blocks, collection filters, or content.

## Composition Rule

- `Verified`: Presets may differ by choosing from shared capabilities.
- `Verified`: Presets must not differ by creating separate preset-specific templates or section architectures in this lane.
- `Verified`: Shared capability availability must remain separate from final preset assignment.
- `Verified`: Final preset composition remains deferred until a later assignment package states exact template and section mutations.

## Preset Capability Map

| Preset | PDP Size Chart | PDP Spec Sheet | Collection Filters | Boundary Verdict |
| --- | --- | --- | --- | --- |
| `jewelry` | `Verified`: Omit by default later unless sizing evidence is supplied | `Inference`: Usually omit, but can reuse spec sheet for material/stone details if later justified | `Verified`: Shared filters are available, final filter emphasis deferred | Eligible for restrained PDP and collection composition later |
| `apparel` | `Verified`: Candidate default capability | `Verified`: Omit by default later unless product evidence justifies specs | `Inference`: Candidate filters include size, color, material, availability, and price when Shopify filters are configured | Eligible for apparel-specific PDP and collection differences later |
| `electronics` | `Verified`: Omit by default later | `Verified`: Candidate default capability | `Inference`: Candidate filters include price, availability, vendor, product type, and configured spec metafields | Eligible for electronics-specific PDP and collection differences later |
| `beauty` | `Verified`: Omit by default later | `Inference`: Usually omit; ingredients or usage notes should reuse existing rich text, key-value, FAQ, or notice surfaces first | `Inference`: Candidate filters include concern, product type, availability, and price when configured | Eligible for beauty-specific composition later, but no new beauty-only section is admitted |
| `home_lifestyle` | `Verified`: Omit by default later | `Inference`: Possible for dimensions/materials if later evidence justifies it; not a default in this boundary | `Inference`: Candidate filters include room, material, availability, vendor, and price when configured | Eligible for home-specific composition later, but no final defaults are assigned |

## Allowed Future Assignment Questions

- `Verified`: Which presets include `stone-pdp-size-chart` in product templates.
- `Verified`: Which presets include `stone-pdp-spec-sheet` in product templates.
- `Verified`: Whether collection `show_filters` defaults should differ by preset.
- `Verified`: Which existing reusable homepage, PDP, and collection-adjacent sections belong in each preset starter composition.
- `Verified`: Which starter content is required before template JSON mutation is safe.

## Still Blocked

- `Verified`: No runtime edits in this unit.
- `Verified`: No final preset assignment.
- `Verified`: No product template mutation.
- `Verified`: No collection template mutation.
- `Verified`: No per-preset templates.
- `Verified`: No per-preset section files.
- `Verified`: No product-card edits.
- `Verified`: No JavaScript filtering or predictive search.
- `Verified`: No recommendations, cart, checkout, billing-sensitive behavior, or hardening.

## Next Unit Boundary

- `Verified`: The next unit may stay docs-only and author a preset assignment decision package, or stop if final assignment requires owner approval.
- `Verified`: Any future assignment package must name exact preset-to-section choices, exact template JSON mutation policy, exact starter content assumptions, and exact protected-surface checks before runtime work.
- `Verified`: Runtime preset composition remains blocked until that later package exists and passes.

## Readiness Verdict

- `Verified`: READY as a docs-only preset capability composition boundary.
- `Inference`: The next honest unit is a docs-only preset assignment decision package, unless the owner wants to approve final composition manually first.
