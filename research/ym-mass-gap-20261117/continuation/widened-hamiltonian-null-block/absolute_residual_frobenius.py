"""Exact split-prime specialization/block certificate for geometric irreducibility."""
import argparse
import hashlib
import json
from math import lcm,prod
from pathlib import Path
import warnings

import sympy as S
from sympy.utilities.exceptions import SymPyDeprecationWarning

SHA="824fc786a8bf480b47b946f457869d2e332c1dd08f0a8c7726e4b3dead07cc0f"
P=37

def exact_factors(q,p):
    x=q.gen
    a=S.Poly(q.as_expr(),x,modulus=p)
    assert a.degree()==q.degree() and a.gcd(a.diff()).degree()==0
    c,h=a.factor_list()
    assert a==c*prod(f**e for f,e in h)
    assert all(e==1 and f.is_irreducible for f,e in h)
    return tuple(sorted(f.degree() for f,e in h))

def partition_possible_for_long_cycle(length,all_lens,nblocks,size):
    # The orbit of blocks meeting a long cycle has `ell` blocks, all
    # point-cycle lengths therein divisible by ell. Filling this exact
    # orbit of ell*size roots is necessary for a block system.
    rest=list(all_lens);rest.remove(length)
    for ell in S.divisors(length):
        if ell>nblocks or ell*size<length:continue
        eligible=[i for i in rest if i%ell==0]
        sums={0}
        for n in eligible:sums|={s+n for s in sums}
        if ell*size-length in sums:return True
    return False

def run(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==SHA
    a,b=json.loads(raw)[-2:]
    assert [x['axis'] for x in (a,b)]==[2,2]
    assert [x['transverse'] for x in (a,b)]==[["8","12"],["1","2"]]
    x,t=S.symbols("x t")
    p100=[]
    for data in (a,b):
        ints=list(map(int,data["factors"][1]["coefficients"]))
        assert len(ints)==53 and all(not q for q in ints[1::2])
        tpoly=S.Poly.from_list(ints,t,domain=S.ZZ)
        xpoly=S.Poly.from_list(ints[::2],x,domain=S.ZZ)
        assert tpoly.as_expr()==xpoly.as_expr().subs(x,t*t)
        assert tpoly.degree()==52 and xpoly.degree()==26
        assert tpoly.eval(0)
        p100.append((exact_factors(tpoly,P),exact_factors(xpoly,P)))
    (f,f2),(g,g2)=p100
    assert P%4==1 and pow(6,2,P)==P-1
    assert f==(2,5,5,6,34) and f2==(1,3,5,17)
    assert g==(3,3,16,30) and g2==(3,8,15)
    print("split prime",P,": two squarefree 52-root cycle types",f,g,flush=True)
    print("canonical sign-pair quotient cycle types",f2,g2,flush=True)
    for m in (2,4,13):
        assert not partition_possible_for_long_cycle(34,f,m,52//m)
    for m in (2,13):
        assert not partition_possible_for_long_cycle(30,g,m,52//m)
    assert 104%lcm(*f)!=0 and 104%lcm(*g)!=0
    assert f!=g and f2!=g2
    print("excluded geometric component counts 2,4,13,26,52; residual absolutely irreducible",flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('axis_factor_file')
    a=p.parse_args()
    warnings.simplefilter("ignore",SymPyDeprecationWarning)
    run(a.axis_factor_file)
