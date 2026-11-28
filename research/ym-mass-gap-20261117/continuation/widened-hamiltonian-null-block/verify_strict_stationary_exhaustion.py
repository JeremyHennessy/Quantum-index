"""Certify exact projected gcd by degree squeeze, without giant QQ resultants."""
import argparse
import json
from hashlib import sha256
from pathlib import Path

from modular_stationary_projections import diagnostics
from verify_same_s_modular import S, l, lift, polys, s, PROJECTION_PIN
from verify_octic_triple_exclusions import OCTIC
from sympy.polys.matrices import DomainMatrix

Q2 = [1204224,370496,6631]
Q2B = [3612672,584640,28405]
Q3 = [63221760,66881472,1595300,-19307]
DEG_WEIGHTS = [
([9,6,3,0,-1,-2,-3,-4,-5,-6,9,6,3,0,-1,-2,-3,-4,-5,-6,-7],
 [5,9,12,15,18,21,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]),
([12,8,5,4,3,2,1,0,-1,-2,-3,11,7,4,3,2,1,0,-1,-2,-3,-4],
 [2,6,10,13,16,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])]
VAL_WEIGHTS = [
([-5,-2,-1,0,1,2,3,3,3,3,-5,-2,-1,0,1,2,3,3,3,3,3],
 [16,13,10,7,6,5,4,3,2,1,0,-1,-2,-3,-3,-3,-3,-3,-3,-3,-3]),
([-9,-6,-3,-2,-1,0,0,0,0,0,0,-10,-7,-4,-3,-2,-1,0,0,0,0,0],
 [20,17,14,11,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0])]

def sylv(F,G):
    a,b=[[S.Poly(u,l,domain=S.QQ) for u in S.Poly(H.as_expr(),s).all_coeffs()] for H in (F,G)]
    n,m=len(a)-1,len(b)-1
    z=S.Poly(0,l,domain=S.QQ)
    M=[[z]*(n+m) for _ in range(n+m)]
    for i in range(m): M[i][i:i+n+1]=a
    for i in range(n): M[i+m][i:i+m+1]=b
    return M

def sum_weights(u,v):
    return sum(u)+sum(v)

def degree_bound(M,u,v):
    n=len(M)
    assert len(u)==len(v)==n
    assert all(W.is_zero or W.degree()<=u[i]+v[j]
               for i,row in enumerate(M) for j,W in enumerate(row))
    def coefficient(k):
        return S.Matrix([[W.nth(u[i]+v[j]-k) if u[i]+v[j]>=k else 0
                          for j,W in enumerate(row)] for i,row in enumerate(M)])
    M0=DomainMatrix.from_Matrix(coefficient(0)).to_field()
    assert M0.rank()==n-1
    left,right=M0.transpose().nullspace().to_Matrix(),M0.nullspace().to_Matrix()
    assert (left*coefficient(1)*right.T)[0]==0
    return sum_weights(u,v)-2

def valuation_bound(M,u,v,l0):
    assert len(M)==len(u)==len(v)
    for i,row in enumerate(M):
        for j,W in enumerate(row):
            for _ in range(max(0,u[i]+v[j])):
                assert not W.eval(l0)
                W=W.diff()
    return sum_weights(u,v)

def verify(src,projection):
    D,A,B=polys(src)
    ds,dl=D.diff(s),D.diff(l)
    mats=[sylv(D,h) for h in (ds,dl)]
    assert [degree_bound(M,*w) for M,w in zip(mats,DEG_WEIGHTS)]==[530,551]
    assert [valuation_bound(M,*w,S.Rational(3,112)) for M,w in zip(mats,VAL_WEIGHTS)]==[57,50]

    raw=Path(projection).read_bytes()
    assert sha256(raw).hexdigest()==PROJECTION_PIN
    mod1009=json.loads(raw)["results"][0]
    assert mod1009["prime"]==1009
    computed=diagnostics(1009,D,A,B)
    assert computed==mod1009
    assert computed["projection_degrees"][:2]==[530,551]
    assert computed["common_degrees"]["gcd"]==367

    A0=A.clear_denoms(convert=True)[1].primitive()[1]
    B0=B.clear_denoms(convert=True)[1].primitive()[1]
    triple=S.Poly(S.resultant(A0.as_expr(),B0.as_expr(),s),l,domain=S.QQ)
    R=triple.exquo(S.Poly((1344*l+325)**6*(112*l-3)**27,l,domain=S.QQ)).monic()
    assert R.degree()==93 and R.is_irreducible
    factors=[S.Poly.from_list(f,l,domain=S.QQ).monic() for f in (Q2,Q2B,Q3,OCTIC)]
    assert all(f.is_irreducible for f in factors)
    assert len(set(f.as_expr() for f in [*factors,R]))==5
    lc=S.Poly(S.Poly(D.as_expr(),s).LC(),l,domain=S.QQ)
    for H in [*factors,R]:
        assert not lc.rem(H).is_zero and H.eval(S.Rational(3,112))!=0
    for W in [A,B]:
        lead=S.Poly(S.Poly(W.as_expr(),s).LC(),l,domain=S.QQ)
        assert not lead.is_zero and lead.degree()<R.degree()
    # D has exactly the cubic discriminant identity needed at triple support.
    g=json.loads(Path(src).read_bytes())["G"]
    t=S.Symbol("t")
    G=S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in g},s,t,l,domain=S.QQ).as_expr()
    a=G.coeff(t,3)
    assert S.Poly(4*A.as_expr()**3-B.as_expr()**2,s,l,domain=S.QQ)==S.Poly(27*a*a*D.as_expr(),s,l,domain=S.QQ)
    assert not a.has(s) and 0<=S.degree(a,l)<R.degree()
    # Each nontriple family has a certified stationary s; the first has three
    # distinct such s at each conjugate lambda.
    q2=lift(None,Q2,D,ds,dl)
    assert q2["s_gcd_degrees"][-1]==3
    F=S.Poly.from_list([S.sympify(x,locals={"l":l}) for x in q2["s_gcd"]],s)
    assert not S.Poly(S.discriminant(F.as_expr(),s),l,domain=S.QQ).rem(factors[0]).is_zero
    for H,ss in [
        (factors[1],-S.Rational(154372170,326599)*l-S.Rational(295114151,5627552)),
        (factors[2],-168*l-S.Rational(21,5)),(factors[3],-168*l-S.Rational(21,5))]:
        assert all(S.Poly(W.as_expr().subs(s,ss),l,domain=S.QQ).rem(H).is_zero
                   for W in (D,ds,dl))
    # Local length gives minimum factor orders [6,2,2,2], R^3 and linear^50.
    assert 50+3*93+6*2+2*(2+3+8)==367
    print("Exact resultant degrees 530/551, exact common factor degree 367 by squeeze.")

if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("src")
    parser.add_argument("projection")
    verify(**vars(parser.parse_args()))
