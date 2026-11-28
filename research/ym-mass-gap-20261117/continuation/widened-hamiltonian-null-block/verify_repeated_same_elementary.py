from pathlib import Path
import json,sympy as S
import sys
from hashlib import sha256
x,y,s,t,r,l,m=S.symbols('x y s t r l m')
if len(sys.argv)!=3:raise SystemExit('Supply scalar threshold JSON and companion JSON')
gp,qp=map(Path,sys.argv[1:])
G_RAW,Q_RAW=gp.read_bytes(),qp.read_bytes()
assert sha256(G_RAW).hexdigest()=='42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9'
assert sha256(Q_RAW).hexdigest()=='dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7'
E=-S.Rational(13,336)
def poly(c,vs):
 return S.Poly.from_dict({tuple(e[:-1]):S.Rational(e[-1]) for e in c},*vs,domain=S.QQ).as_expr()
G=poly(json.loads(G_RAW)['G'],(s,t,l))
Q=S.Poly.from_list([poly(k,(s,t,r)) for k in json.loads(Q_RAW)['q9']],m).as_expr()
P=G.subs({s:2*x+y,t:x*x+2*x*y},simultaneous=True)
C=705600*l*l+16800*l*x+4200*l*y+26880*l+100*x*x+220*x-45*y+31
ys={'L':-168*l-S.Rational(1,5),'C':S.solve(C,y)[0]}
def bounds(P,I):
    a=b=S.S.Zero;lo,hi=I
    for c in P.all_coeffs():
        vv=a*lo,a*hi,b*lo,b*hi
        a,b=min(vv)+c,max(vv)+c
    return a,b
def signs(fs,root,I):
 for ex in (18,28,43,65,99):
  J=root.refine_root(*I,eps=S.Rational(1,10**ex)) if I[0]!=I[1] else I
  sig=[]
  for f in fs:
   if f.is_zero:sig.append(0);continue
   a,b=bounds(f,J)
   if a>0:sig.append(1)
   elif b<0:sig.append(-1)
   else:break
  if len(sig)==len(fs):return J,sig
 raise RuntimeError("Unresolved root sign")
def reduce_poly(p,X):
    if not isinstance(p,S.Poly):
        p=S.Poly(p,l,domain=S.QQ)
    ints=[int(u.p)*pow(int(u.q),-1,int(X.get_modulus()))%X.get_modulus() for u in p.all_coeffs()]
    return S.Poly.from_list(ints,l,modulus=X.get_modulus()).rem(X)

def ev_mod(P,variables,values,X):
    coeffs=P if isinstance(P,S.Poly) else S.Poly(P,*variables,domain=S.QQ)
    cache=[]
    for v,d in zip(values,coeffs.degree_list()):
        pp=[reduce_poly(1,X)]
        for q in range(d):pp.append((pp[-1]*v).rem(X))
        cache.append(pp)
    out=reduce_poly(0,X)
    for exps,c in coeffs.terms():
        row=reduce_poly(c,X)
        for j,k in enumerate(exps):row=(row*cache[j][k]).rem(X)
        out=(out+row).rem(X)
    return out

