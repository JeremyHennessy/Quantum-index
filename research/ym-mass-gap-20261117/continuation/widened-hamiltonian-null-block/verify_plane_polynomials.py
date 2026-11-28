"""Cross-pin prior exact lines and identify the fixed reflection blocks."""
from concurrent.futures import ProcessPoolExecutor
from itertools import product
from collections import defaultdict
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.matrices import DomainMatrix

from separated_channel import build,at_endpoint
from s0_stencils import setup,transport,L
from negative_plane_polynomials import U,V,thresholds

PIN="7758f8a0ff27ebb1cd26ec22f392a4b29ea66cca30d1e6e8aabf8074b9975be9"
CRIT="b3654285e0d760723f92185e3dbddc5ef1db46dbc9a6d426d95b58c8f88f811d"
LINE="13fb891262c6938a8161b071c906ad6ed7a0a20878db6216bac2d1b457371260"
v=S.Symbol("v")

def read(path,sha):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==sha
    return json.loads(raw)

def plane_blocks():
    h,T,_=build(6)
    N=S.Matrix.hstack(*at_endpoint(T,22).nullspace())
    G=N.T*N
    P=S.zeros(22)
    for j,a in enumerate(h):
        a,z=transport(a,(1,1,-1),(0,1,2))
        P[h.index(a),j]=(-1)**abs(z[2])
    assert P*P==S.eye(22) and P.T==P
    I=G.inv()*N.T*P*N
    assert N*I==P*N and I*I==S.eye(14)
    pl=(I-S.eye(14)).nullspace()
    mi=(I+S.eye(14)).nullspace()
    assert (len(pl),len(mi))==(6,8)
    J=S.Matrix.hstack(*(pl+mi))
    _,D=setup()
    op=defaultdict(lambda:S.zeros(14))
    for (a,b,c),M in D.items():op[a,b]+=(-1)**abs(c)*M
    dic=[{},{}]
    Jinv=J.inv()
    for pos,M in op.items():
        assert I*M==M*I
        F=Jinv*M*J
        assert F[:6,6:].is_zero_matrix and F[6:,:6].is_zero_matrix
        dic[0][pos]=F[:6,:6];dic[1][pos]=F[6:,6:]
    for bl,p in zip(dic,(2,1)):
        h=S.zeros(next(iter(bl.values())).rows)
        for (i,j),m in bl.items():h+=m*S.Integer(2)**i*S.Integer(3)**j
        a=h.charpoly(v).as_poly()
        q,r=a.div(S.Poly((v-L)**p,v,domain=S.QQ))
        assert r.is_zero and q.eval(L)!=0
    return dic

def sample(x,y,blocks):
    x,y=S.Integer(x),S.Integer(y)
    z=(x+S.sqrt(x*x-4))/2;w=(y+S.sqrt(y*y-4))/2
    K=S.QQ.algebraic_field(z,w)
    zn,wn=K.from_sympy(z),K.from_sympy(w)
    zp=(K.from_sympy(x)-zn,K.one,zn)
    wp=(K.from_sympy(y)-wn,K.one,wn)
    out=[]
    for hs,n,m in zip(blocks,(6,8),(2,1)):
        M=[[K.zero]*n for _ in range(n)]
        for (i,j),A in hs.items():
            c=zp[i+1]*wp[j+1]
            for (a,b),w in A.todok().items():M[a][b]+=K.from_sympy(w)*c
        val=[]
        for e in thresholds(x+y):
            assert e!=L
            h=K.from_sympy(e)
            W=[[h-M[i][j] if i==j else -M[i][j] for j in range(n)] for i in range(n)]
            r=K.to_sympy(DomainMatrix(W,(n,n),K).det())/(e-L)**m
            assert r.is_Rational
            val.append(r)
        out.append(val)
    return x,y,out

def verify(a,b,c,workers):
    x=read(a,PIN);crit=read(b,CRIT);s0=read(c,LINE)
    def pol(terms):
        return S.Poly.from_dict({(i,j):S.Rational(k) for i,j,k in terms},U,V,domain=S.QQ)
    fs=[]
    for t,p,q in zip(x["thresholds"],[crit["at_flat_energy"],crit["at_other_energy"]],s0["thresholds"]):
        P=pol(t["parts"])
        assert P==S.Rational(t["overall_scale"])*pol(t["factors"][0]["terms"])*pol(t["factors"][1]["terms"])
        assert S.Poly(P.as_expr().subs(U,S.Rational(3,10)),V,domain=S.QQ)==S.Poly.from_list(list(map(S.Rational,p["polynomial"])),V,domain=S.QQ)
        assert S.Poly(P.as_expr().subs({U:0,V:-V},simultaneous=True),V,domain=S.QQ)==S.Poly.from_list(list(map(S.Rational,q["poly"])),V,domain=S.QQ)
        fs.append([pol(f["terms"]) for f in t["factors"]])
    print("exact prior curve and S=0 line threshold reductions match",flush=True)
    for p,q in fs:
        for B,d in ((p,4),(q,7)):
            Z,Y=S.symbols("Z Y")
            C=S.Poly(B.as_expr().subs({U:Z+Y,V:Z*Y}),Z,Y)
            assert max(C.degree(Z),C.degree(Y))<=d
    B=plane_blocks()
    pts=[(i,j) for i in range(8) for j in range(i,8)]
    if workers>1:
        with ProcessPoolExecutor(workers) as pool:
            fs0=[pool.submit(sample,i,j,B) for i,j in pts]
            vals=[f.result() for f in fs0]
    else:vals=[sample(i,j,B) for i,j in pts]
    scales=[[],[]]
    for i,j,r in vals:
        for t in range(2):
            for block in range(2):
                d=fs[t][block].eval({U:i+j,V:i*j})
                if not scales[t] or len(scales[t])<=block:
                    assert d
                    scales[t].append(r[block][t]/d)
                assert r[block][t]==scales[t][block]*d
    for t in range(2):
        assert scales[t][0]*scales[t][1]==S.Rational(x["thresholds"][t]["overall_scale"])
    print("exact reflection block dimensions +6/−8, generic flat multiplicities +2/−1; thresholds normalized scales",scales,flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("plane");p.add_argument("critical");p.add_argument("s0")
    p.add_argument("--workers",type=int,default=6)
    a=p.parse_args();verify(a.plane,a.critical,a.s0,a.workers)
