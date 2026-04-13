# Phase 3 Collection Support Strip Runtime Readiness Proposal v1

## Status

- `Verified`: This package is documentation-only.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to determine whether a later runtime-facing `collection support strip` boundary is justified after the exact docs-only support-strip case defined by `UNIT-130`.

## Compared Options

### Option A, approve one later docs-only runtime-facing boundary package for a narrowly defined support strip contract

- `Inference`: This is justified only if the future runtime lane stays narrower than the broader `collection companion` family and does not depend on collection-template authority, archive controls, banner authority, editorial drift, or merchandising reuse.
- `Inference`: The strongest safe contract is an **editor-authored support strip hosted on collection pages** with optional strip presence vocabulary, not a collection-context-derived or product-driven system.

### Option B, keep runtime readiness fully unapproved and stop after the exact docs-only boundary

- `Inference`: This is the safest fallback.
- `Inference`: It is too conservative given that the current canon and `UNIT-130` now define one exact strip case strongly enough to frame a later runtime-facing boundary question without approving implementation.

### Option C, treat the strip as collection-context-aware or hybrid enough to derive behavior from broader collection systems

- `Inference`: This would overreach.
- `Inference`: The taxonomy only gives one vocabulary clue through `support-strip visibility`; it does not justify toolbar, density, merchandising emphasis, dynamic collection logic, or other broader `collection behavior` contracts.

### Option D, treat readiness as approval for runtime implementation or broader companion continuation

- `Inference`: This fails the unit directly.
- `Inference`: It would convert a readiness proposal into runtime authorization and would implicitly reopen blocked surfaces such as collection-template rewrites, archive controls, navigation behavior, banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse.

## Recommendation

- `Verified`: **Recommend Option A.**
- `Inference`: A later runtime-facing boundary is justified only for one narrow support-strip contract and only as another docs-only boundary package rather than direct runtime work.

## Runtime Readiness Verdict

- `Verified`: Stone V2 now has enough evidence to justify a later **docs-only runtime-facing collection support strip boundary package**.
- `Verified`: Stone V2 does **not** have evidence to authorize runtime implementation in this unit.
- `Verified`: Runtime readiness is justified only when the future strip contract is framed as **editor-authored support content hosted on collection pages**.
- `Verified`: Runtime readiness is **not** justified for a collection-context-derived, archive-behavior-derived, product-card-derived, or banner/editorial-derived strip.

## Why A Later Runtime-Facing Boundary Is Justified

1. `Verified`: `UNIT-130` already defined one exact strip distinctness case as a compact collection-page-first support band with a bounded composition.
2. `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` keeps `collection support strip` inside `collection companion`, not inside merchandising or `PDP companion`, and limits the family to wrapper-like blocks rather than product-loop structures.
3. `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` gives the lane one direct settings vocabulary clue through `support-strip visibility` while still distinguishing that clue from the rest of normalized `collection behavior`.
4. `Verified`: `docs/architecture/stonev2-section-block-platform.md` requires broad normalized family coverage and says new files should appear only when behavior is materially different, which supports evaluating one future strip runtime contract without reopening the whole collection family.
5. `Verified`: `docs/architecture/stonev2-build-roadmap.md` still places collection companion implementation before preset-pack work, so a bounded runtime-facing planning step remains phase-consistent.
6. `Inference`: Together with `UNIT-128` through `UNIT-130`, the repo now has enough evidence to decide the shape of a future runtime boundary, even though it still does not have evidence for implementation approval.

## Future Runtime Contract That Is Ready Enough To Evaluate

- `Verified`: The only future contract ready enough for a later runtime-facing boundary is:
  - one **editor-authored** support strip
  - hosted on collection pages first
  - structurally limited to the exact compact support-band composition already defined by `UNIT-130`
  - optionally exposed through a narrow `support-strip visibility` concept
  - explicitly independent from product-card, archive, banner, explainer, and navigation contracts
- `Verified`: The future contract should assume:
  1. content is authored directly rather than derived from collection metadata or collection-rule logic
  2. strip presence may reference `support-strip visibility` vocabulary only for on/off exposure semantics
  3. trust cues, feature details, and one neutral support CTA remain additive support content rather than collection-control or campaign-authority content
- `Inference`: This makes the next runtime-facing question precise enough to plan without accidentally authorizing broader collection-system work.

## Future Runtime Contract That Is Not Ready

- `Verified`: Not ready: a strip whose content is automatically derived from current collection context, product sets, tags, toolbar state, or merchandising emphasis.
- `Verified`: Not ready: a hybrid contract that binds strip content to archive behavior, navigation-system behavior, or collection-template opening authority.
- `Verified`: Not ready: a strip that depends on `product-card behavior`, recommendation logic, product loops, or other heavier commerce contracts.
- `Verified`: Not ready: a strip that expands into hero/banner framing, curated explainer sequencing, or broader editorial storytelling density.

## Exact Readiness Conclusions On The Open Questions

### Current-collection-aware, editor-authored, or hybrid

- `Verified`: Ready only as **editor-authored collection-page-hosted support content**.
- `Verified`: Not ready as current-collection-aware derived behavior.
- `Verified`: Not ready as a broader hybrid that mixes authored support with archive, navigation, or merchandising system semantics.

