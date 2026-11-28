"""Check signs against the ordered monic polynomial norm, not a convenience resultant."""
from pathlib import Path
import hashlib
import json
import sys
import sympy as S

PIN = "f919081c68e4c65333e9100930cc1a6768ba34f1d96dd726a4b0ae20fcbb5db6"
x, l = S.symbols("x l")
E = -S.Rational(13, 336)


def run(path):
    raw = Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest() == PIN
    normalized = {}
    for line in json.loads(raw):
        P, Q = (S.Poly.from_list([S.Poly.from_list(list(map(S.Rational, row)),x).as_expr()
                                 for row in line[k]],l)
                for k in ("p6","q9"))
        assert P.degree()==3 and P.LC()==1
        C = S.zeros(3)
        for j in range(3):
            r=S.Poly(l**(j+1),l).rem(P)
            for i in range(3):
                C[i,j]=r.nth(i)
        q = Q.compose(S.Poly(E-l,l)).rem(P)
        A = S.zeros(3)
        for c in q.all_coeffs():
            A = (A*C+c*S.eye(3)).applyfunc(S.expand)
        # det A = product q(a) for P's roots a, with multiplicities.
        true = S.Poly(-S.expand(A.det()),x,domain=S.QQ)
        old = S.Poly.from_list(list(map(S.Rational,line["residual"])),x,domain=S.QQ)
        assert true == -old and not true.is_zero
        normalized[line["name"]]=true
        print(line["name"],"ordered norm equals minus archived residual")
    signs=[S.sign(normalized["edge++"].eval(2)),
           S.sign(normalized["edge++"].eval(-2)),
           S.sign(normalized["edge--"].eval(2)),
           S.sign(normalized["edge--"].eval(-2))]
    assert signs==[1,-1,-1,1]
    print("true operator corner signs",signs)


if __name__=="__main__":
    run(sys.argv[1])
