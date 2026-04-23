# Phase 4 Editorial And Search Host Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: Homepage, shell/navigation, collection, and PDP host proofs are now verified enough that editorial/search hosts are the strongest missing structural surface.
- `Verified`: This package does not authorize runtime edits by itself.

## Evidence

- `Verified`: `project/templates/blog.json` does not exist.
- `Verified`: `project/templates/article.json` does not exist.
- `Verified`: `project/templates/search.json` does not exist.
- `Verified`: The existing shell header includes a no-JS search form that submits to `routes.search_url`.
- `Verified`: `project/sections/stone-blog-article-highlights.liquid` exists as a reusable object-aware editorial primitive.
- `Verified`: `project/templates/page.stone-runtime-blog-article-highlights.json` exists as a proof host for that primitive, but it is not a canonical blog or article host.
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` identifies content/blog and story/editorial as editorial/blog-supporting families.
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` treats search entry behavior as a shell/utility domain, not as predictive-search behavior.

## Exact Host Needs

- `Verified`: Blog needs a canonical host that can display blog title, article list, excerpts, dates/authors if present, and pagination.
- `Verified`: Article needs a canonical host that can display title, metadata, featured image, content, and a simple return-to-blog path.
- `Verified`: Search needs a canonical host that can display the search query form, result count, product/article/page result links if Shopify provides them, empty state, and pagination.

## Option A: Keep Editorial/Search Blocked

- `Inference`: Keeping editorial/search blocked would preserve maximum scope safety, but the remaining missing host files are now concrete and narrow.
- `Inference`: This option is too conservative after verified homepage, shell, collection, and PDP hosts.

## Option B: Narrow Editorial/Search Host Reopen

- `Verified`: This option admits only a later docs-only runtime-boundary package.
- `Inference`: The narrow lane should cover canonical blog, article, and search hosts without predictive search, new editorial families, or JavaScript.
- `Inference`: This is the strongest next lane because it completes remaining canonical content/search hosts while preserving the existing shell search boundary.

## Option C: Broad Editorial/Search Expansion

- `Inference`: Broad expansion would combine blog/article/search hosts, predictive search, editorial family growth, campaign journals, search merchandising, and navigation behavior.
- `Verified`: This option is rejected because current evidence only justifies host completion, not predictive-search behavior or broader editorial system growth.

## Decision

- `Verified`: Admit only `UNIT-164` as a docs-only editorial/search host runtime-boundary package.
- `Verified`: Do not authorize direct editorial/search implementation from this package.
- `Verified`: Keep predictive search, broader editorial-family expansion, search merchandising, cart, preset realization, and hardening blocked.

## Acceptance Criteria

1. `Verified`: Record exact blog, article, and search host needs.
2. `Verified`: Record reusable existing editorial primitives.
3. `Verified`: Keep predictive-search behavior and broader editorial-family expansion out of scope.
4. `Verified`: Verify that no `project/` runtime files changed.

## Intended Next Step

- `Verified`: Execute `UNIT-164` only as docs-only editorial/search host runtime-boundary authoring.
