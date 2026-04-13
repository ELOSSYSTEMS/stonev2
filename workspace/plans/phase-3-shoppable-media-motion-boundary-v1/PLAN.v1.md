# Phase 3 Shoppable Media Motion Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It formalizes the first motion-aware boundary for Stone V2 shoppable media.
- `Verified`: It does not execute runtime build itself.

## Decision

- `Verified`: Continue with one bounded **shoppable media motion story** proof rather than escalating directly to autoplay, complex playback controls, or broader video-system behavior.
- `Verified`: The first safe motion-aware proof should stay non-JS.
- `Verified`: The first motion-aware proof should change media behavior only and should not combine that with a new interaction container.

## Exact Boundary Verdict

- `Verified`: The first safe motion-aware shoppable-media boundary is one video-first story surface with exactly two static linked markers and exactly two explicitly selected products.
- `Verified`: This proof stays distinct from the earlier static story because the media surface is now motion-aware through one inline video source.
- `Verified`: This proof stays lighter than autoplay-led media, custom playback systems, or richer interactive video overlays because it remains native, manual, and bounded.

## Exact Distinctness Case

- `Verified`: The approved distinctness case is one bounded **shoppable media motion story** surface consisting of:
  1. one primary inline video media surface
  2. exactly two static linked markers
  3. exactly two explicitly selected products rendered through the existing shared `stone-product-card` contract
  4. one restrained supporting product area beneath the media surface
  5. one neutral host template for validation
- `Verified`: This is materially distinct from the first static story because the proof now exercises motion-aware media rather than still imagery.
- `Verified`: This remains lighter than autoplay systems, drawer/overlay video hybrids, or custom media controls.

## Exact JS And Surface Decision

- `Verified`: No JS edits are authorized for this proof.
- `Verified`: `project/assets/stone-runtime.js` must remain unchanged.
- `Verified`: No protected-surface exception is authorized.
- `Verified`: No new snippet file is authorized.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid` are authorized.
- `Verified`: No block file is authorized.
- `Verified`: The existing `stone-product-card` snippet may be reused unchanged.

## Exact Runtime File Scope

- `project/assets/stone-base.css`
- `project/sections/stone-shoppable-media-motion-story.liquid`
- `project/templates/page.stone-runtime-shoppable-media-motion-story.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Exact Objective Of The Future Runtime Unit

- `Verified`: Establish one homepage-first shoppable-media section with one inline video surface and exactly two static linked markers for two linked products.
- `Verified`: Keep product linkage editor-driven through exactly two explicit product settings.
- `Verified`: Reuse `stone-product-card` unchanged for the two linked products.
- `Verified`: Keep playback native and manual, with no custom JS controls.
- `Verified`: Keep the host template neutral and validation-oriented.

## Explicitly Allowed Section Settings Shape

- `Verified`: One video setting for the primary media.
- `Verified`: Exactly two product settings.
- `Verified`: Exactly four range settings for marker positions, two x-axis and two y-axis values.
- `Verified`: Standard shell controls already normalized in earlier bounded families may remain allowed.

## Explicitly Allowed Media Behavior

- `Verified`: Native inline video rendering.
- `Verified`: Native manual playback only.
- `Verified`: Native poster or preview-image fallback when provided by the video object.
- `Verified`: Static markers and product links may remain visible without requiring playback.

## Explicitly Disallowed Even Under This Boundary

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No new snippet file.
- `Verified`: No edits to `project/snippets/stone-product-card.liquid`.
- `Verified`: No autoplay, no looping requirement, no custom playback controls, no audio controls policy changes, and no document-level media coordination.
- `Verified`: No drawers, overlays, modals, off-canvas behavior, or body scroll lock behavior.
- `Verified`: No third product, no product loops, no recommendation behavior, no carousel, and no bundle behavior.
- `Verified`: No add-to-cart, no product forms, no quick-add, no quick-view, and no variant-selection behavior.

## Verification Expectations For The Future Runtime Unit

- `Verified`: Confirm runtime changes stay inside the exact five approved runtime files.
- `Verified`: Confirm `stone-product-card` is reused unchanged.
- `Verified`: Confirm the section stays limited to one video setting, two product settings, and four marker-position range settings.
- `Verified`: Confirm `project/assets/stone-runtime.js` remains unchanged.
- `Verified`: Confirm protected surfaces remain untouched.
- `Verified`: Confirm locale parity remains intact.

## Stop Conditions

- `Verified`: Stop if implementation needs JS, autoplay, looping policy changes, custom media controls, snippet edits, block files, a third product, loops, heavier commerce actions, or any runtime file outside the exact five-file scope.
- `Verified`: Stop if the exact five-file runtime scope is insufficient.
- `Verified`: Stop if the motion-aware proof no longer reads as a bounded media-behavior proof and instead becomes a broader media system.

## Readiness Verdict

- `Verified`: READY for one bounded runtime unit that proves the first motion-aware shoppable-media surface.
- `Verified`: The intended next execution target is `UNIT-123`.
