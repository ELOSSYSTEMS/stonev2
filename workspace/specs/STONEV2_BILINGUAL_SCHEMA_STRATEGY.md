# STONEV2 Bilingual Schema Strategy

## Status

- `Verified`: This bilingual schema strategy is a governed Phase 1 canon artifact derived from the five architecture documents in `docs/architecture/`.
- `Inference`: Unless stated otherwise, the schema governance rules below are normalized design decisions inferred from those source documents.

## Product Position

- `Verified`: Stone V2 is built for Israeli Shopify developers and agencies first.
- `Verified`: Hebrew-speaking merchants are a critical downstream theme-editor audience.
- `Verified`: The theme editor itself is part of the product.
- `Verified`: Bilingual schema support is a product feature, not an afterthought.

## Schema File Roles

| File | Role | Governance Expectation |
| --- | --- | --- |
| `he.default.schema.json` | Hebrew-first default schema surface for local delivery and merchant handoff. | Hebrew coverage must feel native, clear, and release-ready. |
| `en.schema.json` | English schema surface for developers, agencies, and English-preferred editor workflows. | English coverage must remain complete and structurally aligned with the Hebrew schema. |

## Translation Coverage Requirements

- `Verified`: Both schema files must cover section names, block names, setting labels, option labels, and help text.
- `Verified`: Coverage must remain complete for every governed section family and reusable block family that reaches runtime schema.
- `Inference`: Partial bilingual coverage should be treated as a defect because it breaks the developer-platform and merchant-handoff promise.

## Wording Quality Expectations

- `Verified`: Hebrew wording should support understanding, not just literal translation.
- `Verified`: English wording should remain clear, developer-friendly, and structurally aligned with the Hebrew version.
- `Inference`: Hebrew labels should feel local and readable to Hebrew-speaking merchants rather than sounding like imported admin terminology.
- `Inference`: English labels should describe the same concept names used in the settings taxonomy and section family ledger.

## Coverage By Surface Type

| Surface Type | Requirement |
| --- | --- |
| Section names | Match the normalized section family vocabulary and variant intent in both languages. |
| Block names | Match the reusable block family vocabulary in both languages. |
| Setting labels | Use the same underlying concept in both languages without renaming the feature between files. |
| Option labels | Preserve comparable choice structure across Hebrew and English. |
| Help text | Explain effect and usage clearly in both languages rather than repeating the label. |

## Fallback Behavior Expectations

- `Inference`: Development-time fallback may temporarily mirror the source-language string while work is in progress, but release-ready schema coverage requires complete bilingual coverage.
- `Inference`: Mixed-language editor output should be treated as a verification defect rather than a normal operating mode.
- `Inference`: Missing help text in one language should be treated as missing coverage, not as an acceptable omission.

## Authoring Workflow Expectations

- `Verified`: Schema authoring should treat Hebrew and English as paired deliverables.
- `Inference`: New schema work should be drafted against the normalized section family and settings taxonomy vocabulary before translation begins.
- `Inference`: A schema change is not complete until both `he.default.schema.json` and `en.schema.json` remain synchronized.
- `Inference`: Review should confirm terminology consistency, option parity, and help-text quality in both files.

## Maintenance And Update Expectations

- `Verified`: Bilingual coverage must be maintained as families, blocks, settings, and presets evolve.
- `Inference`: Every schema-affecting change should update both files in the same bounded unit whenever possible.
- `Inference`: Regression review should explicitly check for missing keys, mismatched option sets, and wording drift between Hebrew and English.

## Why This Is A Product Feature

- `Verified`: Bilingual schema support improves developer workflow and merchant handoff.
- `Inference`: Israeli developers need an English-friendly editing surface for implementation speed and team flexibility.
- `Inference`: Hebrew-speaking merchants need a Hebrew-first theme-editor experience that feels local and trustworthy.
- `Inference`: Treating the editor as product surface strengthens reuse, reduces rescue work, and reinforces Stone V2 as a premium developer platform.

## Assumption Audit

- `Verified`: This strategy defines authoring and governance expectations, not final runtime schema files.
- `Inference`: Runtime implementation should stay blocked until later bounded units apply this strategy to actual schema files under `project/`.
- `Inference`: Theme-editor verification will need to confirm bilingual parity once runtime schema work begins.
