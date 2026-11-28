"""Check scalar zero-curve regularity on a repeated-cosine plane."""
import argparse
import json
from pathlib import Path

from modular_stationary_projections import PIN, s, t, l
from hashlib import sha256
import sympy as S

def verify(src):
    x,y = S.symbols("x y")
    raw=Path(src).read_bytes()
    assert sha256(raw).hexdigest()==PIN
    data=json.loads(raw)
    G=S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in data["G"]},
                       s,t,l,domain=S.QQ).as_expr()
    s0,t0,u0=2*x+y,x*x+2*x*y,x*x*y
    p6=(592704000*l**3+(7056000*s0+23284800)*l**2
        +(21000*s0*s0+100800*s0+52920)*l
        -225*s0*s0+110*s0+1000*t0+500*u0+31)
    L=840*l+5*y+1
    C=705600*l*l+16800*l*x+4200*l*y+26880*l+100*x*x+220*x-45*y+31
    assert S.expand(p6-L*C)==0
    assert S.expand(S.discriminant(p6,l)-87824507904000000000000*
                    (x+2)**2*(x-y)**2*(y+2)*(8*x+y+18))==0
    cap=S.Rational(3,280)
    Ecap=S.Poly(280*l-3,l,domain=S.QQ).monic()
    coeff=4200*l-45
    assert C.coeff(y)==coeff
    assert S.expand(C.subs(l,cap)-100*(x+2)**2)==0
    assert S.expand((-168*l-S.Rational(1,5)).subs(l,cap))==-2
    V=G.subs({s:s0,t:t0},simultaneous=True)
    P=S.Poly(V.subs(y,-168*l-S.Rational(1,5)),x,l,domain=S.QQ)
    Q=S.Poly(S.resultant(V,C,y),x,l,domain=S.QQ)
    def factors(A,shape,extra):
        _,fs=A.factor_list()
        assert all(k==1 for _,k in fs)
        fs.sort(key=lambda a:a[0].degree(x))
        assert [f.degree_list() for f,k in fs]==shape
        if extra:
            head=fs.pop(0)[0]
            assert S.Poly(head.as_expr(),l,domain=S.QQ).monic()==Ecap
        return [f for f,k in fs]
    F=factors(P,[(2,5),(4,6)],False)
    H=factors(Q,[(0,1),(4,7),(6,8)],True)
    def proj(f,g):
        return S.Poly(S.resultant(f.as_expr(),g.as_expr(),x),l,domain=S.QQ)
    for group,isq,expected in [(F,False,[(9,12),(26,28)]),(H,True,[(32,35),(52,54)])]:
        for f,degrees in zip(group,expected):
            a,b=proj(f,f.diff(x)),proj(f,f.diff(l))
            assert (a.degree(),b.degree())==degrees
            assert a.gcd(b).monic()==(Ecap**4 if isq else S.Poly(1,l,domain=S.QQ))
        c=proj(*group)
        assert c.degree()==(50 if isq else 24)
        assert c.gcd(c.diff()).monic()==(Ecap**8 if isq else S.Poly(1,l,domain=S.QQ))
    print("Repeated-cosine strict physical chart: each scalar factor smooth, pair intersections transverse.")
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("src")
    verify(p.parse_args().src)
