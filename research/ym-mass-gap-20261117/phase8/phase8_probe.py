"""Original 13-link SU(2) geometry and independent numeric gauge/Haar controls.

A 4-face, 2-row open ladder has 10 vertices, 13 original oriented edges.
A spin-network state is (horizontal 2j bits, 3 shared-vertical twice-spins).
The 34 states are perturbatively complete for the *specific* mixed
b2^2*b3^2*b4^2 scalar and are NOT an invariant finite-beta subspace.
"""
from itertools import product
from functools import lru_cache
from fractions import Fraction
from math import sqrt
import numpy as np
import opt_einsum as oe
from sympy import Rational, N as symN
from sympy.physics.wigner import wigner_3j

N=4
VERTICES=tuple(f'T{i}' for i in range(N+1))+tuple(f'B{i}' for i in range(N+1))
TOP=tuple((f'T{i}',f'T{i+1}') for i in range(N))
BOTTOM=tuple((f'B{i}',f'B{i+1}') for i in range(N))
VERT=tuple((f'T{i}',f'B{i}') for i in range(N+1))
EDGES=TOP+BOTTOM+VERT
CHORDS=tuple(range(N,2*N))

def states():
  out=[]
  for b in product((0,1),repeat=N):
    choices=[]
    for i in range(N-1):
      choices.append((0,2) if b[i] and b[i+1] else ((1,) if b[i]!=b[i+1] else (0,)))
    for shared in product(*choices):
      out.append((b,shared))
  return tuple(out)

def reps(state):
  b,shared=state
  return tuple(b)+tuple(b)+(b[0],)+tuple(shared)+(b[-1],)

def e(state):
  return sum((Fraction(j*(j+2),4) for j in reps(state)),Fraction())

def admissible(a,b,c):
  return abs(a-b)<=c<=a+b and (a+b+c)%2==0

def epsilon(n):
  m=np.zeros((n+1,n+1))
  for i in range(n+1):m[i,n-i]=(-1)**i
  return m

@lru_cache(None)
def invariant(spins):
  if len(spins)==2:
    assert spins[0]==spins[1]
    return epsilon(spins[0])/sqrt(spins[0]+1)
  assert admissible(*spins)
  a,b,c=spins
  return np.array([[[float(symN(wigner_3j(Rational(a,2),Rational(b,2),Rational(c,2),Rational(a,2)-i,Rational(b,2)-j,Rational(c,2)-k))) for k in range(c+1)] for j in range(b+1)] for i in range(a+1)])

def vertex_tensor(vertex,r):
  incid=tuple(i for i,(a,b) in enumerate(EDGES) if vertex in (a,b))
  T=invariant(tuple(r[i] for i in incid)).copy()
  for axis,edge in enumerate(incid):
    if EDGES[edge][1]==vertex:
      T=np.moveaxis(np.tensordot(T,epsilon(r[edge]),axes=([axis],[0])),-1,axis)
  return incid,T

@lru_cache(None)
def net_coef(state):
  r=reps(state);args=[];out=[]
  for vertex in VERTICES:
    edges,T=vertex_tensor(vertex,r)
    args.extend((T,[2*edge+int(EDGES[edge][1]==vertex) for edge in edges]))
  for edge,n in enumerate(r):
    if edge in CHORDS:out.extend((2*edge,2*edge+1))
    else:args.extend((np.eye(n+1),[2*edge,2*edge+1]))
  return oe.contract(*args,out,optimize='greedy')*np.prod(np.sqrt(np.array(r)+1))

def axes():
  out=[]
  for i in range(4):
    for sign in (-1,1):
      x=np.zeros(4);x[i]=sign;out.append(x)
  return out

def repmat(q,j):
  if j==0:return np.ones((1,1),complex)
  assert j==1
  w,x,y,z=q
  return np.array([[w-1j*z,-y-1j*x],[y-1j*x,w+1j*z]],complex)

def eval_state(state):
  b,_=state;C=net_coef(state)
  Ds=[np.array([repmat(q,j) for q in axes()]) for j in b]
  args=[C,list(range(2*N))]
  for i,D in enumerate(Ds):
    args.extend((D,[2*N+i,2*i,2*i+1]))
  y=oe.contract(*args,list(range(2*N,3*N)),optimize='greedy')
  return y.reshape(-1)

def matrices():
  S=states()
  F=np.column_stack([eval_state(s) for s in S])
  gram=F.conj().T@F/F.shape[0]
  q0=np.array([2*q[0] for q in axes()]);W=[]
  for k in range(N):
    weight=np.array([q0[kidx] for kidx in np.indices((8,)*N).reshape(N,-1)[k]])
    W.append(F.conj().T@(F*weight[:,None])/len(F))
  return S,np.array([float(e(s)) for s in S]),W,gram

if __name__=='__main__':
  S,E,W,G=matrices()
  print('states',len(S),'Gram error',np.max(abs(G-np.eye(len(S)))))
  print('Hermitian error',max(np.max(abs(x-x.conj().T)) for x in W))
