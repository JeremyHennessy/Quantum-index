# Exact full-spin-tail bound and two-plaquette infinite-representation gap certificate

**Research date:** 2026-11-17. **Status:** independently derived restricted-model mathematical argument, checked with symbolic Haar moment algebra and independent exact fourth-moment cubature. Local numerical regression tests passed. **Not Lean-formalized, not peer-reviewed, literature novelty unestablished, and NOT a four-dimensional continuum Yang–Mills theorem.**

## The exact declared model and previous evidence

Use the connected, open, no-external-charge six-vertex/seven-link SU(2) graph from `CONNECTED_TWO_PLAQUETTE_AUDIT.md`. Its physical Hilbert space has an orthonormal spin-network basis indexed by **admissible** `(jL,jR,jS)`. Define the self-adjoint Hamiltonian

`H = alpha [3 C(jL) + 3 C(jR) + C(jS)] - beta (W_L+W_R)`, with `C(j)=j(j+1)`, `alpha>0,beta>0`, and `W_L, W_R` multiplication by the **fundamental** Wilson-loop characters on the two oriented square faces. These coefficients are exact for this declared mathematical model; translating to one published KS convention uses `alpha=g²/2`, `beta=2/(a²g²)`. They are not a renormalized continuum trajectory. The positive electric diagonal grows without bound as any spin grows; finite spin-network multiplicities and bounded Wilson multipliers imply a self-adjoint operator on the electric operator domain with compact resolvent. Standard bounded-perturbation and min–max principles apply, without assuming a gap.

Let `P` be the complete, four-dimensional physical subspace with **every link** spin `j<=1/2`, ordered as `vac,L,R,O`, and `Q=I-P` its full infinite-dimensional complement. This is an exact spectral projection for the electric diagonal (not for the full H). Thus `Q H_E P=0`.

The four orthonormal gauge-invariant functions, after tree gauge fixing, are `1`, `χ(G)`, `χ(H)`, and `χ(GH)` for two independent SU(2) loop holonomies G,H. Their orthogonality follows from Haar, and the shared-link representation is encoded in the product decomposition. Set `W=χ(G)+χ(H)`; each fundamental character lies in `[-2,2]`, so `||W|| <= 4`.

## Full omitted-sector coupling — exact, not a truncated matrix estimate

Because `W` is a bounded Hermitian multiplication operator and P is orthogonal,

`K := (Q W P)^* (Q W P) = P W² P - (P W P)²`.

This identity accounts for **all** excluded link-spin representations, including those not explicitly enumerated. The exact matrices in the ordered four-state basis are

`PWP = [[0,1,1,0],[1,0,0,1/2],[1,0,0,1/2],[0,1/2,1/2,0]]`,

`PW²P = [[2,0,0,1],[0,3,2,0],[0,2,3,0],[1,0,0,2]]`,

`K = [[0,0,0,0],[0,7/4,3/4,0],[0,3/4,7/4,0],[0,0,0,3/2]]`.

The spectrum of K is **exactly** `{0,1,3/2,5/2}`. Hence

`||Q W P|| = sqrt(5/2)` and `||Q H P|| = beta sqrt(5/2)`.

Independent verification used **symbolic spherical Haar-moment algebra** on two SU(2)=S³ variables and an unrelated **24-point exact fourth-moment cubature** in JavaScript. The 24 equally weighted points are the 8 signed standard basis quaternions and 16 quaternion cube corners `(±1/2,±1/2,±1/2,±1/2)`. Exact Haar moments: `E[q_i²]=1/4`, `E[q_i⁴]=1/8`, `E[q_i² q_j²]=1/24` for i≠j; all odd monomials integrate to zero. The cubature satisfies these identities, so it exactly integrates every polynomial through total degree four (and by symmetry odd degree five) for each independent quaternion. It is **not** valid for arbitrary higher degree. Explicit **negative control**: the earlier eight-axis cubature gives `E[q_0⁴]=1/4` instead of the correct `1/8`; it must not be reused for fourth-moment leakage. Six local tests passed for this new calculation.

## Bound the entire high-spin electric sector

Every admissible state outside P has at least one link representation `j>1/2`. The least possible electric cost belongs to `(jL,jR,jS)=(1/2,1/2,1)`, the shared-triplet state, and equals `13 alpha / 2`. If either outer jL or jR is at least 1, the three outer links alone cost at least `6 alpha`, and the singlet constraint forces another nonzero spin of at least `1/2`, bringing the total above `13 alpha / 2`. Therefore

