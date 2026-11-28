# The local three-loop observable in the actual E15 zero-momentum response

Fixed spacing. Research continuation from 014aea42 and 0fb231bc.
This connects the explicitly identified local three-loop Wilson
observable to the positive, strictly attenuated response at imaginary
resolution ag⁴. The response here uses the **exact isolated E15 band**
of its vacuum vector. It is not the unprojected structure factor,
a zero-regulator limit at fixed g, a real-axis density or width,
or a continuum statement.

## The local observable and its exact free normalization

On the four-by-two planar face patch in the existing convention
(face bit i has coordinates (i mod 4, floor(i/4))), let C_m denote
the ordinary, unnormalized fundamental trace of the single boundary
circuit of mask m. Use the bounded multiplication operator

    A_loc = (C_39 + C_114 − C_119)/sqrt(3).

All three are gauge invariant closed loops, real in SU(2), with
ten different fundamental links each. A single loop is in the
fundamental Peter–Weyl space on each of its ten edges (even if
traversed oppositely), so its energy is 10·(3/2)=15.
Its Haar norm is one: integrate one independent link to make the
product holonomy Haar and use orthogonality of the fundamental
character. Any two distinct loop-edge supports are orthogonal
by a central sign flip on an unmatched link. The three translation
types are distinct and each finite support has no nontrivial
translation stabilizer. Thus the unnormalized translate Gram is
3δ_(z,0). This proves that the normalized free vector
A_loc Ω₀ is entirely in P15, and its Fourier section has norm one
at every k. At k=0 call it b, the exact even A-eigenvector used in
the prior transported-source proof. The local check here certifies
its geometry and normalization, not a new evaluation of its
quadratic energy; the latter is from FOLDED-CUBIC.md.

All coordinate sign reflections are checked at the **edge** level
by verify_three_loop_geometry.py. Reflection in x translates each
loop by (−3,0,0) and fixes its type. Reflection in y translates by
(0,−2,0) and swaps types 39 and 114, leaving type 119 fixed. Reflection
in z fixes all three. Thus the common translation vector for any
coordinate reflection r is the sum of those shifts, with preserved
coefficients 1,1,−1. In SU(2), changing traversal orientation gives
the same trace. Therefore r(A_loc)=τ_(d_r) A_loc *as an operator*,
before spectral-flow or band projection. This is stronger than
invariance only after k=0 reanchoring, and does not assert literal
untranslated reflection invariance of the local support.

The original six-loop q differs: with the unnormalized three-loop
sum B_loc=sqrt(3) A_loc, the exact relation is q=(1−τ_x)B_loc.
The three positive-x translate masks are 78,228,238. Gauge
spectral flow and the exact E15 band projection commute with
translations; the k_x=0 Fourier section of the band-projected q
remains exactly zero. The result here is for A_loc, not that q.

## Spectral-flow shell control with a factor of |g|

Use the infinite quasi-local α_g of the earlier band construction,
with the same generator sign and the fixed gap parameter. For local
A supported on a fixed cell set S its exact derivative identity is

    α_g(A)−A = −i ∫₀^g α_s([D_s,A]) ds.

This follows directly from the finite-box flows and then their
uniform local limits. To justify the latter passage, the filtered
D_s interaction has locally convergent terms and incident support
moments of every fixed order, from LOCAL-SPECTRAL-FLOW-BAND-TAYLOR.
Only terms meeting S contribute to the commutator, so the sum
converges absolutely in norm, with uniform tail bounds.
The same domination and isometry give the integral limit. This
does not differentiate an unbounded infinite Hamiltonian.

Let S_R be the R-cell enlargement of the fixed support S, and
E_(S_R) the contractive exterior product-vacuum conditional
expectation. Split the generator terms meeting S by
diameter ≤R/3 and >R/3. The latter have a summable incident norm
tail O_m((1+R)^−m) for every m. For the small terms the commutator
is supported inside S_(R/3); the quasi-local spectral-flow estimate
and its conditional-expectation version approximate their images
inside S_R with errors at most a fixed power of the input support
size times the term norm times O_m((1+R)^−m). Summing the errors
uses the available higher incident moments. This yields, uniformly
in real s on the integration interval,

    ||α_s([D_s,A])−E_(S_R)α_s([D_s,A])||
        ≤ C_m (1+R)^−m.

Also ||α_s([D_s,A])|| is bounded there by the incident norm and the
fixed size of S. Integrating proves both norm closeness O(|g|)
and the weighted tail

    ||(1−E_(S_R))(α_g(A)−A)|| ≤ C_m |g| (1+R)^−m.

