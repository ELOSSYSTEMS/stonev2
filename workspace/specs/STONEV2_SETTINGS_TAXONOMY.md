# STONEV2 Settings Taxonomy

## Status

- `Verified`: This settings taxonomy is a governed Phase 1 canon artifact derived from the five architecture documents in `docs/architecture/`.
- `Inference`: Unless stated otherwise, the taxonomy, conventions, and governance rules below are normalized design decisions inferred from those source documents.

## Core Position

- `Verified`: Deep editor configurability is a core product feature of Stone V2.
- `Verified`: Settings depth must remain normalized and coherent.
- `Verified`: Bilingual editor support is core, not optional.
- `Inference`: The settings taxonomy exists to reduce routine custom CSS work while preserving platform maintainability for repeated developer use.

## Global Settings Domains

| Domain | Purpose | Typical Controls | Notes |
| --- | --- | --- | --- |
| Brand identity | Establish store-wide brand defaults. | logos, favicon, color schemes, typography presets, default button styles, default card styles. | Use a shared vocabulary that later section families inherit rather than override ad hoc. |
| Global design system | Define platform-wide visual primitives. | spacing scale, density presets, radius system, border system, shadow system, motion level, tile and surface treatment. | Prefer tokens and preset selectors over freeform values where practical. |
| RTL and Hebrew defaults | Preserve local readability and layout coherence. | default text alignment behavior, RTL-aware spacing logic, Hebrew-first typography defaults, icon mirroring expectations where relevant. | These settings should reinforce RTL-native behavior rather than letting LTR assumptions leak into default configurations. |

## Shell And Navigation Settings Domains

| Domain | Purpose | Typical Controls | Notes |
| --- | --- | --- | --- |
| Header system | Control site entry and persistent navigation behavior. | header mode, sticky behavior, density, announcement integration, logo treatment. | Keep mode changes inside shared header semantics rather than bespoke header options. |
| Navigation behavior | Control menus and browsing flows. | primary navigation density, drawer behavior, mega-menu exposure level, submenu behavior, mobile navigation mode. | Use common naming for menu hierarchy, density, and reveal behavior. |
| Search and cart entry | Control utility access patterns. | search entry behavior, cart mode, cart entry emphasis, drawer versus page behavior. | Commerce utilities should stay under shell behavior, not duplicate inside multiple families. |

## Commerce Behavior Settings Domains

| Domain | Purpose | Typical Controls | Notes |
| --- | --- | --- | --- |
| Product-card behavior | Normalize merchandising presentation. | density, media ratio, badge behavior, quick add, quick view, secondary metadata exposure. | Product-card settings should be reusable across merchandising, collection companion, and PDP companion families. |
| Collection behavior | Normalize browsing and refinement behavior. | collection toolbar behavior, density presets, merchandising emphasis, support-strip visibility. | Collection-specific settings should live in one vocabulary shared across collection-supporting families. |
| PDP support behavior | Normalize support behavior around the product page. | recommendation behavior, trust cue behavior, complementary product logic, comparison emphasis. | PDP companion settings should inherit commerce vocabulary instead of inventing new names. |

## Section Family Settings Domains

| Domain | Purpose | Shared Controls |
| --- | --- | --- |
| Layout and container | Control structural placement. | width mode, container mode, stack mode, column behavior, desktop and mobile layout behavior. |
| Density and spacing | Control rhythm and compression. | density preset, vertical spacing preset, internal gap preset, section separation behavior. |
| Tone and emphasis | Control visual intensity. | color scheme, surface treatment, overlay behavior, CTA emphasis, contrast mode. |
| Media behavior | Control image and video treatment. | media ratio, crop mode, fit mode, focal behavior, poster treatment. |
| Visibility and ordering | Control conditional presence. | visibility rules, desktop or mobile ordering, optional block exposure, content priority. |

## Block-Level Settings Domains

