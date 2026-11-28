"""Build the exact affine triple-threshold Macaulay pencil from pinned remainder."""
from pathlib import Path
import argparse
import hashlib
import json

import sympy as S

s,t,r,v=S.symbols('s t r v')
PIN='b61b6277291c76af945865d3840271bf32725cbc68521839441ee25c563d8d23'

def build(source):
    raw=Path(source).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    d=json.loads(raw)['remainder']
    pABC=[]
    for n in 'ABC':
        f=S.Poly.from_dict({tuple(i[:-1]):S.Rational(i[-1]) for i in d[n]},s,t,r,domain=S.QQ)
        g=S.Poly(f.as_expr().subs(r,v-2*t),s,v,t,domain=S.QQ).clear_denoms()[1].primitive()[1]
        pABC.append(g)
    degs=tuple(max(j+k for i,j,k in f.monoms()) for f in pABC)
    assert degs==(3,4,4)
    weights=tuple(max(i+3*j+2*k for i,j,k in f.monoms()) for f in pABC)
    assert weights==(9,10,11) and sum(d*w for d,w in zip((16,12,12),weights))-5*48==156

    # A and B have no roots at infinity when |s|<=6: the leading form
    # of B forces one of v,t zero, and A is nonzero on both axes.
    a,b,_=pABC
    def axis(f,j,k):
        return sum(c*s**i for (i,h,l),c in f.terms() if (h,l)==(j,k))
    assert axis(a,3,0)==11572665600000000
    assert axis(a,0,3)==230592040000000*(80*s-1001)
    assert [(j,k) for i,j,k in b.monoms() if j+k==4]==[(2,2)]
    assert axis(b,2,2)==-393379840000000000

    F=[S.Poly(g.as_expr().subs(v,v+t),s,v,t,domain=S.ZZ) for g in pABC]
    D=sum(degs)-2
    mm=[(i,j,D-i-j) for i in range(D+1) for j in range(D-i+1)]
    idx={u:i for i,u in enumerate(mm)}
    M=[{} for k in mm]; ex=[]
    for i,exps in enumerate(mm):
        choices=[a for a in range(3) if exps[a]>=degs[a]]
        assert choices
        a=choices[0]
        exps=tuple(k-(degs[a] if b==a else 0) for b,k in enumerate(exps))
        if len(choices)>1:
            ex.append(i)
        for (q,j,k),c in F[a].terms():
            col=idx[(exps[0]+j,exps[1]+k,exps[2]+degs[a]-j-k)]
            M[i].setdefault(col,{})[q]=int(c)
    assert (D,len(mm),len(ex))==(9,55,15)
    return pABC,D,mm,idx,M,ex

def det_mod(A,p):
    A=[row[:] for row in A]; z=1;n=len(A)
    for i in range(n):
        j=next((j for j in range(i,n) if A[j][i]),n)
        if j==n:
            return 0
        if j!=i:
            A[i],A[j]=A[j],A[i];z=-z
        u=A[i][i];z=(z*u)%p
        iv=pow(u,-1,p)
        for k in range(i+1,n):
            if A[k][i]:
                f=A[k][i]*iv%p
                for j in range(i+1,n):
                    A[k][j]=(A[k][j]-f*A[i][j])%p
    return z%p

def emit(source,output):
    _,_,_,_,M,ex=build(source)
    for p,check in ((1009,(416,758)),(1013,(922,947))):
        U=[[row.get(i,{}).get(0,0)%p for i in range(len(M))] for row in M]
        assert (det_mod(U,p),det_mod([[U[i][j] for j in ex] for i in ex],p))==check
    with open(output,'x') as out:
        print(len(M),len(ex),file=out)
        print(*ex,file=out)
        for row in M:
            print(len(row),file=out)
            for col,pol in sorted(row.items()):
                print(col,max(pol)+1,*[pol.get(i,0) for i in range(max(pol)+1)],file=out)

if __name__=='__main__':
    a=argparse.ArgumentParser();a.add_argument('source');a.add_argument('output');u=a.parse_args()
    emit(u.source,u.output)
