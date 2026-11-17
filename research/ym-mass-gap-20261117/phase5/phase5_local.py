"""Research-only SU(2) open ladder models, low-link-spin Haar controls and
finite-graph local resolvent perturbation. NOT a four-dimensional YM proof.

All arithmetic labelled exact uses integers / fractions / SU2 character fusion.
Physical Hilbert space = no-charge singlet spin networks of an open 2-row ladder.
"""
from fractions import Fraction
from itertools import product
from functools import lru_cache
import numpy as np


def triangle(a,b,c):
    return all(isinstance(x,int) and not isinstance(x,bool) and x>=0 for x in (a,b,c)) and abs(a-b)<=c<=a+b and (a+b+c)%2==0


def graph(n):
    if not 2<=n<=5: raise ValueError('admitted 2..5 plaquette ladder only')
    top=[f'T{i}' for i in range(n+1)]
    bottom=[f'B{i}' for i in range(n+1)]
    edges=tuple((top[i],top[i+1]) for i in range(n))+tuple((bottom[i],bottom[i+1]) for i in range(n))+tuple((top[i],bottom[i]) for i in range(n+1))
    faces=tuple((top[i],top[i+1],bottom[i+1],bottom[i]) for i in range(n))
    return {'vertices':tuple(top+bottom),'edges':edges,'faces':faces}


def states(n, max_twice_j):
    """Label (a, intermediate top spins, intermediate bottom spins, d, shared vertical spins); spins are 2j."""
    if not 2<=n<=5 or not isinstance(max_twice_j,int) or max_twice_j not in (0,1,2):
        raise ValueError('only n=2..5 and twice-spin cutoff=0,1,2')
    k=n-2
    out=[]
    for a in range(max_twice_j+1):
      for d in range(max_twice_j+1):
       for topmid in product(range(max_twice_j+1),repeat=k):
        for botmid in product(range(max_twice_j+1),repeat=k):
         top=(a,)+topmid+(d,)
         bottom=(a,)+botmid+(d,)
         for shared in product(range(max_twice_j+1),repeat=n-1):
          if all(triangle(top[i],top[i+1],shared[i]) and triangle(bottom[i],bottom[i+1],shared[i]) for i in range(n-1)):
           out.append((a,)+topmid+botmid+(d,)+shared)
    return tuple(out)


def casimir_twice(n):
    return Fraction(n*(n+2),4)


def edge_spins(n,label):
    mid=n-2
    if len(label)!=2+2*mid+(n-1):raise ValueError('invalid spin-label length')
    a=label[0]
    topmid=label[1:1+mid]
    botmid=label[1+mid:1+2*mid]
    d=label[1+2*mid]
    shared=label[2+2*mid:]
    top=(a,)+topmid+(d,)
    bottom=(a,)+botmid+(d,)
    return top+bottom+(a,)+shared+(d,)


def electric(n,label):
    return sum((casimir_twice(x) for x in edge_spins(n,label)),Fraction(0))


def bits_label(bits):
    n=len(bits)
    if not 2<=n<=5 or not all(v in (0,1) for v in bits): raise ValueError('binary loops required')
    a,d=bits[0],bits[-1]
    return (a,)+tuple(bits[1:-1])+tuple(bits[1:-1])+(d,)+tuple(bits[i]^bits[i+1] for i in range(n-1))


def bits_electric(bits):
    return Fraction(3,2)*sum(bits)+Fraction(3,4)*(bits[0]+bits[-1]+sum(bits[i]^bits[i+1] for i in range(len(bits)-1)))


def quat_mul(a,b):
    w,x,y,z=a;v,i,j,k=b
    return (w*v-x*i-y*j-z*k,w*i+x*v+y*k-z*j,w*j-x*k+y*v+z*i,w*k+x*j-y*i+z*v)


def axis_quaternions():
    out=[]
    for ax in range(4):
     for sign in (-1,1):
      q=[0]*4;q[ax]=sign;out.append(tuple(q))
    return tuple(out)


def char_half_run(bits, holonomies):
    if len(bits)!=len(holonomies):raise ValueError('length mismatch')
    acc=1;idx=0
    while idx<len(bits):
     if not bits[idx]:idx+=1;continue
     q=(1,0,0,0)
     while idx<len(bits) and bits[idx]:
      q=quat_mul(q,holonomies[idx]);idx+=1
     acc*=2*q[0]
    return acc


