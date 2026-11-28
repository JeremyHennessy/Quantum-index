"""Independent reflection-reduced exact folded cubic calculation."""
from collections import Counter, defaultdict
from fractions import Fraction as Q
from functools import cache
from itertools import product
from math import prod
import sympy as S

from cubic_mixing import adj, anchor, basis, components, connected, ct, gsign, loop, orbit, shape, touching
from momentum_probe import COEFFS
from second_order import spectral_gram
from separated_channel import add, sub, e
from check import invdim

O=(0,0,0)
REF=tuple(product((-1,1),repeat=3))
def ordered(A):return tuple(sorted(A))
def mul(v,s):return tuple(i*j for i,j in zip(v,s))
def reflection(A,s):
    return anchor(frozenset(e(mul(a,s),mul(b,s)) for a,b in A))
@cache
def key(A):
    return min((reflection(A,s)[0] for s in REF),key=ordered)

def transform(net,sgn=(1,1,1),z=O):
    out=[]
    for path in net:
        n=[]
        for (a,b),fw in path:
            if not fw:a,b=b,a
            u,v=add(mul(a,sgn),z),add(mul(b,sgn),z)
            n.append((e(u,v),u<v))
        out.append(tuple(n))
    return tuple(out)

@cache
def gram(n,m):
    return spectral_gram((n,),(m,)).get(30,Q(0))

def full_dimension(A):
    deg=Counter(v for edge in A for v in edge)
    return prod(invdim([1]*n) for n in deg.values())

@cache
def adj_returns(A):
    pairs={tuple(sorted((p,r),key=ordered)) for p in touching(A)
           for r in touching(p) if p!=r}
    out=[]
    for p,r in sorted(pairs,key=lambda pr:tuple(map(ordered,pr))):
        dst=A^p^r
        if len(dst)==10:
            C,z=anchor(dst)
            out.append((C,z,p,r))
    return out

def examine():
    b={}
    for m,c in COEFFS:
        A,z=anchor(shape(m))
        assert A not in b
        b[A]=[(Q(c),loop(A))]
    for A in b:
        assert all(reflection(A,s)[0] in b and b[reflection(A,s)[0]][0][0]==b[A][0][0] for s in REF)
    returns=[item for a in b for item in adj_returns(a)]
    out={a for a in b}|{dst for dst,_,_,_ in returns}
    assert len(returns)==24 and len(out)==21
    print('quadratic returns',len(returns),len(out))
    comps=[]
    while out:
        a=min(out,key=ordered)
        labels=set(orbit(a))
        comps.append(labels)
        out-=labels
    comps.sort(key=len)
    assert [len(C) for C in comps]==[21,296,892]
    for j,C in enumerate(comps):
        assert {reflection(A,s)[0] for A in C for s in REF}==C
        hist=Counter()
        for A in C:hist[gsign(A)]+=full_dimension(A)
        assert (hist[1],hist[-1])==[(9,16),(116,196),(412,600)][j]
        print('block',len(C),hist)
    return b,comps


def invariant_at(A):
    kept=[]
    for raw in basis(A):
        terms=defaultdict(list)
        for s in REF:
            B,z=reflection(A,s)
            terms[B].append(transform(raw,s,sub(O,z)))
        candidate=kept+[(raw,dict(terms))]
        G=S.Matrix([[8*sum((gram(c,v) for v in D[A]),Q(0))
                    for _,D in candidate] for c,_ in candidate])
        if G.det():kept=candidate
    return kept

def invariant_block(component):
    ev,od=[],[]
    for A in sorted({key(x) for x in component},key=ordered):
        v=ev if gsign(A)==1 else od
        v.extend((A,c,D) for c,D in invariant_at(A))
    def metric(states):
        return S.Matrix([[8*sum((gram(a,v) for v in U[A]),Q(0)) if A==B else 0
                          for B,_,U in states] for A,a,_ in states])
    Ge,Go=metric(ev),metric(od)
    assert Ge==Ge.T and Go==Go.T
    d=defaultdict(list)
    for j,(A,_,D) in enumerate(od):
        for C in D:d[C].append((j,D[C]))
    C=S.zeros(len(ev),len(od))
    for i,(A,n,_) in enumerate(ev):
        for dst,z,p in adj(A):
            for j,rows in d[dst]:
                for v0 in rows:
                    v=transform(v0,z=z)
                    C[i,j]+=4*spectral_gram((v,),(n,loop(p))).get(30,Q(0))
    print("reduced",len(ev),len(od),C.rank(),flush=True)
    return ev,od,Ge,Go,C


