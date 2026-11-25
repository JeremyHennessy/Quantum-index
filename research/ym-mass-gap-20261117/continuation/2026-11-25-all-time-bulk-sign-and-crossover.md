# All-time negative sign and the true bulk crossover

**2026-11-25 | Continuous time at fixed spatial SU(2) lattice spacing | Research only**

For the original free-terminal conditional mean paired with the Haar spin-1 probe, the early and late sign results now meet. For a single sufficiently small \(\gamma_0>0\), the actual infinite-volume witness satisfies
\[
 h_{\infty,\gamma}(T)<0\qquad(0<\gamma<\gamma_0,\ T>0).
\]
In fact there are uniform two-sided positive constants such that
\[
 -h_{\infty,\gamma}(T)\asymp
 \gamma e^{-m_\gamma T}(1+\gamma^2 T)^{-3/2}\min(T^2,1).
\]
The difference from the earlier [fixed-box theorem](2026-11-25-all-time-adjoint-sign.md) is genuine: a finite Perron plateau does not survive spatial volume, and is replaced by the diffusive factor. No general statement about other probes or boundaries, external novelty claim, or continuum mass gap is made.

## Recover the exact infinite-band pairing with a uniform remainder

The estimates in the [eventual-sign proof](2026-11-25-free-boundary-eventual-negative-sign.md) up to its final Fourier asymptotic are uniform on one fixed small real interval in γ. Specifically choose a fixed high-energy margin \(\delta\in(0,1/4)\), a common coupling cutoff in the slab comparison and real band confinement, and an exponential comparison-box rate \(\eta\) from the same uniform logarithmic smoothing constant. The [dyadic profile bounds](2026-11-25-summable-true-boundary-profiles.md) and the two-support Gram-filter bounds have constants independent of γ on that interval. In the finite-range polynomial comparison use the uniform bound \(\|B_L\|,\|B_\infty\|\le0.06\), choose its inverse-power order after \(\eta\), and absorb its error into \(O(e^{-(6+\delta)T})\) after reducing δ if necessary. None of these estimates needs the internal band splitting at γ fixed, which tends to zero with γ. Thus there are common constants C,δ,T₀ such that
\[
 h_{\infty,\gamma}(T)=
 e^{-6T}\langle \ell_\gamma,e^{-TB_\gamma}r_\gamma\rangle+
 E_\gamma(T),\qquad |E_\gamma(T)|\le C e^{-(6+\delta)T}\quad(T\ge T_0).
\]
Here \(B_\gamma\) is the centered energy in the actual bulk Gram frame and \(\ell_\gamma,r_\gamma\) are its true left and right boundary profiles. In the weighted \(\ell^1\) norm with a squared spatial weight these are
\[
 \ell_\gamma=-\frac{\gamma}{448}(d_p+d_q)+O(\gamma^{3/2}),\qquad
 r_\gamma=d_p/2+O(\gamma^{1/2}).
\]
Multiplication by \(G^{-1/2}\) used to obtain these profiles is bounded in that weighted kernel norm by its binomial series near I/4 (choose the weak interval so the fixed weighted-norm perturbation is small). No dressed source is substituted here.

## Uniform comparison of the crossover, including arbitrarily large scaled time

Let \(s=\gamma^2T\) and define the nonnegative three-by-three Fourier energy
\[
 M_\gamma(k)=\gamma^{-2}[6+B_\gamma(k)-m_\gamma I].
\]
The \(C^2\) expansion of the exact real band shows that it converges at rate \(O(\sqrt\gamma)\) to \(M_0(k)=[12I-A(k)]/168\), with \(A(k)\) the [bulk plaquette adjacency symbol](2026-11-25-bulk-adjoint-crossover.md). Near zero the lowest branches \(q_\gamma,q_0\) are simple, uniformly separated from the other two branches, and satisfy
\[
 a|k|^2\le q_\gamma(k),q_0(k)\le b|k|^2,\qquad
 |q_\gamma(k)-q_0(k)|\le C\sqrt\gamma\,|k|^2 .
\]
For the last estimate, both energies and their gradients vanish at zero after centering, and their Hessians differ by \(O(\sqrt\gamma)\) on the common small ball. Their lowest projectors differ uniformly by \(O(\sqrt\gamma)\). Outside the ball all eigenvalues of both matrices are bounded below by one common positive constant. These statements use the simple-band/Rayleigh curvature estimates of the [dressed operator proof](2026-11-25-dressed-bulk-spectral-edge.md), but preserve the different free-boundary profiles.

