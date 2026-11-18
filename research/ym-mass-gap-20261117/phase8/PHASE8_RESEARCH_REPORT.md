# Quantum Index — Yang–Mills Research Phase 8
## Exact sixth-order connected response on the full finite SU(2) four-plaquette ladder

**Research date:** 2026-11-18 UTC. **Scope and classification:** exact restricted finite-order untruncated-ladder coefficient, with independently derived SU(2) magnetic integrals and independent rational perturbative recursions; local verification completed. Final GitHub exact-head CI status is a separate acceptance gate recorded in the Phase 8 draft PR. **No** Lean proof, outside peer review, demonstrated research novelty, physical infinite-volume theorem, 4D quantum-field construction, or continuum mass-gap proof.

**Immutable scientific parent:** Phase 7 branch `research/ym-phase7-exact-fourth-order-locality-20261118` at `2d211370c1e0132a5cd4a9d102768da4e69d06f9`, draft PR #151. **Approved main:** `a60397f017c5c0bfc2bf88be046320a00c9d28de`. Phase 7 CI proof controls run 44209417397 and catalog run 44209624435 concluded success at the parent SHA. Phases 1–7 and the charter are unmodified. The Phase 8 branch is research-only and targets the Phase 7 research branch, not production main.

### Executive scientific result

For the complete, untruncated (in the Hilbert-space definition) SU(2) no-charge four-square finite open ladder, with alpha=s=1 in the original stated electric and Wilson-trace normalization,

```text
C6(1,1)=[beta^6](G4-G3)
       =[b2^2 b3^2 b4^2] G4(s=1;b1=0,b2,b3,b4)
       =1504856360495713/3397652693362287360000
       =+4.4291059043074834... x 10^-7.
```

The sign is **positive and nonzero**. The Phase 7 low-spin-projected coefficient `-41497429/42323383872` is negative and **must not** replace the full physical coefficient. We obtain this result with exact fractions, rigorously bounded reachable original-link representations, and two independent SU(2) integral/series routes. The result states the first **allowed** remote connected order actually survives in the finite model; it is not a nonperturbative correlation-length, spectral-gap, or continuum theorem.

## 1. Complete physical setting, spectrum, observable, domains

The connected open ladder has two rows, N=4 plaquettes, 2(N+1)=10 vertices, E=3N+1=13 oriented original links (four top, four bottom, five vertical). For general N≥2, let

`K_N=L²(SU(2)^{E_N}, product normalized Haar)`, and
`H_phys,N={psi in K_N: psi(h_source U_e h_target^-1)=psi(U_e) for all vertex assignments h_v in SU(2)}`.

No representation cutoff is imposed in the physical definition: each original link j_e ranges over all nonnegative half-integers; gauge-invariant Peter–Weyl spin networks furnish a complete physical electric basis. The electric operator `H_E=sum_e C_e` with `C_e=j_e(j_e+1)` is nonnegative self-adjoint (closure of the sum of link Casimirs on its natural Sobolev domain), has compact resolvent on this finite compact graph, and restricts to H_phys. Its zero eigenspace is the unique normalized constant vacuum `|0>`. Gauss law forces the least nonzero physical electric energy to be 3, from a fundamental four-edge loop. With alpha>0 set

`H_N(b)=alpha H_E - sum_(i=1)^N b_i W_i`,
`W_i(U)=Tr_(fundamental)(ordered oriented product around face i)`.

Each W_i is a bounded self-adjoint gauge-invariant real multiplication operator of norm ≤2, so H_N(b) is self-adjoint on the electric domain for real b. The isolated ground `E0,N(b), Omega_N(b)` originating at `E0=0, Omega=|0>` admits a unique real-analytic normalized ground branch in a nonempty neighbourhood of 0. For example, the conservative sufficient condition `2 sum_i |b_i| < 3 alpha/2` separates the vacuum from excited spectral levels via a bounded-perturbation estimate. This radius need not be uniform in N. The shifted operator `H_N(b)-E0,N(b)+s` is bounded below by s>0 for real small b and has a bounded inverse.

For O=W1, `mu_N=<Omega_N,W1 Omega_N>`, the actual centered vector is `v_N=(W1-mu_N) Omega_N`, and the PHYSICAL response is

`G_N(s,b)=<v_N,[H_N(b)-E0,N(b)+s]^-1 v_N>`.

