# Stone V2 Settings And Bilingual Editor

## Status

- `Verified`: This document defines the settings philosophy and bilingual theme-editor contract for Stone V2.
- `Verified`: This document is doc-only. It does not authorize runtime edits by itself.

## Scope

- `Verified`: Goal is to define how Stone V2 exposes deep control without turning the editor into chaos.
- `Verified`: This document covers:
  - settings philosophy
  - shared control-plane layers
  - advanced versus normal controls
  - bilingual Hebrew or English schema support

## Core principle

- `Inference`: Stone V2 should allow most normal customization requests to be solved from the theme editor before developers need custom CSS or Liquid edits.
- `Inference`: Deep control is a product feature.
- `Inference`: Deep control must still be organized into a clean control plane.

## Control-plane layers

### 1. Brand identity

- `Inference`: logos
- `Inference`: favicon
- `Inference`: brand color schemes
- `Inference`: typography presets
- `Inference`: default card and button styles

### 2. Global design system

- `Inference`: spacing scale
- `Inference`: density presets
- `Inference`: radius system
- `Inference`: border and shadow system
- `Inference`: motion level
- `Inference`: tile and surface treatment

### 3. Shell and navigation

- `Inference`: header modes
- `Inference`: sticky behavior
- `Inference`: drawer behavior
- `Inference`: navigation density
- `Inference`: search entry behavior
- `Inference`: cart mode

### 4. Commerce behavior

- `Inference`: product-card density
- `Inference`: quick add and quick view behavior
- `Inference`: collection toolbar behavior
- `Inference`: recommendation behavior
- `Inference`: PDP trust cue behavior

### 5. Section-family controls

- `Inference`: shared controls for layout, spacing, tone, width, responsiveness, and emphasis across section families

### 6. Advanced developer controls

- `Inference`: exact desktop or mobile widths
- `Inference`: ordering overrides
- `Inference`: visibility rules
- `Inference`: finer spacing overrides
- `Inference`: detailed border or shadow calibration

## Normal versus advanced controls

- `Inference`: Stone V2 should not hide all power.
- `Inference`: It should clearly group standard merchant-safe controls and advanced developer controls.
- `Inference`: Advanced settings should be discoverable, but not mixed chaotically into every basic panel.

## Bilingual editor requirement

- `Verified`: Bilingual editor support is a headline product feature.
- `Inference`: Stone V2 should provide complete schema coverage for both Hebrew and English through:
  - `he.default.schema.json`
  - `en.schema.json`
- `Inference`: This should include section names, block names, setting labels, option labels, and help text.

## Practical meaning of bilingual support

- `Inference`: Developers can work comfortably in English if preferred.
- `Inference`: Hebrew-speaking merchants can receive a theme-editor experience that feels local and readable.
- `Inference`: Help text should be written for understanding, not as a weak literal translation.

## Shared design-system exposure

To reduce routine CSS work, the editor should expose normalized controls for:

- `Inference`: color schemes
- `Inference`: typography presets
- `Inference`: spacing presets
- `Inference`: width modes
- `Inference`: radius and border systems
- `Inference`: tile and card appearance
- `Inference`: overlay behavior
- `Inference`: visibility and ordering behavior

## Anti-bloat rules

- `Inference`: the same concept should not appear under many different names
- `Inference`: shared concepts should use shared setting structures where possible
- `Inference`: help text should explain actual effect, not restate the label
- `Inference`: settings depth should follow a documented vocabulary, not ad hoc growth

## Final recommendation

- `Verified`: Treat the theme editor as a first-class product surface.
- `Verified`: Make bilingual Hebrew or English schema support a core differentiator.
- `Inference`: Build a deep but structured control plane that lets developers customize heavily without losing coherence.
