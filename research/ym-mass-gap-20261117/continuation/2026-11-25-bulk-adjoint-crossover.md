# Bulk crossover of the normalized adjoint witness: the collective mode has a diffusive tail

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [all-time finite-box theorem](2026-11-25-all-time-adjoint-sign.md) uses a single Perron mode to guarantee a positive infimum at large scaled time. That infimum cannot be uniform in volume. Here we take the bulk limit of the **whole second-order crossover** and calculate its decay, including the exact diffusion coefficient. This is a sequential weak-coupling limit, not a fixed-coupling infinite-volume Wilson theorem.

Use the same finite open cubic boxes of L unit cells per side, and keep p,q as a fixed adjacent pair up to translations towards the bulk. Let Q_L=D+B be the signless Laplacian of the plaquette adjacency graph, ρ_L its top eigenvalue, and
\[
 k_L(s)=(d_p+d_q)^* e^{s(Q_L-\rho_L I)/168}d_p.
\]
Here d_p is the coordinate vector for plaquette p, and s is the crossover time γ²T. The prior result identifies k_L(s)/896 with the γ→0 limit of −e^{δ_*T}hγ(T)/γ at T=s/γ² in each fixed box, for every fixed s>0. Our conclusions are:

1. For each s≥0, k_L(s) converges in the bulk to k∞(s), the same matrix element for (B∞−12I)/168 on the infinite labeled plaquette graph.
2. For fixed neighboring p,q,
\[
 k_\infty(s)>0,\qquad
 k_\infty(s)\sim\frac{2}{3}\left(\frac{4\pi s}{126}\right)^{-3/2}
 \quad(s\to\infty).
\]
3. The same equivalent holds for k_L(s) if s→∞ and s/r²→0, where r is the smaller Euclidean distance from p,q to the set of plaquette centers at which the finite graph has missing neighbors. In particular, in bulk-centered boxes it holds for 1≪s≪L². The finite-box Perron plateau does not describe that regime.

## Bulk Fourier matrix and its curvature

Label plaquettes by normal i∈{1,2,3} and a lattice corner. Work in Fourier coordinates using their actual centers, so phase factors on different orientations correspond to a diagonal unitary change from the integer-corner convention. A normal-i square has four same-orientation neighbors displaced by ±e_j, j≠i. It has four neighbors of each other normal j, displaced by (±e_i±e_j)/2 with independent signs. Thus B∞ has degree 12 and its Fourier matrix A(k), k∈[−π,π]³, has
\[
 A_{ii}=2\sum_{j\ne i}\cos k_j,\qquad A_{ij}=4\cos(k_i/2)\cos(k_j/2)\quad(i\ne j).
\]
The matrix A(0) has all entries 4, so its top eigenvalue 12 is simple and its projector has each entry 1/3. Away from k=0 its top eigenvalue is strictly less than 12. Indeed the row sums are at most 12, and for any nonzero component k_j every row loses either a diagonal cosine (i≠j) or an off-diagonal cosine (i=j). Off-diagonal entries are nonnegative throughout the zone; a real symmetric upper row-sum bound follows from 2v_i v_j≤v_i²+v_j². Near zero all entries are even in the k coordinates. As A(k)−A(0)=O(|k|²), simple-eigenvalue perturbation gives the order-two shift by averaging these entry changes against (1,1,1)/√3, with error O(|k|⁴). The diagonal deficits sum to 2|k|² and the ordered off-diagonal deficits also sum to 2|k|², so
\[
 \lambda_{\max}(A(k))=12-\tfrac43|k|^2+O(|k|^4).
\]
Dividing by 168 gives the isotropic diffusion coefficient 1/126 in the crossover variable s, not in the original physical time T.

Fourier inversion expresses any fixed bulk kernel entry as the integral of the corresponding matrix exponential entry times its center-displacement phase, with measure dk/(2π)³. The other two bands near zero and all momenta outside a neighborhood of zero contribute exponentially smaller terms. In the top band let k=u/√s. The projector tends to the all-1/3 matrix and each fixed-displacement phase tends to one. The quadratic upper bound for the exponent gives an integrable Gaussian majorant in u. This proves that each of the two entries contributing to k∞(s) is asymptotic to (1/3)(4πs/126)^{-3/2}; the same estimates bound the absolute value of *all* infinite kernel entries by C(1+s)^{-3/2}, uniformly in displacement and orientation. The entrywise strict positivity of the return entry for every finite s follows directly from the probability of no jump. This is a direct periodic-walk calculation in the spirit of [Ishiwata, Kawabi and Kotani](https://arxiv.org/abs/1510.05102); priority of the observable-specific application is unverified.

## Boundary error on growing boxes

Let P_s be the infinite walk with rate 1/168 per adjacent edge. On a finite graph, (Q_L−24I)/168 is the generator of the finite-neighbor walk killed at extra rate 2(12−D_pp)/168 at each vertex p. Realize it by using the infinite process, killing on departure from the box and additionally at rate (12−D_pp)/168 at interior locations with missing neighbors. The resulting kernel K_L(s) is symmetric and entrywise at most P_s. A difference in path contributions requires a visit to the finite boundary set (where degree is lost) before s. Decompose by whether there was such a visit in the first or last half of the path. In the first half, bound the remainder endpoint probability uniformly by C(1+s)^−3/2 using the Markov property at the first visit. For the second half, reverse paths under the symmetric infinite kernel with respect to counting measure and apply the same argument starting from the other endpoint. This yields, for the entries at issue,
\[
 0\le P_s(x,y)-K_L(s)(x,y)
 \le C(1+s)^{-3/2}\min(1,s/r^2),
\]
with a fixed constant after taking r≥1. In fact the centers of the infinite walk are a martingale (the twelve jumps occur in opposite pairs), with mean-square displacement at most Cs, so the first-half exit bound follows from the maximal inequality for its squared displacement. Finally, recenter from energy 24 to ρ_L by multiplying K_L(s) by exp[(24−ρ_L)s/168]. The [finite-box Rayleigh estimate](2026-11-25-plaquette-band-crowding.md) makes this factor 1+O(s/L²) when s/L² is small. These facts prove both fixed-s convergence and the joint s→∞, s/r²→0 asymptotic without assuming a volume-uniform Perron splitting.

## Checks, scope, and the next test

An independent exact enumeration of unit lattice edges checked all nine ordered normal-pair displacement sets against the Fourier symbol. The sums of squared *doubled* displacements along the axes were (8,12,12), (12,8,12), (12,12,8) from the three starting normals, respectively. Averaging, dividing by four to restore center coordinates, multiplying by the rate 1/168, and dividing by two to convert variance to the generator recovers 1/126 independently. A model that counts only coplanar neighbors misses the two perpendicular types of jump and gives the wrong coefficient. At late times the finite-box result tends to a positive Perron plateau of order at most L⁻³, whereas the infinite effective mode tends to zero as s⁻³ᐟ². Therefore a volume-uniform constant lower bound on the normalized crossover profile fails already for its leading operator; a polynomial lower profile is the correct candidate.

No nonzero fixed-γ limit of the normalized quotient is asserted. The proof takes γ→0 *first* in finite volume; the prior error estimates for the true effective operator and the boundary normalization are box-dependent and can swamp the s⁻³ᐟ² term. The next test is a local, relative-error bound for the true normalized witness on a growing crossover-time window, not a replacement of this polynomial decay by a constant. Neither this effective diffusion nor its coefficient is a spatial continuum limit of Yang–Mills.
