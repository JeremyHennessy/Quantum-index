# Uniform bound on the canonical cubic coefficient in the free band

2026-11-27 · Research-only result for the fixed-mesh pure SU(2) Hamiltonian in finite open cubic boxes. This controls a canonical coefficient, **not** a volume-uniform remainder, a selected eigenbranch, or a continuum mass gap.

Use $H(g)=H_0-gV$, $V=\sum_p W_p$ with normalized fundamental plaquette traces. Let $P$ be the physical free energy-15 band, $Q=I-P$, $R=Q(15-H_0)^{-1}Q$ (inverse only on $Q$), and $T=PVP$. In the canonical Hermitian band expansion, the coefficient of $-g^3$ is
$$
B_3=PVRVRVP-\tfrac12(T\,PV R^2VP+PV R^2VP\,T).
$$
The fold terms are essential. The direct three-insertion term alone is not supported only on connected face triples.

## Disconnected triples cancel exactly

Use the graph on the three insertion instances whose edges mean their plaquettes share a link (repeated plaquettes are adjacent). If the graph is disconnected, pick one isolated insertion $B$ and keep the other two in a fixed relative order $A_1,A_2$. In the ordered expansion, summing over both orders of the latter pair when distinct accounts for all words. With repeated $A_1=A_2$ use that order once. If all three faces are disjoint, choose any one fixed isolated face to partition the words.

Split the free edge Hamiltonian into the edge set of $B$, the union of the edge sets of $A_1,A_2$, and their complement. The three parts commute. Fix the initial and final partial energies and the intermediate partial energy after $A_1$. Let the increments of $A_1,B,A_2$ be $a,d,b$ respectively, so $a+d+b=0$. The three orders
\[
 A_1 A_2 B,\qquad A_1 B A_2,\qquad B A_1 A_2
\]
have the same numerator, since the isolated insertion and its partial energy projectors commute with both other insertions and their projectors. This argument covers entangled input and output via partial spectral resolutions and does not assume product states. Their respective double reduced denominators yield
$$
-\frac1{ad},\qquad \frac1{a(a+d)},\qquad \frac1{d(a+d)}.
$$
When $a,d,a+d$ are nonzero the sum is zero. A denominator zero means that path is missing, by $Q$. The exceptional cases are:

| Case | Single surviving direct shuffle | Total of its associated folded contributions |
| --- | --- | --- |
| $d=0$, $a\ne0$ | $A_1 B A_2$: $+1/a^2$ | $-1/a^2$ from $T=B$ at either end |
| $a=0$, $d\ne0$ | $B A_1 A_2$: $+1/d^2$ | $-1/d^2$ from $T=A_1$ first, using the two orders of the other insertions |
| $a+d=0$, $d\ne0$ | $A_1 A_2 B$: $+1/d^2$ | $-1/d^2$ from $T=A_2$ last, using the two orders of the other insertions |
| $a=d=0$ | none | none |

Each folded choice has coefficient $-1/2$ and the square of the one nonzero reduced denominator. No other folded choice satisfies its intermediate $P$ condition. All partial Casimir projectors commute with gauge transformations. This gives the cancellation in the physical band as well as on the unrestricted link space. Exact rational arithmetic verified the signed shuffle-and-fold identity for every pair of integer increments from $-30$ to $30$, covering all three singular cases and the fully zero case. The algebra proves it for arbitrary increments.

## Bound the connected contribution uniformly in the box

Fix an input Peter–Weyl edge label with occupied support $A$. The input is constant outside $A$. A triple entirely outside $A$ therefore must finish in the exterior vacuum after the final band projection. The product of the three face parities is nontrivial: if all three faces are distinct, one face has a link outside the other two because each pair shares at most one link; if any repeat, parity leaves a single face. Link-center flips commute with the free projectors and resolvents, so this exterior vacuum component vanishes in the direct and folded terms. The same gives zero for the vacuum's cubic coefficient.

Only connected triples that touch $A$ remain. Since every occupied link costs at least $3/2$, $\# A\le10$ and at most $m=40$ plaquettes touch $A$. A face has at most 12 distinct face neighbours sharing a link. Including itself gives at most 13 choices. Start at an insertion that touches $A$, then grow a connected list of three instances. The first next choice has at most 13 possibilities, and the last has at most 26. Counting all six permutations to recover the ordered triples yields at most
$$
C=6\cdot40\cdot13\cdot26=81120
$$
ordered triples per input label. Because $\|R\|\le2$, the direct term for an ordered triple has norm at most 4 and each fold at most 2, for a total bound 8. Each fundamental insertion permits at most $2^4$ output edge-label choices by Clebsch–Gordan decomposition. Thus each input label block has column norm at most $8C$ and nonzero output in at most $D=2^{12}C=332267520$ blocks. Self-adjointness gives the same block count for each row. The orthogonal block Cauchy–Schwarz argument of [the quadratic bound](UNIFORM-QUADRATIC-BAND.md) now gives
$$
\|B_3\|\le 8C\sqrt{D}=648960\sqrt{332267520}.
$$
The numerical constant is deliberately crude. In the zero-linear-slope block, actual branch coefficients can also involve eliminating the complementary slopes; that process introduces an inverse of the nonzero part of $T$. The canonical bound does not control that inverse, fourth and higher orders, or the size of a valid coupling interval (uniform or otherwise).

## Why this does not settle the next even order

A finite-dimensional control isolates the problem without making a claim about the lattice's actual slopes. In a basis with center parity $(+,+,-)$, choose the relative effective matrix
$$
\begin{pmatrix}
-a g^2 & k g^2 & 0\\
k g^2 & 0 & -\epsilon g\\
0 & -\epsilon g & 0
\end{pmatrix},\qquad a,k,\epsilon>0.
$$
Both quadratic and canonical cubic band terms are bounded uniformly as $\epsilon$ decreases (the latter is zero), and the zero-slope branch is even. Nevertheless its eigenvalue satisfies
$$
e=-a g^2+\frac{k^2g^4e}{e^2-\epsilon^2g^2}
=-a g^2+\frac{a k^2}{\epsilon^2}g^4+O_\epsilon(g^6).
$$
The first equality follows by eliminating the two nonzero-slope coordinates for sufficiently small nonzero $g$ at fixed $\epsilon$; substituting the leading term gives the second. Thus a bound on the first two canonical corrections cannot by itself bound the fourth coefficient of an individual zero-slope branch. A lattice-specific control of the inverse slopes or their couplings is still needed.
