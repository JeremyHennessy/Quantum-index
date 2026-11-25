# The pointwise boundary denominator costs a faster, doubled-rate error

**2026-11-25 | Fixed spatial lattice, continuous time | Research only**

For sufficiently small real \(\gamma\), put \(H=L+\gamma V\), \(Z_T=e^{TH}1\), \(A_T=(e^{TH}F)/Z_T\), and \(a_F=\nu(\Psi F)/\nu(\Psi)\) for the finite-box vacuum \(\Psi>0\) and Haar measure \(\nu\). Let \(\nu(R)=0\) for the fixed local spin-1 witness. For every \(0<c<6\), taking the coupling interval sufficiently small depending on c, the exact original signal has the reduction
\[
 h(T)=\nu(R A_T)=\mathcal L(T)+O_c(e^{-2cT}),\qquad
 \mathcal L(T)=
 \frac{\langle R/\Psi,e^{T(H-\lambda_0)}(F-a_F)\rangle_\nu}
      {\langle 1/\Psi,e^{T(H-\lambda_0)}1\rangle_\nu}.
\]
The error is uniform in spatial boxes and both sides have a bulk limit at each T. The original free terminal vector 1 and the reciprocal-vacuum observation remain in the reduced expression. This is not a replacement by the dressed vacuum correlation or a determination of the eventual sign.

## Time-localized boundary normalization

