"""Uniform finite-strip certificate for beta in [0.9,1.1] at b=0.001."""
from math import factorial
from functools import cache
import sys
from pathlib import Path
root=Path(__file__).resolve().parent.parent
sys.path.insert(0,str(root/'four-square-skipped-neighbor-probe'))
import fifth as f
sys.path.insert(0,str(root/'four-square-perimeter-band'))
from verify import labels as basis
iv=f.iv

def certify(lo,hi):
 beta=iv.mpf([lo,hi])/1000
 @cache
 def B(n):
  x=sum((beta/2)**(2*k)/(factorial(k)*factorial(n+k)) for k in range(21))
  e=2*(beta/2)**42/(factorial(21)*factorial(n+21))
  return x+iv.mpf([0,1])*e
 @cache
 def kval(q):
  if q in f.P:return iv.mpf(1)
  return ((beta/2)**(f.weight(q)-10)
          *f.mul((B(n+1)/B(1))**d for n,d in zip(q,f.lengths) if n)
          *(B(1)/B(2))**10)
 a=(beta/2)*B(2)/B(1)
 assert a<iv.mpf(".28")
 assert iv.mpf(".28")**17/a**10<iv.mpf(".03")
 for q in basis(16):
  if q in f.P:continue
  ratio=kval(q)
  if not (ratio<iv.mpf(".74") or ratio>iv.mpf("3")):
   raise ValueError((lo,hi,q,str(ratio)))
 f.kval=kval
 va=f.derivatives({f.VAC:iv.mpf(1)},f.VAC,{f.VAC})
 od=f.derivatives(f.odd(),f.O[0],set(f.P))
 def coef(n):
  c=iv.mpf(0)
  for k in range(n+1):
   u=va[k]
   for j in range(n-k+1):
    c+=(f.dot(od[n-k-j],f.act(f.act(u,[0]),[2]))
        -f.dot(od[n-k-j],f.act(f.act(u,[1]),[3])))*iv.mpf((-1)**j)/factorial(j)
    if j<n-k:u=f.act(u)
  return c
 b,R=iv.mpf(".001"),iv.mpf(".02")
 alpha=(iv.mpf(113)/13)*4*R/(1-4*R)
 assert alpha<1
 norm2=1+(alpha/(1-alpha))**2
 M=30
 assert 2*norm2/(1-4*R)<M
 # Analytic radius .13, rho <= .08; Neumann for projector resolvent.
 assert (iv.mpf(113)/13)*4*R/(1-4*R)<1
 c1=iv.sqrt(2)*a**2/(16*(1-a**4))
 v=c1*b+coef(3)*b**3+coef(5)*b**5
 v+=iv.mpf([-1,1])*M*(b/R)**7/(1-(b/R)**2)
 assert v>iv.mpf("3e-6") and v<iv.mpf("7e-6"),(lo,hi,v)
 ar=(iv.mpf(113)/13)*4*b/(1-4*b)
 bound=(1+(ar/(1-ar))**2)/(1-2*b)**2
 assert v/bound > iv.mpf("4.14e-6") and v/(1-2*b)**2<iv.mpf("6.17e-6")
 return float(v.a),float(v.b)

if __name__=='__main__':
 iv.dps=60
 f.check_envelope()
 vals=[certify(lo,lo+5) for lo in range(900,1100,5)]
 print(len(vals),min(a for a,b in vals),max(b for a,b in vals),flush=True)
