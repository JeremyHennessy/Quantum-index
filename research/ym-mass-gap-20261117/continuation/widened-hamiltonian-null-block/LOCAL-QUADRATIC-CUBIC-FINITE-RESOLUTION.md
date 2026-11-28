# A controlled nonzero-parameter bridge at the fixed target

Scope: fixed spatial spacing, zero total momentum, coordinate-sign invariant
sector. The exact model in section 2 is a bounded quadratic-plus-cubic
effective **truncation**. Section 3 gives quantitative sufficient
hypotheses for nearby effective models. Neither establishes a normal
form for the full interacting Wilson Hamiltonian at nonzero coupling,
a resonance pole, a real-axis width, or a continuum statement.

Prerequisite research tip:
82978bc3d79e07b81bb5f83429ac1161981dc433. Write E=−13/336 and use a unit
normalization of the already calculated even eigenvector b. The actual
odd folded source is w=C₃b using this same normalization.

## 1. What is and is not already controlled

1. Linked local cancellation establishes uniform bounds for the
   vacuum-subtracted quadratic and canonical cubic *coefficients*
   across finite open boxes. It also gives finite relative-coordinate
   stencils for their fibres. This does not bound any higher order
   or the rest of the spectral expansion, and the original operator
   perturbation norm grows with the number of plaquettes.
2. At fixed total momentum k=0 the slow/fast first-slope split of
   the free energy-15 band has a gap: detached nonzero slopes have
   magnitudes 1/2 or sqrt(3)/2 and the remaining first-slope matrix
   is finite. Its reduced inverse is bounded and preserves the
   requisite finite relative support. This is a fact about the
   free first-slope coefficient, not about interacting fast-sector
   resolvents, and not uniform over momenta near rank jumps.
3. The exact coefficient-level null-space expansion has quadratic A
   preserving center parity and folded cubic C₃ reversing it. The
   even quadratic null fibre is finite-dimensional, since every far
   separated null product is center odd. At k=0, each column of C₃
   from that finite even space has finite relative support. The
   odd quadratic operator differs from the separated convolution
   only in a fixed finite near/ghost/return region.
4. The quadratic odd operator has a finite compressed boundary
   value at E, and its imaginary quadratic form in the exact w is
   strictly positive. The proof gives all fixed finite-region
   compressions, not only the source vector: for finite U,Z,
   write its completed resolvent as R_B−R_B (I+V G_η)^−1 V P_S R_B
   with the finite S operators embedded in the ambient space, and
   use the mixed reference blocks to/from U,Z and S.
   This is an assertion at g=0 *for the
   rescaled quadratic coefficient model*, not for higher orders.
5. Fixed finite boxes admit analytic band and slow-space
   identifications and a small-g weak limit. The volume-uniform
   moment and momentum-window bounds and thermodynamic local
   dynamics do not supply the (o(g^2)) or fourth-order uniform
   coefficient control needed at the finer energy scale below.
   In particular a fixed-time local Duhamel bound cannot by itself
   estimate resolvent evolution out to times (g^{-2}) in rescaled
   energy. The standing order-of-limits counterexample is abstract
   but explains why moment estimates alone do not identify this law.

The first missing model-specific step is a uniform interacting
projection or substitute reduced-resolvent construction at this
fixed momentum, with error bounds in the slow parity blocks (or
directly on their finite-region resolvent columns) at a resolution
of order (g^2) in rescaled energy. No existing estimate proves
such a reduction uniform in volume. This gap precedes any question
about extending a full boundary estimate uniformly in momentum.

## 2. Exact nonzero-g statement for the coefficient truncation

In the invariant null fibre split by center parity and set

    K(g) = [ A_e    g W* ]
           [ g W    A_o  ],       W = (C₃)_{oe}.

A_e is finite-dimensional, A_o is the actual odd quadratic operator,
and W has finite support in relative coordinates. The even eigenspace
P=1_{E}(A_e) is nonempty and contains b. No assumption about its
multiplicity is needed. The complementary even spectrum is gapped
from E by finite dimensionality (or the complement is empty).

Let a>0 be fixed and put z_g=E+i a g². The exact Schur matrix for the
even compression is

    S_g=A_e−E−i a g² − g² Σ_g,
    Σ_g=W*(A_o−E−i a g²)⁻¹W.

The previous finite-region boundary theorem implies convergence
Σ_g→Σ_+ in norm and Im Σ_+≽0, with
c=⟨b,Im Σ_+ b⟩>0 by the actual folded-source certificate. A second
Schur complement onto P has off-diagonal correction O(g⁴), since all
rows are bounded and the complementary even block has a fixed gap.
Its g⁻² multiple therefore tends to −ia I_P−PΣ_+P. This is invertible
since its imaginary part is at most −a I. For either sign g→0,

    g²⟨b,(K(g)−z_g)⁻¹b⟩
       → −⟨b,(ia I_P+PΣ_+P)⁻¹b⟩.

