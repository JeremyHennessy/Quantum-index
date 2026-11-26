# Local Wilson boxes and the equilibrium shell-pair test

**2026-11-26 UTC. Exact finite-volume identities and a sufficient weighted comparison. No uniform Wilson bound is established.**

This sharpens the geometry and makes two missing estimates in the [equilibrium boundary-response reduction](2026-11-26-equilibrium-boundary-trace-response.md) explicit. Use its same real, centered matched trace difference D. Include the *whole* lattice stencil of D, not just the nominal support of its smearing function.

## A truly local cut, for either finite time parity

For a set A of interior links, let ∂A consist of the links outside A belonging to any plaquette that meets A. Given the exterior links, the density on A with respect to product Haar is proportional to the product of Wilson weights of plaquettes meeting A. All dependence on the exterior is through ∂A. Denote the response by \(h_A=E[D\mid U_{\partial A}]\).

Choose a bounded spacetime box A in the positive time half containing the stencil, and its reflected copy RA containing RD. Require no plaquette to meet both interiors; choose their physical separation with room for a lattice plaquette before using this step. Conditional on the exterior of both boxes their interiors are independent, and the conditional responses depend only on their respective shells. The reflection-invariant periodic law gives equal squared norms for the responses. Therefore
\[
 E[D\,RD]=E[h_A h_{RA}]\le Q_A,\qquad Q_A=E[h_A^2].
\]
No far seam, even-period restriction, or gauge fixing enters this upper bound. Gauge invariance of each response follows by changing the integrated link variables. The inequality is not generally equality. In particular, convergence of the separated correlation does **not** give an upper bound on \(Q_A\).

For nested boxes \(A\subset B\) take ∂A inside B and ∂B outside A. The domain Markov property gives \(h_B=E[h_A\mid U_{\partial B}]\). Fix the packet difference, not its size, as the boxes expand, and fit each reflected pair inside the actual periodic geometry before taking the ordered limits.

## The missing fractional loss as a weighted overlap

Write s and z for the inner and outer shell configurations, ν for the true marginal of s, λ for the true marginal of z, and ν_z for the conditional law of s given z. On each finite torus with disjoint shells and finite β, the Wilson weights are smooth and strictly positive on the compact link space. Consequently ν_z has a positive density \(f_z\) with respect to ν. The symmetric pair density
\[
 r(s,t)=\int f_z(s) f_z(t)\,\lambda(dz)
\]
has unit row integrals against ν. It is the law of two independent draws of the inner shell given the same outer shell, expressed relative to independent ν draws. It follows directly from conditional variance that
\[
 Q_A-Q_B=\tfrac12\iint (h_A(s)-h_A(t))^2 r(s,t)\,\nu(ds)\nu(dt).
\]
Define the deficient overlap per row \(\delta_c(s)=\int(c-r(s,t))_+\,\nu(dt)\) for \(0<c\le1\). Subtract the deficient part from the constant density c and discard the surplus. Using symmetry, centering, and \((u-v)^2\le2u^2+2v^2\), this gives
\[
 Q_A-Q_B\ \ge\ cQ_A-2\int h_A(s)^2\delta_c(s)\,\nu(ds).
\]
For example, a fixed \(c>0\) and a bound on the last integral by \(cQ_A/4+\epsilon\) give \(Q_B\le(1-c/2)Q_A+2\epsilon\). This is a sufficient, not necessary, comparison. It asks for overlap on the shell configurations carrying the squared trace response; a bad-set probability without response weighting does not suffice. Strict positivity at fixed cutoff supplies no constant that survives cutoff removal. The exact pair-density form also shows why conditional independence of separate boxes does not imply a contraction between concentric shells.

## Starting norm: a seam-normalization check

Split Wilson plaquettes into those meeting A, those meeting the exterior interior, and shell-only plaquettes. Let \(a(s),b(s)\) be the two interior partition functions at fixed shell and w(s) its shell-only weight; treat empty factors as one. The true shell marginal is proportional to \(w(s)a(s)b(s)\) relative to shell Haar. A formal same-box double, taking the same shell factor once and two copies of A, instead has marginal \(\nu_{\mathrm{dbl}}\propto w a^2\). Its joint product of D on the two copies integrates to \(\|h_A\|_{L^2(\nu_{\mathrm{dbl}})}^2\), not \(Q_A\). The true \(Q_A\) is that squared response integrated with additional density \((b/a)/E_{\mathrm{dbl}}[b/a]\). Thus a bounded density comparison, or a suitable *weighted* moment estimate of that ratio against \(h_A^2\), together with independent control on the double, would be enough for a starting estimate. The double is not the pinned periodic Wilson geometry; its correlation is not covered by the registered continuum convergence. Neither condition is proved here. Using the coincident bare variance by Jensen would not remove the cutoff issue.

## Exact algebra control

Enumerate all 65,536 assignments of ±1 spins on a 4×4 periodic square grid, with bond weight 2 for equal spins and 1 for unequal spins. Use both positive coordinate bonds at each vertex, D the spin at (0,0), and reflection x→2−x mod 4. Let A be the center and B the graph-distance ≤1 ball. The graph-distance-1 and graph-distance-2 layers are their respective shells. Integer weights and exact rational conditioning give partition sum 48002415106, \(E[D\,RD]=10711980225/24001207553\), \(Q_A=210306467025/408020528401\), and \(Q_B=9176207553/24001207553\). The shell-pair sum independently yields \(Q_A-Q_B=54310938624/408020528401\), strictly positive; the separated correlation is strictly smaller than \(Q_A\). This tests the geometry and identities under a finite local Gibbs law, not the Yang–Mills estimates.

The probabilistic identities use standard conditioning; compare [Evans–Kenyon–Peres–Schulman](https://users.cms.caltech.edu/~schulman/Papers/evansKPS00Ising.pdf) for conditional second-moment information in a different, tree setting. The boundary cut here uses the pinned [Wilson plaquette action](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/PublicWilson.lean). The next test is a cutoff-uniform weighted starting bound or shell loss for the matched trace under the true Wilson marginal. Replacing the marginal by an unnormalized glued measure would not prove it. No novelty or mass-gap claim.
