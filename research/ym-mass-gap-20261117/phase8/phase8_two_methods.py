"""Independent magnetic-element integrals and rational sixth-order calculations.

Scope: EXACT mixed b2^2*b3^2*b4^2 coefficient on complete original-link
reachable spin-network channels; no finite-coupling invariant space assertion.
Route A: exact Peter-Weyl/3j. Route B: exact 8-axis SU(2) quaternion
Haar cubature qualified by loop-variable polynomial degree <=3.
Two further independent coefficient recursion implementations.
"""
from functools import lru_cache
from itertools import product
from fractions import Fraction as F
from sympy import I,Rational as R,sqrt,S,simplify,conjugate
import numpy as np
import opt_einsum as oe
from phase8_cg_exact import coeff,fusion_element
from phase8_probe import states,reps,e,N

BASIS=states();L=len(BASIS)
COUNTS=[sum(x==2 for x in state[1]) for state in BASIS]
METRIC=[3**k for k in COUNTS]
ELEC=[e(state) for state in BASIS]
VAC=0
assert len(BASIS)==34 and ELEC[VAC]==0

def quaternion_axes_exact():
    points=[]
    for axis in range(4):
      for sign in (-1,1):
        q=[0]*4;q[axis]=sign;points.append(q)
    return points

def q_rep(q,two_j):
    if two_j==0:return np.array([[S.One]],dtype=object)
    w,x,y,z=map(S,q)
    return np.array([[w-I*z,-y-I*x],[y-I*x,w+I*z]],dtype=object)

@lru_cache(None)
def q_kernel(na,nb,k_face):
    """8-axis quaternion integral of degree<=3 independent in each loop."""
    out=np.zeros((na+1,na+1,nb+1,nb+1),dtype=object)
    for q in quaternion_axes_exact():
      A=q_rep(q,na);B=q_rep(q,nb)
      weight=2*q[0] if k_face else 1
      for a,b,c,d in product(range(na+1),range(na+1),range(nb+1),range(nb+1)):
        out[a,b,c,d]+=conjugate(A[a,b])*B[c,d]*weight
    return np.vectorize(simplify,otypes=[object])(out*R(1,8))

def cubature_w(a,b,face):
    sa=a[0];sb=b[0]
    if any(sa[i]!=sb[i] for i in range(N) if i!=face) or sa[face]==sb[face]:
      return S.Zero
    args=[coeff(a),list(range(2*N)),coeff(b),list(range(2*N,4*N))]
    for i in range(N):
      args.extend((q_kernel(sa[i],sb[i],i==face),[2*i,2*i+1,2*N+2*i,2*N+2*i+1]))
    return simplify(np.asarray(oe.contract(*args,[],optimize='greedy')).item())

def rationalize_matrix(method):
    """Source j -> target i. Rescale each orthonormal ket by sqrt(3)^t.

    The resulting exact rational operator has nontrivial diagonal metric
    3^t; Hermiticity is M^T metric=metric M, not M^T=M.
    """
    out=[]
    for face in range(N):
      M=[{} for _ in BASIS]
      for j,a in enumerate(BASIS):
        for i,b in enumerate(BASIS):
          w=method(b,a,face)
          if not w:continue
          scaled=simplify(w*sqrt(3)**(COUNTS[j]-COUNTS[i]))
          assert scaled.is_Rational,(face,a,b,scaled)
          M[j][i]=F(int(scaled.p),int(scaled.q))
      out.append(M)
    for M in out:
      for j,col in enumerate(M):
        for i,x in col.items():
          assert METRIC[i]*x==METRIC[j]*M[i][j]
    return out

def exact_matrices():
    A=rationalize_matrix(fusion_element)
    B=rationalize_matrix(cubature_w)
    assert A==B,'independent Haar integration disagrees with CG/Peter-Weyl'
    return A,B

# Algorithm 1: order-by-order intermediate-normalized eigenvector + Dyson inverse.
MAX=(2,2,2)
ORDER=sorted(product(*[range(x+1) for x in MAX]),key=lambda x:(sum(x),x))
Z=(0,0,0)
UNIT=((1,0,0),(0,1,0),(0,0,1))

def diff(a,b):
    return tuple(x-y for x,y in zip(a,b)) if all(x>=y for x,y in zip(a,b)) else None

def vec_add(to,from_vec,coef=F(1)):
    for i,v in from_vec.items():
      to[i]=to.get(i,F())+coef*v
      if to[i]==0:del to[i]
    return to

def act(M,v):
    out={}
    for j,x in v.items():
      for i,m in M[j].items():
        out[i]=out.get(i,F())+m*x
    return {i:x for i,x in out.items() if x}

def inner(x,y):
    return sum((v*METRIC[i]*y.get(i,F()) for i,v in x.items()),F())

