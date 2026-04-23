# Phase 4 Editorial Search Host Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-163` admitted this package as the only next editorial/search lane.
- `Verified`: This package states one exact later runtime proof boundary.

## Exact Future Runtime Boundary

- `Verified`: `project/templates/blog.json`
- `Verified`: `project/templates/article.json`
- `Verified`: `project/templates/search.json`
- `Verified`: `project/sections/stone-main-blog.liquid`
- `Verified`: `project/sections/stone-main-article.liquid`
- `Verified`: `project/sections/stone-main-search.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Admissible Runtime Behavior For Later Proof

- `Verified`: One canonical blog host with blog title, article list, excerpt/content fallback, optional article image, and native pagination.
- `Verified`: One canonical article host with article title, metadata when present, featured image, article content, and a simple blog return link when available.
- `Verified`: One canonical search host with a no-JS search form, search terms, result count, result links, empty state, and native pagination.
- `Verified`: Shared CSS support only in `stone-base.css`.
- `Verified`: Bilingual editor labels and UI strings only in the two locale files.
- `Verified`: No JavaScript, no predictive search, no search suggestions, and no search merchandising.

## Blocked Until Separately Reopened

- `Verified`: Predictive search.
- `Verified`: Search suggestions and JavaScript result behavior.
- `Verified`: Search merchandising or promoted-result logic.
- `Verified`: Broader editorial-family growth, campaign journals, cart, preset realization, and hardening.

## Decision

- `Verified`: Admit only `UNIT-165` as the exact nine-file no-JS editorial/search host runtime proof.
- `Verified`: Require verification after `UNIT-165` before any predictive-search, editorial expansion, preset, or hardening lane can reopen.
