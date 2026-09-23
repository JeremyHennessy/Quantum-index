# Quantum Index taxonomy

The index uses three independent dimensions. They must not be collapsed into one label.

## 1. Category

Category answers: **where in the quantum-theory landscape does this entity primarily belong?**

Current top-level categories:

- Historical foundations
- Formulations
- Foundations & interpretations
- Quantum field theory
- Quantum information & open systems
- Quantum gravity & spacetime
- Quantum cosmology
- Mathematical structures
- Quantum optics & AMO
- Quantum many-body & condensed matter
- Quantum chemistry & electronic structure
- Astroparticle physics & cosmology
- Nuclear quantum theory
- Beyond standard quantum theory

Cross-category overlap is represented by typed graph edges rather than duplicating entities. The astroparticle/cosmology category intentionally includes observationally motivated fundamental-physics model families that are not themselves quantum theories when they are necessary to map the quantum/particle/gravity theory landscape; their `kind` and `status` must make that distinction explicit.

## 2. Kind

Kind answers: **what sort of intellectual object is this?**

Examples include:

- theory / framework
- interpretation
- formulation
- quantization framework
- axiomatic framework
- research program
- process framework
- theorem
- thought experiment
- toy theory
- quantum-gravity approach
- cosmological framework

This prevents a theorem such as PBR from being mislabeled as a "theory" while still allowing it to appear in the progression graph that constrains later theories.

## 3. Status

Status answers: **how should the entity's present scientific role be described?**

Examples:

- historical
- established
- established framework
- established theorem
- established prediction
- established duality
- active research
- interpretation
- alternative theory
- speculative
- toy model
- effective framework

Status is descriptive, not a quality ranking.

## Relation semantics

Relations are directional unless explicitly symmetric.

| Relation | Meaning |
|---|---|
| precursor | historically or conceptually precedes a later program |
| reformulates | gives another formulation of substantially the same physical content |
| extends | adds structure, domain, or capability |
| generalizes | replaces a restricted structure with a broader one |
| supports | supplies mathematical or evidential support |
| motivates | creates a problem or opportunity that prompted later work |
| formalizes | gives a more explicit formal structure to an idea |
| unifies | combines previously distinct theoretical sectors |
| challenges / challenged by | places pressure on assumptions or conclusions |
| overlaps | substantial conceptual or mathematical overlap without a clean lineage claim |

A relation is not automatically a claim of historical causation. Historical influence requires source support.
