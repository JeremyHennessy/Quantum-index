# What transfers from Alpöge–Claude to the Yang–Mills research program

November 27, 2026 UTC. Research-only; no new Wilson bound or continuum construction.

[Alpöge's announcement](https://alpo.ge/remark.pdf) describes starting from an illuminating toy case, then looking for a construction native to the actual problem. The arithmetic construction used iterated theta lifts to recover multiplicity and explicitly accounted for what each lift costs. No direct mathematical transfer of theta lifts to this Yang–Mills problem is established. What transfers is the research pattern: name the exact property that made the toy argument work, identify its native replacement, and track losses as the number of steps increases.

Separately, [the Lean FRO/Mathlib certification](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) checked the intended theorem statement independently of the submitted argument and replayed exported proof terms in more than one checker. [Sutherland's verification report](https://math.mit.edu/~drew/grh/) records the statement match and axiom audit for all five statements. We should similarly separate the statement being proved from proposed mechanisms, and record analytic assumptions instead of burying them in definitions. Formal verification is not a replacement for the missing estimates.

## A precise first interface for the gap half of the problem

This is a standard spectral-theorem reduction, not a claim of novelty. Work **after** constructing a nontrivial reflection-positive continuum limit with Hilbert space, vacuum, and nonnegative self-adjoint time generator H. Let D be a dense linear space of vacuum-orthogonal physical states, and choose one fixed physical time τ>0. For trial gap m>0 write q=exp(−mτ). The test is

    ⟨f, exp(−2τH) f⟩ ≤ q ⟨f, exp(−τH) f⟩  for every f in D.

Indeed put T=exp(−τH). The operator T²−qT is bounded and self-adjoint; by density the form inequality extends to the entire vacuum-orthogonal space. The spectral theorem then excludes T spectrum in (q,1], hence H spectrum in [0,m) on that space. Conversely a gap ≥m implies the form inequality. This does not construct the continuum representation, imply a particular lattice family converges, or ensure nontriviality. See the [Jaffe–Witten problem statement](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf).

The finite-list statement to audit is positive semidefiniteness of qG(τ)−G(2τ), where G(t)_{ij}=⟨f_i,exp(−tH) f_j⟩. All finite linear combinations must be tested; positive diagonal entries are not enough. Exact two-level negative control: take T=diag(0.9,0.2), q=0.5, and f±=(√0.1,±√0.9). Each diagonal entry of T²−qT in these probes is −0.018, yet f++f− isolates the slow component and yields a positive form. In a lattice argument, test on a common limiting family of fixed-physical-size probes and their linear combinations, include vacuum subtraction at each cutoff, and record nonvanishing limiting norms, physical time units, and a vanishing error for each fixed list. The algebraic interface can be checked separately; construction and verification of those hypotheses cannot be assumed.

## First falsification test, then the missing bound

The [open-square family](2026-11-27-first-soft-singlet-probe.md) supplies a calibration: choose the first sine-mode source whose normalized spectral mass tends to one around the first singlet at each fixed L. Its limiting two-time ratio tends to exp(−2√(2λ_11)τ) in the corresponding scaled time units, approaching 1 as L grows. A common positive contraction rate inferred merely from positivity must fail this ordered 2D test. The [strictly block-supported comparison](2026-11-27-sharp-block-soft-singlet-overlap.md) explains why an untuned local probe may miss this channel. These examples do not falsify the four-dimensional Wilson claim. The next analytic step is one scale comparison for the true Wilson measure with explicit dependence on lattice spacing, volume and the chosen linear combination. Do not iterate before quantifying the error and what it costs in physical time.
