# Phase 3 Collection Support Strip Boundary v1

## Status

- `Verified`: This package is documentation-only.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to determine whether one exact `collection support strip` boundary can be defined as the first narrowed collection-companion lane without reopening broader collection systems.

## Compared Options

### Option A, define one exact docs-only `collection support strip` boundary and continue only to a runtime-readiness planning proposal

- `Inference`: This keeps the lane narrow enough to honor `UNIT-129` while still refusing direct runtime authorization.
- `Inference`: It lets the repo state one exact support-strip distinctness case before deciding whether a later implementation-facing boundary is justified at all.
- `Inference`: It also gives the next step a precise question set around collection-page context, visibility vocabulary, and strip-vs-banner/editorial distinctness.

### Option B, jump directly from `UNIT-130` to a runtime-facing collection support strip implementation boundary

- `Inference`: This would move too quickly from narrowed lane selection to implementation approval.
- `Inference`: The family ledger and settings taxonomy still leave unresolved whether support-strip behavior is collection-context-aware, editor-authored, or hybrid, and whether `support-strip visibility` can be referenced without dragging in broader collection behavior.
- `Inference`: A direct runtime boundary here would make it too easy to smuggle collection-template rewrites, archive controls, navigation behavior, banner framing, or merchandising vocabulary into approval.

### Option C, define `collection support strip` loosely enough to include banner, explainer, or navigation behavior

- `Inference`: This would defeat the point of narrowing.
- `Inference`: It would reopen the exact surfaces `UNIT-129` explicitly kept blocked: collection-banner authority, curated-explainer/editorial drift, and navigation-system behavior.

### Option D, fail closed and refuse to define any exact support-strip boundary yet

- `Inference`: This is the safest fallback.
- `Inference`: It is not the strongest evidence-based choice because the repo now has enough normalized family evidence to define one exact support-strip distinctness case at the docs-only level even though runtime remains blocked.

## Recommendation

- `Verified`: **Recommend Option A.**
- `Inference`: One exact docs-only `collection support strip` boundary can now be defined, but the next honest move remains another docs-only proposal rather than implementation authorization.

## Exact Boundary Verdict

- `Verified`: Stone V2 now has enough evidence to define one exact `collection support strip` boundary as the first narrowed collection-companion lane.
- `Verified`: The exact boundary is justified only at the docs-only planning level.
- `Verified`: Runtime authorization still fails closed in this unit.
- `Inference`: The exact support-strip lane is narrow enough only when it is treated as a compact collection-page-first support band rather than as banner framing, curated editorial explanation, navigation control, or merchandising extension.

## Why This Exact Boundary Can Be Defined

1. `Verified`: `docs/architecture/stonev2-build-roadmap.md` still places `collection and PDP companion systems` in Phase 3 before preset-pack work, so the family still requires bounded planning resolution.
2. `Verified`: `docs/architecture/stonev2-section-block-platform.md` explicitly names `collection support strips` inside companion-family coverage rather than only naming banners or recommendation rails.
3. `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` keeps `collection companion` separate from merchandising and `PDP companion`, names `collection support strip` explicitly, and constrains the family to wrapper-like building blocks such as `heading`, `richtext`, `button group`, `trust cue`, `feature-detail`, `divider`, and `spacer`.
4. `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` gives the collection-support-strip lane one direct taxonomy hook through `support-strip visibility` while also showing why broader `collection behavior` must stay fail-closed.
5. `Verified`: `UNIT-071` through `UNIT-074` already proved that a lighter collection-aware support surface can exist without becoming archive behavior, merchandising, or broader template rewrites.
6. `Verified`: `UNIT-128` and `UNIT-129` established that the family may reopen only through a collection-first docs-only narrowing and that `collection support strip` is the only lane distinct enough to test next.
7. `Inference`: Together, those sources are enough to define one exact support-strip distinctness case even though they are not enough to approve runtime scope yet.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one compact **collection-page-first support strip** that stays additive to a collection surface rather than defining the collection surface itself.
- `Verified`: The strip should be understood as a restrained band composed from:
  1. one short `heading`
  2. one short `richtext` support message
  3. up to three compact `trust cue` or `feature-detail` items
  4. one optional neutral support-oriented CTA inside a `button group`
  5. optional `divider` or `spacer` framing only
- `Verified`: The strip is materially distinct from a `collection banner` because it does not claim hero/opening authority, campaign framing authority, or media-led opening control.
- `Verified`: The strip is materially distinct from a `curated collection explainer` because it does not claim longform narrative, editorial sequencing, or richer storytelling density.
- `Verified`: The strip is materially distinct from `navigation aids` because it does not claim archive controls, filter/sort/search behavior, pagination, toolbar semantics, or collection-navigation system behavior.
- `Verified`: The strip is materially distinct from merchandising because it does not require `product card` behavior, product loops, recommendation logic, or heavier commerce actions.

## Exact Allowed Planning Scope Inside This Boundary

- `Verified`: Define the first exact support-strip distinctness case only at the documentation level.
- `Verified`: Allow references to `support-strip visibility` only as taxonomy context for strip presence, not as approval for broader collection behavior.
- `Verified`: Keep the exact strip shape limited to compact support copy, compact reassurance or feature cues, and at most one neutral support CTA.
- `Verified`: Allow trust-oriented support cues where they remain strip-like and collection-page-first.
- `Verified`: Require exact statements about which adjacent family surfaces remain blocked.

