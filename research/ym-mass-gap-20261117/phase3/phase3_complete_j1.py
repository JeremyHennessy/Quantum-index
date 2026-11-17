"""SU2 connected two-square Phase 3 preflight: j<=1 complete spin-network basis.
Independent 6j recoupling and CG-projector/Haar 24-cell integration.
Numerical cutoff spectra are NOT continuum mass-gap results.
"""
from functools import lru_cache
from itertools import product
from math import sqrt
import numpy as np
from sympy import Rational, N, simplify, sqrt as root
from sympy.physics.wigner import clebsch_gordan, wigner_6j

HALF=Rational(1,2)
LINKS=(('A','B'),('B','C'),('D','E'),('E','F'),('A','D'),('B','E'),('C','F'))
FACES=(
 (('A','B',-1),('A','D',1),('D','E',1),('B','E',-1)),
 (('B','E',1),('E','F',1),('C','F',-1),('B','C',-1)),
)
def admissible(a,b,c):
 return all(isinstance(x,int) and x>=0 for x in (a,b,c)) and (a+b+c)%2==0 and abs(a-b)<=c<=a+b
def basis(n):
 if not isinstance(n,int) or n<0 or n>8:raise ValueError('invalid cutoff')
 return tuple((a,b,c) for a,b,c in product(range(n+1),repeat=3) if admissible(a,b,c))
def C(n):return Rational(n*(n+2),4)
def electric(s):
 if not admissible(*s):raise ValueError('Gauss-law invalid')
 a,b,c=s;return 3*C(a)+3*C(b)+C(c)

@lru_cache(None)
def wigner_element(s,t,side='L'):
 """<a'b'c'|W_L|abc>=sqrt(d_a*d_a'*d_c*d_c')*{a b c;c' 1/2 a'}^2."""
 if side not in ('L','R') or not admissible(*s) or not admissible(*t):raise ValueError('invalid spins')
 if side=='R':return wigner_element((s[1],s[0],s[2]),(t[1],t[0],t[2]),'L')
 a,b,c=s;ap,bp,cp=t
 if b!=bp or abs(a-ap)!=1 or abs(c-cp)!=1:return Rational(0)
 aa,bb,cc,app,cpp=(Rational(x,2) for x in (a,b,c,ap,cp))
 try:six=wigner_6j(aa,bb,cc,cpp,HALF,app)
 except ValueError:return Rational(0)
 return simplify(root((a+1)*(ap+1)*(c+1)*(cp+1))*six*six)

def analytic_matrices(S):
 from sympy import zeros
 n=len(S);L=zeros(n);R=zeros(n)
 for i,s in enumerate(S):
  for j,t in enumerate(S):
   L[i,j]=wigner_element(s,t,'L');R[i,j]=wigner_element(s,t,'R')
 return L,R

def points24():
 P=[]
 for axis in range(4):
  for sign in (-1.,1.):
   v=np.zeros(4);v[axis]=sign;P.append(v)
 P.extend(np.array(v) for v in product((-.5,.5),repeat=4))
 return np.array(P)

def fundamental(q):
 w,x,y,z=q
 return np.array([[w-1j*z,-y-1j*x],[y-1j*x,w+1j*z]],complex)
T=np.array([[1,0,0],[0,1/sqrt(2),0],[0,1/sqrt(2),0],[0,0,1]],complex)
def rep(n,U):
 if n==0:return np.ones((1,1),complex)
 if n==1:return U
 if n==2:return T.conj().T@np.kron(U,U)@T
 raise ValueError('CG-Haar proof limited to j<=1')
@lru_cache(None)
def cg(a,b,c):
 if not admissible(a,b,c) or max(a,b,c)>2:raise ValueError('outside j<=1')
 A,B,D=(Rational(n,2) for n in (a,b,c))
 v=np.zeros(((a+1)*(b+1),c+1),complex)
 for i in range(a+1):
  for j in range(b+1):
   for k in range(c+1):
    v[i*(b+1)+j,k]=complex(N(clebsch_gordan(A,B,D,A-i,B-j,D-k)))
 assert np.max(abs(v.conj().T@v-np.eye(c+1)))<1e-13
 return v
def independent_Haar_j1():
 S=basis(2);P=points24()
 R=[[rep(n,fundamental(q)) for n in range(3)] for q in P]
 I=[[v.conj().T for v in row] for row in R]
 fun=[];left=[];right=[]
 for k,q in enumerate(P):
  for h,p in enumerate(P):
   row=[]
   for a,b,c in S:
    V=cg(a,b,c);D=np.kron(R[k][a],I[h][b])
    value=np.trace(V.conj().T@D@V)*sqrt((a+1)*(b+1)/(c+1))
    assert abs(value.imag)<1e-12
    row.append(value.real)
   fun.append(row);left.append(2*q[0]);right.append(2*p[0])
 F=np.array(fun);WL=np.array(left);WR=np.array(right)
 return S,F.T@F/len(F),F.T@(F*WL[:,None])/len(F),F.T@(F*WR[:,None])/len(F)

def finite_H(n,alpha,beta):
 if n<1 or alpha<=0 or beta<0:raise ValueError('invalid cutoff/coupling')
 S=basis(n);H=np.diag([alpha*float(electric(s)) for s in S])
 for i,s in enumerate(S):
  for j,t in enumerate(S):
   H[i,j]-=beta*float(N(wigner_element(s,t,'L')+wigner_element(s,t,'R')))
 return H
def finite_gap(n,alpha,beta):
 e=np.linalg.eigvalsh(finite_H(n,alpha,beta))
 return float(e[1]-e[0])

def full_one_step_tail(n):
 """Fundamental character changes a,b,c by at most 1 (twice-spin)."""
 P=basis(n);Q=tuple(s for s in basis(n+1) if max(s)>n)
 A=np.array([[float(N(wigner_element(q,p,'L')+wigner_element(q,p,'R'))) for p in P] for q in Q])
 return P,Q,A
def witness_squared(n):
 """Exact ||Q_J(WL+WR) chi_J(G)||², J=n/2, for ALL finite n."""
 if not isinstance(n,int) or n<0:raise ValueError('invalid cutoff')
 return Rational(3*n+4,2*(n+1))
def conditional_tail_floor(n,alpha,beta):
 """Fixed graph Q_JHQ_J>=alpha*C(J+1/2)-4*beta; NOT continuum-uniform."""
 return float(alpha*C(n+1)-4*beta)
