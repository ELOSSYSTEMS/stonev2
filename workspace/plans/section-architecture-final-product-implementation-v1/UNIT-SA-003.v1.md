# UNIT-SA-003.v1: Header/Footer Group Shell Runtime Scaffold Plan

Date: 2026-04-24

Status: READY FOR OWNER AUTHORIZATION; NOT EXECUTED

Runtime files changed by this plan: none

## Goal

Define the exact first runtime scaffold for Stone V2 editable header/footer section groups while preserving the existing layout structure and excluding overlay, drawer, search, cart, presets, and theme-block work.

## Scope

This derivative runtime plan covers only:

- Header group JSON.
- Footer group JSON.
- Apps wrapper section.
- Minimal announcement/header/footer/footer-legal shell sections.
- Required schema locale keys.
- Exact `theme.liquid` layout integration decision.

## Out Of Scope

- No implementation during this planning step.
- No Shopify upload during this planning step.
- No `project/assets/**` writes.
- No `project/blocks/**` writes.
- No `project/snippets/**` writes.
- No `project/templates/**` writes.
- No `project/config/**` writes.
- No `project/sections/overlay-group.json`.
- No drawer/search/cart behavior.
- No predictive search.
- No mobile drawer focus trap.
- No modal behavior.
- No cart quantity/update logic.
- No preset composition.

## Source Artifacts Read

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`: VERIFIED
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`: VERIFIED
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-002.v1.md`: VERIFIED
- `workspace/specs/app-block-placement-policy.md`: VERIFIED
- `workspace/specs/rtl-acceptance-checklist.md`: VERIFIED
- `workspace/specs/section-architecture-status-matrix.md`: VERIFIED
- `project/layout/theme.liquid`: VERIFIED
- `project/snippets/stone-global-header.liquid`: VERIFIED
- `project/snippets/stone-global-footer.liquid`: VERIFIED
- `project/locales/en.schema.json`: VERIFIED by targeted scan
- `project/locales/he.default.schema.json`: VERIFIED by targeted scan

## Current Repo Evidence

Verified:

- `project/layout/theme.liquid` line 64 contains the skip link targeting `#MainContent`.
- `project/layout/theme.liquid` line 65 hard-renders `{% render 'stone-global-header', stone_brand_name: stone_brand_name %}`.
- `project/layout/theme.liquid` lines 66-68 preserve `<main id="MainContent" class="stone-main" role="main" tabindex="-1">` and `{{ content_for_layout }}`.
- `project/layout/theme.liquid` line 69 hard-renders `{% render 'stone-global-footer', stone_brand_name: stone_brand_name %}`.
- `project/layout/theme.liquid` line 70 loads `stone-runtime.js`.
- No `project/sections/header-group.json` exists.
- No `project/sections/footer-group.json` exists.
- No `project/sections/apps.liquid` exists.

Inference:

- Option A is required for a real runtime implementation because leaving hard-rendered snippets in place while adding section groups risks duplicate header/footer output or non-rendered group output.

## Layout Integration Decision

Decision: Option A.

The authorized runtime implementation must modify `project/layout/theme.liquid` by replacing direct header/footer snippet renders with section group renders.

Exact line intent:

| Current line | Current markup | Replacement |
| ---: | --- | --- |
| 65 | `{% render 'stone-global-header', stone_brand_name: stone_brand_name %}` | `{% sections 'header-group' %}` |
| 69 | `{% render 'stone-global-footer', stone_brand_name: stone_brand_name %}` | `{% sections 'footer-group' %}` |

Preservation requirements:

- Preserve line 64 skip link target `#MainContent`.
- Preserve `<main id="MainContent" class="stone-main" role="main" tabindex="-1">`.
- Preserve `{{ content_for_layout }}`.
- Preserve body attributes.
- Preserve head markup.
- Preserve `stone-runtime.js`.
- Preserve all unrelated layout markup.

Fail-closed fallback:

- If the runtime implementation cannot use `{% sections 'header-group' %}` and `{% sections 'footer-group' %}` successfully, stop and mark header/footer group runtime as `PARTIAL/BLOCKED` rather than inventing a different layout integration.

## Exact Proposed Runtime Write Set

