"""Verify every complex zero of the plus projection discriminant has order at most two."""
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S
from positive_face_flat_intersections import PIN, pos_plus, ss, uu


def coefficients(p):
    return (json.dumps([str(a) for a in p.all_coeffs()],separators=(",",":"))+"\n").encode()


def run(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    p=pos_plus(json.loads(raw))
    scale, fac=p.factor_list()
    assert len(fac)==1 and fac[0][1]==1
    f=S.Poly(fac[0][0].as_expr(),uu,domain=S.ZZ[ss])
    assert f.degree()==10 and S.sympify(f.LC()).is_Integer and f.LC()!=0
    d=S.Poly(f.discriminant(),ss,domain=S.ZZ).primitive()[1]
    g=d.gcd(d.diff()).primitive()[1]
    assert d.degree()==210 and g.degree()==77
    assert g.gcd(g.diff()).degree()==0
    print("degrees",d.degree(),g.degree(),"and square-free derivative gcd",flush=True)
    print("primitive_discriminant_sha256",hashlib.sha256(coefficients(d)).hexdigest())
    print("primitive_derivative_gcd_sha256",hashlib.sha256(coefficients(g)).hexdigest())


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input")
    run(p.parse_args().input)
