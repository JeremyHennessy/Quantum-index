# Explicit visibility interval for the direct probe

2026-11-27 · Finite open 4-by-2 Hamiltonian only. Exact input: [the complementary block and direct probe](COMPLEMENT.md) at commit `50649f18b1b312faf9e0dd4eda35af2a615f5d97`.

**For every real `0 < |g| ≤ 10⁻¹²`, the direct gauge-invariant multiplier q detects the indicated simple eigenvalue in the (X,Y)=(−,+) sector, with normalized ground-to-mode amplitude of magnitude greater than 2.** The proof is quantitative but deliberately conservative. It applies to q, not the original F, and does not separate this energy from other exact reflection sectors or address a spatial/continuum limit.

## Setup and certified constants

Write H=H₀−gV; the eight face half traces imply ||V||≤8. Work in the exact (−,+) sector for the mode, and in the full physical space for the vacuum. Within the sector let P be the free E=15 band, Q its complement, T=PVP, N the kernel projection of T, and M=P−N. All free electric levels are half integers, so the complement is at least 1/2 away from 15. T restricted to M has spectrum outside [−1/100,1/100], by exact Sturm count on the known nonzero first-order polynomial. The operator K₀ on P is

    K₀ = PVQ (15−QH₀Q)⁻¹ QVP.

Its compression to N has the simple eigenpair κ=−73/336, φ=q/√6. The other seven eigenvalues are at distance strictly greater than δ=23/8400 from κ, by Sturm count. Here q is the six-term sum of unnormalized fundamental circuit traces in the complementary report, so ||q||₂²=6 and ||q||∞≤12.

## Two Schur reductions and strict uniqueness

Put e=15+g²s, |s|≤1. The inverse R_Q=(e−QHQ)⁻¹ exists on Q with norm at most 4 because the free gap is at least 1/2 and the perturbation plus shift is at most 8|g|+g². For K=PVQ R_Q QVP, the resolvent identity gives

    ||K||≤256,   ||K−K₀||≤512(8|g|+g²).

Eliminating Q gives the P equation (−gT+g²(K−sI))p=0. On M the operator

    A_M = T_M−g(K_MM−sI)

is invertible with ||A_M⁻¹||≤200 by the slope gap. In the P equation m=g A_M⁻¹ K_MN n. Its remaining null-space equation is (K_eff−sI)n=0 with

    K_eff = K_NN + g K_NM A_M⁻¹ K_MN,
    ||K_eff−(K₀)_NN|| ≤ 512(8|g|+g²)+200·256²|g| < ε=1/75000.

Take r=δ/4. At s=κ−r and s=κ+r, the ordered eigenvalue of K_eff−sI corresponding to κ has opposite signs (ε<r, by Weyl's inequality). All other eigenvalues retain signs throughout the window because they are initially separated by at least δ and ε+r<δ.

For uniqueness, R=1−N in this sector has H_RR−e invertible throughout the window: eliminate Q, then use the invertible M block −g A_M. The final Schur form of H−e on N equals g²(K_eff−sI) by the two eliminations. Its derivative with respect to e is

    −I_N − H_NR (H_RR−e)⁻² H_RN ≤ −I_N.

Here the off-diagonal maps from N are bounded since N lies in the finite free band; all resolvents act on their indicated compressed spaces. Since de/ds=g², the derivative of K_eff−sI with respect to s is at most −I_N. Thus the one ordered eigenvalue is strictly decreasing and crosses zero exactly once. The other signs stay fixed, so the crossing kernel is one-dimensional. Schur reconstruction proves there is exactly one eigenvalue in the window, simple within the sector. Near zero it is the analytic κ-branch; in fact |s−κ|<ε at the crossing, and the displayed bound on ||K_eff−(K₀)_NN|| tends to zero with g.

## Quantitative amplitude

For a normalized mode eigenvector ψ, its N component cannot vanish. Set n=Nψ/||Nψ|| and choose its phase so ⟨φ,n⟩≥0. Projecting (K_eff−s)n=0 onto the orthogonal complement of φ in N yields

    ||(I−|φ⟩⟨φ|)n|| < ε/(δ−r) < .007.

For normalized vectors with phases so their overlap is nonnegative, their distance is at most twice the norm of the component orthogonal to the reference vector. Hence ||n−φ||≤2ε/(δ−r). Schur reconstruction gives ||Mψ||≤51200|g| and ||Qψ||≤32|g|; thus ||ψ−n||≤2(51200+32)|g|.

The full H₀ vacuum is the constant 1; its free gap is at least 1/2. Min–max for the bounded perturbation places the normalized unique ground energy within 8|g| of zero, with the rest at least 1/2−8|g|. The inverse of its compressed complement equation has norm at most 4, yielding ground tail ≤32|g| and, with the same phase convention, distance from 1 at most 64|g|. For the multiplication operator by q, writing ψ₀ for the normalized interacting ground therefore gives

    |⟨ψ,qψ₀⟩| ≥ √6 − 12 (||ψ−φ||+||ψ₀−1||) > 12/5 − 2/5 = 2.

All bounds hold for both signs of g. The verified window is a sufficient interval, not a best or practical estimate. The original probe's quadratic response on this branch and finite-coupling visibility of the other branches remain open here.

## Reproduce

Run `python3 second_order.py` with Python 3.12 and SymPy 1.14. This runs the unchanged pointwise kernels and prior band certificates, checks exact root counts for both needed spectral gaps, and verifies the scalar inequalities with rational arithmetic. The operator reductions and amplitude argument are as above; the script does not simulate H(g) or estimate a signal numerically.
