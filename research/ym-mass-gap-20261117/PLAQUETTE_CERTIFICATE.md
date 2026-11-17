# One-plaquette SU(2): analytic spectral-gap certificate and negative controls

**Review date:** 2026-11-17. **Status:** independently derived elementary/model-specific argument; locally verified arithmetic and numerics; **not** formally checked in Lean; originality **not assessed**. **This is not a theorem about four-dimensional continuum Yang–Mills.**

## Research question and model

Can a small gauge-invariant low-energy sector plus a rigorous estimate of everything omitted certify a positive **exact** gap, rather than a potentially misleading finite-truncation gap?

Study the **specified**, reduced single-plaquette, class-function Hilbert space of SU(2), with orthonormal irreducible characters `|n⟩ = χ_{n/2}`, `n=0,1,2,...` in `L²(SU(2))^{Ad}`. On `ℓ²(ℕ₀)`, take the self-adjoint Jacobi operator

    H_{α,β} |n⟩ = [α n(n+2)/4] |n⟩ - β (|n-1⟩ + |n+1⟩),
    |−1⟩ := 0; α>0, β>0.

This follows from the SU(2) Clebsch–Gordan character identity `χ_{1/2} χ_{n/2} = χ_{(n+1)/2} + χ_{(n−1)/2}` (with the negative-index term absent) and the Casimir eigenvalue `j(j+1)`. Here `β` multiplies the fundamental character, and `α` multiplies that single-plaquette Casimir. **These are selected energy units and couplings**, not a claim that `α=1,β=1/2` corresponds to a specified physical 4D lattice spacing, or that a single plaquette captures all Gauss-law/neighbor interactions of a 4D lattice. In an actual four-link KS plaquette, the electric coefficient includes the link multiplicity; it must be matched explicitly before using any physical interpretation.

