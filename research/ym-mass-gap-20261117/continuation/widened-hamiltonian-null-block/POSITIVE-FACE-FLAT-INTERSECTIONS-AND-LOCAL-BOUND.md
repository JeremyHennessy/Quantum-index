# Flat-factor crossings and local bounds on the positive faces

2026-11-28 UTC. Fixed-spacing reference calculation at \(E=-13/336\). Fix \(X_i=2\) and use \(S=X_j+X_k,\ u=X_jX_k\). The [minus-parity gap](POSITIVE-FACE-MINUS-GAP.md) rules out that entire block at this energy. This note treats all flat-factor zeros on the positive faces, not plus-residual-only thresholds away from the flat factor.

## Exact intersection count

The elementary flat determinant on this face is, up to a nonzero constant,
\[
4300S^2-180S-5133-16000u.
\]
It is the graph \(u=g(S)\) with \(g=(4300S^2-180S-5133)/16000\). The [three-by-three ordered norm](POSITIVE-FACE-PENCILS.md) for the plus residual expands exactly to a scalar times a rationally irreducible primitive polynomial of bidegree \((21,10)\) in \((S,u)\), with 138 terms. Its restriction to the flat graph has degree 22 and is square-free, with irreducible factors of degrees four and eighteen.

Exact Sturm isolation gives seven real intersections within \(-4\le S\le4\). For each, exact polynomial reduction and rational interval arithmetic test \(g(S)-2S+4,\ g(S)+2S+4,\ S^2/4-g(S)\). Six satisfy all three inequalities strictly. The remaining one lies below the positive-edge bound. There are no boundary intersections. Among the six physical intersections, both roots of the degree-four factor have \(Q_+(\ell)=0\) for flat companion energy \(\ell=-1/42\); the four physical roots of the degree-eighteen factor do not. These are six \((S,u)\) representatives on the positive face, not six total momenta. Exact isolators and the rejected root are in the included artifact.

## Local bound

At each intersection both free cosines are interior and unequal. Thus \((S,u)\) are good local tangential coordinates, and the simple root of the restricted polynomial gives independent gradients for the flat and plus-residual factors. The elementary eigenvalue giving the flat zero is simple: the flat graph has nonzero \(u\) derivative, and a Hermitian matrix with a target nullity of at least two would have zero first determinant derivatives. The residual has exactly one simple crossing level along this graph. Indeed along that one-real-variable analytic path the elementary and companion Hermitian pencils have real-analytic eigenvalue branches; removing three constant companion levels leaves the reduced product unchanged, and the simple product zero can come from only one first-order term.

If the flat companion has multiplicity three, its local eigenspace is analytic and the single additional crossing level is an isolated simple residual branch within the relevant elementary/companion spectra. There is no way to get a single residual sum at the target out of a repeated elementary or repeated non-flat companion level. The flat crossing gives three copies of the same scalar elementary eigenbranch. The two energy gradients are independent because the corresponding determinant and energy gradients are nonzero scalar multiples. Hence a tangent direction exists in which both branch slopes are positive.

At a flat companion jump, the simple residual crossing implies exactly one extra companion level at \(\ell\), not two. Its simple root in the reduced characteristic gives an analytic additional scalar branch \(\delta+\ell\). Along the flat elementary graph \(\delta\) crosses simply, so \(\nabla\delta\ne0\). On a small chart the isolated four-level companion compression shifted by \(\ell\) factors as \(\delta P\), where \(P\) is an analytic rank-one projection: it vanishes on the analytic \(\delta=0\) hypersurface and division there is regular. The three flat copies and the fourth crossing branch therefore have smooth separated projectors through the intersection. Here too the two independent gradients give a tangent direction making all four first compressed energy derivatives positive.

In either case there is a definite first derivative on the full target cluster. The [monotone local bound](FLAT-CRITICAL-INTERSECTIONS-AND-LOCAL-BOUND.md) controls smooth localized reference matrix elements near these intersections. Away from the intersections all flat-only zeros are regular except on the already controlled elementary critical curves (which require some \(X_j=-2\)). Thus the flat sector on the positive faces is covered. This does not control the plus-residual singular set away from \(F=0\), an entire positive face, the global finite block, physical spectral density or continuum behavior.

Replay: **python positive_face_flat_intersections.py positive-face-pencils.json --output new-plus-flat.json**. The exact output is 14,856 bytes, SHA-256 **c7e42f892b2fb05222b7b8de402d1adb7c6c244e3e920320cb922c274f0079d9**.
