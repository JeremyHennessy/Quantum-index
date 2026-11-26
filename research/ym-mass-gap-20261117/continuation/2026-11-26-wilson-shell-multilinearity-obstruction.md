# Conditional product trials and a Wilson obstruction to multilinearity

**2026-11-26 UTC. Finite SU(2) identities. No claim about continuum decay.**

The [uniform one-link projection](2026-11-26-uniform-one-link-projection.md) captures at least 3/10 of conditional variance for centered linear functions by projecting onto the three transverse and one axial generator images. Two distinct questions are whether that fraction survives on independent link sets and whether the actual shell profile belongs to the required class.

## Tensor bound: yes, if the response is multilinear on that color

Fix exterior links, and let J be any collection of variable links such that no Wilson plaquette meets two of them. The conditional law is a product of the actual SU(2) tilted laws. Let \(V_e\) be the space of centered linear coordinates on link e, and \(W_e=\mathcal L_e V_e\). A multilinear function of the quaternion coordinates, excluding its constant term, decomposes orthogonally by nonempty support \(S\subseteq J\) into \(H_S=\bigotimes_{e\in S}V_e\), with constants off S. Choose a designated link \(e(S)\in S\) for each support. The trial space replaces \(V_{e(S)}\) by \(W_{e(S)}\) and leaves the other centered factors unchanged. Different supports remain orthogonal because each active factor has mean zero. The projection on each support is a one-factor projection tensored with identity. Consequently its squared norm on \(H_S\) is at least \(3/10\) of the input squared norm, and the orthogonal sum retains \(3/10\) independently of the number of active links. This is not a product of 3/10 factors. The resulting squared projection is bounded above by the conditional variance. When J is inside the larger box B, its equilibrium average is also bounded by the full loss \(Q_A-Q_B\), by projection ordering.

The algebra does not sum losses over different colors, which generally are not independent. Nor can one infer that projection captures the multilinear component of an arbitrary response in the presence of a cancelling nonlinear component. The Wilson conflict graph for links in four dimensions has maximum degree at most 18 on nondegenerate periodic lattices (six incident plaquettes, at most three other links each), so independent color sets exist. A bound on a color's share of the full shell variance is a separate issue. Compare [Petronzio–Vicari](https://www.sciencedirect.com/science/article/abs/pii/0370269390906942) for conditional integration on independent links in lattice estimators, not a claim of novelty for conditional factorization.

## Exact Wilson counterexample to closure under integration

A simple plaquette trace is linear in each distinct link quaternion before integration. This does **not** imply that its true equilibrium response after integrating even one link is multilinear on the remaining links.

On a four-dimensional torus of side at least four, choose an interior link U. In each of its six staples the opposite parallel link is distinct. Fix the other links of the staples to identity, except those opposite parallel links, and set their orientations/values so that the six effective staple quaternions in the density of U are \(I,V,I,-I,I,-I\). Thus V is a single variable exterior link (or its inverse, which is itself linear in quaternion coordinates); the four auxiliary staples cancel. The conditional weight of U is \(\exp[\beta\tau(U(I+V))]\), \(\tau=\tfrac12\mathrm{ReTr}\), regardless of terms not containing U. Take as raw observable the actual plaquette trace for the first staple, which on this section is \(\tau(U)\). Write \(x=\tau(V)\), \(s=|I+V|=\sqrt{2+2x}\). The conditional expectation of U is parallel to the conjugate staple direction, with mean length \(m_4(\beta s)\). The trace response is therefore
\[
 h(V)=(s/2)m_4(\beta s).
\]
The formula extends continuously through \(s=0\). The small-argument expansion \(m_4(t)=t/4-t^3/96+O(t^5)\) follows by expanding the tilted S³ integral: \(E_0[x^2]=1/4\), \(E_0[x^4]=1/8\). Consequently, for **every fixed β>0**, at \(x\downarrow-1\),
\[
 h(V)=\tfrac{\beta}{4}(1+x)-\tfrac{\beta^3}{48}(1+x)^2
       +O_\beta((1+x)^3).
\]
The nonzero quadratic coefficient proves non-affinity. The function is invariant under conjugation of V, so an affine quaternion function agreeing with it would have to be affine in x; averaging an affine candidate over conjugation gives just that form. The special section is not used as a probability event. All conditional responses are continuous in the other boundary links at fixed finite β; the affine subspace on a single link is closed in the supremum norm, so the positive distance on this section persists for nearby boundary configurations. The true finite Wilson marginal has positive density there. The observable is gauge-invariant, and its trace or any constant-centered version has the same non-affinity. This example refutes a general closure argument, not multilinearity or non-multilinearity of the particular registered trace after all block integrations.

The next proof obligation is an explicit estimate on the projected part and nonlinear remainder for the actual matched trace, or a method not requiring exact multilinearity. The starting norm and fixed physical shell loss on the ordered continuum path are still not bounded.
