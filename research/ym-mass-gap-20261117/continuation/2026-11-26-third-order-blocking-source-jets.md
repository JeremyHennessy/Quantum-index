# Third-order source transport and a false interaction from mean-only blocking

**2026-11-26 UTC. Exact finite blocking algebra and independently checked Gaussian control.** This tests the method proposed after the [station rate audit](2026-11-26-first-loop-station-rate-audit.md). No actual Wilson coefficient is computed.

## Exact bookkeeping under a normalized Markov blocking kernel

Fix the three finite packet insertions X_i. With the source-free fine/coarse joint law unchanged, carry the conditional source polynomial
`Z_s(t)=E[exp(Σ_i t_i X_i) | Y_s]`, where Y_s is the retained field after s steps. This notation can be interpreted in the squarefree ring t_i²=0, so only the mixed moments through degree three are needed, not exponential integrability. At finite Wilson cutoff the insertions are bounded anyway. Starting with the fine field, the conditional expectation under each backward transition gives the next Z by the Markov property; the law need not have nested sigma-fields. Let A_i, B_ij, C_123 be the coefficients of t_i, t_i t_j, t₁t₂t₃ in log Z (conditional means, pair covariances and third cumulant). With E', Cov' and κ' calculated conditionally on the next retained field, exact propagation is
```
A_i'   = E'A_i
B_ij'  = E'B_ij + Cov'(A_i,A_j)
C_123' = E'C_123 + Σ_cyclic Cov'(A_i,B_jk) + κ'(A₁,A₂,A₃).
```
For example, the mixed raw third coefficient of Z is C_123+Σ_i A_i B_jk+A₁A₂A₃. Apply E' to the raw coefficients and re-center at the new means; the products of means recombine into the displayed κ'. This is the third-order instance of [Brillinger's law of total cumulance](https://www.ism.ac.jp/editsec/aism/pdf/021_1_0215.pdf). At the final block, averaging Z before taking log recovers the original mixed third cumulant. No precision is lost by retaining only these seven coefficients; replacing the conditional law by its three means does lose precision.

Equivalently, (m_{s,i}=E[X_i|Y_s]) obeys the one-step conditional expectation recursion. The difference between κ₃(m_s) and κ₃(m_{s+1}) is the sum of the three mixed covariances and the expected conditional third cumulant of m_s for the transition. This telescopes over any finite window, with the end-point cumulant still present. The algebra holds on the same ordered fine/coarse joint law; changing packet definitions or reset-normalizing them midchain does not give the same telescope. Uniform estimates along the ordered Wilson limits, or a signed sum at the physical order 1/log(1/r), do not follow from the algebra.

## Exact free-null regression at the interaction scale

Take three two-component sites, 0<a≤1, and M_i=(√a Z,0) for one standard normal Z. Independent of M, let E be centered Gaussian with diagonal site blocks 5I and off-diagonal blocks B=[[-a,1],[1,0]]. Strict row diagonal dominance (5>2(a+1)) makes this a valid positive definite covariance. Define X_i=|M_i+E_i|²−E|M_i+E_i|². The full off-diagonal block [[0,1],[1,0]] is odd under conjugation by H=diag(1,−1), so the full three-edge Wick trace vanishes exactly.

The means given M are a(Z²−1). By Gaussian moments their third cumulant is 8a³. The conditional pair covariance is 2tr(B²)+4M_jᵀ B M_k=2tr(B²)−4a²Z²; each mixed covariance is −8a³. The conditional third cumulant is 8tr(B³)+24a(a²+1)Z², from one Gaussian cycle plus one quadratic and two linear factors. Since tr(B³)=−a³−3a, its expectation is 16a³. Thus the three contributions are +8a³, −24a³, +16a³. The 100 cases a=p/100, p=1,…,100, were recomputed using integer arithmetic after clearing denominators; exact cancellation and strict covariance dominance hold in all cases and by the formulas for the entire interval. Taking a=L^(-1/3), L=log(1/r), gives a strictly false mean-only loop signal +8/L.

More generally, independent Gaussian retained and eliminated fields split the full Wick trace into terms with zero, one, two or three eliminated covariance edges. The zero-edge term is the mean projection, the one-edge terms give the mixed covariances, and the two- and three-edge terms give the expected conditional third cumulant. If both retained and eliminated separated covariance blocks are individually Hodge-odd (each intertwines the stars with a minus sign), every three-edge trace vanishes by conjugating the loop at its basepoint. Hodge oddness of the **sum** does not justify dropping terms separately. This is a sufficient diagnostic for free calibrations, not a property proved for the project's real block filters.

**Next actual estimate:** for the frozen separated packet and a real Wilson block window, track all three orders or prove a quantitative cancellation of the discarded signed total against a matched free reference. The Gaussian regression is a necessary sanity check for a proposed mean-only shortcut, not evidence of a nonzero Wilson interaction, pointwise ultraviolet limit, or mass gap. No new Lean replay.
