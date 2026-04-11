# Phase 2 Minimal Utility Action Group Risks v1

## Risk Ledger

| ID | Risk | Type | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R-01 | The new section quietly turns into the first hero CTA band, trust prompt, support strip, or merchandising promo surface instead of staying utility-only. | `Inference` | The section introduces promotional tone, commerce references, trust-specific semantics, support-specific semantics, or family-specific naming. | Keep the section in the utility and layout support family only and stop on any non-utility behavior. | next runtime executor |
| R-02 | The slice reopens protected substrate surfaces because the chosen action-group proof is not actually narrow enough. | `Inference` | Execution starts editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | Treat those files as hard stops for this unit and replan instead of expanding the runtime scope. | next runtime executor |
| R-03 | Interaction scope grows into JS-driven behavior or speculative abstraction through `project/blocks/` or new snippets. | `Inference` | The slice adds block files, new snippet files, runtime JS dependencies, drawers, modals, toggles, or more than one new runtime host surface. | Keep the proof bounded to native links or buttons only and replan if broader interaction becomes necessary. | next runtime executor |
| R-04 | Template work broadens into page composition because the new section needs a visible host. | `Inference` | Additional template files appear or the alternate page template starts sequencing multiple sections. | Restrict template scope to one neutral alternate page template with one validation section only. | next runtime executor |
| R-05 | Locale terminology drifts between Hebrew and English when section and block strings are added. | `Inference` | One locale is updated first, keys diverge, or block labels and help text stop matching structurally. | Update both locale files in the same unit and review for structural parity before acceptance. | next runtime executor |

## Mitigation Expectations

- `Verified`: Runtime work must stop on boundary expansion rather than normalize it.
- `Verified`: The utility-family boundary is part of the mitigation strategy, not a suggestion.
- `Verified`: Protected-surface stability must be reviewed explicitly before accepting the slice.
- `Verified`: Bilingual schema parity must be reviewed explicitly before accepting the slice.
- `Inference`: The safest mitigation is to prove one narrow native action-group surface with intentional incompleteness instead of partially solving broader hero, trust, support, or merchandising needs.
