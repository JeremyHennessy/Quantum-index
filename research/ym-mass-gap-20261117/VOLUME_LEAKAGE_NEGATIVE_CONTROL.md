# Volume-leakage falsification: global spectral-tail norms are not automatically uniform

**Date:** 2026-11-17. **Status:** elementary exact derivation, five reproducible local Node tests. **Not a connected SU(2) gauge lattice, not a new physical mass-gap theorem, not a continuum limit.**

## Hypothesis under test

The exploratory proof architecture uses a low-representation projector `P` and a tail `Q=I-P`. An easy but dangerous inference would be to assume a global operator coupling norm `||QHP||` can stay bounded by one constant as the number of lattice plaquettes grows, merely because each plaquette term is local and bounded.

**Counterexample:** construct `N` **noninteracting** SU(2) one-plaquette copies with the same single-plaquette Hamiltonian `h` from `PLAQUETTE_CERTIFICATE.md`:

    H_N = ∑_{i=1}^N I⊗⋯⊗h_i⊗⋯⊗I.

This is a mathematical tensor-product control, deliberately **not** the interacting Wilson lattice and not a connected 4D gauge system. The individual lowest gap is strictly positive, and the first excitation of `H_N` consists of an excitation of one factor. Consequently, the physical gap of this decoupled sum is *identical* to the single-plaquette gap for every finite N. For the model with `(α,β)=(1,1/2)`, the previous infinite-tail argument gives the N-independent lower bound `E_1(N)−E_0(N)>79/80`.

Take the **rank-one, low-representation** projection `P_0 = |0⟩^{⊗N}⟨0|^{⊗N}` (not the true ground-state projector), and `Q_0 = I−P_0`. The electric diagonal term annihilates `|0⟩` and each magnetic shift satisfies `h|0⟩ = −β|1⟩`. Thus

    Q_0 H_N P_0 |0⟩^{⊗N} = −β ∑_{i=1}^N |0⋯1_i⋯0⟩.

The `N` terms are orthonormal. Therefore

    ||Q_0 H_N P_0||² = N β²,    ||Q_0 H_N P_0|| = β sqrt(N).

**Conclusion:** The crude global leakage norm grows without bound as `N` increases **even though the system's true gap does not shrink**. That does NOT show all possible global Schur/certificate methods fail; it refutes the specific unsupported *volume-uniform global coupling norm* shortcut for this projection. A viable interacting-lattice argument must replace it with genuinely local, volume-normalized or suitably renormalized structure—and prove that this replacement controls the desired spectrum.

## Independent finite-dimensional regression

In the two-state (`n=0,1`) truncation of each copy, the one-site Hamiltonian is

    [[0, -β],[-β, 3α/4]],

so the two-level gap is the exact expression `sqrt((3α/4)²+4β²)`, which equals `5/4` at `(α,β)=(1,1/2)`. The N-fold tensor sum has the **same** first gap, while its rank-one low-representation coupling grows as `sqrt(N)`. The sparse test independently enumerates the orthogonal single-site excitations up to N=20 and checks exact squared amplitudes.

The exact tensor-sum gap statement does **not** require diagonalizing an exponentially large Hilbert space. We test the two-level formula and the explicit coupling action separately, and do not claim a numerical study of connected SU(2) plaquette chains.

## Disposition and next gate

- **REJECT** treating global `||QHP||≤constant` as an automatic consequence of local bounded plaquette interactions. It already fails in a decoupled control.
- **KEEP OPEN** a different hypothesis: whether a **local**, gauge-invariant conditional or scale-adaptive representation-tail estimate yields a uniform *physical* correlation bound under the continuum and infinite-volume limits. No such estimate is proven.
- **NEXT smallest new model:** reproduce an **interacting, Gauss-law-constrained two-plaquette SU(2)** Hamiltonian from source-located literature using correct Wigner-6j coefficients, then test one explicitly defined local projection bound versus representation cutoff. A product of independent plaquette characters is **not** a substitute for the interacting physical state space.
- **PRESERVE** failed hypotheses and actual source limitations, and never infer the Clay theorem from tests on finite graph models.
