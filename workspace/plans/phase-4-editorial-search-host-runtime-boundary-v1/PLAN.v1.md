# Phase 4 Editorial Search Host Runtime Boundary v1

## Status

- `Verified`: This package is seeded for `UNIT-164`.
- `Verified`: It must remain docs-only.
- `Verified`: It must not authorize implementation until it states and verifies one exact future runtime boundary.

## Candidate Boundary To Decide

- `Inference`: The likely future implementation boundary is canonical `blog.json`, `article.json`, and `search.json` hosts, paired with one main blog section, one main article section, one main search section, shared CSS, and bilingual locale keys.
- `Inference`: The likely admissible behavior is no-JS host rendering, native pagination, basic empty states, and reuse of Shopify-provided blog/article/search objects.

## Blocked Until Separately Reopened

- `Verified`: Predictive search.
- `Verified`: Search suggestions, search merchandising, and JavaScript result behavior.
- `Verified`: Broader editorial-family growth, campaign journals, cart, preset realization, and hardening.

## Required Output

- `Verified`: `UNIT-164` must either state one exact runtime file boundary for a later implementation unit or stop in a governed block.
