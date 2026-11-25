# Equal-coupling Wilson slab: a connected six-link boundary channel

**2026-11-25 | Research-only continuation | Phase 15 not activated.**

The [previous result](2026-11-25-two-layer-weighted-complement.md) proved a nonzero middle-slice complement in a thin tube with other faces inactive. This follow-up activates **every Wilson plaquette at the same coupling** in an open finite four-dimensional slab of three time slices. It proves that the projection onto the central middle plaquette is still not exact at sufficiently small positive coupling. The surviving channel is a **different, larger fundamental Wilson loop**, not necessarily a higher-spin representation on any one link. This result is about the defined central-plaquette projection, not about projecting onto all fundamental spin networks of the slice.

## Geometry

Use any finite open rectangular three-dimensional spatial box with at least two vertices per direction, and time slices −1, 0, +1. Let the endpoint source W on the +1 slice be the normalized trace τ of an elementary square p in directions x,y. Choose its neighbor q in directions x,z sharing an edge at that slice. Let C be the six-edge boundary of the bent pair p∪q, translated onto the middle slice. It is a simple closed loop, not the boundary of one plaquette. All spatial and temporal plaquettes in the full slab have coupling β. The middle spatial terms cancel in the conditional mean a(X)=E[W|X], where X is the set of middle spatial links, but remain in its equilibrium marginal.

## Exact conditional coefficient

For a boundary link sign assignment ε in {±1}^E, define the Fourier parity projection Π_C by averaging f(εX) against ∏_(e∈C) ε_e. Central signs commute, so each fundamental trace picks up exactly the parity of its boundary. Integrated link signs can be changed by Haar invariance; an odd integrated-link incidence gives zero. Taylor powers are at least as large as the number of action faces used an odd number of times.

In the half-slab, each middle link occurs in exactly one temporal side face. Thus boundary parity C forces its six side faces. At the endpoint these leave the translated parity C. In the numerator the source p toggles its four edges, leaving exactly parity ∂q. At degree seven the only way to cancel this is to include q once, and each of the six sides once. There is no other term at this degree and no lower degree. This argument does not require the spatial box to be minimal. In the denominator, C needs at least eight action factors: six sides and at least two endpoint squares. Any *nontrivial* denominator parity needs at least five action factors: the middle parity is a union of cycles by vertex parity, so it needs at least four sides and at least one endpoint square. Similarly nontrivial numerator parity needs at least four factors. Consequently a normalization correction at parity C involving one nontrivial denominator factor costs at least eight if the numerator has trivial parity, and at least nine otherwise. Two nontrivial denominator factors already cost at least ten. Trivial denominator sectors cannot lower the numerator Taylor order, and the constant-order denominator is 1.

The unique seven-factor integral can be evaluated in temporal gauge (the rungs form a forest, whose fixing preserves product Haar). The source and q merge by integration over their shared endpoint link. The identity ∫τ(AU)τ(U⁻¹B)dU=τ(AB)/4 then pairs each remaining endpoint link with its side interaction. One merge plus six pairings gives

    Π_C a(X) = β⁷ τ(H_C(X)) / 4⁷ + O(β⁸).

This procedure uses exact SU(2) orthogonality and has no competing degree-seven coefficient from extra transverse faces.

## Consequence in the actual Gibbs inner product

Let r_β be the difference between a and its orthogonal projection onto span{1, τ(H_p0)} in the actual equilibrium middle marginal, with p0 the central translated plaquette. Π_C kills both basis functions, so Π_C r_β = Π_C a even though the reference weight for Π_C is Haar, not the Gibbs weight. The middle marginal density relative to product Haar tends uniformly to 1 as β approaches zero in each fixed finite box. Haar Π_C is an orthogonal projection of norm one, and ∫τ(H_C)² dH=1/4 because C is simple and its holonomy is Haar. Hence

    liminf_(β→0+) β^(-14) ||r_β||²_(Gibbs) ≥ 4^(-15).

By reflection and conditional independence this norm is the nonnegative piece of the endpoint connected covariance lost by the central-plaquette-only projection. It is strictly positive at sufficiently small positive β in each such finite open slab. Finite-dimensional real analyticity also means possible zeros on the positive coupling axis for a fixed box are isolated; it does not exclude all such zeros. The liminf is a lower bound from this parity sector, not an assertion about the first nonzero power of the entire residual, nor about an error bound uniform in spatial volume.

