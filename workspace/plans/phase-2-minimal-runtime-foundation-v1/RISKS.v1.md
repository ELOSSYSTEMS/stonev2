# Phase 2 Minimal Runtime Foundation Risks v1

## Risk Ledger

| ID | Risk | Type | Trigger | Mitigation | Owner |
| --- | --- | --- | --- | --- | --- |
| R-01 | The first runtime slice broadens into section-family, homepage, or preset work because the shell feels "too empty." | `Inference` | New files appear under `project/sections/`, `project/templates/`, or preset surfaces, or shell code starts embedding page-specific structures. | Keep the runtime boundary fixed to the seven planned files and stop immediately on new runtime surfaces. | next runtime executor |
| R-02 | Foundation file boundaries are under-specified, leading to ad hoc snippets or extra assets that complicate the shell before the platform has stable rules. | `Inference` | The runtime slice proposes new snippet files, extra CSS bundles, or additional JS entries to compensate for unclear boundaries. | Use the plan's exact future file list as the execution boundary; treat any additional file need as a replanning trigger. | next runtime executor |
| R-03 | RTL or Hebrew drift enters the shell and token layer, forcing later rescue work that the product thesis explicitly tries to avoid. | `Inference` | CSS uses left/right assumptions, layout defaults feel LTR-first, or Hebrew schema wording feels translated rather than local. | Review for logical CSS, document direction handling, and paired Hebrew/English schema wording before accepting the slice. | next runtime executor |
| R-04 | Schema and control-plane drift enters the first runtime slice because settings are added faster than the taxonomy can support them. | `Inference` | `settings_schema.json` introduces family-level controls, duplicated concept names, or preset-specific options. | Restrict schema groups to brand identity, global design system, and shell behavior only; reject extra groups. | next runtime executor |
| R-05 | The minimal progressive JavaScript surface becomes an early interaction layer that silently introduces later-phase behavior. | `Inference` | `stone-runtime.js` adds menu, accordion, carousel, hotspot, or merchandising logic. | Keep the JS surface to bootstrap and shared hooks only; replan if real interactions are required. | next runtime executor |

## Mitigation Expectations

- `Verified`: Runtime work must stop on boundary expansion rather than normalize it.
- `Verified`: RTL-native and Hebrew-first review must happen before the slice is accepted.
- `Verified`: Schema terminology must be checked against the Phase 1 taxonomy and bilingual schema strategy, not improvised.
- `Inference`: The safest mitigation is disciplined incompleteness: leave later-phase surfaces empty instead of partially implementing them early.