The operator ordering is exactly as written: both W1 insertions sit outside the shifted resolvent, while the interacting energy, normalized vacuum and mean appear at their proper locations. This is *not* Phase 5's high-spin-complementary Q-resolvent. At zero coupling, G_N=1/(s+3alpha). At alpha=s=1 this equals 1/4.

## 2. Independent proof audit of reduction, gates A–F

**A. Original-link independent center parity.** For each face i the top horizontal link T_(i-1)→T_i belongs only to that face. Multiplication of this link by central `-I∈SU(2)` is an exact product-Haar-preserving unitary U_i, commutes with vertex gauge transformations and H_E, maps W_i→-W_i, and leaves every other W_k unchanged. U_i may map O=W1 to -O when i=1; the two appearances in the centered bilinear cancel the sign. Consequently `G_N(s;b_1,...,b_N)` is even **in each independent b_i** in the admitted real-analytic neighbourhood. The underlying original 13-link Wilson traces are also directly tested against independent top-edge flips.

**B. Vacuum-generated active-component factorization.** When any intermediate face coupling is zero, split the remaining active face graph into components with disjoint edge and vertex supports. The closed electric-vacuum cyclic subspace generated by products of active W's and electric resolvents has trivial spin on every unused link. H_E preserves this sector and active W's cannot create flux on unused links; it is a reducing sector for the considered Hamiltonian. Product Haar and disjoint Gauss constraints yield a tensor product of active-component sectors, with additive Hamiltonian and energy. The isolated near-vacuum ground factorizes across these components. If O=W1 is supported only in the first component, its centered vector is `v_first ⊗ Omega_elsewhere`; after the ground-energy shift the spectator ground has zero excitation energy and the response is exactly independent of all spectator couplings. This does **not** assert factorization of the entire physical Hilbert space.

**C. Appended inactive face.** On setting b4=0, the fourth face's unused new links stay in trivial spin in the vacuum-generated sector. Its added boundary vertices with trivial incident extra links reproduce the third face's old singlet constraints. The prior three-face system isometrically embeds by independence of the new links, with identical electric and magnetic response on its active sector. Thus `G4(s;b1,b2,b3,0)=G3(s;b1,b2,b3)` within the neighbourhood.

**D. Analyticity.** Finite graph, compact-resolvent electric H_E, simple zero vacuum eigenvalue with isolation 3alpha, bounded analytic magnetic perturbation, and s>0 yield real analyticity of the ground eigenbranch, its normalization, its expectation and the resolvent. This licenses mixed Taylor extraction, not any uniform infinite-volume analytic continuation.

**E. External O insertions.** Both occurrences of `O=W1` are present, without an extra b1 magnetic insertion. Thus the first possible connected remote multidegree need not contain b1. At b1=0, original-link center U_1 is a symmetry of H, so the interacting mean `mu=<Omega,W1 Omega>=0` **exactly** even with b2,b3,b4 active. Consequently the centered vector on this extraction slice is simply W1 Omega; no term is silently dropped.

**F. Uniqueness of degree-six remote monomial.** Subtract the b4=0 identity. Any term involving b4 but not b3 or b2 is disconnected from the observable and vanishes by B; center parity forces the positive powers of each of b2,b3,b4 to be at least 2. The minimum is degree 2+2+2=6, and there is exactly one such exponent tuple `(b1,b2,b3,b4)=(0,2,2,2)`. Any positive b1 exponent must be even, adding at least degree 2 and raising the total to ≥8. Therefore, **with all the above conditions verified**,

```text
C6(alpha,s) = [b2^2 b3^2 b4^2] G4(s;0,b2,b3,b4)
            = (1/8) (d_b2^2 d_b3^2 d_b4^2 G4)(s;0,0,0,0).
```

The sixth-order uniform-coupling difference is exactly this multivariate coefficient, without computing unrelated monomials or replacing the physical response by a projected diagnostic. The previous all-orders finite-order support theorem implies all differences through degree 4 vanish.

## 3. A perturbatively complete representation certificate (34 channels)

This is the central anti-truncation proof. In every scalar diagram contributing to `[b2^2 b3^2 b4^2] G4|_(b1=0)`, precisely two fundamental W1 operators occur externally and two each of W2,W3,W4 occur magnetically, counting the contributions to normalized vacuum, E0, Dyson resolvent and normalization denominators. Expanding products of formal coefficients yields electric-vacuum-to-vacuum fundamental Wilson *words*; no word can use more insertions per face than the total above.

