# The free four-dimensional Maxwell scalar has an exact odd-point null

**2026-11-26 UTC. Separated Euclidean Maxwell benchmark; no conclusion about the actual Yang–Mills three-point kernel.**

The [connector-free triplet test](2026-11-26-connector-free-gaussian-triplet-test.md) brackets arbitrary squared-Gaussian probes. For the very specific free Maxwell quadratic profile relevant to the ultraviolet comparison, the benchmark sharpens to an exact zero, not merely an inequality.

In four Euclidean dimensions take one free Maxwell field with the usual gauge-invariant field-strength covariance from differentiating the potential kernel δ_μν/(4π²|z|²). On the six components indexed by unordered oriented pairs (μ<ν), its matrix from x to y at z=x−y≠0 is

`C(z)=(π²|z|⁴)^−1 Λ² R_z`, where `R_z=I−2 zz^T/|z|²`.

To verify signs, rotate z into the time axis. Then the Hessian of 1/(4π²|z|²) has temporal entry 6/(4π²|z|⁴) and the three spatial entries −2/(4π²|z|⁴); differentiation at opposite endpoints puts a minus sign on their sum. Thus C is negative on temporal-spatial two-forms and positive on spatial-spatial ones, with equal magnitudes. Rotation gives the formula above. It uses noncoincident points only.

R_z reverses orientation, so Λ²R_z anticommutes with the Euclidean Hodge star on two-forms. In particular every covariance factor exchanges the two Hodge sectors. A product along any odd Wick cycle therefore has zero trace. With d independent color species set Q(x)=(1/2) Σ_(color,μ<ν) :F_(μν)(x)^2:. The connected two-point scalar is (1/4)·2d Tr(C(z)C(z)^T)=3d/(π⁴|z|⁸), which matches the numerical coefficient of the [pinned short-distance trace law](https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf#page=10) after the latter's logarithmic scaling; it does not match the actual field's full dependence.

At three distinct points all Wick contractions of these centered quadratics are the triangle, whose trace vanishes by Hodge parity. More generally every centered odd separated moment vanishes: each Wick diagram has degree two at each vertex with no self-contractions, decomposes into cycles, and an odd number of vertices forces at least one odd cycle. This remains true for compactly supported scalar smearings with pairwise separated supports. It is independent of any choice of gauge connector or treatment of diagonal contact terms.

Exact independent matrix check: form the integer numerator |z|²I−2zz^T and its 6×6 exterior square. The trace of the product of three such matrices was zero in 128 integer triangle fixtures, without floating-point cancellation.

**Test for the actual theory.** The appropriate evidence would be a certified nonzero separated three-point of the actual real matched trace, or its first nonzero coefficient in a controlled small-triangle asymptotic. The audited [TraceBridge](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/TraceBridge.lean) exclusion uses the trace two-point asymptotic and different Wick-profile tests. The two-point result cannot supply a three-point coefficient. A nonzero triplet would reject this specific Maxwell quadratic benchmark, not by itself establish infrared decay or exclude all Gaussian composites. No independent originality claim is made.
