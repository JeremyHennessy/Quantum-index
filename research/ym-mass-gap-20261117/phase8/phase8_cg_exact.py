"""Exact Wigner-3j original-link intertwiners and SU(2) Haar fusion.

All link labels are 2j. This is a finite-order reachable representation
certificate, not a finite-coupling finite-dimensional invariant Hilbert space.
Conventions: incoming eps_{m,-m}=(-1)^(j-m); normalized vertex 3j.
"""
from functools import lru_cache
from itertools import product
from math import prod
import numpy as np
import opt_einsum as oe
from sympy import Rational as R, sqrt, simplify, S
from sympy.physics.wigner import wigner_3j
from phase8_probe import states,reps,EDGES,VERTICES,CHORDS,N,net_coef

@lru_cache(None)
def eps(n):
  x=np.zeros((n+1,n+1),dtype=object)
  for k in range(n+1):x[k,n-k]=S.NegativeOne**k
  return x

@lru_cache(None)
def inv(spins):
  if len(spins)==2:
    assert spins[0]==spins[1]
    return eps(spins[0])/sqrt(spins[0]+1)
  a,b,c=spins
  assert abs(a-b)<=c<=a+b and (a+b+c)%2==0
  x=np.empty((a+1,b+1,c+1),dtype=object)
  for i,j,k in product(range(a+1),range(b+1),range(c+1)):
    x[i,j,k]=wigner_3j(R(a,2),R(b,2),R(c,2),R(a,2)-i,R(b,2)-j,R(c,2)-k)
  return x

def tensor(vertex,r):
  incid=tuple(e for e,(a,b) in enumerate(EDGES) if vertex in (a,b))
  T=inv(tuple(r[i] for i in incid)).copy()
  for axis,e in enumerate(incid):
    if EDGES[e][1]==vertex:
      T=np.moveaxis(np.tensordot(T,eps(r[e]),axes=([axis],[0])),-1,axis)
  return incid,T

@lru_cache(None)
def coeff(state):
  r=reps(state);args=[];out=[]
  for vertex in VERTICES:
    edges,T=tensor(vertex,r)
    args.extend((T,[2*e+int(EDGES[e][1]==vertex) for e in edges]))
  for e,n in enumerate(r):
    if e in CHORDS:out.extend((2*e,2*e+1))
    else:args.extend((np.eye(n+1,dtype=object),[2*e,2*e+1]))
  result=oe.contract(*args,out,optimize='greedy')*prod(sqrt(n+1) for n in r)
  return np.vectorize(simplify,otypes=[object])(result)

def fusion_element(a,b,k):
  """<a|W_k|b> via Peter-Weyl orthogonality and fundamental character fusion."""
  ba,sha=a;bb,shb=b
  if any(ba[i]!=bb[i] for i in range(N) if i!=k) or ba[k]==bb[k]:
    return S.Zero
  A=coeff(a);B=coeff(b)
  args=[A,list(range(2*N)),B,list(range(2*N,4*N))]
  for i in range(N):
    if i==k:
      idx_a=2*i if ba[i] else 2*N+2*i
      args.extend((np.eye(2,dtype=object)*R(1,2),[idx_a,idx_a+1]))
    elif ba[i]:
      args.extend((np.eye(2,dtype=object)*R(1,2),[2*i,2*N+2*i]))
      args.extend((np.eye(2,dtype=object),[2*i+1,2*N+2*i+1]))
    else:
      args.extend((np.eye(1,dtype=object),[2*i,2*N+2*i]))
      args.extend((np.eye(1,dtype=object),[2*i+1,2*N+2*i+1]))
  return simplify(np.asarray(oe.contract(*args,[],optimize='greedy')).item())

if __name__=='__main__':
  for state in states():
    C=coeff(state)
    assert C.shape==net_coef(state).shape
    assert np.max(abs(np.array(C,dtype=float)-net_coef(state)))<1e-12
  print('exact original-link network coefficients:',len(states()))
