# Uniform connected-support decay of the finite Wilson vacuum log-Hessian

Use a finite graph with ordinary Wilson plaquettes using four distinct links, at most four plaquette terms incident to each link, and the unit-quaternion \(SU(2)\) metric. The dimensionless Hamiltonian is
\[
 H(t)=-\Delta-t\sum_p w_p,\qquad
 \Delta=\sum_e\Delta_e,\qquad
 w_p=\tfrac12\operatorname{Re}\operatorname{Tr}(U_p).
\]
Write \(\rho(t)=\Omega(t)^2\) for its normalized positive vacuum density relative to product Haar. Define \(d(e,f)\) as the shortest link-graph distance where two distinct links are neighbors if they belong to one common included plaquette; \(d=\infty\) if disconnected. The result refers to the actual finite Wilson vacuum at sufficiently small \(|t|\), uniformly in this class of graphs. It is not a weak-bare or continuum estimate.

## A weighted, tagged Fourier norm

A tag \(C\) is a nonempty connected set of included plaquette terms, with adjacency if two terms share a link. Let \(E(C)\) be the union of its links. Decompose a candidate logarithm into an indexed family \(u_C\), each a function on the product over \(E(C)\) with zero Haar mean. This is a tagged decomposition, not a uniquely determined support expansion of an arbitrary function. We solve for a family first. The actual Fourier support of a tensor can be smaller than the tag, and this is allowed throughout.

For \(\pi=\bigotimes_e\pi_{n_e}\) on \(G^{E(C)}\), let \(\pi_{n_e}\) be the highest-weight-\(n_e\) irreducible and put \(\lambda(\pi)=\sum_e n_e(n_e+2)\). Define norms on matrix coefficient expansions \(F=\sum_\pi\operatorname{Tr}(A_\pi\pi)\) by
\[
 \|F\|_{\cal A}=\sum_\pi\|A_\pi\|_1,\qquad
 \|F\|_{\lambda}=\sum_{\pi\ne{\bf1}}\lambda(\pi)\|A_\pi\|_1,
 \qquad
 \|u\|_\mu=\sup_e\sum_{C:\ e\in E(C)}e^{\mu|C|}\|u_C\|_\lambda,
 \quad \mu\ge0 .
\]
Here \(\|\cdot\|_1\) is matrix trace norm and components measured by \(\|\cdot\|_\lambda\) have zero mean. These are complete spaces at each finite volume; each connected tag meets at least one link, so the incidence norm is a norm. Extending a function by trivial representations to a larger tag preserves these component norms. The algebra norm is submultiplicative: expand products into tensor representations, unitarily decompose, remove off-diagonal isotypic blocks by pinching, and trace multiplicity indices. Pinching is trace-norm contractive by unitary averaging, and the partial trace is trace-norm contractive by duality with tensoring by identity in operator norm.

For one electric unit Killing generator \(Y_e^a\), the largest representation generator norm on \(\pi_{n_e}\) is \(n_e\) (conjugate to the unit torus generator). It follows that for each fixed direction \(a\)
\[
 \sum_e\|Y_e^a F\|_{\cal A}\le \tfrac13\|F\|_\lambda,\qquad
 \|Y_e^a F\|_{\cal A}\le\tfrac13\|F\|_\lambda,
 \tag{1}
\]
since \(n_e\le n_e(n_e+2)/3\) including \(n_e=0\).

Let \(Q\) subtract Haar mean on each tag. When forming \(\Gamma(u,v)=\sum_{e,a}(Y_e^a u)(Y_e^a v)\), send the ordered summand from tags \(C,D\) to \(C\cup D\). It vanishes identically unless the tags share an edge for the derivative, and then their union is connected. On that union apply \(Q\) and \((-\Delta)^{-1}\); call this tagged bilinear map \(B(u,v)\). Subtracting mean deletes only the trivial coefficient, and the energy weight cancels the inverse eigenvalue, hence
\(\|(-\Delta)^{-1}QF\|_\lambda\le\|F\|_{\cal A}\) on the union. Also \(e^{\mu|C\cup D|}\le e^{\mu|C|}e^{\mu|D|}\), even when a Fourier product cancels one or more active link labels. **Do not retag the reduced representations**: connectedness is used for geometry and can be lost by frequency contraction.

To verify the incidence bound, anchor a fixed output link \(i\in E(C\cup D)\) in the first tag or the second tag, overcounting if both. In the first case, fix \(C\) and sum the weighted partner derivative norm for each shared derivative edge \(e\): by (1) it is at most \(\|v\|_\mu/3\). Sum the first derivatives over all \(e\) in \(C\) using (1), then sum over \(C\) containing \(i\). This gives \(\|u\|_\mu\|v\|_\mu/9\) for one electric direction. Counting two anchor roles and three directions yields
\[
 \|B(u,v)\|_\mu\le \tfrac23\|u\|_\mu\|v\|_\mu .
 \tag{2}
\]

The source \(u_1\) has one component \(w_p/12\) for the singleton tag \(p\): four distinct fundamental factors give free Casimir 12. The normalized trace has algebra norm at most 8, by expanding the \(2\times2\) trace of four factors into 16 products of unit matrix coefficients of fundamental or dual representations, each with factor \(1/2\). Thus \(\|u_1\|_\mu\le M_\mu=32e^\mu\).