def unpack(states,coords):
    out=defaultdict(list)
    for (_,_,terms),c in zip(states,coords):
        if c:
            for A,ns in terms.items():out[A].extend((Q(c),n) for n in ns)
    return dict(out)

def overlaps(states):
    out=defaultdict(list)
    for i,(_,_,terms) in enumerate(states):
        for A,ns in terms.items():out[A].append((i,ns))
    return out

def vector_coords(src,states,G):
    target=overlaps(states)
    v=S.zeros(len(states),1)
    for A,ns in src.items():
        for i,ms in target[A]:
            v[i]+=sum((c*gram(n,m) for c,n in ns for m in ms),Q(0))
    return G.inv()*v

def covector_b2(src,states):
    targets=overlaps(states)
    v=S.zeros(len(states),1)
    def form(n,p,m,r):
        data=spectral_gram((m,loop(r)),(n,loop(p)))
        return sum((w*Q(1,2*(30-e)) for e,w in data.items() if e!=30),Q(0))
    for A,ns in src.items():
        J=touching(A)
        for i,ms in targets[A]:
            for c,n in ns:
                for m in ms:
                    v[i]+=c*(sum((form(n,p,m,p) for p in J),Q(0))+len(J)*gram(n,m)/24)
        for dst,z,p,r in adj_returns(A):
            for i,ms in targets[dst]:
                for c,n in ns:
                    for m0 in ms:
                        m=transform(m0,z=z)
                        v[i]+=c*(form(n,p,m,r)+form(n,r,m,p))
    return v

def cubic_form(b,d):
    total=Q(0)
    n=0
    for A,src in b.items():
        for dst,z,triple in connected(A,set(d)):
            n+=1
            for c,a in src:
                for s,m in d[dst]:
                    total+=c*s*ct(a,transform(m,z=z),triple)
    print("canonical form",total,"triple hits",n,flush=True)
    return total

def reduce_inverse(C,Ge,Go,u):
    inds=list(C.T.rref()[1])
    W=Go.inv()*C[inds,:].T
    D=C*W
    if D.rows==D.cols:
        y=D.inv()*u
    else:
        y=(D.T*Ge.inv()*D).inv()*D.T*Ge.inv()*u
    x=W*y
    assert C.T*Ge.inv()*(C*x-u)==S.zeros(C.cols,1)
    return x

def verify():
    b,comps=examine()
    blocks=[invariant_block(C) for C in comps]
    assert [(len(e),len(o),C.rank()) for e,o,_,_,C in blocks]==[(4,4,3),(18,32,18),(61,80,61)]
    ev,od,Ge,Go,C=blocks[0]
    b0=vector_coords(b,ev,Ge)
    assert C.T*b0==S.zeros(C.cols,1) and (b0.T*Ge*b0)[0]==3
    assert (b0.T*covector_b2(b,ev))[0]==Q(-13,112)
    d0,=C.nullspace()
    d0*=S.sqrt(48/(d0.T*Go*d0)[0])
    d=unpack(od,d0)
    canon=cubic_form(b,d)
    assert abs(canon)==Q(1,384)
    if canon>0:
        d0=-d0
        canon=-canon
        d=unpack(od,d0)
    assert (d0.T*Go*d0)[0]==48
    refs=[A for A in comps[0] if [len(v) for v in components(A)]==[4,6]]
    assert len(refs)==4 and not (set(refs)&d.keys())
    vals=[]
    for ev,od,Ge,Go,C in blocks:
        u=covector_b2(b,ev)
        v=covector_b2(d,od)
        x=reduce_inverse(C,Ge,Go,u)
        print("nonzero covector",sum(bool(z) for z in u),sum(bool(z) for z in v),flush=True)
        vals.append((v.T*x)[0])
        print("fold component",vals[-1],flush=True)
    assert vals==[Q(-107,6720),Q(-334090367,81441753792),
                  Q(26679351913505668588007,41008155541763926704218688)]
    assert sum(vals)==Q(-80240078351571085663922219906289,4141587434395310133968393347992640)
    assert sum(vals)-canon==Q(-416728166446999793140277173375349,24849524606371860803810360087955840)
    print("fold",sum(vals),"full",sum(vals)-canon,flush=True)

if __name__=="__main__":verify()
