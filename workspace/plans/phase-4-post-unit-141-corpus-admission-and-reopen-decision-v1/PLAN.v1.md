# Phase 4 Post-UNIT-141 Corpus Admission And Reopen Decision v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It inspects the local `shopify_theme_dom/` corpus and the current `project/` runtime surface.
- `Verified`: It does not authorize runtime edits.
- `Verified`: It must answer one exact decision question: is `shopify_theme_dom/` sufficient fresh canonical evidence to reopen one exact next lane after `UNIT-141`?

## Plain-English Decision

- `Verified`: `shopify_theme_dom/` is fresh local evidence and it is strong enough to admit into canon as reference material.
- `Verified`: It is **not** strong enough to reopen one exact next lane now.
- `Verified`: The honest result of `UNIT-142` is to remain paused after admitting the corpus as evidence.
- `Verified`: No later unit is approved from this package.

## Evidence Summary

- `Verified`: The corpus now covers 9 store captures with 9 homepage captures, 163 collection JSON page captures, 477 product JSON page captures, 186 blog JSON page captures, 316 page JSON captures, 3 search JSON captures, and 2 policy JSON captures under `shopify_theme_dom/`.
- `Verified`: Sample homepage evidence is concrete rather than abstract. For example, `shopify_theme_dom/dynamic-preview/home-elements.json` records a 22-section homepage with a collection slider, hero slideshow, category grid, featured collection sections, and an image banner.
- `Verified`: The current runtime already has reusable section primitives across homepage-supporting and supporting families, including `stone-featured-collection-grid`, `stone-featured-product-showcase`, `stone-story-split`, `stone-trust-*`, `stone-shoppable-media-*`, `stone-category-*`, and `stone-utility-*`.
- `Verified`: The current runtime does **not** have any canonical Shopify host templates in `project/templates/`; `index.json`, `collection.json`, `product.json`, `blog.json`, `article.json`, `search.json`, `list-collections.json`, and `cart.json` are all absent.
- `Verified`: The current runtime instead has 33 `page.stone-runtime*.json` validation templates, which proves section-level runtime slices and neutral page hosts, not live homepage, collection, PDP, editorial, or search host admission.
- `Verified`: `UNIT-139` and `UNIT-140` remain the governing frontier for presets: Stone V2 has an admitted homepage-only preset composition/defaults contract and still fails closed on collection/PDP behavior and starter-structure domains.

## Option Comparison

### Option A, remain paused after admitting the corpus as evidence

- `Verified`: This is the recommended outcome.
- `Inference`: It matches the actual evidence because the corpus adds breadth across many surfaces, but it still does not reduce the decision to one exact host lane with a stronger basis than the alternatives.
- `Inference`: It preserves the homepage-only preset composition/defaults contract from `UNIT-139` and `UNIT-140` without pretending that the corpus converted that contract into host-surface authorization.

### Option B, reopen homepage-first only

- `Inference`: This is the closest viable candidate, not an approved next lane.
- `Verified`: The corpus does contain homepage evidence across all 9 captured stores.
- `Inference`: Even so, the current runtime still lacks `index.json` and every other canonical host template, and the corpus does not by itself prove one exact homepage host boundary, one exact file list, or one exact homepage-first admission path strongly enough to outrank the pause option.
- `Verified`: Rejected for now.

### Option C, reopen collection or PDP directly

- `Verified`: This fails the unit.
- `Verified`: The corpus is even denser on collection and PDP than on homepage, which makes this option broader and riskier, not narrower.
- `Verified`: `collection companion`, `PDP companion`, `collection behavior`, `PDP support behavior`, `collection-template starter structure`, and `PDP-template starter structure` all remain explicitly blocked from the earlier frontier.
- `Verified`: Rejected.

## Governed Decision

- `Verified`: Admit `shopify_theme_dom/` now as fresh canonical evidence for later review work.
- `Verified`: Do not treat the corpus audit, corpus size, or pre-authored later packages as runtime authorization.
- `Verified`: Do not reopen homepage-first runtime admission, collection host work, or PDP host work from this package.
- `Verified`: Do not approve any later unit from this package.

## Admitted Now

- `Verified`: The local corpus is admitted as fresh evidence for homepage, collection, PDP, editorial/page, search, and policy surface comparison.
- `Verified`: The corpus proves Stone V2 now has a broader real-theme reference base than it had at the `UNIT-141` pause.
- `Verified`: The corpus can be used later to test whether a future proposed lane is actually narrower than the rest of the frontier.

## Still Blocked

- `Verified`: `collection companion`
- `Verified`: `PDP companion`
- `Verified`: `collection behavior`
- `Verified`: `PDP support behavior`
- `Verified`: `collection-template starter structure`
- `Verified`: `PDP-template starter structure`
- `Verified`: Homepage runtime admission
- `Verified`: Collection host and behavior reopen
- `Verified`: PDP host and behavior reopen
- `Verified`: Global shell and navigation reopen
- `Verified`: Editorial and search host work
- `Verified`: Preset-pack realization
- `Verified`: Phase 5 hardening and launch-readiness planning
- `Verified`: Any runtime work in `project/`

## Mandatory Decision Question

- `Verified`: **Answer: No.** `shopify_theme_dom/` is sufficient fresh canonical evidence to admit into the corpus, but it is **not** sufficient to reopen one exact next lane after `UNIT-141`.

## Exact Next Lane

- `Verified`: No exact next lane is approved.
- `Inference`: If narrower evidence appears later, the homepage-first host lane is still the closest candidate, but `UNIT-142` does not approve it.

## Readiness Verdict

- `Verified`: READY as a docs-only corpus-admission and no-reopen decision package.
- `Verified`: NOT READY to execute, plan further, or authorize `UNIT-143` or any later unit.
