# Phase 3 Companion Roadmap Deferral Proposal v1

## Status

- `Verified`: This package is documentation-only.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to determine whether unresolved `collection companion` and `PDP companion` work should remain only implicitly paused inside Phase 3 or be explicitly deferred behind later Phase 4 preset-pack planning.

## Compared Options

### Option A, keep unresolved companion-family work paused inside Phase 3 without explicit roadmap deferral

- `Inference`: This is the safest local fallback because `UNIT-134` already rejected any further `collection companion` or broader companion-family reopening from the current evidence.
- `Inference`: It is not the strongest governed outcome because it leaves the roadmap-ordering mismatch implicit: the architecture roadmap still lists `collection and PDP companion systems` in Phase 3, while the governed unit chain now shows no honest Phase 3 continuation for either family.

### Option B, explicitly defer unresolved companion-family work behind Phase 4 preset-pack planning

- `Inference`: This keeps runtime, companion-family reopening, and preset implementation fail-closed while still resolving the remaining sequencing question explicitly.
- `Inference`: It records that unresolved `collection companion` and `PDP companion` work are not approved Phase 3 follow-ons from the current evidence and may be reconsidered only after a later Phase 4 planning pass establishes whether preset work can proceed coherently without them.
- `Inference`: This is a roadmap-ordering verdict, not an implementation verdict.

### Option C, reopen broader `collection companion` or broader companion-family review anyway

- `Inference`: This would contradict `UNIT-134`, which already concluded that no later `collection companion` or broader companion-family reopening is justified from the current evidence.
- `Inference`: It would also risk smuggling blocked banner, curated-explainer, navigation, shared-companion, or `PDP companion` questions back into scope after the collection-first reopening path already exhausted its strongest candidate.

### Option D, treat deferral behind Phase 4 as implicit approval for preset-pack implementation

- `Inference`: This is explicitly disallowed because roadmap sequencing is not the same thing as implementation admission.
- `Inference`: It would overread `docs/architecture/stonev2-build-roadmap.md`, which describes phases but does not authorize skipping unresolved family decisions or beginning preset runtime work without a separate docs-only planning step.

## Recommendation

- `Verified`: **Recommend Option B.**
- `Inference`: The current evidence does not justify keeping unresolved companion-family work merely paused inside Phase 3 as an open in-phase continuation problem. The stronger governed outcome is to record an explicit roadmap deferral behind later Phase 4 preset-pack planning, while keeping both runtime authorization and preset implementation fail-closed.

## Exact Deferral Verdict

- `Verified`: No later `collection companion` reopening is justified from the current evidence.
- `Verified`: No later `PDP companion` reopening is justified from the current evidence.
- `Verified`: Unresolved companion-family work should no longer remain only implicitly paused inside Phase 3.
- `Verified`: Unresolved `collection companion` and `PDP companion` work are now explicitly deferred behind a later docs-only Phase 4 preset-pack planning step.
- `Verified`: This verdict is sequencing-only and does not authorize preset-pack implementation, runtime edits, or any renewed companion-family review directly.

## Why Explicit Deferral Is More Honest Than Pause-Only

1. `Verified`: `docs/architecture/stonev2-build-roadmap.md` still places `collection and PDP companion systems` in Phase 3 ahead of Phase 4 preset-pack implementation.
2. `Verified`: `UNIT-127` rejected `PDP companion`-first reopening and required any companion-family continuation to stay collection-first, docs-only, and fail-closed on runtime authorization.
3. `Verified`: `UNIT-128` through `UNIT-133` then exercised that collection-first reopening path from broader family boundary down to the narrowest support-strip contract-definition edge.
4. `Verified`: `UNIT-133` concluded that even the strongest narrowed collection-companion lane is locally exhausted at the docs-only contract-definition edge and does not justify implementation admission.
5. `Verified`: `UNIT-134` then concluded that no later `collection companion` or broader companion-family reopening is justified from the current evidence and routed continuation only to a roadmap-deferral decision.
6. `Inference`: Leaving unresolved companion-family work merely "paused" inside Phase 3 would preserve an in-phase expectation that the current governed evidence no longer supports.
7. `Inference`: Explicit deferral is therefore more honest because it records that the roadmap ordering has changed under evidence, not that a Phase 3 continuation is still pending and likely.

## Why Deferral Does Not Authorize Preset Work Directly

