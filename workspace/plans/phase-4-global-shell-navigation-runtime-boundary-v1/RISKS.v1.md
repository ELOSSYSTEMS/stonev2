# Phase 4 Global Shell And Navigation Runtime Boundary Risks v1

1. `Inference`: A shell boundary could become too broad if it includes search results, predictive search, cart drawer behavior, or collection navigation semantics.
2. `Inference`: Adding JS too early could expand the implementation surface beyond a proof slice.
3. `Inference`: Locale-switch work could become a full localization architecture decision instead of a shell surface.
4. `Verified`: The mitigation is to require exact future runtime files, explicit blocked surfaces, and harness checks before implementation.
