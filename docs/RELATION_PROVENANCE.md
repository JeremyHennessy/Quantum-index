# Relationship provenance audit

_Last reviewed: 2026-09-22_

## Why this exists

A graph edge is a factual claim. "A historically motivated B", "B mathematically generalizes A", and "A overlaps conceptually with B" do not carry the same evidentiary weight.

Quantum Index therefore separates node provenance from relationship provenance.

## Edge schema

Every shipped relationship has:

- `from`
- `to`
- `type`
- `note`
- `sourceIds`
- `evidenceType`
- `confidence`
- `evidenceNote`

### Evidence types

**documented historical influence**  
Used when primary or authoritative historical sources support the lineage/influence claim.

**formal mathematical relation**  
Used when the relationship is structural: extension, generalization, reformulation, formalization, or another mathematically explicit relation.

**editorial relation**  
Used for useful navigation/overlap edges that have not yet completed a relationship-specific evidence review.

### Confidence

- **high** — strong direct support for the stated edge.
- **medium** — good evidence, but the relationship wording still abstracts across a broader literature.
- **editorial** — curation judgment; no relationship-specific source claim is made.

## Current coverage

- 359 total relationship edges
- 54 source-backed in relation-provenance v1
- 45 high confidence
- 9 medium confidence
- 305 explicitly editorial

The editorial count is intentionally visible. Node-level source provenance does not automatically prove an edge between two nodes.

## First-pass sourced families

The initial sourced set prioritizes:

- Planck / Bohr / old-quantum / matrix- and wave-mechanics lineage
- de Broglie → wave mechanics
- Dirac reformulation links
- EPR → Bell
- path-integral → QED
- QED → Yang–Mills and Yang–Mills → electroweak/QCD
- electroweak/QCD → Standard Model
- RG → EFT
- lattice gauge theory → QCD
- GRW/CSL/objective-collapse and primitive-ontology relationships
- LQG → spin foams / LQC / Master Constraint / AQG
- string theory → M-theory
- holographic principle → AdS/CFT → holographic QEC
- Hawking radiation → island/Page-curve work
- GKSL → quantum trajectories
- process matrices / combs / quantum switch / process tensor
- DFT → TDDFT
- EFT → SMEFT / ChPT / HQET / SCET
- GFT → tensorial GFT / GFT cosmology
- spin foams → spin-foam cosmology
- Lorentzian quantum cosmology lineage

## Acceptance controls

1. Every shipped edge must carry `sourceIds`, `evidenceType`, and `confidence`.
2. A non-editorial confidence level requires at least one valid source.
3. Relation source IDs must resolve to the main bibliography.
4. Editorial relations are allowed, but must be labeled as editorial.
5. Node provenance must never be silently reused as edge provenance without an explicit relation-evidence decision.
6. Thought-tree navigation may show editorial edges, but UI/tooltips must expose their evidence state.

## Next relation audit

Priority order for the next source-backed pass:

1. remaining historically directional `precursor` and `motivates` edges;
2. `generalizes`, `extends`, and `reformulates` edges;
3. QFT/EFT and quantum-information formal relations;
4. quantum-gravity/cosmology formal lineage;
5. `overlaps` edges last, because many are deliberately editorial rather than historical claims.
