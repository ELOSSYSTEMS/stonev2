# Phase 4 Global Shell And Navigation Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It is conditional on `UNIT-146` passing.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to state one exact future shell/navigation runtime implementation boundary.

## Scope

- `Verified`: Define the smallest acceptable runtime file boundary for a global shell/navigation proof.
- `Verified`: Keep the boundary global, shared, behavior-light, RTL-safe, and bilingual-editor-safe.
- `Verified`: Keep collection/archive behavior, PDP behavior, search results, predictive search, cart drawer behavior, checkout-sensitive behavior, preset realization, and hardening out of scope.

## Candidate Future Runtime Surfaces

- `Inference`: The likely future implementation boundary should include `project/layout/theme.liquid` for shell placement.
- `Inference`: It may need one or more bounded shell sections or snippets for header/footer structure.
- `Inference`: It may need `project/assets/stone-base.css` for shell styling.
- `Inference`: It may need `project/config/settings_schema.json` and the two locale schema files for bilingual shell settings.
- `Inference`: It should avoid `project/assets/stone-runtime.js` unless the boundary proves a no-JS shell is insufficient.

## Acceptance Criteria

1. `Verified`: State the exact future runtime files before implementation.
2. `Verified`: Keep search results, predictive search, collection/archive behavior, PDP behavior, cart drawer behavior, and checkout-sensitive behavior blocked.
3. `Verified`: Define the exact checks a future implementation unit must pass.
4. `Verified`: Route to implementation only if the boundary stays minimal and reversible.

## Intended Next Step If This Unit Passes

- `Inference`: Route to one bounded global shell/navigation runtime proof implementation unit.

## Readiness Verdict

- `Verified`: READY only if `UNIT-146` passes first.
