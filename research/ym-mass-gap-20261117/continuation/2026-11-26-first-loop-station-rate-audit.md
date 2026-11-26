# Wilson station audit: the missing rate is in physical log scale

**2026-11-26 UTC. Source audit and an exact first-order moment reduction.** The [smeared zero anchor](2026-11-26-smeared-trace-anchor-and-frame-reduction.md) is unchanged.

## Why choosing smaller tolerances does not establish the loop term

At the pinned revision, [Station.Admissible.short](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Next/UV_STRESS/Station.lean#L89-L114) bounds the **difference from a free-frame reading** by the tolerance times fixed test/label constants. Stations.arbitrarily says that given a tolerance ε and upper radius bound δ, there is an accepted radius 0<r≤δ. There is no lower bound on r in terms of ε and no assertion that such a comparison exists at each prescribed r with known error. [Rates.ranging](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Next/UV_STRESS/Rates.lean#L22-L40) chooses tolerance 1/(k+1) indexed by station k, not by L=log(1/r). Its inequalities even permit r_k=exp(−(k+1)²); thus L_k/(k+1) need not tend to zero. Even replacing 1/(k+1) by a much faster preassigned tolerance does not on its own link it to the physical log at the accepted radii.

An exact logical countermodel for the tolerance/radius inference is E(r)=L^(-1/2) at r<e⁻¹: for every ε,δ>0 one can choose arbitrarily small r≤δ with E(r)≤ε, but L E(r) diverges along every null sequence. Even adding a bound E=O(1/L) cannot identify the signed coefficient: L⁻¹ times any constant, or times sin(log L), obeys all tolerance assertions with different or absent normalized limits. These are counterexamples to an inference about the quantitative input, not examples of Wilson theories. The zero-order jet in [FourMeters](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Pert/Position/Four.lean#L19-L30) adds another qualitative comparison, not this physical-log remainder.

## Exact minimum moment budget for a signed packet test

Keep the chosen separated compact smooth packet w, and on a matched Scribe let Y be the transported OScale with rescaled-position kernels. Write m_i for one-point means (constant in position), P_ij for raw pair kernels projected against the corresponding marginals of w, and T for the integrated raw triple. Normalize w to integral one. Its connected packet value is exactly
`C = T − Σ_i m_i P_jk + 2 m₁m₂m₃`,
where jk complements i. The free OScale has mean zero and free triple zero; let B_jk be its integrated pair values.

If the raw first-order matching route is chosen, it is enough to establish L T→t and L m_i→a_i, while the **existing zeroth-order** pair comparison P_jk→B_jk is sufficient. Indeed m_i=O(1/L); L times the product of three means tends to zero, and L m_i(P_jk−B_jk)→0. The signed first coefficient is t−Σ_i a_i B_jk and must be multiplied by the limiting cube of the trace-frame normalization. No one-loop pair estimate is required. For a target that only needs the connected value, the more economical matching problem is to control L times the single signed combined functional T−Σ_i m_i P_jk+2m₁m₂m₃ directly; separate limits of its terms are not required. The latter is invariant under any unit drift of the frame.

The quantitative source input needed is therefore either a matched log-normalized **connected** residual for one frozen nonzero packet (or its wider-window equivalent), or signed first-order raw triple and one-point estimates in the same trace frame. A free-frame bound with no first-order comparison cannot supply the coefficient. This audit neither changes cutoffs nor claims a matched loop term, Lean replay, or mass gap.