**SU(2) fusion step bound.** Multiplication by a fundamental D^(1/2) on an original link sends j only into j±1/2 (where allowed), and leaves untouched link spins unchanged. Every such word begins and ends with zero link spin. If an original link is touched t times in total, at any intermediate position the accumulated spin is bounded both by (# touches before)/2 and by (# touches after)/2; in particular j≤t/4. This is a rigorous bound on every intermediate state in every contributing word, including those entering vacuum energy or normalization subproducts.

For this monomial, every top/bottom horizontal link and the two outer vertical links are touched exactly **twice**, giving j≤1/2; each of the three shared interior vertical links is touched **four** times by adjacent faces, giving j≤1. No link can carry j>1 for this coefficient. This exact link-specific bound substantially improves the earlier sufficient global j≤4 estimate. It is independent of a finite-beta spin cutoff and uses only the number of already fixed insertions.

**Gauss-law enumeration.** Denote the 2j values of each pair of top/bottom links around face i by bit `u_i∈{0,1}`; equality of the top and bottom spins is forced by the two degree-2 endpoints and trivalent parity/triangle propagation. For neighboring faces, the intervening vertical twice-spin `v_i` is 1 when `u_i≠u_(i+1)`, 0 when both are zero, and either 0 or 2 when both are one. The two outside vertical spins equal the boundary bits. Every such assignment satisfies the SU(2) trivalent singlet triangle and parity rules at all ten vertices; conversely these constraints exhaust every state meeting the link-wise bound. The dimension is exactly

`sum_(u∈{0,1}^4) 2^(u1*u2+u2*u3+u3*u4) = 34.`

Each state is accompanied by all 13 explicit original-link twice-spins and its exact `alpha*sum_e n_e(n_e+2)/4` electric energy. The basis uses one normalized singlet per trivalent vertex with the stated incoming-epsilon phase. `phase8_probe.states/reps/e` enumerates the certificate and tests all vertex constraints. **Completeness means every possible sixth-order intermediate channel lies inside this finite set; the 34-dimensional space is not invariant under the Hamiltonian at nonzero couplings.** Additional higher-order contributions can leave it.

## 4. Independent SU(2) magnetic matrix verification

Fix orientation: four top T_i→T_(i+1), four bottom B_i→B_(i+1), five vertical T_i→B_i, i starting at zero. The tree contains top and vertical links; the four bottom chords provide independent SU(2) holonomies with product normalized Haar. Assemble the original-link gauge invariant spin-network coefficients by contracting exact normalized 3j (trivalent) and epsilon (bivalent/incoming) tensors at all vertices, times product `sqrt(2j_e+1)`. These tensors determine explicit exact electric orthonormal states.

**Route A, analytic fusion.** Integrate each chord independently using Peter–Weyl orthogonality `∫D^j*D^k=δ_jk δ_index/(2j+1)`, and the exact fundamental-character 0↔1/2 transition, equivalently SU(2) CG fusion. No table of unverified raw Wigner6j signs is imported.

**Route B, independent Haar cubature.** Independently integrate quaternion SU(2) chord variables by the 8 signed coordinate axes. This rule has exact constants, odd moments zero, and second moments `δ_ab/4`; therefore it is exact for quaternion coordinate polynomials of degree ≤3. *Every retained bottom chord representation is 0 or 1/2*, and a bra×ket×one fundamental Wilson matrix entry is degree at most 1+1+1=3 per chord. Hence the **complete** magnetic matrices are exactly integrated, although interior original links have j=1. This qualification is restricted to these integrands; Phase 5 already disproved the same 8-axis rule for generic j=1 fourth moments.

Both constructions agree **exactly for all four complete 34×34 matrices**. After multiplying each orthonormal basis ket by `sqrt(3)^t`, where t counts the shared-link spin-one channels, every matrix entry is rational; its nontrivial exact diagonal metric is `3^t`. All matrix elements obey weighted Hermiticity `M^T metric=metric M`. Independent full original-link gauge transformations at all ten vertices preserve all 34 wavefunctions within ~1.3e-15 in seeded double precision; independent 8^4 numerical full-link Gram checks give identity to ~1e-15; the 16 j<=1/2 projected entries reproduce the old `2^(-occupied neighbours)` character-fusion rule exactly. The **same original-link 3j coefficient tensor** enters both exact integration routes, so the routes are independent integrations, not wholly independently formulated bases. Exact Gauss-law checks and direct gauge transformations partly cover that remaining common dependency; no external specialist has reviewed it.

## 5. Two exact coefficient computations

At b1=0, write `b=(b2,b3,b4)`, `|V(b)>=|0>+sum_(nu>0) b^nu |v_nu>` in the intermediate normalization `<0,V>=1`; `E(b)=sum_(nu>0) b^nu eps_nu`. All multiindices have components `nu_i∈{0,1,2}`, i.e. the 27-degree nilpotent polynomial domain. Let D=alpha H_E and `W(b)=b2 W2+b3 W3+b4 W4`.

**Algorithm I, grade-by-grade exact Rayleigh–Schrödinger/Dyson.** Project `(D-W-E)V=0` on the vacuum to obtain `E=-<0,W V>`. On the orthogonal electric sector, `v_nu=D_perp^-1( sum_i W_i v_(nu-e_i) + sum_(0<mu<=nu) eps_mu v_(nu-mu))`. All denominators are exact positive rational electric energies times alpha. Then form `P=W1 V`, `N=<V,V>`, and `X=(D-W-E+s)^-1 P`. Solve its coefficients with the diagonal inverse `(D+s)^-1`, including every eps_mu contribution. Compute `G=<P,X>/N` by exact series division. The norm and vacuum energy corrections are **not** optional.

**Algorithm II, independent nilpotent-ring fixed point.** Over the explicit quotient `Q[b2,b3,b4]/(b2^3,b3^3,b4^3)`, solve the ground Feshbach/Schur fixed point from `E=-<0,W V>` and excitation inverse, independently iterate the Dyson fixed point, form the scalar numerator and use a nilpotent geometric reciprocal of N to obtain G. This implementation has its own polynomial and vector operations and takes the independently integrated Route B matrices; it does not call the grade-recursion function.

**Exact equality:** both programs agree for **every one of the 27 coefficients** of G at each of three sets of positive rational parameters:

| alpha | s | exact C6(alpha,s) |
|---:|---:|---|
| 1 | 1 | `1504856360495713/3397652693362287360000` |
| 2 | 1/3 | `2475748752150717325664201/362261816606398699499325014016000` |
| 1/2 | 2 | `119576182908291217/11007438334826799001500` |

Only the alpha=s=1 value is promoted as the primary exact coefficient. The three examples do not prove a universal sign inequality for all alpha,s>0. Exact intermediate receipts at alpha=s=1 include `eps_(2,0,0)=eps_(0,2,0)=eps_(0,0,2)=-1/3`, adjacent mixed energy `eps_(2,2,0)=eps_(0,2,2)=-2/1053`, `eps_(2,2,2)=-4909/118272960`, and norm coefficient `N_(2,2,2)=1082517997/553517452800`.

The response coefficients with odd b2, b3 or b4 powers vanish exactly. Every coefficient containing b4 but omitting either b2 or b3 also vanishes, including all b4-involving terms of total degree <6. In particular G_(2,0,0)=7/7920 and G_(2,2,0)=4540829/250442992800 at alpha=s=1.

## 6. Mandatory falsifiers and earlier-result regression

- **Phase 5**: exact distinct high-spin complementary Q-resolvent beta² remote difference `+1/704`, retained unchanged. It is not the physical G.
- **Phase 6 physical connected second order**: independently compute the perturbatively complete one-face coefficient `-61/648`, add the exact second-face contribution `+7/7920`, and obtain **`-6647/71280`**. Inactive further faces contribute zero at this order.
- **Phase 7 j<=1/2 projected**: projected beta² remains `-589/3168`; its beta^6 difference `-41497429/42323383872` is reproduced and is **negative**, as opposed to the full positive exact result. This falsifies the projected sign inference.
- **Incorrect norm omission**: at alpha=s=1 gives `856762413715348319/1698826346681143680000`, not C6.
- **Incorrect E0 omission**: gives `4052284029666349297/4152686625220573440000`, not C6.
- **Inactive/disconnected faces**: all b4 terms lacking b2 or b3 exactly zero in the physical mixed series. Actual original-link center flips independently checked for all four top links.
- **Centering subtlety**: b1=0 forces the physical mean of W1 to zero exactly, so neglecting centering on this extraction slice is *not* a valid adverse control; centering remains part of the full definition. This corrects rather than repeats the earlier invalid assumption.
- **Gauge/normalization**: all original vertex spin singlet constraints, exact weighted Hermiticity, independent numerical Gram, original-link gauge covariance and degree-qualified Haar exactness tested.
- **Adjacent vs distant**: adjacent second-face coefficient `+7/7920` survives, while disconnected remote second-order and fourth-order new-face contributions vanish; the fourth face first contributes at degree 6.

No failed mathematical tests were hidden or averaged away. All newly falsified shortcuts and remaining uncertainty are retained in `NEGATIVE_RESULTS.md`. Prior negative-results registers are unchanged.

## 7. What this does and does not imply; Phase 9 direction

**Established, restricted:** in the finite connected SU(2) chain, a properly centered local resolvent exhibits nonzero connected propagation along the entire three-face route between the source and the fourth face at the first symmetry-allowed perturbative order. The exact sign and amplitude are specific to alpha=s=1 and the stated Hamiltonian normalization. It confirms the Phase 7 **finite-order connected-support** mechanism and corrects the projected-model sign, rather than proving a gap.

**Not established:** no all-orders linked-series convergence radius uniform in N; no bound on Taylor remainders uniform in distance or volume; no interacting excitation-energy lower bound at finite beta; no exponential clustering theorem; no thermodynamic limit; no lattice-spacing limit under alpha=g²/2, beta=2/(a²g²); no 3+1D gauge theory or every-group result. A naive finite-volume sufficient analytic radius is `|beta|<3alpha/(4N)` under uniform coupling, deteriorating as the ladder grows. Invoking a Combes–Thomas/resolvent estimate that requires the desired spectral separation would be circular. The official Clay statement requires nontrivial continuum R^4 quantum Yang–Mills with a positive Hamiltonian mass gap for *every* compact simple group.

**Single weakest missing mathematical bridge:** a noncircular, **volume-uniform bound on the full connected perturbative remainder or resolvent locality**, with a neighbourhood and constants that do not collapse as N grows. A single positive sixth-order coefficient cannot furnish it.

**Proposed Phase 9, one bounded falsifier first:** formulate a candidate connected-cluster tail majorant `sum_(k≥2d) |c_(N,k)| |beta|^k ≤ A q^d` (or a justified equivalent) with A,q independent of N in an explicitly stated strong-electric regime, **without importing an interacting gap**. First test its claimed N-dependence and coupling radius on a finite, exact set of low-order SU(2) diagrams and adverse values. Only after such a bound is proved in its admitted regime ask whether its assumptions could survive physical lattice-spacing scaling or a higher-dimensional graph. Otherwise reject the majorant and retain the counterexample. This remains separate from the enormous 4D existence problem.

## 8. Reproducibility and engineering acceptance gates

From `research/ym-mass-gap-20261117/phase8/` on the Phase 8 research branch run:

```bash
python -m pip install -r requirements.txt
OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1 python -m unittest -v test_phase8
OPENBLAS_NUM_THREADS=1 python phase8_two_methods.py
OPENBLAS_NUM_THREADS=1 python phase8_gauge_controls.py
OPENBLAS_NUM_THREADS=1 python phase8_one_face_control.py
```

Local development reference versions: Python 3.13.5, NumPy 2.3.5, SymPy 1.14.0, opt_einsum 3.4.0. Dedicated CI uses Python 3.12 and dependency pins in `requirements.txt`. Numerical gauge diagnostics are explicitly approximate; matrix coefficients and all cited fractions are exact sympy/Factor algebra. A GitHub workflow passing on the final exact Phase 8 commit is required before calling the *committed implementation* verified; a subsequent PR append-only status receipt may document its job IDs. No PR merge, public UI change, deployment or scientific-publication assertion is authorized.

### Decision

**Candidate A — verified restricted mathematical result, conditioned on final SHA engineering validation.** The proof of this finite-order coefficient is a finite representation-completeness argument plus two independently computed exact matrix integrals and two coefficient algorithms; independent specialist physical-basis correspondence review, priority, and continuum implications remain explicitly unverified. If exact-head tests fail, reclassify as **C — insufficient evidence** and investigate before reporting any GitHub qualification.
