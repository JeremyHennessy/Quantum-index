"""Exact canonical cubic coefficient on the probe’s bounded near component."""
from collections import defaultdict
from itertools import permutations, product
from fractions import Fraction as Q

from second_order import local_terms, quaternion_moment, solve, spectral_gram
from first_order import B,E,pairings
from separated_channel import anchor,loop,touching,gsign,shift
from momentum_probe import COEFFS
from check import invdim
from math import prod
import sympy as S

def shape(mask):
    return frozenset(tuple((0,*v) for v in E[i]) for path in B[mask][0] for i,_ in path)

def components(A):
    at=defaultdict(set)
    for a,b in A:at[a].add((a,b));at[b].add((a,b))
    if any(len(es)!=2 for es in at.values()):return []
    out=[]
    while A:
        pending=[min(A)]
        found=set(pending)
        while pending:
            p=pending.pop()
            for v in p:
                for r in at[v]-found:found.add(r);pending.append(r)
        out.append(frozenset(found))
        A=A-found
    return sorted(out,key=len)

def bridge_terms(a,b,m):
    if not m:
        return [((j,j),w,e,s) for j,w,e,s in local_terms(a,b)]
    assert len(m)==1 and (len(a)+len(b))%2
    if len(a)==2:
        return [((j,0),w,e,s) for j,w,e,s in local_terms(a,b+m)]
    if len(b)==2:
        return [((0,j),w,e,s) for j,w,e,s in local_terms(b,a+m)]
    return [((0,0),w,e,s) for _,w,e,s in local_terms(a+b+m,[])]

def joint_gram(left,right,mid):
    ports=[defaultdict(list) for _ in range(3)];num=0
    for group,networks in enumerate((left,right,mid)):
        for network in networks:
            for path in network:
                n=len(path)
                for k,(e,fw) in enumerate(path):
                    ports[group][e].append((num+k,num+(k+1)%n,fw))
                num+=n
    edges=ports[0].keys()|ports[1].keys()|ports[2].keys()
    base=[3*sum(len(a)==1 for a in trial.values()) for trial in ports[:2]]
    allterms=[bridge_terms(*(p[e] for p in ports)) for e in sorted(edges)]
    fixed=tuple(t[0] for t in allterms if len(t)==1)
    vary=[t for t in allterms if len(t)>1]
    out=defaultdict(Q)
    for free in product(*vary):
        terms=fixed+free
        v=solve(num,terms)
        if not v:continue
        for _,w,_,_ in terms:v*=w
        ex=tuple(base[i]+8*sum(t[0][i] for t in free) for i in range(2))
        out[ex]+=v
    return {e:w for e,w in out.items() if w}


def adj(A):
    for p in touching(A):
       if len(A&p)==2:
           C,z=anchor(A^p)
           yield C,z,p

def orbit(root):
    todo=[root];out={root}
    while todo:
        for c,_,_ in adj(todo.pop()):
            if c not in out:out.add(c);todo.append(c)
    return sorted(out,key=lambda a:sorted(a))

def basis(A):
    at=defaultdict(list)
    for p in A:
        for x in p:at[x].append(p)
    vs=sorted(at)
    o=[]
    for pat in product(*(list(pairings(sorted(at[v]))) for v in vs)):
        route={(v,a):b for v,pairs in zip(vs,pat) for p in pairs for a,b in (p,p[::-1])}
        visited=set();loops=[]
        for e in sorted(A):
            if e in visited:continue
            start=e,e[0];j,v=start;path=[]
            while True:
                assert j not in visited;visited.add(j)
                a,b=j;w=b if v==a else a
                path.append((j,v==a));j,v=route[w,j],w
                if (j,v)==start:break
            loops.append(tuple(path))
        nu=tuple(loops)
        test=o+[nu]
        m=S.Matrix([[(spectral_gram((a,),(b,)).get(30,0)) for b in test] for a in test])
        if m.det():o.append(nu)
    assert len(o)==prod(invdim([1]*len(v)) for v in at.values())
    return o

def ct(src,target,faces):
    value=Q(0)
    for p,r,s in set(permutations(faces)):
        W=joint_gram((target,loop(s)),(src,loop(p)),(loop(r),))
        for (a,b),w in W.items():
            if a!=30 and b!=30:value+= w*Q(1,2*(30-a)*(30-b))
            elif a==30 and b!=30:value-=w*Q(1,4*(30-b)**2)
            elif b==30 and a!=30:value-=w*Q(1,4*(30-a)**2)
    return value

