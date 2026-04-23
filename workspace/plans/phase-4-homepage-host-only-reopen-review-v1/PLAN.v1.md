# Phase 4 Homepage Host-Only Reopen Review v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It does not execute `UNIT-143`.
- `Verified`: It does not edit `project/`.
- `Verified`: It tests only one narrower candidate lane after `UNIT-142`: homepage-host-only reopen.

## Question

- `Verified`: Is there now enough narrower evidence to approve one exact homepage-host review lane without reopening shell/navigation, collection, PDP, editorial/search, or preset realization?

## Plain-English Answer

- `Verified`: No.
- `Verified`: The homepage corpus is narrower than the full `UNIT-142` corpus review, but it is still not narrow enough to approve one exact homepage-host-only lane.
- `Verified`: The repo should remain paused.

## Exact Local Evidence

- `Verified`: All 9 captured stores under `shopify_theme_dom/` contain both `home-elements.json` and `home-main.html`.
- `Verified`: 8 of the 9 captured stores also contain a homepage `index.json` file inside the corpus; `poetic-theme-jewelry` does not.
- `Verified`: Homepage section breadth still varies sharply across the corpus:
  - `allbirds/home-elements.json` reports 6 sections.
  - `highlight-theme-main/home-elements.json` reports 14 sections.
  - `poetic-theme-jewelry/home-elements.json` reports 15 sections.
  - `athora/home-elements.json` reports 19 sections.
  - `dynamic-preview/home-elements.json` reports 22 sections.
- `Verified`: Homepage evidence is not cleanly isolated from shell/navigation and footer concerns across the captured stores:
  - `highlight-theme-main/home-elements.json` includes shell markers `main-header`, `search-form`, `localization-form`, and `sidebar-drawer`, and also includes a footer section id.
  - `salt-yard/home-elements.json` includes shell markers `main-navigation`, `page-header`, and `main-search`.
  - `dynamic-preview/home-elements.json` includes `search-drawer`, `mobile-drawer`, `localization-form`, and `footer-section`.
- `Verified`: `project/templates/` currently contains only `page.stone-runtime*.json` templates and no canonical host templates.
- `Verified`: `project/templates/index.json` is absent.
- `Verified`: `project/templates/collection.json`, `product.json`, `blog.json`, `article.json`, and `search.json` are also absent.

## Option Comparison

### Option A, remain paused

- `Verified`: This is the recommended outcome.
- `Inference`: It matches the actual evidence because the homepage corpus is narrower than the full multi-surface review from `UNIT-142`, but it still mixes homepage body composition with shell, search, localization, drawer, and footer signals.
- `Inference`: It also matches the current runtime surface because there is no existing `project/templates/index.json` scaffold to review as an already-isolated host boundary.

### Option B, reopen homepage-host-only

- `Inference`: This is the only candidate lane tested in this package.
- `Verified`: The corpus does provide real homepage-specific evidence through `home-elements.json`, `home-main.html`, and frequent corpus `index.json` files.
- `Inference`: Even so, that evidence still does not collapse to one exact host-only review boundary.
- `Verified`: The strongest candidate file boundary would be `project/templates/index.json`.
- `Inference`: That boundary is not justified yet because the captured homepage evidence still carries shell/navigation/footer entanglement in multiple stores, while the local runtime has no existing `index.json` host file to compare or narrow against.
- `Verified`: Rejected for now.

## Why Collection And PDP Remain Broader

- `Verified`: This package does not compare collection or PDP as live candidates.
- `Verified`: They remain broader than the homepage-host-only question because they were already blocked in `UNIT-142` and would require reopening additional host and behavior surfaces beyond the single homepage host question tested here.

## Exact File Boundary Review

- `Verified`: The only plausible exact file boundary is `project/templates/index.json`.
- `Verified`: This package does **not** approve that boundary.
- `Inference`: The evidence is still too broad because homepage corpus files do not consistently isolate homepage host composition away from shell/navigation/footer behavior.

## Governed Decision

- `Verified`: Do not approve a homepage-host-only reopen from this package.
- `Verified`: Keep the repo paused.
- `Verified`: Keep `project/layout/theme.liquid`, `project/config/settings_schema.json`, collection hosts, PDP hosts, blog/article hosts, and search hosts out of scope.
- `Verified`: Keep `UNIT-143` blocked and unexecuted.

## Readiness Verdict

- `Verified`: READY as a narrower docs-only homepage-host review package.
- `Verified`: NOT READY to approve one exact homepage-host-only lane.
