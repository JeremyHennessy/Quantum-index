"""Check final exact intersection classifications against existing edge witnesses."""
from pathlib import Path
import argparse,hashlib,json

import sympy as S

SHA="c5059f99226bd6972d46258f8f38d049b1523a6f0e0e30f6e8abe4382ab79d51"
EDGE_SHA="4badb563afd9785917bf0fd8b45ec576666433d06751f6a8d43a5fc51df6f8ee"
s=S.Symbol("s")
def read(f,d):
    b=Path(f).read_bytes()
    assert hashlib.sha256(b).hexdigest()==d
    return json.loads(b)

def poly(ls):
    return S.Poly.from_list(list(map(S.Rational,ls)),s,domain=S.QQ)

def run(path,edge_file):
    D=read(path,SHA)
    expect=[(3,1),(2,0),(2,0),(2,0),(3,0),(2,2)]
    assert [(len(x["candidates"]),sum(y["physical"] for y in x["candidates"])) for x in D["pairs"]]==expect
    edges=next(o["roots"] for o in read(edge_file,EDGE_SHA) if o["name"]=="edge--")
    seen=[]
    for q in D["pairs"]:
        for r in q["candidates"]:
            if not r["physical"]:continue
            assert len(r["all_vanishing_factors"])==2 and not r["flat_locus"]
            assert r["full_pair_resultant_s_root_simple"] and r["pair_S_u_jacobian_nonzero"]
            if not r["boundary"]:
                assert q["pair"]==["B+","B-"] and r["domain_signs"]==[1,1,1]
                continue
            assert r["domain_signs"]==[1,0,1]
            y=[v for v in edges if S.Poly(poly(v["factor"]).as_expr().subs(s,s+2),s,domain=S.QQ).monic()
                                   ==poly(r["s_factor"]).monic()]
            assert len(y)==1 and not y[0]["flat_factor_also_zero"]
            assert y[0]["line_slope_positive_negative"]==[0,y[0]["energy_multiplicity"]]
            seen.append((q["pair"],y[0]["energy_multiplicity"]))
    assert seen==[(["A+","A-"],4),(["B+","B-"],2)]
    assert [(d["name"],len(d["roots"])) for d in D["flat_S_3_10"]]==[("A+",0),("A-",1),("B+",0),("B-",0)]
    print("3 verified physical pair intersections, 2 old edge witnesses, 1 strict interior; only A- overlaps flat locus")
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("intersections")
    p.add_argument("edge_signed")
    a=p.parse_args();run(a.intersections,a.edge_signed)
