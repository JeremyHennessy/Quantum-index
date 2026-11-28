"""Exact interior threshold, leading coefficient, and discriminant; no root classification."""
import argparse
import hashlib
import json
from math import prod
from pathlib import Path

import sympy as S
from sympy.polys.rings import ring
from separated_channel import build, at_endpoint

QPIN="dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7"
EPIN="6cd583183646e40360f530f48307ee26cb7661981e6f7708169b5393f2891711"
R,a,b,l=ring("e1,e2,l",S.QQ)
E=S.Rational(-13,336)


def pinned(path,pin):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==pin
    return json.loads(raw)


def elementary_bounds():
    z=S.symbols("z0:3")
    _,_,B=build(4)
    M=S.zeros(3)
    for (i,j,s),c in B.items():
        M[i,j]+=S.Rational(c)*prod(w**k for w,k in zip(z,s))
    target=S.zeros(3)
    for i in range(3):
        for j in range(i+1,3):
            v=S.zeros(3,1)
            v[i]=1+1/z[j]
            v[j]=1+1/z[i]
            target+=v*v.subs({w:1/w for w in z},simultaneous=True).T
    assert (168*(S.Rational(3,280)*S.eye(3)-M)-target).applyfunc(S.expand)==S.zeros(3)
    assert all(v<=0 for v in B.values())
    H0=at_endpoint(B,3)+S.Rational(71,840)*S.eye(3)
    assert H0.is_positive_semidefinite


def entries(f):
    return [[i,j,k,str(v)] for (i,j,k),v in sorted(f.items(),reverse=True)]


def run(qpath,epath,out):
    q=pinned(qpath,QPIN)["q9"]
    e=pinned(epath,EPIN)
    U=R.from_dict({(i,j,k):S.QQ(v) for i,j,k,v in e["e3_elimination"]})
    G=R.zero
    for p in q:
        G=G*(E-l)+sum(S.QQ(v)*a**i*b**j*U**k for i,j,k,v in p)
    assert G.degrees()==(5,3,11) and len(G)==113
    c,gf=G.factor_list()
    assert len(gf)==1 and gf[0][1]==1
    A,B,C,D=[R.from_dict({(i,0,k):v for (i,j,k),v in G.items() if j==d}) for d in (3,2,1,0)]
    assert A==-(1344*l+325)*(112*l-3)**2/S.QQ(91215037658033943478272)
    assert S.Rational(-325,1344)<-S.Rational(71,840)<S.Rational(3,280)<S.Rational(3,112)
    elementary_bounds()
    disc=B**2*C**2-4*A*C**3-4*B**3*D-27*A**2*D**2+18*A*B*C*D
    assert disc.degrees()==(11,0,32) and len(disc)==317
    dc,df=disc.factor_list()
    assert len(df)==1 and df[0][1]==1
    record={"schema":"global-interior-threshold-v1","target":str(E),"G":entries(G),
            "e2_leading":entries(A),"e2_discriminant":entries(disc),
            "G_irreducible_scale":str(c),"discriminant_irreducible_scale":str(dc)}
    raw=(json.dumps(record,sort_keys=True,separators=(",",":"))+"\n").encode()
    with Path(out).open("xb") as f:
        f.write(raw)
    print("verified physical elementary bounds and nonvanishing cubic lead")
    print("G degrees/terms",G.degrees(),len(G),"discriminant",disc.degrees(),len(disc))
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest())


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("global_q");p.add_argument("elementary");p.add_argument("output")
    x=p.parse_args();run(x.global_q,x.elementary,x.output)
