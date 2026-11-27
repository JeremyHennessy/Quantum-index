"""Exact planar witness for rescaled second-moment leakage in padded cubic boxes."""
from fractions import Fraction as Q

import sympy as S

from first_order import D, E, mat
from locality import edge_bits

def verify_rescaled_law(spectral_slices,q):
    ent,G,A=mat(D)
    I=S.eye(len(ent))
    T=G.inv()*A
    energy,n_active,n_groups=spectral_slices(ent,G,A,I)
    assert (n_active,n_groups)==(64,190)
    old=G.inv()*sum((M*Q(2,30-e) for e,M in energy.items() if e!=30),S.zeros(64))
    occ=[]
    for _,net in ent:
        b=edge_bits(net)
        assert b.bit_count()==10
        occ.append(sum(a[0]==t[0] in (0,2) or a[1]==t[1] in (0,4)
                       for j,(a,t) in enumerate(E) if b>>j&1))
    padded=old+I/3-S.diag(*[Q(b+20,168) for b in occ])
    assert padded.T*G==G*padded
    coeff={m:c for m,_,c in q}
    v=S.Matrix([coeff.get(m,0) if len(net)==1 else 0 for m,net in ent])
    assert T*v==S.zeros(64,1) and (v.T*G*v)[0]==6
    assert (v.T*G*padded*v)[0]/6==Q(-13,336)
    N=S.Matrix.hstack(*T.nullspace())
    assert N.cols==28
    null=N*(N.T*G*N).inv()*N.T*G
    assert null*null==null and null.T*G==G*null and T*null==S.zeros(64)
    w=padded*v
    escape=(I-null)*w
    assert T*escape==T*w
    assert (v.T*G*escape)[0]==0
    gram2=(escape.T*G*escape)[0]/6
    assert gram2==Q(5945,903168)>0
    print("rescaled law: exact nonzero-slope second-moment escape lower bound",
          gram2,"from",n_groups,"old parity groups")
