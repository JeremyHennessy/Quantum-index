# Exact critical locus of the flat-channel determinant

This is a fixed-spacing reference calculation at \(E=-13/336\). Let \(X_j=2\cos p_j\) and write \(f\) for the scaled flat elementary determinant from [the geometric factor proof](FLAT-GEOMETRIC-IRREDUCIBILITY.md). The real torus critical-zero locus of \(f\) is exactly
\[
X_i=-2,\qquad X_j+X_k=3/10
\]
over the three choices of \(i\). At these loci **two** elementary eigendirections are at the target, not a single eigenvalue with a scalar quadratic saddle.

Indeed \((\partial_{X_j}-\partial_{X_k})f=4000(X_j-X_k)(X_i+2)\). When all three \(X_i\) are interior, every partial derivative must vanish, so they are equal. Substitution into the polynomial and a derivative gives the only possible common root \(23/10\), outside the cube. With one boundary \(X_i=2\), the other coordinates must both equal \(3/20\), and the polynomial value is \(-5160\). With \(X_i=-2\), the face polynomial is exactly \(4300(X_j+X_k-3/10)^2\). With two boundary coordinates, the one-variable polynomial and derivative have no common root for \((2,2)\), have root \(-17/10\) for \((2,-2)\), and have only the inadmissible root \(23/10\) for \((-2,-2)\). No cube corner is a zero.

On the critical locus take \(i=2\). The elementary shifted matrix, in units \(1/168\), has an isolated third diagonal \(3/10-X_0-X_1=0\). Its remaining \(2\times2\) block has determinant \((43/10)(3/10-X_0-X_1)=0\) and trace \(43/10\). Thus its total nullity is exactly two. The three known flat companion directions produce at least six zero directions there; other companion bands are not classified by this computation.

Locally put \(s=X_0+X_1-3/10\) and \(r=p_2-\pi\). The derivative of \(s\) in the first two angular coordinates is nonzero along the locus because no two endpoints sum to \(3/10\). There,
\[
\partial_{X_2}f=400(X_0+2)(10X_0-23)<0
\]
for \(X_0\in[-17/10,2]\). Since \(X_2+2=2(1-\cos r)\), the exact local analytic normal form is \(4300s^2-b(s,r,\text{tangent})r^2\) for a positive analytic \(b\). The real zero set is two smooth sheets meeting transversely in their two normal directions. This is a determinant normal form, not a proof that the full projected reference resolvent has a uniformly bounded finite block. In particular it does not determine regularity of the residual factor or of intersections with it.

Replay: **python3 flat_critical_locus.py**.
