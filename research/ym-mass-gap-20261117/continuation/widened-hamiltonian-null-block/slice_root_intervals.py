"""Isolate real roots of each exact sliced factor and preserve total determinant order."""
import argparse
import hashlib
import json
from pathlib import Path

import sympy as S

SHA="c52d5808ac4cf6915d3683e407821026e929b25b4cb971052920c27f11e19f7f"

def run(infile,outfile):
    raw=Path(infile).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==SHA
    t=S.Symbol("t")
    out=[]
    for chart in json.loads(raw):
        slices=chart["transverse"]
        vals=[]
        all_iv=[]
        for f in chart["factors"]:
            q=S.Poly.from_list(list(map(int,f["coefficients"])),t,domain=S.ZZ)
            rr=q.intervals(eps=S.Rational(1,10**6))
            assert len(rr)==f["real"]
            assert all(m==1 and u<v and q.count_roots(u,v)==1 for (u,v),m in rr)
            all_iv.extend((u,v) for (u,v),m in rr)
            vals.append({"degree":f["degree"],"determinant_root_multiplicity":f["multiplicity"],
                         "real_root_intervals":[[str(u),str(v)] for (u,v),m in rr]})
        all_iv.sort()
        assert all(v<u1 for (_,v),(u1,_) in zip(all_iv,all_iv[1:]))
        out.append({"transverse":slices,"real_components":vals})
    ret=(json.dumps(out,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(outfile).open('xb') as f:f.write(ret)
    print(len(ret),hashlib.sha256(ret).hexdigest())

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("factor")
    p.add_argument("out")
    a=p.parse_args()
    run(a.factor,a.out)
