"""Exact Sturm/discriminant certificate: no positive-face minus threshold."""
from pathlib import Path
import argparse
import hashlib
import json
from math import prod
import sympy as S

PIN="611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"
s,u,x=S.symbols("s u x")

def report(P,lo,hi):
    c,f=P.factor_list()
    assert P==c*prod(p**m for p,m in f)
    # count_roots uses an exact Sturm computation and includes the endpoints.
    assert all(q.count_roots(lo,hi)==0 for q,_ in f)
    assert P.count_roots(lo,hi)==0
    assert all(P.eval(t)!=0 for t in (lo,hi))
    return {"scale":str(c),"factors":[{"power":int(m),"coeffs":[str(v) for v in q.all_coeffs()]}
                                   for q,m in f],
            "roots_closed":int(P.count_roots(lo,hi)),"endpoints_nonzero":True}

def verify(inp,output):
    raw=Path(inp).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    data=json.loads(raw)
    ((m,z),)=data["minus_factors"]
    assert m==1
    f=S.Poly.from_dict({(a,b):S.Rational(c) for a,b,c in z},s,u,domain=S.QQ).as_expr()
    r=S.Poly.from_dict({(a,b):S.Rational(c) for a,b,c in data["minus_resultant"]},s,u,domain=S.QQ).as_expr()
    assert r==S.Rational(data["minus_scale"])*f
    assert S.Poly(f,u).degree()==3 and S.Poly(f,u).LC()==1838265625
    D=S.Poly(S.discriminant(f,u),s,domain=S.QQ)
    assert D.degree()==11
    expected_A=S.Poly(55125*s**3-16784850*s**2+2099935420*s-31071304856,s)
    expected_B=S.Poly(12005000*s**5-1304851625*s**4+9941460725*s**3-722169214300*s**2
                       +13380205171080*s-488643737581748,s)
    assert D.as_expr()==S.expand((-5017600000000000000)*expected_A.as_expr()**2*expected_B.as_expr())
    tests={"discriminant":report(D,-4,4)}
    for name,ss,uu in (("diagonal",2*x,x*x),("edge_plus",x+2,2*x),("edge_minus",x-2,-2*x)):
        p=S.Poly(f.subs({s:ss,u:uu}),x,domain=S.QQ)
        tests[name]=report(p,-2,2)
    assert len(tests)==4
    ell=S.Symbol("ell")
    p6=S.Poly.from_list([sum(S.Rational(t)*4**(i+j) for i,j,t in row)
                         for row in data["p6"]],ell,domain=S.QQ)
    assert p6==S.Poly((ell+S.Rational(71,840))*(ell+S.Rational(11,840))**2,ell,domain=S.QQ)
    assert -S.Rational(11,840)-S.Rational(3,64)+S.Rational(13,336)==-S.Rational(143,6720)
    out={"schema":"positive-face-minus-gap-v1","source_sha256":PIN,"leading_u":"1838265625",
         "minus_resultant_scale":data["minus_scale"],"sturm":tests}
    b=(json.dumps(out,sort_keys=True,separators=(',',':'))+"\n").encode()
    print("no discriminant zeros on closed S interval; no boundary threshold roots; "
          "interior roots impossible by compactness and ∂u≠0")
    if output:
        with Path(output).open('xb') as f:f.write(b)
    print("artifact",len(b),hashlib.sha256(b).hexdigest())

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("pencils");p.add_argument("--output")
    a=p.parse_args();verify(a.pencils,a.output)
