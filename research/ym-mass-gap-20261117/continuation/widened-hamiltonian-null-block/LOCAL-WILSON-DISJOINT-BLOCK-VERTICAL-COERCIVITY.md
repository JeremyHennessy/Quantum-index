# Uniform vertical coercivity for a disjoint block of Wilson paths at small magnetic coupling

Work in the finite dimensionless unit-SU(2) Wilson model and with the actual vacuum from the uniform anchored-Fourier theorem. Keep \(\tau=|t|\le 1/1024\). Write \(u\) for the Haar-mean-zero log vacuum, so that \(\|u\|_*\le64\tau\) in the anchored total-Casimir Fourier norm. No volume restriction is required by that theorem. On the full fine-link space take any finite collection of pairwise **edge-disjoint** oriented paths, possibly sharing vertices. Within each path all fine edges are distinct. Retain each group-valued ordered path product, and retain any subset of links not in the paths. The remaining unretained links need not be frozen. This result concerns this exact blocking map, not overlapping paths or a momentum-space smoothing procedure.

Let \(Z\) denote the retained data and let \(P=\mathbb E_{\mu}[\cdot\mid Z]\) for the probability \(\mu=\Omega^2d\mathrm{Haar}\). On any fixed fiber of nonzero dimension use the intrinsic metric induced by the fine electric product metric. Every conditional law has a smooth positive version everywhere: each path is trivialized by its prefixes and product, all disjoint link coordinate maps are independent, and their reference measures disintegrate as product Haar. The claim is
\[
 \frac{2-1024\tau}{4}\,\|f-Pf\|_{L^2(\mu)}^2
 \le \int |\nabla_{\!\mathrm{vert}}f|^2\,d\mu
 \le \int |\nabla f|^2\,d\mu.
\]
In particular the same bound applies to any physical test function with \(Pf=0\), in electric units. Multiplying the right-hand Dirichlet form by the physical electric coefficient also multiplies the positive lower constant. Zero-dimensional fibers have zero conditional variance.

To see the new step, put the product round metric on all unfrozen prefix coordinates and all free nonpath links and test an arbitrary product-geodesic tangent \(X\). On an oriented path edge the fine-link speed contributions are the two adjacent prefix speeds (retained endpoints give zero). On a free nonpath edge there is just its own speed. On other fine edges there is no variation. In any Fourier summand with active support \(A=\{e:n_e>0\}\), both derivatives of its matrix coefficient are bounded using the unit Lie generator norm \(n_e\). More explicitly its second derivative is at most
\[
 \|A_{\mathbf n}\|_1 \Big(\sum_{e\in A} n_e s_e\Big)^2
 \le \lambda(\mathbf n)\|A_{\mathbf n}\|_1
 \left(
 4\sum_{j:\,\text{a path edge adjacent to }j\text{ lies in }A}|X_j|^2
 + \sum_{e\in A\cap\mathrm{free\ nonpath}} |X_e|^2\right),
\]
where \(s_e\) is the sum of the speeds influencing edge \(e\). Cauchy–Schwarz bounds the first factor by total Casimir. In the second factor \((a+b)^2\le2(a^2+b^2)\) followed by the two path edges per prefix yields 4. Distinct paths can meet at vertices without adding any coordinate incidences because the paths share no fine edge. Summing over Fourier labels at a prefix costs at most two anchored Casimir sums, and at a free nonpath link costs one. As a result the product-round Hessian operator of \(\log q_Z=2u+\mathrm{constant}\) is bounded by \(16\|u\|_*\le1024\tau\) on every fixed fiber, even with many conditioned paths. This uses the actual joint vacuum, not independence of its conditional densities.

The product-round conditional gap is at least \(2-1024\tau\) by integrated Bochner on the product of unit 3-spheres. The true intrinsic metric in the same prefix frames is block diagonal: one Dirichlet chain metric for every path with at least one prefix, plus a unit block for free nonpath links. Each inverse chain block dominates \(I/4\), so the vertical form dominates one fourth of the product form. The resulting conditional variance inequality can be integrated over \(Z\). The full form dominates the vertical one by pointwise orthogonal projection onto the fiber tangent. The proof does not assert that the vertical form closes a coarse marginal Poincaré estimate or a coupling bound at arbitrary Wilson scales; in particular small magnetic \(t\) does not approach the physical weak-bare continuum trajectory.
