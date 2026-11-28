# Geometric irreducibility of the flat reference factor

This concerns only the separated reference determinant at \(E=-13/336\), not the dressed physical source. The three-channel flat factor \(F\) is absolutely irreducible in the Laurent ring.

Write \(X=z_0+z_0^{-1}\), \(Y=z_1+z_1^{-1}\), \(Z=z_2+z_2^{-1}\). Exact expansion of the small shifted elementary-loop determinant gives \(4741632000F=f(X,Y,Z)\), where
\[
f=4300(X^2+Y^2+Z^2)-4000XYZ
 +600(XY+XZ+YZ)-1380(X+Y+Z)-19573.
\]
Use the field \(K=\mathbb C(z_0,z_1)\). To test squares in \(K\), use the discrete valuation at \(z_1=i\), where \(Y=0\). A nonzero specialization of a regular function that was a square in \(K\) would still be a square in \(\mathbb C(z_0)\): the square root must have valuation zero and hence nonzero residue.

The \(Z\)-discriminant, specialized at \(Y=0\), is
\[
-73600000X^2+22080000X+338560000.
\]
It has two distinct roots, one at \(-2\) and the other outside \(\{-2,2\}\). A simple root \(X_0\notin\{-2,2\}\) pulls back under \(X=z_0+z_0^{-1}\) to simple zeros, as its quadratic preimages are nonzero and the derivative does not vanish there. Thus the discriminant is nonsquare even over \(K\), and adjoining a root \(Z\) gives a quadratic extension.

Now \(z_2\) has equation \(z_2^2-Zz_2+1=0\). The norm from \(K(Z)\) to \(K\) of its discriminant \(Z^2-4\) equals \(f(X,Y,2)f(X,Y,-2)/4300^2\). At \(Y=0\), the two numerator factors are
\[
4300X^2-180X-5133,\qquad 4300X^2-2580X+387.
\]
The first is square-free, neither of its roots is \(\pm 2\), and the two polynomials have no common roots. The norm therefore has a simple zero after substituting \(X=z_0+z_0^{-1}\). It is not a square in \(K\); a square upstairs would have square norm. The extension obtained by adjoining \(z_2\) thus has degree \(2\cdot2=4\), because \(Z=z_2+z_2^{-1}\) already belongs to \(K(z_2)\).

The polynomial \(z_2^2 f(X,Y,z_2+z_2^{-1})\) is quartic with constant leading and trailing coefficients 4300. It is irreducible over \(K\) by the field degree, primitive over \(\mathbb C[z_0^{\pm1},z_1^{\pm1}]\), and not divisible by \(z_2\). Gauss's lemma and localization therefore give irreducibility in the full complex Laurent ring.

Replay with **python3 flat_geometric_irreducibility.py**. This algebraic factor result plus previously certified real crossings is not a proof of a boundary resolvent or of physical spectral weight.
