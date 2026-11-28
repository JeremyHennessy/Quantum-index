"""Certify definite cluster derivatives along the strict all-equal cosine line."""
import argparse
from hashlib import sha256
import json
from pathlib import Path
import sympy as S

QPIN="dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7"
E=-S.Rational(13,336)
ELL=-S.Rational(1,42)
x,s,t,r,m,v=S.symbols("x s t r m v")

def bounds(P,I):
    lo,hi=I
    a=b=S.S.Zero
    for c in P.all_coeffs():
        endpoints=(lo*a,lo*b,hi*a,hi*b)
        a,b=min(endpoints)+c,max(endpoints)+c
    return a,b

def sign(P,root,I):
    P=S.Poly(P,x,domain=S.QQ).rem(root)
    assert not P.is_zero
    for exp in (10,15,22,32,45,72):
        J=root.refine_root(*I,eps=S.Rational(1,10**exp)) if I[0]!=I[1] else I
        a,b=bounds(P,J)
        if a>0:return 1
        if b<0:return -1
    raise ValueError("Could not certify sign on rational isolator")

def verify(path):
    raw=Path(path).read_bytes()
    assert sha256(raw).hexdigest()==QPIN
    obj=json.loads(raw)
    def p(entry):
        return S.Poly.from_dict({tuple(z[:-1]):S.Rational(z[-1]) for z in entry},
                                s,t,r,domain=S.QQ).as_expr()
    Q=S.Poly.from_list([p(c) for c in obj["q9"]],m).as_expr()
    E_S=-x/42-S.Rational(31,840)
    E_D=-x/168-S.Rational(1,840)
    assert S.expand((840*m+5*x+1)*(840*m+20*x+31)-
                    (705600*m*m+21000*m*x+26880*m+100*x*x+175*x+31))==0
    assert S.solve(E_S-E_D,x)==[-2]
    expected=[[(1,1,1),(2,1,1),(4,2,2)],[(1,1,1),(2,1,0),(4,2,2)]]
    affine=[E_S,E_D]
    dets=[]
    for i,lam in enumerate(affine):
        H=S.Poly(Q.subs({m:E-lam+v,s:3*x,t:3*x*x,r:x**3},simultaneous=True),
                 x,v,domain=S.QQ).as_expr()
        D=S.Poly(H.subs(v,0),x,domain=S.QQ)
        dets.append(D)
        for endpoint in (-2,2):
            assert D.eval(endpoint)!=0
        fs=D.factor_list()[1]
        assert sorted((f.degree(),k,f.count_roots(-2,2)) for f,k in fs)==expected[i]
        for f,k in fs:
            I=f.intervals(inf=-2,sup=2,eps=S.Rational(1,10**10))
            if not I:continue
            assert len(I)==f.count_roots(-2,2)
            assert all(S.Poly(S.diff(H,v,j).subs(v,0),x,domain=S.QQ).rem(f).is_zero for j in range(k))
            p_v=S.diff(H,v,k).subs(v,0)
            p_x=S.diff(H,x,k).subs(v,0)
            for J,e in I:
                assert e==1 and -2<J[0]<=J[1]<2
                ratio=(-1)**k*sign(p_x,f,J)*sign(p_v,f,J)
                assert ratio==(-1 if k==1 else 1)
                print("branch",i,"factor",f.degree(),"multiplicity",k,"root interval",J,"derivative product sign",ratio)
    assert dets[0].gcd(dets[1]).degree()==0
    flat_single,flat_double=[S.solve(z+ELL-E,x)[0] for z in affine]
    assert (flat_single,flat_double)==(-S.Rational(37,40),S.Rational(23,10))
    assert all(d.eval(flat_single)!=0 for d in dets)
    print("Seven nonflat and one flat threshold representatives; cluster derivative definite at each.")
if __name__=="__main__":
    q=argparse.ArgumentParser(description=__doc__)
    q.add_argument("path")
    verify(q.parse_args().path)
