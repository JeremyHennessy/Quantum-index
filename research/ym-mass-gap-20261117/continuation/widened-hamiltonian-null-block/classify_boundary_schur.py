"""Unit-pivot integer rank/nullspace certificate for the full fixed-cell response."""
from itertools import product,combinations
from collections import Counter, defaultdict
L,d=4,4
def vertices(): return product(range(L+1),repeat=d)
def shift(v,i): return v[:i]+(v[i]+1,)+v[i+1:]
def transverse_boundary(e):
    v,i=e
    return sum(x in (0,L) for j,x in enumerate(v) if j!=i)
def plaquette(v,i,j):
    return (((v,i),1),((shift(v,i),j),1),((shift(v,j),i),-1),((v,j),-1))
def rank_unit(rows):
    """Row ops over Z, preserve row span over Q and all fields, all pivots units."""
    piv={}
    for a in rows:
        a=dict(a)
        while a:
            i=min(a); x=a[i]
            if i not in piv:
                assert abs(x)==1,(i,x,a)
                piv[i]={k:x*v for k,v in a.items()}
                break
            for k,v in piv[i].items():
                w=a.get(k,0)-x*v
                if w: a[k]=w
                else: a.pop(k,None)
    return piv
def fixture():
    edges=[(v,i) for v in vertices() for i in range(d) if v[i]<L]
    forest={((x,y,z,w),2) for x,y,w in product(range(1,L),repeat=3) for z in range(L-1)}
    tangential=[e for e in edges if transverse_boundary(e)>0]
    active=[e for e in tangential if transverse_boundary(e)==1]
    inactive=[e for e in tangential if transverse_boundary(e)>=2]
    interior=[e for e in edges if transverse_boundary(e)==0 and e not in forest]
    prows=[plaquette(v,i,j) for v in vertices() for i,j in combinations(range(d),2)
           if v[i]<L and v[j]<L and all(v[k] not in (0,L) for k in range(d) if k not in (i,j))]
    idx={e:k for k,e in enumerate(interior+active)}
    A=[{idx[e]:s for e,s in row if e in idx} for row in prows]
    used={e for row in prows for e,s in row if transverse_boundary(e)}
    assert used==set(active)
    return interior,active,inactive,A,prows,forest
def graph(edges):
    adj=defaultdict(set)
    for v,i in edges:
        w=shift(v,i)
        adj[v].add(w)
        adj[w].add(v)
    seen=set()
    sizes=[]
    for v in adj:
        if v in seen: continue
        seen.add(v)
        stack=[v]
        size=0
        while stack:
            size+=1
            for w in adj[stack.pop()]-seen:
                seen.add(w)
                stack.append(w)
        sizes.append(size)
    return adj,sorted(sizes)

if __name__=='__main__':
    I,B,Z,rows,prows,forest=fixture()
    n=len(I)
    assert (n,len(B),len(Z),len(rows),len(forest))==(351,864,704,864,81)
    piv=rank_unit(rows)
    rD,rDB=sum(p<n for p in piv),len(piv)
    assert (rD,rDB)==(351,784)
    assert len(rank_unit([{k:v for k,v in row.items() if k<n} for row in rows]))==351
    r=rDB-rD
    V,comp=graph(B)
    W,comp_all=graph(B+Z)
    assert comp==[432] and comp_all==[544]
    assert Counter(sum(x in (0,L) for x in v) for v in V)=={1:216,2:216}
    assert set(W)=={v for v in vertices() if any(x in (0,L) for x in v)}
    assert r==len(B)-(len(V)-1)==433
    assert len(B)+len(Z)-r==1135
    assert len(W)-len(V)==112
    assert 1135-(len(W)-1)==len(Z)-112==592
    print('351 interior | 864 active + 704 inactive | 864 included plaquettes')
    print('integer ranks D=351, [D B]=784; Schur rank 433 per Lie component')
    print('active/full connected boundary vertices 432/544; active kernel 431')
    print('full nullity 1135; full boundary gauge 543; inactive quotient nullity 592')
