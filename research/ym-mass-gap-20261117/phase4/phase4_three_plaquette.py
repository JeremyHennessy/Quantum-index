"""Research-only connected SU(2) 3-plaquette proof-lab preflight.

Two independent magnetic-integration paths (exact CG fusion and 24-cell
Haar cubature), with a common explicitly derived gauge-invariant basis.
The results are finite spatial graph calculations, NOT a 4D mass-gap proof.
"""
from functools import lru_cache
from itertools import product
from math import sqrt
import opt_einsum as oe
import numpy as np
from sympy import Rational, N, Matrix
from sympy.physics.wigner import clebsch_gordan, wigner_3j, wigner_6j

VERTICES=tuple('ABCDEFGH')
EDGES=(('A','B'),('B','C'),('C','D'),('E','F'),('F','G'),('G','H'),('A','E'),('B','F'),('C','G'),('D','H'))
FACES=(('A','B','F','E'),('B','C','G','F'),('C','D','H','G'))
BOTTOM=(3,4,5)
HALF=Rational(1,2)

def admissible(a,b,c):
    return all(isinstance(x,int) and x>=0 for x in (a,b,c)) and (a+b+c)%2==0 and abs(a-b)<=c<=a+b

def physical_basis(n):
    """All 3-plaquette singlets, ordered (left, topMid, bottomMid, right, shared1, shared2) in 2j."""
    if not isinstance(n,int) or isinstance(n,bool) or n<0 or n>4:raise ValueError('unsupported 2j cutoff')
    return tuple((a,t,u,d,v,w) for a,t,u,d,v,w in product(range(n+1),repeat=6)
            if all((admissible(a,t,v),admissible(a,u,v),admissible(t,d,w),admissible(u,d,w))))

def edge_labels(s):
    a,t,u,d,v,w=s
    return (a,t,d,a,u,d,a,v,w,d)

def casimir(n):return Rational(n*(n+2),4)
def electric(s):return sum(casimir(n) for n in edge_labels(s))

@lru_cache(None)
def epsilon(n):
    j=Rational(n,2);E=np.zeros((n+1,n+1))
    for i in range(n+1):E[i,n-i]=(-1)**i
    return E

@lru_cache(None)
def invariant(spins):
    if len(spins)==2:
        if spins[0]!=spins[1]:raise ValueError('degree 2 not singlet')
        return epsilon(spins[0])/sqrt(spins[0]+1)
    if len(spins)!=3 or not admissible(*spins):raise ValueError('degree 3 not singlet')
    a,b,c=spins;T=np.zeros((a+1,b+1,c+1))
    for i,j,k in product(range(a+1),range(b+1),range(c+1)):
        T[i,j,k]=float(N(wigner_3j(Rational(a,2),Rational(b,2),Rational(c,2),Rational(a,2)-i,Rational(b,2)-j,Rational(c,2)-k)))
    return T

def vertex_tensor(vertex,reps):
    incid=tuple(i for i,(a,b) in enumerate(EDGES) if vertex in (a,b))
    T=invariant(tuple(reps[i] for i in incid)).copy()
    for axis,e in enumerate(incid):
        if EDGES[e][1]==vertex:
            T=np.moveaxis(np.tensordot(T,epsilon(reps[e]),axes=([axis],[0])),-1,axis)
    return incid,T

@lru_cache(None)
def network_coefficient(s):
    reps=edge_labels(s);args=[];out=[]
    for vertex in VERTICES:
        edges,T=vertex_tensor(vertex,reps)
        args.extend((T,[2*e+int(EDGES[e][1]==vertex) for e in edges]))
    for e,n in enumerate(reps):
        if e in BOTTOM:out.extend((2*e,2*e+1))
        else:args.extend((np.eye(n+1),[2*e,2*e+1]))
    return oe.contract(*args,out,optimize='greedy')*np.prod(np.sqrt(np.array(reps)+1))

def quaternions24():
    P=[]
    for axis in range(4):
        for sign in (-1.,1.):
            q=np.zeros(4);q[axis]=sign;P.append(q)
    P.extend(np.array(q) for q in product((-.5,.5),repeat=4))
    return np.array(P)

def quaternion_matrix(q):
    w,x,y,z=q
    return np.array([[w-1j*z,-y-1j*x],[y-1j*x,w+1j*z]],complex)
SYMSQ=np.array([[1,0,0],[0,1/sqrt(2),0],[0,1/sqrt(2),0],[0,0,1]],complex)
def rep(n,U):
    if n==0:return np.ones((1,1),complex)
    if n==1:return U
    if n==2:return SYMSQ.conj().T@np.kron(U,U)@SYMSQ
    raise ValueError('Haar route qualified only for j<=1')

def full_link_value(s,links):
    """Direct 10-link spin network, suitable for gauge-covariance adversarial tests."""
    reps=edge_labels(s);args=[]
    for vertex in VERTICES:
        edges,T=vertex_tensor(vertex,reps)
        args.extend((T,[2*e+int(EDGES[e][1]==vertex) for e in edges]))
    for e,n in enumerate(reps):args.extend((rep(n,links[e]),[2*e,2*e+1]))
    return oe.contract(*args,[],optimize='greedy')*np.prod(np.sqrt(np.array(reps)+1))

