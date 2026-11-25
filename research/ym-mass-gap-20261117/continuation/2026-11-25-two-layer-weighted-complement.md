# Two Wilson layers: an exact positive contribution beyond the fundamental channel

**2026-11-25 | Research-only continuation | No Phase 15 activation.**

This advances the [one-square mixing control](2026-11-25-wilson-channel-mixing.md) in two ways. Both endpoints are now averaged in a specified Gibbs law, rather than probing a deterministic exterior. And the omitted middle-slice contribution is strictly positive at **every finite positive coupling** in a reflection-symmetric two-layer open tube. This is a finite subsystem, not a decay theorem or the homogeneous full four-dimensional equilibrium law.

## 1. Weighted decomposition valid for a reflection-symmetric finite Wilson slab

Let X comprise all spatial link variables on the middle slice of an open finite slab. Use plaquette couplings invariant under reflection through that slice, with no periodic wrapping between the two ends. Each Wilson plaquette term lies on the slice or on one side of it. Therefore the interiors of the two halves are conditionally independent given X. If W_L and W_R are reflected copies of an endpoint plaquette trace, both have conditional mean a(X). Write a₀=a−E[a]. Then

    Cov(W_L,W_R) = E[a₀²]
                = ||P a₀||² + ||(I−P)a₀||²,

where both norms and the orthogonal projection P use the same actual middle-slice marginal (not product Haar). For the fundamental test, P projects onto the centered fundamental character of the chosen middle plaquette. This identity holds in the full finite reflection-symmetric slab. Strictness of the second term still needs a dynamical calculation. For unequal endpoint observables the complementary term is instead an inner product, not necessarily nonnegative. This is a reflection-symmetric endpoint covariance, not the same as generic nested-exterior conditional expectation.

## 2. Exact open-tube evaluation

Take three identical oriented elementary square slices perpendicular to a lattice direction, embedded in four dimensions. Include the three slice plaquettes with action sτ and the eight side faces with action tτ, with s,t>0, free open ends, and no other plaquette weights. Here τ=χ₁/₂/2. This is an inhomogeneous Wilson subcomplex; extra faces of the full lattice are inactive.

Temporal gauge sets the rung links to identity by a Haar-preserving tree-variable substitution. The eight side terms then compare corresponding links between successive slices. Given the middle links the endpoint link weights, before the slice plaquette action is included, are four independent tilted Haar laws. Their product has, when acting on class functions, normalized multipliers p_k(t)^4, where χ^(k) denotes spin k/2 and p_k(t)=I_(k+1)(t)/I_1(t). This follows by multiplying the four scalar Fourier matrices in the representation of the corresponding middle holonomy. If Kχ^(k)=p_k(t)^4 χ^(k), H denotes the middle holonomy, w=exp(sτ), and D=K(w), then

    a(H) = K(τw)(H) / D(H) = (∂_s D)/D,
    dμ_middle(H) ∝ w(H)D(H)² dH.

The middle product of four unweighted Haar links is itself Haar, which gives the last expression after integrating both ends. Overall factors from side normalizations cancel. D is strictly positive.

## 3. All finite positive couplings: no finite-spin closure

Expand D=Σ_(k≥0) d_k χ^(k). The SU(2) character coefficients are d_k=z(s)(k+1)p_k(s)p_k(t)^4, with z(s)=2I_1(s)/s. All are positive. At fixed s,t>0, the Bessel defining series gives I_n(x)=(x/2)^n/n!·(1+O(1/n)), and its derivative recurrence gives

    d'_k/d_k = k/s + O(1/k),
    d_(k−1)/d_k ∼ 32 k⁵/(s t⁴).

Suppose a is a finite character polynomial with highest index m>0 and coefficient b_m≠0. In aD=D', the coefficient of χ^(k) for k>m has leading contribution b_m d_(k−m): by SU(2) fusion this is the only term involving d_(k−m), and every higher-index coefficient is smaller by at least O(k^-5) relative to it. Divide by d_k. The right-hand side from the product then has leading order k^(5m), incompatible with the order-k logarithmic derivative of d_k. If a is constant, the derivative ratio would be independent of k, also impossible. Thus a is not in any finite character span. Since the middle distribution has strictly positive Haar density, the corresponding complementary norm is strictly positive for any finite character projection that includes the constant or uses centered characters. This is not a coupling-uniform lower bound.

## 4. Exact small-coupling size and independent check

At s=t=β the first fundamental coefficient of a is β⁴/512; the first spin-1 coefficient is Cβ⁹, where C=−65/21233664. For an index k≥1 the leading Taylor order of the numerator is at least 5k−1 and the nonconstant denominator coefficient has order at least 5k. Fusion and formal series division preserve the numerator order bound, so higher indices cannot compete at order 9. Projecting with the Gibbs weight subtracts a constant and fundamental term; those projection corrections to the leading spin-1 residual start beyond order 9 by Haar orthogonality at β=0. The squared complementary norm therefore starts at

    4225/450868486864896 · β¹⁸.

