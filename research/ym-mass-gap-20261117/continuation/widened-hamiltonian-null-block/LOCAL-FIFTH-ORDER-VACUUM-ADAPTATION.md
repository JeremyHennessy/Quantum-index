# The first vacuum-adapted correction and its off-band bound

Fixed spacing, finite SU(2) Wilson boxes, research only. This extends the
degree-four electric Lie normal form at 942691a3. It concerns one
coefficient and the exactly specified polynomial truncation, not
dressing the true interacting ground state to all orders, convergence
of an interacting band, or the continuum.

## 1. Remove all local vacuum creation at order five

Use the degree-four generator S_(≤4)(g) from the prior normal form,
using the same sign convention H(g)=H₀−gV. The conjugated interaction
is analytic in the uniform per-edge interaction norm on a disk.
Denote the fifth Taylor coefficient of the remainder by
A₅=Σ_X A_X, grouping by the elementary linked BCH supports. Each
Hermitian component is supported on at most five plaquettes (thus
m≤20 edges) and has a box-independent incident-edge norm. This is an
actual Taylor coefficient of the unitary transformation at each
finite volume, with the same uniform per-edge Cauchy bounds as the
previous remainder proof.

Let p_X be the orthogonal projector onto the tensor electric vacuum
on the edge factors X, tensored with identity outside. It commutes
with the endpoint gauge actions: every local edge constant is fixed by
left and right multiplication, including the separate actions on edges
that meet an exterior vertex. The vacuum on X is unique since
H₀|_X is a sum of nonnegative edge Casimirs with one-dimensional kernels.
Writing q_X=I−p_X and d_X=⟨vac_X,A_X vac_X⟩, there is the exact split

    A_X = d_X I + F_X + B_X,
    F_X = q_X A_X p_X + p_X A_X q_X,
    B_X = q_X(A_X−d_X I)q_X.

All terms retain support and gauge invariance. F_X is locally entirely
off-electric-charge: its one vacuum endpoint has local energy zero,
and its other endpoint has strictly positive local energy. The exterior
energy is untouched. Thus its all-electric diagonal average vanishes,
including on the physical Hilbert space after restricting from the
tensor space. Also ||B_X||≤2||A_X|| and ||F_X||≤||A_X||.

Apply the same support-local homological inverse Γ as in the previous
result, with the 4π free-electric period and its proven bounded
commutator/domain property. Define S₅=Σ_X Γ(F_X) and add g⁵S₅ to the
*same exponent* S_(≤4)(g). This is a skew-adjoint gauge-covariant
generator at real g. Its only effect on the conjugated Hamiltonian
through degree five is g⁵[S₅,H₀]=−g⁵Σ_X F_X. Therefore the exact
rotated model satisfies

    e^(S_(≤4)+g⁵S₅) H(g) e^(−S_(≤4)−g⁵S₅)
      = H₀ + Σ_(n=1)^4 gⁿ D_n + g⁵ Σ_X(d_X I+B_X) + R_(≥6)(g),

where ||R_(≥6)(g)||_int≤C|g|⁶ on a common smaller disk by the same
absolute iterated-commutator estimate (now maximal size 20).
The new fifth coefficient is not required to conserve the electric
charge; rather each vacuum-subtracted component annihilates the
local vacuum on both sides. The fifth local scalars are in fact
zero in the Wilson expansion: center sign covariance changes each
fifth-degree term's sign, and the local constant vacuum is invariant
under every link center sign. No analogous claim is made for the
sixth-order remainder.

## 2. Volume-uniform off-band norm of the repaired coefficient

Let N count nontrivial electric spin labels, independently of their
spin magnitude or intertwiner. Let n_e be its edge indicator.
Then q_X≤Σ_(e∈X)n_e and H₀≥(3/2)N. For any Hermitian interaction
C=Σ_X C_X with C_X=q_X C_X q_X, Cauchy–Schwarz gives for finite-energy
vectors φ,ψ

    |⟨φ,Cψ⟩|
      ≤ Σ_X ||C_X|| ||q_X φ|| ||q_X ψ||
      ≤ ||C||_int ||N^(1/2)φ|| ||N^(1/2)ψ||.

