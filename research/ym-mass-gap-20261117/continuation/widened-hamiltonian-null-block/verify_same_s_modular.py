"""Lift shared projection support to common s-roots over finite extensions."""
import argparse
import hashlib
import json
from pathlib import Path

import sympy as S
from sympy.polys.agca.extensions import MonogenicFiniteExtension

from modular_stationary_projections import PIN, polys, s, l

PROJECTION_PIN = "e4c302298e15b54d4a1925e22f6211e95008672a9821a976b669ac13133f29ef"


def lift(p, factor, D, Ds, Dl):
    f = S.Poly.from_list(factor, l, modulus=p) if p else S.Poly.from_list(factor, l, domain=S.QQ)
    assert f.is_irreducible
    K = MonogenicFiniteExtension(f)
    assert K.is_Field

    def project(poly):
        coeff = {}
        for (i, j), q in poly.terms():
            n, d = q.as_numer_denom()
            reduced = int(n) * pow(int(d), -1, p) % p if p else q
            coeff[i] = coeff.get(i, K.zero) + K.convert(reduced) * K.generator**j
        return S.Poly.from_dict({(i,): c for i,c in coeff.items()}, s, domain=K)

    dd, ds, dl = map(project, (D, Ds, Dl))
    assert dd.degree() == D.degree(s)
    def trim(a):
        while a and not a[-1]:
            a.pop()
        return a
    def remainder(a, b):
        a = a[:]
        while a and len(a) >= len(b):
            k = len(a) - len(b)
            x = a[-1] / b[-1]
            for i,y in enumerate(b):
                a[i + k] -= x * y
            assert not a[-1]
            trim(a)
        return a
    def gcd(a, b):
        while b:
            a, b = b, remainder(a, b)
        return [x / a[-1] for x in a] if a else []
    a,b,c = [trim(q.rep.to_list()[::-1]) for q in (dd,ds,dl)]
    g1, g2 = gcd(a,b), gcd(a,c)
    common = gcd(g1,g2)
    def coeffs(poly):
        return [str(K.to_sympy(q)) for q in poly[::-1]]
    assert not any(remainder(q,common) for q in (a,b,c))
    return dict(factor=factor, projection_degree=int(f.degree()),
                s_gcd_degrees=[len(g)-1 for g in (g1,g2,common)],
                s_gcd=coeffs(common))


def main(src, projection, out):
    D, _, _ = polys(src)
    Ds, Dl = D.diff(s), D.diff(l)
    raw = Path(projection).read_bytes()
    assert hashlib.sha256(raw).hexdigest() == PROJECTION_PIN
    data = json.loads(raw)
    out_data = []
    for row in data["results"]:
        p = row["prime"]
        factors = [r["coefficients"] for r in row["beyond_support_factors"]]
        lifts = [lift(p, f, D, Ds, Dl) for f in factors]
        recovered = S.prod(S.Poly.from_list(f,l,modulus=p) for f in factors)
        assert recovered == S.Poly.from_list(row["common"]["beyond"],l,modulus=p)
        print(p, [(x["projection_degree"],x["s_gcd_degrees"]) for x in lifts])
        out_data.append(dict(prime=p,lifts=lifts))
    payload = (json.dumps(dict(threshold_sha256=PIN,projection_sha256=PROJECTION_PIN,results=out_data),
                          sort_keys=True,separators=(",",":"))+"\n").encode()
    with open(out,"xb") as file:
        file.write(payload)
    print(hashlib.sha256(payload).hexdigest())


if __name__ == "__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    for n in ("src","projection","out"):
        parser.add_argument(n)
    main(**vars(parser.parse_args()))
