# Phase 2 Minimal Content Card Strip Risks v1

## Primary Risks

1. `Inference`: Semantic drift could turn a restrained content-card strip into a live blog feed, article listing, or merchandising rail.
2. `Inference`: Interaction drift could push the slice toward sliders, drawers, tabs, or JS-driven card behavior.
3. `Inference`: Structural drift could turn one bounded proof into a broader content system with object dependencies.
4. `Inference`: Protected-surface drift could reopen the shared section shell or other protected runtime surfaces.
5. `Inference`: Locale drift could create schema mismatches between Hebrew and English.

## Mitigations

- `Verified`: Keep the planned runtime surface restricted to the same five-file pattern used by the recent slices.
- `Verified`: Reuse the shared section shell unchanged.
- `Verified`: Keep the future template neutral and isolated.
- `Verified`: Fail closed if implementation needs live objects, product-card behavior, slider behavior, or JS.
- `Verified`: Update locale files together and verify structural parity before accepting the slice.

## Replanning Threshold

- `Verified`: Replan immediately if the content card strip cannot remain a static, plain, editorial-card proof inside the approved five runtime files.
