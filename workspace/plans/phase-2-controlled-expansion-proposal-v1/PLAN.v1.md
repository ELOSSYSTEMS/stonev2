# Phase 2 Controlled Expansion Proposal v1

## Status

- `Verified`: This package is a documentation-only controlled-expansion proposal.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to recommend one bounded rule change after the current micro-slice runway was judged locally exhausted.

## Compared Options

### Option A, allow one object-aware content/blog proof

- `Inference`: Permit one bounded content-and-blog section to read from one selected blog handle or one bounded article list source inside the section file.
- `Inference`: Keep runtime scope otherwise narrow: one section, one template, one CSS file, two locale files, no JS, no protected surfaces, no snippets, no blocks.
- `Inference`: This directly solves the distinctness failure that blocked the rejected blog-highlights slice.

### Option B, allow one collection-companion proof with limited page-context assumptions

- `Inference`: Permit one bounded collection-context section with carefully limited collection assumptions.
- `Inference`: This still risks weak distinctness if hosted on a neutral page, or stronger template-context coupling if hosted on collection surfaces.

### Option C, allow one merchandising proof with a stricter product-card boundary

- `Inference`: Permit one bounded merchandising section while keeping product-card scope narrow.
- `Inference`: This is higher risk because merchandising semantics and product-card expectations are heavier than the rejected blog-highlights expansion.

### Option D, pause runtime work and move directly to a broader Phase 3 package

- `Inference`: This is the most conservative path.
- `Inference`: It avoids risk but also postpones useful proof work that can likely still be done under one carefully chosen expansion.

## Recommendation

- `Verified`: **Recommend Option A.**
- `Inference`: The next controlled expansion should allow one object-aware content-and-blog proof because it is the smallest honest rule change that unlocks a genuinely new structure without forcing commerce-heavy or template-heavy semantics.

## Proposed Rule Change

- `Verified`: Keep the existing one-section, one-template, five-runtime-file discipline.
- `Verified`: Keep JS disallowed.
- `Verified`: Keep protected surfaces disallowed.
- `Verified`: Keep `project/blocks/` and new snippets disallowed.
- `Inference`: Allow one bounded section to perform read-only Liquid access to one blog object selected by an explicit section setting or fixed bounded source.
- `Inference`: Allow that section to render a restrained lead article plus a short secondary article list, or another equally bounded article-teaser structure.
- `Verified`: Do not allow filtering systems, tags, search, drawers, sliders, overlays, pagination, or campaign composition in that first expanded proof.

## Intended Next Runtime Frontier If Approved

- `Inference`: A future bounded implementation could target one object-aware content/blog proof such as:
  - one lead article teaser plus two secondary teasers
  - one restrained article strip sourced from a selected blog handle
- `Verified`: That future runtime work should still remain inside one section file, one host template, `project/assets/stone-base.css`, and paired locale updates.

## Why This Is Safer Than The Alternatives

1. `Inference`: It addresses the exact reason blog-highlights failed, namely lack of structural distinctness without live content semantics.
2. `Inference`: It is still lighter than merchandising, shoppable-media, collection-context, or PDP-context expansion.
3. `Inference`: It preserves the current shell, CSS, locale, and non-JS discipline while introducing only one narrow new capability: read-only object awareness.

## Required Constraints For The Future Approved Slice

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No edits to `project/snippets/stone-section-shell.liquid`.
- `Verified`: No files under `project/blocks/`.
- `Verified`: No new snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No pagination, filters, tags, search, sliders, drawers, overlays, or modals.
- `Verified`: No product-card behavior, no commerce actions, and no cart semantics.

## Stop Conditions For The Future Approved Slice

- `Verified`: Stop if object-aware content/blog proof starts requiring protected-surface edits, JS, more than one section, more than one template, block files, snippet files, or broader editorial composition.
- `Verified`: Stop if the implementation drifts into merchandising, collection companion, PDP companion, or campaign behavior.
- `Verified`: Stop if the proof cannot remain meaningfully bounded after introducing the object-aware rule.

## Readiness Verdict

- `Verified`: READY as a docs-only proposal.
- `Inference`: The next governed unit after this proposal should remain docs-only unless this controlled-expansion direction is explicitly accepted into the next approved action boundary.
