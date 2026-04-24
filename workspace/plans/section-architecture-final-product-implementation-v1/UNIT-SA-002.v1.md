# UNIT-SA-002.v1: Global Group Shell Scaffolding Plan

Date: 2026-04-24

Status: READY FOR OWNER AUTHORIZATION; NOT EXECUTED

Runtime files changed by this unit: none

## Goal

Prepare the first bounded runtime implementation plan for editable global group shell scaffolding without implementing runtime files.

## Scope

This derivative plan covers the next possible runtime unit only:

- Header group JSON scaffold.
- Footer group JSON scaffold.
- Apps wrapper section.
- Non-behavioral header/footer shell sections.
- Locale schema labels needed by those shell sections.

This plan deliberately excludes drawer/search/cart behavior.

## Out Of Scope

- No runtime writes in this unit.
- No Shopify upload.
- No preset composition.
- No cart drawer behavior.
- No search drawer behavior.
- No predictive search.
- No mobile drawer focus trap.
- No modal behavior.
- No cart quantity/update logic.
- No `/blocks` or `_blocks.liquid`.
- No theme-block architecture.
- No customer templates.

## Source Artifacts Read

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`: VERIFIED
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`: VERIFIED
- `workspace/specs/app-block-placement-policy.md`: VERIFIED
- `workspace/specs/dynamic-source-compatibility-matrix.md`: VERIFIED
- `workspace/specs/rtl-acceptance-checklist.md`: VERIFIED
- `workspace/specs/section-architecture-status-matrix.md`: VERIFIED
- `project/layout/theme.liquid`: VERIFIED
- `project/snippets/stone-global-header.liquid`: VERIFIED
- `project/snippets/stone-global-footer.liquid`: VERIFIED
- `project/sections/`: VERIFIED by directory listing
- `project/locales/en.schema.json`: VERIFIED by targeted scan
- `project/locales/he.default.schema.json`: VERIFIED by targeted scan

## Current Repo Evidence

Verified:

- `project/layout/theme.liquid` currently renders `stone-global-header` and `stone-global-footer` snippets directly.
- `project/snippets/stone-global-header.liquid` contains the current menu, search form, cart link, and optional locale switcher markup.
- `project/snippets/stone-global-footer.liquid` contains the current footer brand, footer menu, and meta text markup.
- `project/sections/` currently has no `header-group.json`, `footer-group.json`, or `overlay-group.json`.
- `project/sections/` currently has no `apps.liquid`.
- Locale schema files already contain `stone_global_header` and `stone_global_footer` translation groups.

Inference:

- The safest first runtime scaffold is to introduce editable group/section structure while preserving current visual behavior as closely as possible.
- Because `theme.liquid` currently hard-renders snippets, layout integration must be handled explicitly in the runtime unit. The runtime unit must not assume JSON group files render automatically until the active theme layout integration path is verified.
- Overlay group runtime should remain excluded from the first implementation slice until header/footer/app shell integration is proven.

## Control Matrix Rows Affected

| Section / Surface | Current status | Target status for proposed runtime unit | Priority |
| --- | --- | --- | --- |
| `header-group.json` | MISSING/PARTIAL | PRESENT shell scaffold | P0 |
| `footer-group.json` | MISSING/PARTIAL | PRESENT shell scaffold | P0 |
| `apps.liquid` | MISSING | PRESENT app wrapper | P0 |
| `stone-announcement-bar` | MISSING | PRESENT minimal section | P0 |
| `stone-header-main` | MISSING/PARTIAL | PRESENT minimal section | P0 |
| `stone-footer-main` | MISSING/PARTIAL | PRESENT minimal section | P0 |
| `stone-footer-legal` | MISSING | PRESENT minimal section | P0 |
| `overlay-group.json` | MISSING/PARTIAL | BLOCKED_PENDING_LAYOUT_VALIDATION | P0 |
| `stone-cart-drawer` | MISSING | EXCLUDED from this unit | P0 |
| `stone-search-drawer` | MISSING | EXCLUDED from this unit | P0/P1 |

## Exact Proposed Runtime Write Set

If owner later authorizes execution, the proposed runtime implementation unit may create or modify only:

