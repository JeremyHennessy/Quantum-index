"""Exact flat/residual overlaps on the strict repeated-cosine graph."""
from pathlib import Path
import argparse
import hashlib
import json
from itertools import combinations
import sympy as S

GPIN="42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9"
QPIN="dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7"
x,y,s,t,r,l,m=S.symbols("x y s t r l m")
E=-S.Rational(13,336);ell=-S.Rational(1,42);f0=E-ell
C=705600*l*l+16800*l*x+4200*l*y+26880*l+100*x*x+220*x-45*y+31
L=840*l+5*y+1
Y=S.solve(C.subs(l,f0),y)[0]
P=S.Poly(C,l)
l_other=S.expand(-P.nth(1)/P.nth(2)-f0)
names=("flat_elementary","other_quadratic","linear")
energies=[f0,l_other.subs(y,Y), (-(5*y+1)/840).subs(y,Y)]

def read(path,sha):
    b=Path(path).read_bytes();assert hashlib.sha256(b).hexdigest()==sha
    return json.loads(b)

def poly(c,vs):
    return S.Poly.from_dict({tuple(t[:-1]):S.Rational(t[-1]) for t in c},*vs,domain=S.QQ).as_expr()

def factor_shape(P):
    return [(int(q.degree()),int(k),int(q.count_roots(-2,2))) for q,k in P.factor_list()[1]]

def classify_curves(G):
    V=G.subs({s:2*x+y,t:x*x+2*x*y},simultaneous=True)
    Lin=S.Poly(V.subs(y,-168*l-S.Rational(1,5)),x,l,domain=S.QQ)
    CP=S.Poly(V,y)
    ca=C.coeff(y);cb=C.subs(y,0)
    quad=S.Poly(sum(CP.nth(k)*(-cb)**k*ca**(CP.degree()-k)
                            for k in range(CP.degree()+1)),x,l,domain=S.QQ)
    def extract(P,shapes):
        _,fs=P.factor_list()
        cs=[q for q,k in fs if q.degree(x)>0]
        assert all(k==1 for q,k in fs if q.degree(x)>0)
        cs.sort(key=lambda q:q.degree(x))
        assert [q.degree_list() for q in cs]==shapes
        return cs
    return {"L":extract(Lin,[(2,5),(4,6)]),"C":extract(quad,[(4,7),(6,8)])}

def ranges(P,I):
    a,b=I
    j=k=S.S.Zero
    for c in P.all_coeffs():
        u=(a*j,a*k,b*j,b*k)
        j,k=min(u)+c,max(u)+c
    return j,k

def checks(f,I,prs):
    rem=[S.Poly(p,x,domain=S.QQ).rem(f) for p in prs]
    for n in (10,15,22,33,50,75):
        J=f.refine_root(*I,eps=S.Rational(1,10**n)) if I[0]!=I[1] else I
        signs=[]
        for q in rem:
            if q.is_zero:signs.append(0);continue
            a,b=ranges(q,J)
            if a>0:signs.append(1)
            elif b<0:signs.append(-1)
            else:break
        if len(signs)==len(rem):
            return J,ranges(S.Poly(Y,x,domain=S.QQ),J),signs
    raise ValueError("unresolved sign")

def coeff(P):return [str(r) for r in P.all_coeffs()]

def run(gfile,qfile,ouf):
    gg=read(gfile,GPIN);qq=read(qfile,QPIN)
    G=poly(gg["G"],(s,t,l));Q=S.Poly.from_list([poly(k,(s,t,r)) for k in qq["q9"]],m).as_expr()
    print("flat graph y=",S.factor(Y),"energies",[S.factor(e) for e in energies],flush=True)
    assert S.expand(L.subs(l,f0)-5*(y-S.Rational(23,10)))==0
    assert S.expand(C.subs({y:Y,l:f0},simultaneous=True))==0
    assert C.coeff(y).subs(l,f0)==-S.Rational(215,2)
    qgraph=Q.subs({s:2*x+Y,t:x*x+2*x*Y,r:x*x*Y},simultaneous=True)
    subs={s:2*x+Y,t:x*x+2*x*Y}
    smooth=classify_curves(G)
    data=[]; allp=[]
    for name,a in zip(names,energies):
        p=S.Poly(G.subs({**subs,l:a},simultaneous=True),x,domain=S.QQ)
        b=S.Poly(qgraph.subs(m,E-a),x,domain=S.QQ)
        assert p==b
        allp.append(p)
        en=S.Poly(S.diff(qgraph,m).subs(m,E-a),x,domain=S.QQ)
        assert p.gcd(en).degree()==0 and p.gcd(p.diff()).degree()==0
        grp="L" if name=="linear" else "C"
        elig=[S.Poly(F.as_expr().subs(l,a),x,domain=S.QQ) for F in smooth[grp]]
        rr=[]
        for f,k in p.factor_list()[1]:
            ir=f.intervals(inf=-2,sup=2,eps=S.Rational(1,10**9))
            assert len(ir)==f.count_roots(-2,2) and all(m==1 for I,m in ir)
            for I,m0 in ir:
                J,U,v=checks(f,I,(Y+2,2-Y,Y-x,p.diff().as_expr(),en.as_expr()))
                physical=bool(-2<J[0] and J[1]<2 and v[0]==v[1]==1 and v[2]!=0)
                slope=-v[3]*v[4]
                assert slope!=0
                membership=[grp+str(i+1) for i,tq in enumerate(elig) if tq.rem(f).is_zero]
                if physical:assert len(membership)==1
                print(name,f.degree(),J,"physical",physical,"curves",membership,"slope",slope,flush=True)
                rr.append({"x_factor":coeff(f),"x_interval":[str(x) for x in J],
                           "y_interval":[str(y) for y in U],"domain_signs":v[:3],"physical":physical,
                           "curve_membership":membership,
                           "total_energy_slope_along_increasing_x_on_F":slope,
                           "flat_B9_mult":(4 if name=="flat_elementary" else 3) if physical else None})
        data.append({"branch":name,"threshold_degree":int(p.degree()),"threshold_coefficients":coeff(p),
                     "energy_derivative_coefficients":coeff(en),"factor_census":factor_shape(p),"roots":rr})
    inter=[]
    for i,j in combinations(range(3),2):
        g=allp[i].gcd(allp[j]).monic()
        assert g.as_expr()==(x+2 if (i,j)==(0,2) else 1)
        inter.append({"branches":[names[i],names[j]],"monic_gcd":coeff(g)})
    assert Y.subs(x,-2)==S.Rational(23,10)
    total=sum(sum(r["physical"] for r in q["roots"]) for q in data)
    assert total==6
    d={"schema":"strict-repeated-cosine-flat-overlap-v1","inputs":[GPIN,QPIN],
       "flat_graph_y":str(Y),"branches":data,"inter_branch":inter}
    out=(json.dumps(d,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(ouf).open('xb') as f:f.write(out)
    print("artifact",len(out),hashlib.sha256(out).hexdigest(),flush=True)

if __name__=="__main__":
    ap=argparse.ArgumentParser();ap.add_argument("gfile");ap.add_argument("qfile");ap.add_argument("output")
    a=ap.parse_args();run(a.gfile,a.qfile,a.output)