If owner later authorizes execution, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `project/layout/theme.liquid` | Modify | Replace direct global header/footer snippet renders with section group renders. |
| `project/sections/header-group.json` | Create | Header section group config. |
| `project/sections/footer-group.json` | Create | Footer section group config. |
| `project/sections/apps.liquid` | Create | Generic app-block wrapper section. |
| `project/sections/stone-announcement-bar.liquid` | Create | Minimal non-behavioral announcement section. |
| `project/sections/stone-header-main.liquid` | Create | Sectionized header shell using controlled settings. |
| `project/sections/stone-footer-main.liquid` | Create | Sectionized footer shell using controlled settings. |
| `project/sections/stone-footer-legal.liquid` | Create | Minimal footer legal/policy row. |
| `project/locales/en.schema.json` | Modify | Add section schema labels and settings. |
| `project/locales/he.default.schema.json` | Modify | Add Hebrew section schema labels and settings. |

## Exact Disallowed Runtime Write Set

Do not write:

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

Confirmation:

- No `project/assets/**`, `project/blocks/**`, `project/snippets/**`, `project/templates/**`, or `project/config/**` writes are allowed in this unit.

## Exact Group JSON Structure

`project/sections/header-group.json`:

```json
{
  "type": "header",
  "name": "Header group",
  "sections": {
    "stone_announcement_bar": {
      "type": "stone-announcement-bar",
      "blocks": {},
      "block_order": [],
      "settings": {
        "enabled": false
      }
    },
    "stone_header_main": {
      "type": "stone-header-main",
      "settings": {
        "menu": "main-menu",
        "show_search": true,
        "show_cart_link": true,
        "show_locale_switcher": true
      }
    }
  },
  "order": [
    "stone_announcement_bar",
    "stone_header_main"
  ]
}
```

`project/sections/footer-group.json`:

```json
{
  "type": "footer",
  "name": "Footer group",
  "sections": {
    "stone_footer_main": {
      "type": "stone-footer-main",
      "settings": {
        "menu": "footer",
        "show_brand": true,
        "show_newsletter": false,
        "newsletter_heading": "",
        "newsletter_body": ""
      }
    },
    "stone_footer_legal": {
      "type": "stone-footer-legal",
      "settings": {
        "show_policy_links": true,
        "show_copyright": true,
        "copyright_text": ""
      }
    }
  },
  "order": [
    "stone_footer_main",
    "stone_footer_legal"
  ]
}
```

Notes:

- `overlay-group.json` is excluded from this runtime unit.
- Group JSON structure must parse before any Shopify upload proof.
- The menu handles above are defaults and must not require `settings_data.json` mutation.

## Exact Section Schema IDs

`project/sections/apps.liquid`:

- Block type: `@app`
- Preset name key: `sections.apps.name`
- Settings: none

`project/sections/stone-announcement-bar.liquid`:

- Section setting IDs:
  - `enabled`
  - `text_alignment`
- Block type: `message`
- Block setting IDs:
  - `text`
  - `link`

`project/sections/stone-header-main.liquid`:

- Section setting IDs:
  - `menu`
  - `show_search`
  - `show_cart_link`
  - `show_locale_switcher`
- Blocks: none in this first scaffold

`project/sections/stone-footer-main.liquid`:

- Section setting IDs:
  - `menu`
  - `show_brand`
  - `show_newsletter`
  - `newsletter_heading`
  - `newsletter_body`
- Blocks: none in this first scaffold

`project/sections/stone-footer-legal.liquid`:

- Section setting IDs:
  - `show_policy_links`
  - `show_copyright`
  - `copyright_text`
- Blocks: none in this first scaffold

Schema migration rule:

- Do not rename or remove current global setting IDs in `project/config/settings_schema.json`.
- Do not modify `project/config/settings_schema.json`.
- Preserve current global setting behavior unless the new section settings supersede it through group defaults.

## Exact Locale Keys

Add to `project/locales/en.schema.json` under `sections`:

- `apps.name`
- `stone_announcement_bar.name`
- `stone_announcement_bar.settings.enabled.label`
- `stone_announcement_bar.settings.text_alignment.label`
- `stone_announcement_bar.settings.text_alignment.options.start`
- `stone_announcement_bar.settings.text_alignment.options.center`
- `stone_announcement_bar.settings.text_alignment.options.end`
- `stone_announcement_bar.blocks.message.name`
- `stone_announcement_bar.blocks.message.settings.text.label`
- `stone_announcement_bar.blocks.message.settings.link.label`
- `stone_header_main.name`
- `stone_header_main.settings.menu.label`
- `stone_header_main.settings.show_search.label`
- `stone_header_main.settings.show_cart_link.label`
- `stone_header_main.settings.show_locale_switcher.label`
- `stone_footer_main.name`
- `stone_footer_main.settings.menu.label`
- `stone_footer_main.settings.show_brand.label`
- `stone_footer_main.settings.show_newsletter.label`
- `stone_footer_main.settings.newsletter_heading.label`
- `stone_footer_main.settings.newsletter_body.label`
- `stone_footer_legal.name`
- `stone_footer_legal.settings.show_policy_links.label`
- `stone_footer_legal.settings.show_copyright.label`
- `stone_footer_legal.settings.copyright_text.label`

Add matching keys to `project/locales/he.default.schema.json`.

Runtime locale keys:

- Do not modify `project/locales/en.default.json`.
- Do not modify `project/locales/he.json`.
- Reuse existing runtime snippet locale keys where possible for visible labels during this shell scaffold.

## Block Model Decisions

| Section | Block model | Decision |
| --- | --- | --- |
| `header-group.json` | GROUP_CONFIG | Implement. |
| `footer-group.json` | GROUP_CONFIG | Implement. |
| `apps.liquid` | APP_WRAPPER_SECTION | Implement with `@app` only. |
| `stone-announcement-bar.liquid` | SECTION_BLOCK_SECTION | Implement local `message` block. |
| `stone-header-main.liquid` | SECTION_BLOCK_SECTION | Implement settings-only shell; no blocks. |
| `stone-footer-main.liquid` | SECTION_BLOCK_SECTION | Implement settings-only shell; no blocks. |
| `stone-footer-legal.liquid` | SECTION_BLOCK_SECTION | Implement settings-only shell; no blocks. |
| `overlay-group.json` | GROUP_CONFIG | Excluded. |

## App Block Policy Impact

`apps.liquid` must include:

```json
{
  "type": "@app"
}
```

`apps.liquid` must render app blocks with:

```liquid
{% for block in section.blocks %}
  {% case block.type %}
    {% when '@app' %}
      {% render block %}
  {% endcase %}
{% endfor %}
```

Rules:

- Do not add `limit` to `@app`.
- Do not add app blocks to header sections.
- Do not add app blocks to static sections.
- Do not add app blocks to footer sections in this unit.
- Do not add `templates` to `apps.liquid`.
- Do not add `enabled_on.templates` or `disabled_on.templates` to `apps.liquid`.

## Accessibility Requirements

Runtime implementation must preserve:

- Skip link target `#MainContent`.
- `<main id="MainContent" class="stone-main" role="main" tabindex="-1">`.
- Header brand link keyboard reachability.
- Header navigation accessible label.
- Search form label association if search remains enabled.
- Cart link keyboard reachability.
- Locale selector label association if locale switcher remains enabled.
- Footer navigation accessible label.

No drawer/modal accessibility is in scope.

## RTL Requirements

Runtime implementation must verify:

- Header brand, menu, search, cart, and locale controls remain readable in RTL.
- Footer menu and legal row remain readable in RTL.
- Long Hebrew menu labels do not overlap controls.
- No new hard-coded `left`/`right` CSS is introduced because no CSS files are in the write set.

## Performance Budget

Expected incremental cost:

- JS: `0KB`.
- CSS: `0KB`.
- Media: `0`.

Fail condition:

- Any new asset, JavaScript, CSS, image, or video dependency is introduced.

## Data Fallbacks

| Data missing | Required behavior |
| --- | --- |
| Header menu | Render brand/home fallback or no broken nav. |
| Footer menu | Omit footer nav without empty list. |
| Brand name | Preserve existing `stone_brand_name` fallback from `theme.liquid`. |
| Announcement blocks | Render nothing on storefront when disabled/empty. |
| Footer legal text | Use shop name/current year or hide optional custom text. |
| App blocks | Render nothing safely. |
| Locale switcher unavailable | Hide locale switcher. |

## Schema Migration Review

Expected implementation report:

| Category | IDs |
| --- | --- |
| Preserved schema IDs | Existing global settings in `project/config/settings_schema.json`; do not modify config. |
| Added schema IDs | `enabled`, `text_alignment`, `text`, `link`, `menu`, `show_search`, `show_cart_link`, `show_locale_switcher`, `show_brand`, `show_newsletter`, `newsletter_heading`, `newsletter_body`, `show_policy_links`, `show_copyright`, `copyright_text`. |
| Renamed schema IDs | none |
| Removed schema IDs | none |
| JSON templates affected | none |
| Merchant customization risk | LOW/MEDIUM: layout integration changes header/footer ownership; verify no duplicate output. |

Fail-closed:

- Stop if config schema must be modified.
- Stop if `settings_data.json` must be modified.
- Stop if template JSON must be modified.
- Stop if the layout replacement causes duplicate or missing header/footer output.

## Validation Commands

Required after authorized runtime execution:

- `git status --short -- project`
- Parse JSON:
  - `project/sections/header-group.json`
  - `project/sections/footer-group.json`
  - `project/locales/en.schema.json`
  - `project/locales/he.default.schema.json`
- Parse section schemas:
  - `project/sections/apps.liquid`
  - `project/sections/stone-announcement-bar.liquid`
  - `project/sections/stone-header-main.liquid`
  - `project/sections/stone-footer-main.liquid`
  - `project/sections/stone-footer-legal.liquid`
- Confirm layout integration:
  - `project/layout/theme.liquid` contains `{% sections 'header-group' %}`.
  - `project/layout/theme.liquid` contains `{% sections 'footer-group' %}`.
  - `project/layout/theme.liquid` does not contain `{% render 'stone-global-header'`.
  - `project/layout/theme.liquid` does not contain `{% render 'stone-global-footer'`.
  - `project/layout/theme.liquid` still contains `href="#MainContent"`.
  - `project/layout/theme.liquid` still contains `<main id="MainContent"`.
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

Required after authorized runtime execution:

- Home renders one header and one footer.
- Product renders one header and one footer.
- Collection renders one header and one footer.
- Search renders one header and one footer.
- Header/footer are not duplicated.
- Header/footer are not missing.
- Skip link still moves to `#MainContent`.
- Header menu fallback works when menu is missing.
- Footer menu fallback works when menu is missing.
- App wrapper with no app blocks creates no large blank region.
- Long Hebrew menu labels do not overlap.
- RTL header/footer layout remains readable.

## Rollback List

If executed later, revert exactly:

- `project/layout/theme.liquid`
- `project/sections/header-group.json`
- `project/sections/footer-group.json`
- `project/sections/apps.liquid`
- `project/sections/stone-announcement-bar.liquid`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-footer-main.liquid`
- `project/sections/stone-footer-legal.liquid`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`

## Builder

Option A is the minimal coherent runtime path because the current layout hard-renders header and footer snippets. Replacing the direct renders with section group tags prevents duplicated shell output and makes group JSON meaningful.

The implementation must preserve `MainContent`, the skip link, body/head structure, runtime script loading, and unrelated layout markup.

## Adversarial reviewer

Risks:

1. The `{% sections 'header-group' %}` and `{% sections 'footer-group' %}` tags must be accepted by Shopify Theme Check and remote upload.
2. Group JSON schema must be exact enough for Shopify upload.
3. Replacing snippet renders can remove visible behavior if shell sections are incomplete.
4. Section setting defaults may not perfectly match existing global settings.
5. App wrapper must not include unsupported schema keys.

Fail-closed response:

- If Theme Check rejects section group tags, stop and mark the runtime `BLOCKED`.
- If group JSON does not render, stop and mark the runtime `PARTIAL/BLOCKED`.
- Do not fall back to dual snippet plus group rendering.
- Do not implement overlay group to compensate.

## Final recommendation or Reconciliation

Proceed with Option A only after explicit owner authorization.

Do not execute this plan yet.

When authorized, implement the exact write set and verify that layout output has one header, one footer, preserved skip link, and preserved `MainContent`.

## Authorization Required

Runtime execution remains blocked until the owner explicitly says:

```text
AUTHORIZED: EXECUTE PLAN
```

## Readiness Verdict

READY FOR OWNER AUTHORIZATION