def halfspin_haar(n):
    """Exact 8-axis Haar integration of Gram and each Wilson matrix.
    Each wavefunction is degree <=1 in each quaternion; product times Wilson
    is degree <=3, which signed coordinate axes integrate exactly on S^3.
    This rule is NOT valid for quartic leakage or j=1 magnetic matrices.
    """
    if not 2<=n<=4:raise ValueError('unsupported size')
    basis=tuple(product((0,1),repeat=n))
    nvec=len(basis)
    F=np.empty((8**n,nvec),dtype=np.int64)
    W=np.empty((8**n,n),dtype=np.int64)
    for i,h in enumerate(product(axis_quaternions(),repeat=n)):
      F[i]=[char_half_run(b,h) for b in basis]
      W[i]=[2*q[0] for q in h]
    normalization=8**n
    gram=F.T@F
    matrices=tuple(F.T@(F*W[:,k,None]) for k in range(n))
    # exact rational validation of claimed integral values
    assert np.all(gram%normalization==0)
    assert np.all(gram//normalization==np.eye(nvec,dtype=np.int64))
    matrices_frac=tuple(tuple(tuple(Fraction(int(v),normalization) for v in row) for row in mat) for mat in matrices)
    return basis,matrices_frac


def halfspin_character_rule(n):
    """Independent exact SU2 character fusion: retained Wilson operator at j<=1/2.
    f_bits = product of characters for each contiguous run of occupied loops.
    Multiplication by chi_1/2(G_i) flips occupation i with factor 2^-k,
    k=# neighbouring occupied loops (0,1,2).
    """
    bits=tuple(product((0,1),repeat=n));idx={b:i for i,b in enumerate(bits)}
    mats=[]
    for k in range(n):
      M=[[Fraction(0) for _ in bits] for _ in bits]
      for i,b in enumerate(bits):
        dest=list(b);dest[k]^=1
        neighbors=int(k>0 and b[k-1]==1)+int(k+1<n and b[k+1]==1)
        M[i][idx[tuple(dest)]]=Fraction(1,2**neighbors)
      mats.append(tuple(tuple(row) for row in M))
    return bits,tuple(mats)


def local_one_step_tail(alpha=Fraction(1),beta=Fraction(1,2),z=Fraction(0),n=4):
    """Exact one-step Wilson action on psi=chi_1/2(G1) in complete P_(j<=1/2).
    For n>=2: omitted |chi_1(G1)> of electric E=8 and shared-link
    triplet of electric E=13/2 with squared norms 1 and 3/4.
    D = alpha*H_electric|Q - z, assuming both denominators positive.
    """
    if not isinstance(n,int) or n<2 or n>5:raise ValueError('2..5 plaquettes')
    alpha,beta,z=Fraction(alpha),Fraction(beta),Fraction(z)
    e_a=8*alpha-z;e_b=Fraction(13,2)*alpha-z
    if alpha<=0 or beta<0 or e_a<=0 or e_b<=0:raise ValueError('invalid inverse domain')
    return {'leakage_squared':Fraction(7,4),'weighted_bare':beta**2*(1/e_a+Fraction(3,4)/e_b),
            'high_energies':(e_a,e_b)}


def disconnected_second_order(n,alpha=Fraction(1),z=Fraction(0)):
    """Coefficient of beta^2 in R_n(beta)=<eta,(Q(H_e-beta W)Q-z)^-1 eta>,
    eta=chi_spin1(G1) in Q_(j<=1/2). Valid via convergent Neumann expansion
    for sufficiently small beta; Q is the complete high-spin complement.
    The first-order coefficient is zero. All channels below are orthogonal:
      W1: j=3/2 loop, energy 15alpha, squared amplitude 1;
      W2: shared-spin 1/2 (energy 9alpha, prob 1/3) and 3/2
          (energy 12alpha, prob 2/3);
      W3..Wn: isolated fundamental loop on distant plaquette,
          electric energy 8alpha+3alpha = 11alpha, each norm 1.
    """
    if not isinstance(n,int) or n<3 or n>5: raise ValueError('3..5 plaquettes')
    alpha,z=Fraction(alpha),Fraction(z)
    D=8*alpha-z
    if alpha<=0 or D<=0 or min(15*alpha-z,9*alpha-z,12*alpha-z,11*alpha-z)<=0:
      raise ValueError('resolvent not positive in expansion')
    coeff=(Fraction(1,1)/(15*alpha-z)+Fraction(1,3)/(9*alpha-z)+Fraction(2,3)/(12*alpha-z)+Fraction(n-2,1)/(11*alpha-z))/(D*D)
    return {'R0':Fraction(1,1)/D,'R1':Fraction(0),'R2':coeff}


def far_extra_exact(alpha=Fraction(1),z=Fraction(0)):
    alpha,z=Fraction(alpha),Fraction(z)
    if alpha<=0 or min(8*alpha-z,11*alpha-z)<=0:raise ValueError('invalid')
    return Fraction(1,1)/((8*alpha-z)**2*(11*alpha-z))


def admissible_resolvent_beta(n,alpha,z,beta):
    """Simple sufficient Neumann radius from electric floor 5alpha and norm W<=2n.
    For real beta with |beta|< (5alpha-z)/(2n), the Q resolvent exists.
    This is NOT volume uniform and not a gap above the interacting ground state.
    """
    if n<3 or n>5:raise ValueError('invalid n')
    alpha,z,beta=map(Fraction,(alpha,z,beta))
    return alpha>0 and 5*alpha-z>0 and 2*n*abs(beta)<5*alpha-z


def quat_inverse(q):
    w,x,y,z=q
    return (w,-x,-y,-z)


def trace_plaquette(field,n,i):
    """Oriented trace for square i in original 3n+1-link graph."""
    g=graph(n)
    if not 0<=i<n:raise ValueError('face out of range')
    face=g['faces'][i];edges=g['edges']
    U=(1.,0.,0.,0.)
    for k in range(4):
        a,b=face[k],face[(k+1)%4]
        if (a,b) in edges:u=field[edges.index((a,b))]
        elif (b,a) in edges:u=quat_inverse(field[edges.index((b,a))])
        else:raise AssertionError('face edge absent')
        U=quat_mul(U,u)
    return 2*U[0]


def transform_links(field,gauge,n):
    return tuple(quat_mul(quat_mul(gauge[a],field[i]),quat_inverse(gauge[b]))
                 for i,(a,b) in enumerate(graph(n)['edges']))


def haar24():
    v=list(axis_quaternions())
    v+=list(product((-.5,.5),repeat=4))
    return tuple(v)
