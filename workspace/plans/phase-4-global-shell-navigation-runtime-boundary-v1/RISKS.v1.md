# Phase 4 Global Shell And Navigation Runtime Boundary Risks v1

1. `Inference`: A shell implementation could become too broad if it includes search results, predictive search, cart drawer behavior, or collection navigation semantics.
2. `Inference`: Adding JavaScript too early could expand the implementation surface beyond a proof slice.
3. `Inference`: Locale-switch work could become a full localization architecture decision instead of a shell surface.
4. `Verified`: The mitigation is the exact seven-file runtime boundary and explicit blocked surfaces.
5. `Verified`: Any need outside the seven files is a stop condition for replanning.