References for the *established model*, not novelty of the bound:
- [Kogut–Susskind lattice Hamiltonian](https://doi.org/10.1103/PhysRevD.11.395) (1975).
- [Published SU(2) lattice gauge Hamiltonian and Casimir representation](https://www.nature.com/articles/s42005-025-02298-5) (2025), describing coupled plaquettes, not this toy theorem.
- [SU(2) one-plaquette character-basis exercise](https://msguima.github.io/wiki/courses/generalized-symmetries-course/notes/week-07-kogut-susskind-hamiltonian) (2026), including four-link normalization.

The diagonal `D_n=α n(n+2)/4` diverges as `n→∞`, and the off-diagonal shift perturbation is bounded by `2β`. Thus `H` is self-adjoint on the diagonal operator domain, has compact resolvent, and admits variationally ordered eigenvalues `E₀≤E₁≤...`. This follows from standard bounded-perturbation and compact-resolvent results; a new theorem of operator theory is **not** claimed.

## A direct, infinite-tail certificate for α=1 and β=1/2

**Historical checkpoint caution:** A previous chat message reported a different bound near `0.919845`, but I found no committed derivation, coefficient normalization or test receipt for it in the inspected research branch. That earlier number must be treated as **unverified historical discussion**, not the baseline for this independent calculation. The certificate below is derived afresh for the completely specified operator in this note.


Define normalized, orthogonal vectors

    g=(2|0⟩+|1⟩)/sqrt(5),   w=(-|0⟩+2|1⟩)/sqrt(5).

Direct character-basis calculation gives

    ⟨g,Hg⟩ = −1/4,                 so E₀ ≤ −1/4;
    ⟨w,Hw⟩ = 1;
    ⟨w,H|2⟩ = −1/sqrt(5).

Let `Q` project onto the **entire** infinite-dimensional tail `span{|2⟩,|3⟩,...}`. We need a bound for all tail vectors, not only a finite matrix. For a finitely supported tail vector `y`,

    ⟨y,QHQ y⟩ = Σ_{n≥2} [n(n+2)/4]|y_n|²
                   − Σ_{n≥2} Re(conj(y_n) y_{n+1}).

By `|ab| ≤ (|a|²+|b|²)/2`, the coefficient for `n=2` is at least `2−1/2=3/2`; all `n≥3` coefficients are at least `15/4−1=11/4`. Therefore **QHQ≥(3/2)Q** as a quadratic-form inequality, first for finite-support vectors and then on the form domain.

Every `ψ⊥g` can be written `ψ=cw+y`, `y=Qy`. Using the one nonzero boundary coupling and Cauchy–Schwarz,

    ⟨ψ,Hψ⟩ ≥ |c|² + (3/2)||y||² − (2/sqrt(5))|c| ||y||.

This is bounded from below by the least eigenvalue of the *comparison* matrix

    M = [[1, −1/sqrt(5)], [−1/sqrt(5), 3/2]]:
    λ_min(M) = 5/4 − (1/2)sqrt(21/20).

The min–max principle (using the codimension-one subspace `g⊥`) gives `E₁≥λ_min(M)`. Combining with `E₀≤−1/4`,

    **E₁−E₀ ≥ 3/2 − (1/2)sqrt(21/20) > 79/80 = 0.9875.**

The final strict inequality is **exact**, not a floating-point assertion: `(41/40)² − 21/20 = 1/1600 > 0`, hence `sqrt(21/20) < 41/40`, so `3/2 − sqrt(21/20)/2 > 3/2 − 41/80 = 79/80`.

This is a **positive bound on the untruncated infinite model** for the stated coefficients. It is much more stringent than merely observing a positive gap after finite diagonalization. It does **not** provide a uniform result as α and β vary toward a continuum or thermodynamic regime. No novelty, publication, or prize-level inference is claimed.

## Parameterized certificate, and where it fails

For arbitrary α>0, β>0, keep the same `g,w` trial vectors. Direct algebra and an edge/bulk tail bound yield

    U_g = 3α/20 − 4β/5                 (upper bound on E₀),
    A_w = 3α/5 + 4β/5,                (w-sector Rayleigh energy),
    D_tail = min(2α−β,15α/4−2β),     (tail lower bound),
    b = 2β/sqrt(5)                    (cross-sector norm bound).

The same min–max argument implies

    E₁−E₀ ≥ [(A_w+D_tail−sqrt((A_w−D_tail)²+4b²))/2] − U_g.

**Negative or zero RHS is NO POSITIVE CERTIFICATE.** It does not prove that the physical gap is absent. This is the strongest control against turning a failed method into a false claim.

The bound is positive at `(α,β)=(1,1/2)` but becomes vacuous for many weak-electric/strong-magnetic parameter choices. In particular `(α,β)=(0.01,25)` has `αβ=1/4` and a negative certificate while the accurately truncated gap is near `0.996867` (in these units). This is a method failure, not evidence of gaplessness.

## Deliberate falsification: fixed representation cutoff lies

The table uses approximate eigenvalues of Jacobi *principal truncations*, independently compared against NumPy's symmetric eigensolver. These are numerical demonstrations, NOT lower-bound certificates.

| Coefficients | 8-state gap | 128-state gap | Consequence |
|---|---:|---:|---|
| α=1, β=1/2 | ~1.098243 | ~1.098243 | Truncation appears converged in this regime |
| α=0.01, β=25, αβ=1/4 | ~8.690259 | ~0.996867 | **Eight-state answer exaggerates by ~8.72×** |
| α=0.0002, β=1/2 | ~0.173805 | ~0.019937 | **Eight-state answer exaggerates by ~8.72×** |

For `αβ=1/4`, the gap appears to approach a positive constant as `α` decreases *when enough representations are retained*, whereas the fixed cutoff becomes drastically wrong. This is **numerical evidence about the one-plaquette toy**, not a proof of a uniform `α→0` limit. A heuristic balancing of the discrete kinetic and Casimir terms suggests the representation width scales like `(β/α)^(1/4)`. Choosing `N≈5(β/α)^(1/4)` improves convergence in this tested regime, **without furnishing a rigorous truncation-error bound**.

A useful exact identity illustrates why fixed-rank truncation can mislead:

    H_{α,β} + 2β I = α D + β [2I − (S+S*)].

The bracket is the nonnegative half-line discrete Dirichlet Laplacian. The weak-electric regime is a discrete harmonic-oscillator scaling problem; the actual representation support can spread as the electric coefficient shrinks. The coefficient balance by itself is not a proof of the spectral gap.

## Scientific disposition and proposed original question

**Proven in ordinary mathematics under the explicitly stated one-plaquette model:** the infinite-tail bound above. **Machine-checked formal proof:** not yet. **Novel in literature:** unknown, probably connected to standard min–max and Schur/comparison techniques; do not claim novelty.

**Our new research proposal, not yet proved:** develop a **local, scale-adaptive representation-tail certificate** for interacting, gauge-invariant plaquette networks. Investigate whether a size-independent bound on high-representation leakage is attainable *after* a block transformation at a fixed physical length, rather than using global magnetic operator norms that grow with system volume. Do not assume the desired bound: first derive it in a precisely specified two-plaquette graph, then attempt to break it at weaker coupling and increasing volume. Even success for a finite graph is not a 4D continuum result.

**Immediate falsifier:** if the local-tail certificate inferred from two plaquettes deteriorates without bound as representations, lattice sizes, or physical volumes increase, the proposed strategy fails; retain the counterexample rather than redesigning the presentation to conceal it.

**Open to address for Clay:** a noncircular gauge-invariant infrared estimate with a common, positive *physical* decay rate across the continuum and infinite-volume limits and sufficient physical observables, plus transfer to a continuum Hamiltonian, **for every compact simple gauge group**. No part of this note supplies that missing uniform estimate.