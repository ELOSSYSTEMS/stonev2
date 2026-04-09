# Phase 2 Minimal Runtime Foundation Assumptions v1

## Scope Assumptions

| ID | Type | Statement | Basis | Impact If Wrong | Status |
| --- | --- | --- | --- | --- | --- |
| A-01 | `Inference` | A single `project/layout/theme.liquid` shell is enough to start runtime work without adding section, template, or snippet files. | `project/` is scaffold-only today, and the approved scope is explicitly minimal. | The first runtime slice broadens immediately and requires replanning. | open |
| A-02 | `Verified` | The first runtime slice must preserve Liquid-first, no-framework, no-web-components, and lightweight progressive JavaScript constraints. | `docs/architecture/stonev2-repo-basis.md`; `HARNESS/01_EXECUTION_CONSTITUTION.md` | The slice would violate canon and should stop. | open |
| A-03 | `Inference` | Foundation CSS can stay useful if it is limited to tokens and shell primitives rather than visual polish. | Phase 2 is foundation work; later phases own family implementation and preset design. | The CSS layer becomes broad storefront styling and drifts outside the bounded slice. | open |
| A-04 | `Inference` | A minimal `project/assets/stone-runtime.js` can remain worthwhile even if it only establishes a root progressive enhancement entry point and shared data-attribute conventions. | The roadmap requires progressive JavaScript only, and the first runtime slice should avoid feature interactions. | JavaScript grows into behavior-heavy runtime and forces scope expansion. | open |
| A-05 | `Inference` | `project/config/settings_schema.json` can remain minimal if it only introduces foundation settings domains: brand identity, global design system, and shell behavior. | `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` defines those as shared domains. | Section-family or preset-level controls enter too early and invalidate the slice boundary. | open |
| A-06 | `Verified` | Hebrew and English schema files must be authored as a synchronized pair. | `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` | Terminology drift and incomplete bilingual coverage become release defects immediately. | open |

## Minimality Conditions

- `Verified`: The slice stays minimal only if no runtime work enters `project/sections/`, `project/blocks/`, `project/templates/`, or preset-pack surfaces.
- `Verified`: The shell remains page-agnostic and does not embed homepage, collection, or PDP-specific structures.
- `Verified`: The schema remains foundation-only and does not encode section-family controls.
- `Inference`: The JS entry point remains an infrastructure hook rather than a feature surface.

## Replanning Triggers

- `Verified`: Replan if any additional runtime file becomes required outside the seven planned files.
- `Verified`: Replan if shell behavior requires a real header, footer, drawer, or search implementation instead of a structural placeholder.
- `Verified`: Replan if the minimal settings groups cannot support the shell and token foundation without adding family-level controls.
- `Verified`: Replan if Hebrew and English schema naming cannot remain structurally aligned from the same bounded change set.
- `Verified`: Replan if the first runtime slice starts to depend on preset defaults, collection rules, PDP rules, or section-family decisions that do not yet exist in runtime code.
