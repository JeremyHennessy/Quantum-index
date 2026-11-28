# Edge-disjoint plaquettes do not eliminate the mixed conditional score

Consider a finite comparison graph with two Wilson plaquettes sharing
only a middle vertex, not an edge. This can be embedded with adjacent
collinear path edges and the two squares on opposite sides of that
path. The path uses one active link per plaquette, with consecutive
links U1 and U2 and Z=U1 U2. Let the only magnetic potential be
-g1 Re(A)-g2 Re(B), with A=U1 G1 and B=G2 U2, and keep the same c>0 and
unit quaternion convention as in the shared-edge test. The complementary
three-link products G1,G2 are edge-disjoint both from each other and
from the path, and A,B are based at the two outer endpoints.

The unrestricted ground state exactly factorizes. Indeed disjoint
edge sets have separate product Hamiltonians; each is the positive
ground state of -4c Delta-g_i Re on a single SU(2) holonomy, lifted to
its own set. Any other links are free. At fixed Z, the reference-Haar
law of A,B is independent Haar because G1,G2 are independent Haar
conditional on the path coordinates. The fixed-Z vacuum density is
therefore exactly the product of two single-holonomy densities.

Use the endpoint gauge to set Z=I. In the fiber coordinate U2 the
inverse metric is 1/2; varying U2 on the right by exp(tX) changes A
on the left by exp(-tX) and B on the right by exp(tX). The other three
links of each plaquette each contribute a unit Laplacian on its own
holonomy. Thus the vertical Laplacian reduces on arbitrary smooth
pullbacks of pair functions to

    3 Delta_A + 3 Delta_B + (1/2) sum_j (ell_A^j - r_B^j)^2.

All these fields are Haar-divergence-free. The weighted drift obeys
the same chain rule, so the conditional inverse truly reduces, by
lifting a two-group Poisson solution and invoking uniqueness modulo
constants on the connected compact fiber. For the unit horizontal
lift at Z=I, both changes have the positive sign, giving the source
sqrt(2) T rho = (ell_A^X + r_B^X) rho before the held-Z restriction.

Apply the fixed-Haar quartic identity of the shared-edge test. For
each plaquette at dimensionless t=g/c the single-group density is
1 + t w/6 + 7 t²(w²-1/4)/576 + O(t³), where w is the real coordinate
of its holonomy and the quadratic coefficient follows by inverting
the degree-two spherical harmonic with unit Laplacian eigenvalue 8.
Multiplying the two densities supplies exactly the mixed cubic density
terms; the quartic formula needs no higher density coefficients.
The three quartic contributions with the larger source sqrt(2) T rho,
with c removed from the generator, are 1/16765056, 0, and 1/2286144.
The rational replay uses the same exact polynomial solver but the
edge-disjoint geometry and independently derived factorized density
coefficients. Run the two scripts separately:
`python exact_plaquette_mixed_gram.py` and
`python verify_edge_disjoint_mixed_gram.py`.

As an independent analytic check, write the imaginary coordinates as
a and b, and fix the i-th direction. Set p=a_i b_0+a_0 b_i and
q=(a×b)_i. The first Poisson solutions are −a_i/63 and −b_i/63.
The mixed second-order residual is (−p+2q)/756. The combinations
p+q and p−q have eigenvalues 22 and 18 respectively under −Delta_v
and Haar squared norms 1/4. These give the residual inverse term
1/16765056. The pure second-order cross vanishes by product Haar;
the cubic source pairings vanish by mean zero of the other factor;
the last form contribution is 1/(63²·36·16)=1/2286144.

Therefore [g1²g2²] of the physical inverse-score energy is
**25/(100590336 c⁵)** even without any shared magnetic link.
The shared-edge value exceeds it by 627631/(466279317504 c⁵) in
this comparison. A mixed coefficient is thus not a certificate of
shared-edge magnetic interaction: the conditional metric itself
couples the two coordinates. The comparison uses two different
geometries and is not a proof that subtraction isolates a canonical
connected coefficient for general lattices. These are finite,
small-magnetic Taylor results only.
