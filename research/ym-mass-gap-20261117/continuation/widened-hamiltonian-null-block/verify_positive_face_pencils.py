"""Verify the compact threshold representation and exact earlier line checks."""
from pathlib import Path
import argparse,hashlib,json
import sympy as S

from positive_face_pencils import s,u,l,x,E
from separated_channel import build,at_endpoint
PIN="611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"
PRE="f919081c68e4c65333e9100930cc1a6768ba34f1d96dd726a4b0ae20fcbb5db6"

def read(name,pin):
    b=Path(name).read_bytes()
    assert hashlib.sha256(b).hexdigest()==pin
    return json.loads(b)

def pol(c):
    return S.Poly.from_dict({(i,j):S.Rational(v) for i,j,v in c},s,u,domain=S.QQ).as_expr()

def run(inp,prior):
    D=read(inp,PIN);P=read(prior,PRE)
    A,B,C,Dp=[S.Poly.from_list([pol(c) for c in D[key]],l,domain=S.QQ[s,u])
              for key in ("p6","q9_plus","q9_minus","plus_remainder")]
    assert C.as_expr()==S.Poly(l*l-(s+10)*l/192+(5*s+u-231)/36864,l).as_expr()
    r=pol(D["minus_resultant"])
    assert S.Poly(r,s,u,domain=S.QQ).is_irreducible
    assert r==S.resultant(A.as_expr(),C.as_expr().subs(l,E-l),l)
    assert Dp==S.Poly(B.as_expr().subs(l,E-l),l,domain=S.QQ[s,u]).rem(A)
    _,_,B6=build(4)
    assert all(v<=0 for v in B6.values())
    K=at_endpoint(B6,3)+S.eye(3)*S.Rational(71,840)
    assert K.is_positive_semidefinite
    assert S.Rational(19,192)-S.Rational(71,840)-E==S.Rational(17,320)
    a1,a2,a3=A.all_coeffs()[1:]
    M=S.Matrix([[0,0,-a3],[1,0,-a2],[0,1,-a1]])
    q2=S.Poly(C.as_expr().subs(l,E-l),l,domain=S.QQ[s,u])
    assert S.expand((q2.nth(0)*S.eye(3)+q2.nth(1)*M+q2.nth(2)*M**2).det()-r)==0
    d2,d1,d0=Dp.all_coeffs()
    ms=d0*S.eye(3)+d1*M+d2*M**2
    sub={"face+":(2*x,x*x),"edge++":(x+2,2*x),"edge+-":(x-2,-2*x)}
    for m in P:
        if m["name"] not in sub:continue
        su=sub[m["name"]]
        subst={s:su[0],u:su[1]}
        z=S.Poly(-ms.subs(subst).det()*r.subs(subst),x,domain=S.QQ)
        old=S.Poly.from_list(list(map(S.Rational,m["residual"])),x,domain=S.QQ)
        # Original line artifact used high-degree second-argument SymPy
        # resultant; odd-degree internal swap reverses its sign. Exact
        # characteristic pencils agree, and so do all roots.
        def prior_char(key):
            return S.Poly.from_list([S.Poly.from_list(list(map(S.Rational,c)),x).as_expr()
                                     for c in m[key]],l).as_expr()
        assert S.expand(A.as_expr().subs(subst)-prior_char("p6"))==0
        assert S.expand((B*C).as_expr().subs(subst)-prior_char("q9"))==0
        assert z==-old
        print(m["name"],"exact characteristic agreement and residual up to old fixed sign",z.degree(),flush=True)
    print("Only the negative Q-minus energy can cross E; positive branch excluded with margin 17/320.",flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input");p.add_argument("previous")
    a=p.parse_args();run(a.input,a.previous)
