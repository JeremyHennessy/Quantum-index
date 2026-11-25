# The free-boundary law differs from the vacuum-squared law: an exponential overlap obstruction

**2026-11-25 | Fixed spatial lattice, weak real coupling | Research only**

Let \(\nu\) be product Haar on a finite open cubic box, \(P\) the number of its plaquettes, and \(\Psi>0\) its \(L^2(\nu)\)-normalized vacuum for \(H=L+\gamma V\), with \(V=\sum_p\tau_p\). Write \(\mu_s=\Psi^s\nu/\nu(\Psi^s)\) and \(a=\nu(\Psi)\). For sufficiently small positive γ independent of volume:

* The \(\mu_s\), \(|s|\le2\), each have a unique spatial bulk limit and a uniform bounded-differences concentration estimate. The late free-terminal endpoint law is \(\mu_1\), not \(\mu_2\).
* In the bulk \(\mu_2(\tau_p)-\mu_1(\tau_p)\) is bounded above and below by positive constants times γ. In fact the finite-box averages satisfy this bound already.
* For positive absolute constants \(c,C\), \(e^{-C\gamma^2P}\le a\le2e^{-c\gamma^2P}\). The multiplier \(1/(a\Psi)\) that replaces a stationary final vacuum by the free terminal vector has variance \(a^{-2}-1\) under \(\mu_2\). Thus an \(L^2(\mu_2)\) perturbation uniform in the whole volume cannot justify this replacement.

## Spatial influence and concentration

The [local vacuum-ratio theorem](2026-11-25-local-vacuum-boundary-ratios.md) writes the conditional density at a single edge i of \(\mu_s\) using ratios \(\Psi(u,x)/\Psi(u_0,x)\) as u varies. Their logs have oscillation at most \(C|\gamma|\). If a conditioning edge j changes, the difference of these log ratios is at most \(C\min(|\gamma|,4^{-d(i,j)})\): use the size bound for the first number and spatial locality with \(S=\{i\}\) for the second (absorb the fixed collar in C). Passing from these log densities to normalized conditional probabilities gives the same-order total variation bound uniformly in \(|s|\le2\), by the bounded likelihood-ratio estimate. This symmetric majorant has row and column sums \(O(|\gamma|(1+|\log|\gamma||)^3)\): split lattice shells at distance proportional to \(\log(1/|\gamma|)\) and use cubic ball volume. Thus both sums are at most 1/2 for small γ.

The limiting single-site kernels are positive and continuous in the product topology, since the established ratio convergence and localization are uniform over external fields. Any finite-volume subsequential limit is consistent with those single-site kernels, by extending smaller boxes with unmatched Haar links, using the uniform approximation on fixed edges, and passing identities for local continuous functions to the limit. Gibbs comparison gives uniqueness for measures with these update kernels by conditioning and then sending the comparison volume to infinity; tails of the summable influence and its Neumann powers tend to zero. Hence every open-box exhaustion has the same local limit. The law respects translations and cubic symmetries, since the local bulk ratios and compatibility construction do.

