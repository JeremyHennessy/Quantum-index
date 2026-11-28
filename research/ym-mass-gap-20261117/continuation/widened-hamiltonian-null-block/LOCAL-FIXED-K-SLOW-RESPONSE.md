# Fixed-k slow band and the actual transported-source finite-resolution response

Fixed spacing, coordinate-sign invariant physical fibre at canonical
total momentum k=0. This is a corollary of the separate exact
thermodynamic E15 band construction. It is an actual Wilson
spectral statement for the explicitly transported fibre source,
not for an unidentified original local plaquette probe. It is
not a limit of zero regulator at fixed nonzero coupling, a real-axis
resonance, a density or scattering theorem, or a continuum result.

## 1. Exact slow transport inside the actual isolated band

Identify the actual physical band using the thermodynamic GNS
unitary and its continuous Bloch representative from the preceding
note. In this representative write H15(g,k)=15+B(g,k), where B is
vacuum-relative. Restrict to k=0 and the common invariant
coordinate-sign reflection sector. There,

    B(g,0)=g B₁+g² B₂+g³ B₃+g⁴ B₄+O_norm(|g|⁵).

The first three B_j match the previously computed canonical
coefficients in the given anchor and geometry convention. The
fourth coefficient is bounded. An individual full canonical
B₄ identification is not needed below.

Let L(g)=B(g,0)/g for signed real g≠0 and L(0)=B₁=−T. Prior exact
first-slope analysis at this fixed momentum supplies a gap δ>0
between its kernel N and the rest: each far block has nonzero slope
magnitude at least 1/2, and the remaining near block is finite.
Write N also for the kernel projection. Take the fixed circle
of radius δ/2 about zero. Since L(g)=B₁+O(|g|), its corresponding
Riesz projector N(g) is well-defined on this exact fibre and is
norm O(|g|) close to N. Resolvent Neumann expansion using
L(g)=B₁+gB₂+g²B₃+g³B₄+O(|g|⁴) yields a norm expansion of N(g)
through degree three with O(|g|⁴) error. This does not require
a finite dimension of N or uniform gaps as k varies.

Use the specific canonical direct-rotation isometry from N to
N(g),

    R_s(g)=N(g)N (N N(g) N)^(-1/2),

where the inverse square root is taken only on N. It exists by
norm closeness, is onto N(g), and has the same order-three norm
expansion by the binomial-series metric normalization. Define
the exact rescaled slow Hamiltonian on N by

    K_s(g)=g^(-1) R_s(g)* L(g) R_s(g).

This is the actual isolated slow part of the fibre, whose physical
excitation operator is 15+g² K_s(g). The initial constant term of
R_s(g)* L(g) R_s(g) vanishes. Combining the norm expansions gives

    K_s(g)=A+g C₃+g² D₄+O_norm(|g|³).

For clarity, if M=1−N and R₁=(−M B₁ M)^(-1) on M, extended by
zero on N, the canonical graph expansion gives
A=NB₂N and C₃=N(B₃+B₂R₁B₂)N. The choice of R_s above is the
canonical slow graph isometry, not an unspecified basis change.
The rescaled g² coefficient D₄ is bounded (it is the sum of NB₄N
and the lower-coefficient folds already derived for the quartic).
Only this boundedness and its parity are used in the response.

Center sign C satisfies C B(g,0) C=B(−g,0) on this physical fibre.
Since L(−g)=−C L(g) C, the symmetric slow contour yields
N(−g)=C N(g) C. The positive inverse square root in R_s is covariant
under conjugation, so R_s(−g)=C R_s(g) C on N, and hence
K_s(−g)=C K_s(g) C. This proves directly that A,D₄ preserve center
parity and C₃ reverses it. It uses both signs of real coupling,
not a supposed center symmetry for a fixed g≠0.

## 2. Apply the already verified stability inequality

Split N into center even and odd. The even quadratic space is
finite-dimensional at this fixed momentum, as all far separated
null products are center odd. Let b be the unit normalized exact
even A-eigenvector at E=−13/336. Write W=(C₃)_(oe), so that
w=Wb is exactly the prior folded odd source with matching
normalization. The positive finite odd quadratic boundary
response on this coordinate-sign invariant sector was previously
proved for w in the actual quadratic defect model.

The above norm expansion and parity give the exact operator form
required by LOCAL-QUADRATIC-CUBIC-FINITE-RESOLUTION:

    K_s(g) = [ A_e+g² D_e(g)    g W_g*          ]
             [ g W_g            A_o+Δ_o(g)      ],

with bounded self-adjoint D_e(g), ||Δ_o(g)||≤L g² and
||W_g−W||=O(g²)=o(|g|). The latter norm condition is sufficient
without compact support of W_g−W, since W itself has
finite support, as in the prior quantitative comparison.
The cubic source has no ambiguity from a quartic gauge choice.
The established comparison at z_s=E+i a g², for fixed a>0,
therefore gives a strictly positive lower bound and a strict
upper bound smaller than 1/a on

    g² Im⟨b,(K_s(g)−E−i a g²)^(-1)b⟩

for all sufficiently small nonzero real g. Equivalently, its
liminf is positive and its limsup is strictly under 1/a. No
convergence of D_e(g) or the odd perturbed self-energy at this
shrinking window is needed for this statement.

## 3. Interpretation in the actual physical band

The source is b_g=𝒰_g R_s(g)b in the actual interacting Bloch
representation defined by the preceding exact band unitary.
More explicitly, in the canonical continuous transported
representative it is R_s(g)b; conjugating that exact isolated
band back by the covariant GNS unitary defines its physical
identification. Thus it is a unit fibre vector at k=0, not
a normalizable single-momentum vector in the un-fibred
Hilbert space. No arbitrary almost-everywhere choice for the
Hamiltonian value at k=0 is used: the continuous isolated-band
representative was fixed by the finite-range approximants.

Set z_phys=15+g²E+i a g⁴ in vacuum-relative energy units.
Because the actual slow subspace is reducing and its
Hamiltonian is exactly 15+g² K_s(g) in the specified transport,
the physical expression

    Y_g = g⁴ Im⟨b_g,(H15(g,0)−z_phys)^(-1)b_g⟩

equals the rescaled expression in section 2, with H15
and b_g expressed in the same (physical or transported)
band coordinates. Hence for either sign of g→0,

    0 < liminf Y_g ≤ limsup Y_g < 1/a.

The 1/a comparison is the uncoupled vertical smeared
response for the unit exact even quadratic vector, not
a comparison with a different physical probe. An
identification with an original local observable would
require a separate fibre-source estimate. The statement
is at a specified imaginary resolution g⁴ as nonzero g
tends to zero; it does not establish a real-axis profile,
finite-g pole or decay width, or any continuum behavior.
