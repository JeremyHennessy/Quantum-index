# Equal-coupling Wilson slabs: arbitrary fixed depth and a genuine spin-1 channel

**2026-11-25 | Research continuation | Phase 15 not activated.**

Extends the [three-slice bent-loop calculation](2026-11-25-equal-coupling-bent-loop.md). Keep the spatial box, p, q, shared edge e, and bent six-edge cycle C. Take 2d+1 time slices for any fixed integer d≥1. All spatial and temporal plaquettes are active at the same Wilson coupling β. Let A_d be the conditional mean of the upper endpoint trace τ_p given the middle spatial links. τ is the normalized trace. Q denotes the product-Haar Peter–Weyl projector onto spin 1 on e, spin 1/2 on the six edges of C, and the trivial representation elsewhere. Write R=Q(τ_p τ_q).

Then, as β→0 in each fixed finite box at each fixed depth,

\[
\Pi_C A_d=\frac{\beta^{4d+3}}{4^{4d+3}}\tau_C+O(\beta^{4d+5}),\qquad
Q A_d=-\frac{\beta^{4d+5}}{48\cdot4^{4d+2}}R+O(\beta^{4d+7}).
\]

In particular R≠0, and the second coefficient does not vanish. This is nonclosure even if the retained linear subspace contains **all** spin networks with only trivial or fundamental representations on each link. Arbitrary nonlinear postprocessing is a different question: products of fundamental loops need not stay in that linear space.

## Normalized transfer and filtration

Use temporal gauge on the half-slab. The temporal links form a forest, which can be fixed to the identity by Haar-invariant changes of variables, with the middle links unchanged. A side-face weight then joins one edge on successive spatial slices through a central kernel. Let K be convolution by the product of these single-edge kernels, each with density proportional to exp(βτ). Let M=exp(β∑_r τ_r) on a spatial slice, with all spatial plaquettes r included. Define D_0=1, H_0=τ_p, D_d=K(MD_{d−1}), H_d=K(MH_{d−1}). Then A_d=H_d/D_d. The middle spatial weight cancels in this quotient but is present in the equilibrium middle marginal.

A product representation with link spins j_e is multiplied by ∏_e λ_{2j_e}, where λ_n=I_{n+1}(β)/I_1(β). Integrating χ_{n/2}/(n+1) against the single-edge density gives this ratio by sine orthogonality and the Bessel recurrence. In particular λ_n=O(β^n), λ_1=β/4+O(β³), and λ_2=β²/24+O(β⁴). Define the cost of a representation as ∑_e 2j_e. Gauge-invariant nonconstant representations have cost at least four: a vertex touched by exactly one nontrivial edge admits no invariant, and the open cubic graph has girth four. A parity-C term costs at least six. Q costs eight. K preserves parity and gauge invariance. These order statements can be used coefficientwise: all inputs at each Taylor degree are finite polynomial combinations of matrix coefficients; the fixed finite integrals and positive-at-zero denominator give analytic functions in the uniform norm.

Let angle brackets denote the product-Haar mean. For d≥1 the nonconstant part of D_d is O(β⁵), with leading term β⁵∑_rτ_r/4⁴. Indeed M starts at 1+β∑_rτ_r; D_{d−1} has no nonconstant term before degree five by induction, and K raises the nonconstant order by at least four. The Haar mean of D_d is 1+O(β²). Its inverse has nonconstant part −β⁵∑_rτ_r/4⁴+O(β⁶). Moreover Π_C D_d=O(β⁸) and QD_d=O(β¹⁰), as the input MD_{d−1} has no parity C below degree two. The same orders hold for the inverse: products of two nonconstant components already cost at least ten.

## Exact cancellation and the all-depth induction

Let g_d=A_d−⟨A_d⟩. To compute nonconstant terms at step d, use N_d=K(MD_{d−1}g_{d−1}); then A_d=⟨A_{d−1}⟩+N_d/D_d exactly. This subtraction removes the earlier disconnected propagation terms structurally rather than assuming their absence.

Put k=4(d−1). Inductively g_{d−1}=β^k τ_p/4^k+O(β^{k+1}), and Π_C g_{d−1}=O(β^{k+3}); at d=1 the input is just τ_p. The Haar mean of N_d is O(β^{k+1}), since the input has no degree-k constant and K preserves the mean; its nonconstant part leads with β^{k+4} τ_p/4^{k+4}. The constant numerator times the nonconstant inverse cannot appear before k+6; the product of the two nonconstant parts cannot appear before k+9. Thus the leading nonconstant term of g_d is β^{4d}τ_p/4^{4d}.

In parity C, the input MD_{d−1}g_{d−1} has no term before k+1. At degree k+1 the only term there is τ_p τ_q/4^k: the boundary of the plaquette chosen from M must equal C xor ∂p=∂q, which identifies q uniquely. The spin-zero projection on their shared link turns the product into τ_C/4 by the normalized SU(2) pairing. Six fundamental transfers therefore yield β^{k+7}τ_C/4^{k+7}; the spin-1 projection on the shared edge costs eight, not six. The constant numerator times Π_C(D_d^{-1}) starts at k+9; the product of nonconstant parts likewise starts at k+9. This proves the parity-C induction.

For Q, the same degree-k+1 input is R/4^k. The numerator contributes β^{k+9}R/(24·4^{k+6}). The constant numerator times Q(D_d^{-1}) starts at k+11. But the leading **nonconstant** numerator times the leading nonconstant inverse does contribute at k+9: its Q projection is −β^{k+9}R/4^{k+8}. These are all contributions at that degree. Their difference is −β^{k+9}R/(48·4^{k+6}). The coefficient depends on λ_2 and λ_1² being unequal, rather than on the normalization being negligible.