Compare the two signed Fourier integrals, scaling the left profile by \(1/\gamma\). The product amplitudes differ uniformly by \(O(\sqrt\gamma)\). In the lowest branch inside the ball, the exponential difference is bounded by \(C\sqrt\gamma\,s|k|^2e^{-as|k|^2}\). Its integral, and the error in amplitude there, are bounded by \(C\sqrt\gamma(1+s)^{-3/2}\) for *all* \(s\ge0\). For the other branches in the ball, one can replace the lowest eigenvalue of either matrix by 1 and multiply the resulting semigroup by the complementary projection. The modified matrices differ in norm by \(O(\sqrt\gamma)\) and have a common positive lower bound, so Duhamel gives a difference bounded by \(C\sqrt\gamma(1+s)e^{-cs}\). The full matrices outside the ball give the same bound without modification. Profile differences on those sets also decay exponentially. Thus, writing
\[
 k(s)=(d_p+d_q)^*e^{s(B_{\rm adj}-12I)/168}d_p
\]
with \(B_{\rm adj}\) the infinite adjacency operator on the plaquette graph, the resulting uniform estimate is
\[
 \left|\gamma^{-1} e^{m_\gamma T}h_{\infty,\gamma}(T)+\frac{k(\gamma^2T)}{896}\right|
 \le C\sqrt\gamma(1+\gamma^2T)^{-3/2}
      +C\gamma^{-1}e^{-(6+\delta-m_\gamma)T}\quad(T\ge T_0).
\]
This is the actual crossover, not a resummation of only the highest Taylor monomials. It also gives the crossover limit for \(T=s/\gamma^2\) at any \(s>0\), uniformly on compact positive s intervals, and controls the sign on unbounded s intervals.

## Match to the early-time calculation

The semigroup defining k is a symmetric walk with nonnegative kernel (its generator has nonnegative off-diagonal entries and vanishing row sums). Its no-jump event gives a strict positive lower bound on compact s intervals. The [exact walk heat-kernel calculation](2026-11-25-bulk-adjoint-crossover.md) gives \(k(s)\sim(2/3)(4\pi s/126)^{-3/2}\), so \(k(s)\asymp(1+s)^{-3/2}\) over the full half-line. This use of a spectral Fourier estimate for a periodic walk has primary precedent in [Ishiwata, Kawabi and Kotani](https://arxiv.org/abs/1510.05102).

Shrink the coupling cutoff so \(6+\delta-m_\gamma\ge\delta/2\) and the relative \(O(\sqrt\gamma)\) term is smaller than half the walk's positive lower bound. Since \((1+\gamma^2T)^{3/2}\le C_\delta e^{\delta T/4}\) for γ≤1, the high-band error is negligible on the same scale whenever \(T\ge K\log(1/\gamma)\), with a fixed \(K>4/\delta\). This proves negativity and the two-sided estimate there.

For \(0<T\le K\log(1/\gamma)\) the exact first variation is negative with magnitude comparable to \(\gamma e^{-6T}\min(T^2,1)\). The [odd cubic bound](2026-11-25-infinite-volume-logarithmic-sign-window.md) is relatively small through \(T=\tfrac14\log(1/\gamma)\), including \(T\downarrow0\). For the remaining interval use the [relative polynomial estimate](2026-11-25-refined-polynomial-sign-window.md): its relative error \(C\gamma^2T^{10}(1+\log T)\) plus spatial comparison error tends to zero uniformly there. Over this entire short range \(m_\gamma-6=O(\gamma^2)\) makes \(e^{-m_\gamma T}/e^{-6T}\to1\) uniformly, and \(\gamma^2T\to0\). Thus the two-sided estimates overlap and give the claimed all-time bound.

## Falsification checks and limits

Simply comparing two uncentered exponential fits would accumulate an error proportional to s at large s; the term-by-term |k|² bound instead uses exact energy minimization and agrees in normalization at momentum zero. The reference walk is positive, not the signed cross spectral measure at every momentum. The proof did not assume positivity of the latter, and independent tilted-boundary responses can in fact change sign. Dropping the reciprocal response would change the sign of the leading amplitude, as the dressed analysis shows. Effective transfer matrices at strong electric coupling have substantial prior work, e.g. [Münster](https://www-library.desy.de/preparch/desy/postpr/1985/desy85-007.pdf); this calculation concerns a particular exactly normalized mixed-boundary observable. It has not been externally refereed and literature priority is unverified. The entire argument is at fixed spatial lattice spacing and cannot be used to infer the Clay continuum mass gap.
