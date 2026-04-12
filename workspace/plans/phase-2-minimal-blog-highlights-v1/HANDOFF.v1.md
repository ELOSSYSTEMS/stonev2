# Phase 2 Minimal Blog Highlights Handoff v1

## What This Plan Authorizes Next

- `Inference`: `UNIT-064` may implement one bounded Phase 2 minimal blog-highlights slice only if structural distinctness from the content-card-strip proof remains demonstrable before runtime edits begin.
- `Verified`: The approved future runtime file scope is limited to:
  - `project/assets/stone-base.css`
  - `project/sections/stone-blog-highlights.liquid`
  - `project/templates/page.stone-runtime-blog-highlights.json`
  - `project/locales/he.default.schema.json`
  - `project/locales/en.schema.json`
- `Verified`: State and handoff updates remain allowed as part of normal governed execution.

## What Must Stay Out Of Scope

- `Verified`: Any protected-surface edit.
- `Verified`: Any file under `project/blocks/`.
- `Verified`: Any new snippet file.
- `Verified`: Any second section file.
- `Verified`: Any second template file.
- `Verified`: Any runtime JS, live blog objects, live article objects, dates, tags, filters, product-card behavior, sliders, drawers, overlays, or campaign behavior.
- `Verified`: Any homepage, collection, PDP, merchandising, shoppable-media, or trust-family duplication work.

## Execution Reminder

- `Verified`: If the future slice stops looking materially distinct from `stone-content-card-strip.liquid`, stop and replan instead of broadening scope.
- `Verified`: If shared-shell changes appear necessary, stop and replan instead of reopening protected surfaces.
