# Stone V2 Build Roadmap

## Status

- `Verified`: This document defines the initial execution direction for Stone V2.
- `Verified`: This document is planning-only. It does not authorize unbounded implementation.

## Scope

- `Verified`: Goal is to define the initial phased roadmap that a governed harness and Codex can follow.
- `Verified`: This document covers:
  - repo setup expectations
  - harness population direction
  - theme foundation phases
  - preset lineup
  - validation expectations

## Initial preset lineup

Stone V2 should initially plan for these five presets:

1. `jewelry`
2. `apparel`
3. `electronics`
4. `beauty`
5. `home-lifestyle`

## Phase 0, governed repo and harness foundation

Create or populate:

- `HARNESS/` governance docs
- `HARNESS/templates/` starter templates
- `HARNESS/checks/` initial harness checks
- `state/` canonical project state files
- `workspace/` intake, plans, build, verify, handoff, QA, notes, and logs surfaces
- `project/` Shopify runtime scaffold

## Phase 1, product and architecture canon

Codify from the architecture docs:

- platform basis
- product thesis
- section-family map
- block-family map
- settings taxonomy
- bilingual schema strategy
- preset strategy

## Phase 2, theme foundation

Build the shared base inside `project/`:

- core Liquid layout skeleton
- tokens and design-system primitives
- global shell and navigation foundation
- base JS for progressive enhancement only
- schema structure for bilingual editor support

## Phase 3, section and block family implementation

Prioritize normalized reusable families for:

- hero and opening systems
- story and editorial systems
- merchandising systems
- shoppable media systems
- trust and support systems
- collection and PDP companion systems

## Phase 4, preset pack implementation

Create the first preset lineup using shared families and shared settings, not separate architectures.

Each preset should define:

- homepage sequence
- tone and density defaults
- relevant merchandising emphasis
- trust and support assumptions
- matching starter content structure

## Phase 5, QA and hardening

Validate:

- RTL behavior
- Hebrew content quality
- bilingual editor coverage
- mobile quality
- section-family consistency
- preset coherence
- Shopify theme runtime correctness

## Harness operating rule

- `Verified`: The harness should not invent the product direction.
- `Inference`: The harness should derive plans, checks, and next actions from the five architecture documents in `docs/architecture/`.
- `Inference`: Plans should be bounded, testable, and phase-aware.
- `Inference`: Build work should happen in small reversible slices.

## Expected first Codex output

The first strong Codex pass should produce at least:

- populated harness docs and templates
- canonical state file skeletons
- a section-family ledger
- a settings-taxonomy draft
- a bilingual schema strategy note
- a phased implementation plan tied to this roadmap

## Final recommendation

- `Verified`: Start with harness and architecture canon before broad theme implementation.
- `Inference`: Build Stone V2 in governed phases so breadth does not outrun coherence.
