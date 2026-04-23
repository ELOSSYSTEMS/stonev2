# Phase 4 Global Shell And Navigation Runtime Proof Risks v1

1. `Inference`: Header/footer implementation could accidentally add search results, cart drawer, account, or collection behavior.
2. `Inference`: Locale switch markup could become too ambitious if it tries to solve localization strategy rather than rendering available Shopify locales.
3. `Verified`: The mitigation is the exact seven-file boundary, no-JS rule, and blocked-surface checks.
