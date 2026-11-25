# A polynomial noncancellation window for the free-boundary bulk witness

**2026-11-25 | Continuous time on the fixed open spatial lattice | Research only.**

The original \(h_{\infty,\gamma}(T)\) is the Haar spin-1 witness of the [free-boundary quotient](2026-11-25-free-boundary-bulk-limit.md), not a dressed vacuum correlation. For every \(0<\theta<4/21\) there is \(\gamma_\theta>0\) such that
\[
 h_{\infty,\gamma}(T)<0
 \qquad(0<\gamma<\gamma_\theta,\quad 0<T\le\gamma^{-\theta}).
\]
This improves the [logarithmic interval](2026-11-25-infinite-volume-logarithmic-sign-window.md) without assuming a volume-independent gap between individual one-plaquette modes. It does not reach the resolving timescale \(\gamma^{-2}\) or prove a fixed-coupling late-time sign.

## Step 1: finite-box complex estimate with explicit volume cost

In a finite box let \(N\ge2\) bound both the number of links and plaquettes (use their sum plus two), so \(\|V\|\le N\). Write \(w=zN\) for complex coupling. On the gauge-invariant Hilbert space, \(H(z)=L+zV\). At zero coupling the vacuum is simple, the isolated plaquette cluster is at −6, and the higher-decay block has spectral bound at most −6.5. The actual gaps at zero within the higher block are immaterial. The contours around 0 and −6 can thus be chosen fixed, with free resolvent bounds independent of the box. Standard Riesz perturbation as in [Kato](https://link.springer.com/book/10.1007/978-3-642-66282-9) gives the analytic projections \(P_0(w),P_b(w),P_h(w)=I-P_0-P_b\) with each projection's norm difference from its value at zero O(|w|), uniformly for |w| small. To transport the blocks use \(S(w)=\sum_{j=0,b,h}P_j(w)P_j(0)\), whose inverse is uniformly bounded. It maps the free domain to itself and preserves it under its inverse: the bounded commutator with L, first on the free domain, gives a bounded extension in its graph norm and the same commutation relation for the inverse. Equivalently choose |w| sufficiently small that the Neumann series works in both norms. On this domain \([L,P_j]=-[zV,P_j]\); hence \(S^{-1}H(z)S-L\) has bounded norm O(|w|), even on the unbounded higher block.

The vacuum eigenvalue obeys \(|\lambda_0(w)|\le C|w|^2\) and the transported band generator is \(-6I+O(|w|^2)\), all in uniform norm. Indeed the first compressed derivatives vanish by the free Haar parity identities \(P_0VP_0=P_b(0)VP_b(0)=0\); the compressed similarity commutator has zero diagonal since L is scalar on the two blocks. The quadratic bounds then follow by Cauchy's estimate on a fixed disc in w. This step is necessary to allow |w| up to order \(T^{-1/2}\) instead of \(T^{-1}\). On the higher block the bounded perturbation and the free decay imply a norm bound \(C e^{(-6.5+C|w|)t}\) via the Duhamel inequality. Combining the blocks gives
\[
 \|e^{t(H(z)-\lambda_0(w))}(I-P_0(w))\|_{2\to2}
 \le C e^{-6t+C|w|^2t}\qquad(t\ge0)
\]
after restricting the fixed w disc. All constants up to this point are independent of the volume and of the rank of the plaquette band.

Take \(t_s=\log(C_0 N)+2\). Free heat smoothing \(\|e^{t_sL}\|_{2\to\infty}\le C_1\) holds uniformly: its squared norm is the product of the diagonal single-link heat kernels at time \(2t_s\), each at most \(1+C e^{-3t_s}\). This follows from the same SU(2) series used in the bulk construction. The norm bound is over the full product and thus valid on the physical subspace. Complex Feynman–Kac domination gives \(\|e^{t_s H(z)}\|_{2\to\infty}\le C_1e^{|w|t_s}\). It also gives \(\|e^{t_s H(z)}1-1\|_\infty\le e^{|w|t_s}-1\) by bounding the absolute difference of the path weights pointwise.

Suppose now \(N\le C_2 T^3\) with fixed \(C_2\), and T is sufficiently large. On the disc \(|z|\le d/(N\sqrt T)\) with fixed small d, \(|w|t_s=O(T^{-1/2}\log T)=o(1)\). Then the rescaled vacuum denominator \(G=P_0(w)1\) satisfies \(\|G-1\|_\infty=O(|w|(1+t_s))=o(1)\), by writing \(G=e^{-t_s\lambda_0}e^{t_sH(z)}P_0(w)1\) and using the preceding estimates, including \(\|(P_0(w)-P_0(0))1\|_2=O(|w|)\). The actual rescaled denominator is \(D=e^{T(H(z)-\lambda_0)}1\). Splitting off \(t_s<T\) and using the uniform smoothing and excitation estimates bounds \(\|D-G\|_\infty\le C e^{-6(T-t_s)}\), with constants uniform in this disc and range of box sizes. Hence \(|D|\ge1/2\) pointwise for large enough T. No bound exponential in the spatial volume is used.

Set \(a(z)=\langle1,P_0(w)F\rangle/\langle1,P_0(w)1\rangle\); the pairing is linear in its second argument. Since the projection is rank one and \(\langle1,P_0(w)1\rangle\) is close to 1, this removes the vacuum exactly from \(F-a(z)\), and this input is bounded in L² uniformly. The centered numerator \(\exp(T(H(z)-\lambda_0))(F-a(z))\) has L² norm at most \(C e^{-6T}\). Pairing with R after multiplication by \(1/D\) therefore proves
\[
 \sup_{|z|\le d/(N\sqrt T)} e^{6T}|h_{\Lambda,z}(T)|\le C.
\]
Using smoothing on the numerator too would unnecessarily lose powers of N. The mean-zero property of R is what removes the scalar a(z).

The scaled witness is holomorphic in this disc and odd by the sign-cochain symmetry. Cauchy's formula on the disc yields, for |γ| at most half its radius,
\[
 e^{6T}|h_{\Lambda,\gamma}(T)-\gamma h'_{\Lambda,0}(T)|
 \le C|\gamma|^3 N^3T^{3/2}.
\]
The division has not been estimated on the real axis and silently extended to the complex plane: the denominator bound above holds throughout the disc.

## Step 2: localize before applying the relative estimate

For any T at least \(\tfrac14\log(1/\gamma)\), choose a cube centered around p,q with distance to cut at least \(v(T+\log(1/\gamma))+v\), measured in co-plaquette steps, for a fixed sufficiently large v. Such a cube of coordinate side O(T+log(1/γ)+1) exists by the bounded spatial displacement of each adjacency step. Then \(N\le C_2 T^3\) in this time range. The real spatial comparison bound from the free-boundary proof gives absolute error between bulk and this box at most \(C \exp[-c v(T+\log(1/\gamma))]\), with c>0 independent of T. Take v so large that this is \(o(\gamma e^{-6T})\) uniformly here as γ decreases. The first derivative is independent of the box once both plaquettes are present and is at most \(-c_0 e^{-6T}\) for T≥1 by the exact first variation. After dividing by the scale \(\gamma e^{-6T}\), the finite-box cubic error is at most \(C\gamma^2T^{21/2}\). It tends uniformly to zero for \(T\le\gamma^{-\theta}\), \(\theta<4/21\). In this range \(\gamma N\sqrt T\le C\gamma T^{7/2}=o(1)\), so the half-disc condition is also satisfied. Below \(\tfrac14\log(1/\gamma)\) the prior log-window theorem already covers all positive times for small enough γ. This completes the proof.

## Controls and next test

For T small no growing-box complex smoothing estimate was assumed; the prior absolute Taylor estimate applies there. A volume-local comparison by itself does not give a relative estimate: a spatial buffer O(log(1/γ)) independent of T would swamp the leading \(\gamma e^{-6T}\) term for polynomially large times. Also an absolute Taylor remainder in |\gamma|T, without factoring out \(e^{-6T}\), cannot establish this interval. The \(21/2\) in the bound is \(3\times3+3/2\) from the cube volume and the complex radius, and is not a physical exponent. The next target is a spatially local bound on the boundary spectral filters which removes the extensive \(N\) in the complex expansion. Nothing here implies a spatial continuum mass gap or establishes literature priority.