### `support-strip visibility` vocabulary

- `Verified`: Ready only as a **reference-level presence/exposure clue** for whether the strip appears.
- `Verified`: Not ready as approval for broader `collection behavior` controls such as toolbar logic, density presets, merchandising emphasis, filtering, sorting, search, pagination, or navigation-system behavior.

### Strip composition distinctness

- `Verified`: The bounded strip composition from `UNIT-130` is enough to keep the lane distinct from banner and explainer authority.
- `Verified`: That distinctness holds only while the strip remains compact, support-oriented, and additive rather than image-led, story-led, or campaign-led.

## What The Later Runtime-Facing Boundary Must Assume

- `Verified`: The boundary must stay limited to one collection-page-first support strip.
- `Verified`: The boundary must keep content editor-authored rather than collection-derived.
- `Verified`: The boundary must treat `support-strip visibility` as a narrow exposure concept only.
- `Verified`: The boundary must keep the composition compact: short heading, short support copy, compact trust cues or feature details, one optional neutral support CTA, and optional divider or spacer framing only.
- `Verified`: The boundary must restate that product-card contracts, archive behavior, banner authority, curated explainer authority, and `PDP companion` remain blocked.

## Explicitly Disallowed In This Readiness Proposal

- `Verified`: No runtime implementation approval.
- `Verified`: No runtime file list approval.
- `Verified`: No edits under `project/`.
- `Verified`: No collection-template rewrites.
- `Verified`: No archive controls, including filtering, sorting, search, pagination, toolbar behavior, or navigation-system behavior.
- `Verified`: No collection-banner authority.
- `Verified`: No curated-explainer/editorial drift.
- `Verified`: No direct or implied `PDP companion` reopening.
- `Verified`: No broader motion/media continuation.
- `Verified`: No preset-pack implementation.
- `Verified`: No wider JS scope.
- `Verified`: No heavier commerce continuation.
- `Verified`: No `product-card behavior` reuse as an implicit prerequisite or next step.

## Why Direct Runtime Authorization Still Fails Closed

- `Verified`: Readiness is not implementation approval.
- `Inference`: The repo can now bound the future runtime question precisely, but it still has not approved exact runtime files, exact schema keys, exact Liquid structure, or exact CSS scope.
- `Inference`: Moving directly from readiness to implementation would skip the necessary planning step that proves the runtime slice can stay editor-authored and collection-page-hosted without leaking into broader collection or merchandising systems.

## Next Approved Planning Step

- `Verified`: The next governed unit after this proposal should remain docs-only and author one **Phase 3 collection support strip runtime-facing boundary package**.
- `Inference`: That boundary package should determine:
  - the exact future runtime contract for an editor-authored collection-page-hosted support strip
  - the exact blocked runtime surfaces that must remain fail-closed
  - whether the later slice can stay independent from collection-template, archive, banner, explainer, navigation, `PDP companion`, and merchandising contracts
  - whether a later implementation slice is justified only after that runtime-facing boundary is defined

## Why The Other Options Are Rejected

- `Verified`: Reject Option B because `UNIT-130` and the canon now provide enough evidence to frame one later runtime-facing boundary question honestly and safely.
- `Verified`: Reject Option C because the current canon does not justify lifting the strip into broader `collection behavior`, collection-derived logic, or hybrid archive/merchandising semantics.
- `Verified`: Reject Option D because this unit must fail closed on direct runtime authorization and on any implied reopening of blocked adjacent systems.

## What This Proposal Does Not Authorize

- `Verified`: No runtime build.
- `Verified`: No exact runtime file scope.
- `Verified`: No exact schema contract.
- `Verified`: No banner, curated explainer, navigation, or `PDP companion` continuation.
- `Verified`: No broader collection-system reopening.
- `Verified`: No preset-pack, broader JS, motion/media, heavier commerce, or product-card continuation.

## Required Constraints For The Next Approved Docs-Only Step

- `Verified`: Keep the next step documentation-only.
- `Verified`: Keep edits limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: Keep the next step limited to one runtime-facing boundary for the exact support-strip contract approved here.
- `Verified`: Require the next step to preserve editor-authored strip content as the only allowed future contract.
- `Verified`: Require the next step to keep `support-strip visibility` narrow and reference-only.
- `Verified`: Require the next step to restate blocked surfaces clearly: collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media, preset-pack implementation, wider JS, heavier commerce, and `product-card behavior` reuse.

## Stop Conditions For The Next Approved Docs-Only Step

- `Verified`: Stop if the next step authorizes runtime edits directly.
- `Verified`: Stop if it treats collection-derived strip content, archive-derived behavior, or collection-template authority as part of the strip contract.
- `Verified`: Stop if it normalizes collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, `PDP companion`, broader motion/media, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as implicit next steps.
- `Verified`: Stop if the future strip contract depends on product loops, recommendation logic, or other merchandising contracts to remain coherent.

## Readiness Verdict

- `Verified`: READY for one later docs-only runtime-facing boundary package.
- `Verified`: NOT READY for runtime implementation.
- `Inference`: The evidence supports one more bounded planning step and no more than that.