def evaluate_part(P,f,xs,yy,typ,Qpieces):
    for prime in (1009,1013,1021,1033,1049,1061):
        try:
            X=reduce_poly(f,S.Poly(l**(f.degree()+1),l,modulus=prime))
            if X.degree()!=f.degree():continue
            rr=lambda u:reduce_poly(u,X)
            xx,zz,aa=map(rr,(xs,yy,l))
            vv=[xx,zz,aa]
            # No modal flat threshold at either extracted point.
            flat=-S.Rational(5,336)
            flats=[ev_mod(Z.subs(l,flat),[x,y],vv[:2],X) for Z in (840*l+5*y+1,C)]
            # Exact pair membership certifies two vanishing Q factors at E−lambda.
            mu=rr(E)-aa
            dq=[ev_mod(W.diff(m),[x,y,m],[xx,zz,mu],X) for W in Qpieces]
            # Membership in all other elementary components would force one of
            # these exact tests to vanish as a polynomial in the root field.
            if typ=='L':
                rest=S.Poly(S.rem(P,C,l),l)
                b=ev_mod(rest.nth(0),[x,y],vv[:2],X)
                a=ev_mod(rest.nth(1),[x,y],vv[:2],X)
                q1=ev_mod(S.Poly(C,l).nth(1)/705600,[x,y],vv[:2],X)
                q0=ev_mod(S.Poly(C,l).nth(0)/705600,[x,y],vv[:2],X)
                other=[(q0*a*a-q1*a*b+b*b).rem(X)]
            else:
                al=-(rr(5)*zz+rr(1))*rr(S.Rational(1,840))
                ac=-(rr(16800)*xx+rr(4200)*zz+rr(26880))*rr(S.Rational(1,705600))-aa
                other=[ev_mod(P,[x,y,l],[xx,zz,O.rem(X)],X) for O in [al,ac]]
            if all(not v.is_zero for v in [*flats,*dq,*other]):
                return prime
        except ValueError:
            continue
    raise RuntimeError("No good prime with nonzero cofactors")

def replay():
    R=S.Poly(Q.subs({s:2*x+y,t:x*x+2*x*y,r:x*x*y},simultaneous=True),x,y,m,domain=S.QQ)
    pieces=sorted(R.factor_list()[1],key=lambda u:u[0].degree(x))
    assert [(f.degree_list(),k) for f,k in pieces]==[((2,2,5),1),((4,2,6),1)]
    windows=(S.Rational(-71,840),S.Rational(3,280))
    found=[]
    for typ,want in [('L',[(2,5),(4,6)]),('C',[(4,7),(6,8)])]:
        FS=[]
        for (W,k),shape in zip(pieces,want):
            K=S.Poly(W.as_expr().subs({y:ys[typ],m:E-l},simultaneous=True)
                      .together().as_numer_denom()[0],x,l,domain=S.QQ)
            fac=K.factor_list()[1]
            assert len(fac)==1 and fac[0][1]==1 and fac[0][0].degree_list()==shape
            FS.append(fac[0][0])
        seq=S.subresultants(*(F.as_expr() for F in FS),x)
        R0=S.Poly(seq[-1],l,domain=S.QQ)
        a,b=[S.Poly(o,l,domain=S.QQ) for o in S.Poly(seq[-2],x).all_coeffs()]
        for h,k in R0.factor_list()[1]:
            intervals=h.intervals(inf=windows[0],sup=windows[1],eps=S.Rational(1,10**15))
            assert len(intervals)==h.count_roots(*windows)
            if not intervals:continue
            if a.gcd(h).degree()>0:
                # cap is not in either strict branch, as checked in prior replay.
                assert typ=="C" and h.degree()==1 and h.eval(windows[1])==0
                continue
            xs=(-b*a.invert(h)).rem(h)
            if typ=='L': yy=S.Poly(ys['L'],l,domain=S.QQ).rem(h)
            else:
                C0=S.Poly(C.subs(y,0).subs(x,xs.as_expr()),l,domain=S.QQ).rem(h)
                Cy=S.Poly(C.coeff(y),l,domain=S.QQ)
                yy=(-C0*Cy.invert(h)).rem(h)
            tests=[xs+2,2-xs,yy+2,2-yy,xs-yy]
            for J,e in intervals:
                I,sig=signs(tests,h,J)
                if sig[:4]==[1,1,1,1] and sig[-1]!=0:
                    assert e==k==1
                    for F in FS:
                        # Horner in x at the reconstructed number-field point.
                        acc=S.Poly(0,l,domain=S.QQ)
                        for z in S.Poly(F.as_expr(),x).all_coeffs():
                            acc=(acc*xs+S.Poly(z,l,domain=S.QQ)).rem(h)
                        assert acc.is_zero
                    p=evaluate_part(P,h,xs,yy,typ,[W for W,_ in pieces])
                    found.append((typ,h.degree()))
                    print(typ,h.degree(),I,"is a strict rank-two companion point, other modes gapped, prime",p)
    assert found==[("L",14),("C",26)]

if __name__=="__main__":
    replay()
