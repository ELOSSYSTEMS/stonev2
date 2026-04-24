# Shopify Theme Upload Error Audit - 2026-04-24

## Scope

This audit covers the Liquid and schema errors observed while creating and uploading the unpublished Shopify theme named `Stonev2` to `elos-dev.myshopify.com` on 2026-04-24.

It includes:

- Shopify CLI upload errors from the server-side theme push.
- Local Shopify Theme Check results.
- Repo-level file pattern evidence for the repeated Liquid syntax failure.
- Probable causes and repair order.

It does not include:

- A functional storefront QA pass.
- A full visual review.
- Any repair implementation.

## Executive Summary

Verified:

- Shopify created the unpublished theme `Stonev2` with theme id `156487712965`.
- The upload completed with errors, so the remote theme is incomplete.
- The dominant Liquid failure is invalid multiline `render` syntax inside `{% liquid %}` blocks.
- Shopify rejected many section files because continuation argument lines such as `section: section,` and `product: product,` were parsed as independent Liquid tags.
- Template JSON errors are follow-on errors caused by rejected section files.
- `config/settings_schema.json` has a blank default for `stone_brand_name`, which Shopify rejected.
- Local Theme Check reported 127 errors and 72 warnings.
- Local Theme Check translation errors are caused by runtime translation keys being referenced while `project/locales/en.default.json` is missing.

Inference:

- The same coding pattern was copied across the Stone section library, which created one repeated Liquid parser failure across many files.
- Earlier local checks were too narrow: JSON/schema parsing and custom harness checks did not exercise Shopify's server-side Liquid upload parser.
- The upload was able to create a theme shell, but individual invalid files were rejected during upload.

Speculative:

- The blank brand default may have been intentional as a placeholder, but Shopify's settings schema rules do not accept that blank default in this context.

## Commands Used As Evidence

```powershell
shopify theme push --store elos-dev.myshopify.com --path project --unpublished --theme Stonev2 --json
shopify theme list --store elos-dev.myshopify.com
shopify theme check --path project --output json
```

Pattern checks were also run against `project/sections/*.liquid` to count multiline continuation lines after `render` calls.

## Remote Theme Result

Verified:

- Store: `elos-dev.myshopify.com`
- Theme name: `Stonev2`
- Theme id: `156487712965`
- Theme role: `unpublished`
- Editor URL: `https://elos-dev.myshopify.com/admin/themes/156487712965/editor`
- Preview URL: `https://elos-dev.myshopify.com?preview_theme_id=156487712965`
- Upload status: created with errors

Impact:

- The remote theme exists.
- The remote theme cannot be treated as a complete or reliable theme until the rejected files are fixed and pushed successfully.

## Error Family A - Multiline `render` Arguments Inside `{% liquid %}` Blocks

Verified:

- At least 41 section files contain the repeated continuation pattern `section: section` after a `render 'stone-section-shell',` line.
- At least 5 section files contain the repeated continuation pattern `product: ...` after a `render 'stone-product-card',` line.
- Shopify upload errors included:
  - `Liquid syntax error: Error in tag 'section' - Valid syntax: section '[type]'`
  - `Liquid syntax error: Unknown tag 'product'`

Why it occurred:

- The affected files use `{%- liquid ... -%}` blocks.
- Inside a Liquid block, each newline is parsed as a separate Liquid statement.
- A multiline render like this is invalid in that context:

```liquid
{%- liquid
  render 'stone-section-shell',
    section: section,
    heading: stone_heading
-%}
```

- Shopify parses `section: section,` as if it is a standalone `section` tag.
- Shopify parses `product: product,` as if it is a standalone `product` tag.
- `section` is a real Shopify tag, but the syntax is wrong for a section tag.
- `product` is not a valid standalone Liquid tag, so Shopify reports it as unknown.

Correct direction:

Use one of these valid patterns consistently.

Option 1: keep the call inside a `{% liquid %}` block, but keep the render call on one logical Liquid statement:

```liquid
{%- liquid
  render 'stone-section-shell', section: section, heading: stone_heading, content: stone_section_content
-%}
```

Option 2: leave the Liquid block and use a normal Liquid tag:

```liquid
{% render 'stone-section-shell',
  section: section,
  heading: stone_heading,
  content: stone_section_content
%}
```

## Files With `stone-section-shell` Continuation Failures

Verified:

