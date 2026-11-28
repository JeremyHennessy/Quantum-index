"""Exact checks for geometric irreducibility of the flat Laurent factor."""
from math import prod
import sympy as S
from separated_channel import build


def run():
    z = S.symbols("z0:3")
    x, y, t = S.symbols("x y t")
    _, first, terms = build(4)
    assert not first
    # E=-13/336 and the flat companion energy is -1/42.
    form = (S.Rational(-1, 42) + S.Rational(13, 336)) * S.eye(3)
    for (j, i, powers), coefficient in terms.items():
        form[j, i] += S.Rational(coefficient) * prod(
            u**p for u, p in zip(z, powers)
        )
    f = (4300*(x*x+y*y+t*t)-4000*x*y*t+
         600*(x*y+x*t+y*t)-1380*(x+y+t)-19573)
    composed = f.subs(dict(zip((x,y,t),(u+1/u for u in z))))
    assert S.expand(4741632000*form.det()-composed) == 0
    # All these checks take place in ZZ[x], before extending to C.
    d = S.Poly(S.discriminant(f,t).subs(y,0),x)
    hi = S.Poly(f.subs({t:2,y:0}),x)
    lo = S.Poly(f.subs({t:-2,y:0}),x)
    assert d.degree() == 2 and d.gcd(d.diff()).degree() == 0
    assert d.eval(-2) == 0 and d.eval(2) != 0
    assert hi.degree() == 2 and hi.gcd(hi.diff()).degree() == 0
    assert hi.eval(2) * hi.eval(-2) != 0 and hi.gcd(lo).degree() == 0
    print("Flat determinant identity and both nonsquare witnesses verified.")
    print(d.as_expr(), hi.as_expr(), lo.as_expr(), sep="\n")


if __name__ == "__main__":
    run()