`Q H_E Q >= (13 alpha/2) Q` as a quadratic-form inequality.

As `||W||<=4`, the **full** infinite-dimensional tail obeys

`Q H Q >= (13 alpha/2 - 4 beta) Q`.

No finite spin truncation has been used in this step. This estimate is conservative and may be negative at some couplings; a negative lower bound does NOT prove any physical gap is absent.

## A rigorous gap certificate for fixed alpha=1,beta=1/2

Choose the normalized electric-vacuum basis state `|vac>` as the codimension-one **trial exclusion**, not as an assumed exact ground eigenvector. Its expectation is zero, giving `E0 <= 0` variationally. The orthogonal complement is `P_exc ⊕ Q`, with `P_exc=span{L,R,O}`. The exact low three-by-three compression has diagonal `(3 alpha,3 alpha,9 alpha/2)` and magnetic entries `-beta/2` between each of L,R and O. Its minimum eigenvalue is

`a(alpha,beta) = [ (15 alpha/2) - sqrt((3 alpha/2)²+2 beta²) ] / 2`.

The tail floor is `d(alpha,beta)=13 alpha/2 -4 beta`, and the cross-block operator norm is at most `c(beta)=beta sqrt(5/2)` (in fact that norm equals c for the full low sector; it suffices as an upper bound on P_exc). For every normalized state perpendicular to `vac`, Cauchy–Schwarz gives a comparison by the two-by-two real symmetric matrix `M=[[a,-c],[-c,d]]`. The Courant–Fischer/min–max principle therefore yields

`E1 >= lambda_min(M) = (a+d - sqrt((a-d)²+4c²))/2`, while `E0<=0`, hence

`E1-E0 >= lambda_min(M)` whenever this expression is positive.

At exactly `(alpha,beta)=(1,1/2)`, constants are

`a=(15-sqrt(11))/4`, `d=9/2`, `c=(1/2)sqrt(5/2)`.

**Exact rational threshold:** `M - (5/2)I` is positive definite, because its upper-left principal minor is `(5-sqrt(11))/4 > 0` and determinant is `(15-4sqrt(11))/8 >0`, the latter following from `sqrt(11)<15/4` (since `11<225/16`). Therefore

**`E1-E0 > 5/2` for the complete, untruncated, connected two-plaquette Hilbert space at exactly alpha=1,beta=1/2.**

The tighter comparison value is approximately **2.5930886590**. This result is for the declared finite spatial graph with all SU(2) link spins, not a spin-truncated toy, but **it does not include any thermodynamic, continuum, infinite-volume or four-dimensional limit**. It is a standard min–max/Schur-type *method*, and no claim of literature originality is made. Numerical values are illustrative; the strict `5/2` threshold is supported by the written exact inequality.

## Falsification and scope

The same comparison becomes nonpositive at weaker electric coupling (for example `alpha=0.1,beta=1`), even though a finite projected matrix may have a positive eigenvalue gap. This is a **failure of the certificate**, not evidence that the exact gap disappears.

A bound fixed at `alpha=1,beta=1/2` does not imply any positive lower bound when `alpha,beta` change as physical lattice spacing tends to zero. No estimate uniform in lattice volume or continuum cutoff was derived. There is no transfer theorem to the reconstructed four-dimensional Hilbert space, and no all-compact-simple-group result.

## Reproduction and next research gate

Run:

`node --test research/ym-mass-gap-20261117/two-plaquette.test.mjs research/ym-mass-gap-20261117/tail-leakage.test.mjs research/ym-mass-gap-20261117/spectral-bound.test.mjs`

Independent calculation: SymPy exact monomial Haar moments for K, SymPy Wigner 6j (restricted j values), and NumPy finite-compression spectra. The Node code numerically evaluates the exact formulas; Node floating-point assertions are NOT themselves a formal proof. Six exact coupling moment-control tests and six spectral-bound tests passed locally; earlier twelve connected-graph tests also passed. No Lean 4 formalization, peer review, or paper originality review is claimed.

**Best next experiment:** reproduce the **complete** physically admissible `jmax=1` gauge-singlet basis and Wilson matrices by a second independent full-link method. Derive how `||Q_(jmax) H P_(jmax)||` behaves as cutoff increases under a specified physical scaling trajectory and a larger connected graph. A uniform four-dimensional mass gap remains open.
