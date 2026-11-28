"""Exact separated reference root and cofactor certificate; no floating point."""
from fractions import Fraction as Q
from math import comb
import sympy as S
from separated_channel import at_endpoint, build, span

def pair_times(a,b):
    return a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]

def build_reference():
    p,T6,B6=build(4);h,T9,B9=build(6)
    assert not T6 and (len(p),len(h))==(3,22)
    N=S.Matrix.hstack(*(v*S.ilcm(*[S.denom(x) for x in v])
                         for v in at_endpoint(T9,22).nullspace()))
    G=N.T*N
    r=next(i for i,a in enumerate(h) if span(a)==(0,1,2))
    col=[i for i in range(N.cols) if N[r,i]]
    assert len(col)==1 and N[:,col[0]]==S.eye(22)[:,r] and G[:,col[0]]==S.eye(14)[:,col[0]]
    drop=next(i for i,a in enumerate(p) if span(a)==(0,1,1))*14+col[0]
    terms=[[] for _ in range(42*42)]
    for (j,i,z),v in B6.items():
        for a in range(14):
            for b in range(14):
                if G[a,b]:terms[(14*j+a)*42+14*i+b].append((z,int(6720*v*G[a,b])))
        assert (6720*v).denominator==1 and all(abs(t)<=1 for t in z)
    for (j,i,z),v in B9.items():
        assert (6720*v).denominator==1 and all(abs(t)<=1 for t in z)
        for a in range(14):
            for b in range(14):
                if N[j,a] and N[i,b]:
                    for r in range(3):
                        terms[(14*r+a)*42+14*r+b].append((tuple(-t for t in z),int(6720*v*N[j,a]*N[i,b])))
    for r in range(3):
        for a in range(14):
            for b in range(14):
                if G[a,b]:terms[(14*r+a)*42+14*r+b].append(((0,0,0),260*int(G[a,b])))
    return terms,drop

def integer_matrix(terms,x,d=1):
    # t=x/d. Multiply 6720-scaled symbol by 65*145*(d²+x²).
    def phase(x,d,s):
        return (d*d+x*x,0) if not s else (d*d-x*x,2*x*d*s)
    phases={}
    for i in (-1,0,1):
        for j in (-1,0,1):
            for k in (-1,0,1):
                phases[i,j,k]=pair_times(pair_times(phase(8,1,i),phase(12,1,j)),phase(x,d,k))
    out=[]
    for k in range(42):
        row=[]
        for j in range(42):
            t=terms[k*42+j]
            row.append((sum(v*phases[z][0] for z,v in t),sum(v*phases[z][1] for z,v in t)))
        out.append(row)
    return out

def hbareiss(a):
    a=[r.copy() for r in a]
    n=len(a)
    assert all(x[0]==y[0] and x[1]==-y[1] for i in range(n)
               for j,(x,y) in enumerate(zip(a[i],(a[k][i] for k in range(n)))))
    prev=1; sig=[0,0]
    for k in range(n):
        p,imag=a[k][k]
        assert p and not imag
        sig[p*prev<0]+=1
        for i in range(k+1,n):
            u,v=a[k][i]
            for j in range(i,n):
                x,y=a[i][j];s,t=a[k][j]
                xr,r=divmod(p*x-u*s-v*t,prev)
                yr,q=divmod(p*y-u*t+v*s,prev)
                assert not(r or q)
                a[i][j]=xr,yr
        prev=p
    return prev,tuple(sig)

def exact_poly(ys):
    ans=[Q(0)]*len(ys);basis=[Q(1)]
    for i in range(len(ys)):
        for j,c in enumerate(basis):ans[j]+=ys[0]*c
        ys=[b-a for a,b in zip(ys,ys[1:])]
        nex=[Q(0)]*(len(basis)+1)
        for j,c in enumerate(basis):
            nex[j]-=c*i/(i+1)
            nex[j+1]+=c/(i+1)
        basis=nex
    assert all(x.denominator==1 for x in ans)
    return list(map(int,ans))

def signs(p):
    d,a,b=10000000,64457770,64457771
    n=len(p)-1
    out=[]
    for k in range(n+1):
        val=sum(c*d**(n-j)*sum(comb(j,l)*a**(j-l)*b**l*comb(n-j,k-l)
                         for l in range(max(0,k-(n-j)),min(j,k)+1))
                for j,c in enumerate(p) if c)
        out.append((val>0)-(val<0))
    return out

def evaluate(p,x):
    v=0
    for c in reversed(p):v=v*x+c
    return v

def minor(m,i):return [r[:i]+r[i+1:] for j,r in enumerate(m) if j!=i]

def verify():
    terms,i=build_reference()
    f=[];h=[]
    for t in range(86):
        a=integer_matrix(terms,t)
        f.append(hbareiss(a)[0])
        if t<=83 or t==85:h.append(hbareiss(minor(a,i))[0])
    p=exact_poly(f[:85]);q=exact_poly(h[:83])
    assert evaluate(p,85)==f[-1] and evaluate(q,83)==h[-2] and evaluate(q,85)==h[-1]
    assert p[-1] and q[-1] and all(not x for x in p[1::2]+q[1::2])
    assert sum(bool(x) for x in p)==43 and sum(bool(x) for x in q)==42
    assert signs(p)==[-1]*49+[1]*36
    assert signs(q)==[1]*83
    for t,inertia in [(64457770,(41,1)),(64457771,(42,0))]:
        a=integer_matrix(terms,t,10000000)
        assert hbareiss(a)[1]==inertia
    print("regular sheet: determinant degrees 84/82, exact signs 49− 36+ / 83+; endpoint inertias 41/1, 42/0")
if __name__=="__main__":verify()
