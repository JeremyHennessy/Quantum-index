# The first finite-box electric excitation carries the adjoint witness

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [finite-box time-continuum proof](2026-11-25-finite-box-adjoint-exceptional-times.md) left the eventual sign and first decay rate of the adjoint witness unknown. Here both are determined perturbatively at small positive scaled spatial coupling γ on every fixed open rectangular spatial box. The box is held fixed in every small-γ assertion.

Use H=L+γV, V=∑_r τ_r, F=τ_p, A(T)=e^{TH}F/e^{TH}1, and h(T)=⟨R,A(T)⟩_Haar from the preceding note. Thus R=τ_pτ_q−τ_C/4 for distinct neighboring p,q sharing the edge e, and ∥R∥²=3/64. Work in the gauge-invariant subspace. Write λ₀(γ) for the top eigenvalue and λ_*(γ) for the second-highest eigenvalue there.

Construct the spatial plaquette graph: vertices are all elementary spatial plaquettes, edges join distinct plaquettes that share a lattice edge. Let B be its adjacency matrix, D its degree matrix, and ρ the largest eigenvalue of D+B. Then, for sufficiently small γ>0 in each fixed box:

* λ_* is simple, comes from the electric one-plaquette eigenspace, and
\[
\delta_*(\gamma):=\lambda_0(\gamma)-\lambda_*(\gamma)
=6+\gamma^2\left(\frac7{120}-\frac{\rho}{168}\right)+O(\gamma^3).
\]
* For each such fixed γ, h(T)=c_*(γ)e^{-δ_*(γ)T}+o(e^{-δ_*(γ)T}) as T→∞. If a is the positive unit Perron vector of D+B in the normalized plaquette basis, then
\[
c_*(\gamma)=-\frac{\gamma}{42}\,a_p(a_p+a_q)\,\|R\|^2+O(\gamma^2)<0.
\]
The slow mode is therefore visible in the normalized conditional signal; the denominator changes the coefficient rather than removing the mode.

## Electric eigenspaces and the second-order matrix

For γ=0 the ground state is 1. A gauge-invariant nontrivial edge-spin assignment must touch at least two nontrivial edges at every occupied vertex, so its support contains a cycle. The open cubic lattice has girth four; each nontrivial edge has decay rate at least 3/2. Equality at total decay rate 6 forces a single elementary square, all four edges fundamental. The invariant intertwiner is one-dimensional at each vertex on that square, giving precisely the Wilson trace there. Thus the next electric eigenvalue is −6 with orthonormal basis e_r=2τ_r, and is separated from all other eigenvalues. Orthogonality also follows from distinct center-sign parities.

Let P project onto this eigenspace. PVP=0: a triple of elementary plaquette boundaries cannot have zero symmetric difference. More generally there is no closed nonempty set of at most four distinct plaquettes, since a chosen square has four edges and each other distinct square can meet it in at most one. The second-order reduced operator for the top-signed generator H is
\[
 M=P V(1-P)(-6-L)^{-1}(1-P)VP,
\]
where the inverse is on the complement. This follows from the eigenvalue equation or the isolated-cluster resolvent reduction in [Kato](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf). All matrix elements below are finite sums of Haar projections on the indicated simple spin assignments.

For distinct p,q, an intermediate produced by a plaquette r acting on e_p can overlap one produced by s acting on e_q only when the four parities cancel. The preceding four-face exclusion leaves just the two patterns (r,s)=(p,q) and (q,p). In the first, the only common piece of τ_p² and τ_q² is the vacuum. Before the overall normalization factor 4 from e_p,e_q, its contribution is −(1/16)/6. In the other pattern the common vector is τ_pτ_q:

* If the two squares share no edge, the product has rate 12 and norm squared 1/16, giving (1/16)/6 and exact cancellation.
* If they share one edge, the shared-link spin-0 projection is τ_C/4, norm squared 1/64, and rate 9. The spin-1 remainder has norm squared 3/64 and rate 13. This gives (1/64)/3+(3/64)/7. After the vacuum term and normalization, the result is 1/168.

