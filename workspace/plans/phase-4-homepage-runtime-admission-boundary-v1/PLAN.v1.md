# Phase 4 Homepage Runtime Admission Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It is pre-authored and conditional on `UNIT-142` passing.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to determine whether one exact homepage runtime proof slice can now be admitted without reopening shell/navigation drift, collection/PDP domains, or broader preset rollout.

## Scope

- `Verified`: Use the `UNIT-139` homepage-only preset contract plus the corpus-admission decision from `UNIT-142`.
- `Verified`: Decide whether one exact homepage runtime proof slice is justified now.
- `Verified`: Keep scope limited to homepage host proof, hero/opening proof, and admitted homepage-safe family composition only.

## Builder

- `Inference`: The minimal runtime admission should prove the homepage host surface first, not the full preset pack.
- `Inference`: The strongest proof is one normalized hero/opening section plus one first `index.json` host that stays inside the shared shell already present.
- `Inference`: The runtime boundary should stay narrow enough to avoid new navigation, collection, PDP, search, or editorial host authority.

## Adversarial reviewer

- `Inference`: The main risk is letting “homepage runtime” become “complete homepage implementation.”
- `Inference`: A second risk is letting the unit quietly modify `theme.liquid`, `settings_schema.json`, or broader shell behavior before the shell/navigation lane is formally reopened.
- `Inference`: A third risk is trying to encode all five preset variants in the first runtime proof rather than proving one neutral host slice.

## Reconciliation

- `Verified`: Admit only a narrow homepage proof slice if the boundary can stay hero/opening plus homepage host only.
- `Verified`: Defer shell/navigation, collection, PDP, editorial/search, and preset rollout to later lanes.
- `Inference`: The expected outcome is one exact five-file homepage runtime proof slice for `UNIT-144`.

## Exact Intended Runtime Boundary If Admitted

- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/sections/stone-hero-opening.liquid`
- `Verified`: `project/templates/index.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Acceptance Criteria

1. `Verified`: Decide whether the exact five-file homepage proof boundary above is honest and sufficient.
2. `Verified`: Keep `project/layout/theme.liquid`, `project/config/settings_schema.json`, `project/assets/stone-runtime.js`, collection hosts, PDP hosts, blog/article hosts, and search hosts out of scope.
3. `Verified`: Record the exact homepage behaviors and families that remain out of scope.
4. `Verified`: Route only to `UNIT-144` if the boundary is justified.

## Intended Next Step If This Unit Passes

- `Verified`: Route only to `UNIT-144`, the first homepage runtime proof slice.

## Readiness Verdict

- `Verified`: READY only if `UNIT-142` passes first.