The repeated `section: section` continuation pattern was found in 41 section files:

- `project/sections/stone-blog-article-highlights.liquid`
- `project/sections/stone-category-entry-grid.liquid`
- `project/sections/stone-category-media-band.liquid`
- `project/sections/stone-collection-context-card.liquid`
- `project/sections/stone-content-card-strip.liquid`
- `project/sections/stone-curated-product-trio.liquid`
- `project/sections/stone-editorial-quote.liquid`
- `project/sections/stone-featured-collection-grid.liquid`
- `project/sections/stone-featured-product-showcase.liquid`
- `project/sections/stone-hero-opening.liquid`
- `project/sections/stone-main-article.liquid`
- `project/sections/stone-main-blog.liquid`
- `project/sections/stone-main-collection.liquid`
- `project/sections/stone-main-product.liquid`
- `project/sections/stone-main-search.liquid`
- `project/sections/stone-pdp-size-chart.liquid`
- `project/sections/stone-pdp-spec-sheet.liquid`
- `project/sections/stone-process-steps.liquid`
- `project/sections/stone-product-context-card.liquid`
- `project/sections/stone-product-pair-comparison.liquid`
- `project/sections/stone-shoppable-media-drawer.liquid`
- `project/sections/stone-shoppable-media-focus.liquid`
- `project/sections/stone-shoppable-media-motion-story.liquid`
- `project/sections/stone-shoppable-media-overlay.liquid`
- `project/sections/stone-shoppable-media-story.liquid`
- `project/sections/stone-story-split.liquid`
- `project/sections/stone-trust-faq.liquid`
- `project/sections/stone-trust-help-prompt.liquid`
- `project/sections/stone-trust-logo-rail.liquid`
- `project/sections/stone-trust-reassurance-lane.liquid`
- `project/sections/stone-trust-stat-strip.liquid`
- `project/sections/stone-trust-testimonial.liquid`
- `project/sections/stone-utility-action-group.liquid`
- `project/sections/stone-utility-block-stack.liquid`
- `project/sections/stone-utility-divider-band.liquid`
- `project/sections/stone-utility-key-value-list.liquid`
- `project/sections/stone-utility-layout-composition.liquid`
- `project/sections/stone-utility-notice.liquid`
- `project/sections/stone-utility-prompt.liquid`
- `project/sections/stone-utility-richtext.liquid`
- `project/sections/stone-utility-spacer.liquid`

Representative evidence:

- `project/sections/stone-hero-opening.liquid`: `render 'stone-section-shell',` followed by `section: section,`.
- `project/sections/stone-trust-faq.liquid`: `render 'stone-section-shell',` followed by `section: section,`.
- `project/sections/stone-featured-product-showcase.liquid`: `render 'stone-section-shell',` followed by `section: section,`.

## Files With `stone-product-card` Continuation Failures

Verified:

The repeated `product: ...` continuation pattern was found in 5 section files:

- `project/sections/stone-curated-product-trio.liquid`
- `project/sections/stone-featured-collection-grid.liquid`
- `project/sections/stone-featured-product-showcase.liquid`
- `project/sections/stone-main-collection.liquid`
- `project/sections/stone-product-pair-comparison.liquid`

Representative evidence:

- `project/sections/stone-featured-product-showcase.liquid`: `render 'stone-product-card',` followed by `product: stone_selected_product,`.
- `project/sections/stone-featured-collection-grid.liquid`: multiple `render 'stone-product-card',` calls followed by `product: product,`.
- `project/sections/stone-curated-product-trio.liquid`: multiple `render 'stone-product-card',` calls followed by product argument continuation lines.

Impact:

- Shopify rejected the affected section files.
- Any template that references these rejected sections then failed with a missing section type error.

## Error Family B - Template JSON Section Type Follow-On Errors

Verified:

- Shopify reported many template errors in `templates/page.stone-runtime-*.json`.
- Shopify also reported `templates/index.json` with `Section type 'stone-hero-opening' does not refer to an existing section file`.

Why it occurred:

- Template JSON files reference section types by section file name.
- When Shopify rejected the corresponding section Liquid file because of syntax errors, the referenced section type was unavailable on the remote theme.
- The template error is therefore a downstream effect, not the root cause.

Impact:

- Fixing the section Liquid syntax should clear many of the template section type errors.
- Template files should still be revalidated after the section upload succeeds, because true template composition errors can be hidden behind section rejection.

