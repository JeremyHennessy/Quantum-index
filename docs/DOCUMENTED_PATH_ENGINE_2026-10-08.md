# Documented-path research engine — 2026-10-08

This is a **standalone, read-only** foundation for a future analytical Network Map mode. It does **not** modify any existing graph edge, evidence label, catalogue data, app UI, styles, workspace, or GitHub Pages routing.

## Run it locally

```sh
node scripts/sourced-paths.mjs renormalization-group functional-rg 8
```

The result is JSON. It reports the selected theory IDs/names, the ordered path, relation types, preserved evidence/confidence notes and every attached bibliography record. It returns an explicit no-path status instead of falling back to editorial edges or silently assuming a missing connection.

## Evidence and interpretation rules

- Traversal uses **only** relations with at least one source ID, a non-editorial evidence type, and an explicit high/medium provenance confidence.
- Every relation is traversed using its stored `from → to` direction. Even an `overlaps` edge is not automatically reversible because that would infer a new directed edge not explicitly stored.
- Breadth-first search finds the shortest eligible path in edge count within the requested maximum hop bound. It does **not** claim the path is the historically shortest evolution, a chain of logically entailing scientific statements, or the strongest evidentiary explanation.
- Source references must resolve to the runtime bibliography. A missing citation causes an error, not an unreferenced claim.
- An absent path is **not evidence that theories are scientifically unrelated**. It only means there is no stored eligible directed path within the selected hop bound.
- The stable tie-break is lexicographic on documented targets/types/source IDs, never inferred scientific preference.

## Acceptance

`scripts/sourced-paths.test.mjs` uses an independently constructed graph to verify shortest-path ordering, an editorial shortcut being rejected, directionality, bounded search, source resolution, and failure modes. A separate runtime check exercises the previously audited RG → functional RG promotion and confirms an editorial QED/AQFT relation cannot be silently used as a one-hop documented connection.

The full Node, generated-coverage, graph, and Chromium/WebKit suites still gate merging. This release is strictly tooling: the deployed Network Map and visible UI are unchanged.

## Next integration boundary

When a UI route is authorized, add an isolated sourced-path view with explicit arrows, citations, no-path/unknown-ID states and evidence limits. Do not treat this CLI as proof that the hosted graph UI has such a feature.
