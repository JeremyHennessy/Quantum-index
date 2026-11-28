"""Small Sylvester elimination in S for threshold derivative compatibility."""
from pathlib import Path
import argparse
import hashlib
import json
from math import prod
import sympy as S
from positive_branch_threshold import s,l

PIN="1a877cc211d85bb4fb30b0558d9e74f3eac28e7c2c88232cb4a7ff5a688252e9"

def eval_proj(G):
    rr=[]
    for z in (s,l):
        r=S.Poly(S.resultant(G.as_expr(),G.diff(z).as_expr(),s),l,domain=S.QQ).monic()
        assert not r.is_zero
        print("projection derivative",z,"degree",r.degree(),flush=True)
        rr.append(r)
    return rr

def run(args):
    raw=Path(args.input).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    d=json.loads(raw)
    G=S.Poly.from_dict({(i,j):S.Rational(k) for i,j,k in d["G"]},s,l,domain=S.QQ)
    F=G.clear_denoms()[1].primitive()[1]
    ss,ll=eval_proj(F)
    common=ss.gcd(ll).monic()
    print("common lambda projection factors",common.degree(),flush=True)
    bins=[]
    for q in (ss,ll,common):
        v=q.sqf_part()
        assert v.gcd(v.diff()).degree()==0
        c,ps=q.factor_list()
        assert q==c*prod(f**k for f,k in ps)
        print("factor degrees/exponents",[(f.degree(),m) for f,m in ps],flush=True)
        bins.append([[int(m),[str(x) for x in f.all_coeffs()]] for f,m in ps])
    r={"schema":"positive-face-chart-lambda-projections-v1","source_sha256":PIN,
       "S_derivative":bins[0],"lambda_derivative":bins[1],"common_gcd":bins[2]}
    b=(json.dumps(r,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(b)
    print("artifact",len(b),hashlib.sha256(b).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input");p.add_argument("output")
    run(p.parse_args())