## Contraction and identification with the actual vacuum

Solve \(u=t u_1+B(u,u)\) by iteration from zero. For \(|t|\le 3/(16M_\mu)=3e^{-\mu}/512\), the ball of radius \(2M_\mu |t|\) is invariant and its contraction ratio is at most \(1/2\), by (2). Thus
\[
 \|u\|_\mu\le64e^\mu|t|.
 \tag{3}
\]
The same Banach estimates permit complex \(t\), with ordinary bilinear products, and uniform iteration on smaller disks gives a holomorphic solution inside the radius. This conclusion uses an actual contraction, not just bounded low-order coefficients. Real \(t\) gives real iteration and solution.

On each fixed lattice the untagged sum \(\bar u=\sum_Cu_C\) is \(C^2\): the total absolute Casimir-weighted Fourier sum is bounded by the number of links times \(\|u\|_\mu\). In constant electric frames every derivative of order at most two has a per-representation bound by a constant times its total Casimir, proving uniform termwise convergence on that finite group product. The sum of tagged mean subtractions equals subtraction of the global Haar mean. Consequently the exact real equation is
\[
 -\Delta\bar u=t\sum_pw_p+|\nabla\bar u|^2-
                 \int|\nabla\bar u|^2\,d{\rm Haar}.
\]
The product rule makes \(e^{\bar u}\) a positive eigenfunction of \(H(t)\); strict positivity of the compact heat kernel gives uniqueness of the positive normalized eigenfunction, so this is precisely \(\Omega(t)\) up to a constant factor. The logarithmic Hessian of \(\rho\) is that of \(2\bar u\). Identifying each weighted contraction in this way avoids requiring the redundant tagged families at different \(\mu\) to be compared to extract this Hessian.

## Cross-edge estimate and a conditional consequence

For distinct links \(e,f\) and unit tangent directions, the mixed covariant derivative in the product metric is just their iterated Killing derivative. In each tensor coefficient its size is bounded by \(n_e n_f\|A_\pi\|_1\le \lambda(\pi)\|A_\pi\|_1/2\). Gauge invariance is not needed for this step; since the identified ground is the actual gauge-invariant positive ground, the resulting bound is on its gauge-invariant density. Only tags containing both links can contribute. If a connected tag has \(m\) plaquettes and contains both links, a path of at most \(m\) of these plaquettes joins their respective plaquettes. Using a shared link at each transition gives \(d(e,f)\le m\). Including the factor 2 for density and anchoring at \(e\) now gives
\[
 \boxed{\ 
 \sup_U\|\nabla_e\nabla_f\log\rho(t,U)\|_{\rm op}
 \le 64e^\mu|t|\,e^{-\mu d(e,f)}
 \quad\text{if }|t|\le 3e^{-\mu}/512 .
 \ }
 \tag{4}
\]
There are no such tags for \(d=\infty\), so the mixed derivative is exactly zero there, including when \(\mu=0\). For example \(\mu=\log2\) gives \(128|t|\,2^{-d}\) for \(|t|\le3/1024\). For \(0<|t|\le 3/512\), choosing \(\mu=\log(3/(512|t|))\) instead gives
\[
 \sup_U\|\nabla_e\nabla_f\log\rho\|_{\rm op}
 \le \tfrac38\big(512|t|/3\big)^{d(e,f)}
\]
for finite \(d\) (it's exponential for strict inequality in the radius). At \(t=0\) the Hessian is zero. Equivalently at the level of exact Taylor support, iteration shows that a tag at order \(n\) uses at most \(n\) plaquettes, since unions add at most their input sizes. Thus all mixed coefficients of order \(<d(e,f)\) vanish. The bound (4) controls the unexpanded function regardless of this extra coefficient fact.

For a raw fixed-product path slice, a prefix coordinate affects two fine links \(S_j=\{U_j,U_{j+1}\}\). Two nonneighboring prefixes have disjoint \(S_j,S_k\); the mixed derivative of the coordinate map is zero since no fine link depends on both coordinates. The chain rule and (4) therefore bound mixed prefix log-Hessian by \(256e^\mu|t|e^{-\mu d(S_j,S_k)}\), with \(d(S_j,S_k)=\min_{e\in S_j,f\in S_k}d(e,f)\). The raw conditional log normalization depends on neither prefix, and each affected link changes with unit speed for a unit prefix velocity. This distance is in fine-link plaquette geometry, not index distance along a path that may fold back on itself.

For fixed other raw prefixes, changing \(V_k\) between two arbitrary values changes the conditional law of \(V_j\) by a controlled log-density ratio. Namely the oscillation, as a function of \(V_j\), of the difference of the two unnormalized log densities is at most the mixed prefix bound times \(\pi^2\), by integrating along two round minimizing paths. The two normalized log densities differ uniformly by at most that same constant, since the difference of log normalizers lies between the pointwise extrema of the original difference. This gives a local influence estimate, not a claim about arbitrary overlapping block maps, uniform behavior at large \(|t|\), or continuum physics.
