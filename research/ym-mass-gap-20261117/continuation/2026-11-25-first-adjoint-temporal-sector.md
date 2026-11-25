# The first adjoint temporal sector has a negative linear residue

**2026-11-25 | Fixed spatial lattice, continuous time | Research only.**

Use the exact auxiliary expansion of the original free-terminal quotient from the [four-link bound](2026-11-25-gauge-filtered-complex-time-decay.md), with t weighting each nonconstant heat factor and t⁴ weighting each plaquette bridge factor. Let the successive slab lengths from the fixed initial field to the source be \(\ell_1,\dots,\ell_n\), and let \(h(t,z)\) be the Haar overlap with R and final source \(F=\tau_p\). The physical signal is at t=1. For the adjacent square q, the first **possible** temporal sector for this witness is degree \(4n+3\), not \(4n\). Its linear term in z is strictly negative for sufficiently large \(\ell_1\). More precisely, holding \(n\) and subsequent slab lengths arbitrary,
\[
 e^{6(\ell_1+\cdots+\ell_n)}
 \left.\partial_z[t^{4n+3}]h(t,z)\right|_{z=0}
 \ \longrightarrow\ -\|R\|_2^2/42=-1/896
 \qquad(\ell_1\to\infty).
\]
The scaled expression on the left depends on the first slab length alone, not n, the other lengths or the spatial box (provided both plaquettes are present). This is a signed coefficient in an exact auxiliary expansion, not a sign theorem for fixed z at t=1.

## Exact centered propagation through the slabs

Let \(K_i(t,z)\) denote the weighted transfer on slab i, acting backwards on invariant functions, and let \(P\) be the Haar-constant projection, \(Q=I-P\). The forest rule gives \(K_i=P+\sum_{j\ge4}t^j M_{i,j}\). Every summand of \(M_{i,j}\) has spatial dependence on at most j input links: a heat factor uses one link and costs one degree, a bridge plaquette uses four and costs four. For j=4 the nonzero nonconstant contributions come only from a single plaquette bridge or heat corrections on the edges of an elementary square. A subset of at most four heat edges that is not an elementary square is a forest. Each nonconstant output from such a single-square kernel is therefore a mean-zero class function of one plaquette holonomy. Distinct one-plaquette mean-zero classes are orthogonal by integrating an edge missing from the other plaquette. All are orthogonal to R, which is nontrivial on seven specified links.

For the tail beginning on slab i denote the numerator and denominator by \(N_i,D_i\), with \(N_{n+1}=F,D_{n+1}=1\). Define \(a_i=\nu(N_i)/\nu(D_i)\) and \(J_i=N_i-a_iD_i\), so \(\nu(J_i)=0\). Here \(\nu\) is Haar. The exact recursion is
\[
 J_i=K_iJ_{i+1}-D_i\frac{\nu(K_iJ_{i+1})}{\nu(D_i)}.
\]
Also \(D_i=1+O(t^4)\) and \(K_iJ_{i+1}=O(t^4)J_{i+1}\) in formal degree because \(PJ_{i+1}=0\). Thus \(J_i\) starts at degree \(4(n-i+1)\). Through three degrees beyond that minimum the recursion reduces to \(QK_iJ_{i+1}\): the difference has a factor \(D_i/\nu(D_i)-1=O(t^4)\). Likewise \(1/D_1=1+O(t^4)\), so Haar pairing with mean-zero R gives the same coefficients from \(J_1\) up to degree \(4n+3\). The first transfer must use at least seven spatial links to hit R, otherwise averaging the missing link kills the overlap. Hence the coefficients through \(4n+2\) are all zero and the degree \(4n+3\) term is
\[
 \langle R,M_{1,7}\,Q M_{2,4} Q\cdots Q M_{n,4} QF\rangle .
\]
When \(n=1\) the product after \(M_{1,7}\) is just F. No nonlinear terminal denominator or replica contribution is discarded below its actual degree.

## The only linear interaction in this coefficient