| Block Family | Typical Controls | Governance Rule |
| --- | --- | --- |
| Content block family | heading scale, text width, list style, quote emphasis, CTA grouping. | Reuse shared label patterns so content blocks behave predictably across families. |
| Media block family | ratio, crop, caption exposure, hotspot marker style, gallery density. | Media settings should remain portable between hero, editorial, and shoppable media families. |
| Commerce block family | badge behavior, trust cue style, offer emphasis, product signal density. | Commerce block settings should remain portable between merchandising and PDP-supporting families. |
| Layout block family | stack mode, column count, divider treatment, spacer size. | Layout block settings should stay utility-focused and avoid duplicating section-level settings. |

## Merchant-Safe Versus Advanced Developer Controls

- `Verified`: Merchant-safe controls should be the default visible layer for ordinary customization.
- `Verified`: Advanced developer controls should be grouped clearly and remain discoverable without crowding the merchant-safe layer.
- `Inference`: Merchant-safe controls should favor presets, selectors, and normalized options over low-level numeric calibration.
- `Inference`: Advanced developer controls may expose finer width, ordering, visibility, spacing, border, and shadow calibration when they use the same naming conventions as the shared taxonomy.

## Grouping And Naming Rules

- `Verified`: The same concept must not appear under multiple unrelated names.
- `Verified`: Group settings by stable domains such as brand identity, shell behavior, commerce behavior, section family behavior, and block family behavior.
- `Verified`: Use a predictable noun-first vocabulary such as `color scheme`, `width mode`, `density preset`, `visibility rule`, and `CTA emphasis`.
- `Inference`: Settings labels should describe intent and result instead of implementation detail.

## Shared Setting-Shape Conventions

- `Verified`: Shared concepts should reuse shared setting shapes whenever possible.
- `Inference`: Preset selectors should be preferred for repeated choices such as density, spacing, radius, tone, and card treatment.
- `Inference`: Boolean toggles should be reserved for true or false behavior, not for cases that really require a named mode.
- `Inference`: Freeform fields should be rare and should not replace a normalized design vocabulary.

## Rules To Reduce Routine Custom CSS Dependence

- `Verified`: Expose normalized controls for color schemes, typography presets, spacing presets, width modes, radius and border systems, tile and card appearance, overlay behavior, and visibility behavior.
- `Inference`: Add settings when they solve repeated merchant or developer needs across families, not when they only rescue one layout.
- `Inference`: Shared block family settings should absorb recurring visual variation before custom CSS is considered acceptable.

## Anti-Sprawl Rules

- `Verified`: Setting sprawl is a defect because it reduces maintainability and weakens the developer-platform promise.
- `Verified`: Help text should explain effect, not restate the label.
- `Verified`: New settings should be rejected when they duplicate an existing concept under a new name.
- `Inference`: A new setting should justify itself by serving multiple families, multiple presets, or a high-frequency customization path.

## Maintainability Relationship

- `Verified`: Settings vocabulary and platform maintainability are directly linked.
- `Inference`: The platform stays broad only if developers can predict where a control belongs and merchants can understand what a control changes.
- `Inference`: A normalized settings taxonomy reduces regressions, shrinks schema duplication, and keeps bilingual schema authoring sustainable.

## RTL And Hebrew-Specific Considerations

- `Verified`: RTL-native behavior and Hebrew-first assumptions are architectural requirements.
- `Inference`: Alignment, spacing, ordering, and icon direction settings should respect RTL defaults before offering overrides.
- `Inference`: Hebrew-facing wording should avoid foreign-feeling labels and should describe real storefront impact in a local editor context.
- `Inference`: Advanced developer controls should not make LTR rescue work a normal expectation inside Stone V2.

## Assumption Audit

- `Verified`: This taxonomy does not define final runtime schema field names yet.
- `Inference`: The runtime schema structure will need to implement this taxonomy later without breaking the shared vocabulary.
- `Inference`: Preset-specific defaults remain a later canon or planning concern and are not defined here beyond shared taxonomy rules.