def Haar_matrices(n):
    """24^3 exact cubature, valid only for n<=2 (degree<=5 per quaternion)."""
    if n not in (1,2):raise ValueError('Haar 24-cell exactness not established for j>1')
    S=physical_basis(n);P=quaternions24();Ds={k:np.array([rep(k,quaternion_matrix(q)) for q in P]) for k in range(n+1)}
    F=np.empty((24**3,len(S)),complex)
    for k,s in enumerate(S):
        a,t,u,d,v,w=s;C=network_coefficient(s)
        F[:,k]=np.einsum('abcdef,iab,jcd,kef->ijk',C,Ds[a],Ds[u],Ds[d],optimize=True).reshape(-1)
    gram=F.conj().T@F/len(F)
    q0=np.array([2*q[0] for q in P]);ws=(np.repeat(q0,24**2),np.tile(np.repeat(q0,24),24),np.tile(q0,24**2))
    W=tuple(F.conj().T@(F*w[:,None])/len(F) for w in ws)
    return S,gram,W

@lru_cache(None)
def fusion_kernel(nt,ns):
    """Independent exact SU2 triple-D Haar integration via CG, no cubature."""
    K=np.zeros((nt+1,nt+1,ns+1,ns+1))
    if abs(nt-ns)!=1:return K
    Jt,Js=Rational(nt,2),Rational(ns,2)
    for i,j,k,l in product(range(nt+1),range(nt+1),range(ns+1),range(ns+1)):
        acc=0
        for spin in (-HALF,HALF):
            acc+=clebsch_gordan(Js,HALF,Jt,Js-k,spin,Jt-i)*clebsch_gordan(Js,HALF,Jt,Js-l,spin,Jt-j)
        K[i,j,k,l]=float(N(acc))/(nt+1)
    return K

def CG_transition(s,t,face):
    a,top,u,d,sh1,sh2=s;aa,tt,uu,dd,vv,ww=t
    C=network_coefficient(s);D=network_coefficient(t)
    if face==0 and u==uu and d==dd and abs(a-aa)==1:
        return float(np.einsum('ijabcd,klabcd,ijkl->',C,D,fusion_kernel(a,aa),optimize=True)/(u+1)/(d+1))
    if face==1 and a==aa and d==dd and abs(u-uu)==1:
        return float(np.einsum('abijcd,abklcd,ijkl->',C,D,fusion_kernel(u,uu),optimize=True)/(a+1)/(d+1))
    if face==2 and a==aa and u==uu and abs(d-dd)==1:
        return float(np.einsum('abcdij,abcdkl,ijkl->',C,D,fusion_kernel(d,dd),optimize=True)/(a+1)/(u+1))
    return 0.

@lru_cache(None)
def CG_matrices(n):
    S=physical_basis(n);W=[np.zeros((len(S),len(S))) for _ in range(3)]
    for i,s in enumerate(S):
        for j,t in enumerate(S):
            for face in range(3):W[face][i,j]=CG_transition(s,t,face)
    return S,tuple(W)

def halfspin_loops():
    """Independent Z2 loop-symmetric-difference construction at j<=1/2."""
    S=physical_basis(1);W=[np.zeros((8,8)) for _ in range(3)]
    for i,s in enumerate(S):
        a,t,u,d,v,w=s;bits=(a,t,d)
        for face in range(3):
            out=list(bits);out[face]^=1
            target=(out[0],out[1],out[1],out[2],out[0]^out[1],out[1]^out[2])
            neighbors=sum(bits[z] for z in (face-1,face+1) if 0<=z<3)
            W[face][i,S.index(target)]=2.**(-neighbors)
    return S,tuple(W)

def one_step_tail(n):
    """Q_J W P_J fully supported in jmax=J+1/2 for fundamental Wilson terms."""
    if n not in (1,2):raise ValueError('admitted research cutoffs only')
    P=physical_basis(n);S=physical_basis(n+1);Q=tuple(x for x in S if x not in set(P))
    A=np.array([[sum(CG_transition(q,p,k) for k in range(3)) for p in P] for q in Q])
    return P,Q,A

def local_electric_floor(n):
    """Rigorous graph-local lower floor; proof in PHASE4_RESEARCH_REPORT.md."""
    if n<0 or not isinstance(n,int):raise ValueError('invalid n')
    j=Rational(n+1,2)
    return j*(2*j+3)

def weighted_certificate(n,alpha,beta,z=0):
    """Finite-graph rigorously derived upper bound, numerical finite matrix evaluation.
    No continuum or volume-uniform claim. Returns None if resolvent admission fails.
    """
    if not(alpha>0 and beta>0):raise ValueError('positive couplings required')
    P,Q,A=one_step_tail(n);Nplaquettes=3
    floor=float(local_electric_floor(n));gap=alpha*floor-2*Nplaquettes*beta-z
    raw=np.linalg.svd(A,compute_uv=False)[0]**2
    if gap<=0:return {'admissible':False,'floor':floor,'denominator':gap,'raw_norm2':raw}
    ee=np.array([float(electric(s)) for s in Q]);D=alpha*ee-z
    weighted=A.T@(A/D[:,None]);lam=max(np.linalg.eigvalsh(weighted))
    eta=2*Nplaquettes*beta/(alpha*floor-z)
    return {'admissible':True,'floor':floor,'denominator':gap,'raw_norm2':raw,
            'global_upper':beta**2*raw/gap,'energy_weighted_matrix':lam,
            'weighted_upper':beta**2*lam/(1-eta),'eta':eta}

def truncated_gap(n,alpha,beta):
    S,W=CG_matrices(n)
    E=np.diag([alpha*float(electric(s)) for s in S]);M=E-beta*sum(W)
    e=np.linalg.eigvalsh(M)
    return float(e[1]-e[0])
