# The connected fundamental plaquette leaks into a local adjoint channel

**2026-11-26 UTC. Finite spatial periodic SU(2) lattice, discrete Euclidean time, arbitrary positive temporal coupling and perturbation at zero spatial coupling. Not the isotropic continuum trajectory.**

Use a spatial torus of side at least three, product link Haar, and the gauge-invariant Hilbert subspace. Put t>0 in the temporal weight exp(t Re tr(g)/2), normalize its link convolution to fix constants, and let K be the product convolution restricted to that subspace. In the [Wilson transfer convention](https://bib-pubdb1.desy.de/record/396349), take T_s=exp(s M/2) K exp(s M/2), where M multiplies by the sum of unnormalized fundamental characters χ_1 over spatial plaquettes; a conventional coupling multiplying half the trace would be 2s. Overall positive constants cancel. Vacuum-normalize T_s by its largest eigenvalue Λ_s. At s=0 the vacuum is the normalized constant; the strictly positive continuous convolution kernel is compact on the finite graph, and the top eigenvalue 1 is simple and isolated. Bounded multiplication on the finite graph gives analytic perturbation in a neighborhood of s=0, with no assertion about a uniform neighborhood.

For a selected spatial plaquette p, let φ_j=χ_j(U_p), with j a nonnegative integer labeling spin j/2. These vectors are orthonormal because the product is Haar. The temporal convolution eigenvalue on one spin-j/2 link is I_(j+1)(t)/I_1(t): integrate the character against the SU(2) angle density proportional to sin²θ exp(t cosθ), divide by its dimension j+1, and use I_j−I_(j+2)=2(j+1)I_(j+1)/t. By the four distinct links, K φ_j=κ_j φ_j, κ_j=(I_(j+1)/I_1)^4. In particular κ_0=1. Let ψ_s be the analytic unit vacuum, and f_s=(χ_1(U_p)−<ψ_s,χ_1(U_p)ψ_s>)ψ_s. Then f_0=φ_1 and f_s is exactly orthogonal to the vacuum at every s.

## Direct calculation with the moving vacuum

Vacuum perturbation gives ψ'_0 = A sum_q χ_1(U_q), with A=(1+κ_1)/(2(1−κ_1)), because T'_0=(M K+K M)/2 and Λ'_0=0. For q≠p, integration over a link in q but not p kills any coefficient on φ_2 from χ_1(U_q)φ_1. For q=p, χ_1²=1+χ_2, so <φ_2,f'_0>=A; differentiation of mean centering contributes only a constant here.

Define U_s=T_s/Λ_s and ρ_s=<f_s,U_s f_s>/||f_s||². The vacuum-free orthogonal remainder is g_s=U_s f_s−ρ_s f_s. At zero it vanishes. On the chosen adjoint plaquette component, its derivative is

`<φ_2,g'_0>=(κ_1+κ_2)/2+(κ_2−κ_1)A=(κ_2−κ_1²)/(1−κ_1).`

This is not the undressed Clebsch–Gordan coefficient. The moving vacuum term changes the sign. The strict [modified-Bessel Turán inequality](https://arxiv.org/abs/1010.3346), I_2²>I_1 I_3, gives κ_2<κ_1², so the derivative is strictly negative at every t>0. With the [fixed-order large-t expansion](https://dlmf.nist.gov/10.40), κ_1=1−6/t+O(t^−2) and κ_2=1−16/t+O(t^−2); the coefficient tends to −2/3. This is a limit of derivatives at s=0, not a statement at fixed nonzero s or s of order t.

## What returns and what remains open

For the rank-one compression onto the centered fundamental vector (within the vacuum-free space), the two-step diagonal omitted by compression is exactly ||g_s||². This follows by orthogonal decomposition of U_s f_s and self-adjointness. In particular its liminf divided by s² is bounded below by the square of the displayed coefficient. Hence a higher-channel excursion genuinely returns a positive amount to the fundamental two-step diagonal after exact vacuum subtraction, for sufficiently small nonzero s at each fixed t and volume. The explicit derivative is volume-independent; no uniform bound on its remainders was established. This lower bound is not evidence against a physical mass gap and does not conflict with signed mixed adjoint–fundamental correlators.

Independent numerical check only: on the single-plaquette class-function model with j=0,…,17, exponentiate the tridiagonal χ_1 multiplication by Taylor series, find the unit vacuum by power iteration, and evaluate the Rayleigh-subtracted adjoint component directly. For t=1,2,5,10,20,50 and s=10^−4 or 5×10^−5 the maximum discrepancy of <φ_2,g_s>/s from the formula was 1.10×10^−6. This checks the perturbative coefficient, not the full torus or the uniform limits. The earlier fixed-spacing continuous-time mixed-signal analysis used a different observable and limit; this note adds a discrete-time, vacuum-dressed return test and does not assert literature priority.

Next target: determine what survives when spatial and temporal couplings grow together. The derivative alone admits a shrinking perturbative window and cannot justify fundamental-only truncation or uniform suppression there. Use connected transport with returns retained, seek an estimate in physical time, and do not substitute the bare plaquette for the matched continuum trace.
