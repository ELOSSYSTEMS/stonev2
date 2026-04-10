# Phase 2 Minimal Utility Layout Composition Risks v1

## Risk Ledger

| ID | Risk | Type | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R-01 | The new section quietly turns into the first real split story, trust, or merchandising family instead of staying utility-only. | `Inference` | The section introduces media-led storytelling, commerce references, trust-specific semantics, or family-specific settings and naming. | Keep the section in the utility and layout support family only and stop on any non-utility behavior. | next runtime executor |
| R-02 | The slice reopens protected substrate surfaces because the chosen composition proof is not actually narrow enough. | `Inference` | Execution starts editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | Treat those files as hard stops for this unit and replan instead of expanding the runtime scope. | next runtime executor |
| R-03 | Composition scope grows into nested groups, more than two regions, or speculative abstraction through `project/blocks/` or new snippets. | `Inference` | The slice adds block files, new snippet files, more than two regions, a second section, or a second template. | Keep the proof bounded to exactly two inline-rendered utility regions and replan if broader abstraction becomes necessary. | next runtime executor |
| R-04 | Template work broadens into page composition because the new section needs a visible host. | `Inference` | Additional template files appear or the alternate page template starts sequencing multiple sections. | Restrict template scope to one neutral alternate page template with one validation section only. | next runtime executor |
| R-05 | Locale terminology drifts between Hebrew and English when section and block strings are added. | `Inference` | One locale is updated first, keys diverge, or block labels and help text stop matching structurally. | Update both locale files in the same unit and review for structural parity before acceptance. | next runtime executor |

## Mitigation Expectations

- `Verified`: Runtime work must stop on boundary expansion rather than normalize it.
- `Verified`: The utility-family boundary is part of the mitigation strategy, not a suggestion.
- `Verified`: Protected-surface stability must be reviewed explicitly before accepting the slice.
- `Verified`: Bilingual schema parity must be reviewed explicitly before accepting the slice.
- `Inference`: The safest mitigation is to prove one responsive two-region utility composition with intentional incompleteness instead of partially solving broader family and page-composition needs.