At \(z=0\) all \(M_{i,4}\) propagate \(\tau_p\) with multiplier \(\exp(-6\ell_i)\) and preserve the entire single-square class-function subspace. The pure-heat \(M_{1,7}(0)\) is diagonal in the link representation sectors; it cannot take a single-square function to R. Thus only the derivative of \(M_{1,7}\) can contribute linearly in z. It uses exactly one bridge plaquette and three heat corrections. To use seven required links, their supports must be disjoint and contained in the seven-link union of p and q. Its only elementary squares are p and q. Using p as the bridge leaves heat corrections on q-exclusive edges, and integrates to zero because \(F=\tau_p\) does not depend on their terminal links. Therefore the unique interaction choice is q, with a heat factor on each of the three p-exclusive edges. These contribute \(\exp(-9\ell_1/2)\) exactly on their fundamental components.

Put \(\ell=\ell_1\) and insert the q interaction at time \(u\in[0,\ell]\). On each q-only edge the terminal link is integrated against Haar, not against its heat kernel. For its fundamental matrix \(D\), the effective bridge one-point function is obtained by inserting \(D(w)\) in the bridge density \(k_u(x,w)k_{\ell-u}(w,y)/k_\ell(x,y)\) and integrating y. For fixed u it tends to \(e^{-3u/2}D(x)\) as \(\ell\to\infty\); its uniform norm is bounded by \(C e^{-3u/2}\) for \(\ell\) sufficiently large. For the latter bound, replacing \(1/k_\ell(x,y)\) by 1 has error \(C e^{-3\ell/2}\) after integration, by the one-link heat series and the convolution identity. The same analysis holds for inverse matrices, which are linear in quaternion coordinates.

On the shared edge, a product of fundamental entries \(f(w)g(y)\) appears because p has a terminal fundamental there. For fixed u, first integrate y:
\[
 e^{3\ell/2}\int
       \frac{k_{\ell-u}(w,y)}{k_\ell(x,y)} g(y)\,d\nu(y)
 \longrightarrow e^{3u/2}g(w)-g(x).
\]
Indeed the zeroth kernel term integrates to zero, and the first Peter–Weyl correction projects exactly onto fundamental entries; the two terms are respectively the later kernel and its bridge normalization. This uses the standard [compact-group heat-kernel expansion](https://arxiv.org/abs/math/0604500) in the unit-quaternion metric. Multiply by \(f(w)\) and integrate against \(k_u(x,w)\). On the shared-edge spin-1 component, the first term decays as \(e^{3u/2}e^{-4u}\), the second as \(e^{-3u/2}\); these act respectively on the same spin-1 projection of the product. The contractions of the other six edges therefore give exactly R times
\[
 e^{-9u/2}(e^{-5u/2}-e^{-3u/2})=e^{-7u}-e^{-6u}.
\]
For domination uniformly over \(0\le u\le\ell\), the rescaled shared-edge integral has norm at most \(C(e^{3u/2}+1)\): use the free heat integral of g and the same uniform \(1/k_\ell-1=O(e^{-3\ell/2})\) estimate against positive \(k_{\ell-u}\). The other three q edges then majorize the product by \(C e^{-3u}\), independent of \(\ell\). Dominated convergence and the three p-only heat factors prove the scaled limit \(\|R\|_2^2\int_0^\infty(e^{-7u}-e^{-6u})\,du=-\|R\|_2^2/42\). All subsequent free factors cancel under the displayed rescaling.

## Controls and limit of the claim

If the reciprocal bridge kernel is replaced by 1 **before** extracting its first correction, the surviving integral is instead \(+1/7\) times \(\|R\|_2^2\). Its omitted correction is \(−1/6\) times that norm. This wrong-sign control locates a normalization effect already inside the first allowed sector, before extra degrees from the final quotient denominator. The coefficient \(-1/896\) matches the aggregate unshifted slow linear coefficient in the earlier direct time calculation, but this does not yet bound the other auxiliary sectors at t=1 at fixed z or on the \(\gamma^{-2}\) crossover. The next question is to control the additional sectors *relative* to this signed term, without treating degree in t as an automatically small physical parameter. This is a lattice calculation, not a result about the continuum mass gap.
