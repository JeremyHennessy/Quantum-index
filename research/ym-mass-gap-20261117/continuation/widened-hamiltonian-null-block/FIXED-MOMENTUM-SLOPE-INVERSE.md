# The reduced first-slope inverse at a fixed total momentum

November 27, 2026 · Coefficient-level result for the infinite spatial SU(2) lattice at fixed spacing. It does not establish a perturbation series for the interacting infinite-volume Hamiltonian.

Let $T=P_{15}VP_{15}$ in the free energy-15 band. Use the near/far decomposition in [the even-fibre note](EVEN-QUADRATIC-FIBRES.md), but **keep both center parities**. For jointly translated near supports there are finitely many shapes and intertwiner coordinates per translation. For far $4+6$ supports choose the four-loop anchor as translation origin, with the second anchor specified by the separation. Retain whole detached blocks. A first-order move in a far block does not change either anchor. Consequently at any fixed canonical total momentum $k$ the first-order matrix is the orthogonal direct sum
$$
T(k)=T_{\rm near}(k)\oplus\bigoplus_{r\,\mathrm{far}}T_r .
$$
Here $T_{\rm near}(k)$ is finite Hermitian; a complete detached component has the first-order entries of the elementary loop (zero) and of a fixed energy-9 unit cube or immobile rectangle, independent of $k$. The nonzero spectrum on every detached block is a subset of $\{\pm1/2,\pm\sqrt{3}/2\}$ by the [exact low-band replay](SEPARATED-CHANNEL.md). In particular the infinitely many far blocks contribute no nonzero slopes approaching zero. If there are several orientations at a given separation they are counted in the block; no completeness claim about the near spectrum is used.

Let $N(k)$ be the pointwise kernel projection, $M(k)=1-N(k)$, and let $\delta(k)$ be the minimum of $1/2$ and the absolute values of the nonzero eigenvalues of the near matrix (ignore any empty set). For **each fixed** $k$, including $k=0$, $\delta(k)>0$. The inverse $S(k)$ equal to $T(k)^{-1}$ on $M(k)$ and zero on $N(k)$ is therefore bounded:
$$
\|S(k)\|\le\delta(k)^{-1},\qquad \|S(k)|_{\rm far}\|\le 2 .
$$
Its near block stays in the finite shape space. Each far block of it has the same anchors as its input. Thus the kernel projection and the reduced inverse both preserve bounded support in the relative coordinate in this fixed fibre. This is not a uniform estimate over $k$: a near-matrix slope could vanish at a rank-changing momentum.

## Consequence for the folded cubic coefficient

Let $B$ be the vacuum-subtracted quadratic coefficient and $B_3$ the canonical cubic coefficient with sign convention of [the finite-box calculation](THIRD-ORDER-PARITY.md). Use their connected local stencils to define $B(k)$ and $B_3(k)$. These stencils are bounded at fixed $k$ by the same row/column bounds as their [quadratic](BINARY-QUADRATIC-BOUND.md) and [cubic](UNIFORM-CUBIC-BAND.md) calculations: taking a Bloch fibre only multiplies blocks by unit phases and may sum previously separate terms for the same target shape. The triangle inequality preserves the row/column bounds. Extensive scalar subtractions in $B$ do not enter the fold because $N(k)M(k)=0$.

The pointwise operator
$$
\mathcal C_3(k)=-N(k)B_3(k)N(k)+N(k)B(k)S(k)B(k)N(k)
$$
is thus a well-defined bounded **folded coefficient**. In particular
$$
\|\mathcal C_3(k)\|\le\|B_3(k)\|+(695/12)^2/\delta(k).
$$
It is center odd. Applied to the local even probe at any fixed $k$, its odd output lies in a finite relative-coordinate region: each linked pair or triple changes support only within a bounded neighborhood of an occupied input edge, while $S(k)$ and $N(k)$ do not carry a near input to arbitrarily large separations or move a far anchor. To see the locality for a linked triple, any nontrivial connected cluster must meet the occupied input: otherwise the input is a spectator, and a nonzero output at the same energy would require the new cluster to be in the vacuum, which its odd center parity forbids. This reduces the coefficient-level mixing calculation to a finite target problem in relative coordinates. It does not show the odd output is nonzero, has weight at the energy of an even eigenvector, or describes an interacting resonance.

## The essential odd quadratic spectrum is exhausted by the separated channel

At each fixed $k$, the odd null space is the orthogonal sum of its finite near part and the separated channel at all sufficiently large relative displacements. Outside that finite region it has the full $3\cdot14$ internal directions, with the same two independent orientation bases and the same Euclidean lattice indexing. Fill the finitely many omitted relative sites of a full $\ell^2(\mathbb Z^3;\mathbb C^{42})$ separated reference space, and append the finite near part. This only adds a finite-dimensional summand to the actual odd null space.

Under this identification, the odd quadratic operator (extended arbitrarily on the added finite summand) and the reference convolution operator direct summed with any finite near matrix agree on inputs supported beyond some fixed larger relative radius. Indeed the [separated-channel argument](SEPARATED-CHANNEL.md) gives equality there before and after the null projections, and the hopping range is finite. Their bounded difference is therefore finite rank. By invariance of essential spectrum under finite-rank self-adjoint perturbations, the essential odd spectrum is exactly
$$
\bigcup_{p\in\mathbb T^3}
\operatorname{spec}\big(B_6(p)\otimes I_{14}+I_3\otimes B_{9,\mathrm{null}}(k-p)\big).
$$
Fourier transformation in the relative coordinate gives the displayed matrix symbol. It is continuous; every point in its spectral range has spectral weight in arbitrarily small energy neighborhoods on sets of positive momentum measure, establishing the full essential range, not just almost-everywhere inclusion. There are no other far channel shapes at free energy 15. All of these are properties of the quadratic coefficient and do not constitute scattering of the interacting Hamiltonian.
