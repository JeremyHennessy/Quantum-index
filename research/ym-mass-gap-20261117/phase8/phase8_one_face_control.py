"""Independent exactly complete one-face beta^2 coefficient, j<=1 reachable."""
from fractions import Fraction as F
D=(F(0),F(3),F(8))
W=((0,1,0),(1,0,1),(0,1,0))
s=F(1)
def dot(a,b):return sum(x*y for x,y in zip(a,b))
def mul(a):return [sum(W[i][j]*a[j] for j in range(3)) for i in range(3)]
def add(a,b):return [x+y for x,y in zip(a,b)]
def scale(a,c):return [x*c for x in a]
def compute():
 zero=lambda:[F(0)]*3
 V=[zero() for _ in range(3)]
 V[0][0]=1
 E=[F(0)]*3
 for n in range(1,3):
    q=mul(V[n-1]);E[n]=-q[0]
    for m in range(1,n+1):q=add(q,scale(V[n-m],E[m]))
    V[n]=[F(0) if i==0 else q[i]/D[i] for i in range(3)]
 norm=[sum(dot(V[i],V[n-i]) for i in range(n+1)) for n in range(3)]
 on=[sum(dot(V[i],mul(V[n-i])) for i in range(n+1)) for n in range(3)]
 mu=[F(0)]*3
 for n in range(3):mu[n]=on[n]-sum(norm[m]*mu[n-m] for m in range(1,n+1))
 P=[]
 for n in range(3):
    v=mul(V[n])
    for m in range(n+1):v=add(v,scale(V[n-m],-mu[m]))
    P.append(v)
 X=[zero() for _ in range(3)]
 for n in range(3):
    rhs=P[n]
    if n:rhs=add(rhs,mul(X[n-1]))
    for m in range(1,n+1):rhs=add(rhs,scale(X[n-m],E[m]))
    X[n]=[rhs[i]/(D[i]+s) for i in range(3)]
 G=[]
 for n in range(3):
    num=sum(dot(P[i],X[n-i]) for i in range(n+1))
    G.append(num-sum(norm[m]*G[n-m] for m in range(1,n+1)))
 return G
if __name__=='__main__':
 result=compute();assert result==[F(1,4),F(0),-F(61,648)]
 print('exact independent one-face physical response:',result)
