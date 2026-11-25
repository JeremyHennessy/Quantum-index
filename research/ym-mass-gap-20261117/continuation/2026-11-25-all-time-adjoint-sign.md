# No exceptional positive times at weak spatial coupling in a fixed box

**2026-11-25 | Finite spatial lattice, continuous time | Research-only; Phase 15 not activated.**

Fix an open rectangular spatial box with at least one elementary cube in each coordinate direction, and adjacent distinct plaquettes p,q. Use the notation of the [finite-box residue](2026-11-25-electric-adjoint-residue.md): H=L+γV, F=τ_p, R=τ_pτ_q−τ_C/4 with ||R||²=3/64, and hγ(T)=〈R,e^{TH}F/e^{TH}1〉 in Haar measure. Work in the gauge-invariant subspace. There are constants 0<c<C and γ₀>0, depending on the fixed box, such that for 0<γ<γ₀ and every T>0,
\[
 c\,\gamma e^{-\delta_*(\gamma)T}\min(T^2,1)
 \le -h_\gamma(T)
 \le C\,\gamma e^{-\delta_*(\gamma)T}\min(T^2,1),
\]
where δ_* is the smallest positive physical excitation energy. Thus the possibility of isolated cancellation is eliminated for this finite-box weak-interaction regime. Neither the fixed-T derivative nor the eventual negative Perron residue alone suffices: the unsplit cluster resolves on times of order γ⁻².

## Project the entire electric band before taking the long-time limit

