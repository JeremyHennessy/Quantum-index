"""Exact PVP on the fixed-spacing, open 4-by-2 energy-15 band."""
from collections import defaultdict
from fractions import Fraction as Q
from itertools import product
from pathlib import Path
import sys
import sympy as S

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "widened-hamiltonian-band"))
from check import enumerate_band, facemask, mesh

def prep():
    rows,faces=enumerate_band(4,2)
    _,edges,_=mesh(4,2)
    d={facemask(q,faces):dim for c,q,dim in rows if c==30}
    return d,faces,edges
D,F,E=prep()
def support(mask):
    out=0
    for i,f in enumerate(F):
        if mask>>i&1: out^=f
    return [i for i in range(len(E)) if out>>i&1]
def pairings(xs):
    if not xs: yield [];return
    a,*xs=xs
    for i,b in enumerate(xs):
        for sub in pairings(xs[:i]+xs[i+1:]):yield [(a,b)]+sub

def all_circuits(mask):
    chosen=support(mask)
    at=defaultdict(list)
    for i in chosen:
        for v in E[i]:at[v].append(i)
    vertices=sorted(at)
    for ps in product(*(tuple(pairings(at[v])) for v in vertices)):
        route={(v,a):b for v,pairs in zip(vertices,ps) for pair in pairs for a,b in (pair,pair[::-1])}
        used=set();loops=[]
        for i in chosen:
            if i in used:continue
            start=(i,E[i][0]);j,v=start;path=[]
            while True:
                assert j not in used;used.add(j)
                a,b=E[j]
                w=b if v==a else a
                path.append((j,v==a))
                j,v=route[w,j],w
                if (j,v)==start:break
            loops.append(tuple(path))
        yield tuple(loops)

def integrate(*networks):
    # Traversal vertex indices. Haar contraction is exactly pairwise as label parity demands.
    edge_at=defaultdict(list); num=0
    for net in networks:
        for loop in net:
            n=len(loop)
            for k,(i,fwd) in enumerate(loop):
                a,b=num+k,num+(k+1)%n
                edge_at[i].append((a,b,fwd))
            num+=n
    adj=[[] for _ in range(num)];sign=[0]*num
    def add(a,b,bit):
        adj[a].append((b,bit));adj[b].append((a,bit))
    for ends in edge_at.values():
        assert len(ends)==2, ends
        (a,b,d),(c,e,f)=ends
        if d!=f: add(a,e,0);add(b,c,0)
        else: add(a,c,1);add(b,e,1);sign[a]^=1;sign[b]^=1
    visited={};result=1
    for i in range(num):
        if i in visited:continue
        visited[i]=0;pending=[i];par=0;neg=0
        while pending:
            a=pending.pop();par^=sign[a];neg^=sign[a]&visited[a]
            for b,t in adj[a]:
                val=visited[a]^t
                if b in visited:
                    if visited[b]!=val:return Q(0)
                else:visited[b]=val;pending.append(b)
        if par:return Q(0)
        result*=2 if neg==0 else -2
    return Q(result,2**len(edge_at))

def basis():
    B={}
    for mask in D:
        choices=list(all_circuits(mask));picked=[]
        for item in choices:
            trial=picked+[item]
            g=S.Matrix([[integrate(a,b) for b in trial] for a in trial])
            if g.det():picked=trial
        assert len(picked)==D[mask]
        B[mask]=picked
    return B
B=basis(); FF={i:next(all_circuits(1<<i)) for i in range(8)}

def components():
    left=set(D);res=[]
    while left:
        x=min(left);front={x};full={x}
        while front:
            front={y^(1<<i) for y in front for i in range(8)}&left-full
            full|=front
        left-=full;res.append(full)
    return sorted(res,key=lambda x:(-sum(D[y] for y in x),min(x)))

def mat(masks):
    entries=[(m,a) for m in sorted(masks) for a in B[m]]
    G=S.Matrix([[integrate(a,b) if m==n else 0 for n,b in entries] for m,a in entries])
    A=S.Matrix([[integrate(a,b,FF[(m^n).bit_length()-1])/2 if (m^n).bit_count()==1 else 0 for n,b in entries] for m,a in entries])
    return entries,G,A

def refl(t,kind):
    def v(x):
        r,c=x;return (r,4-c) if kind=='X' else (2-r,c)
    new=[]
    for loop in t:
        nloop=[]
        for i,fwd in loop:
            a,b=E[i]
            if not fwd:a,b=b,a
            a,b=v(a),v(b)
            j=E.index(tuple(sorted([a,b])))
            nloop.append((j,a<b))
        new.append(tuple(nloop))
    return tuple(new)

def reflmask(m,k):
    q=0
    for i in range(8):
        if m>>i&1:
            r,c=divmod(i,4)
            j=4*r+3-c if k=='X' else 4*(1-r)+c
            q|=1<<j
    return q

def rmat(entries,G,k):
    C=S.Matrix([[integrate(a,refl(b,k)) if m==reflmask(n,k) else 0 for n,b in entries] for m,a in entries])
    R=G.inv()*C
    assert R**2==S.eye(len(entries)) and R.T*G*R==G
    return R

def restriction(A,R,sign):
    N=S.Matrix.hstack(*(R-sign*S.eye(R.rows)).nullspace())
    J=(N.T*N).inv()*N.T
    Z=J*A*N
    assert N*Z==A*N
    return Z

def main():
    comps=components()
    assert [sum(D[m] for m in c) for c in comps]==[25,25,3,3]+[1]*8
    for comp in comps:
        names=[''.join(str(i+1) for i in range(8) if m>>i&1) for m in sorted(comp)]
        ent,G,A=mat(comp);T=G.inv()*A
        assert G==G.T and A==A.T and T.T*G==G*T
        x=S.Symbol("x")
        if len(ent)==3:
            assert T==S.Matrix([[0,0,S.Rational(1,8)],[0,0,S.Rational(1,8)],[S.Rational(1,8),S.Rational(1,8),0]])
        if len(ent)==25:
            expected=x**9*(64*x**2-9)*(256*x**4-100*x**2+1)*(512*x**4-136*x**2+5)*(4096*x**6-3136*x**4+328*x**2-3)/2**35
            assert T.charpoly(x).as_expr()==S.expand(expected)
        print(len(comp),len(ent),'/'.join(names),S.factor(T.charpoly().as_expr()))
        if len(ent)==25:
            Y=rmat(ent,G,'Y')
            assert T*Y==Y*T
            for sign in (-1,1):
                U=restriction(T,Y,sign)
                print('  Y',sign,U.rows,S.factor(U.charpoly().as_expr()))
    entries,G,A=mat(D);T=G.inv()*A
    X,Y=[rmat(entries,G,k) for k in 'XY']
    assert X*Y==Y*X and X*T==T*X and Y*T==T*Y
    expect=[(15,7),(16,8),(16,6),(17,7)]
    for (x,y),(dim,nullity) in zip(product((-1,1),repeat=2),expect):
        coef=(S.eye(len(entries))+x*X)*(S.eye(len(entries))+y*Y)
        N=S.Matrix.hstack(*coef.columnspace());J=(N.T*N).inv()*N.T;U=J*T*N
        assert N*U==T*N and (N.cols,N.cols-U.rank())==(dim,nullity)
        print('XY',x,y,N.cols,'null',N.cols-U.rank(),'char',S.factor(U.charpoly().as_expr()))
    print('F parity first derivative allowed',[[m for m in sorted(D) if (p^m).bit_count()==1] for p in [5,10]])
if __name__=='__main__':main()