def grade_calculate(M,alpha=F(1),s=F(1),with_shift=True,with_norm=True):
    alpha,s=F(alpha),F(s)
    assert alpha>0 and s>0
    V={Z:{VAC:F(1)}};energy={Z:F(0)}
    for p in ORDER[1:]:
      rhs={}
      for k in range(3):
        q=diff(p,UNIT[k])
        if q is not None:vec_add(rhs,act(M[k+1],V[q]))
      energy[p]=-rhs.get(VAC,F())
      for m in ORDER[1:]:
        q=diff(p,m)
        if q is not None and energy.get(m):vec_add(rhs,V[q],energy[m])
      V[p]={i:v/(alpha*ELEC[i]) for i,v in rhs.items() if i!=VAC and v}
    norm={p:sum((inner(V[q],V[diff(p,q)]) for q in ORDER if diff(p,q) is not None),F()) for p in ORDER}
    # b1=0 identically implies <Omega,W1 Omega>=0 by face-1 center parity;
    # hence the centered source vector is exactly P=W1*V.
    P={p:act(M[0],V[p]) for p in ORDER}
    X={}
    for p in ORDER:
      rhs=P[p].copy()
      for k in range(3):
        q=diff(p,UNIT[k])
        if q is not None:vec_add(rhs,act(M[k+1],X[q]))
      if with_shift:
        for m in ORDER[1:]:
          q=diff(p,m)
          if q is not None and energy[m]:vec_add(rhs,X[q],energy[m])
      X[p]={i:v/(alpha*ELEC[i]+s) for i,v in rhs.items() if v}
    G={}
    for p in ORDER:
      v=sum((inner(P[q],X[diff(p,q)]) for q in ORDER if diff(p,q) is not None),F())
      if with_norm:
        v-=sum((norm[q]*G[diff(p,q)] for q in ORDER[1:] if diff(p,q) is not None),F())
      G[p]=v
    return G,energy,norm,V

# Algorithm 2: fixed point over the NILPOTENT multivariate polynomial ring
# Q[b2,b3,b4]/(b2^3,b3^3,b4^3), and a geometric reciprocal for norm.
def poly_add(A,B,scale=F(1)):
  out=A.copy()
  for ix,val in B.items():
    out[ix]=out.get(ix,F())+scale*val
    if not out[ix]:del out[ix]
  return out

def polmul(A,B):
  out={}
  for x,a in A.items():
    for y,b in B.items():
      ij=tuple(x[k]+y[k] for k in range(3))
      if all(ij[k]<=MAX[k] for k in range(3)):
        out[ij]=out.get(ij,F())+a*b
  return {j:v for j,v in out.items() if v}

def pv_apply(M,V):
    out={}
    for ij,vec in V.items():
      out[ij]=act(M,vec)
    return {ij:val for ij,val in out.items() if val}

def pvec_add(A,B):
    out={i:v.copy() for i,v in A.items()}
    for p,v in B.items():
      vec_add(out.setdefault(p,{}),v)
    return {ix:v for ix,v in out.items() if v}

def pv_shift(V,axis):
    return {j:vec for i,vec in V.items()
            if all((j:=tuple(i[k]+(k==axis) for k in range(3)))[k]<=MAX[k] for k in range(3))}

def pv_scalar(V,P):
    out={}
    for i,a in V.items():
      for j,v in P.items():
        k=tuple(i[q]+j[q] for q in range(3))
        if all(k[q]<=MAX[q] for q in range(3)):
          vec_add(out.setdefault(k,{}),v,a)
    return {ix:v for ix,v in out.items() if v}

def take_index(v,i):
    return {ix:vec.get(i,F()) for ix,vec in v.items() if vec.get(i)}

def pv_div_D(V,alpha,s,exc_only=False):
    return {ix:{i:x/(alpha*ELEC[i]+s) for i,x in v.items() if x and (not exc_only or i!=VAC)} for ix,v in V.items()}

def fixed_point_calculate(M,alpha=F(1),s=F(1)):
    alpha,s=F(alpha),F(s)
    # Schur complement ground eigenpair, vacuum component fixed to 1.
    V={Z:{VAC:F(1)}};E={}
    for _ in range(9):
      WV={}
      for k in range(3):
        WV=pvec_add(WV,pv_shift(pv_apply(M[k+1],V),k))
      En={ix:-x for ix,x in take_index(WV,VAC).items()}
      rhs=pvec_add(WV,pv_scalar(En,V))
      new={Z:{VAC:F(1)}}
      for p,vec in rhs.items():
        w={i:x/(alpha*ELEC[i]) for i,x in vec.items() if i!=VAC and x}
        if w:vec_add(new.setdefault(p,{}),w)
      if V==new and E==En:break
      V,E=new,En
    else:raise AssertionError('ground fixed point not converged')
    P=pv_apply(M[0],V)
    X={}
    for _ in range(9):
      rhs={ix:vec.copy() for ix,vec in P.items()}
      for k in range(3):
        rhs=pvec_add(rhs,pv_shift(pv_apply(M[k+1],X),k))
      rhs=pvec_add(rhs,pv_scalar(E,X))
      new=pv_div_D(rhs,alpha,s)
      if new==X:break
      X=new
    else:raise AssertionError('Dyson fixed point not converged')
    def scalar_dot(VA,VB):
      out={}
      for ix,a in VA.items():
        for jx,b in VB.items():
          k=tuple(ix[i]+jx[i] for i in range(3))
          if all(k[i]<=MAX[i] for i in range(3)):
            out[k]=out.get(k,F())+inner(a,b)
      return {ix:v for ix,v in out.items() if v}
    numer=scalar_dot(P,X);norm=scalar_dot(V,V)
    Nn=norm.copy();Nn[Z]=Nn.get(Z,F())-1
    inv={Z:F(1)};powers={Z:F(1)}
    for i in range(1,7):
      powers=polmul(powers,Nn)
      inv=poly_add(inv,powers,F((-1)**i))
    return polmul(numer,inv),E,norm

if __name__=='__main__':
    A,B=exact_matrices()
    print('34 x 34 x 4 exact magnetic matrices agree')
    for alpha,s in [(F(1),F(1)),(F(2),F(1,3)),(F(1,2),F(2))]:
      G,E,n,V=grade_calculate(A,alpha,s)
      g,e,nm=fixed_point_calculate(B,alpha,s)
      assert all(g.get(ix,F())==G[ix] for ix in ORDER)
      print('alpha',alpha,'s',s,'C6 exact:',G[MAX])
