# Centered full local joint response averaged over the shrinking momentum window

Fixed spacing, research continuation after dc4328a43a0d92c4658ee09ed562af05cdc9309b.
This is an averaged imaginary-resolution result for the **full**
joint spectral measure of the identified local observable, without
asserting or constructing a pointwise complementary energy fibre.
It does not give a real-axis spectral density, the fixed-nonzero-g
zero-regulator limit, or a continuum result.

Let A_loc=(C_39+C_114−C_119)/sqrt(3), in the same local
geometry and normalization as LOCAL-ORIGINAL-THREE-LOOP-FIBRE-RESPONSE.
Use the centered interacting vector

    ξ_g = (π_g(A_loc)−ω_g(A_loc)) Ω_g

in the physical interacting GNS space. The vacuum-relative
Hamiltonian H_g and the physical translations commute, so their
joint spectral theorem gives a finite positive measure ν_g
on energy λ and momentum k. It is the measure of ξ_g, with no
overall normalization beyond the definition of A_loc.

## The full nonvacuum momentum marginal

The free physical GNS space is the vacuum plus the closure
of the direct sum of finite nonempty occupied-link assignments.
On each link the Peter–Weyl representation label j ranges over
all half-integers; a factor has finite dimension at each fixed j,
and a finite spin assignment has its full finite Gauss-invariant
intertwiner multiplicity. No energy or spin cutoff is imposed.
This description follows from the incomplete tensor product with
the product vacuum: finite-link tensors are dense, and their
orthogonal Peter–Weyl blocks give the direct sum. Gauge invariance
only imposes the vertex invariant projections within these
assignments. In the GNS description over the invariant algebra,
each finite-support invariant vector is obtained by its bounded
local vacuum-to-vector rank-one operator: both the vector and
the product vacuum on that support are invariant under the
inside factors of each vertex action. Conversely applying an
invariant local observable to the vacuum gives invariant finite
support, and their closures coincide.

Translations act by translating all labels and the fixed internal
vectors. Their action on each nonempty finite link support is free:
an invariant finite set under a nontrivial translation would be
infinite. Choose a normalized representative for each translation
type and translate its full internal basis. Taking coordinatewise
minima of the occupied positive link origins as anchor identifies
the entire nonvacuum space, not just E15, with

    ℓ²(Z³;𝔥_full).

The space 𝔥_full has all of the resulting shape and intertwiner
directions. It need not be finite-dimensional.

By the exact vacuum-transport GNS relation, ξ_g pulls back to

    f_g = Q₀ π₀(α_g(A_loc)) Ω₀,      Q₀=I−|Ω₀⟩⟨Ω₀|.

Here ω_g(A_loc)=ω₀(α_g(A_loc)). In particular the constant
vacuum (an exact atom at zero momentum) is removed, not merely
estimated by an energy gap. The GNS unitary is translation
covariant, so the momentum marginal of ν_g is the free
translation spectral measure of f_g.

The weighted spectral-flow shells already proved for
α_g(A_loc)−A_loc have radii r and norms
O_m(|g|(1+r)^−m) for any fixed m. After applying one of these
local shells to Ω₀ and removing its vacuum component, the
result is supported on the shell's cell factors and has norm
at most its operator norm. Individual local spin labels
can be arbitrarily high, but only the shell's links can be
occupied. Its translation anchors take at most C(1+r)^3 values,
independently of spins or internal multiplicities. Fourier
Cauchy–Schwarz makes the section norm of that shell at most
C(1+r)^(3/2) times its Hilbert norm. Summing the shell bounds
gives a continuous uniformly bounded full section, with

    sup_k ||f̂_g(k)−f̂_0(k)|| ≤ C |g|,
    ||f̂_0(k)||=1.

The latter is the exact free three-loop normalization.
Therefore for every measurable momentum set B, with normalized
Haar momentum measure m,

    ν_g(R×B) = ∫_B ||f̂_g(k)||² dm(k) ≤ C m(B).

In fact ν_g(R×B)=m(B)(1+O(|g|)) uniformly for m(B)>0.
Only the translation Fourier transform was used. No
pointwise complementary Hamiltonian or energy disintegration
is required for this bound.

## Exact band split and g⁸ complement

For small real g the common vacuum-relative E15 spectral island
is inside [14.75,15.25]. The earlier Yarotsky spectral separation
gives the complementary energy spectrum below 14.625 or above
15.375. Choose the same bounded smooth exact-cutoff function f
from the band construction, equal to one on the whole island
and zero on the rest of the spectrum. Thus f(H_g) is an
orthogonal spectral projection and commutes with translations.
The joint measure is the **exact** sum

    ν_g = ν_g^15 + ν_g^c,

where the two positive measures are those of f(H_g)ξ_g and
(I−f(H_g))ξ_g. Equivalently this is restriction in the energy
coordinate to the island and its complement. There are no
cross terms and no smooth-cutoff transition spectral weight.

Fix a>0, E=−13/336, e_g=15+g²E and η_g=a|g|⁴. Let
B_g be the momentum ball of radius c|g|³ from the preceding
band estimate, and set for a joint measure μ

    Y_av(μ,g) =
      (1/m(B_g)) ∫_(k in B_g) ∫
        |g|⁴ η_g / ((λ−e_g)^2+η_g²) dμ(λ,k).

The normalization is by Haar volume of the window.
For small g, e_g belongs to [14.75,15.25]. On the complementary
energy support one therefore has |λ−e_g|≥1/8 and the positive
kernel in this expression is at most 64 a |g|⁸. The full
momentum marginal bound proves

    0 ≤ Y_av(ν_g,g)−Y_av(ν_g^15,g)
       ≤ 64 a |g|⁸ ν_g(R×B_g)/m(B_g)
       = O_a(|g|⁸).

This is uniform for the shrinking ball. In particular the
division by its small Haar volume does not produce any loss.
Centering is essential to this simple argument: an
unremoved vacuum translation atom would not obey the
Haar-marginal bound on such windows.

For the band term alone, the exact continuous band and its
observable section identify Y_av(ν_g^15,g) with the Haar
average of Y_g(k) over B_g. Previous uniform band estimates
there are bounded below by m₀/2>0 and above by 1/a−m₀/2.
Adding the negligible positive complement gives

    0 < liminf_(g→0) Y_av(ν_g,g)
      ≤ limsup_(g→0) Y_av(ν_g,g) < 1/a,

for either sign of nonzero real g. If instead one normalizes
by the actual centered probe mass ν_g(R×B_g), its ratio to
m(B_g) tends to one by the full marginal estimate, so the
same strict limiting inequalities hold.

This is a full local joint-measure test after centering
and averaging over B_g, at the specified imaginary
resolution. Neither its proof nor its statement assigns an
energy operator to the complementary fibre at k=0. It does
not assert a pointwise full structure factor or a real-axis
profile at fixed g.
