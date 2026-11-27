"""Exact spin-network actions and interval enclosure of the skipped-neighbor probe through fifth order."""
import pathlib
import sys
from itertools import product
from functools import cache
from math import factorial
import mpmath as mp
from sympy import S,sqrt,sign
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parent.parent/'three-square-exact-actions'))
import actions as net
from sympy import simplify
iv=mp.iv

# Edges L,R,r1,r2,r3,t1,t2,u1,u2. Rungs and both exterior paths point top to bottom.
net.VERTICES=(
 ((0,2,5),(1,1,1)), ((0,2,7),(-1,-1,1)),
 ((3,5,6),(1,-1,1)), ((3,7,8),(-1,-1,1)),
 ((1,4,6),(1,1,-1)), ((1,4,8),(-1,-1,-1)),
)
lengths=(3,3,1,1,1,1,1,1,1)
def weight(q):return sum(a*b for a,b in zip(q,lengths))
def labels(mask):
 a,b,c,d=[(mask>>i)&1 for i in range(4)]
 return a,d,a^b,b^c,c^d,b,c,b,c
F=[labels(1<<i) for i in range(4)]
O=(labels(11),labels(13))
VAC=labels(0)
P=(*O,labels(15))

def check_envelope():
 hit=[[f[i] for i in range(9)] for f in F]
 for mask in (11,13):
  fin=labels(mask); n=0
  for w in product(range(4),repeat=7):
   total=[sum(hit[j][i] for j in w) for i in range(9)]
   if tuple(h%2 for h in total)!=fin:continue
   n+=1; pre=[0]*9
   for j in (*w,None):
    hi=[min(p,h-p+f) for p,h,f in zip(pre,total,fin)]
    hi=[z-(z-p)%2 for z,p in zip(hi,pre)]
    assert max(hi)<=3 and weight(hi)<=18
    if j is not None: pre=[p+x for p,x in zip(pre,hit[j])]
  assert n==2016

def rat(x):return iv.mpf(int(x.p))/int(x.q)
@cache
def conv(x):
 x=simplify(x)
 if x.is_Rational:return rat(x)
 if x.is_Add:return sum(conv(v) for v in x.args)
 if x.is_Mul:return mul(conv(v) for v in x.args)
 if x.is_Pow and x.exp==S.Half:return iv.sqrt(conv(x.base))
 raise ValueError(x)
def mul(xs):
 out=iv.mpf(1)
 for x in xs:out*=x
 return out
@cache
def bess(n):
 x=sum(S(1)/(2**(n+2*k)*factorial(k)*factorial(n+k)) for k in range(21))
 e=S(2)/(2**(n+42)*factorial(21)*factorial(n+21))
 return rat(x)+iv.mpf([0,1])*rat(e)

@cache
def kval(q):
 return mul((bess(n+1)/bess(1))**d for n,d in zip(q,lengths) if n)

@cache
def cols(q,j):
 o=[]
 for t in net.targets(q,F[j]):
  if max(t)>3 or weight(t)>18:continue
  value=net.element(q,F[j],t)
  assert value==net.element(t,F[j],q)
  if value:o.append((t,conv(value)))
 return o
def add(d,q,a): d[q]=d.get(q,0)+a
def act(d,faces=range(4)):
 o={}
 for q,x in d.items():
  for j in faces:
   for t,v in cols(q,j):add(o,t,x*v)
 return o
def dot(a,b):return sum(v*b.get(q,0) for q,v in a.items())
def odd():
 p=[]
 for mask in (11,13):
  q=VAC; sg=S(1)
  for j in range(4):
   if mask&(1<<j):
    t=tuple(a^b for a,b in zip(q,F[j]))
    assert net.element(q,F[j],t)!=0
    sg*=sign(net.element(q,F[j],t))
    q=t
  p.append(sg)
 return {O[0]:conv(p[0]/sqrt(2)),O[1]:conv(-p[1]/sqrt(2))}
def derivatives(u0,piv,skip):
 states=[u0]; square=[{0:u0}]; rates=[kval(piv)]
 for n in range(1,6):
  d={}
  for a in range(n):
   for k in range(n-a+1):
    if k>=n:continue
    j=n-a-k
    if j not in square[k]: square[k][j]=act(square[k][j-1])
    if a%2:continue
    factor=rates[a]*iv.mpf((-1)**j)/factorial(j)
    for q,v in square[k][j].items():add(d,q,v*factor)
  rates.append(-dot(u0,d) if n%2==0 else 0)
  nxt={q:v/(kval(q)-rates[0]) for q,v in d.items() if q not in skip}
  states.append(nxt);square.append({0:nxt})
 return states
def main():
 check_envelope()
 iv.dps=60
 va=derivatives({VAC:iv.mpf(1)},VAC,{VAC})
 od=derivatives(odd(),O[0],set(P))
 def coefficient(n,pair):
  c=iv.mpf(0)
  for k in range(n+1):
   a=va[k]
   for j in range(n-k+1):
    both=act(act(a,[pair[0]]),[pair[1]])
    c+=dot(od[n-k-j],both)*iv.mpf((-1)**j)/factorial(j)
    if j<n-k:a=act(a)
  return c
 R,b=iv.mpf(".02"),iv.mpf(".001")
 rho=4*R
 assert 1/(1-iv.mpf("8.25")*rho)<3
 alpha=iv.mpf("7.25")*rho/(1-rho)
 assert 1+(alpha/(1-alpha))**2 < 4
 assert 8/(1-rho)<18
 out=iv.mpf(0)
 for n in (1,3,5):
  a=coefficient(n,(0,2)); z=coefficient(n,(1,3))
  assert 0 in a+z
  c=a-z
  print(n,c,flush=True)
  out+=c*b**n
 tail=18*(b/R)**7/(1-(b/R)**2)
 print("truncated",out,"tail upper",tail)
 total=out+iv.mpf([-1,1])*tail
 print("full",total)
 assert iv.mpf("5.1023e-6")<total<iv.mpf("5.1306e-6")
 alpha_real=iv.mpf("7.25")*4*b/(1-4*b)
 norm_prod_bound=(1+(alpha_real/(1-alpha_real))**2)/(1-2*b)**2
 assert total/norm_prod_bound > iv.mpf("5.07e-6")
 assert total/(1-2*b)**2 < iv.mpf("5.16e-6")
if __name__=='__main__':main()
