"""Exact global B6 characteristic and elementary invariant chart."""
from collections import defaultdict
from itertools import product
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S
from separated_channel import build
from s0_stencils import verify_symmetries

z=S.symbols("z0:3");X=S.symbols("X0:3");e=S.symbols("e1:4");l=S.Symbol("l")

def laurent(f):
    f=S.expand(f)
    r=defaultdict(lambda:S.S.Zero)
    for t in S.Add.make_args(f):
        m=t.as_powers_dict()
        k=tuple(int(m.get(i,0)) for i in z+(l,))
        c=S.cancel(t/S.prod(a**j for a,j in zip(z+(l,),k)))
        assert c.is_Rational
        r[k]+=c
    return {k:v for k,v in r.items() if v}

def convert_poly(M):
    terms=laurent(M)
    for k,c in terms.items():
        for sig in product((-1,1),repeat=3):
            a=tuple(v*s for v,s in zip(k[:3],sig))
            assert terms[a+(k[3],)]==c
    ans=S.expand(sum(c*l**k[3]*S.prod(2*S.chebyshevt(v,j/2) if v else S.S.One
                                       for v,j in zip(k[:3],X))
                     for k,c in terms.items() if min(k[:3])>=0))
    assert laurent(ans.subs({a:q+1/q for a,q in zip(X,z)}))==terms
    return ans

def invariants(f):
    poly=S.Poly(f,l)
    res=[]
    for H in poly.all_coeffs():
        hh,rem,ss=S.symmetrize(H,list(X),formal=True)
        assert rem==0
        res.append(S.expand(hh.subs({a:q for (a,_),q in zip(ss,e)})))
    g=S.Poly.from_list(res,l).as_expr()
    sub={e[0]:sum(X),e[1]:X[0]*X[1]+X[0]*X[2]+X[1]*X[2],e[2]:S.prod(X)}
    assert S.expand(g.subs(sub)-f)==0
    return g

def sparse(f,vs):
    return [[*(int(k) for k in ex),str(c)] for ex,c in S.Poly(f,*vs,domain=S.QQ).terms()]

def main(out):
    a,T,bb=build(4)
    verify_symmetries(a,T,bb)
    M=S.zeros(3)
    for (i,j,k),v in bb.items():M[i,j]+=S.Rational(v)*S.prod(a**b for a,b in zip(z,k))
    F=S.expand((l*S.eye(3)-M).det(method="berkowitz"))
    H=convert_poly(F)
    P=invariants(H)
    k=S.diff(P,e[2]);assert k.is_Rational and k!=0
    U=S.expand(-P.subs(e[2],0)/k)
    assert S.expand(P.subs(e[2],U))==0
    assert S.Poly(P,l).LC()==1
    van=S.Matrix(3,3,lambda i,j:S.diff([sum(X),X[0]*X[1]+X[0]*X[2]+X[1]*X[2],
                                     S.prod(X)][i],X[j])).det()
    assert S.factor(van)==(X[0]-X[1])*(X[0]-X[2])*(X[1]-X[2])
    print("p6",S.factor(P),flush=True)
    print("affine e3 derivative",k,"e3 chart",U,flush=True)
    D={"schema":"global-elementary-invariant-chart-v1","p6":sparse(P,(*e,l)),
       "e3_derivative":str(k),"e3_elimination":sparse(U,(*e[:2],l))}
    raw=(json.dumps(D,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(out).open('xb') as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument("out");a=ap.parse_args();main(a.out)
