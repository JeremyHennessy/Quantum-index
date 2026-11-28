"""Classify all six-loop and residual crossings on the flat critical curves."""
from concurrent.futures import ProcessPoolExecutor
from fractions import Fraction
from pathlib import Path
import argparse
import hashlib,json
import sympy as S
from crit_rank import setup,eval_char,E,L

Y=S.Rational(3,10)
LO=-S.Rational(17,5); HI=S.Rational(9,400)
NU=E-S.Rational(3,280)

def data_at(x,B6,D):
    x=S.Rational(x); u=x*(Y-x)
    l=S.Symbol("l")
    a,b=eval_char(x,B6,D)
    p=S.Poly.from_list(a,l,domain=S.QQ)
    reference=S.Poly((l-S.Rational(3,280))*(l+S.Rational(5,336))**2,l,domain=S.QQ)
    assert p==reference
    red,rem=S.div(S.Poly.from_list(b,l,domain=S.QQ),S.Poly((l-L)**3,l,domain=S.QQ))
    assert rem.is_zero and red.degree()==11
    return u,tuple(red.all_coeffs())

def construct(workers):
    A,D=setup()
    values=list(range(15))+[-1,S.Rational(3,20),S.Rational(-17,10),S.Rational(1,10)]
    if workers>1:
        with ProcessPoolExecutor(workers) as p:
            fs=[p.submit(data_at,x,A,D) for x in values]
            res=[f.result() for f in fs]
    else:
        res=[data_at(x,A,D) for x in values]
    l,u=S.symbols("l u")
    # The exact 48-way stencil symmetry makes each coefficient an even
    # Laurent polynomial in each axis, then polynomial in X,Y,Z, whose
    # individual degree is at most 14. On X+Y=3/10 each descends to
    # u=XY with degree ≤14, further improved to k for coefficient k.
    vv=[S.Poly(S.interpolate([(a,b[j]) for a,b in res[:15]],u),u,domain=S.QQ)
        for j in range(12)]
    assert all(v.degree()<=i for i,v in enumerate(vv))
    for a,b in res[15:]:
        assert [v.eval(a) for v in vv]==list(b)
    return S.Poly.from_list([v.as_expr() for v in vv],l),u

def assess(Q,u,energy):
    l=Q.gen
    aa=S.Poly(Q.eval(energy),u,domain=S.QQ)
    hh=aa.diff()
    assert aa.count_roots(LO,HI)==len(aa.intervals(inf=LO,sup=HI))
    factors=[]
    for p,m in aa.factor_list()[1]:
        zeros=p.count_roots(LO,HI)
        critical_multiplicity=0
        if zeros:
            for k in range(1,12):
                c=S.Poly(S.diff(Q.as_expr(),l,k).subs(l,energy),u,domain=S.QQ)
                if not c.rem(p).is_zero:
                    critical_multiplicity=k
                    break
            assert critical_multiplicity
        factors.append({"poly":[str(z) for z in p.all_coeffs()],"power":int(m),
                        "real_critical_curve_roots":int(zeros),
                        "additional_energy_eigenvalue_multiplicity":critical_multiplicity})
    print("energy",energy,"degree",aa.degree(),"factorization",S.factor(aa.as_expr()),flush=True)
    print("exact real physical curve root count",aa.count_roots(LO,HI),
          "endpoint values",aa.eval(LO),aa.eval(HI),flush=True)
    return {"energy":str(energy),"polynomial":[str(v) for v in aa.all_coeffs()],
            "factors":factors,"endpoint_nonzero":[bool(aa.eval(v)) for v in (LO,HI)]}

def run(args):
    Q,u=construct(args.workers)
    l=Q.gen
    a=assess(Q,u,L)
    b=assess(Q,u,NU)
    g=S.gcd(S.Poly(Q.eval(L),u),S.Poly(Q.eval(NU),u)).monic()
    g_real=g.count_roots(LO,HI)
    print("joint gcd",g.as_expr(),"real common zero count",g_real,flush=True)
    record={"physical_u_interval":[str(LO),str(HI)],"B6_eigenvalues":["-5/336","-5/336","3/280"],
            "reduced_6loop_characteristic":[[str(v) for v in S.Poly(k,u).all_coeffs()] for k in Q.all_coeffs()],
            "at_flat_energy":a,"at_other_energy":b,
            "joint_monic_gcd":[str(v) for v in g.all_coeffs()]}
    bb=(json.dumps(record,sort_keys=True,separators=(',',':'))+"\n").encode()
    if args.output:
        with Path(args.output).open("xb") as f:f.write(bb)
    print("artifact",len(bb),hashlib.sha256(bb).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--workers",type=int,default=6)
    p.add_argument("--output")
    run(p.parse_args())
