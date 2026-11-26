# Two continuum controls: ultraviolet trace matching and an invisible gapless sector

**November 26, 2026 UTC. Positive covariant controls only. Neither model is a counterexample to the Wilson construction.**

The [matched Wilson trace packet](2026-11-26-matched-wilson-trace-reflection.md) now has an exact lattice representative. There are still two independent inference gaps: (1) from the verified short-distance trace asymptotic to a positive trace-sector threshold, and (2) from a trace-sector threshold to a gap on the whole Hilbert space. The following explicit controls separate them.

## Same ultraviolet coefficient; opposite infrared behavior

Use squared mass s=m² and the convention
\[
 \Delta_s(r)=\frac{\sqrt{s}}{4\pi^2r}K_1(r\sqrt{s}),\qquad \Delta_0(r)=\frac1{4\pi^2r^2}.
\]
This is the four-dimensional Euclidean free scalar kernel at nonzero separation. Set d=dim_R(g), m₀=e and A=d/(16π²). Define two positive measures
\[
 d\rho_0(s)=A\,\mathbf{1}_{s\ge e^2}\frac{s^2}{(\log s)^2}\,ds,\qquad
 d\rho_\kappa=d\rho_0+\kappa\,\mathbf{1}_{0<s<1}s^2\,ds,\quad \kappa>0 .
\]
They have polynomial growth and are locally finite. Their positive mass-shell superpositions define scalar generalized free fields (cf. [Greenberg](https://doi.org/10.1016/0003-4916(61)90032-X)); positivity and cone support hold termwise. Let G_j(r)=∫ Δ_s(r)dρ_j(s).

For L=log(1/r), u=r√s,
\[
 G_0(r)=\frac{A}{2\pi^2r^8}
      \int_{er}^{\infty}\frac{u^6K_1(u)}{(2L+2\log u)^2}\,du .
\]
Multiplying by r⁸L² sends this to A/(8π²) times the Bessel moment 384, i.e. exactly 3d/π⁴ as in the [verified trace asymptotic](https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf#page=10). To justify the limit, the part u<√r has denominator at least 4 and u⁶K₁(u)=O(u⁵), so its contribution after multiplying the integral by L² is O(L²r³). On u≥√r the ratio L²/(2L+2log u)²≤1, and dominated convergence applies. The exact moment is 2⁵Γ(4)Γ(3) by [DLMF 10.43.19](https://dlmf.nist.gov/10.43.E19). With this squared-mass convention s³ would instead yield r⁻¹⁰, so it is not a trace-law match.

Since Δ_s(r)≤Δ₀(r) (e.g. the positive heat-kernel representation), the added term satisfies
\[
 0<G_\kappa(r)-G_0(r)\le\frac{\kappa}{12\pi^2r^2}.
\]
Thus it is uniformly small on every half-line r≥r₀>0 as κ→0 and is too small to change **any inverse-log coefficient at the r⁻⁸ order** if such a coefficient exists. This statement does not assume the full inverse-log expansion exists. At large r, however, the same term is exactly
\[
 G_\kappa(r)-G_0(r)=\frac{\kappa}{2\pi^2r^8}\int_0^r u^6K_1(u)\,du
 =\frac{192\kappa}{\pi^2}r^{-8}+\text{exponentially small remainder}.
\]
For fixed Δ>0 its forward curvature G(r)−2G(r+Δ)+G(r+2Δ) is asymptotic to \(13824\,\kappa\Delta^2\,r^{-10}/\pi^2\): the leading second derivative multiplies by 8·9, and the Bessel remainder and its derivatives decay exponentially. The curvature is positive by the positive Laplace representation and the factor (1−e^(−ΔE))². For G₀ the same representation has E≥e, hence curvature at r≥r₀ is at most e^(−e(r−r₀)) times curvature at r₀. In the perturbed model positive mass measure in every interval (0,ε) and positive shell measure at sufficiently small momentum eliminate every positive trace threshold. These are radial point-pair asymptotics; no assertion that the packet has this particular coefficient is needed. The earlier detector lemma already handles the narrow positive packet. Nor is Gκ a claim about the actual Wilson trace.

There is also an identically conserved tensor with each such field as trace: take a scalar X with density dρ_j/(9s²) and form \(I_{\mu\nu}=(\partial_\mu\partial_\nu-\eta_{\mu\nu}\Box)X\) in mostly-minus signature. Its trace on the mass shell is 3sX, giving dρ_j back; its divergence vanishes identically, and the divided measure stays locally finite at s=0. Its translation charges vanish as surface terms in the usual smeared limiting sense; this tensor is an improvement, not the Ward-normalized generator of translations. Thus the control does not satisfy the full stress-tensor hypotheses by this construction.

## Even all trace correlators can leave a blind sector

Independently, start with any theory with a translation-normalized stress and form its decoupled product with one free massless scalar on four-dimensional flat spacetime. The scalar's [improved stress tensor](https://doi.org/10.1016/0003-4916(70)90394-5) is traceless at separated points and generates its own translations. The product total stress generates translations in both factors, but its separated trace correlators are exactly those of the starting factor, since the trace acts as Θ⊗1 there. The full Hamiltonian nevertheless has arbitrarily low positive energies in the scalar factor: nonvacuum one-particle packets supported in punctured neighborhoods of zero momentum have energy |p|. They are orthogonal to every vector built solely from trace insertions on the product vacuum. No claim is made that this enlarging operation preserves the original registered operator content, the stress-sector dimension assertions, pure Wilson origin, or contact prescription. The product is a counterexample to the **trace-correlators-only inference**, not to the pure Yang–Mills result.

## Audit consequence

The short-distance law, spectral positivity, and conserved improvement identities cannot replace a Wilson-specific infrared inequality for the exact normalized local commutator. Once a trace-sector bound is proved, a second result is still required: uniform control on a total family of gauge-invariant probe states, or a structural theorem forcing low-energy states to have overlap with that controlled family. Proving a single trace rate and simply invoking the cyclicity of the **full** field family is not enough. These controls do not establish any Wilson rate, mass gap, or literature priority.
