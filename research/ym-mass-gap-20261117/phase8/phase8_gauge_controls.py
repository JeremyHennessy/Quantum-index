"""Independent original-link Gauss-law and gauge-covariance controls."""
from itertools import product
import numpy as np
import opt_einsum as oe
from phase8_probe import states,reps,VERTICES,EDGES,vertex_tensor,N

def mul(a,b):
 w,x,y,z=a;v,i,j,k=b
 return np.array([w*v-x*i-y*j-z*k,w*i+x*v+y*k-z*j,w*j-x*k+y*v+z*i,w*k+x*j-y*i+z*v])
def inv(a):
 b=np.asarray(a).copy();b[1:]*=-1;return b
def qmat(q):
 w,x,y,z=q
 return np.array([[w-1j*z,-y-1j*x],[y-1j*x,w+1j*z]],complex)
SQ=np.array([[1,0,0],[0,1/np.sqrt(2),0],[0,1/np.sqrt(2),0],[0,0,1]],complex)
def D(n,q):
 if n==0:return np.ones((1,1),complex)
 if n==1:return qmat(q)
 if n==2:
  U=qmat(q);return SQ.conj().T@np.kron(U,U)@SQ
 raise AssertionError('out of range')
def network(s,field):
 r=reps(s);args=[]
 for vertex in VERTICES:
  edges,T=vertex_tensor(vertex,r)
  args.extend((T,[2*e+int(EDGES[e][1]==vertex) for e in edges]))
 for e,n in enumerate(r):
  args.extend((D(n,field[e]),[2*e,2*e+1]))
 return oe.contract(*args,[],optimize='greedy')*np.prod(np.sqrt(np.array(r)+1))
def tests():
 rng=np.random.default_rng(20261118)
 field=[rng.normal(size=4) for i in EDGES]
 field=[q/np.linalg.norm(q) for q in field]
 gauge={v:rng.normal(size=4) for v in VERTICES}
 gauge={k:q/np.linalg.norm(q) for k,q in gauge.items()}
 transformed=[mul(mul(gauge[v],field[e]),inv(gauge[w])) for e,(v,w) in enumerate(EDGES)]
 maxerr=0
 for state in states():
  r=reps(state)
  for vertex in VERTICES:
   x=[r[i] for i,(a,b) in enumerate(EDGES) if vertex in (a,b)]
   assert len(x) in (2,3)
   if len(x)==2:assert x[0]==x[1]
   else:assert abs(x[0]-x[1])<=x[2]<=x[0]+x[1] and sum(x)%2==0
  err=abs(network(state,field)-network(state,transformed))
  maxerr=max(maxerr,err)
 assert maxerr<1e-12,maxerr
 return maxerr
if __name__=='__main__':
 print('original-link gauge covariance maximum residual',tests())
