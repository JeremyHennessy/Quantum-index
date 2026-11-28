"""Certify normalized Macaulay kernels at algebraic s with integer outward intervals."""
import argparse
import hashlib
import json
from pathlib import Path
from itertools import permutations
import sympy as S

from triple_macaulay import build,s,t,v

R=S.Rational
prec=131
K=10**prec
zero=(0,0)
def integer(n): return (n*K,n*K)
def outward(a,b):
 return (int(S.floor(a*K)),int(S.ceiling(b*K)))
def add(a,b):return (a[0]+b[0],a[1]+b[1])
def neg(a):return (-a[1],-a[0])
def sub(a,b):return add(a,neg(b))
def mul(a,b):
 v=[x*y for x in a for y in b]
 return (min(v)//K,-((-max(v))//K))
def div(a,b):
 assert b[0]*b[1]>0
 vv=[(x*K,y) for x in a for y in b]
 return min(x//y for x,y in vv),max(-((-x)//y) for x,y in vv)
def prod(*a):
 z=integer(1)
 for x in a:z=mul(z,x)
 return z
def sign(a):return 1 if a[0]>0 else -1 if a[1]<0 else 0
def magnitude(a):return min(abs(x) for x in a) if sign(a) else 0
def sumiv(a):
 z=zero
 for x in a:z=add(z,x)
 return z
def peval(poly,x):
 out=zero
 if poly:
  for i in range(max(poly),-1,-1):out=add(mul(out,x),integer(poly.get(i,0)))
 return out
def eval_poly(poly,iv):
 maxes=poly.degree_list()
 powers=[]
 for n,z in zip(maxes,iv):
  pp=[integer(1)]
  for _ in range(n):pp.append(mul(pp[-1],z))
  powers.append(pp)
 return sumiv(prod(integer(int(c)),*(pp[a] for pp,a in zip(powers,exp))) for exp,c in poly.terms())

def solve_norm(x,D,mm,idx,M):
 cols=[i for i in range(len(mm)) if i!=idx[(0,0,D)]]+[idx[(0,0,D)]]
 A=[[peval(row.get(j,{}),x) for j in cols] for row in M]
 N=len(cols)-1
 for k in range(N):
  h=max(range(k,N+1),key=lambda h:magnitude(A[h][k]))
  assert magnitude(A[h][k])>0,f"insufficient pivot interval at {k}"
  A[h],A[k]=A[k],A[h]
  for j in range(k+1,N+1):
   if A[j][k]==zero:continue
   a=div(A[j][k],A[k][k])
   for z in range(k+1,N+1):A[j][z]=sub(A[j][z],mul(a,A[k][z]))
   A[j][k]=zero
 X=[zero]*N
 for j in range(N-1,-1,-1):
  X[j]=div(neg(add(A[j][N],sumiv(mul(A[j][k],X[k]) for k in range(j+1,N)))),A[j][j])
 t=X[cols.index(idx[(0,1,D-1)])]
 v=add(X[cols.index(idx[(1,0,D-1)])],t) # undo shear
 return v,t

def execute(remainder,source,output):
 pABC,D,mm,idx,M,_=build(remainder)
 raw=Path(source).read_bytes()
 assert hashlib.sha256(raw).hexdigest()=='6e501519b0268fcfa11eb9243e891416f85fc95c2d4dc6215d03466e0b615671'
 data=json.loads(raw)
 pol=S.Poly.from_list(list(map(int,data['rational_polynomial'])),s,domain=S.ZZ)
 ivs=data['isolating_intervals']
 r=v-2*t; X=S.symbols('X')
 D_X=S.discriminant(X**3-s*X**2+t*X-r,X)
 flat=4000*v-4300*s*s+1380*s+19573
 phys=[D_X,s+6,t+4*s+12,r+2*t+4*s+8,6-s,t-4*s+12,8-4*s+2*t-r,flat]
 phys=[S.Poly(f,s,v,t,domain=S.ZZ) for f in phys]
 Jac=[[a.diff(u) for u in (s,v,t)] for a in pABC]
 def short(L):
  f=10**10
  return [str(R(L[0]*f//K,f)),str(R(-((-L[1]*f)//K),f))]
 ans=[]
 for a,b,mul0 in ivs:
  assert mul0==1
  # Original Sturm brackets each isolate one simple root. Refine with
  # exact signs on a fixed decimal grid, never using floating roots.
  lo,hi=outward(R(a),R(b))
  cs=list(map(int,pol.all_coeffs()))
  scaled=[c*K**j for j,c in enumerate(cs)]
  def at(n):
   z=0
   for c in scaled: z=z*n+c
   return (z>0)-(z<0)
  left,right=at(lo),at(hi)
  assert left*right==-1
  while hi-lo>4:
   m=(lo+hi)//2; z=at(m)
   if z==0:
    lo=hi=m
    break
   if z==left: lo=m
   else: hi=m
  si=(lo,hi)
  vi,ti=solve_norm(si,D,mm,idx,M)
  iv=(si,vi,ti)
  signs=[sign(eval_poly(f,iv)) for f in phys]
  assert all(signs)
  mat=[[eval_poly(f,iv) for f in row] for row in Jac]
  jac=sign(sumiv(prod(*(mat[i][j] for i,j in enumerate(k)),
                     integer((-1)**sum(k[i]>k[j] for i in range(3) for j in range(i+1,3))))
                 for k in permutations(range(3))))
  assert jac
  box=[short(z) for z in iv]
  assert all(R(bx[1])-R(bx[0])<=R(1,10**9) for bx in box)
  ans.append({"box_stretched_svt":box,"physical_signs_with_flat_last":signs,
              "triple_Jacobian_svt_sign":jac,"strict_physical_off_flat":signs[:7]==[1]*7})
  print('lift',*[float((R(u)+R(v))/2) for u,v in box],signs,jac,flush=True)
 out=(json.dumps({"schema":"distinct-interior-triple-kernel-lifts-v1","projection_sha256":hashlib.sha256(raw).hexdigest(),
                  "records":ans},sort_keys=True,separators=(',',':'))+'\n').encode()
 with Path(output).open('xb') as f:f.write(out)
 print(len(out),hashlib.sha256(out).hexdigest(),flush=True)

if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('remainder');a.add_argument('source');a.add_argument('output'); args=a.parse_args()
 execute(args.remainder,args.source,args.output)
