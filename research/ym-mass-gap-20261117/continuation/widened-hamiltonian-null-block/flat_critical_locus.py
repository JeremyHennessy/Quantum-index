"""Exact critical locus and normal form of the flat elementary determinant."""
import sympy as S
from flat_geometric_irreducibility import run as verify_flat


def run():
    verify_flat()
    x, y, z = S.symbols("x y z")
    f = (4300*(x*x+y*y+z*z)-4000*x*y*z+
         600*(x*y+x*z+y*z)-1380*(x+y+z)-19573)
    dx, dy, dz = [S.diff(f,a) for a in (x,y,z)]
    assert S.expand(dx-dy-4000*(x-y)*(z+2)) == 0
    assert S.gcd(f.subs({y:x,z:x}),dx.subs({y:x,z:x})) == 10*x-23
    assert dx.subs({y:x,z:2}) == 1200*x-180
    assert f.subs({x:S.Rational(3,20),y:S.Rational(3,20),z:2}) == -5160
    assert S.expand(f.subs(z,-2)-4300*(x+y-S.Rational(3,10))**2) == 0
    assert S.expand(dz.subs({z:-2,y:S.Rational(3,10)-x})-400*(x+2)*(10*x-23)) == 0
    expected = {(2,2):1,(2,-2):430*x+731,(-2,-2):430*x-989}
    for (y0,z0), q in expected.items():
        p=S.Poly(f.subs({y:y0,z:z0}),x)
        assert p.gcd(p.diff()).as_expr() == q
        assert p.eval(2) and p.eval(-2)
    # Exact 2x2 block numerator when z2=-1; the third diagonal is zero on x+y=3/10.
    det2=S.expand((S.Rational(23,10)-y)*(S.Rational(23,10)-x)-(x+2)*(y+2))
    assert S.expand(det2-S.Rational(43,10)*(S.Rational(3,10)-x-y)) == 0
    print("All critical points lie on Xi=-2 and Xj+Xk=3/10, up to permutations.")
    print("Two (not one) zero elementary eigenvalues on these loci.")


if __name__ == "__main__":
    run()