The limiting imaginary part Y is strictly between 0 and 1/a,
where 1/a is the uncoupled value on unit b. This is a strict change
at a nonzero-g resolution scale, not a statement of failure to
have an atom for K(g) at an exact real energy. It is not based on
assuming that the fixed-energy response is a density on an interval.
If K(g) is placed in the unrescaled excitation expression 15+g²K(g),
the imaginary resolution there is a g⁴, not a proof of a real-line width.

For clarity the strictness has a quantitative proof. For any matrix
D=D* and Σ with B=Im Σ≽0, let x=(ia I+Σ−D)⁻¹b and
Y=Im⟨b,−x⟩. With the inner product linear in the second argument,
Y=⟨x,(aI+B)x⟩. Hence a||x||²≤Y≤||x|| and Y≤1/a.
Writing ε=1/a−Y, these same relations give

    ||x+i b/a||² ≤ ε/a,       ⟨x,Bx⟩≤ε.

The triangle inequality for B^(1/2) gives
sqrt(⟨b,Bb⟩)/a ≤ sqrt(ε)(1+sqrt(||B||/a)).
Thus, whenever ⟨b,Bb⟩≥c and ||Σ||≤M, ||D||≤L,

    a/(a+M+L)² ≤ Y ≤ 1/a − c/[a²(1+sqrt(M/a))²].

This also treats an arbitrary Hermitian real shift and degeneracy
inside the even E eigenspace.

## 3. Conditional stability at the same resolution

The preceding effect is not restricted to permitting only
(o(g^2)) operator errors. Here is an explicit O(g²)-stable
version for self-adjoint effective models of the form

    K̃(g) = [ A_e+g² D_g     g W_g*       ]
            [ g W_g          A_o+Δ_g      ],

where D_g are uniformly bounded self-adjoint matrices,
Δ_g=Δ_g* with ||Δ_g||≤L_o g², and W_g→W in norm with their
outputs supported in one fixed finite reference coordinate
region (physical near coordinates included). These hypotheses
are **not** currently available for the actual interacting model.

For η=a g² and R=(A_o−E−iη)⁻¹, R_g=(A_o+Δ_g−E−iη)⁻¹,
the two exact resolvent identities imply for any x

    (1+d)⁻¹||R x|| ≤ ||R_g x|| ≤ (1+d)||R x||,
    d=||Δ_g||/η ≤L_o/a.

This uses only the standard self-adjoint norm bound η⁻¹.
In particular the imaginary response to W_g b stays bounded
below uniformly: the fixed finite block of R is bounded,
so its imaginary form in W_g b converges to c, and the lower
norm inequality gives, for sufficiently small g,

    Im ⟨W_g b, R_g W_g b⟩ ≥ c/[2(1+L_o/a)²].

The full effective self-energy Σ̃_g=W_g*R_g W_g is uniformly
bounded, not merely its imaginary quadratic form. For finite
support x,y in the fixed output space, let C_R bound the norm
of that finite block of R. The resolvent identity and
||R* x||=||R x|| give

    |⟨x,(R_g−R)y⟩|
      ≤ ||Δ_g|| ||R* x|| ||R_g y||
      ≤ d(1+d) C_R ||x|| ||y||.

Multiplying by the uniform norms of W_g proves the claimed
matrix bound. The even complement is still gapped in the finite
Schur calculation, and its correction after division by g² has
size O(g²), uniformly. Thus the estimates in section 2 apply
to all limit points of the bounded finite matrices, with
c replaced by c/[2(1+L_o/a)²] and with uniform M,L.
Consequently the smeared imaginary response of the unit b in
this effective model has positive liminf and limsup strictly
less than 1/a for the (g^2)-scale imaginary regularization.
No convergence of D_g or Σ̃_g is needed for this two-sided strict
separation. If those matrices converge, the same Schur formula
gives the limit with the corresponding D and Σ.

A second sufficient source hypothesis is
||W_g−W||=o(|g|) without a common support. Indeed ||R_g W||=O(|g|⁻¹)
by the fixed-support imaginary bound for W and the resolvent
comparison. The two mixed self-energy errors are then o(1);
the quadratic error is at most ||W_g−W||²/(a g²)=o(1).
This recovers the uniform bound and positive lower form with
the same proof.

The support assumption can instead be replaced entirely by the direct
finite self-energy hypotheses used in the last paragraph:
uniform boundedness of Σ̃_g and a positive lower bound for
⟨b,Im Σ̃_g b⟩. Thus a controlled finite-region reduced resolvent
would suffice even if a global slow-block norm expansion is
unavailable. This is a concrete target for a higher-order
quasi-local block-diagonalization or reduced-resolvent proof.
