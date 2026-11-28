"""Exact controls of the all-charge Lie coefficients and canonical quartic gauge."""
import sympy as S

def comm(a,b):return a*b-b*a

def coeff(H,W):
    n=H.rows
    e=list(H.diagonal())
    def diag(A):return S.Matrix(n,n,lambda i,j:A[i,j] if e[i]==e[j] else 0)
    def gamma(A):return S.Matrix(n,n,lambda i,j:A[i,j]/(e[i]-e[j]) if e[i]!=e[j] else 0)
    A=[None,W]
    SS=[None]; C=[None]; D=[None]
    def step(j):
        D.append(diag(A[j]));SS.append(gamma(A[j]));C.append(comm(SS[j],H))
        assert C[j]==D[j]-A[j] and SS[j].T==-SS[j]
    step(1); s1=SS[1];c1=C[1]
    A.append(comm(s1,W)+comm(s1,c1)/2)
    step(2);s2=SS[2];c2=C[2]
    A.append(comm(s2,W)+(comm(s1,c2)+comm(s2,c1)+comm(s1,comm(s1,W)))/2
             +comm(s1,comm(s1,c1))/6)
    step(3);s3=SS[3];c3=C[3]
    A.append(comm(s3,W)+(comm(s1,c3)+comm(s2,c2)+comm(s3,c1)
                +comm(s1,comm(s2,W))+comm(s2,comm(s1,W)))/2
             +(comm(s1,comm(s1,c2))+comm(s1,comm(s2,c1))
                +comm(s2,comm(s1,c1))+comm(s1,comm(s1,comm(s1,W))))/6
             +comm(s1,comm(s1,comm(s1,c1)))/24)
    step(4)
    # Independent convolution of all power-series commutators.
    ad=[H,W,S.zeros(n),S.zeros(n),S.zeros(n)]
    Acheck=ad[:]
    for k in range(1,5):
        nxt=[S.zeros(n) for _ in range(5)]
        for j in range(1,5):
            for u in range(j+1):nxt[j]+=comm(SS[j-u],ad[u])/S.Integer(k) if j>u else S.zeros(n)
        ad=nxt
        Acheck=[a+b for a,b in zip(Acheck,ad)]
    assert Acheck[1:]==D[1:]
    assert all(d.T==d and comm(H,d).is_zero_matrix for d in D[1:])
    return SS,D

def canonical(H,W,E,ii):
    jj=[k for k in range(H.rows) if k not in ii]
    R=(E*S.eye(len(jj))-H.extract(jj,jj)).inv()
    Wpq=W.extract(ii,jj); Wqp=W.extract(jj,ii); Wpp=W.extract(ii,ii);Wqq=W.extract(jj,jj)
    X1=R*Wqp
    X2=R*(Wqq*X1-X1*Wpp)
    X3=R*(Wqq*X2-X2*Wpp-X1*Wpq*X1)
    U2=X1.T*X1
    U3=X1.T*X2+X2.T*X1
    raw=[None,Wpp,Wpq*X1,Wpq*X2,Wpq*X3]
    return [None,raw[1],raw[2],raw[3]+comm(U2,raw[1])/2,
            raw[4]+comm(U2,raw[2])/2+comm(U3,raw[1])/2]

H1=S.diag(0,1,2);H2=S.diag(0,1)
W1=S.Matrix([[0,1,1],[1,1,1],[1,1,0]])
W2=S.Matrix([[0,1],[1,0]])
def plus(A,B):
    return S.kronecker_product(A,S.eye(B.rows))+S.kronecker_product(S.eye(A.rows),B)
H=plus(H1,H2); W=plus(W1,W2)
SS,D=coeff(H,W)
_,D1=coeff(H1,W1);_,D2=coeff(H2,W2)
assert all(D[j]==plus(D1[j],D2[j]) for j in range(1,5))
ii=[1,2];canon=canonical(H,W,1,ii)
Dc=[None,*[d.extract(ii,ii) for d in D[1:]]]
assert canon[1:4]==Dc[1:4]
A3=-(SS[1]**3).extract(ii,ii)/6
delta=canon[4]-Dc[4]
assert delta==comm(A3,Dc[1]) and not delta.is_zero_matrix
N=S.diag(1,0)
assert N*Dc[1]==Dc[1]*N==S.zeros(2)
assert N*delta*N==S.zeros(2)
assert delta==S.Matrix([[0,S.Rational(1,4)],[S.Rational(1,4),0]])
print("exact disconnected full canonical quartic survives:",delta)
print("all-charge coefficients additive to order 4; canonical null compression agrees")

# Actual isolated SU(2) Wilson plaquette: one fundamental half-trace
# multiplies χ_j into (χ_{j+1/2}+χ_{j-1/2})/2. n=2j gives four-edge
# energy 2 n(n+2), so only n=0,1,2 can return to vacuum in ≤4 steps.
n=3
Hpl=S.diag(*[2*k*(k+2) for k in range(n)])
Wpl=S.Matrix(n,n,lambda i,j:-S.Rational(1,2) if abs(i-j)==1 else 0)
_,Dp=coeff(Hpl,Wpl)
assert [d[0,0] for d in Dp[1:]]==[0,-S.Rational(1,24),0,S.Rational(5,27648)]
_,Dpp=coeff(plus(Hpl,Hpl),plus(Wpl,Wpl))
assert [d[0,0] for d in Dpp[1:]]==[0,-S.Rational(1,12),0,S.Rational(5,13824)]
print("exact isolated Wilson plaquette vacuum quartic 5/27648; disjoint pair doubles")

# Independent slow-fold check with genuine g^2 and g^3 perturbations:
# compare the g^3 coefficient of the exact isolated eigenvalue.
g=S.symbols("g",real=True)
A=g*2+g*g*5+g**3*7
D=3+g*11+g*g*13+g**3*17
B=g*19+g*g*23+g**3*29
slow=(A+D-S.sqrt((D-A)**2+4*B*B))/2
ex=S.series(slow,g,0,4).removeO().coeff(g,3)
R=-S.Rational(1,3)
assert ex==7+2*23*R*19+19**2*R**2*(11-2)
print("exact independent slow quartic control (folded g^3 coefficient):",ex)