def connected(A,target):
    seen=set()
    for p in touching(A):
        for r in touching(p):
            for s in (touching(p)|touching(r)):
                fs=tuple(sorted((p,r,s),key=lambda a:tuple(sorted(a))))
                C=A^p^r^s
                if len(C)!=10:continue
                D,z=anchor(C)
                if D in target and fs not in seen:
                    seen.add(fs)
                    yield D,z,fs

def verify_near():
    A0=anchor(shape(39))[0]
    state=orbit(A0)
    assert len(state)==21
    bases={a:basis(a) for a in state}
    labels=[(a,v) for a in state for v in bases[a]]
    index={a:[i for i,(b,v) in enumerate(labels) if a==b] for a in state}
    n=len(labels)
    G=S.zeros(n); V=S.zeros(n)
    for i,(a,ni) in enumerate(labels):
        for j in index[a]:
            G[i,j]=spectral_gram((ni,),(labels[j][1],)).get(30,0)
        for b,z,p in adj(a):
            for j in index[b]:
                v=tuple(tuple((tuple(tuple(u+t for u,t in zip(x,z)) for x in e),fw)
                          for e,fw in path) for path in labels[j][1])
                V[j,i]+=spectral_gram((v,),(ni,loop(p))).get(30,0)/2
    assert n==25 and V==V.T
    T=G.inv()*V
    N=S.Matrix.hstack(*T.nullspace())
    P0=N*(N.T*G*N).inv()*N.T*G
    assert N.cols==9 and T*P0==S.zeros(n) and P0*P0==P0 and G*P0==P0.T*G
    b=S.zeros(n,1)
    form=S.zeros(n,1)
    for m,c in COEFFS:
        A=shape(m)
        ks=index[anchor(A)[0]]
        assert len(ks)==1
        b[ks[0]]+=c
        count=0
        for a,z,fs in connected(A,set(state)):
            count+=1
            for j in index[a]:
                v=tuple(tuple((tuple(tuple(u+t for u,t in zip(x,z)) for x in e),fw)
                          for e,fw in path) for path in labels[j][1])
                form[j]+=c*ct(loop(A),v,fs)
        assert count=={39:32,114:32,119:56}[m]
    assert T*b==S.zeros(n,1)
    vector=P0*G.inv()*form
    targets=[i for i,(a,v) in enumerate(labels) if [len(x) for x in components(a)]==[4,6]]
    assert len(targets)==4
    assert [(form[i],(G*vector)[i]) for i in targets]==[(Q(-1,576),0)]*4
    assert (vector.T*G*vector)[0]==Q(1,7077888)
    odd={a for (a,_),v in zip(labels,vector) if v and gsign(a)==-1}
    assert len(odd)==4 and all(len(bases[a])==2 for a in odd)
    assert all(not v or a in odd for (a,_),v in zip(labels,vector))
    print("canonical cubic: 21 labels / 25 states / null 9, odd norm squared 1/7077888")
    print("canonical cubic: four raw near rectangle-pair amplitudes −1/576, all zero after N projection")
def verify_bridge():
    # Re-test each middle-link grouping using independent S³ coordinate
    # moments. The projected double on one side gets the Haar-mean product
    # for spin 0 and the remainder for spin 1.
    count=0
    for na,nb in ((0,1),(1,0),(2,1),(1,2)):
        n=na+nb+1
        for dirs in product((False,True),repeat=n):
            ports=[(2*i,2*i+1,v) for i,v in enumerate(dirs)]
            a,b,m=ports[:na],ports[na:na+nb],ports[-1:]
            for values in product((0,1),repeat=2*n):
                found=defaultdict(Q)
                for ex,w,eq,sgn in bridge_terms(a,b,m):
                    if all(values[u]^values[v]==delta for u,v,delta in eq):
                        found[ex]+=w*(-1)**sum(values[u] for u in sgn)
                full=quaternion_moment(ports,values)
                if na==2:
                    z=quaternion_moment(a,values)*quaternion_moment(b+m,values)
                    expected={(0,0):z,(1,0):full-z}
                elif nb==2:
                    z=quaternion_moment(b,values)*quaternion_moment(a+m,values)
                    expected={(0,0):z,(0,1):full-z}
                else:
                    expected={(0,0):full}
                assert {k:v for k,v in found.items() if v}=={k:v for k,v in expected.items() if v}
                count+=1
    assert count==8320
    print("canonical cubic: 8320 independent S³ bridge kernel checks")

def verify():
    verify_bridge()
    verify_near()

if __name__=="__main__":verify()