This shows relative form bound |C| in the sense of absolute
quadratic form (not operator absolute value) by
(2/3)||C||_int H₀. It preserves all Gauss-law multiplicities.

If C has support size at most m, its action changes no occupations
outside its support. For ψ in free P₁₅, N≤10 and its output lies in
N≤10+m. Taking unit φ in that output space yields

    || C P₁₅ || ≤ sqrt(10(10+m)) ||C||_int.

This holds over the entire output space, not just P₁₅, and permits
arbitrarily high spin among the excited output edges. In particular,
with Q=1−P₁₅, the repaired fifth coefficient obeys
||Q B P₁₅||≤sqrt(300)||B||_int, uniformly in box. Hermiticity gives
the adjoint direction. The same applies to the chosen gauge-invariant
sector because both P₁₅ and C respect it.

## 3. Uniform Schur bound for the polynomial model only

Remove the explicit local scalar expectations and define
K_pol(g)=H₀+Σ_(n=1)^4 gⁿ D_n^ren+g⁵B. The D_n^ren annihilate their
local vacuum (by local charge conservation and unique vacuum),
and B annihilates by construction. K_pol has the exact decoupled
electric vacuum. Its interaction J(g) obeys
||H₀^(-1/2) J(g) H₀^(-1/2)||≤(2/3)||J(g)||_int on the nonvacuum space,
using the positive free gap there. It is O(|g|), uniformly.

For |Re z−15|≤1/4, Q nonvacuum free energies e lie in the half-integer
lattice away from 15. Then sup_(e≠15,e>0) e/|e−z|≤62. Hence
the factorization through H₀^(1/2) of Q(K_pol−z)Q is invertible
by a uniform Neumann estimate for sufficiently small |g|:
the bounded central factor is I−zH₀^(-1)+H₀^(-1/2)QJQH₀^(-1/2),
and the norm of the inverse of its free term is ≤62. In the
vacuum one has the explicit inverse −1/z. This argument is
on the standard finite-volume H₀ domain via the corresponding
form factorization; its norm bound is uniform over the boxes
and includes real z in the displayed strip. Because only g⁵B
couples P₁₅ to Q in this polynomial, its resulting Schur
correction is uniformly O(g¹⁰).

There is no such inference for the actual rotated Wilson operator:
its unadapted R_(≥6) need not annihilate local electric vacuum.
Its small *interaction* norm alone does not give a uniform
off-band column norm or a vacuum-decoupled relative resolvent.

## 4. Exact Wilson local check and the remaining obstruction

For the isolated plaquette, use the exact gauge-invariant character
chain with labels n=2j, electric energies 2n(n+2), and normalized
magnetic W entries −1/2 between consecutive n. The replay builds
the full truncated BCH by independent polynomial convolution.
Every order-n vacuum column contains a path of at most n magnetic
steps, so retaining indices 0 through 6 is exact for this
degree-six control, not a spectral cutoff approximation.

The original four-order transform has nonzero fifth vacuum entries
at n=1,3,5. The correction just specified eliminates all of them
without changing any lower coefficient. Its next vacuum column
is nonzero again: already the n=2 entry at order six is exactly

    −77832450361 / 34412868403200000.

This explicitly demonstrates that the first vacuum-adaptation
correction does not terminate the process even for an actual
isolated Wilson plaquette. It does not imply that the full
connected cubic lattice has a divergent sixth column, nor rule
out subsequent cancellations or a convergent adapted construction.
The unresolved step is control of vacuum excitation in the exact
tail (or a direct relative-resolvent substitute), not the size of
the irreducible local fifth off-band term.

Replay: python verify_vacuum_adaptation.py