For a diagonal entry, the contributions from different r have different parities. The r=p term follows from τ_p²=(1+χ_1(p))/4. Its two norm squares are each 1/16, with rates 0 and 16, so the normalized contribution is 4[(1/16)/(−6)+(1/16)/10]=−1/60. Each other plaquette contributes 1/24 when not edge-adjacent, or 1/21 when adjacent. With N the number of spatial plaquettes, this gives
\[
M=\left(-\frac1{60}+\frac{N-1}{24}\right)I+\frac{D+B}{168}.
\]
Separately, the ground state derivative is V/6 (constant gauge-invariant eigenfunction normalized to norm one), hence λ₀(γ)=γ² N/24+O(γ³). The extensive N term cancels in the excitation difference.

The plaquette graph is connected: every plaquette lies in a spatial elementary cube, the six faces of a cube form a connected edge-adjacency graph, and adjacent cubes share a face. Perron–Frobenius gives a simple top eigenvalue and strictly positive a. Dividing the analytic isolated-cluster effective matrix minus its value at zero by γ² gives an analytic matrix with value M, because its first derivative vanished. Thus the leading split eigenvalue is simple and analytic near zero within that reduced problem, and its normalized eigenfunction ψ_γ can be chosen with ψ_0=∑_r a_r e_r. Corrections inside the original plaquette cluster need not be computed to obtain the witness below.

## Numerator and denominator contributions to the residue

Let φ_γ be the positive norm-one ground state, a₀(γ)=⟨φ_γ,F⟩/⟨φ_γ,1⟩, and G_γ=⟨φ_γ,1⟩φ_γ. The only contribution of rate δ_* to h is
\[
c_*(\gamma)=
\langle\psi_\gamma,F-a_0(\gamma)\rangle\,
\langle R,\psi_\gamma/G_\gamma\rangle.
\]
In fact the numerator after ground removal begins at rate δ_*, and nonconstant terms in the reciprocal denominator require at least one extra positive excitation rate. Higher direct modes decay faster because the first excited eigenvalue is simple. The convergence justification is in the preceding note. Also ⟨ψ_γ,φ_γ⟩=0 and the first factor at γ=0 is a_p/2; no constancy of ⟨ψ_γ,1⟩ at nonzero γ is needed.

At γ=0 the second factor vanishes by orthogonality. Its derivative has two pieces. The R-sector of ψ'_0 is QVψ_0/7, from differentiating the eigenvalue equation between electric rates 6 and 13. The derivative of the reciprocal ground denominator contributes −QVψ_0/6, since G'_0=V/6. For QVψ_0 the only possibilities are the unordered pair {p,q}: spin 1 on e requires both elementary squares to contain e, then the six other edges C uniquely determine the two length-three paths between the endpoints of e. Hence QVψ_0=2(a_p+a_q)R. Combining the terms gives the residue in the statement, using 1/7−1/6=−1/42. The [exact anisotropic linear response](2026-11-25-anisotropic-adjoint-response.md), in which T is taken large *after* the derivative in γ, independently contains the same −1/42 coefficient for the sum of unsplit plaquette residues. The individual Perron residue here is obtained at small fixed γ *before* taking T large, so it need not equal that sum.

## Controls and scope

On the smallest spatial cube the plaquette graph has degree four and ρ=8, so the shift is +3γ²/280+O(γ³) and a_p(a_p+a_q)=1/3. Exact rational checks reproduce the second-order fractions, the sign of the normalized residue, the cube adjacency, and the second/fourth unit-quaternion moments used in the Haar calculations. As a geometric check, when all three spatial side lengths grow, ρ tends to 24: the maximum degree is 12, and constant-vector Rayleigh quotients approach twice this interior degree. This only controls the algebraic coefficient, not the perturbation remainder or the allowable γ as volume grows.

The low-energy effective-transfer construction has substantial prior literature, including [Lana (1985)](https://www-library.desy.de/preparch/desy/postpr/1985/desy85-007.pdf). Literature priority of this finite-box observable-specific residue is unverified. The result is not a bound in the isotropic large-coupling regime, and does not supply a spatial-continuum mass gap. The critical next test is whether one can remove the volume dependence of the perturbation control after the extensive term cancels, or identify why the boxwise expansion cannot do so.
