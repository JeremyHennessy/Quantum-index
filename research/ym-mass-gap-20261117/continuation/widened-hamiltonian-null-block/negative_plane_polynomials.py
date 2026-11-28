"""Exact bivariate Q threshold polynomials on Xi=-2 only."""
from concurrent.futures import ProcessPoolExecutor
from itertools import product
from pathlib import Path
from math import prod
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.matrices import DomainMatrix
from s0_stencils import setup,E,L
X,Y,U,V,Z=S.symbols("X Y s u lambda")
A0=-S.Rational(43,1680);B0=-S.Rational(83,1680)

def thresholds(s):
    return A0+s/S.Integer(168),B0

def sample(x,y,B):
    x,y=S.Rational(x),S.Rational(y)
    z=(x+S.sqrt(x*x-4))/2
    w=(y+S.sqrt(y*y-4))/2
    K=S.QQ.algebraic_field(z,w)
    zn,wn=K.from_sympy(z),K.from_sympy(w)
    zp=(K.from_sympy(x)-zn,K.one,zn)
    wp=(K.from_sympy(y)-wn,K.one,wn)
    third=(-K.one,K.one,-K.one)
    n=14
    M=[[K.zero]*n for _ in range(n)]
    for (a,b,c),A in B.items():
        q=zp[a+1]*wp[b+1]*third[c+1]
        for (i,j),v in A.todok().items():M[i][j]+=K.from_sympy(v)*q
    ans=[]
    for e in thresholds(x+y):
        if e==L:
            char=DomainMatrix(M,(n,n),K).charpoly()
            char=[K.to_sympy(v) for v in char]
            assert all(v.is_Rational for v in char)
            q,r=S.Poly.from_list(char,Z,domain=S.QQ).div(S.Poly((Z-L)**3,Z))
            assert r.is_zero
            ans.append(q.eval(e))
        else:
            eN=K.from_sympy(e)
            H=[[eN-M[i][j] if i==j else -M[i][j] for j in range(n)] for i in range(n)]
            value=K.to_sympy(DomainMatrix(H,(n,n),K).det())/(e-L)**3
            assert value.is_Rational
            ans.append(value)
    return x,y,ans

def polynomial(table,num):
    N=12
    row=[]
    for j in range(N):
        p=S.Poly(S.interpolate([(i,table[min(i,j),max(i,j)][num]) for i in range(N)],X),X,domain=S.QQ)
        row.append([p.nth(k) for k in range(N)])
    C=S.Poly(S.expand(sum(X**k*S.interpolate([(i,row[i][k]) for i in range(N)],Y) for k in range(N))),X,Y,domain=S.QQ)
    assert C.degree(X)<=11 and C.degree(Y)<=11 and C.as_expr().subs({X:Y,Y:X},simultaneous=True)==C.as_expr()
    sym,rem,eqs=S.symmetrize(C.as_expr(),[X,Y],formal=True)
    assert rem==0
    d={a:U if i==0 else V for i,(a,q) in enumerate(eqs)}
    R=S.Poly(sym.subs(d),U,V,domain=S.QQ)
    assert S.expand(R.as_expr().subs({U:X+Y,V:X*Y})-C.as_expr())==0
    return C,R

def export(p):
    return [[int(e[0]),int(e[1]),str(v)] for e,v in p.terms()]

def run(args):
    _,B=setup()
    ps=[(i,j) for i in range(12) for j in range(i,12)]
    ctrl=[(S.Rational(11,17),S.Rational(-3,5)),(S.Rational(-3,10),S.Rational(3,5)),
          (S.Rational(-7,10),S.Rational(7,10)),(-2,2),(S.Rational(57,20),S.Rational(-8,5)),
          (S.Rational(2,7),S.Rational(-6,13)),(S.Rational(3,20),S.Rational(3,20))]
    if args.workers>1:
        with ProcessPoolExecutor(args.workers) as ex:
            fs=[ex.submit(sample,i,j,B) for i,j in ps+ctrl]
            val=[v.result() for v in fs]
    else:val=[sample(i,j,B) for i,j in ps+ctrl]
    data={(i,j):b for i,j,b in val[:len(ps)]}
    result=[]
    for k in range(2):
        C,R=polynomial(data,k)
        assert all(C.eval({X:i,Y:j})==b[k] for i,j,b in val)
        f,fs=R.factor_list()
        assert R==f*prod(q**m for q,m in fs)
        print("threshold",k,"bidegree in X,Y",(C.degree(X),C.degree(Y)),
              "degree in S,u",(R.degree(U),R.degree(V)),"terms",len(R.terms()),
              "factors",[(p.degree(U),p.degree(V),m) for p,m in fs],flush=True)
        print("rational coefficient and factorization",f,*[(p.as_expr(),m) for p,m in fs],flush=True)
        rec={"energy":str(thresholds(U)[k]),"parts":export(R),"overall_scale":str(f),
             "degrees":[int(R.degree(U)),int(R.degree(V))],
             "factors":[{"power":int(m),"terms":export(p)} for p,m in fs]}
        result.append(rec)
    o={"schema":"negative-plane-thresholds-v1",
       "exact_evaluation_grid":[12,12],"independent_checks":len(ctrl),"thresholds":result}
    raw=(json.dumps(o,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--workers",type=int,default=6)
    p.add_argument("--output",required=True)
    run(p.parse_args())
