# Exact exclusion of triple residual thresholds in the strict distinct interior

This fixed-spacing result concerns the separated reference symbol at target
energy E = −13/336, not the physical defect or the continuum. On the
pairwise-distinct cosine chart, the elementary characteristic p has three
simple roots. The companion threshold evaluated at those roots agrees with
the degree-at-most-two remainder H = Aλ²+Bλ+C from the previous
distinct-cross reduction. Simultaneous **three distinct elementary**
residual thresholds are therefore exactly A=B=C=0. We exclude this locus
in the strict physical chart, including off the flat graph. This does not
exclude coincident companion energies within an elementary factor or
settle the off-flat ordinary two-branch rank-defect problem.

## Exact univariate projection

Use (s,t,v)=(e1,e2,e3+2e2), with r=e3=v−2t. Convert A,B,C separately to
primitive integer polynomials, which preserves their zero sets. Their
total degrees in (v,t) are 3,4,4. The degree-four homogeneous term of B is
−393379840000000000 v²t². A's degree-three homogeneous form is nonzero on
each axis: its v³ coefficient is 11572665600000000 and its t³
coefficient is 230592040000000(80s−1001). Consequently A=B=0 cannot have
a point at projective infinity for |s|≤6, even over C.

Homogenize in (v,t,w), then shear v=u+t so the matrix construction uses
(u,t,w). For every degree-nine monomial choose the first pure-power
divisor among u³,t⁴,w⁴ and use its complementary monomial times
the corresponding homogeneous A,B,C as a row. The resulting coefficient
matrix is 55×55 (rows and columns in the same monomial order). The
standard Macaulay determinant quotient by the 15×15 submatrix indexed
by monomials with multiple pure-power divisors is the homogeneous
resultant, up to fixed sign. In particular, every affine triple root
has its homogeneous monomial evaluation vector in the numerator
kernel. The quotient identity holds as a polynomial, not merely where
the submatrix can be inverted. At s=0 the two determinants are nonzero
modulo both primes 1009 and 1013 (416,758 and 922,947 respectively).

For a rigorous interpolation bound, assign weights 3 to v, 2 to t and
0 to w. The maxima of i+3j+2k on source terms s^i v^j t^k are 9,10,11;
the change f(v,t,w)→f(s³v,s²t,w) multiplies the resultant by
s^(5·3·4·4). Multi-homogeneity in the three equations of degrees
(16,12,12) thus bounds the unscaled projection degree by
16·9+12·10+12·11−5·48=156. The shear is constant and determinant one,
so it does not change this bound or zero set.

Evaluate the exact determinant quotient at 161 distinct integer s
values using GMP fraction-free row elimination. Interpolate over Q at
157, with four surplus checks; every interpolated coefficient is
integral. The primitive resultant has actual degree 148 and is divisible
by 80s−1001. This factor can be removed on |s|≤6 since it has no root
there. The remaining primitive degree-147 polynomial is squarefree
by same-degree reduction and a derivative gcd modulo 1009. Exact
real-root isolation on [-6,6] gives exactly nine simple roots, none
at the endpoints.

## Exact physical sieve

At every isolated s root, refine the certified initial bracket using
polynomial signs evaluated with integers on a 131-place decimal
grid. Set the evaluation-vector coordinate w⁹=1 (there is no allowed
point at infinity). Exhaustive row elimination of the remaining 54
columns using outward-rounded integer interval arithmetic finds
54 nonzero pivots on each refined bracket. Every normalized solution
must then share the enclosed coordinates u,t from the columns
u w⁸,t w⁸. Undo the shear to recover v=u+t. This argument alone already
gives a rigorous necessary box for all triple solutions; it does not
assume numerically recovered expressions are exact solutions. In fact
the resultant criterion and absence of infinity give existence of a
complex common zero at each projected root. Its normalized monomial
coordinates are unique by the pivot proof, hence the common zero is
real by conjugation.

For r=v−2t evaluate the cosine cubic X³−sX²+tX−r. Three distinct real
cosines require strictly positive discriminant; to have all roots
in (−2,2), the elementary symmetric sums of the shifted triples
X_i+2 and 2−X_i must all be positive. The six tests are
s+6, t+4s+12, r+2t+4s+8, 6−s, t−4s+12, 8−4s+2t−r.
Eight of the nine exact lift boxes give strictly negative discriminant.
The remaining lift, s≈−5.71246339495, gives strictly negative
t+4s+12, excluding the required cosine range. All nine flat-graph
signs are resolvably nonzero as an additional control; the exclusion
does not require that check. Numerical centers are only orientation;
exact brackets and signs are in the reproducible lift artifact.

Thus no off-flat strict pairwise-distinct point has three distinct
elementary thresholds. Ordinary off-flat distinct-elementary pairs
still require rank/geometry analysis. One possible subsequent
reduction uses the omitted third elementary root ζ: eliminate v
linearly by p(ζ)=0, and impose B=A(p₂+ζ),
C=A(p₁+p₂ζ+ζ²). This keeps the two equations cubic in t,
but no projected rank-defect claim is made here.

## Reproduction

Run in an isolated working directory with the four replay sources.
The input distinct-cross.json is the exact output of the existing
distinct-interior reducer on its pinned global Q9.

    R=distinct-cross.json
    PYTHONHASHSEED=953 python triple_macaulay.py "$R" matrix.txt
    g++ -O3 -Wall -Wextra exact_det.cc -lgmpxx -lgmp -o exact-det
    ./exact-det < matrix.txt > values.txt
    PYTHONHASHSEED=953 python exact_projection.py values.txt projection.json
    PYTHONHASHSEED=953 python interval_lifts.py "$R" projection.json lifts.json

A separate complete replay at seed 479 matched the projection and lift
artifacts byte-for-byte.

Generated SHA-256 digests (files need not be archived in the repository):

| File | SHA-256 |
|---|---|
| matrix.txt | 54077964d77630c751205bc50b0617ba813999b76446a4a8134567ad128793ae |
| values.txt | 07b53a10da2f9a8091c28227a50fd884bb2e2c40bcb01d3e8aa14b8e8a1195b5 |
| projection.json | 6e501519b0268fcfa11eb9243e891416f85fc95c2d4dc6215d03466e0b615671 |
| lifts.json | 3c59be56a11a31aeb384788b890a41c396358dfb1d0875e41bc904d38741bccd |