The one-order sharper remainders follow from an exact sign symmetry. In coordinates x and an ordered list of four directions, multiply link (x,μ) by s_{x,μ}=(-1)^{∑_{ν<μ}x_ν}. This reverses every plaquette trace, including the inserted p. The restriction to C has sign +1 because C is the mod-2 boundary of two plaquettes. Both projected means are odd functions of β. The preceding power-counting proofs do not require this extra symmetry.

## Nonzero complement in the true middle marginal

On the shared link the product τ_pτ_q has only spin zero and spin one, and on each of the other six edges it is fundamental. Thus R=τ_pτ_q−τ_C/4. At all links equal to the identity R=3/4. Independently, Haar averaging the other edges conditional on e gives ∥τ_pτ_q∥²=1/16 and ∥τ_C/4∥²=1/64, so ∥R∥²=3/64. The true middle marginal μ_d has density tending uniformly to 1 with respect to product Haar as β→0. For any retained linear space of gauge-invariant spin networks with every edge spin ≤1/2, the μ_d squared distance of A_d from it is at least (inf dμ_d/dHaar)∥QA_d∥². In particular its liminf after division by β^{8d+10} is at least 3/(64·48²·4^{8d+4}). In the symmetric slab this is an omitted part of the mirrored endpoint covariance by conditional independence of the two halves given the middle slice.

## Checks, limits, and related work

Exact rational parity algebra on the minimal spatial cube, keeping all six spatial faces and twelve side edges at each transfer, was used as a separate cancellation control in the Z₂ analogue. The numerator's bent-loop sector starts at degree 7 at depth one and degree 9 at depths two through four. The **normalized** bent-loop sector instead starts at degrees 7, 11, 15, 19, respectively, with unit coefficients in the Z₂ convention; the checked next coefficients are zero. This verifies the normalization bookkeeping in the analogue, not the SU(2) spin-1 calculation. The latter uses the exact Haar and character identities above.

Strong-coupling transfer matrices and effective low-energy matrices are not new. See [Osterwalder–Seiler (1978)](https://doi.org/10.1016/0003-4916(78)90039-8) and [the effective glueball transfer-matrix calculation](https://www-library.desy.de/preparch/desy/postpr/1985/desy85-007.pdf). The claim here is about the precise normalized conditional observable and its bare edge-spin projections; it does not rule out a dressed effective description that includes corrections for the eliminated modes. Literature priority for these coefficients is unverified. This is a finite-volume, fixed-depth, small-β result. It gives neither a depth-uniform remainder, a uniform weak-coupling estimate, nor a continuum mass gap.

### Reproducibility: independent Z₂ cancellation control

```python
from fractions import Fraction as F
from math import factorial
from collections import defaultdict
from itertools import product, combinations
N = 20
V = list(product(range(2), repeat=3))
E = []
for v in V:
    for j in range(3):
        if not v[j]:
            w=list(v); w[j]=1
            E.append((v,tuple(w)))
B = {frozenset(e): 1<<i for i,e in enumerate(E)}
P = []
for d,e in combinations(range(3),2):
    f=3-d-e
    for b in range(2):
        vs=[]
        for x,y in [(0,0),(1,0),(1,1),(0,1)]:
            r=[0]*3; r[d]=x; r[e]=y; r[f]=b
            vs.append(tuple(r))
        P.append(sum(B[frozenset((a,b))] for a,b in zip(vs,vs[1:]+vs[:1])))
p,q = P[0],P[2]
c=p^q
assert c.bit_count() == 6
one={(0,0):F(1)}
def mul(a,b):
    out=defaultdict(F)
    for (i,s),x in a.items():
        for (j,t),y in b.items():
            if i+j<=N: out[i+j,s^t]+=x*y
    return {k:v for k,v in out.items() if v}
def div(a,b):
    assert b[0,0]==1
    assert all(i or not m for i,m in b)
    r=defaultdict(F,a)
    for i in range(N+1):
        layer=[(s,v) for (j,s),v in r.items() if i==j and v]
        for s,x in layer:
            for (j,t),y in b.items():
                if j and i+j<=N: r[i+j,s^t]-=x*y
    return {k:v for k,v in r.items() if v}
M=one
for m in P:
    M=mul(M,{(j,m if j%2 else 0):F(1,factorial(j)) for j in range(N+1)})
tanh=div({(j,0):F(1,factorial(j)) for j in range(1,N+1,2)},
         {(j,0):F(1,factorial(j)) for j in range(0,N+1,2)})
powt=[one]
for _ in E: powt.append(mul(powt[-1],tanh))
def K(a):
    return {k:v for k,v in _K(a).items() if v}
def _K(a):
    out=defaultdict(F)
    for (i,s),x in a.items():
        for (j,_),y in powt[s.bit_count()].items():
            if i+j<=N: out[i+j,s]+=x*y
    return out
def lead(a,mask):
    return min((i,v) for (i,s),v in a.items() if s==mask)
D=one; H={(0,p):F(1)}
for d in range(1,5):
    D,H=K(mul(M,D)),K(mul(M,H))
    A=div(H,D)
    assert min((i,s,v) for (i,s),v in A.items() if s)==(4*d,p,1)
    assert lead(A,c)==(4*d+3,1)
    assert A.get((4*d+4,c),0)==0
    print(d, lead(H,c), lead(A,c), lead(D,c))
```
