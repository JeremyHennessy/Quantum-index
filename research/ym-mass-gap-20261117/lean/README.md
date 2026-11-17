# Lean proof-system preflight (not Yang–Mills)

Status until CI confirms: **Lean candidate unverified**.

- Lean toolchain: `leanprover/lean4:v4.32.0`.
- Mathlib: `v4.32.0`. Both are pinned and independent of Quantum Index's Node toolchain.
- Main module: `YMGapToy.lean`.
- Dedicated workflow: `.github/workflows/ym-proof-lab.yml`, triggered only for the research branch.
- Proof targets: one family has a common positive gap, every finite term in another family has a positive gap, yet its family has no common positive real lower bound.

Do not confuse these statements about three-level diagonal matrices with any theorem about lattice gauge theory or the four-dimensional continuum limit. Machine checking confirms a formal theorem under its declared premises, not that the theorem is physically applicable.

Run from this directory when Lean is installed:

    lake update
    lake exe cache get
    lake build

The original research runtime did not contain Lean, so **no local Lean compilation or kernel verification is claimed**. When the separate GitHub workflow succeeds, inspect its *exact SHA*, imported axioms, and the human-readable statement before marking a theorem checked.

The general spectral measure/correlation theorem and the open Yang–Mills infrared estimate remain separate future tasks.