| File | Action | Reason |
| --- | --- | --- |
| `project/sections/header-group.json` | Create | Editable header group scaffold. |
| `project/sections/footer-group.json` | Create | Editable footer group scaffold. |
| `project/sections/apps.liquid` | Create | Required generic app-block wrapper. |
| `project/sections/stone-announcement-bar.liquid` | Create | Minimal non-behavioral announcement section. |
| `project/sections/stone-header-main.liquid` | Create | Section version of current global header shell. |
| `project/sections/stone-footer-main.liquid` | Create | Section version of current global footer shell. |
| `project/sections/stone-footer-legal.liquid` | Create | Minimal footer legal/policy row. |
| `project/layout/theme.liquid` | Modify only if required by verified group integration | Replace or gate direct snippet rendering only after proving Shopify section-group integration behavior in this theme. |
| `project/locales/en.schema.json` | Modify | Add section schema labels/settings. |
| `project/locales/he.default.schema.json` | Modify | Add Hebrew section schema labels/settings. |

## Exact Disallowed Runtime Write Set

The runtime implementation unit must not write:

- `project/assets/**`
- `project/blocks/**`
- `project/snippets/**`
- `project/templates/**`
- `project/config/**`
- `project/locales/en.default.json`
- `project/locales/he.json`
- `project/sections/overlay-group.json`
- `project/sections/stone-cart-drawer.liquid`
- `project/sections/stone-search-drawer.liquid`
- `project/sections/stone-mobile-navigation-drawer.liquid`
- `project/sections/stone-newsletter-popup.liquid`
- `project/sections/stone-privacy-banner.liquid`
- Shopify remote themes

Exception:

- If runtime proof shows `theme.liquid` must be touched to prevent duplicate header/footer rendering, the derivative implementation plan must name the exact layout change before execution.

## Block Model Decisions

| Section | Block model | Reason |
| --- | --- | --- |
| `header-group.json` | GROUP_CONFIG | Shopify group config, not a regular section. |
| `footer-group.json` | GROUP_CONFIG | Shopify group config, not a regular section. |
| `apps.liquid` | APP_WRAPPER_SECTION | Dedicated app-block wrapper. |
| `stone-announcement-bar.liquid` | SECTION_BLOCK_SECTION | Repeating announcement messages are section-local. |
| `stone-header-main.liquid` | SECTION_BLOCK_SECTION | Controlled header menu/action/promo shell; no theme blocks. |
| `stone-footer-main.liquid` | SECTION_BLOCK_SECTION | Controlled footer columns/newsletter/social/app zones. |
| `stone-footer-legal.liquid` | SECTION_BLOCK_SECTION | Controlled policy/localization/legal rows. |
| `overlay-group.json` | GROUP_CONFIG but excluded | Layout integration must be validated first. |

## App Block Policy Impact

Required for `apps.liquid`:

```json
{
  "type": "@app"
}
```

Required app render path:

```liquid
{% for block in section.blocks %}
  {% render block %}
{% endfor %}
```

Runtime unit rules:

- `apps.liquid` must include a preset.
- `apps.liquid` must not include `templates`.
- `apps.liquid` must not include `enabled_on.templates` or `disabled_on.templates`.
- `@app` blocks must not include `limit`.
- Header shell must not include app blocks.
- Footer shell may include restricted app blocks only if containment is specified. For first implementation, footer app blocks should be deferred unless explicitly included in the runtime plan.

## Accessibility Requirements

The proposed runtime unit must verify:

- Skip link still targets `#MainContent`.
- Header brand link remains keyboard reachable.
- Header nav links remain keyboard reachable.
- Search form remains keyboard usable if included in `stone-header-main`.
- Locale form remains label-associated if included.
- Footer links remain keyboard reachable.
- App wrapper renders no inaccessible empty region when no app blocks exist.

Excluded from this runtime unit:

- Drawer focus trap.
- Modal focus trap.
- ESC behavior.
- Body scroll lock.

## RTL Requirements

The proposed runtime unit must verify:

- Header menu aligns correctly in RTL.
- Header utility/search/cart/locale controls do not overlap with Hebrew labels.
- Footer links stack correctly with long Hebrew labels.
- Footer legal row remains readable with mixed Hebrew/English policy links.
- New CSS is not introduced in this unit unless explicitly authorized. Existing CSS must remain sufficient or gaps must be reported.

## Performance Budget

Expected incremental runtime budget:

- JavaScript: `0KB`.
- CSS: `0KB` unless exact CSS gap is documented and separately authorized.
- Media: none.

Fail condition:

- Any new JavaScript or media dependency appears in this unit.

## Data Fallbacks

Required fallbacks:

| Data missing | Required behavior |
| --- | --- |
| Header menu missing | Render safe brand/home navigation only. |
| Footer menu missing | Render footer without empty nav list. |
| Brand name blank | Preserve existing `theme.liquid` fallback to `shop.name`. |
| Announcement blocks missing | Section renders nothing on storefront or safe editor placeholder only. |
| Legal/policy links missing | Render safe copyright/shop name row. |
| App blocks missing | `apps.liquid` renders nothing safely. |
| Locale unavailable | Hide locale selector. |

