# Phase 2 Minimal Blog Highlights Risks v1

## Primary Risks

1. `Inference`: Structural drift could collapse the planned section back into the existing content-card-strip proof.
2. `Inference`: Data drift could push the slice toward live blog or article objects.
3. `Inference`: Interaction drift could push the section toward sliders, drawers, overlays, or other JS-driven highlight behavior.
4. `Inference`: Protected-surface drift could reopen the shared section shell or other protected runtime surfaces.
5. `Inference`: Locale drift could create schema mismatches between Hebrew and English.

## Mitigations

- `Verified`: Keep the planned runtime surface restricted to the same five-file pattern used by the recent slices.
- `Verified`: Reuse the shared section shell unchanged.
- `Verified`: Keep the future template neutral and isolated.
- `Verified`: Fail closed if implementation needs live objects, dates, tags, filters, sliders, drawers, overlays, or commerce semantics.
- `Verified`: Verify distinctness against `stone-content-card-strip.liquid` before accepting runtime execution.
- `Verified`: Update locale files together and verify structural parity before accepting the slice.

## Replanning Threshold

- `Verified`: Replan immediately if the blog-highlights section cannot remain a static, plain, materially distinct editorial composition inside the approved five runtime files.
