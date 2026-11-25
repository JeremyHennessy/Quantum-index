# What the continuum trace packet detects, and what finite moments can falsify

**2026-11-25 | Proof of conditional diagnostics | No infrared decay estimate**

The [separated trace fixture](2026-11-25-first-separated-trace-gap-fixture.md) was a nonzero reflection-positive test with controlled physical normalization. A bound on its actual mixed decay would say more than a gap for one chosen representative vector: with a narrow enough nonnegative packet it rules out low energies throughout the trace's **one-field** sector. A separate exact moment calculation gives a stronger finite falsification test and shows why no finite list alone certifies the threshold.

## A positive time packet has no low-energy blind spot

Use the native component reconstructions described in Section 6 of the [November 10 assessment](https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf). In a component i the Hermitian trace field has a positive tempered two-point momentum measure \(\rho_i(dE\,d{\bf p})\) supported on \(E\ge |{\bf p}|\), by positivity, translation covariance and the Wightman spectral condition. Equivalently use the spectral representation of the translation two-point distributions and their analytic continuation into positive Euclidean time. The argument here only uses this two-point representation, not a construction of all higher moments.

Choose a real nonnegative smooth test f supported in positive Euclidean times \([\tau_{\min},\tau_{\max}]\), with \(\tau_{\min}>0\), and spatial positions within radius r around zero (or translate them there), with \(\int f>0\). Under the same reflection and semigroup pairing as for the fixture, its two-time difference at delay \(\Delta>0\) has positive spectral measure
\[
 |L_f(E,{\bf p})|^2(1-e^{-\Delta E})\,\rho_i(dE\,d{\bf p}),\qquad
 L_f(E,{\bf p})=\int e^{-E\tau+i{\bf p}\cdot{\bf x}} f(\tau,{\bf x})\,d\tau\,d^3{\bf x}.
\]
The time-reflected half contributes the conjugate, so this is a squared multiplier rather than an unnormalized Fourier transform. The exponential in \(\tau_{\min}\) makes the measure finite under the usual tempered spectral bound. For a candidate m with \(mr<\pi/2\), whenever \(0<E<m\), the forward cone gives
\[
 \operatorname{Re}L_f(E,{\bf p})\ge
  e^{-m\tau_{\max}}\cos(mr)\int f>0 .
\]
A spatial translation just adds a phase. Thus no positive spectral mass below m can be hidden by this packet. The vacuum factor does vanish at E=0, deliberately.

If the actual mixed delayed differences for this one packet have \(D_{\rm mix}(f,n\Delta)\le C_f e^{-m n\Delta}\) for all large integers n in the prescribed lattice limits, the positivity argument of the [vacuum-free test](2026-11-25-vacuum-free-phase-mixture-test.md) implies the absence of \(\rho_i\) on \(0<E<m\) for almost every phase. For the **selected** phase, avoid assuming an unproved uniform smearing continuity. For every fixed \(\epsilon>0\) use the separated point-pair trace on the time axis, with spectral multiplier \(e^{-2\epsilon E}\). The almost-sure support statement implies each of its discrete contraction inequalities. These point-pair inequalities are continuous in the character by the [pinned reconstruction](https://raw.githubusercontent.com/yang-mills-group/OpenAI-YM-20261028/3456e5e75cf8d4cd558955a5c7638fba2d68f464/ChallengeSpec.lean#L106-L132), so full support passes them to the selected character, one integer delay at a time. Applying positive support exclusion to that point pair, whose multiplier is nonzero at finite E, excludes the same trace spectral support in the selected phase. In particular this covers *all* vectors made by one trace insertion and their closed translation span. It does not imply a gap on vectors formed by products of fields or in sectors invisible to the trace.

## Finite positive-moment tests use interference in the test polynomials

Let \(d_j=D_{\rm mix}(f,j\Delta)\) and \(d_j=\int q^j d\sigma(q)\) for \(q=e^{-\Delta E}\) in [0,1]. The target gap m on this sector requires support \(q\le q_m=e^{-m\Delta}\). Hence with \(H_0=(d_{i+j})_{0\le i,j\le k}\) and \(H_1=(d_{i+j+1})\), necessarily
\[
 q_m H_0-H_1\succeq0 .
\]
In fact the tested quadratic form for coefficients v is \(\int(q_m-q)|\sum_i v_iq^i|^2d\sigma(q)\). If this holds at **every** degree then support above \(q_m\) is impossible by uniform polynomial approximation of a continuous bump there; a single finite-degree failure suffices to disprove that threshold for the packet. This is the standard one-variable support localization of [Lasserre](https://arxiv.org/abs/1011.0138). If each supplied moment has absolute uncertainty \(\varepsilon_j\), the exact sign of a negative tested form is certified only when its size exceeds \(\sum_{i,j}|v_i||v_j|(q_m\varepsilon_{i+j}+\varepsilon_{i+j+1})\). Such intervals would have to include the ordered Wilson limit errors as well as roundoff or sampling; no numerical fixture data are introduced here.

Exact adverse control: for \(\sigma=\delta_{1/4}+10^{-3}\delta_{9/10}\) and \(q_m=13/40\), all three available raw ratios based on \(d_0,\ldots,d_3\) pass the scalar threshold (the largest is \(629/2435<13/40\)). But \(v(q)=q-1/4\) removes the fast mass, giving \(\int(q_m-q)|v(q)|^2d\sigma=-3887/16000000\). Degree one already rejects that apparent bound, using exactly the same four moments.

Conversely no fixed finite list of moments can certify a gap uniformly. A rational three-moment example uses \(x=(1/4,1/2,3/4)\) and tail \(\tau=\sum_{n\ge1}4^{-n}\delta_{1-2^{-n}}\), whose first three moments are \(1/3,4/21,4/35\). The weights \((1,23,11)/105\) on x have those same moments, by exact Vandermonde arithmetic. Therefore \(\sum_{j=1}^3\delta_{x_j}\) and \(\sum_{j=1}^3(1-\alpha_j)\delta_{x_j}+\tau\) have identical \(d_0,d_1,d_2\); the first has support bounded away from 1, the second approaches 1. Both can be untilted by \(1/(1-q)\) to obtain finite original measures, since the untilted tail weights are \(2^{-n}\). There is no zero-energy atom. For any prescribed finite order the same construction with more distinct interior nodes, solving the corresponding Vandermonde system and scaling the tail sufficiently small, keeps the weights nonnegative. These are spectral-measure controls, not counterexamples to any Wilson dynamics.

The actual mixed continuum fixture still has no verified uniform decay inequality or exact numerical moments at increasing physical time. The next target remains a large-separation bound taken in the same Wilson normalization and ordered limits. The present result specifies what that bound would prove (the one-insertion trace sector) and a defensible way to try to falsify it early, not a proof of the Yang–Mills mass gap.
