# Phase 4 Global Shell And Navigation Reopen Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-145` passed and verified the exact five-file homepage runtime proof.
- `Verified`: This package does not authorize runtime edits by itself.
- `Verified`: This package decides whether Stone V2 may reopen one exact shell/navigation lane after the verified homepage proof.

## Evidence Reviewed

- `Verified`: `docs/architecture/stonev2-build-roadmap.md` lists global shell and navigation foundation as part of Phase 2 theme foundation.
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md` names shell and navigation controls including header modes, sticky behavior, drawer behavior, navigation density, search entry behavior, and cart mode.
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` defines shell and navigation settings domains for header system, navigation behavior, and search/cart entry.
- `Verified`: `project/layout/theme.liquid` currently contains a base body shell and `MainContent`, but no header, footer, primary navigation, utility navigation, search entry, cart entry, or locale-switch shell.
- `Verified`: `project/config/settings_schema.json` currently contains `shell_behavior` settings for direction mode and shell width only.
- `Verified`: `project/assets/stone-runtime.js` currently contains progressive enhancement for existing section behavior, not global shell/navigation behavior.

## Option Comparison

### Stay Homepage-Only

- `Verified`: This option would preserve the current narrow homepage proof and avoid shell drift.
- `Inference`: It would leave the first canonical `index.json` host without the global entry and exit surfaces needed for a usable theme shell.
- `Inference`: It would make later collection, PDP, editorial, and search decisions harder to evaluate because they would still lack a shared shell boundary.

### Bounded Shell Reopen

- `Verified`: This option can stay global, shared, and behavior-light.
- `Verified`: It can limit admissible surfaces to header, footer, logo/brand entry, primary menu rendering, utility link area, cart link entry, search link entry, locale-switch surface, skip/main-content continuity, and bilingual/RTL-safe settings labels.
- `Verified`: It can keep search results, predictive search, collection/archive navigation semantics, PDP behavior, mega-menu content strategy, account flows, cart drawer behavior, and checkout-sensitive behavior blocked.
- `Inference`: This is the strongest next lane because the verified homepage proof now needs a shared shell boundary before broader template or preset realization can be evaluated cleanly.

### Broad Theme-Shell Reopen

- `Verified`: This option would combine shell, search, navigation strategy, collection/archive behavior, PDP linkage, and commerce utilities.
- `Inference`: It would exceed the current evidence and could convert shell work into broad theme completion drift.
- `Inference`: It should remain rejected until each behavior domain has its own evidence and bounded package.

## Decision

- `Verified`: Reopen only a docs-only shell/navigation runtime-boundary lane.
- `Verified`: Do not authorize shell/navigation runtime implementation in `UNIT-146`.
- `Verified`: Do not authorize collection host work, collection behavior, archive behavior, PDP host work, PDP behavior, editorial/search host work, preset realization, or hardening.
- `Inference`: The next honest step is `UNIT-152`, a docs-only global shell/navigation runtime-boundary package outside the pre-authored `UNIT-147` through `UNIT-151` stack.

## Admissible Shell Surfaces For The Next Boundary Package

- `Verified`: Header structure and placement.
- `Verified`: Footer structure and placement.
- `Verified`: Brand/logo entry.
- `Verified`: Primary menu rendering from Shopify link lists.
- `Verified`: Utility navigation area.
- `Verified`: Cart link entry only.
- `Verified`: Search entry link or form shell only.
- `Verified`: Locale-switch surface only.
- `Verified`: Skip link and `MainContent` continuity.
- `Verified`: RTL-safe and bilingual-safe shell settings labels.

## Blocked Surfaces

- `Verified`: Search results behavior.
- `Verified`: Predictive-search behavior.
- `Verified`: Collection/archive host behavior.
- `Verified`: Collection companion behavior.
- `Verified`: PDP host behavior.
- `Verified`: PDP companion behavior.
- `Verified`: Product recommendations.
- `Verified`: Mega-menu content strategy beyond rendering a bounded menu hierarchy.
- `Verified`: Account flow behavior.
- `Verified`: Cart drawer behavior.
- `Verified`: Checkout-sensitive behavior.
- `Verified`: Preset-pack realization.
- `Verified`: Phase 5 hardening and launch-readiness work.

## Acceptance Criteria

1. `Verified`: Compare stay-homepage-only, bounded shell reopen, and broad theme-shell reopen.
2. `Verified`: Record which shell surfaces are admissible now and which remain blocked.
3. `Verified`: Keep search results, collection behavior, PDP behavior, and archive behavior fail-closed.
4. `Verified`: Route only to a later docs-only shell/navigation runtime-boundary unit.

## Intended Next Step

- `Verified`: Route only to `UNIT-152`, a docs-only global shell/navigation runtime-boundary package.
- `Verified`: Keep `UNIT-147` through `UNIT-151` blocked until predecessor checks explicitly approve their domains.

## Readiness Verdict

- `Verified`: PASS. `UNIT-146` admits one next docs-only shell/navigation runtime-boundary unit and no runtime implementation.
