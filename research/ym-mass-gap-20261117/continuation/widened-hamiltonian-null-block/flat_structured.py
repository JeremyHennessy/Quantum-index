"""Exact generic flat low-channel eigenspace and its sliced determinant factor."""
import argparse
import json
from fractions import Fraction as Q
from pathlib import Path
from math import prod

import sympy as S
from sympy.polys.matrices import DomainMatrix
from separated_channel import build,at_endpoint,span
from reference_factor_slices import phase,pair_times

E=S.Rational(-13,336)
L=S.Rational(-1,42)
O=(0,0,0)

def full_flat():
    h,T,B=build(6)
    N=S.Matrix.hstack(*at_endpoint(T,22).nullspace());G=N.T*N
    z=S.symbols('z0:3')
    D=S.MutableSparseMatrix.zeros(22)
    for (j,i,ez),c in B.items():
        assert all(-1<=v<=1 for v in ez)
        D[j,i]+=S.Rational(c)*prod(x**(1+a) for x,a in zip(z,ez))
    D=N.T*D*N-L*G*prod(z)
    D=D.applyfunc(S.expand)
    rect=[j for j in range(N.cols) if all(not N[i,j] or span(h[i])!=(1,1,1) for i in range(N.rows))]
    cub=[j for j in range(N.cols) if j not in rect]
    assert (len(rect),len(cub))==(6,8)
    assert D.extract(rect,rect).is_zero_matrix
    X=DomainMatrix.from_Matrix(D.extract(rect,cub))
    rr=X.to_field().rank()
    print("rectangular coupling exact Laurent rank",rr,flush=True)
    assert rr==3
    # Six pure-rectangle entries in the kernel of the adjoint cross
    # map contribute three polynomial null germs. One exact specialization
    # attains rank 11, making the upper bound sharp.
    r=D.subs(dict(zip(z,(2,3,5)))).rank()
    assert r==11
    print("global Laurent-polynomial rank shifted six-loop null form",r,"generic flat multiplicity",14-r,flush=True)
    return D

def per_slice(data):
    _,_,B=build(4)
    t=S.Symbol('t');I=S.I
    for a in data:
        u,v=map(Q,a["transverse"])
        P=S.zeros(3)
        d=(u.denominator**2+u.numerator**2)*(v.denominator**2+v.numerator**2)
        for (j,i,z),b in B.items():
            ab=pair_times(phase(u,z[0]),phase(v,z[1]))
            c=(1+t*t) if z[2]==0 else (1-t*t+2*I*t*z[2])
            P[j,i]+=S.Rational(b,d)*(ab[0]+I*ab[1])*c
        P+=(L-E)*(1+t*t)*S.eye(3)
        dd,rem=S.div(S.Poly(S.expand(P.det()),t,domain=S.QQ_I),S.Poly(1+t*t,t,domain=S.QQ_I))
        assert rem.is_zero and dd.degree()==4 and all(q.is_real for q in dd.all_coeffs())
        q=S.Poly.from_list(list(map(int,a["factors"][0]["coefficients"])),t)
        assert S.Poly(dd.as_expr(),t,domain=S.QQ).monic()==q.monic()
        print("specialized repeated quartic exactly from flat −1/42 at",u,v,flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("slice_artifact")
    a=p.parse_args()
    full_flat()
    per_slice(json.loads(Path(a.slice_artifact).read_bytes()))
