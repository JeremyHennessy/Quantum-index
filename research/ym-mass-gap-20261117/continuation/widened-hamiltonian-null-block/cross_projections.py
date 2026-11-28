"""Bounded exact y projections for the two cross-elementary pair types."""
from pathlib import Path
import argparse
import hashlib
import json
from concurrent.futures import ProcessPoolExecutor
from itertools import product
from math import prod
import sympy as S

from cross_elementary_support import x,y,p,pack
PIN="baf192fb35a57b62163a3072b14a200ef0770725217201c9c63c3e674dae6b05"
W=["CC","L1C1","L1C2","L2C1","L2C2"]

def load(file):
    r=Path(file).read_bytes();assert hashlib.sha256(r).hexdigest()==PIN
    z=json.loads(r)["polynomials"]
    def q(a):
        return S.Poly.from_dict({(i,j):S.Rational(c) for i,j,c in a},x,y,domain=S.QQ)
    A,B=[q(z[n]["full"]) for n in ("A","B")]
    L=[q(fs[1]) for fs in z["L"]["factors"]]
    C=[q(fs[1]) for fs in z["Cnorm"]["factors"]]
    V={"CC":(A,B)}
    V.update({f"L{i+1}C{j+1}":(a,b) for (i,a),(j,b) in product(enumerate(L),enumerate(C))})
    return V

def proc(k,A,B):
    ia=S.Poly(A.clear_denoms()[1].primitive()[1].as_expr(),y,domain=S.ZZ[x])
    ib=S.Poly(B.clear_denoms()[1].primitive()[1].as_expr(),y,domain=S.ZZ[x])
    R,subs=ia.resultant(ib,includePRS=True)
    R0=S.Poly(R,x,domain=S.ZZ)
    assert not R0.is_zero
    print(k,"raw resultant degree",R0.degree(),"remaining subresultants",[(t.degree(y)) for t in subs],flush=True)
    sc,fs=R0.factor_list()
    assert sc*prod(q**m for q,m in fs)==R0
    print(k,"factors",[(q.degree(),m) for q,m in fs],flush=True)
    sol=[]
    # Need a finite physical projection; all exact reality is recorded later,
    # independently from the complete rational factorization.
    for f,m in fs:
        if f.degree()<=10:
            print(k,"small factor",f.as_expr(),m,"real x [-2,2]",f.count_roots(-2,2),flush=True)
        sol.append([int(m),[str(v) for v in f.all_coeffs()]])
    return {"name":k,"degree":int(R0.degree()),"factors":sol,
            "subresultants":[{"degree_y":int(t.degree(y)),"polynomial":pack(p(t.as_expr()))}
                             for t in subs if t.degree(y)<=3]}

def main(args):
    A=load(args.input)
    with ProcessPoolExecutor(args.workers) as e:
        q=[e.submit(proc,k,*A[k]) for k in args.cases]
        d=[f.result() for f in q]
    raw=(json.dumps({"schema":"repeated-cross-elementary-y-projections-v1","support_sha256":PIN,"cases":d},
                    sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open("xb") as f:f.write(raw)
    print("artifact",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)
if __name__=="__main__":
    ap=argparse.ArgumentParser()
    ap.add_argument("input");ap.add_argument("output");ap.add_argument("--cases",nargs="+",default=W);ap.add_argument("--workers",type=int,default=5)
    main(ap.parse_args())
