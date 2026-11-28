"""Check two further candidate factors in characteristic zero."""
import argparse
import json
from pathlib import Path

from verify_same_s_modular import S, lift, l, polys, s

def verify(source):
    D, _, _ = polys(source)   # verifies exact SHA-256 of input
    q = [3612672, 584640, 28405]
    assert q[1]**2 - 4*q[0]*q[2] < 0

    f = [63221760, 66881472, 1595300, -19307]
    P = S.Poly.from_list(f, l, domain=S.QQ)
    coords = lift(None, f, D, D.diff(s), D.diff(l))
    assert coords["s_gcd_degrees"] == [1,1,1]
    ss = -168*l-S.Rational(21,5)
    tt = 672*l+S.Rational(24,5)
    assert S.sympify(coords["s_gcd"][1],locals={"l": l}) == -ss
    t, X = S.symbols("t X")
    original = json.loads(Path(source).read_bytes())
    G = S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in original["G"]},
                         s,t,l,domain=S.QQ).as_expr()
    a,b,c,d = S.Poly(G,t).all_coeffs()
    def reduced(expr):
        return S.rem(S.Poly(expr.subs(s,ss), l, domain=S.QQ), P)
    Delta0 = reduced(b*b-3*a*c)
    assert Delta0.gcd(P).degree() == 0
    assert reduced(9*a*d-b*c-2*(b*b-3*a*c)*tt).is_zero

    U = (-1185408*l**3 -14112*s*l**2-S.Rational(232848,5)*l**2
         -42*s**2*l-S.Rational(1008,5)*s*l-S.Rational(2646,25)*l
         +S.Rational(9,20)*s**2-S.Rational(11,50)*s-2*t-S.Rational(31,500))
    uu = reduced(U.subs(t,tt)).as_expr()
    assert S.expand(X**3-ss*X**2+tt*X-uu-(X+2)**2*(X-ss-4)) == 0
    print("Real-free quadratic and repeated-endpoint cubic excluded from strict physical chart.")

if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("source")
    verify(p.parse_args().source)
