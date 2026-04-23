# Phase 4 Homepage Runtime Proof Slice v1

## Status

- `Verified`: This package defines one future runtime slice.
- `Verified`: It is pre-authored and conditional on `UNIT-143` passing.
- `Verified`: It does not claim the runtime slice is already approved.

## Scope

- `Verified`: Implement one first homepage host proof and one normalized hero/opening section.
- `Verified`: Reuse the existing theme shell unchanged.
- `Verified`: Stay inside the exact five-file boundary admitted by `UNIT-143`.

## Builder

- `Inference`: The runtime slice should prove that Stone V2 can render a real homepage host without broadening into shell, collection, or preset rollout work.
- `Inference`: The implementation should add one normalized `stone-hero-opening` section and wire it into `templates/index.json`.
- `Inference`: The locale files should add only the schema strings required by that section, and CSS should remain section-scoped.

## Adversarial reviewer

- `Inference`: The biggest risk is adding hidden shell or settings dependencies that force extra files.
- `Inference`: Another risk is implementing a bespoke homepage rather than a reusable hero/opening family proof.
- `Inference`: A third risk is letting the section introduce navigation controls, collection links with behavior assumptions, or commerce interactions outside the approved proof.

## Reconciliation

- `Verified`: Keep the slice limited to one reusable hero/opening section and one neutral homepage host template.
- `Verified`: Reuse existing shell and section shell primitives unchanged.
- `Inference`: Verification must prove exact five-file compliance and absence of shell/navigation or collection/PDP drift.

## Exact Runtime Boundary

- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/sections/stone-hero-opening.liquid`
- `Verified`: `project/templates/index.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Acceptance Criteria

1. `Verified`: Add one reusable hero/opening family proof rather than a one-off homepage.
2. `Verified`: Add one first `index.json` homepage host that uses admitted homepage-only composition only.
3. `Verified`: Preserve locale parity.
4. `Verified`: Avoid any `theme.liquid`, `settings_schema.json`, `stone-runtime.js`, collection, PDP, blog/article, or search changes.
5. `Verified`: Avoid JS-heavy, navigation-heavy, or heavier-commerce behavior.

## Intended Next Step If This Unit Passes

- `Verified`: Route only to `UNIT-145`, the homepage proof verification and frontier review package.

## Readiness Verdict

- `Verified`: READY only if `UNIT-143` passes first.