The retained fundamental norm starts at β⁸/262144. The following exact rational script verifies weighted orthogonality and the covariance split through order 19. The initial check exposed that multiplication can temporarily generate characters above the degree cutoff; the corrected K drops them only because their multipliers start above that cutoff. This is an arithmetic check of the stated slab model, not a proof of a uniform remainder for larger slabs.

## 5. Scope and next checkpoint

For a larger finite reflection-symmetric slab containing these faces, use independently variable real reflection-compatible plaquette couplings. The weighted complementary norm for the central finite character span is real analytic: all finite integrals have compact domains, positive normalization for real couplings, and an invertible weighted Gram matrix for distinct central characters. At the point with only the tube faces active it is strictly positive, so it is not identically zero. Its zero set has empty interior (and Lebesgue measure zero) in the connected finite-dimensional coupling domain. Therefore a finite spin cutoff is not exact for generic positive inhomogeneous couplings either. This argument says **nothing** about whether the equal-coupling diagonal of a larger slab falls in the zero set, and supplies no thermodynamic or continuum rate.

Next: at equal couplings in a full finite four-dimensional slab, identify the *first connected contribution* to the weighted complementary norm and check whether extra transverse plaquettes can cancel it. A coefficient at fixed volume and strong coupling still would not establish survival or decay at the weak bare coupling relevant to the continuum.

Sources and boundary: standard character and link-integration methods appear in [Drouffe–Zuber](https://www.lpthe.jussieu.fr/~zuber/MesPapiers/dz_PR83.pdf); [DLMF series](https://dlmf.nist.gov/10.25) and [recurrences](https://dlmf.nist.gov/10.29) justify the large-index input. No independent refereeing or literature novelty is claimed for this particular use.

```python
from fractions import Fraction as F
from math import factorial
N=19

def add(*terms):
    out={}
    for term in terms:
        for key,val in term.items():out[key]=out.get(key,F(0))+val
    return {key:val for key,val in out.items() if val}
def scale(A,c): return {key:v*c for key,v in A.items() if v*c}
def mul(A,B):
    out={}
    for (i,j),a in A.items():
        for (k,l),b in B.items():
            if i+k>N:continue
            for m in range(abs(j-l),j+l+1,2):
                key=i+k,m
                out[key]=out.get(key,F(0))+a*b
    return {key:val for key,val in out.items() if val}
def unit(j=0):return {(0,j):F(1)}
def inverse(A):
    assert A[0,0]==1 and all(d>0 or j==0 for d,j in A)
    B=add(unit(),scale(A,-1));p=unit(); out=p
    while B:
        p=mul(p,B)
        if not p:break
        out=add(out,p)
    return out
def divide(A,B):return mul(A,inverse(B))
def Ioverbeta(n):
    return {(2*k+n-1,0):F(1,2**(2*k+n)*factorial(k)*factorial(k+n))
            for k in range(N+1) if 2*k+n-1<=N}
normal=scale(Ioverbeta(1),2)
def power(A,n):
    out=unit()
    for _ in range(n):out=mul(out,A)
    return out
weights=[power(divide(scale(Ioverbeta(k+1),2),normal),4) for k in range(N+1)]
def K(A):
    return add(*(mul({(i,j):v},weights[j]) for (i,j),v in A.items() if j<=N))
def integrate(A):return {(i,0):v for (i,j),v in A.items() if j==0}
tau=scale(unit(1),F(1,2))
w=add(*({(n,j): v/factorial(n) for (_,j),v in power(tau,n).items()}
        for n in range(N+1)))
D=K(w)
measure=mul(w,power(D,2))
def avg(A):return divide(integrate(mul(measure,A)),integrate(measure))
a=divide(K(mul(w,tau)),D)
a0=add(a,scale(avg(a),-1))
u=add(unit(1),scale(avg(unit(1)),-1))
c=divide(avg(mul(a0,u)),avg(mul(u,u)))
res=add(a0,scale(mul(c,u),-1))
C=F(-65,21233664)
assert a[9,2]==C and a[4,1]==F(1,512)
assert res=={key:v for key,v in res.items() if key[0]>=9}
assert {key:v for key,v in res.items() if key[0]==9}=={(9,2):C}
assert avg(res)=={} and avg(mul(res,u))=={}
full=avg(power(a0,2)); low=avg(power(mul(c,u),2)); high=avg(power(res,2))
assert full==add(low,high)
assert high=={(18,0):C*C}
assert low[8,0]==F(1,512**2)
print('two-shell complement:',high)
print('leading fundamental contribution: beta^8 /',512**2)
print('Exact weighted orthogonality, covariance split and all coefficients through order',N,'passed.')
```