Let e_r=2τ_r be the free orthonormal plaquette basis and let Uγ send this basis isometrically onto the isolated electric band, with analytic dependence and U₀ the inclusion, as obtained by the analytic projection intertwiner ([Kato, Chapter II §4 and VII §3](https://link.springer.com/book/10.1007/978-3-642-66282-9)). Set
\[
 B_\gamma=\gamma^{-2}(U_\gamma^* H U_\gamma+6I).
\]
It extends analytically to γ=0 and converges to the real symmetric M calculated in the preceding residue note: a scalar plus (D+B)/168, where D and B are the degree and adjacency matrices on the plaquette graph. This relies on PVP=0; the scalar part cancels when subtracting its top eigenvalue. Let bγ be the top eigenvalue of Bγ. Write λ₀ for the top eigenvalue of H, δ_*=λ₀+6−γ² bγ, φγ for the normalized positive ground state, aγ=〈φγ,F〉/〈φγ,1〉 and Gγ=〈φγ,1〉φγ. Then the contribution obtained by retaining only the band in the centered numerator and only Gγ in the denominator is
\[
 e^{-\delta_*T}\,\ell_\gamma^* e^{\gamma^2T (B_\gamma-b_\gamma I)}u_\gamma,\qquad
 u_\gamma=U_\gamma^*(F-a_\gamma),\quad
 \ell_\gamma^* v=\langle R,(U_\gamma v)/G_\gamma\rangle .
\]
Here and below the real eigenbasis is used. In the plaquette-coordinate space let d_r be the r-th unit vector. At γ=0, u₀=d_p/2 and ℓ₀=0. For any plaquette vector v, the R projection of the derivative of Uγv is QVU₀v/7, by differentiating the invariant-band equation and using that R has electric energy 13. The reciprocal Gγ contributes −QVU₀v/6, since G'_0=V/6. An in-band derivative has no effect because it is orthogonal to R; the result is independent of the analytic frame. The only contributions to QVU₀v are from the ordered pair p,q and its reverse, giving 2(v_p+v_q)R. Therefore
\[
 \ell_\gamma^*=-\gamma\,\frac{2\|R\|^2}{42}(d_p+d_q)^*+O(\gamma^2),
 \qquad u_\gamma=d_p/2+O(\gamma).
\]
This is the *normalized* witness. Dropping the denominator derivative changes the sign. In particular it does not follow from the positive ground-state-dressed cross weight.

For real γ near zero the spectrum external to the ground and band lies at least a common c₁>0 faster than δ_*. The spectral projection onto that external subspace sends F−aγ to an L² vector of norm O(γ) because at zero the source is exactly in the band. For T≥1, splitting off one unit of smoothing gives its centered numerator contribution O(γe^{-(δ_*+c₁)T}) in sup norm, uniformly for small γ in the fixed box. Smoothing is uniformly bounded by Feynman–Kac and the free heat kernel. The rescaled denominator Dγ(T)=e^{-λ₀T}e^{TH}1 satisfies Dγ(T)−Gγ=O(γe^{-δ_*T}) in sup norm by the same smoothing argument, now since (I−P₀(γ))1=O(γ) in L². For T≥1 the ground state has a uniform positive minimum for small γ by elliptic regularity and continuity at 1, and the denominator is bounded away from zero after decreasing γ₀. The rescaled centered numerator is O(e^{-δ_*T}) in sup norm. Replacing Dγ(T) by Gγ in the quotient thus costs O(γe^{-2δ_*T}); the extra γ is essential. Hence, for some c₂>0 and T≥1,
\[
 \frac{-e^{\delta_*T}}{\gamma}h_\gamma(T)=
 \frac{\|R\|^2}{42}(d_p+d_q)^*e^{s(B_\gamma-b_\gamma I)}d_p
 +O(\gamma)+O(e^{-c_2T}),\qquad s=\gamma^2T.
\]
The O(γ) here is uniform in s because the matrix semigroups have norm at most one.

## The crossover cannot cancel

The matrix exponentials in that display converge in operator norm uniformly for s≥0 to e^{s(M-b₀I)}. For bounded s this follows from Duhamel's formula. For large s, the simple Perron eigenvalue of M is separated from all other eigenvalues in this fixed box, so for small γ both exponentials differ from their respective top projections by at most exp(−cs) with common c>0; the projections converge. Taking the fixed cutoff in s large and then letting γ tend to zero gives the uniform convergence. No uniform splitting across boxes is assumed.

For the limiting matrix let k(s)=(d_p+d_q)^*e^{s(M-b₀I)}d_p. The generator has nonnegative off-diagonal entries: shifting its diagonal by a large scalar gives a nonnegative matrix, so the exponential is entrywise nonnegative, with strictly positive diagonal for finite s. Thus k(s)>0. At s→∞, k(s)→a_p(a_p+a_q)>0 with a the positive unit Perron vector of the connected plaquette graph. Compactness then gives inf_{s≥0} k(s)>0. Choose T₀ sufficiently large that the exponential error is less than one quarter of the limiting lower bound including its prefactor. Then choose γ₀ small enough to absorb the analytic and uniform matrix errors. This yields both sides of the desired estimate on T≥T₀. In particular at fixed s>0 and T=s/γ² the normalized crossover limit is exactly ||R||² k(s)/42.

## Earlier times and falsification controls

For T in any compact subinterval of (0,T₀], division by γ converges uniformly to the [exact first variation](2026-11-25-anisotropic-adjoint-response.md),
\[
 \left.\partial_\gamma h_\gamma(T)\right|_0
 =-\|R\|^2e^{-6T}\int_0^T e^{-6t}(1-e^{-t})\,dt<0 .
\]
For T near zero, the signed T² coefficient is exactly −γ||R||²/2 by the [quotient differentiation](2026-11-25-finite-box-adjoint-exceptional-times.md). Uniformity after division by γ follows by integrating the continuous mixed derivative ∂γ∂T² over the γ interval and then twice over T: h₀(T)=0 identically and hγ(0)=∂T hγ(0)=0. These derivatives are continuous to T=0 for the fixed box, by Duhamel and the smooth initial vectors, or by the semigroup on smooth Sobolev domains with smooth bounded multiplier. This covers the remaining times and gives the min(T²,1) factor.

* **Exact cube check.** On a single cube the signless Laplacian is that of the octahedron, with eigenvalues 8,4,2. For faces p,q sharing an edge, the bilinear spectral weights are 1/3,1/2,1/6. They were checked with integer polynomial projectors: for eigenvalue x use (Q−yI)(Q−zI)/[(x−y)(x−z)], and sum entries pp and qp. Thus k(s)=1/3+(1/2)e^{-s/42}+(1/6)e^{-s/28}. This verifies both endpoints and the crossover scale, not the general proof.
* **Endpoint-only inference fails.** The elementary combination 1−5e^{-s}+5e^{-2s} is positive at s=0 and at infinity but negative at log 2. This is not a Wilson counterexample; it tests the need for the entrywise positivity argument, rather than inference from the two endpoint signs.
* **Scope.** The plaquette excitation splitting and the resulting permissible coupling are not uniform in volume. In particular [the band crowding result](2026-11-25-plaquette-band-crowding.md) prevents the Perron-gap proof above from directly extending to infinite volume. [Münster](https://www-library.desy.de/preparch/desy/postpr/1985/desy85-007.pdf) is primary precedent for strong-coupling effective transfer matrices, not an attribution of this normalized-witness result. Literature priority of the observable-specific theorem is unverified. Neither the isotropic large-coupling limit nor the continuum mass gap follows.
