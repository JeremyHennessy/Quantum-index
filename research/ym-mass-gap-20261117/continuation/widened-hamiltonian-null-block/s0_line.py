"""Exact residual characteristic on X=(-2,x,-x), via u=x^2."""
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import argparse
from math import prod
import hashlib
import json

import sympy as S

from s0_stencils import setup,eval_char,E,L

u,l=S.symbols("u l")
a=-S.Rational(11,840);b=S.Rational(3,280)
ENS=(E-a,E-b)
LO=S.Integer(0);HI=S.Integer(4)
P6=S.Poly((l-a)**2*(l-b),l,domain=S.QQ)
assert ENS==(-S.Rational(43,1680),-S.Rational(83,1680))
assert P6.eval(E-L)!=0
assert P6.count_roots(-S.oo,E-L)==0

def sample(x,B6,D):
    x=S.Rational(x)
    ap,bp=eval_char(x,B6,D)
    assert P6==S.Poly.from_list(ap,l,domain=S.QQ)
    pp=S.Poly.from_list(bp,l,domain=S.QQ)
    q,r=pp.div(S.Poly((l-L)**3,l,domain=S.QQ))
    assert r.is_zero and q.degree()==11
    return x*x,tuple(q.all_coeffs())

def form(workers):
    B6,D=setup()
    xs=list(range(12))+[-2, S.Rational(2,3), S.Rational(17,13), S.Rational(9,5)]
    if workers>1:
        with ProcessPoolExecutor(workers) as ex:
            ys=[f.result() for f in [ex.submit(sample,x,B6,D) for x in xs]]
    else:ys=[sample(x,B6,D) for x in xs]
    C=[]
    for j in range(12):
        c=S.Poly(S.interpolate([(a,q[j]) for a,q in ys[:j+1]],u),u,domain=S.QQ)
        assert c.degree()<=j and all(c.eval(a)==q[j] for a,q in ys)
        C.append(c)
    return C

def monic(C,x):
    return S.Poly.from_list([c.eval(x) for c in C],l,domain=S.QQ)

def inertia(pol,energy):
    return sum(i*P.count_roots(-S.oo,energy) for P,i in pol.sqf_list()[1])

def analyze(C):
    q=S.Poly.from_list([c.as_expr() for c in C],l)
    ff=[S.Poly(q.eval(h),u,domain=S.QQ) for h in ENS]
    g=ff[0].gcd(ff[1]).monic()
    print("joint threshold gcd",g.as_expr(),"physical roots",g.count_roots(LO,HI),flush=True)
    rr=[]
    for i,(h,P) in enumerate(zip(ENS,ff)):
        c,facts=P.factor_list()
        print("threshold",h,"poly",S.factor(P.as_expr()),"root count",P.count_roots(LO,HI),flush=True)
        roots=[]
        for t,m in facts:
            for (z,w),k in t.intervals(inf=LO,sup=HI,eps=S.Rational(1,10**9)):
                assert k==1
                if z==w:
                    x0=z
                    z-=S.Rational(1,10**10);w+=S.Rational(1,10**10)
                else:x0=None
                assert LO<z<w<HI
                assert P.count_roots(z,w)==1 and ff[1-i].count_roots(z,w)==0
                assert all(P.eval(x)!=0 for x in (z,w))
                v=S.Poly(S.diff(q.as_expr(),l).subs(l,h),u,domain=S.QQ)
                nq=1
                if v.rem(t).is_zero:
                    while nq<11:
                        v=S.Poly(S.diff(q.as_expr(),l,nq).subs(l,h),u,domain=S.QQ)
                        if not v.rem(t).is_zero:break
                        nq+=1
                assert nq<=m
                eq_count=(2 if i==0 else 1)*nq
                # Include both threshold contributions to actual residual inertia;
                # fixed triple flat copies are gapped here, hence cancel in differences.
                nls=sum(weight*inertia(monic(C,z),energy) for weight,energy in zip((2,1),ENS))
                nrs=sum(weight*inertia(monic(C,w),energy) for weight,energy in zip((2,1),ENS))
                d=nls-nrs
                signs=None
                if m==nq:
                    assert (eq_count+d)%2==0 and abs(d)<=eq_count
                    signs=[int((eq_count+d)//2),int((eq_count-d)//2)]
                roots.append({"isolation":[str(z),str(w)],"factor":[str(v) for v in t.all_coeffs()],
                              "q_u_multiplicity":int(m),"q_lambda_multiplicity":nq,
                              "residual_energy_multiplicity":eq_count,
                              "residual_line_determinant_order":int(m)*(2 if i==0 else 1),
                              "u_slope_positive_negative":signs,"inertias":[int(nls),int(nrs)]})
                print(" exact interval and signatures",roots[-1],flush=True)
        assert len(roots)==P.count_roots(LO,HI)
        rr.append({"energy":str(h),"poly":[str(x) for x in P.all_coeffs()],
                   "factorization":[[int(m),[str(v) for v in t.all_coeffs()]] for t,m in facts],
                   "endpoints_nonzero":[bool(P.eval(x)) for x in (LO,HI)],
                   "roots":roots})
    return {"schema":"negative-plane-s0-v1","u_interval":[0,4],"p6_eigenvalues":[str(a),str(a),str(b)],
            "q9_coefficients":[[str(v) for v in c.all_coeffs()] for c in C],
            "thresholds":rr,"joint_monic_gcd":[str(v) for v in g.all_coeffs()]}

def main(args):
    v=analyze(form(args.workers))
    r=(json.dumps(v,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open("xb") as f:f.write(r)
    print("artifact",len(r),hashlib.sha256(r).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--workers",type=int,default=6)
    p.add_argument("--output",required=True)
    main(p.parse_args())
