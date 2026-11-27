"""Temporal continuum: finite-spatial-lattice Hamiltonian probe certificate."""
import sys
from pathlib import Path
root=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(root/'four-square-skipped-neighbor-probe'))
import fifth as f
sys.path.insert(0,str(root/'four-square-perimeter-band'))
from verify import labels
iv=f.iv

def casimir(q):
 return sum(n*(n+2)*d for n,d in zip(q,f.lengths))
def hermitian_powers(u, pivot, skip):
 es=[iv.mpf(casimir(pivot))/2]
 seq=[u]
 for n in range(1,6):
  z=f.act(seq[n-1])
  es.append(-f.dot(u,z) if n%2==0 else iv.mpf(0))
  for j in range(2,n,2):
   for q,v in seq[n-j].items():
    f.add(z,q,es[j]*v)
  seq.append({q:v/(iv.mpf(casimir(q))/2-es[0]) for q,v in z.items() if q not in skip})
 return seq
def main():
 iv.dps=60
 f.check_envelope()
 # C >= 3 weight, so weight <= 10 contains every C < 33.
 entries=list(labels(10))
 assert {q for q in entries if casimir(q)==30}==set(f.P)
 assert max(casimir(q) for q in entries if casimir(q)<30)==26
 assert all(abs(casimir(q)-30)>=2 for q in entries if q not in f.P)
 assert min(casimir(q) for q in entries if q!=f.VAC)==12
 va=hermitian_powers({f.VAC:iv.mpf(1)},f.VAC,{f.VAC})
 od=hermitian_powers(f.odd(),f.O[0],set(f.P))
 def coefficient(n,pair):
  return sum(f.dot(od[n-k],f.act(f.act(va[k],[pair[0]]),[pair[1]])) for k in range(n+1))
 R,g=iv.mpf(".075"),iv.mpf(".01")
 alpha=8*R
 assert alpha<1 and 2*(1+(alpha/(1-alpha))**2)<7
 out=iv.mpf(0)
 for n in (1,3,5):
  a=coefficient(n,(0,2)); z=coefficient(n,(1,3))
  assert 0 in a+z
  c=a-z
  if n==1:
   assert 0 in c-iv.sqrt(2)/96
  print(n,c,flush=True)
  out+=c*g**n
 tail=7*(g/R)**7/(1-(g/R)**2)
 value=out+iv.mpf([-1,1])*tail
 # For real g the min-max displacement is at most 4g; the complement
 # bound 0.5 is conservative but allows a direct norm conversion.
 scale=1+(8*g/(1-8*g))**2
 assert iv.mpf("1.40e-4") < value/scale and value < iv.mpf("1.53e-4")
 print("reference-normalized",value)
if __name__=='__main__':main()
