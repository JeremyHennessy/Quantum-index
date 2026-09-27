# Structured ResearchQuestion layer — 2026-09-27

Baseline main: `ae67461bf82ddb0921773712296d14fe9143717f`.

This release migrates the 59 existing cited-profile prompts into first-class `ResearchQuestion` records using the 27 Sep 2026 research audit.

Disposition split is preserved exactly:
- 11 established-learning questions
- 11 conditional / framework-dependent
- 20 model-specific investigations
- 17 open research questions

Each record keeps the original question, associated theory, current researched answer/position, uncertainty framing, concrete next investigation, existing catalog source IDs, additional audit references and review date.

The new Research Questions view supports text search, disposition filtering and domain filtering. The records are explicitly labeled `research-audit-draft`: they are research-orientation summaries, not independent proofs or a claim that every cited publication was fully re-derived.

No theory origins, DevelopmentEvents, formulas, relationship endpoints, workspace schema, theme or dependencies are changed.