Equivalently telescope the expectations at successive radii.
The error α_g(A)−A is a sum of operators a_R supported on S_R with
||a_R||≤C_m |g| (1+R)^−m, including a separately bounded R=0
term. Gauge invariance is preserved: the conditional expectation
uses an exterior product vacuum invariant under every factored
vertex gauge action. All identities hold on the physical
Gauss-law GNS spaces or after restriction from the ambient space.

## Fourier norm and exact physical identification

In the free-band representation P15≅ℓ²(Z³;𝔥), each
P15 a_R Ω₀ stays vacuum outside S_R. Its translation anchors
take at most C(1+R)^3 values, since the coordinatewise minima
of occupied link origins lie inside the bounding coordinate
box of S_R. This count does not require finitely many allowed
intertwiners uniformly in R. The Fourier sum of an anchor-finite
vector v obeys

    sup_k ||v̂(k)|| ≤ sqrt(number of anchors) ||v||,

by Cauchy–Schwarz over anchors and the norm in 𝔥.
Thus the projected shell Fourier sections converge uniformly in
k, and for A=A_loc,

    sup_k ||ψ_g(k)−ψ₀(k)|| ≤ C |g|,
    ψ_g(k) := (P15 α_g(A_loc) Ω₀)^hat(k).

They are continuous sections in the canonical E15 band
representation, with ||ψ_g(k)||=1+O(|g|) uniformly. Centering
the physical original observable by its vacuum scalar changes
nothing because P15 annihilates the vacuum.

This is the section of **the original observable's exact
band-projected interacting vacuum vector**. Indeed the earlier
GNS unitary identifies the interacting vector
A_loc Ω_g with α_g(A_loc)Ω₀ on the free side and exactly
intertwines the interacting E15 band projection with P15.
There is no claim here about a pointwise fibre of the
unprojected high-energy complement.

At k=0, ψ_g(0) is in the coordinate-sign invariant sector.
For each reflection use the exact operator transformation
r(A_loc)=τ_(d_r) A_loc, commute r through α_g and P15, and
observe that the translation phase at k=0 is one. In this
argument the reflection on canonical fibres is the fixed
internal signed reanchoring of each finite spin network
together with k↦rk; its reanchoring phase is one at k=0.
The identity first holds on sections generated by local
finite-support spin configurations, and extends to these
continuous sections by the uniformly summable Fourier
shells (equivalently, the internal reflection unitaries
depend strongly continuously on k, by approximation by
finitely many shape coordinates). If desired the exactly
local averaged operator (1/8)Σ_r r(A_loc) has identically
the same k=0 section and is globally reflection invariant.

## Compare the finite-resolution responses in the whole band

Let H15(g,0) be the exact interacting E15 band operator in
the canonical transported representative, and R_s(g)b
the previously specified transported slow source in that
representation. The actual slow direct rotation obeys
R_s(g)b=b+O(|g|) by the fixed-slope Riesz contour. Consequently

    ||ψ_g(0)−R_s(g)b||=O(|g|).

One may test ψ_g(0) directly in the entire E15 fibre,
without an additional slow projection: the comparison
vector R_s(g)b already belongs to the exact reducing
slow sector. The norm of the retarded resolvent at
z_g=15+g²E+i a g⁴, E=−13/336 and fixed a>0, is at most
1/(a g⁴). The difference of its two scalar expectations
after multiplication by g⁴ is therefore O(|g|), by
bilinearity and the near-unit norms. Optional division of
ψ_g(0) by its norm changes that scaled response only
by O(|g|) as well. If one does explicitly remove the
fast E15 part, its norm is O(|g|) and it is reducing, so
its contribution to the scaled scalar is O(g²).

Define the response of the specified band-projected local
observable in vacuum-relative energies by

    Y_loc(g) = g⁴ Im⟨ψ_g(0),(H15(g,0)−z_g)^(-1) ψ_g(0)⟩.

For both signs of nonzero real g tending to zero, the
prior transported-source bound now implies

    0 < liminf Y_loc(g) ≤ limsup Y_loc(g) < 1/a.

The comparison 1/a is the unit free even quadratic peak
at the chosen vertical regulator, not a full structure
factor normalization. This is a band-projected response
of a particular real local Wilson observable at k=0 and
a prescribed coupled limit. It gives no real-line density,
profile, pole, fixed-nonzero-g boundary limit, or spatial
continuum assertion.

Replay: python verify_three_loop_geometry.py