## Schema Migration Review

Required output for the runtime implementation report:

| Category | IDs |
| --- | --- |
| Preserved schema IDs | `stone_primary_menu`, `stone_footer_menu`, `stone_show_locale_switcher`, and any existing global settings used by current snippets. |
| Added schema IDs | Must be listed exactly by implementation unit. |
| Renamed schema IDs | Must be `none` unless owner explicitly approves migration. |
| Removed schema IDs | Must be `none`. |
| JSON templates affected | Must be `none`; group JSON files are separate section-group artifacts. |
| Merchant customization risk | Expected LOW if existing global settings are preserved. |

Fail-closed rules:

- Stop if existing global menu/locale setting IDs would be renamed.
- Stop if `settings_data.json` would need mutation.
- Stop if template JSON mutation becomes necessary.

## QA Commands

Required after runtime execution, if authorized later:

- `git status --short -- project`
- JSON parse for:
  - `project/sections/header-group.json`
  - `project/sections/footer-group.json`
  - any modified locale files
- Section schema parse for:
  - `project/sections/apps.liquid`
  - `project/sections/stone-announcement-bar.liquid`
  - `project/sections/stone-header-main.liquid`
  - `project/sections/stone-footer-main.liquid`
  - `project/sections/stone-footer-legal.liquid`
- Locale parity check for added `sections.*` schema keys.
- Theme Check from `project/`.
- Harness:
  - `node HARNESS/checks/check-state-artifacts.mjs`
  - `node HARNESS/checks/check-next-action-scope.mjs`
  - `node HARNESS/checks/check-plan-exists.mjs`
  - `node HARNESS/checks/check-handoff-completeness.mjs`
  - `node HARNESS/checks/check-approval-state.mjs`
  - `node HARNESS/checks/check-lock-state.mjs`
  - `node HARNESS/checks/harness-check.mjs`

## Manual QA Cases

Required manual or browser checks after runtime execution:

- Home page renders one header and one footer.
- Product page renders one header and one footer.
- Collection page renders one header and one footer.
- Search page renders one header and one footer.
- Header menu works with missing menu.
- Footer menu works with missing menu.
- App wrapper works with no app blocks.
- Long Hebrew header/footer labels do not overlap.
- RTL layout remains readable.
- Search form submit still navigates to search route if search form remains in header.

## Rollback List

If implemented later, revert only:

- `project/sections/header-group.json`
- `project/sections/footer-group.json`
- `project/sections/apps.liquid`
- `project/sections/stone-announcement-bar.liquid`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-footer-main.liquid`
- `project/sections/stone-footer-legal.liquid`
- `project/layout/theme.liquid` only if touched
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`

## Builder

The minimal implementation should create header/footer group scaffolds, an app wrapper, and sectionized versions of existing global header/footer behavior. It should not implement drawer/search/cart behavior and should not introduce JavaScript.

The plan preserves current behavior by reusing existing global settings and by keeping visual scope minimal.

## Adversarial reviewer

Risks:

1. Shopify section group integration may not work as assumed in the current layout because `theme.liquid` directly renders snippets.
2. Creating group JSON and leaving direct snippet rendering can duplicate header/footer output.
3. Touching `theme.liquid` increases blast radius.
4. Footer app blocks could create layout instability if admitted too early.
5. Overlay group is a Stone/Prestige-inspired architecture choice and should not be implemented until layout integration is proven.

Required corrections before runtime:

- Validate whether section groups render automatically with the current theme architecture.
- If layout changes are required, name the exact `theme.liquid` change in the runtime implementation plan.
- Keep overlay group excluded.
- Keep app wrapper isolated.

## Final recommendation or Reconciliation

Proceed only to a bounded runtime unit after owner authorization.

Recommended next executable runtime unit:

`UNIT-SA-003: Header/footer group shell runtime scaffold`

`UNIT-SA-003` should implement only header/footer group JSON, `apps.liquid`, announcement/header/footer/footer-legal shell sections, and required schema locale labels. It should exclude overlay group and all drawer/search/cart behavior unless a verification step proves layout integration and owner authorizes overlay scaffolding separately.

## Authorization Required

This plan is not runtime authorization.

Do not execute runtime writes unless the owner explicitly authorizes:

```text
AUTHORIZED: EXECUTE PLAN
```

## Readiness Verdict

READY FOR OWNER AUTHORIZATION
