"""Exact root-field energy multiplicities and slope test for symmetry crossings."""
import argparse
import hashlib
import json
from collections import Counter
from pathlib import Path

import sympy as S
from residual_symmetry_lines import x,lam,lo,hi,E,L

EXPECTED="f919081c68e4c65333e9100930cc1a6768ba34f1d96dd726a4b0ae20fcbb5db6"

def from_coeffs(data):
    return S.Poly.from_list([S.Rational(v) for v in data],x,domain=S.QQ)

def at_root(P,Q,f):
    alpha=S.CRootOf(f.as_expr(),0)
    K=S.QQ.algebraic_field(alpha)
    a=K.from_sympy(alpha)
    def reduce(p):
        b=K.zero
        for c in p.all_coeffs():b=b*a+K.from_sympy(c)
        return b
    p=S.Poly.from_list([reduce(c.rem(f)) for c in P],lam,domain=K)
    q0=S.Poly.from_list([reduce(c.rem(f)) for c in Q],lam,domain=K)
    q=q0.compose(S.Poly(E-lam,lam,domain=K))
    counts=[]
    total=0
    for pa,i in p.sqf_list()[1]:
        for qa,j in q.sqf_list()[1]:
            d=pa.gcd(qa).degree()
            if d:
                total+=i*j*d
                counts.append([int(i),int(j),int(d)])
    assert total
    sharedflat=p.eval(E-L)==0
    return int(total),counts,bool(sharedflat)

def run(path,output):
    b=Path(path).read_bytes()
    assert hashlib.sha256(b).hexdigest()==EXPECTED
    ret=[]
    for a in json.loads(b):
        h=[]
        P,Q=[[from_coeffs(r) for r in a[k]] for k in ("p6","q9")]
        tall=Counter()
        for d in a["factors"]:
            if not d["real"]:continue
            F=from_coeffs(d["poly"])
            # Since F is irreducible, all real roots have the same
            # algebraic crossing multiplicities.
            mu,parts,joint=at_root(P,Q,F)
            iv=F.intervals(inf=lo,sup=hi,eps=S.Rational(1,10**7))
            assert F.count_roots(lo,hi)==len(iv)==d["real"]
            assert all(lo<u<=v<hi and e==1 for (u,v),e in iv)
            m=d["multiplicity"]
            assert m>=mu
            tall[(m,mu,joint)]+=len(iv)
            h.append({"factor":d["poly"],"order":m,"energy_multiplicity":mu,
                      "branch_groups":parts,"flat_factor_also_zero":joint,
                      "intervals":[[str(u),str(v)] for (u,v),e in iv]})
        print(a["name"],"root counts(order,energy,also_F)",sorted(tall.items()),flush=True)
        ret.append({"name":a["name"],"factors":h})
    b=(json.dumps(ret,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(output).open('xb') as f:f.write(b)
    print("artifact",len(b),hashlib.sha256(b).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input");p.add_argument("output")
    a=p.parse_args()
    run(a.input,a.output)
