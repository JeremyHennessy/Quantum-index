import argparse,hashlib,json, subprocess
from pathlib import Path
import sympy as S

p=argparse.ArgumentParser();p.add_argument('projection');p.add_argument('exe');p.add_argument('output');a=p.parse_args()
RAW=Path(a.projection).read_bytes()
x=S.Symbol('s');j=json.loads(RAW)
cs=[[0]*44 for _ in range(44)]
for i,k,c in j['poly']:cs[k][i]=int(c)
ans=[]
for p in (2017,2027):
 assert S.isprime(p) and cs[43][0]%p
 msg=f"{p} 43 43\n"+'\n'.join(' '.join(str(c%p) for c in row) for row in cs)+'\n'
 raw=subprocess.check_output([a.exe],input=msg.encode())
 v,w=[S.Poly.from_list(list(reversed(list(map(int,L.split())))),x,modulus=p) for L in raw.splitlines()]
 g=S.gcd(v,w).monic()
 fs=g.factor_list()[1]
 print(p,v.degree(),w.degree(),g.degree(),[(f.degree(),k) for f,k in fs], flush=True)
 ans.append(dict(prime=p,degrees=[v.degree(),w.degree()],gcd_degree=g.degree(),
                 factors=[[k,list(map(int,f.monic().all_coeffs()))] for f,k in fs]))
with open(a.output,'x') as f:
 f.write(json.dumps(dict(schema="ordinary-pair-singular-projection-finite-field-v1",source_sha256=hashlib.sha256(RAW).hexdigest(),results=ans),sort_keys=True,separators=(',',':'))+'\n')
