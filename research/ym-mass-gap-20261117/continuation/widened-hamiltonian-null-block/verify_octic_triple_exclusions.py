"""Verify octic candidate geometry and exclude all physical triple-root candidates."""
import argparse
import json
from pathlib import Path

from verify_same_s_modular import S, l, lift, polys, s

OCTIC = [10223390608859141347737600,3152676241381082970193920,
         355384499992022608773120,10186054001621597159424,-1289620433533082370048,
         -74029339978660878336,461280424755884160,8172252989278616,-58087817766983]

def verify(source):
    D,A,B = polys(source)
    P = S.Poly.from_list(OCTIC,l,domain=S.QQ)
    assert P.is_irreducible
    q = 1009
    pf = S.Poly.from_list(OCTIC,l,modulus=q)
    assert pf.degree() == 8
    # One reduction gives a lower bound on characteristic-zero Sylvester rank.
    h,m = pf.factor_list()[1][0]
    assert m == 1
    small = lift(q,h.all_coeffs(),D,D.diff(s),D.diff(l))
    assert small["s_gcd_degrees"][0] == 1
    # D retains s degree 11 by lift; D_s has degree 10 in both fields.
    # A 20-rank minor modulo (q,h) is therefore nonzero modulo P in QQ[l].
    ss = -168*l-S.Rational(21,5)
    def red(v):
        return S.Poly(v.subs(s,ss),l,domain=S.QQ).rem(P)
    assert all(red(W.as_expr()).is_zero for W in (D,D.diff(s),D.diff(l)))

    t = S.symbols("t")
    original = json.loads(Path(source).read_bytes())
    G = S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in original["G"]},
                         s,t,l,domain=S.QQ).as_expr()
    a,b,c,d = S.Poly(G,t).all_coeffs()
    delta=red(b*b-3*a*c)
    assert delta.gcd(P).degree()==0
    T = (red(9*a*d-b*c)*S.invert(2*delta,P)).rem(P).as_expr()
    U=(-1185408*l**3 -14112*s*l**2-S.Rational(232848,5)*l**2
       -42*s**2*l-S.Rational(1008,5)*s*l-S.Rational(2646,25)*l
       +S.Rational(9,20)*s**2-S.Rational(11,50)*s-2*t-S.Rational(31,500))
    uu = red(U.subs(t,T)).as_expr()
    assert S.expand((-2)**3-ss*(-2)**2+T*(-2)-uu) == 0

    a0 = A.clear_denoms(convert=True)[1].primitive()[1]
    b0 = B.clear_denoms(convert=True)[1].primitive()[1]
    def res(F,G):
        return S.Poly(S.resultant(F.as_expr(),G.as_expr(),s),l,domain=S.QQ)
    R=res(a0,b0)
    assert R.degree() == 126
    J=res(b0,b0.diff(s))
    assert J.degree() == 171
    common=R.gcd(J).monic()
    bad=S.Poly((1344*l+325)**6*(112*l-3)**27,l,domain=S.QQ).monic()
    assert common == bad
    assert S.Rational(-325,1344) < S.Rational(-71,840)
    assert S.Rational(3,112) > S.Rational(3,280)
    print("Exact octic support lies outside strict cosine chart; no physical stationary triple root.")

if __name__ == "__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("source")
    verify(p.parse_args().source)
