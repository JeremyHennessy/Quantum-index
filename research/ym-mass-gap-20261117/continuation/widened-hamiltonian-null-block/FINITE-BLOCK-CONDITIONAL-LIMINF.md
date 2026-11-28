# Conditional positive response from one finite reference resolvent block

The scope is the fixed-spacing odd quadratic effective operator at zero total momentum, in the eight-coordinate-sign-reflection invariant sector, at E=−13/336. The actual folded source w is nonzero. This statement is conditional: it does not establish the required reference bound, reference or physical limiting absorption, an actual positive response, an absolutely continuous density, finite-coupling scattering, or continuum physics.

## The precise hypothesis

Use the common Hilbert space of all reference detached coordinates (including the reference-only ghosts G) and the actual physical near space J. Let D be the finite flagged detached return space and let S=G⊕D⊕J, as a finite Hilbert subspace including the physical source. Take B=A⊕0_J, reference convolution plus a decoupled near scalar zero. Complete the actual physical H as H_hat=H⊕0_G, with genuinely decoupled scalar-zero ghosts. Since E≠0, neither decoupled scalar has a pole. Exact block identities from the compact-range calculation give
```
H_hat = B+V,   V=P_S V P_S,   w∈S,
```
in operator coordinates. This includes the finite G-to-D deletion, finite ghost self-block replacement, physical L and L*, and physical K; no other detached rows differ from A. At the target E, completion is equivalent to the active physical equation after checking the ghost component is zero.

Let W⊂S consist of forcings whose reference part has zero trace on both previously certified relatively open real patches (the independent simple R patch and triple F patch). The prior two-patch theorem gives a unique compact reference preimage for its detached part. On J invert −E I_J directly. Together these give a linear compact preimage map P:W→H_common characterized by (B−E)P r=r. Because W has finite dimension, P is bounded and its image is contained within a single finite support subspace T; one can take all reference groups of relative radius at most five, along with J, by the exact Laurent width bound for radius-four forces. Let S_ref=G⊕D and T_ref be the reference part of T.

The only nontrivial limiting hypothesis used below is the uniform bound
```
sup_(0<η<η₀) || P_(S_ref) (A−E−iη)⁻¹ P_(S_ref+T_ref) || < ∞.       (U)
```
The row space is the finite ghost and detached-return subspace; the column space is that forcing subspace plus compact preimages. More minimally, it suffices to bound these rows against the reference components of W^⊥∩S and of P(W). No global norm bound, full weighted-space LAP, or existence of a finite-block limit is assumed. The reference J resolvent is the explicit bounded scalar (−E−iη)⁻¹.

## Uniform coercivity on the two regular traces

After shrinking each of the two patches, use a compact subchart of positive area parametrized by transverse coordinates a and a real normal coordinate s equal to the crossing eigenvalue minus E. The full Bloch matrix may first be conjugated by the constant positive Gram square root to standard operator coordinates. Each projection Π(a,s) onto the isolated crossing rank-one or rank-three cluster is smooth and has an eigenvalue branch exactly s+E there. At the triple patch the three branches are the same elementary-loop eigenvalue plus the flat six-loop eigenvalue −1/42; exact nullity three separates them from other branches in a neighborhood. The torus Jacobian in both selected compact subcharts is bounded above and below by positive constants.

For q∈S the reference Fourier polynomial and its derivatives on the subcharts are bounded by a fixed multiple of ||q||, since q has fixed finite possible support. Therefore
```
||Π(a,0) q(a,0) − Π(a,s) q(a,s)|| ≤ C |s| ||q||.
```
Let T_j q denote Π(a,0)q(a,0) in the corresponding transverse L² space. Integrating the preceding estimate over a and |s|≤η with weight η/(s²+η²), and using the fixed positive Jacobian and exact resolvent factor of the crossing cluster, gives
```
||T_j q|| ≤ C (√η ||(B−E−iη)⁻¹ q|| + η ||q||).
```
Indeed the weight integrates to π/2 on −η≤s≤η, and its weighted second moment on this interval is O(η²). Jointly T=(T_F,T_R) obeys the same estimate with a common constant. Shrinking the patches did not change W: one nonempty relatively open patch for each irreducible defining factor already gives the compact-preimage criterion. Since W=ker T in finite-dimensional S, T is bounded below on its orthogonal complement, so dist(q,W)≤C||Tq||. These constants are uniform in q; in particular the estimate does not assume an a priori bounded family of η-dependent forcings.

## Closed-range contradiction

Set v_η=(H_hat−E−iη)⁻¹w, q_η=w−V v_η∈S and R_B(η)=(B−E−iη)⁻¹. The resolvent equation gives v_η=R_B(η)q_η. Assume along a sequence η↓0 that X_η=√η||v_η||→0. Then
```
√η ||q_η|| ≤ √η ||w|| + ||V|| X_η → 0.
```
Decompose q_η=r_η+e_η, with r_η∈W and e_η in its orthogonal complement within S. The trace inequality gives ||e_η||≤C(X_η+η||q_η||)→0, and η||r_η||→0. In particular, no boundedness or convergence of r_η itself is asserted. The crude ||r_η||=O(||v_η||) also holds because w is nonzero and the bounded equation w=(H_hat−E−iη)v_η keeps ||v_η|| uniformly away from zero.

The exact compact preimage identity gives
```
R_B(η) r_η = P r_η + iη R_B(η) P r_η.
```
Substitution into w=q_η+V v_η yields
```
w = (I+VP) r_η + e_η + V R_B(η) e_η + iη V R_B(η) P r_η.
```
The last two terms tend to zero by (U), the bounded J scalar and bounded P, because V has output and input supported in S, e_η lies in S, and P r_η is supported in T. The isolated e_η term also vanishes. The range of I+VP on the finite-dimensional W is closed. Therefore w=(I+VP)r for some r∈W, which means w=(H_hat−E)P r. This is a compact actual completed solution. The ghost equation is (−E) (P r)_G=0 because w_G=0; hence the solution vanishes on ghosts and is genuinely compact physical. This contradicts the exact 6,549/6,550 compact physical rank certificate for this source.

Consequently, **if (U) is true**, then
```
liminf_(η↓0) η ||(H−E−iη)⁻¹w||²
 = liminf_(η↓0) Im ⟨w,(H−E−iη)⁻¹w⟩  > 0,
```
using the usual convention of an inner product linear in its second argument. H_hat and H give identical resolvents on the physical source. This is a conditional lower liminf of the Poisson-smoothed spectral response, not a boundary limit or spectral density. The unresolved task is the uniform block (U): regular patches give the lower coercive trace estimates, but do not control singularities from the rest of the reference torus.
