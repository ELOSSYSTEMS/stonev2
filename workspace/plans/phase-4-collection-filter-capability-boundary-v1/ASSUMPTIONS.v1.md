# Phase 4 Collection Filter Capability Boundary Assumptions v1

- `Verified`: Existing collection host already has sort and pagination.
- `Verified`: Existing collection host does not render native filters.
- `Verified`: Preset-specific collection composition remains deferred.
- `Inference`: Native Shopify filters are the safest first collection filter capability because they preserve Liquid-first and no-JS constraints.
- `Inference`: Presets can later differ by which collections and filter structures they emphasize after the shared filter capability exists.