## Explicitly Disallowed Inside This Boundary

- `Verified`: No direct runtime approval boundary.
- `Verified`: No edits under `project/`.
- `Verified`: No collection-template rewrites.
- `Verified`: No collection archive controls, including toolbar behavior, filters, sorting, tags, pagination, search, or navigation-system behavior.
- `Verified`: No `collection banner` authority.
- `Verified`: No curated collection explainer or broader editorial/story authority.
- `Verified`: No image-led or hero-led opening treatment as part of the exact strip case.
- `Verified`: No `product card` reuse, product loops, merchandising rails, quick-add, quick-view, recommendation logic, or heavier commerce.
- `Verified`: No direct reopening of `PDP companion`.
- `Verified`: No broader motion/media continuation.
- `Verified`: No preset-pack implementation.
- `Verified`: No wider JS scope.

## What This Boundary Clarifies About Shared Vocabulary

- `Verified`: `Collection behavior` may be referenced only for the existence of `support-strip visibility` as a normalized vocabulary clue.
- `Verified`: `Collection behavior` does not become approval for collection toolbar behavior, density presets, merchandising emphasis, or any archive system semantics.
- `Verified`: `Product-card behavior` is not required for the exact support-strip distinctness case and remains out of scope.
- `Inference`: This means the support-strip lane can stay lighter than merchandising only if it avoids depending on product-card contracts altogether.

## Why Runtime Authorization Still Fails Closed Here

- `Verified`: The current evidence is enough to define the strip's exact conceptual boundary, but not enough to decide the future runtime contract safely.
- `Inference`: The repo still has to determine whether a future support strip would bind to current collection context, remain editor-authored support content, or use some narrower hybrid without becoming collection-template authority.
- `Inference`: The repo also still has to determine whether `support-strip visibility` can stay a reference-only vocabulary cue without pulling in broader `collection behavior` controls.
- `Inference`: A premature runtime boundary would blur collection-companion support with banner framing, explainer density, navigation semantics, or trust/support-family reuse in ways this unit is explicitly meant to prevent.

## Next Approved Planning Step

- `Verified`: The next governed unit after this boundary should remain docs-only and author one **Phase 3 collection support strip runtime readiness proposal**.
- `Inference`: That proposal should determine:
  - whether the exact support-strip case should be current-collection-aware, editor-authored, or a narrower hybrid
  - whether `support-strip visibility` can be referenced without normalizing broader `collection behavior`
  - whether trust cues, feature details, and a neutral support CTA are enough to keep the strip distinct from banner and explainer authority
  - whether a later runtime-facing boundary is justified at all after those questions are resolved

## Why The Other Options Are Rejected

- `Verified`: Reject Option B because direct runtime authorization would skip the unresolved contract questions this boundary exists to isolate.
- `Verified`: Reject Option C because widening support-strip language into banner, explainer, or navigation behavior would nullify the controlled narrowing achieved in `UNIT-129`.
- `Verified`: Reject Option D because the family ledger, taxonomy, and prior planning chain now provide enough evidence to define one exact docs-only support-strip case.

## What This Boundary Does Not Authorize

- `Verified`: No runtime build.
- `Verified`: No exact runtime file list.
- `Verified`: No support-strip implementation boundary yet.
- `Verified`: No collection-template or archive-system authority.
- `Verified`: No banner, curated explainer, or navigation-system continuation.
- `Verified`: No direct `PDP companion` reopening.
- `Verified`: No broader motion/media, preset-pack, wider JS, or heavier commerce continuation.

## Required Constraints For The Next Approved Docs-Only Step

- `Verified`: Keep the next step documentation-only.
- `Verified`: Keep edits limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: Keep the next step strictly support-strip-specific rather than reopening the broader collection-companion family.
- `Verified`: Require the next step to decide the future content contract without authorizing runtime files directly.
- `Verified`: Require the next step to keep `collection behavior` and `product-card behavior` fail-closed unless the evidence proves otherwise explicitly.
- `Verified`: Require the next step to restate blocked surfaces clearly, especially template rewrites, archive controls, banner authority, curated-explainer/editorial drift, `PDP companion`, broader JS, and heavier commerce.

## Stop Conditions For The Next Approved Docs-Only Step

- `Verified`: Stop if the next planning step authorizes runtime edits directly.
- `Verified`: Stop if it normalizes collection-template rewrites, archive controls, filtering, sorting, search, pagination, or navigation-system behavior as part of support-strip scope.
- `Verified`: Stop if it reopens collection-banner authority, curated-explainer/editorial authority, or `PDP companion` by implication.
- `Verified`: Stop if it turns broader motion/media, preset-pack work, wider JS, or heavier commerce into implicit follow-on approval.
- `Verified`: Stop if the strip distinctness case starts depending on product-card contracts, product loops, or richer merchandising behavior.

## Readiness Verdict

- `Verified`: READY as a docs-only exact boundary package.
- `Inference`: The next governed unit after this boundary should remain docs-only and author a Phase 3 collection support strip runtime readiness proposal.
