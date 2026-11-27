# Wilson plaquette band: momentum selection and exact even expansion

**2026-11-27 UTC. Finite anisotropic Wilson transfer calculation.** Continue the [local plaquette Hessian](2026-11-27-wilson-transfer-plaquette-gap-hessian.md) with temporal coupling t>0 and spatial coupling v. No continuum extrapolation or priority claim.

## Neighbor coefficient and a quantitative momentum deficit

With r,s,q,F,A,B as in the prior derivation, the one-link SU(2) probability proportional to exp(tW), W=Tr(U)/2, has E W=r, E W²=(1+3s)/4 by the fundamental and adjoint characters. The two fusion eigenvalues in B have weighted mean r⁶E W²>r⁸=q² by strict variance. Both lie below q. Since F is strictly increasing and convex there, Jensen proves B(t)>0 for every t>0.

In cell-centered Fourier coordinates let cᵢ=2cos(kᵢ/2) for k in the principal cube. The unsigned edge-to-plaquette incidence matrix M(k) has rows (c₂,c₃,0), (c₁,0,c₃), (0,c₁,c₂) in orientation order (12,13,23). Each nonzero entry sums the two opposite cell-center phases. The edge-sharing adjacency symbol is M* M−4I. At zero its eigenvalues are 12,0,0, with top orientation (1,1,1)/sqrt(3). Near zero, expanding the simple top eigenvalue gives 12−(4/3)|k|²+O(|k|⁴): the linear variation in each cᵢ is 16/3 at cᵢ=2, and cᵢ−2=−kᵢ²/4+O(kᵢ⁴).

There is also a global lower bound on the deficit of the top adjacency eigenvalue. For each normal i the row sum of M* M reads cⱼ²+c_l²+cᵢ(cⱼ+c_l), where {i,j,l}={1,2,3}. Put dᵢ=2−cᵢ∈[0,2]. Its deficit from 16 is at least 2dᵢ+3(dⱼ+d_l)≥2Σd; use 4−cⱼ²≥2dⱼ and 4−cᵢcⱼ≥dᵢ+dⱼ. The largest eigenvalue is bounded by the maximal row sum. In particular

    12 − λ_top(A_edge(k)) ≥ 2 Σᵢ dᵢ ≥ (2/π²)|k|².

Thus zero momentum uniquely maximizes the Hessian for all t>0. The top normalized log coefficient has momentum loss (2B/3)v²|k|²+O(v²|k|⁴) near zero, at second order. At zero the other orientations are separated by 12B in the Hessian; between momenta the separation can be of order B/L².

## Exact exclusion of every odd order on an even torus

On a spatial torus with all sides even, assign the oriented edge in direction i from x the center sign zᵢ(x)=(−1)^{Σ_{j<i} xⱼ}. This assignment is periodic and its product around every elementary plaquette is −1. Let Z act on link functions by this change of variables. It commutes with K, and Z V Z=−V, hence Z T(v) Z=T(−v). Translation of z by one step in direction l changes it by the direction-constant signs (−1)^{1_{l<i}}. These signs are a gauge coboundary on the even torus, using vertex sign (−1)^{Σ_{i>l} xᵢ}. Therefore Z commutes with translations on physical states. On the unperturbed q-space, Z=−I; on the vacuum at v=0, Z=+I.

To compare operators rather than just sets of eigenvalues, let P(v) be the isolated q-cluster spectral projector, and identify the perturbed cluster with P=P(0) by J(v)=P(v)P [P P(v)P]^(−1/2) on Ran P. At small real v this is an analytic isometry onto Ran P(v) and preserves translation sectors. Covariance of the spectral projector gives J(−v)=−ZJ(v); thus J(v)*T(v)J(v) is an exactly even analytic matrix. The top vacuum eigenvalue is even by the same symmetry and isolation. Near q>0 the logarithm and division by the vacuum eigenvalue preserve evenness. Consequently the normalized log cluster matrix in each momentum sector is log(q) I + (v²/2)D(k) + O(v⁴). All odd coefficients vanish before diagonalizing, not merely in the ground energy. At fixed finite even torus this makes the simple zero-momentum symmetric orientation the actual top branch for sufficiently small nonzero |v|. It supplies no torus-uniform radius.

The preceding momentum deficit identifies a concrete next estimate: a volume-uniform comparison of the fourth-and-higher remainder between k and 0 of order v⁴|k|², or a direct bound on the band independent of any isolated-momentum hypothesis. A per-sector O(v⁴) without the |k|² difference factor cannot by itself preserve momentum ordering as the spacing of momenta tends to zero. No such remainder bound is proved here.

## Checks and sign reversal

Independently verified 20,736 plaquette twist and translation-coboundary checks across side lengths 6, 8 and 10. Exact rational interval bounds from the [positive Bessel series](https://dlmf.nist.gov/10.25.E2) give A+24B<0 at t=1.30638 and >0 at t=1.30639 (about −2.9260860×10⁻⁸ and +2.9657080×10⁻⁶). For Iₙ keep terms 0 through 16 and bound the tail by term 17 divided by 1−(t/2)²/[18(n+18)], then propagate rational intervals in the ratios r and s. Thus at least one sign reversal occurs between these values, not a certified unique zero. The result remains an anisotropic finite-regulator statement, without a volume-uniform fourth-order estimate, Lean replay, or continuum gap.
