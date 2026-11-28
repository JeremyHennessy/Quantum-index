"""Exact SU(2) one-plaquette vacuum creator test through order six."""
import sympy as S

N=7
H0=S.diag(*[2*k*(k+2) for k in range(N)])
W=S.Matrix(N,N,lambda i,j:-S.Rational(1,2) if abs(i-j)==1 else 0)
vac=S.diag(1,*([0]*(N-1)))
Q=S.eye(N)-vac

def gamma(A):
 return S.Matrix(N,N,lambda i,j:A[i,j]/(H0[i,i]-H0[j,j]) if i!=j else 0)

def comm(a,b): return a*b-b*a

def normal_form(SS,degree):
 ad=[H0,W]+[S.zeros(N) for _ in range(degree-1)]
 out=ad[:]
 for k in range(1,degree+1):
  work=[S.zeros(N) for _ in range(degree+1)]
  for j in range(1,degree+1):
   for n,s in enumerate(SS,start=1):
    if n<=j: work[j]+=comm(s,ad[j-n])/S.Integer(k)
  ad=work
  out=[u+v for u,v in zip(out,ad)]
 return out

SS=[]
for n in range(1,5):
 An=normal_form(SS,n)[n]
 SS.append(gamma(An))
BC=normal_form(SS,6)
assert [BC[n][0,0] for n in range(1,5)]==[0,-S.Rational(1,24),0,S.Rational(5,27648)]
assert all(comm(H0,BC[n]).is_zero_matrix for n in range(1,5))
R5,R6=BC[5:7]
A5=Q*R5*vac+vac*R5*Q
S5=gamma(A5)
assert not A5.is_zero_matrix and S5.T==-S5 and comm(S5,H0)==-A5
BC_fix=normal_form(SS+[S5],6)
assert BC_fix[:5]==BC[:5]
assert BC_fix[5]==R5-A5 and BC_fix[5][0,0]==0
assert BC_fix[5]*vac==vac*BC_fix[5]==S.zeros(N)
def vacuum(column):return {i:column[i,0] for i in range(1,N) if column[i,0]}
print("canonical all-charge order-5 vacuum column:",vacuum(R5))
print("vacuum-adapted order-5 generator column:",vacuum(S5))
print("new order-6 vacuum column:",vacuum(BC_fix[6]))
assert vacuum(BC_fix[6])