1. `Verified`: `docs/architecture/stonev2-build-roadmap.md` defines Phase 4 as `preset pack implementation`, not as an automatic consequence of any single Phase 3 pause.
2. `Inference`: Deferring unresolved companion-family work behind Phase 4 means only that a later preset-pack planning step becomes the next honest higher-boundary question.
3. `Verified`: The repo still requires one separate docs-only planning package before any preset-pack implementation could be considered.
4. `Inference`: That later planning package must explicitly account for the fact that companion-family work remains deferred and blocked, rather than treating deferral as preset approval or as permission to absorb blocked companion surfaces implicitly.

## Why Reopening Companion Families Is No Longer Honest

1. `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` keeps `collection companion` and `PDP companion` as distinct families, but `UNIT-127` already established that any reopening had to stay collection-first rather than shared or PDP-first.
2. `Verified`: The collection-first reopening path already selected the strongest narrowed lane, `collection support strip`, while blocking weaker banner, curated-explainer, and navigation-adjacent routes.
3. `Verified`: That strongest lane still failed to justify any implementation-admission proposal from the current evidence.
4. `Inference`: If the strongest available collection-first lane cannot support another honest continuation, then reopening weaker collection lanes or a more commerce-adjacent `PDP companion` lane would overread the canon.

## Why A Phase 4 Planning Step Is Now Justified

1. `Verified`: The explicit sequencing question requested by `UNIT-134` has now been answered: unresolved companion-family work is deferred rather than kept as an open Phase 3 continuation problem.
2. `Inference`: Once that deferral is recorded explicitly, the next honest higher-boundary planning problem is no longer companion-family review. It is how to enter Phase 4 preset-pack planning while carrying forward the explicit companion deferral and without turning preset sequencing into implementation approval.
3. `Verified`: This remains a docs-only planning question and therefore satisfies the current fail-closed posture.

## Why The Other Options Are Rejected

- `Verified`: Reject Option A because pause-only leaves the roadmap-ordering mismatch implicit and preserves a misleading sense that unresolved companion-family work still belongs to the active Phase 3 queue.
- `Verified`: Reject Option C because `UNIT-134` already closed off further `collection companion` and broader companion-family reopening from the current evidence.
- `Verified`: Reject Option D because preset-pack sequencing and preset-pack implementation are separate decisions, and this unit is not allowed to authorize runtime work directly.

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
- `Verified`: Require the next step to operate as a Phase 4 preset-pack planning proposal, not a runtime implementation unit.
- `Verified`: Require the next step to preserve explicit deferral of unresolved `collection companion` and `PDP companion` work unless fresh evidence is recorded in a later dedicated companion proposal.
- `Verified`: Require the next step to explain how preset-pack planning can proceed without implicitly approving blocked companion-family surfaces.
- `Verified`: Require the next step to fail closed if it treats preset sequencing as implementation approval.

## Stop Conditions For The Next Approved Docs-Only Step

- `Verified`: Stop if the next planning step authorizes runtime edits directly.
- `Verified`: Stop if it reopens broader `collection companion`, broader companion-family review, or `PDP companion` as if `UNIT-135` reversed the deferral verdict.
- `Verified`: Stop if it normalizes support-strip implementation admission, collection-derived content, collection-template rewrites, archive controls, navigation-system behavior, collection-banner authority, curated-explainer/editorial drift, broader motion/media, preset-pack implementation, wider JS, heavier commerce, or `product-card behavior` reuse as approved follow-ons.
- `Verified`: Stop if it treats the move to Phase 4 planning as evidence that deferred companion-family work is now implicitly consumed, implemented, or no longer needs explicit governance.

## Next Approved Planning Step

- `Verified`: The next governed unit after this proposal should remain docs-only and author one **Phase 4 preset-pack sequencing proposal**.
- `Inference`: That proposal should determine:
  - how Phase 4 preset-pack planning should begin while unresolved `collection companion` and `PDP companion` work remain explicitly deferred
  - which preset assumptions must stay blocked because companion-family work did not complete inside Phase 3
  - whether preset-pack planning can proceed coherently without hidden companion-surface dependencies
  - what fresh evidence would be required before either deferred companion family could be reconsidered later

## Readiness Verdict

- `Verified`: READY as a docs-only roadmap-deferral proposal.
- `Inference`: The next governed unit after this proposal should remain docs-only and author a Phase 4 preset-pack sequencing proposal.
