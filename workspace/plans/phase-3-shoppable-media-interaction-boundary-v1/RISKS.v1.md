# Phase 3 Shoppable Media Interaction Boundary Risks v1

1. `Inference`: Interaction-aware shoppable media can sprawl quickly into drawers, overlays, or broader substrate changes if the boundary is vague.
2. `Inference`: Allowing JS without an exact local scope would weaken the governed protocol.
3. `Verified`: The mitigation is to allow JS only in `project/assets/stone-runtime.js`, keep interaction local to one section, reuse `stone-product-card` unchanged, and fail closed on any heavier interaction pattern.
