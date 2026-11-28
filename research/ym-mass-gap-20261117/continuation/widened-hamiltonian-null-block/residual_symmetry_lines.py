"""Exact reference determinant crossings on cubic symmetry lines, at E*."""
from concurrent.futures import ProcessPoolExecutor
from collections import Counter,defaultdict
from pathlib import Path
from math import prod
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.matrices import DomainMatrix

from crit_rank import setup,E,L

x,lam=S.symbols("x lam")
lo=S.Integer(-2);hi=S.Integer(2)
LINES={
"edge++":(2,2,None),
"edge+-":(2,-2,None),
"edge--":(-2,-2,None),
"face+":(2,None,None),
"face-":(-2,None,None),
"body":(None,None,None),
}

def stencils():
    B6,B9=setup()
    d={}
    for (i,j,z),c in B6.items():
        d.setdefault(z,S.zeros(3))[i,j]=c
    return d,B9

def char_at(line,a,coeffs):
    z=(a+S.sqrt(a*a-4))/2
    K=S.QQ.algebraic_field(z)
    pos=K.from_sympy(z);neg=K.from_sympy(a)-pos
    weights=[(neg,K.one,pos) if v is None else (K.convert(v//2),K.one,K.convert(v//2)) for v in line]
    result=[]
    for n,D in zip((3,14),coeffs):
        M=[[K.zero]*n for _ in range(n)]
        for p,B in D.items():
            c=prod(weights[j][v+1] for j,v in enumerate(p))
            for (i,j),v in B.todok().items():
                M[i][j]+=K.convert(v)*c
        a=[K.to_sympy(b) for b in DomainMatrix(M,(n,n),K).charpoly()]
        assert all(v.is_Rational for v in a)
        a=S.Poly.from_list(a,lam,domain=S.QQ)
        if n==14:
            a,rem=a.div(S.Poly((lam-L)**3,lam,domain=S.QQ))
            assert rem.is_zero
        result.append(tuple(a.all_coeffs()))
    return result

def get_line(name,line,coeffs):
    d=line.count(None)
    # k-th characteristic coefficient has signed degree ≤k per axis,
    # descends to cos variables, and degree ≤dk after setting d equal.
    # Division by the constant flat cube preserves the bound.
    as_=[S.Integer(i) for i in range(11*d+1)]+[-S.Integer(2),S.Rational(1,7),-S.Rational(19,11)]
    out=[char_at(line,u,coeffs) for u in as_]
    C=[]
    for qi,n in enumerate((3,11)):
        vals=[]
        for j in range(n+1):
            count=d*j+1
            a=S.Poly(S.interpolate([(as_[i],out[i][qi][j]) for i in range(count)],x),x,domain=S.QQ)
            assert a.degree()<=d*j
            assert all(a.eval(v)==b[qi][j] for v,b in zip(as_,out))
            vals.append(a.as_expr())
        C.append(S.Poly.from_list(vals,lam))
    A,Q=C
    RR=S.Poly(-S.resultant(A.as_expr(),Q.as_expr().subs(lam,E-lam),lam),x,domain=S.QQ)
    assert RR.degree()<=26*d and not RR.is_zero
    cf,fs=RR.factor_list()
    isos=[]
    for f,m in fs:
        isos.append({"poly":[str(v) for v in f.all_coeffs()],
                     "degree":int(f.degree()),
                     "multiplicity":int(m),
                     "real":int(f.count_roots(lo,hi)),
                     "real_endpoints":[bool(f.eval(u)==0) for u in (lo,hi)]})
    print(name,"degree",RR.degree(),"factor census",[(p["degree"],p["multiplicity"],p["real"]) for p in isos],
          "endpoint",(bool(RR.eval(lo)),bool(RR.eval(hi))),flush=True)
    out={"name":name,"line":line,"degree":int(RR.degree()),
         "residual":[str(a) for a in RR.all_coeffs()],"factor_scale":str(cf),"factors":isos,
         "p6":[[str(c) for c in S.Poly(a,x).all_coeffs()] for a in A.all_coeffs()],
         "q9":[[str(c) for c in S.Poly(a,x).all_coeffs()] for a in Q.all_coeffs()]}
    return out

def main(args):
    coeffs=stencils()
    with ProcessPoolExecutor(args.workers) as ex:
        fs=[ex.submit(get_line,v,LINES[v],coeffs) for v in args.lines]
        out=[f.result() for f in fs]
    blob=(json.dumps(out,sort_keys=True,separators=(',',':'))+"\n").encode()
    print("artifact",len(blob),hashlib.sha256(blob).hexdigest(),flush=True)
    with Path(args.output).open('xb') as f:f.write(blob)

if __name__=="__main__":
    pp=argparse.ArgumentParser(description=__doc__)
    pp.add_argument("--lines",nargs="*",default=list(LINES))
    pp.add_argument("--workers",type=int,default=6)
    pp.add_argument("--output",required=True)
    main(pp.parse_args())
