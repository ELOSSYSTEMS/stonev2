# App Block Placement Policy

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define where Shopify app blocks may be supported in Stone V2 before runtime section work begins.

## Platform Rules

Verified:

- App blocks require explicit schema support with `{ "type": "@app" }`.
- App blocks render by iterating `section.blocks` and using `{% render block %}` for `block.type == '@app'`.
- App blocks are not supported in statically rendered sections.
- Blocks of type `@app` must not use `limit`.
- `sections/apps.liquid` must not include `templates` or `enabled_on/disabled_on.templates`.

Required render mechanic:

```liquid
{% for block in section.blocks %}
  {% case block.type %}
    {% when '@app' %}
      {% render block %}
  {% endcase %}
{% endfor %}
```

Required schema mechanic:

```json
{
  "type": "@app"
}
```

## Placement Policy

| Zone | Policy | Reason | Required validation |
| --- | --- | --- | --- |
| `sections/apps.liquid` | ALLOWED | Dedicated generic app wrapper. | App block present, app block missing, no `templates` schema key. |
| PDP below product form | ALLOWED | Common reviews, subscriptions, sizing, delivery, and custom form area. | Must not interrupt buy buttons or variant selection. |
| PDP after product info | ALLOWED | Safe lower-risk app content area. | App block present/missing, spacing collapse. |
| Featured product after product info | ALLOWED | Similar to PDP but not primary template owner. | Must stay outside critical add-to-cart controls. |
| Main cart below cart items | ALLOWED | Upsell, loyalty, shipping, and trust app placements. | Empty/full cart, app missing. |
| Footer | RESTRICTED | App blocks can cause visual sprawl. | Visual containment and spacing rules required. |
| Customer/account pages | CONDITIONAL | Useful only if customer templates are admitted. | Auth state and form error handling required. |
| Blog/article below content | CONDITIONAL | Useful for comments, social, or article commerce apps. | Must not break article reading flow. |
| Header | BLOCKED BY DEFAULT | Header is high-risk for layout, nav, and accessibility. | Owner approval required. |
| Product form critical path | BLOCKED | Purchase flow must remain controlled. | No app block inside variant picker, quantity, or buy buttons. |
| Collection product-card loops | BLOCKED | App blocks in loops risk performance and layout instability. | No app block inside product grid iteration. |
| Static sections | BLOCKED | Shopify app blocks are not supported in statically rendered sections. | Classification must not be `STATIC_NO_BLOCK_SECTION`. |
| Strict overlay internals | BLOCKED BY DEFAULT | Focus trap and scroll lock can break. | Overlay-specific derivative plan required. |

## Fail-Closed Rules

- If a section is classified as `STATIC_NO_BLOCK_SECTION`, app blocks are blocked.
- If a section has unknown block model, app blocks are blocked.
- If the app zone lacks `{ "type": "@app" }`, it is not app-compatible.
- If the render loop does not use `{% render block %}`, it is not app-compatible.
- If app content would appear inside checkout, billing, or critical add-to-cart controls, stop.

## Acceptance Gate

Before any runtime app-block implementation:

- The derivative unit must list exact files.
- The derivative unit must list every app block zone.
- The derivative unit must include app block present/missing QA.
- The derivative unit must confirm the section is JSON-template-compatible or `sections/apps.liquid`.
