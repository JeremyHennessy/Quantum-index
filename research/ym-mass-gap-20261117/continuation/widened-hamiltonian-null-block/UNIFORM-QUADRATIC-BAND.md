# Uniform bound on the vacuum-subtracted quadratic free-band operator

2026-11-27 · Pure SU(2) Hamiltonian on finite open cubic boxes, at fixed spatial mesh. This is a bound on a perturbation coefficient at zero magnetic coupling, **not** on the perturbative remainder or any interval uniform in the box size.

## Result

Use $H(g)=H_0-gV$ with $V=\sum_p W_p$, $W_p$ the normalized fundamental plaquette trace. Here $\|W_p\|\leq1$, each fundamental occupied link has free energy $3/2$, and the free spectrum is half-integral. Let $L$ be the number of elementary faces, $P$ the physical free energy-15 band, and $Q=I-P$. Define the self-adjoint vacuum-subtracted quadratic coefficient on $P$ by
$$
B=P V Q(15-QH_0Q)^{-1}Q V P+(L/24)P.
$$
Then, in every such box, including open boundary plaquettes,
$$
\|B\| \leq (6005/3)\sqrt{256001}.
$$
The same bound holds for the compression to the kernel of $PVP$, so all vacuum-relative quadratic coefficients in that zero-linear-slope sector lie in the corresponding fixed interval. The constant is purposely crude.

## 1. Exact disconnected cancellations

For disjoint edge sets $p$ and $r$, split the free Hamiltonian as the sum of the three mutually commuting edge-energy operators on $p$, $r$ and their complement. Decompose the input and output into joint free-energy sectors for this split. They each have total energy 15. A contribution of two insertions can reach the output only if the two sector increments obey $\delta_p+\delta_r=0$; the third increment is zero. Multiplication on disjoint edge sets commutes, and it commutes with the partial free-energy projectors on the other sets. Therefore the two paths have the same numerator. If the increments are nonzero, the two reduced resolvent denominators are $-\delta_p$ and $-\delta_r$ and cancel. If both are zero, both intermediates are killed by $Q$. This also covers disjoint insertions which both intersect the initial state's support. The partial energy projectors preserve gauge invariance, since each link Casimir commutes with both endpoint gauge actions. Thus the only remaining mixed pairs share a link.

For clarity, the general disjoint calculation does not require that the input be a product tensor. It suffices to check joint input and output energy sectors; in each such matrix entry the two intermediate energy shifts are determined by the changed sector. As a simple check, transferring a single elementary loop between two disjoint faces gives the two scalar denominators $+1/6$ and $-1/6$ with the same link-product numerator.

Fix an input edge label (all link spins specified) with occupied edge set $A$. Its physical vectors are constant in every link outside $A$. If both faces in a pair are exterior to $A$, the $A$ component remains at energy 15, so final compression forces vacuum in the exterior. For distinct faces the vacuum expectation is zero: choose a link belonging to one face but not the other, and flip its center sign. For $p=r$ exterior, the intermediate is at $15+6$, and $\|W_p1\|_2^2=1/4$ by Haar integration. This gives $-1/24$ times the input and cancels the corresponding term in $+(L/24)P$.

## 2. Count local pairs and output edge labels

Use the orthogonal Peter–Weyl decomposition of the physical band by the complete assignment of link spins. Each gauge-invariant block may have intertwiner multiplicities; no choice of their bases enters the estimates. Write $P_j$ for the block at label $j$. Its support $A_j$ has at most ten links since each nonzero spin costs at least $3/2$. Each link belongs to at most four faces, so at most $m=40$ faces touch $A_j$. Each face shares a link with at most $\Delta=12$ other faces, three competitors per link. Part 1 leaves at most
$$
m(1+2\Delta)=1000
$$
ordered pairs: at most $m$ equal-face terms, and at most $2m\Delta$ unequal ordered pairs in which a face touches $A_j$. Each surviving term has operator norm at most 2 because the free reduced spectral distance is at least $1/2$. The uncancelled vacuum subtraction contributes at most $m/24$ on this input block. Therefore $\|B P_j\|\leq2000+40/24=6005/3$.

One fundamental insertion changes each of four link spins by one of the two Clebsch–Gordan choices $j_e\pm\frac12$, with invalid choices omitted, and preserves all other link labels. Free projectors and the free reduced resolvent preserve the edge-label decomposition. Two insertions hence lead to at most $2^8=256$ output labels for each pair, regardless of intertwiner dimension. Including the surviving scalar term gives at most $D=1+1000\cdot256=256001$ output blocks in any column. Hermiticity gives the same count for input blocks in each row.

## 3. Sum the blocks without paying for box volume

For $u=\sum_j u_j$ in the free band, use Cauchy–Schwarz in each output row, then the individual column bound:
$$
\|Bu\|^2
=\sum_i\Big\|\sum_j P_iB P_j u_j\Big\|^2
\leq D\sum_j\sum_i\|P_i B P_j u_j\|^2
= D\sum_j\|B P_j u_j\|^2
\leq D(6005/3)^2\|u\|^2.
$$
This is not an estimate on $\|V\|$, which still grows with the number of faces. Nor does it assert stability of the perturbed energy-15 band or a volume-uniform lower bound on the nonzero slopes of $PVP$. Control at higher orders and along a spatial continuum trajectory is not provided.

The use of disconnected-pair cancellation is related to general linked-cluster methods. For context see [Bravyi, DiVincenzo and Loss](https://arxiv.org/abs/1105.0675); the argument above directly handles this excited free band using its exact additive edge energies. No literature priority is asserted.
