# Real-energy mass inequalities in the selected local momentum window

Fixed spacing, research continuation from b47156630d13a07b3a12c05294f143a116b84a01.
These are finite-g inequalities for the actual joint spectral measure
of the centered local Wilson observable. They do not establish a
resonance, a pole, a spectral density, a mass gap, or a continuum limit.

## Conditional probability and explicit radii

Let ν_g be the full centered local joint measure of A_loc and
B_g={||k||≤c|g|³} the preceding momentum ball. Normalize by actual
source mass on that ball, not by total spectral mass at all momenta:

    μ_g(S)=ν_g(S×B_g)/ν_g(R×B_g).

This is a probability; the denominator is
m(B_g)(1+O(|g|))>0. Let E=−13/336, e_g=15+g²E, and define the
scaled real-energy variable x=(λ−e_g)/|g|⁴. For the fixed regulator
coefficient a>0, the previously bounded full joint Poisson average
in this normalization is exactly

    ∫ K_a(x) dμ_g,        K_a(x)=a/(x²+a²).

Here and below integration in x denotes pushforward of μ_g.
Indeed the numerator of the spectral test is |g|⁴·a|g|⁴ and
the denominator is |g|⁸(x²+a²). Since the prior liminf is
positive and limsup is strictly less than 1/a, choose fixed
margins 0<ℓ<u<1/a so that for all small enough nonzero real g,

    ℓ ≤ ∫ K_a(x) dμ_g ≤ u.

Set

    R = sqrt(2a/ℓ−a²),      r = sqrt(2a/(u+1/a)−a²).

These obey 0<r<R, K_a(R)=ℓ/2 and
K_a(r)=(u+1/a)/2. They do not depend on the sign or size of g.

For p_R=μ_g(|x|≤R), monotonicity and positivity give

    ℓ ≤ ∫ K_a dμ_g ≤ (1/a)p_R + (ℓ/2)(1−p_R),

so the real window has a positive conditional fraction:

    μ_g(|λ−e_g|≤R|g|⁴) ≥ aℓ/(2−aℓ).

For p_r=μ_g(|x|≤r), the reverse bound on the smaller window gives

    ((u+1/a)/2)p_r ≤ ∫ K_a dμ_g ≤ u,

and hence another positive fraction is outside it:

    μ_g(|λ−e_g|>r|g|⁴) ≥ (1/a−u)/(1/a+u).

Closed windows and the strict outside complement are as written;
atoms on window endpoints require no changes. These hold for
all sufficiently small nonzero g, not just along a subsequence.

The outside-small fraction is genuinely from the E15 band, up to
an O(g²) subtraction. This stronger point follows from the full
free-transported section f̂_g of the centered observable:
sup_k ||f̂_g(k)−f̂_0(k)||≤C|g|, and f̂_0 is entirely E15.
The exact interacting band projection corresponds to the free
P15, whose shape projection on the translation Fourier side is
independent of k. Thus the complementary momentum marginal on
any B is at most C²g² m(B), since its section is
(1−P15) f̂_g. Dividing by the selected ball's total source mass
shows μ_g(E15 complement)=O(g²). Subtracting this cannot
remove the fixed positive outside-small fraction for sufficiently
small g. The larger near window is already contained in the
separated E15 interval for all small g. This is a probability
statement, not the order-g⁸ Poisson contribution estimate.

## What the two inequalities cannot tell us

A moving single atom with a fixed nonzero x_0 for which
ℓ<K_a(x_0)<u passes both tests. Such an atom could be a shift
of the exact energy rather than genuine spread. An atom at the
center mixed with an atom well outside the large window can also
fit the same Poisson value: choose L>R with K_a(L)<y for some
ℓ<y<u, and put mass
(y−K_a(L))/(1/a−K_a(L)) at x=0 and the remainder at x=L.
Then its probability of the annulus r<|x|≤R is zero. Thus the
two lower bounds need not refer to disjoint resolved peaks or
even guarantee positive annular mass. No anti-concentration,
absence of atoms, finite-coupling decay width, or pole has been
shown. Nor does a spectral mass statement at an excitation
energy near 15 establish the lowest nonvacuum mass gap.

## One next continuum-relevant finite test

A useful next prerequisite is a *weak-bare one-block curvature
response*, not another fixed-spacing Poisson corollary. For
example, fix a simply connected four-by-four blocking cell
(with all necessary transverse directions and a precise
gauge-covariant Dirichlet rule), and an admissible one-parameter
perturbation θ of a coarse plaquette boundary holonomy. Choose
the boundary loop to bound a membrane of included fine plaquettes
so that its linearized flux cannot be erased by an interior
gauge transformation. After fixing the residual gauge,
integrate the fine links and study

    F_β(θ)=−log [Z_β(θ)/Z_β(0)].

Do not count a boundary-only action contribution as the
fine-link response: separate any such explicit term, and
verify that the selected membrane still makes the resulting
transverse response nontrivial. In this bounded problem one
can ask for an exact positive finite limit, or a precise
obstruction, for β^(-1)F_β″(0) as β→∞. Differentiation at finite
β gives the computable identity
E[S_θθ]−β Var(S_θ) for this normalized derivative (S is the
dimensionless included Wilson action). A possible proof strategy
is to establish uniqueness modulo gauge of the identity-boundary
minimizer, a positive Hessian in the fixed interior quotient,
and a transverse nonzero Schur-complement curvature, then give a
controlled Laplace error as β grows. Those are checks, not
assumptions silently supplied by the present result. A later
extension would need stable admissible backgrounds and multiple
block scales, not just this local test.

The distinction matters because the coefficient g used here
multiplies the magnetic term *after* the electric normalization.
In the usual Kogut–Susskind normalization the corresponding
magnetic/electric coefficient ratio scales as the inverse
fourth power of the conventional bare coupling, so the
small-magnetic perturbative regime cannot be carried directly
to the weak-bare trajectory. See the
[canonical Hamiltonian formulation](https://doi.org/10.1103/PhysRevD.11.395)
and the explicit coefficient comparison in
[Mathur–Sreeraj](https://arxiv.org/abs/1509.04033).
A nondegenerate block response would be input toward a matched
weak-bare scale comparison, not a single-block proof of the
mass gap or continuum. No additional phase or external work is
proposed as already authorized.
