# Exact connected quartic conditional score in the two-active-plaquette fixture

For the finite pair of side-by-side SU(2) plaquettes with consecutive active bottom links, the mixed energy coefficient is **positive**. In the physical conditional generator convention, for any unit coarse Lie-algebra direction,
\[
 [g_1^2g_2^2]\,\langle s,L_z^{-1}s\rangle_{\rho_z}
   =\frac{473147}{296723202048\,c^5}.
\]
This is the analytically expanded exact interacting vacuum of the finite fixture. It is not a bound or sign claim for larger Wilson systems.

## Fixed-Haar variational expansion

Initially use dimensionless couplings \(t_i=g_i/c\). Work at \(Z=I\), without loss for the scalar Gram: endpoint gauge transformations identify all fibers isometrically and act orthogonally on its Lie directions, and at fixed \(Z\) their stabilizer acts by all adjoint rotations. Write \(\rho=\Omega^2\) on the fiber. The one-link coarse marginal is exactly Haar, so \(\rho\) has conditional Haar mean one. Temporarily use the doubled-variance score source \(b=\sqrt2\,T\rho\), avoiding derivatives of a logarithm. On fixed conditional Haar let
\[
 \mathcal A_\rho=-\operatorname{div}_v(\rho\nabla_v),\qquad
 \mathcal A_j=-\operatorname{div}_v(\rho_j\nabla_v),
\]
where \(\rho_j\) is the homogeneous degree-\(j\) Taylor polynomial in \((t_1,t_2)\) and the vertical geometry has no factor \(c\). The physical Gram is \((2c)^{-1}\langle b,\mathcal A_\rho^{-1}b\rangle_{\rm Haar}\). Indeed the weighted Poisson equation, multiplied by \(\rho\), has this source because the original centered score is \(T\log\rho\), with conditional mean zero. Constants are always quotiented out in fixed Haar; the choice of additive constant for the Poisson solution does not affect the pairing.

Let \(b_j\) be the degree-\(j\) part of \(b\), \(u_1=\mathcal A_0^{-1}b_1\), and \(r_2=b_2-\mathcal A_1u_1\). The degree-four energy before \((2c)^{-1}\) is exactly
\[
 \langle r_2,\mathcal A_0^{-1}r_2\rangle
 +2\langle u_1,b_3\rangle
 -\langle u_1,\mathcal A_2u_1\rangle .
\]
This follows by expanding the maximized quadratic \(2\langle b,u\rangle-\langle u,\mathcal A_\rho u\rangle\), or equating degrees in the fixed-Haar Poisson equation: the third-order solution cancels against the first-order stationarity condition. Thus only first- and second-order conditional Poisson solves are needed, plus the explicit cubic density source and quadratic metric form. Elliptic fixed-space perturbation near zero and the conditional ground projection justify the analytic expansion as in the preceding two-plaquette note.

## Two-quaternion differential reduction

Use the same shared link \(S\) and complementary paths as before, now writing \(P=P_0U_1\), \(Q=U_2Q_0\), where \(P_0,Q_0\) each use two exclusive links, possibly inversely oriented. On the unrestricted configuration space the two plaquette holonomies based at the common middle vertex are \(W_1=SP_0U_1\) and \(W_2=U_2Q_0S^{-1}\). Their product Haar law is independent Haar: condition on \(S\), then use the disjoint exclusive products. Gauge fixing a tree of this two-cycle graph shows that every invariant vacuum function is a simultaneously conjugation-invariant function of \((W_1,W_2)\). Alternatively the lifted positive reduced ground state suffices for this identification. In the pair variables, the ambient Laplacian is
\[
 \Delta_E=3\Delta_A+3\Delta_B+\sum_{j=1}^3(\ell_A^j-r_B^j)^2 .
\]
Each exclusive link induces an isometry on its own holonomy at fixed other links; varying the shared \(S\) by left multiplication gives the displayed simultaneous direction. This relation holds on all smooth pulled-back pair functions, not merely on their compression.

