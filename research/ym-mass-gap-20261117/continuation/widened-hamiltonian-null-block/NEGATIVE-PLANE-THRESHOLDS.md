# Exact bivariate reference thresholds on the negative coordinate plane

2026-11-28 UTC. At target E=−13/336, fix X_i=z_i+z_i⁻¹=−2 and write S=X_j+X_k, u=X_j X_k. This is an exact reduction of that reference plane only. It does not solve the plane stationary system, prove a reference boundary bound on the plane or the rest of the torus, or establish physical spectral density.

The elementary energies are a(S)=(−11/5−S)/168 with multiplicity two, and b=3/280 once. The six-loop projected operator has monic characteristic polynomial p₉ and persistent flat eigenvalue ℓ=−1/42 with generic multiplicity three. Put Q(λ)=p₉(λ)/(λ−ℓ)^3. The exact reduced thresholds are
```
q_a(S,u)=Q((10S−43)/1680;S,u),
q_b(S,u)=Q(−83/1680;S,u).
```
In unscaled operator normalization, the non-flat residual on this plane is R=−q_a² q_b, since the dimension-14 six-loop characteristic introduces no sign when evaluated at E−a_j but removing nine linear flat factors contributes −1. The whole physically allowed domain is |S|≤4, 2|S|−4≤u≤S²/4. The map (X_j,X_k)→(S,u) has Jacobian X_j−X_k, so no claims about stationary conditions at the diagonal or angular endpoints can be made just from factor derivatives in these coordinates.

## Factored polynomials

The z_i=−1 reflection on anchored Wilson labels includes the Bloch sign from reanchoring along the reflected axis. Its two blocks have dimensions +6 and −8. The generic powers of λ−ℓ are +2 and −1 in these blocks, leaving monic reduced degrees four and seven. The exact factors below are primitive polynomials in Q[S,u]; signs and scale factors are stated separately:

```
A+ = (350S+2345)^2 u
     + 20000 S^4 − 3183500 S^3 + 3694100 S^2 + 61201675 S + 9004321

A− = (37647680000000 S − 1446612104000000)u²
     + (1223040000000 S^5 − 49782824000000 S^4 + 807761775800000 S^3
        − 6293496266435000 S² + 3737546252363875 S + 172955817305818400)u
     + 48640000000 S^7 − 7526272000000 S^6 + 200292614400000 S^5
       − 1054841096800000 S^4 − 11665526057155000 S^3
       + 87551924995808550 S² + 371061627368695010 S − 115731574367778842

B+ = 7220115 S − 297675 u + 18158053

B− = −1597202824000000 u²
     + (25412184000000 S² + 8733650714803875 S + 26144150393418400)u
     + 285728892120000 S³ − 5531297404840550 S²
       − 73632387906998970 S − 147059246104969162
```

The exact normalized block evaluations are
```
q_a = (A+ / 127455068160000) (A− / 928273965695442616320000000)
q_b = (−B+ / 42485022720000) (B− / 928273965695442616320000000).
```
Each factor is irreducible over Q in these two polynomial variables, as verified by exact factorization. The degrees in (S,u) are (4,1),(7,2) and (1,1),(3,2), respectively. The two plus factors are linear in u, with nonvanishing u coefficients on the physical S interval; this is a structural observation, not an exclusion of all plane crossings or stationary energies.

## Exact degree bound and replay checks

Each k-th elementary coefficient of the projected six-loop characteristic is a sum of k×k minors of a stencil with coordinate displacements at most one. Independent inversion symmetries turn Laurent degree ≤k in each variable into ordinary X degree ≤k, and axis exchange symmetrizes the two free coordinates. Dividing by a constant monic flat cube preserves the coefficientwise bound by triangular recursion. Substitution of affine E−a(S), or the constant E−b, yields bidegree ≤(11,11) in the two independent X variables: degree k from that coefficient and at most 11−k from the energy power. The 12×12 grid therefore determines both polynomials, and only 78 unordered algebraic-field determinant pairs are required. Seven independent checks include physical points, a point at S=3/10 where the energy equals ℓ (handled by exact monic division, not by a zero denominator), and one outside-domain check. Exact results match the previous S=3/10 critical curve thresholds and S=0 line thresholds; in the latter check product u equals −x².

The independent block replay constructs the fixed-axis Bloch reflection and proves all compressed fixed-plane stencils commute with it. The free-axis inversions and exchange commute with this reflection; their monomial reanchoring therefore preserves both parity blocks, giving the same X-polynomial degree bounds blockwise. An exact sample at (z_j,z_k)=(2,3) gives flat orders 2 and 1; generic orders cannot exceed sample orders, and the known total flat cube forces equality in both. The quotient degrees are four and seven. An independent 8×8 grid with exact algebraic determinants ties each displayed factor to the strand indicated by its reflection parity, with exact scales. No condition depending on approximate cancellation or numerical stationarity is used.

```sh
PYTHONHASHSEED=13 OPENBLAS_NUM_THREADS=1 python negative_plane_polynomials.py --output new-plane.json
python verify_plane_polynomials.py new-plane.json critical-curve-exact.json s0-exact.json
```

The 3,872-byte exact artifact `plane-polynomials.json` has SHA-256 **7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9**. Prior pinned artifacts `critical-curve-exact.json` and `s0-exact.json` have SHA-256 b3654285e0d760723f92185e3dbddc5ef1db46dbc9a6d426d95b58c8f88f811d and 13fb891262c6938a8161b071c906ad6ed7a0a20878db6216bac2d1b457371260. The full plane's stationary analysis, especially threshold intersections, angular endpoints, diagonals and rank-changing crossings, is intentionally open.
