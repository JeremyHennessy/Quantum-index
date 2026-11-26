# A positive finite-period trace test, with an exact block commutator

**November 26, 2026 UTC. Algebraic control and conditional Wilson target, not a decay bound.**

The [continuum moment test](2026-11-25-trace-sector-detector-and-moment-tests.md) uses a vacuum semigroup. It cannot be applied unchanged to finite periodic Wilson data. The pinned [PublicWilson.lean](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/PublicWilson.lean#L35-L90) uses one common period in space and time, not an independently adjustable time cylinder. Its declared limit is the full mesh limit at fixed suitable period and only then the increasing-volume refinement. This note derives a positive finite-period substitute without requiring a time-symmetric packet and identifies the operator to estimate.

## Exact identity on the closed time circle

Use the positive Wilson transfer operator T on the gauge-invariant Hilbert space, in the usual positive-coupling finite-volume setting (see [Lüscher](https://bib-pubdb1.desy.de/record/396349) and [Osterwalder–Seiler](https://doi.org/10.1016/0003-4916(78)90039-8)). One may normalize its top eigenvalue to 1; the following normalized quantities are invariant to scalar rescaling. Write M for the total number of transfer steps and Z=Tr(T^M). Let B be the transfer block of a gauge-invariant, possibly complex packet confined to a slab of b steps, with its finite stencil strictly inside the slab. A block is the kernel obtained by integrating the packet against the Wilson weights of the slab with both time faces open and using the same boundary conventions as T^b. The conjugate time reflection of the packet reverses the block and gives B*. Include an additive constant in the packet as that constant times T^b.

With k free steps in the forward corridor and M−2b−k in the other, sewing the two kernels gives
\[
 C(k)=Z^{-1}\operatorname{Tr}(T^{M-2b-k}B^*T^k B).
\]
This is the reflection-paired block correlation; it need not be even about the midpoint for a generic B. If λ_i are the positive transfer eigenvalues, its weights are
\[
 Z^{-1}\lambda_i^{M-2b}|B_{ji}|^2(\lambda_j/\lambda_i)^k.
\]
Bounded finite-cutoff insertions and positive corridor lengths make the stated sewn traces finite; equivalently use the spectral expansion with convergent nonnegative sums. Locality of the token suffices to confine its links to a slab, but does not prove that the conjugate-reflected token equals the token at the reflected site. For application to the pinned trace, the actual lattice representative must satisfy this matching, or the difference of the two separated smeared observables must vanish in the ordered limit. The public WilsonRegularity fields give invariance, continuity and finite stencil, not this reflection/conjugation identity. The [assessment, §11](https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf#page=18) supplies the common length scale and fixed trace normalization, not an infrared estimate.

For step d>0 and both corridors still open at k+2d, take the forward second difference
\[
 S_d(k)=C(k)-2C(k+d)+C(k+2d).
\]
Putting K=[T^d,B]=T^d B-BT^d gives the exact normalized nonnegative trace
\[
 S_d(k)=Z^{-1}\|T^{k/2} K T^{(M-2b-k-2d)/2}\|_{\mathrm{HS}}^2 .
\]
Indeed K_ji=(λ_j^d−λ_i^d)B_ji. No operator inverse or trace comparison with a different periodic box is used. For k=k_0+nd, S_d(k) is the nth moment of positive weights at y=(λ_j/λ_i)^d, with weight factor (1−y)^2. Equal-energy terms, including a constant shift of the packet, vanish. For Hankel indices whose corresponding corridors are available, both the ordinary Hankel matrix and its shift are positive semidefinite, even for asymmetric B. This is positivity on (0,∞), not support in [0,1]. In particular a finite-period failure of the continuum upper-support test is not itself evidence against a vacuum gap.

## Exact controls

Take transfer levels 1 and q=1/2, period 8, and a self-adjoint off-diagonal insertion. Omitting the common partition factor, C(n)=q^n+q^(8−n). The first three forward first differences are positive, but their 2×2 Hankel determinant is −9/2048. For the second differences the determinant is +9/4096; already S(1)>(1/2)S(0), despite the vacuum energy being exactly log 2 in step units. These rational values follow by expanding at n=0,1,2 and were checked independently with exact binary fractions. For a second control, a Hamiltonian with levels 0,1,1+η and a packet connecting both 0↔1 and 1↔(1+η) has a visible vacuum gap of 1 but periodic transition frequency η. Its thermal weight is nonzero at fixed period. These are transfer-algebra controls, not Wilson counterexamples.

If one averages C(k) with C(M−2b−k), one can alternatively center at half the corridor period and express the evenized curvature through positive Chebyshev moments in cosh(dω). That tests transition frequencies too, and the averaging is unnecessary for the commutator formula above.

## What would advance the Wilson problem

Fix the previously chosen trace packet and physical delay Δ>0. One can choose Δ and slab boundaries at integer reference units as needed for a grid-exact test: the pinned mesh is the reciprocal of an integer, so distances that are integer multiples of the reference unit are exact at every cutoff. Choose the two slab envelopes as reflections and translations of one another, keeping both observable supports away from the slab walls and each other. For each fixed n, sufficiently large periods make all three translated two-point test functions suitable. Retain the same token, normalization, and centering in every term. Once reflection matching is verified, the second difference converges in the actual ordered Wilson limit by linearity of separated smearing. No uniform convergence in n or control of n proportional to the period is needed for this passage.

A sufficient estimate on the fixed packet is, for some m>0 and common finite A,
\[
 S_{N,p}(n)\ \le\ A e^{-mn\Delta}+r_{N,p,n},
 \qquad \limsup_{p\ \mathrm{on\ refinement}}\limsup_{N\to\infty}|r_{N,p,n}|=0
 \quad\text{for every fixed }n .
\]
Here S uses the mesh and period on the same Wilson family, with its running coupling; correspondence discrepancies may be included in r only if independently controlled. The limit has positive measure with weight (1−exp(−ΔE))² instead of (1−exp(−ΔE)). Both are strictly positive for every E>0 and thus give the same exclusion of 0<E<m. The narrow-packet and phase-continuity arguments of the previous note then apply within the one-field trace sector only. This does not establish a gap in the full Hamiltonian.

The missing analytic input is an estimate of the *normalized local commutator pairing through the long physical corridor*. A global partition-ratio bound is not an adequate substitute: even independent two-level cells give Tr(exp(−sH))/Tr(exp(−BH))=[(1+exp(−s))/(1+exp(−B))]^v for v cells and B>s, exponentially increasing in v, whereas a normalized correlation for a packet on one cell is exactly independent of the other v−1 cells. Future work should verify the concrete trace-token reflection match and preserve the normalization by Z of the same full circle before trying to bound the narrow local pairing. No Wilson numerical moments, infrared estimate, priority claim, Phase 15 activation, or change to earlier notes is made here.
