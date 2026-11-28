# Uniform actual-Wilson raw prefix coercivity at small magnetic coupling

Let \(G=SU(2)\) carry its unit-quaternion round metric, and take a finite spatial lattice of independent oriented link variables with Wilson magnetic terms \(w_p=\frac12\operatorname{Re}\operatorname{Tr}U_p\), each with four distinct links and at most four plaquette terms incident to any link. In dimensionless electric units put \(H=-\Delta-t\sum_pw_p\), for real \(t\). We prove for \(|t|\le 1/1024\) that on every distinct-link path of length \(b\ge2\), at every fixed path product and every fixed raw spectator environment, the actual vacuum conditional intrinsic gap is at least
\[
 \frac{2-1024|t|}{4}\ \ge\ \frac14 .
\]
This is uniform in path length, volume and environment. The interval is small *magnetic coefficient in electric units* and does not approach the large-\(t\) weak-bare Wilson trajectory.

## A per-link Fourier norm

For each finite tensor index \(\mathbf n=(n_e)_{e\in E}\), \(n_e\ge0\), let \(R_{\mathbf n}\) be the tensor product of the spin-\(n_e/2\) unitary irreducible representations on independent links, and set \(\lambda(\mathbf n)=\sum_e n_e(n_e+2)\). Represent a function by
\[
 f(U)=\sum_{\mathbf n}\operatorname{Tr}(A_{\mathbf n}R_{\mathbf n}(U)).
\]
Use mean-zero functions, with the constant coefficient absent, and the norm
\[
 \|f\|_* = \max_{i\in E}\sum_{\mathbf n:n_i>0}\lambda(\mathbf n)\|A_{\mathbf n}\|_1 .
\]
Here \(\|\cdot\|_1\) is the matrix trace (nuclear) norm and the customary dimension multipliers, if using normalized Fourier coefficients instead, are absorbed into \(A\). Uniqueness follows from Peter–Weyl orthogonality. This is a complete coefficient space for any fixed finite edge set: it is equivalent to the usual weighted \(\ell^1\) over nonconstant labels since their active supports are nonempty, with equivalence factor at most \(|E|\). The contraction constants below do not use that factor. The series and its first and second electric coordinate derivatives converge uniformly for a fixed finite graph: the generator bound in spin \(n/2\) is \(n\) in a unit Lie direction, obtained by realizing the irrep in the nth tensor power of the fundamental, and second derivative products are bounded by \(\lambda\) times the coefficient norm. Thus functions are \(C^2\) there and termwise differential identities hold. Real functions form a closed real subspace.

For a pair of tensor labels \(\mathbf n,\mathbf m\), a product of matrix coefficients is the tensor-product trace coefficient. Unitary decomposition into irreducibles yields the usual output coefficients by block compression and trace over any multiplicity factors. The sum of their nuclear norms is at most \(\|A_{\mathbf n}\|_1\|B_{\mathbf m}\|_1\): block pinching is nuclear-norm contractive by duality against block diagonal norm-one operators, and the partial trace on each multiplicity block is likewise contractive by testing against \(T\otimes I\) of the same operator norm. For a product term a link inactive in both inputs is inactive in every output. These statements apply after left/right differentiation at a link just as before; the representation label is unchanged and each unit derivative multiplies the bound by at most \(n_e\) or \(m_e\).

## Uniform quadratic contraction for the exact log vacuum

Let \(Q\) remove the Haar mean, \(K=(-\Delta)^{-1}Q\) and \(\Gamma(f,g)=\sum_{e,a}(Y_e^af)(Y_e^ag)\) using three orthonormal invariant derivatives on each edge. Set \(B(f,g)=K\Gamma(f,g)\). At output anchor \(i\), only labels with \(n_i>0\) or \(m_i>0\) on the inputs contribute (here the labels refer to the two inputs). The \(\lambda\) in the anchored output norm cancels the Poisson multiplier on every nonconstant output label. For the first input's active-anchor contribution in a fixed Lie direction the ensuing bound is
\[
 \sum_{\mathbf n:n_i>0}\|A_{\mathbf n}\|_1
     \sum_e n_e\sum_{\mathbf m:m_e>0}m_e\|B_{\mathbf m}\|_1
 \le \tfrac19\|g\|_*\!
     \sum_{\mathbf n:n_i>0}\lambda(\mathbf n)\|A_{\mathbf n}\|_1,
\]
since \(m_e\le\lambda(\mathbf m)/3\) and \(\sum_e n_e\le\lambda(\mathbf n)/3\). The other role and three Lie directions yield
\[
 \|B(f,g)\|_*\le \tfrac23\|f\|_*\|g\|_* .
\]
Double-counting anchors in both inputs is only an upper bound. Absolute coefficient estimates justify the manipulations by finite approximations and continuity, without a volume factor in the bound.

