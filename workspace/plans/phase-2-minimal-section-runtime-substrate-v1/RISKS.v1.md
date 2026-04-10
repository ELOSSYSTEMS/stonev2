# Phase 2 Minimal Section Runtime Substrate Risks v1

## Risk Ledger

| ID | Risk | Type | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R-01 | The validation section quietly expands into the first real merchandising or storytelling family instead of staying utility-only. | `Inference` | The section introduces hero imagery, product references, collection references, article references, or family-specific settings. | Keep the section in the utility and layout support family only and stop on any non-utility behavior. | next runtime executor |
| R-02 | Template work broadens into homepage or preset composition because the section needs a visible host. | `Inference` | Additional template files appear, `index.json` is touched, or the alternate page template starts sequencing multiple sections. | Restrict template scope to `project/templates/page.stone-runtime.json` with one validation section only. | next runtime executor |
| R-03 | Premature abstraction introduces shared block snippets or extra section files before one bounded section proves what should be shared. | `Inference` | The slice adds multiple snippets, multiple sections, or any `project/blocks/` files. | Treat one shared section-shell snippet as the maximum allowed abstraction in this slice and replan if more is needed. | next runtime executor |
| R-04 | Locale terminology drifts between Hebrew and English as the first section schema surface is added. | `Inference` | One locale is updated first, keys diverge, or help text is missing in one language. | Update both locale files in the same unit and review for structural parity before acceptance. | next runtime executor |
| R-05 | Hidden dependence on shell, settings, or JS changes proves that the proposed substrate slice is not actually self-contained. | `Inference` | Execution starts editing `theme.liquid`, `settings_schema.json`, or `stone-runtime.js`. | Treat those files as hard stops for this unit and replan instead of expanding the runtime scope. | next runtime executor |

## Mitigation Expectations

- `Verified`: Runtime work must stop on boundary expansion rather than normalize it.
- `Verified`: The utility-family boundary is part of the mitigation strategy, not a suggestion.
- `Verified`: Template neutrality must be reviewed explicitly before accepting the slice.
- `Verified`: Bilingual schema parity must be reviewed explicitly before accepting the slice.
- `Inference`: The safest mitigation is to prove one reusable section contract with intentional incompleteness instead of partially solving multiple later-phase needs.
