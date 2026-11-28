"""Exact positive-face plus norm and all physical intersections with the flat factor."""
from itertools import permutations
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S
from sympy.polys.rings import ring

PIN = "611f6294f54cf2535fbddbbcc4eb5dea74736ab92ce3232c24c1a5fa9f71bafb"
R, s, u = ring("s,u", S.QQ)
ss, uu = S.symbols("s u")


def as_ring(rows):
    return R.from_dict({(i,j):S.QQ(v) for i,j,v in rows})


def pos_plus(data):
    c1,c2,c3=map(as_ring,data["p6"][1:])
    d2,d1,d0=map(as_ring,data["plus_remainder"])
    C=[[R.zero,R.zero,-c3],[R.one,R.zero,-c2],[R.zero,R.one,-c1]]
    A=[[d0*(i==j)+d1*C[i][j]+d2*sum(C[i][k]*C[k][j] for k in range(3))
        for j in range(3)] for i in range(3)]
    return sum((-1)**sum(p[i]>p[j] for i in range(3) for j in range(i+1,3))*
               A[0][p[0]]*A[1][p[1]]*A[2][p[2]] for p in permutations(range(3)))


def bound(p, interval):
    a,b=interval
    lo=hi=S.S.Zero
    for c in p.all_coeffs():
        v=a*lo,a*hi,b*lo,b*hi
        lo,hi=min(v)+c,max(v)+c
    return lo,hi


def classify_sign(p, root, interval):
    r=p.rem(root)
    if r.is_zero:
        return 0
    for k in (9,15,23,34):
        t=root.refine_root(*interval,eps=S.Rational(1,10**k))
        a,b=bound(r,t)
        if a>0:
            return 1
        if b<0:
            return -1
    raise ValueError("Unresolved exact algebraic boundary sign")


def run(path, out):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    data=json.loads(raw)
    plus=pos_plus(data)
    assert plus.degrees()==(21,10) and len(plus)==138
    scale,factors=plus.factor_list()
    assert len(factors)==1 and factors[0][1]==1
    f=factors[0][0]
    graph=(4300*ss**2-180*ss-5133)/16000
    rr=S.Poly(f.as_expr().subs(uu,graph),ss,domain=S.QQ)
    assert rr.degree()==22 and rr.count_roots(-4,4)==7
    assert rr.gcd(rr.diff()).degree()==0
    E0=-S.Rational(1,42)
    qflat=sum(as_ring(row).as_expr()*E0**(9-i) for i,row in enumerate(data["q9_plus"]))
    qflat=S.Poly(qflat.subs(uu,graph),ss,domain=S.QQ)
    checks=[S.Poly(p,ss,domain=S.QQ) for p in (graph-2*ss+4,graph+2*ss+4,ss**2/4-graph)]
    result=[]
    for p,m in rr.factor_list()[1]:
        assert p.degree() in (4,18) and m==1
        for interval,k in p.intervals(inf=-4,sup=4,eps=S.Rational(1,10**10)):
            assert k==1 and -4<interval[0]<=interval[1]<4
            signs=[classify_sign(a,p,interval) for a in checks]
            assert 0 not in signs
            result.append({"s_factor":[str(v) for v in p.all_coeffs()],
                           "s_interval":[str(v) for v in interval],
                           "physical":min(signs)>0,"domain_signs":signs,
                           "companion_flat_rank_jumps":qflat.rem(p).is_zero})
    assert len(result)==7 and sum(x["physical"] for x in result)==6
    assert sum(x["physical"] and x["companion_flat_rank_jumps"] for x in result)==2
    print("138-term norm; 7 real F intersections, 6 physical, 2 with an extra flat companion")
    obj={"schema":"positive-face-plus-flat-v1","plus_orientation_scale":str(scale),
         "plus_primitive":[[i,j,str(c)] for (i,j),c in sorted(f.items(),reverse=True)],
         "all_real_intersections":result}
    blob=(json.dumps(obj,sort_keys=True,separators=(",",":"))+"\n").encode()
    if out:
        with Path(out).open("xb") as g:
            g.write(blob)
    print(len(blob),hashlib.sha256(blob).hexdigest())


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("input")
    p.add_argument("--output")
    a=p.parse_args()
    run(a.input,a.output)
