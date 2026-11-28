"""Exact specialized reference determinant factors and real-torus root census."""
from fractions import Fraction as Q
from math import prod
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor
import argparse
import hashlib
import json
import sympy as S

from regular_sheet import build_reference,hbareiss,pair_times

def phase(z,s):
    d=z.denominator;x=z.numerator
    if not s:return d*d+x*x,0
    return d*d-x*x,2*x*d*s

def matrix(terms,u,v,t):
    values={}
    for a in (-1,0,1):
        for b in (-1,0,1):
            ab=pair_times(phase(u,a),phase(v,b))
            for c in (-1,0,1):
                d=phase(t,c) if t is not None else (-1 if c else 1,0)
                values[(a,b,c)]=pair_times(ab,d)
    out=[]
    for n in range(42):
        row=[]
        for j in range(42):
            m=terms[n*42+j]
            row.append((sum(c*values[z][0] for z,c in m),sum(c*values[z][1] for z,c in m)))
        out.append(row)
    return out

def robust_det(a):
    try:return hbareiss(a)[0]
    except AssertionError:
        from sympy.polys.matrices import DomainMatrix
        v=DomainMatrix([[S.ZZ_I(x,y) for x,y in r] for r in a],(42,42),S.ZZ_I).det()
        assert v.y==0
        return int(v.x)

def eval_one(u,v,t,terms):
    n=robust_det(matrix(terms,u,v,Q(t)))
    ab=(1+t*t)**10
    x,r=divmod(n,ab)
    assert not r
    return x

def polynomial(values,t):
    """Degree ≤64 in t, exact interpolation with squared abscissae."""
    x=S.Symbol("x")
    pts=[(i*i,v) for i,v in enumerate(values)]
    p=S.Poly(S.interpolate(pts,x),x,domain=S.ZZ)
    ans=S.Poly(p.as_expr().subs(x,t*t),t,domain=S.ZZ)
    assert ans.degree()<=64
    return ans

def run_one(u,v,axis):
    terms,_=build_reference()
    ii=tuple(i for i in range(3) if i!=axis)+(axis,)
    terms=[[(tuple(z[i] for i in ii),n) for z,n in v] for v in terms]
    t=S.Symbol("t")
    # All slices are even by coordinate reflection symmetry (same first
    # two tangent coordinates). Verify additional direct evaluations at
    # both signs and at the omitted torus point t=infinity.
    d=polynomial([eval_one(u,v,i,terms) for i in range(33)],t)
    for n in (-34,-6,34,35):
        assert d.eval(n)==eval_one(u,v,n,terms)
    at_missing=robust_det(matrix(terms,u,v,None))
    assert at_missing==d.nth(64)
    assert at_missing
    assert d.gcd(S.Poly(t*t+1,t)).degree()==0
    c,ff=d.factor_list()
    assert c*prod(f**m for f,m in ff)==d
    rs=[]
    for factor,m in ff:
        real=int(factor.count_roots(-S.oo,S.oo))
        positive=int(factor.count_roots(0,S.oo))-int(factor.eval(0)==0)
        negative=int(factor.count_roots(-S.oo,0))-int(factor.eval(0)==0)
        zero=int(factor.eval(0)==0)
        assert real==positive+negative+zero
        assert factor.gcd(factor.diff()).degree()==0
        r={"degree":int(factor.degree()),"multiplicity":int(m),"real":real,
           "positive":positive,"negative":negative,"zero":zero,
           "coefficients":[str(x) for x in factor.all_coeffs()]}
        if axis==2 and (u,v)==(Q(8),Q(12)):
            r["certified_t_interval_roots"]=int(factor.count_roots(S.Rational(64457770,10**7),S.Rational(64457771,10**7)))
        rs.append(r)
    print("axis",axis,"slice",u,v,"degree",d.degree(),"factors",
          [(z["degree"],z["multiplicity"],z["real"],z.get("certified_t_interval_roots")) for z in rs],flush=True)
    return {"axis":axis,"transverse":[str(u),str(v)],"determinant_degree":int(d.degree()),
            "integer_content":str(c),"t_infinity":str(at_missing),"factors":rs}

def main(args):
    coords=[(Q(u),Q(v),axis) for axis in (0,1,2) for u,v in ((8,12),(1,2))]
    if args.workers>1:
        with ProcessPoolExecutor(args.workers) as p:
            fut=[p.submit(run_one,*t) for t in coords]
            out=[q.result() for q in fut]
    else:
        out=[run_one(*t) for t in coords]
    for axis in (0,1,2):
        a,b=out[axis*2:axis*2+2]
        assert a["axis"]==axis==b["axis"]
        assert a["determinant_degree"]==b["determinant_degree"]==64
        for x in (a,b):
            assert [(f["degree"],f["multiplicity"]) for f in x["factors"]]==[(4,3),(52,1)]
            assert x["factors"][1]["real"]>0
        assert a["factors"][1]["real"]==18 and b["factors"][1]["real"]==10
        assert a["factors"][1]["coefficients"]!=b["factors"][1]["coefficients"]
        print("axis",axis,"two irreducible degree52 residuals with different real root counts",flush=True)
    blob=(json.dumps(out,sort_keys=True,separators=(',',':'))+"\n").encode()
    print("artifact",len(blob),hashlib.sha256(blob).hexdigest(),flush=True)
    with Path(args.output).open("xb") as f:f.write(blob)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--workers",type=int,default=6)
    p.add_argument("--output",required=True)
    main(p.parse_args())