## Error Family C - `settings_schema.json` Blank Default

Verified:

- `project/config/settings_schema.json` contains a setting with id `stone_brand_name`.
- That setting has `"default": ""`.
- Shopify rejected it with: `Section 1: setting with id="stone_brand_name" default can't be blank`.

Why it occurred:

- Shopify rejected a blank default value for this text setting.
- This is a schema validation error, separate from the Liquid parser failures.

Correct direction:

- Set a nonblank default, such as `"Stone"`, if a default is desired.
- Or remove the default key if Shopify accepts the setting without a default in this schema context.

## Error Family D - Missing Runtime Locale Files

Verified:

- Local Theme Check reported 127 errors.
- The translation-file scan found 43 translation file references.
- The repo has `project/locales/en.schema.json`.
- The repo has `project/locales/he.default.schema.json`.
- The repo does not have `project/locales/en.default.json`.
- The repo does not have `project/locales/he.default.json`.
- Theme Check translation errors were concentrated in sections and snippets that call the translation filter.

Highest local translation error counts:

- `project/sections/stone-main-collection.liquid`: 15
- `project/sections/stone-main-search.liquid`: 11
- `project/snippets/stone-global-header.liquid`: 8
- `project/sections/stone-main-product.liquid`: 7
- `project/sections/stone-main-blog.liquid`: 7
- `project/sections/stone-pdp-size-chart.liquid`: 6
- `project/sections/stone-utility-layout-composition.liquid`: 5

Why it occurred:

- Shopify runtime translation keys belong in runtime locale files such as `locales/en.default.json`.
- Schema translation files are for theme editor schema labels and settings metadata.
- The theme references runtime translation keys, but the default runtime English locale file is missing.

Impact:

- Local Theme Check correctly flags missing runtime translations.
- Even after Liquid syntax is fixed, translation coverage remains a separate quality gate.

Correct direction:

- Create `project/locales/en.default.json` with all runtime keys used by Liquid.
- Decide whether Hebrew runtime parity requires `project/locales/he.default.json` in this unit or in a later localization unit.
- Keep schema labels in schema locale files and runtime storefront text in runtime locale files.

## Error Family E - Local Theme Check Warnings

Verified:

- Local Theme Check reported 72 warnings.
- The warning set includes non-fatal quality issues, including unused assigns.

Why it occurred:

- Some Liquid variables are assigned but not used after edits or copied section patterns.
- These warnings are separate from the hard upload blockers.

Impact:

- These warnings should not block the first syntax repair if the goal is to make the theme upload cleanly.
- They should be addressed after the hard Liquid/schema blockers are fixed.

## Why These Errors Escaped Earlier Checks

Verified:

- The Shopify server upload parser caught the Liquid syntax errors.
- Local Theme Check caught missing translation keys.
- Custom repo checks and JSON parsing do not prove server-side Liquid upload validity.

Inference:

- The prior harness checks likely focused on repo governance, JSON validity, schema file presence, and bounded file scope.
- Those checks were not equivalent to a Shopify theme upload validation.
- The repeated render pattern looked structurally consistent across files, but it was invalid for the parser context where it was used.

## Repair Order

1. Fix the multiline `render` calls inside `{% liquid %}` blocks.
2. Re-run local pattern checks to confirm no `render` continuation argument lines remain inside Liquid blocks.
3. Re-run `shopify theme check --path project --output json`.
4. Fix `project/config/settings_schema.json` so `stone_brand_name` has an accepted default strategy.
5. Add or populate `project/locales/en.default.json` for runtime translation keys.
6. Decide whether `project/locales/he.default.json` is required now for bilingual parity or should be handled in a later localization unit.
7. Push again to the existing unpublished theme id `156487712965`, or create a fresh unpublished theme after local checks are clean.
8. Verify the theme list, editor URL, preview URL, and storefront rendering after upload.

## Hard Blocks Before Treating `Stonev2` As Ready

Verified:

- Current remote upload has hard Liquid syntax errors.
- Current remote upload has a hard settings schema error.
- Current local validation has missing runtime translation errors.

Required evidence to unblock:

- Clean Shopify upload without rejected files.
- Clean or accepted Shopify Theme Check result.
- Confirmed remote theme id and preview URL after the repair push.
- Template rendering verification after the referenced section files exist remotely.
