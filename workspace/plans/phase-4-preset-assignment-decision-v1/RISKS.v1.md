# Phase 4 Preset Assignment Decision Risks v1

1. `Verified`: Runtime preset composition without exact template mutation policy could overwrite shared templates incorrectly.
2. `Verified`: Runtime preset composition without starter content could create empty or misleading sections.
3. `Inference`: Treating the global preset selector as a runtime composer without a defined mechanism would create confusing behavior.
4. `Inference`: Hard-coding filter differences by preset would conflict with Shopify's native merchant-configured filter model.
5. `Verified`: The mitigation is to stop at a hard block until owner inputs are supplied or explicitly overridden.
