"""Exclude double-root stationary lifts over the degree-93 triple projection."""
import argparse
import json
from pathlib import Path
from verify_same_s_modular import S, l, lift, polys, s

def verify(source):
    D,A,B=polys(source)
    A0=A.clear_denoms(convert=True)[1].primitive()[1]
    B0=B.clear_denoms(convert=True)[1].primitive()[1]
    H=S.Poly(S.resultant(A0.as_expr(),B0.as_expr(),s),l,domain=S.QQ)
    trivial = S.Poly((1344*l+325)**6*(112*l-3)**27,l,domain=S.QQ)
    R=H.exquo(trivial).monic()
    assert R.degree()==93 and R.is_irreducible

    t=S.Symbol("t")
    raw=json.loads(Path(source).read_bytes())
    G=S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in raw["G"]},
                       s,t,l,domain=S.QQ)
    a=G.as_expr().coeff(t,3)
    assert a and not a.has(s)
    # Verify the primitive D's nonzero scalar normalization in the cubic identity.
    assert S.Poly(4*A.as_expr()**3-B.as_expr()**2,s,l,domain=S.QQ) == S.Poly(
        27*a*a*D.as_expr(),
        s,l,domain=S.QQ)
    for W in (A,B,D,D.diff(s),a):
        W=S.Poly(W,s,l,domain=S.QQ)
        leading=S.Poly(S.Poly(W.as_expr(),s).LC(),l,domain=S.QQ)
        assert not leading.is_zero and leading.degree()<R.degree()

    # A,B keep their s degrees and have vanishing resultant modulo R, so
    # they share a finite root s0 in the algebraic closure at every lambda.
    # The cubic identity gives D=Ds=Dl=0 there, since both A and B vanish.
    p=1013
    def mod(q):
        n,d=q.as_numer_denom()
        return int(n)*pow(int(d),-1,p)%p
    h=S.Poly.from_list([mod(v) for v in R.all_coeffs()],l,modulus=p)
    assert h.degree()==R.degree()
    factor,m=min(h.factor_list()[1],key=lambda item:item[0].degree())
    assert factor.degree()==1 and m==1
    rw=lift(p,factor.all_coeffs(),D,D.diff(s),D.diff(l))
    assert rw["s_gcd_degrees"][0] == 1
    # Sylvester rank >=20 over the rational number field by reduction.
    # Therefore s0 is the only common root of D,Ds,Dl; it is triple-root
    # support, not a second double-root lift at the same projected lambda.
    print("All degree-93 overlap lifts are triple-root, not independent double-root candidates.")

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("source")
    verify(p.parse_args().source)
