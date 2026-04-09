# FEATURE_STATUS

## Rules

- `Verified`: Keep one row per bounded unit.
- `Verified`: Update status, evidence, and timestamp on every plan, build, verify, or handoff transition.
- `Verified`: Allowed status values: `PLANNED`, `IN_PROGRESS`, `PASS`, `FAIL`, `BLOCKED`.

| Unit ID | Title | Status | Acceptance Criteria | Allowed Files Or Surfaces | Evidence | Last Updated |
| --- | --- | --- | --- | --- | --- | --- |
| UNIT-001 | Populate harness foundation and repo canon. | PASS | Required harness docs, templates, checks, state files, workspace seeds, and README exist and verify. | `HARNESS/`, `state/`, `workspace/intake/`, `workspace/handoff/`, `README.md` | `node HARNESS/checks/harness-check.mjs` | 2026-04-10 02:20 Asia/Jerusalem |
| UNIT-002 | Create section-family, settings-taxonomy, and bilingual-schema canon pack. | PLANNED | Governed spec artifacts exist and stay architecture-led. | `workspace/specs/`, `workspace/plans/`, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | `state/NEXT_ACTION.md` | 2026-04-10 02:20 Asia/Jerusalem |
