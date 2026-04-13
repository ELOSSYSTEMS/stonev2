# Phase 4 Preset-Pack Sequencing Proposal v1

## Status

- `Verified`: This package is documentation-only.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to determine how Phase 4 preset-pack planning should begin now that unresolved `collection companion` and `PDP companion` work are explicitly deferred behind later preset planning.

## Compared Options

### Option A, begin Phase 4 with one docs-only preset-pack boundary proposal that defines the shared planning contract before any preset-specific defaults or implementation discussion

- `Inference`: This is the strongest governed entry because the roadmap already defines the initial preset lineup and the fields each preset must eventually define, but the current evidence does not yet state which family surfaces are safe to include while deferred companion families remain blocked.
- `Inference`: A boundary-first step can translate the Phase 4 sequencing verdict into an exact planning contract: which resolved families and shared settings may inform presets now, which assumptions must stay blocked because companion-family work remains deferred, and which later decisions still require separate governance.
- `Inference`: This keeps preset-pack planning active without converting sequencing into implementation approval.

### Option B, jump directly to one full preset-lineup defaults proposal for all five presets

- `Inference`: This is too eager because preset-specific defaults would immediately pressure homepage sequencing, merchandising emphasis, and trust/support assumptions across all five presets before the allowed family set and blocked dependency set are restated explicitly.
- `Inference`: Without a boundary-first pass, deferred companion-family needs could leak back in through vague preset composition language or through implicit assumptions about collection and PDP wrappers.

### Option C, reopen deferred companion-family review first so presets can consume fully resolved collection and PDP coverage

- `Inference`: This would contradict `UNIT-135`, which already concluded that unresolved `collection companion` and `PDP companion` work are explicitly deferred behind later Phase 4 preset planning rather than reopened immediately.
- `Inference`: It would also overread the current evidence by treating preset planning as blocked on a family review path that the governed chain explicitly closed.

### Option D, treat Phase 4 sequencing as enough evidence to begin preset-pack implementation or runtime-surface approval

- `Inference`: This is explicitly disallowed because `docs/architecture/stonev2-build-roadmap.md` describes Phase 4 as `preset pack implementation` but does not waive the need for a separate docs-only planning step.
- `Inference`: It would also bypass the repo’s normal requirement that runtime implementation follow an approved bounded planning package.

## Recommendation

- `Verified`: **Recommend Option A.**
- `Inference`: The next honest Phase 4 move is not preset implementation and not a full five-preset defaults pass. It is one docs-only preset-pack boundary proposal that establishes which shared families, shared settings, and blocked assumptions can govern preset planning while companion-family work remains explicitly deferred.

## Exact Sequencing Verdict

- `Verified`: Phase 4 preset-pack planning may begin now as a docs-only planning track.
- `Verified`: Phase 4 preset-pack planning may not begin as runtime implementation or implementation-surface approval.
- `Verified`: Deferred `collection companion` and `PDP companion` work remain blocked and must not be treated as implicitly resolved by entering Phase 4 planning.
- `Verified`: The first Phase 4 planning step should define the preset-pack planning boundary before any preset-specific defaults or implementation proposal.
- `Verified`: This verdict is sequencing-only and does not authorize preset-pack implementation, renewed companion-family review, or runtime edits.

## Why A Boundary-First Phase 4 Step Is The Strongest Start

1. `Verified`: `docs/architecture/stonev2-build-roadmap.md` already fixes the initial preset lineup to `jewelry`, `apparel`, `electronics`, `beauty`, and `home-lifestyle`.
2. `Verified`: The same roadmap already states that each preset should eventually define `homepage sequence`, `tone and density defaults`, `relevant merchandising emphasis`, `trust and support assumptions`, and `matching starter content structure`.
3. `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` says breadth should come from normalized families plus presets rather than one-off file proliferation.
4. `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` says merchant-safe controls should favor shared vocabularies, selectors, and presets over ad hoc values.
5. `Verified`: `UNIT-135` explicitly deferred unresolved `collection companion` and `PDP companion` work behind later Phase 4 preset planning while keeping runtime and preset implementation fail-closed.
6. `Inference`: Because the lineup and eventual preset fields are already known, the missing evidence is not "which industries exist?" but "which resolved shared inputs may be used now without pulling deferred companion surfaces back into scope?"
7. `Inference`: A boundary-first proposal answers exactly that missing question and therefore is the narrowest honest next step.

## Why Full Preset Defaults Are Premature

1. `Verified`: The roadmap’s preset requirements touch homepage sequencing, merchandising emphasis, trust/support assumptions, and starter content structure across the whole pack.
2. `Inference`: Those categories can accidentally absorb blocked companion-family expectations unless the allowed family set and blocked dependency set are restated first.
3. `Verified`: The repo’s recent governed chain repeatedly required an intermediate fail-closed planning pass before moving from a broader sequencing question to a more concrete scope definition.
4. `Inference`: Jumping directly to per-preset defaults would skip that boundary discipline and make it harder to distinguish shared resolved families from deferred companion surfaces.

