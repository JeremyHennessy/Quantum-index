"""Exact compact replay of cross-pair counts, shared factor and physical exclusions."""
from pathlib import Path
from itertools import combinations
from collections import Counter
import argparse,hashlib,json
import sympy as S

PROJ="5435aa89d739fe5c1bec37f0e8801ef53b5e3c75aa7ccb13fcb2395855338b98"
LIFT="4a766c9f429e9709ec365f2c81ae827d61318d66a8623bf38923de40fc5ab1d4"
x=S.Symbol("x")
def read(name,d):
    b=Path(name).read_bytes()
    assert hashlib.sha256(b).hexdigest()==d
    return json.loads(b)

def fp(a):return S.Poly.from_list(list(map(S.Rational,a)),x,domain=S.QQ).monic()

def bracket(q,n=10**9):
    a,b=map(S.Rational,q)
    return [str(S.floor(a*n)/S.Integer(n)),str(S.ceiling(b*n)/S.Integer(n))]

def main(args):
    pp=read(args.projection,PROJ)["cases"]
    ww=read(args.lifts,LIFT)["cases"]
    Q=S.Poly(2960000*x**4-102687000*x**3+1429088325*x**2+796997740*x-4264791342,x,domain=S.QQ).monic()
    AA=[{tuple(fp(f).all_coeffs()) for n,f in a["factors"]} for a in pp]
    for i,j in combinations(range(len(AA)),2):
        g=AA[i].intersection(AA[j])
        assert g==(set() if i==0 else {tuple(Q.all_coeffs()),(1,2)})
    expected={"CC":(7,6),"L1C1":(8,3),"L1C2":(7,2),"L2C1":(6,2),"L2C2":(6,2)}
    reject=Counter(); res=[]
    for a in ww:
        cand=a["candidates"];name=a["name"]
        assert (len(cand),sum(k["off_F_strict"] for k in cand))==expected[name]
        for k in cand:
            if not k["strict"]:
                if k["method"]=="excluded x endpoint":reject["x_endpoint"]+=1
                elif k["inequality_signs"][-1]==0:reject["diagonal"]+=1
                else:
                    assert min(k["inequality_signs"][:2])<0;reject["y_outside"]+=1
                continue
            assert k["off_F_strict"] and k["F_sign"]!=0
            assert k["projection_multiplicity"]==1 and k["method"]=="fixed-degree linear subresultant"
            res.append({"pair":name,"x_degree":int(fp(k["factor"]).degree()),"x_interval_outward":bracket(k["x_interval"]),
                        "y_interval_outward":bracket(k["y_interval"]),"F_sign":k["F_sign"]})
    assert len(res)==15 and reject=={"x_endpoint":4,"diagonal":9,"y_outside":6}
    print("15 strict off-F pairs, no unresolved lifts; 4 endpoint,9 diagonal,6 outside rejects",flush=True)
    raw=(json.dumps({"schema":"repeated-cross-elementary-short-witness-v1","projections_sha256":PROJ,
                     "lifts_sha256":LIFT,"physical":res},sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print("compact witness",len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser();p.add_argument("projection");p.add_argument("lifts");p.add_argument("output")
    main(p.parse_args())