On the fiber \(Z=I\), transport both plaquette holonomies to the right endpoint by conjugation by \(U_2^{-1}\), and put \(K=U_2^{-1}S\). The transported pair is \(A=KP_0\), \(B=Q_0K^{-1}\). Its Haar law is again independent Haar. The ground density is the same pair function (simultaneous conjugation invariance), but the kinetic metric has changed. The induced conditional inverse metric is \(1/2\) on \(U_2\); both that link and \(S\) map isometrically to \(K\) separately, giving the combined factor \(3/2\) on the shared direction. The other exclusive links give two unit copies per quaternion. Thus
\[
 \Delta_v=2\Delta_A+2\Delta_B+\tfrac32\sum_{j=1}^3(\ell_A^j-r_B^j)^2 .
\]
The same isometry chain rule for the gradient, with pair density \(\rho(A,B)\), gives the full weighted operator on pulled-back pair functions. It genuinely reduces the centered inverse on such sources: a solution of the two-group centered Poisson equation lifts to a solution of the full fiber equation, unique modulo constants. All coefficients use right or left increments in unit imaginary quaternion directions.

Before restriction, the transported pair is \(A=KP_0 Z\), \(B=Q_0K^{-1}\). The canonical unit horizontal lift in direction \(X\) differentiates \(Z\) by \(\sqrt2\,X\) at identity; its \(U_2\) component is right direction \(X/\sqrt2\) there. Thus
\[
 b=\sqrt2\,T_X\rho=(-\ell_A^X+2r_A^X+r_B^X)\rho .
\]
This explicitly retains the coarse-product derivative of \(A\); the intrinsic operator uses the two transported holonomies at held \(Z\), whereas the source is horizontal before restriction.

## Exact finite coefficient replay

Write the quaternion coordinates as \(A=(a_0,\mathbf a)\), \(B=(b_0,\mathbf b)\). The dimensionless ground eigenproblem is \(-\Delta_E-t_1a_0-t_2b_0\). Its ordinary recursive Taylor equations to total degree three, fixing the constant by Haar normalization of \(\Omega\), preserve bidegree at most \((i,j)\) and the corresponding two center parities for coefficient \([t_1^it_2^j]\). In particular the cubic density coefficients used in the energy are
\[
 [t_1^2t_2]\rho
 = -\frac{3361}{1617408}b_0|\mathbf a|^2
   -\frac{647}{3234816}a_0\,\mathbf a\cdot\mathbf b
   +\frac{29}{18432}b_0,
\]
and the coefficient of \(t_1t_2^2\) is obtained by interchanging the quaternion labels. The reduced Poisson operator at zero is \(-\Delta_v\); its solves for \(u_1\) and the three second-order residual terms preserve the same small bidegree spaces. The cross pairing between the \((2,0)\) and \((0,2)\) residuals vanishes: each depends only on its own quaternion, its centered solution does too, and product Haar factors.

Run `python exact_plaquette_mixed_gram.py` with SymPy. The replay uses polynomial quotient coordinates \(a_0^2=1-|\mathbf a|^2\), \(b_0^2=1-|\mathbf b|^2\), quaternion-generator integer coefficients, exact rational solves, and independent Haar moments on the two unit 3-spheres. For a quaternion coordinate monomial with even exponents \(m_i\), the moment is \(\prod_i(m_i-1)!!/[4\cdot6\cdots(4+\sum_i m_i-2)]\), with empty products one; odd exponents give zero. The verifier checks every centered Poisson solve by the original differential residual, all density normalizations, the previously established mixed second-order vacuum term and the quadratic leading Gram \(1/3024\) at \(c=1\). For the mixed quartic term the three fixed-Haar contributions, before the prefactor, are
\[
 \frac{221051}{148361601024},\qquad
 \frac1{4245696},\qquad
 \frac{29}{19813248}.
\]
Taking their sum, multiplying by \((2c)^{-1}\) and replacing \(t_i=g_i/c\) proves the stated coefficient. With a vertical generator not carrying \(c\), the result instead has denominator proportional to \(c^4\). The quartic coefficient is connected in the sense that the two single-coupling curves do not contain this mixed term.

This is a finite, small-magnetic perturbation coefficient on two adjacent plaquettes. It neither supplies a weak-bare estimate at large magnetic/electric ratio nor controls the full Wilson conditional inverse or the macroscopic marginal.
