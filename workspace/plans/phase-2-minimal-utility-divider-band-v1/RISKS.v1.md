# Phase 2 Minimal Utility Divider Band Risks v1

## Risk Ledger

| ID | Risk | Type | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R-01 | The new section quietly turns into a promo strip, trust band, support prompt, or campaign separator instead of staying utility-only. | `Inference` | The section introduces trust framing, promotional tone, support semantics, labels with campaign meaning, or family-specific naming. | Keep the section in the utility and layout support family only and stop on any non-utility behavior. | next runtime executor |
| R-02 | The slice reopens protected substrate surfaces because the chosen divider proof is not actually narrow enough. | `Inference` | Execution starts editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | Treat those files as hard stops for this unit and replan instead of expanding the runtime scope. | next runtime executor |
| R-03 | Abstraction scope grows through `project/blocks/`, new snippets, or content-heavy band behavior. | `Inference` | The slice adds block files, new snippet files, runtime JS dependencies, or more than one new runtime host surface. | Keep the proof bounded to a restrained structural separator only and replan if broader structure becomes necessary. | next runtime executor |
| R-04 | Template work broadens into page composition because the new section needs a visible host. | `Inference` | Additional template files appear or the alternate page template starts sequencing multiple sections. | Restrict template scope to one neutral alternate page template with one validation section only. | next runtime executor |
| R-05 | Locale terminology drifts between Hebrew and English when section strings are added. | `Inference` | One locale is updated first, keys diverge, or help text stops matching structurally. | Update both locale files in the same unit and review for structural parity before acceptance. | next runtime executor |

## Mitigation Expectations

- `Verified`: Runtime work must stop on boundary expansion rather than normalize it.
- `Verified`: The utility-family boundary is part of the mitigation strategy, not a suggestion.
- `Verified`: Protected-surface stability must be reviewed explicitly before accepting the slice.
- `Verified`: Bilingual schema parity must be reviewed explicitly before accepting the slice.
- `Inference`: The safest mitigation is to prove one restrained divider-band surface with intentional incompleteness instead of partially solving broader promo, trust, support, or storytelling needs.
