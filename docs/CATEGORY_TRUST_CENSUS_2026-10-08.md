# Category depth and provenance census (read-only foundation)

**Reviewed:** 2026-10-08. **Scope:** additive tooling only; existing application, styling, research workspace, scientific records, runtime catalog, and deployed UI remain unchanged.

The standalone command `node scripts/category-trust-census.mjs` emits a machine-readable JSON census for every current category. It uses the same runtime module loading order as the existing generated-coverage tooling and does **not** store a new second authoritative snapshot. Existing `docs/coverage.json` remains the global source-of-truth export.

`scripts/category-trust-census.test.mjs` runs automatically through `npm test`. It verifies every partitionable count against generated global metrics, checks category invariants, and keeps non-additive totals explicitly separate.

## Available per-category facts

- Theory count, primary-source-provenance and review-source-provenance counts, catalogued-only count
- Number of theory entries with at least one audited formula, and number of documented formula gaps
- Linked formula-record count, plus explicit versus baseline *metadata review* flags
- Existing Theory Passports and reading profiles
- Related Evidence records and incoming/outgoing (incident) sourced versus editorial relationships
- Latest recorded **theory-specific** review date (not necessarily a category-wide literature sweep)

## Interpretation and counting cautions

**This is not a scientific quality, confidence, or completeness score.**

- A source-attached theory is not thereby validated; an editorial relation is not automatically incorrect.
- One formula can link to several theories and categories. The per-category formula-record totals are therefore **not additive** across categories.
- One relation can span two categories. Such an edge is counted in each category's incident set and must never be naively summed into a global relation count.
- An Evidence record can be relevant to several frameworks without establishing all their predictions.
- The latest `lastReviewed` theory date is not a verified domain-wide research sweep, so this census does not invent a `lastResearchSweep` field.
- Formula-bearing-gap means a representative expression has not been curated; it does not mean the theory has no mathematics.
- The generated global count and the categorical partition must agree in CI; source-level verification of each scientific claim remains a separate review.

## Next UI milestone (not part of this release)

Present these factual values within a **new** Coverage/Trust drill-down rather than rewriting approved Explore, theory details, or Network layout. Click a gap to filter to actual theory IDs (for example, formula-bearing-gap or metadataReview baseline). Screen design and real-browser acceptance must be reviewed independently before release.
