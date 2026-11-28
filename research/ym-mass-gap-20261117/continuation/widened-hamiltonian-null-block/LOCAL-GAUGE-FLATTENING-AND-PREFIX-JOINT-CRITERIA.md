# Gauge flattening of a Wilson path, and the limit of one-prefix bounds

Let \(G=SU(2)\) with the unit-quaternion metric. Consider a finite edge configuration \(G^E\) with normalized product Haar and gauge action \(U_e\mapsto g_{s(e)}U_e g_{t(e)}^{-1}\). The density \(\rho=\Omega^2\) can be the actual finite-volume Wilson ground density. Its positivity, smoothness and gauge invariance follow from the positive, simple ground state of the Hamiltonian on the full product (the gauge group commutes with it). The exact gauge identities below in fact need only gauge invariance of the density. Statements about preserving fixed variables use only gauge transformations allowed by the boundary condition.

## Raw versus dressed spectator variables

Fix an oriented path of \(b\) distinct edges connecting vertices \(v_0,\ldots,v_b\), with distinct interiors not equal to either endpoint. An endpoint equality \(v_0=v_b\) is allowed for a simple closed path. The usual inverse is used for a link whose geometrical orientation is opposite the path. Put \(V_j=U_1\cdots U_j\), \(z=V_b\), and let \(W\) denote all nonpath links. Gauge with \(g_{v_j}=V_j\) on interiors and \(g_v=1\) elsewhere. If each interior gauge is allowed then exactly
\[
 (U_1,\ldots,U_b;W)\ \longmapsto\
 (1,\ldots,1,z;\widetilde W),\qquad
 \widetilde W_e=g_{s(e)}W_e g_{t(e)}^{-1}.
\]
Indeed \(g_{v_{j-1}}U_j g_{v_j}^{-1}=1\) for \(1\le j<b\) and equals \(z\) for \(j=b\). Thus
\[
 \rho(V,z,W)=\rho_{\rm flat}(z,\widetilde W),
 \tag{1}
\]
where \(\rho_{\rm flat}\) evaluates \(\rho\) at the displayed flat path. The triangular path product map preserves product Haar, so raw reference variables \(V_1,\ldots,V_{b-1},z,W\) are independent Haar. Conditional on \(V,z\), changing \(W\) to \(\widetilde W\) preserves its product Haar even when a spectator link has two interior endpoints. The total reference law in \(V,z,\widetilde W\) is therefore still product Haar. Equation (1) yields the exact factorization of the interacting law
\[
 d\mu = \left(\prod_{j=1}^{b-1}dV_j\right)
        \rho_{\rm flat}(z,\widetilde W)\,dz\,d\widetilde W .
 \tag{2}
\]
In particular given \(z,\widetilde W\), or given \(z\) alone, the joint prefixes are exactly product Haar. Neither is the same conditioning as fixing \(z,W\) with *raw* spectators. Holding \(\widetilde W\) constant as prefixes vary generally moves physical spectator links; (2) cannot replace the metric or conditional form for the raw fixed-spectator slice, nor does it give a product law on the other unfixed variables.

One consequence for a raw fixed-spectator slice is exact: by (1) only prefixes at vertices incident to a nonpath link can affect the density. Let their number be \(a\). Varying just these \(a\) prefixes one at a time and using the verified actual-Wilson two-link estimate gives, for ordinary three-dimensional nearest plaquettes,
\[
 \operatorname{osc}_{V}\log q_{z,W}(V)
 \le a B(t),\qquad B(t)=6\log 2+16\pi\sqrt{|t|},
 \tag{3}
\]
where \(q_{z,W}\) is the normalized density relative to prefix Haar. If \(t=0\) the oscillation is zero, and the better small-coupling bound from the two-link estimate may replace \(B(t)\). The exact Haar full-prefix gap and density comparison give a true joint gap **on this raw fixed-spectator slice**, in electric units,
\[
 \gamma_{z,W}\ge \frac{3(b-1)}{b}\exp[-a B(t)] .
 \tag{4}
\]
This is length-uniform if \(a\) is bounded, not for typical bulk paths where \(a\) can grow proportionally to \(b\). It is a joint oscillation comparison with a stated cost, not approximate tensorization or a proof for a full blocked vacuum.

## Exact symmetry criterion for a raw fixed-spectator slice

There is a stronger way the raw slice can be exactly Haar, even in the presence of nonpath links. Use the graph of all nonpath links with raw values \(W\); include isolated vertices. Gauge-frozen vertices and the path endpoints are required to have \(g_v=1\) here. Let \(H_W\) be the stabilizer of every \(W_e\) under these gauges. On a component, choose a root and for each \(v\) a tree path with transporter \(P_v\) from root to \(v\). Stabilization of tree edges is equivalent to
\[
 g_v=P_v^{-1}hP_v .
\]
On the other edges the necessary and sufficient conditions are that \(h\) commute with every based cycle holonomy. This follows by writing each nontree-edge equation with the root transporters; these fundamental cycles generate all cycles. A frozen vertex forces \(h=1\). Without a frozen vertex, the image at any single vertex is the conjugate of the centralizer of the cycle holonomies; it equals \(G\) exactly when they are all central (trees qualify).

