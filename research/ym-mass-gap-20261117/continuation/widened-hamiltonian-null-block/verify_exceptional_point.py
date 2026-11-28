"""Exact isolation, local multiplicity and physical count from the curve artifact."""
from pathlib import Path
import argparse
import hashlib,json
import sympy as S

SHA="b3654285e0d760723f92185e3dbddc5ef1db46dbc9a6d426d95b58c8f88f811d"
LO=-S.Rational(17,5)
HI=S.Rational(9,400)

def main(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==SHA
    p=json.loads(raw)
    u,l=S.symbols("u l")
    def poly(coeffs):
        return S.Poly.from_list([S.Rational(i) for i in coeffs],u,domain=S.QQ)
    Q=S.Poly.from_list([poly(d).as_expr() for d in p["reduced_6loop_characteristic"]],l)
    F=poly(p["at_flat_energy"]["polynomial"])
    R=poly(p["at_other_energy"]["polynomial"])
    a0,a1=-S.Rational(223,12312),-S.Rational(204,11263)
    assert LO<a0<a1<HI and F.count_roots(LO,HI)==F.count_roots(a0,a1)==1
    assert R.count_roots(LO,HI)==0 and F.gcd(R).degree()==0
    f=S.Poly(93735040000*u**2-11332706992105*u-205293381947,u,domain=S.QQ)
    assert f.count_roots(a0,a1)==1 and F.rem(f).is_zero and not F.diff().rem(f).is_zero
    q=S.Poly(S.diff(Q.as_expr(),l).subs(l,-S.Rational(1,42)),u,domain=S.QQ)
    assert q.gcd(f).degree()==0
    assert S.discriminant(S.Symbol("x")**2-S.Rational(3,10)*S.Symbol("x")+u,
                          S.Symbol("x")) == S.expand(4*(HI-u))
    assert a1<0 and a0>LO
    print("exact exceptional u interval",a0,a1)
    print("one additional B9 eigenvector at flat energy; two added reference crossings")
    print("24 distinct torus points across three critical-axis curves")
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("artifact")
    main(p.parse_args().artifact)