## Reproduction and next question

The standard-library Python check enumerates all 262,144 face subsets in the smallest genuine four-dimensional half-box (12 middle links, 20 integrated links, 18 action faces). It verifies the unique order-seven numerator support, minimum denominator costs, and a contrasting degree-six neighboring single-plaquette sector where the numerator support includes a repeated source face. In that contrasting sector integration over a source-only endpoint link gives ∫τ²=1/4; its degree-six term cancels with the order-one constant numerator times the degree-five denominator. This control illustrates why parity permission alone is not a noncancellation proof. The integral for the main coefficient is the analytic Haar calculation above.

Next: test the same boundary channel across more than one step on each side, with all plaquettes still active. Separate connected bent-loop growth from normalization, and compare decay per added layer at fixed small β before asking whether any estimate survives continuum tuning. Standard strong-coupling surface methods are well established: [Wilson 1974](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.10.2445) and [Drouffe–Zuber](https://www.lpthe.jussieu.fr/~zuber/MesPapiers/dz_PR83.pdf). No certified novelty, continuum result, or mass-gap claim.

```python
from itertools import product,combinations
def step(v,k): return v[:k]+(v[k]+1,)+v[k+1:]
V=list(product(range(2),repeat=4))
E=[(v,k) for v in V for k in range(4) if not v[k]]
E.sort(key=lambda e:not(e[0][3]==0 and e[1]<3))
B=sum(v[3]==0 and k<3 for v,k in E)
id={e:i for i,e in enumerate(E)}
faces={}
for v in V:
 for i,j in combinations(range(4),2):
  if v[i] or v[j] or (v[3]==0 and j<3):continue
  edges=[(v,i),(step(v,i),j),(step(v,j),i),(v,j)]
  faces[v,i,j]=sum(1<<id[e] for e in edges)
src=faces[(0,0,0,1),0,1]
mid=sum(1<<id[e] for e in [((0,0,0,0),0),((1,0,0,0),1),((0,1,0,0),0),((0,0,0,0),1)])
adj=sum(1<<id[e] for e in [((0,0,0,0),0),((1,0,0,0),2),((0,0,1,0),0),((0,0,0,0),2)])
target=mid^adj
bmask=(1<<B)-1
f=list(faces.items())
def minima(s):
 out={}
 for k in range(len(f)+1):
  for ii in combinations(range(len(f)),k):
   mask=s
   for i in ii:mask^=f[i][1]
   if mask & ~bmask:continue
   if mask not in out:out[mask]=(k,[ii])
   elif out[mask][0]==k:out[mask][1].append(ii)
 return out
D=minima(0);N=minima(src)
nt,solutions=N[target]
print('boundary, integrated links, conditional action faces:',B,len(E)-B,len(f))
print('denominator next least',min(v[0] for m,v in D.items() if m))
print('numerator target:',nt,'number',len(solutions),'denominator target:',D[target][0])
for ii in solutions:print([f[i][0] for i in ii])
nonzero={m:v[0] for m,v in D.items() if m}
# Any term in 1/D with nontrivial parity requires >=5 per factor.
# Up to 7, at most one nontrivial factor. Trivial insertions cannot lower order.
costs=[v[0]+nonzero[target^m] for m,v in N.items() if target^m in nonzero]
print('min target from nontrivial divisor:',min(costs),'nonzero numerator parity minimum:',min(v[0] for m,v in N.items() if m))
assert (B,len(E)-B,len(f),nt,len(solutions),D[target][0],min(nonzero.values()),min(costs))==(12,20,18,7,1,8,5,9)
# A canceled order-six control for a neighboring single plaquette.
assert N[adj][0]==6 and len(N[adj][1])==1 and D[adj][0]==5
base=[f[i][1] for i in N[adj][1][0]]
assert src in base and len(D[adj][1])==1
assert set(base)-{src}=={f[i][1] for i in D[adj][1][0]}
print("degree-six neighbor has exactly the factorizable numerator support")
```