Fixing the path endpoints ensures \(z\) does not change; on prefixes the action is \(V_j\mapsto V_jg_{v_j}^{-1}\). Consequently this stabilizer acts transitively on the full joint prefix space **if and only if**
1. each interior path vertex lies in a different off-path component from every other interior path vertex;
2. none of those components contains a frozen vertex or a path endpoint;
3. every cycle holonomy in each such component is central.

Sufficiency follows since the gauges at the interior vertices then range independently through \(G\). Necessity follows because any frozen vertex makes the entire component trivial, any noncentral holonomy forces a proper centralizer, and two interiors in the same component have gauges determined by a single \(h\), with fixed conjugation relation. Thus continuous positive gauge-invariant \(\rho\) is constant on these raw slices, giving exact reference Haar and its exact \(3(b-1)/b\) intrinsic gap on the full slice. Ordinary one-attachment spectator trees, or degree-two path interiors, are included. This is an iff for the **stabilizer-transitivity mechanism**, not a necessary condition for density flatness; the Hamiltonian can have additional accidental symmetries (e.g. \(\Omega\equiv1\) when \(t=0\)). Loops with noncentral holonomy are not removed by this stabilizer argument.

### Actual Wilson nonflat raw slice

Take one square plaquette with a single extra dangling edge. The chosen length-two path traverses one square edge and then the dangling edge, both in succession. The remaining three square edges are spectators. This is a finite Wilson Hamiltonian with one nonconstant magnetic term and the usual electric operator on all edges. The gauge quotient of the graph is the conjugacy class of its square holonomy: fix a spanning tree, leaving one edge with residual simultaneous conjugation. Thus the invariant positive ground state is a class function of the square product. It is nonconstant on that product for any \(t\ne0\); otherwise it is constant on all links and the ground equation contradicts the nonconstant single plaquette potential. At fixed path product and all raw spectators, the plaquette product is the first path link times a fixed spectator return product up to inversion/basepoint, with the dangling edge absent. The first prefix ranges bijectively over \(G\), so its actual conditional is nonconstant for each such slice. This also shows why unconditional factorization (2) does not force the raw conditional to be Haar.

## Uniform one-site gaps do not imply a joint gap

This abstract example uses the **same prefix reference metric**, not an actual Wilson vacuum. It rules out inferring a uniform joint bound from one-prefix Haar comparisons alone. Let \(n=b-1\), \(x_i=\operatorname{Re}V_i\). For \(0<\varepsilon<1\), define the smooth strictly positive normalized density
\[
 q_n(V)=\tfrac12\prod_{i=1}^n(1+\varepsilon x_i)
       +\tfrac12\prod_{i=1}^n(1-\varepsilon x_i).
\]
Given all other coordinates, the \(i\)-th density is a convex combination of \(1\pm\varepsilon x_i\). The conditional ratio is at most \((1+\varepsilon)/(1-\varepsilon)\), and every intrinsic twice-round slice gap is at least \(\tfrac32(1-\varepsilon)/(1+\varepsilon)\), arbitrarily close to the Haar slice value if \(\varepsilon\) is chosen small.

Nonetheless the joint gap tends to zero exponentially up to a polynomial factor. In each product component, \(x_i\in[-1,1]\) are independent with means \(\pm\mu\), \(\mu=\varepsilon/4>0\) because \(\int x_i^2\,dV_i=1/4\). For \(M=n^{-1}\sum_i x_i\), the elementary bounded-variable Chernoff/Hoeffding estimate gives
\(q_n\{|M|\le\mu/2\}\le e^{-n\mu^2/8}\). Take a smooth odd \(\psi\) equal to \(1\) above \(\mu/2\), to \(-1\) below \(-\mu/2\), with bounded derivative, and use \(f=\psi(M)\). Symmetry \(V_i\mapsto -V_i\) simultaneously implies zero mean, and its variance is at least \(1-e^{-n\mu^2/8}\). The full intrinsic prefix cometric is \(G_b=D_b^{-1}\) on prefix frames, where \(D_b\) is the Dirichlet chain. Its operator norm is \([4\sin^2(\pi/(2b))]^{-1}\le b^2/4\). Also
\[
 \sum_i|\nabla_i f|^2
 \le \frac{\|\psi'\|_\infty^2}{n}\,{\bf1}_{\{|M|\le\mu/2\}},
\]
because \(|\nabla x_i|\le1\). Hence the Rayleigh quotient in the actual intrinsic metric of this prefix manifold is at most
\[
 \frac{b^2\|\psi'\|_\infty^2}{4n}
 \frac{e^{-n\mu^2/8}}{1-e^{-n\mu^2/8}},
\]
which vanishes as \(n\to\infty\). The counterexample concerns the information supplied by single-site comparisons, not a Wilson counterexample, conditional mixing claim, weak-bare estimate or continuum conclusion.