Fix an exponent \(c<c'<6\) and choose the weighted slab radius in the [gauge-filtered decay proof](2026-11-25-gauge-filtered-complex-time-decay.md) for rate c′. For x,y differing on one initial link the local log ratio
\[
 g_T(x,y)=\log [Z_T(y)/Z_T(x)]
\]
is a sum of bounded analytic single-factor log changes for the finitely many distinct first-slab factors, as in the [complex local ratio proof](2026-11-25-complex-local-vacuum-ratios.md). Apply it now with the heat factors weighted by t and the bridge factors by t⁴. Compare \(g_T\) and \(g_{T'}\) for \(T'\ge T\), using full initial slabs of length Δ in common and allowing the last unequal segments to differ. Taylor monomials that do not involve a changed initial factor cancel in \(g_T\); terms that never reach the first noncommon factor cancel in \(g_T-g_{T'}\). More explicitly, with independent formal factor variables the logarithm has connected supports, and the four terms of the double difference agree on any subset not meeting both changes. Bridge seeds and free endpoints can be placed on a common product reference by padding unused variables. At least \(\lfloor T/\Delta\rfloor-O(1)\) intervening slabs are traversed.

For each traversed slab a monomial's total weighted degree is at least four. If it has only one to three units there, no plaquette bridge can be present and some subset expectation in that log coefficient carries a nonempty set of at most three heat corrections in the slab. The same forest averaging annihilates it, now with invariant final function 1 instead of F. This argument works in each subset expectation, including repetitions of a factor between distinct replicas; it does not assume the log itself is an unnormalized transfer. Therefore the analytic t tail with radius \(R_t=e^{c'\Delta/4}\) gives
\[
 |g_T(x,y)-g_{T'}(x,y)|\le C_{c'}e^{-c'T}.
\]
For real parameters the ratio at \(T'\to\infty\) is \(\Psi(y)/\Psi(x)\) in each fixed box. Hence the one-coordinate oscillations of \(\log[Z_T/\Psi]\) are at most \(C_{c'}e^{-c'T}\), uniformly in the box. The same cluster estimates give exponentially local dependence in spatial graph distance for these log-ratio differences. All constants allow a fixed number of terminal slabs as collars.

## Reweight only the already small centered observable

Let \(\omega_T\) be the positive probability law proportional to \((Z_T/\Psi)d\nu\). Its single-edge kernels are within \(C_{c'}e^{-c'T}\) of Haar in total variation, since their normalized likelihood ratios come from the one-coordinate log oscillations. Define \(f_T=R(A_T-a_F)\). The gauge-filtered oscillation bound gives \(\|A_T-a_F\|_\infty\le C_{F,c'}e^{-c'T}\): the fixed-box limit \(a_F\) is within the total oscillation of \(A_T\) by the positive semigroup weighted-average property. The same bound plus spatial localization of A gives
\[
 \delta_i A_T \le \min(C e^{-c'T}, C e^{-b\operatorname{dist}(i,\mathrm{supp}\, F)})
\]
for some b>0 independent of T and volume, by a connected coefficient cutoff on the weighted t disc. There are O((1+r)^3) links in spatial balls. Use the product rule for \(\delta_i f_T\), then sum by splitting at radius proportional to T. The resulting estimate is \(\sum_i\delta_i f_T\le C(1+T)^3e^{-c'T}\), including the finitely many links of R.

Now apply single-site [comparison](https://arxiv.org/abs/1308.4117) with product Haar as the reference (its influence matrix is zero). Equivalently, integrate out one coordinate at a time with the independent Haar conditional-expectation operators \(P_i\); telescope \(f_T-P_1\cdots P_m f_T\). The \(\omega_T\)-expectation of \((I-P_i)g\) is bounded by the kernel discrepancy times \(\delta_i g\), and integrating other coordinates with their Haar probabilities cannot enlarge \(\delta_i\). Thus
\[
 |\omega_T(f_T)-\nu(f_T)|\le C(1+T)^3e^{-2c'T}=O_c(e^{-2cT}).
\]
This does not require \(Z_T/\Psi\) to be uniformly close to a constant globally, which could fail when the box grows. Algebraically \(\omega_T(f_T)=\mathcal L(T)\) since the pointwise \(Z_T\) cancels and the scalar \(e^{T\lambda_0}\) factors out. Also \(\nu(f_T)=h(T)\) because R has Haar mean zero. No norm of the extensive inverse-vacuum vector was bounded.

## Bulk and a signed first-order control

For each sufficiently large T, the single-edge log ratios for \(Z_T/\Psi\) have a uniform spatial bulk limit and their dependence on another edge j is bounded by \(\min(Ce^{-c'T},Ce^{-bd(i,j)})\). The first bound here applies twice to the individual coordinate ranges, the second follows from spatial comparison. Their influence row sum tends to zero with T by the cubic split, so the limiting kernels have a unique bulk law by the same argument as the [boundary-law note](2026-11-25-free-boundary-law-and-fidelity.md). For bounded T the needed row bound follows instead from the weak-coupling size bound and spatial ratio locality: if T is shorter than the long-slab construction, couple Brownian paths under different initial fields by common right increments on changed links, giving log ratio \(O(|\gamma|T)\) per changed link, and apply the whole-path spatial polymer cutoff for spatial locality. For the remaining bounded range the long-slab log ratios are uniformly holomorphic, vanish at zero, and are bounded O(|γ|) on a smaller disc; their spatial comparison is unchanged. Together with the vacuum ratio estimates, the minimum bound thus gives a row sum below one for all T after choosing a sufficiently small fixed real γ interval. The limiting \(\omega_T\) expectations of \(f_T\) exist: \(A_T\) and \(a_F\) converge, and \(f_T\) is uniformly approximable by bounded continuous local functions using its spatial cutoff. This is an argument about the scalar normalized expression, not separate bulk limits of its numerator and denominator.

At γ=0, \(\partial_\gamma\log(Z_T/\Psi)\) differs from \(-e^{-6T}V/6\) at most by a constant, by the exact [local ratio derivative](2026-11-25-complex-local-vacuum-ratios.md). Since \(f_T(0)=e^{-6T}RF\) and \(\nu(RFV)=\|R\|^2=3/64\), reweighting gives
\[
 \left.\partial_\gamma(h-\mathcal L)\right|_0
 =e^{-12T}/128.
\]
This exact finite-box check tests the doubled rate and the sign of the normalization correction. The remaining challenge is the signed bulk spectral edge of \(\mathcal L\), with true reciprocal observation and free terminal vector. The uniform faster error removes one source of ambiguity but does not establish that spectral weight, novelty, or any continuum Yang–Mills gap.
