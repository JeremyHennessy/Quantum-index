# Open four-square Wilson strip: three simple perimeter-scale levels

**2026-11-27. Fixed-spacing, isotropic in the temporal link kernel, small spatial coupling.** This neither proves a physical gap nor asserts originality relative to the literature.

Take the straight open strip of four elementary squares, with temporal link Wilson parameter 1 on all 13 edges. Write K for the physical convolution with vacuum eigenvalue 1 and V for the sum of the four half traces. The transfer operator exp(b V/2) K exp(b V/2) has the same nonzero eigenvalues as K^(1/2) exp(b V) K^(1/2), by the two-product factorization. The identification is reflection equivariant.

## Exact zero-coupling band
Use the gauge-invariant spin-network basis ([Burgio et al.](https://arxiv.org/abs/hep-lat/9906036)). Collapse the two outer length-three paths through bivalent vertices. Each of the six remaining trivalent vertices has a one-dimensional invariant space precisely for its admissible triple. The nine edge labels have multiplicities (3,3,1,1,1,1,1,1,1); label n denotes spin n/2. Each uncollapsed edge contributes a_n = I_(n+1)(1)/I_1(1). The perimeter eigenvalue is lambda = a_1^10.

The 16 binary labellings are exactly mod-2 boundaries of face subsets; for a subset S with r contiguous runs, the weight is 2|S|+2r. Weight 10 consists of 1234, 124 and 134. Their normalized basis functions are respectively tr(X1 X2 X3 X4), tr(X1 X2) tr(X4), and tr(X1) tr(X3 X4). Here bottom edges and vertical rungs form the gauge-fixed spanning tree, and X_i on the remaining top links are independent Haar SU(2). Signs/orientations can be fixed consistently; traces of inverse matrices equal traces. The loop factors have unit norm and distinct link parities give orthogonality.

The included script bounds the Bessel sums by rational partial sums through k=12 and twice the next term (subsequent term ratios <1/2). It enumerates all 239 admissible labels of weight <=16. Apart from the three indicated labels, their eigenvalue ratios to lambda lie below 0.68 (216) or above 3.7 (20). The omitted labels have ratios <0.001: termwise I_(n+2)(1)/I_(n+1)(1) <= 1/(2(n+2)), n>=1, and a_1<1/4, hence a_n <= (1/4)^n. The bound is on the whole invariant Hilbert space, not the numerical spectrum of a truncated operator.

## First-order matrix and reflection
Multiplying by a single half trace flips exactly that face's mod-2 edge parity. Inside the band only the two perimeter-to-disconnected entries are permitted. Both equal 1/8: for 124, integrate X3 in tr(X1 X2 X3 X4) tr(X3)/2 to obtain tr(X1 X2 X4)/4, and then integrate X4 against tr(X4), giving tr(X1 X2)/2. The last trace has squared norm 1. Reflection gives the other entry. Thus the first-order matrix has eigenvalues -sqrt(2)/8, 0, +sqrt(2)/8. Its zero eigenvector is the reflection-odd difference of the two disconnected states; the others are even.

## Certified nonzero spatial coupling b=0.001
Normalize K by lambda and denote it by D. Let P be the exact rank-three free projection, Q=1-P. The eigenvalues of A=D^(1/2) exp(bV) D^(1/2) belonging to the band stay in [0.98,1.02] under the min-max comparison (1-4b)D <= A <= D/(1-4b). The free exterior gap and the same comparison leave exactly three roots there, also in fixed reflection sectors (two even, one odd).

For any trial spectral parameter z in this interval, the sandwiched free exterior resolvent is (I-z D_Q^(-1))^-1, understood via the bounded diagonal multiplier d/(d-z). Its norm is <5/2 from d<0.68 or d>3.7. A Neumann series for the bounded perturbation Q(exp(bV)-I)Q gives the corresponding interacting sandwiched resolvent norm <3. This identity works also at the compact operator's accumulation point d=0 by multiplier continuity; the unsandwiched exterior resolvent is defined at these positive z. With rho=4b, delta=rho/(1-rho), the Schur complement differs from I+bPVP-zI by at most rho^2/[2(1-rho)]+3 delta^2 <0.000057. The first term bounds the Taylor remainder of the P block and the second bounds both off-block factors and the sandwiched resolvent.

At the exact +/-0.000057 endpoints around each linear center the signs of the scalar odd block or the two even block eigenvalues agree with the linear matrix, by the strict error bound. The exterior has constant inertia above zero across the interval, so Schur inertia gives precisely one eigenvalue in each respective window. Outward decimal enclosures in units of lambda (not divided by the interacting vacuum):

| Lower | Upper | Reflection |
|---:|---:|---|
| 0.999766 | 0.999881 | even |
| 0.999943 | 1.000057 | odd |
| 1.000119 | 1.000234 | even |

The Wilson transfer kernel is strictly positive, so its unique positive vacuum is even. Therefore the isolated odd level is **exactly invisible to every reflection-even probe**, including sums of mirror-related half traces, at this nonzero coupling. The asymmetric one-square probe is not covered by that obstruction. Detection of each eigenmode by such an asymmetric probe is the next separate test, not established here. Neither this result nor the earlier three-square overlap resolves the weak-coupling 4D continuum requirement of [Jaffe and Witten](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf).

Replay: python3 verify.py, standard library only.
