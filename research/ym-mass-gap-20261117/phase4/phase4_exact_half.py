import numpy as np
from itertools import product
from sympy import Matrix, Rational

def vertices24_doubled():
 p=[]
 for axis in range(4):
  for sign in (-2,2):
   v=[0]*4;v[axis]=sign;p.append(tuple(v))
 p.extend(product((-1,1),repeat=4))
 return p

def qm(a,b):
 w,x,y,z=a;v,i,j,k=b
 return (w*v-x*i-y*j-z*k,w*i+x*v+y*k-z*j,w*j-x*k+y*v+z*i,w*k+x*j-y*i+z*v)

def f4(bits,quats):
 num=1;den=1;idx=0
 while idx<3:
  if not bits[idx]:idx+=1;continue
  prod=(1,0,0,0);length=0
  while idx<3 and bits[idx]:
   prod=qm(prod,quats[idx]);idx+=1;length+=1
  num*=prod[0];den*=2**(length-1)
 assert (4*num)%den==0
 return 4*num//den

def compute():
 P=vertices24_doubled();bits=list(product((0,1),repeat=3))
 X=np.empty((24**3,8),dtype=np.int64);W=np.empty(24**3,dtype=np.int64)
 pos=0
 for q,h,k in product(P,repeat=3):
  Q=[q,h,k];X[pos]=[f4(b,Q) for b in bits];W[pos]=q[0]+h[0]+k[0];pos+=1
 N=24**3*16
 G=X.T@X;M=X.T@(X*W[:,None]);M2=X.T@(X*(W*W)[:,None]);
 Gx=Matrix(8,8,lambda i,j:Rational(int(G[i,j]),N));
 Wx=Matrix(8,8,lambda i,j:Rational(int(M[i,j]),N));
 W2x=Matrix(8,8,lambda i,j:Rational(int(M2[i,j]),N));
 K=W2x-Wx*Wx
 return Gx,Wx,K
if __name__=='__main__':compute()
