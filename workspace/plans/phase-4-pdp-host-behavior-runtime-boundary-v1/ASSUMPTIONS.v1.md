# Phase 4 PDP Host Behavior Runtime Boundary Assumptions v1

- `Verified`: `UNIT-159` admits only docs-only boundary authoring.
- `Verified`: The current project has no canonical `product.json` host.
- `Verified`: The current project has no product-form or cart-add form path.
- `Inference`: A no-JS Shopify product form is the narrowest viable commerce behavior if implementation is later admitted.
- `Inference`: Product media should start as static rendering before any interactive gallery behavior.
- `Inference`: PDP support context can wait because existing product-supporting primitives are not a substitute for a canonical product host.