Each \(w_p\) has four active fundamental links of total Casimir 12. Its nuclear norm is at most 8: write the normalized 2-by-2 trace as \(2^4\) monomials, each a product of four unit matrix coefficients with scalar multiplier \(1/2\). An inverse entry is a matrix coefficient of the dual irrep with indices transposed. Choosing fixed unitarily equivalent realizations of each irrep preserves the norms. The trace is real on \(SU(2)\). Therefore \(\|K\sum_pw_p\|_*\le32\), since the inverse cancels \(\lambda\) and at most four terms touch an anchor.

For a directly checkable interval take \(\tau=|t|\le1/1024\). The map
\[
 T(f)=tK\sum_pw_p+B(f,f)
\]
maps the closed real ball \(\|f\|_*\le64\tau\) into itself: \(32\tau+(2/3)(64\tau)^2\le64\tau\); its Lipschitz constant there is at most \((256/3)\tau\le1/12\). The fixed point solves \(\Delta f+|\nabla f|^2=-t\sum_pw_p+\int|\nabla f|^2d\mathrm{Haar}\). Equivalently \(e^f>0\) is an eigenfunction of \(H\) on the finite compact product; by positivity and simplicity it is proportional to the vacuum. In particular this identifies the actual vacuum rather than a separate magnetic Gibbs measure.

## Transfer to the raw path

Along a product-round prefix geodesic with tangent \(X=(X_j)\), \(X_0=X_b=0\), each path link moves by commuting left/right translations with speeds \(|X_{j-1}|\) and \(|X_j|\). In a coefficient with tensor label \(\mathbf n\), the second derivative is bounded by
\[
 \|A_{\mathbf n}\|_1
    \left(\sum_{e_j} n_{e_j}(|X_{j-1}|+|X_j|)\right)^2
 \le 4\lambda(\mathbf n)\|A_{\mathbf n}\|_1
          \sum_{j\text{ adjoining an active path edge}}|X_j|^2 .
\]
The estimate is Cauchy–Schwarz and each prefix adjoins two path links. Summing the coefficients at each adjacent link anchor shows \(\|\nabla^2_{\rm prod} f\|_{\rm op}\le8\|f\|_*\). Fixed raw spectators and reversal of an oriented edge do not change this bound. Hence \(\|\nabla^2_{\rm prod}\log q\|_{\rm op}\le16\|f\|_*\le1024\tau\) for the conditional vacuum law \(q\), since normalization subtracts a prefix-constant and the logarithm of the density is \(2f\). Product Ricci is 2, so the weighted product-round gap is at least \(2-1024\tau\) by integrated Bochner. The raw intrinsic prefix cometric is the Dirichlet chain inverse, bounded below by \(I/4\), hence the intrinsic gap is at least \((2-1024\tau)/4\ge1/4\) on \(\tau\le1/1024\).

For comparison, on the ambient product round metric the same estimate uses one anchor per link and \((\sum_e n_e |X_e|)^2\le\lambda(\mathbf n)\sum_{e:n_e>0}|X_e|^2\), giving \(\|\nabla^2 \log\rho\|_{\rm op}\le2\|f\|_*\le128\tau\). In the separate physical conditional form with only the path product \(z\) held and spectators free, the flattened spectator law restricts this ambient Hessian along a product coordinate slice. Its product-form gap is at least \(2-128\tau\), and the additional spectator gauge-derivative Dirichlet term from the exact physical comparison is nonnegative. This is a conditional estimate, not the statement that fixed dressed spectator motion is a nontrivial physical mode.

The result is for exactly the path conditioning stated, with raw spectators held fixed; it does not tensorize arbitrary unions of actual blocked fibers and it does not provide continuum coercivity along the physical weak-bare trajectory.