For a bounded function f with coordinate oscillations \(\delta_i f\), expose the coordinates in order to form a martingale. Changing a revealed coordinate affects the conditional expectation of f by at most \(\big[(I-C)^{-t}\delta f\big]_i\), by the single-site [comparison theorem](https://arxiv.org/abs/1308.4117) on the remaining coordinates. The matrix \(C\) has Euclidean norm ≤1/2 by the simultaneous row and column bounds. Thus the sum of squares of martingale ranges is at most \(4\sum_i(\delta_i f)^2\). Conditional Hoeffding and exponential Markov give a Gaussian concentration bound uniform in the finite box, of the same bounded-difference form as the [Dobrushin concentration method](https://arxiv.org/abs/2006.05320). For \(V\), each \(\delta_i V\le8\) and the number of edges is bounded by a constant times P in these cubes. The Gaussian exponent is therefore \(-c t^2/P\) for deviations t, also for Haar (influence zero).

## The two bulk boundary laws are distinct

The integrated vacuum equation and its quadratic form give
\[
 \lambda_0=\gamma\mu_1(V),\qquad
 \lambda_0=\gamma\mu_2(V)-{\cal E},\qquad
 {\cal E}=\tfrac12\sum_i\|\nabla_i\Psi\|_2^2 .
\]
Select at least \(P/13\) plaquettes with disjoint edges by greedily using adjacency degree at most 12. A trial vector proportional to the product of \(1+t\tau_p\) over this set has one-factor norm square \(1+t^2/4\), and its Rayleigh contribution per selected plaquette is
\[
 \frac{\gamma t/2-6t^2/4}{1+t^2/4} .
\]
Expectations of other plaquettes are zero: expand the product-squared density by central edge parity; each odd selected factor carries the entire boundary of its own square, disjoint from other selected squares, and no union of these can equal an unselected single square. The selected one-factor cubic Haar moment also vanishes by parity. Hence \(t=\gamma/6\) gives \(\lambda_0\ge c\gamma^2P\). This is a legitimate gauge-invariant trial function.

In particular \(\mu_2(V)\ge c\gamma P\). Since \(LV=-6V\), integration by parts with \(\Psi^2\) gives \(\mu_2(V)=\frac16\sum_i\nu(\Psi\nabla_i\Psi\cdot\nabla_i V)\). Each edge belongs to at most four normalized traces and \(\|\nabla_iV\|_\infty\le4\); Cauchy–Schwarz yields \(|\mu_2(V)|\le C\sqrt{P{\cal E}}\). Therefore \({\cal E}\ge c\gamma^2P\). For the reverse inequality each plaquette mean in \(\mu_2\) is \(O(\gamma)\) by conditioning on a single edge of that plaquette and comparing its conditional law to Haar using the local log-ratio bound: the Haar conditional mean of the trace is zero. Hence \(\gamma\mu_2(V)\le C\gamma^2 P\), and \(\lambda_0\ge0\). The displayed identities now give the claimed difference of the two spatially averaged means. Uniform interior convergence from the ratio theorem, cubic symmetry and vanishing fraction of boundary plaquettes give the same bounds on each fixed plaquette in the bulk limit. By the [uniform-in-time free-boundary result](2026-11-25-free-boundary-bulk-limit.md) and the finite-box vacuum limit, the original final expectation is the bulk limit of \(\mu_1\), as claimed.

## Exponential partial singularity and a concrete global norm failure

Let \(A=\{V\ge c_0\gamma P\}\) with \(c_0>0\) less than half the lower-bound coefficient for \(\mu_2(V)\). Haar has mean zero, and concentration gives \(\nu(A),\mu_2(A^c)\le e^{-c_1\gamma^2P}\). By Cauchy–Schwarz on the two events, \(a=\nu(\Psi)\le\sqrt{\nu(A)}+\sqrt{\mu_2(A^c)}\). The reverse bound follows from bounded differences of \(g=\log\Psi\) under Haar: \(\delta_i g\le C\gamma\), so \(\nu e^{2(g-\nu g)}\le e^{C'\gamma^2P}\). Normalization gives \(1=\nu e^{2g}\), hence \(\nu g\ge-C''\gamma^2P\) and \(a\ge e^{\nu g}\). The same concentration separation works for \(\mu_1\) and \(\mu_2\) by splitting at the midpoint of their finite-volume means of V; the affinity of those laws also decays exponentially. These statements concern the actual vacuum, not a product trial overlap.

Indeed \(\mu_2(1/(a\Psi))=1\) and \(\mu_2((1/(a\Psi))^2)=a^{-2}\) exactly. The variance diverges exponentially for fixed weak γ as the box grows. This closes a specific tempting global norm approach even though local wavefunction ratios stay controlled. A local or connected boundary spectral estimate remains possible and is the next target. No fixed-coupling late-sign claim or spatial continuum conclusion is made.
