# Shopify Upload Error Resolution Handoff v1

## Current State

Verified:

- `Stonev2` exists on `elos-dev.myshopify.com` as unpublished theme id `156487712965`.
- The theme upload completed with errors and is not complete.
- The audit file is `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`.
- This plan package is documentation-only.

## Next Unit

Verified:

- Next execution-ready unit: `UNIT-185`.
- Title: Repair invalid multiline Liquid render syntax.
- Allowed project files: `project/sections/*.liquid`.
- Required first proof: no invalid `stone-section-shell` or `stone-product-card` multiline render continuation remains inside `{% liquid %}` block syntax.
- Required validation: `shopify theme check --path project --output json`.

## Non-Scope For Next Unit

Verified:

- Do not edit `project/config/settings_schema.json`.
- Do not add or edit runtime locale files.
- Do not push to Shopify.
- Do not change presets, PDP composition, collection composition, cart, checkout, products, collections, app code, or admin behavior.

## Resume Instruction

Use `$project-build` for `UNIT-185` only.

Stop after the Liquid syntax repair is verified and committed.
