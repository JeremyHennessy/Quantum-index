"""Certify physical exclusion conditional on the reconstructed quadratic factor."""
import argparse

from verify_same_s_modular import S, lift, l, polys, s

FACTOR = [1204224, 370496, 6631]

def verify(source):
    D, _, _ = polys(source)
    H = S.Poly.from_list(FACTOR, l, domain=S.QQ)
    reduction = lift(None, FACTOR, D, D.diff(s), D.diff(l))
    assert reduction["s_gcd_degrees"] == [3, 3, 3]
    F = S.Poly.from_list([S.sympify(v, locals={"l": l}) for v in reduction["s_gcd"]], s)
    assert F.LC() == 1
    Q = S.Rational
    low = (Q(-289,1000), Q(-288,1000))
    high = (Q(-1908101600,10**11), Q(-1908101599,10**11))
    for a,b in (low, high):
        assert H.eval(a)*H.eval(b) < 0
    assert low[1] < Q(-71,840) < high[0] < high[1] < Q(3,280)
    # The two disjoint sign-changing brackets exhaust the real roots of H.
    for a,b in ((-1738,-1737), (-7,-6), (9,10)):
        signs=[]
        for x in (a,b):
            v = S.Poly(F.eval(x),l,domain=S.QQ)
            assert v.degree() <= 1
            ends = [v.eval(q) for q in high]
            assert ends[0]*ends[1] > 0  # linear in lambda, uniform sign on bracket
            signs.append(S.sign(ends[0]))
        assert signs[0]*signs[1] == -1
    # These three sign changes exhaust the cubic and lie outside physical |s|<=6.
    print("Exact quadratic exclusion: lower lambda is below lower bound; upper lambda's three s roots outside [-6,6].")

if __name__ == "__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("source")
    verify(p.parse_args().source)