## Why Deferred Companion Work Must Stay Explicitly Blocked Inside Phase 4 Planning

1. `Verified`: `UNIT-135` states that unresolved `collection companion` and `PDP companion` work are explicitly deferred behind later preset planning.
2. `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` keeps those companion families distinct from merchandising, trust/support, hero, story/editorial, and shoppable-media families.
3. `Inference`: Preset planning can proceed only if it is explicit about using already-resolved shared families and explicit about not assuming unresolved companion wrappers, template behaviors, or recommendation/support surfaces.
4. `Inference`: If the deferred families are not restated as blocked, Phase 4 planning would silently reopen the exact unresolved collection and PDP questions that the governed chain just deferred.

## Why Runtime Authorization Still Fails Closed

1. `Verified`: `docs/architecture/stonev2-build-roadmap.md` labels Phase 4 as implementation, but the document also states that the roadmap is planning-only and does not authorize unbounded implementation.
2. `Verified`: `UNIT-135` already required one separate docs-only preset-pack planning package before any preset implementation could be considered.
3. `Inference`: `UNIT-136` therefore decides only how planning begins, not whether implementation begins.
4. `Verified`: Any later preset-pack implementation question still requires a separate bounded docs-only package with explicit runtime scope and checks.

## Why The Other Options Are Rejected

- `Verified`: Reject Option B because a full preset-lineup defaults pass is too concrete before the allowed family boundary and blocked dependency list are restated explicitly.
- `Verified`: Reject Option C because `UNIT-135` already deferred unresolved companion-family work rather than reopening it immediately.
- `Verified`: Reject Option D because preset sequencing is not implementation approval and this unit must fail closed on runtime authorization.

## What This Proposal Does Not Authorize

- `Verified`: No runtime build.
- `Verified`: No edits under `project/`.
- `Verified`: No broader `collection companion` review.
- `Verified`: No broader companion-family review.
- `Verified`: No support-strip implementation admission.
- `Verified`: No collection-derived strip content.
- `Verified`: No collection-template rewrites.
- `Verified`: No archive controls.
- `Verified`: No navigation-system behavior.
- `Verified`: No collection-banner authority.
- `Verified`: No curated-explainer or editorial drift.
- `Verified`: No `PDP companion` reopening.
- `Verified`: No broader motion/media continuation.
- `Verified`: No preset-pack implementation.
- `Verified`: No wider JS scope.
- `Verified`: No heavier commerce continuation.
- `Verified`: No `product-card behavior` reuse as an implied next step.

## Required Constraints For The Next Approved Docs-Only Step

- `Verified`: Keep the next step documentation-only.
- `Verified`: Keep edits limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: Require the next step to operate as a Phase 4 preset-pack boundary proposal rather than a runtime implementation unit.
- `Verified`: Require the next step to state which resolved shared families and shared settings are admissible preset inputs now.
- `Verified`: Require the next step to state which preset assumptions remain blocked because unresolved `collection companion` and `PDP companion` work are still deferred.
- `Verified`: Require the next step to preserve explicit deferral of unresolved companion-family work unless fresh evidence is recorded in a later dedicated proposal.
- `Verified`: Require the next step to fail closed if it treats preset sequencing as implementation approval.

## Stop Conditions For The Next Approved Docs-Only Step

- `Verified`: Stop if the next planning step authorizes runtime edits directly.
- `Verified`: Stop if it treats deferred `collection companion` or `PDP companion` work as implicitly resolved, included, or consumed by preset planning.
- `Verified`: Stop if it reopens broader `collection companion`, broader companion-family review, or `PDP companion` as if `UNIT-135` reversed the deferral verdict.
- `Verified`: Stop if it normalizes support-strip implementation admission, collection-derived content, collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, broader motion/media, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as approved follow-ons.

## Next Approved Planning Step

- `Verified`: The next governed unit after this proposal should remain docs-only and author one **Phase 4 preset-pack boundary proposal**.
- `Inference`: That proposal should determine:
  - which already-resolved shared families can participate in preset planning without reopening deferred companion families
  - which preset fields from the roadmap can be planned now versus which must remain blocked or placeholder-bound because companion-family work is still deferred
  - whether the five-preset lineup can be planned coherently through shared defaults and starter-structure logic without hidden collection or PDP companion dependencies
  - what fresh evidence would be required before any later preset-specific defaults proposal, implementation proposal, or deferred companion-family reconsideration

## Readiness Verdict

- `Verified`: READY as a docs-only Phase 4 preset-pack sequencing proposal.
- `Inference`: The next governed unit after this proposal should remain docs-only and author a Phase 4 preset-pack boundary proposal.
