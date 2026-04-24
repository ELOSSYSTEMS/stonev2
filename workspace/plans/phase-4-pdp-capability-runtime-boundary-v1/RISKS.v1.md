# Phase 4 PDP Capability Runtime Boundary Risks v1

1. `Inference`: Editing `product.json` would silently assign these capabilities before preset composition is decided.
2. `Inference`: Fit calculations or compatibility logic could turn static sections into product-decision engines.
3. `Inference`: Spec sheet work could expand into metafield architecture without approval.
4. `Inference`: Size chart work could imply apparel-only architecture if the section is not shared.
5. `Verified`: The mitigation is exact file scope, no template mutation, no JavaScript, no metafield work, and shared section naming.
