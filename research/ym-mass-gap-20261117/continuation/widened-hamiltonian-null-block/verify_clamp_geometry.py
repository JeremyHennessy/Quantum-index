"""Deterministic cubical clamp and independent exact-rank checks, side b=2..5."""
from collections import defaultdict
from itertools import combinations, product

def add(v,i,d=1):
    return v[:i]+(v[i]+d,)+v[i+1:]

def connected(edges):
    adj=defaultdict(set)
    for v,i in edges:
        w=add(v,i)
        adj[v].add(w)
        adj[w].add(v)
    stack=[next(iter(adj))]; seen=set(stack)
    while stack:
        for w in adj[stack.pop()]-seen:
            seen.add(w)
            stack.append(w)
    return len(seen)==len(adj),len(adj)

def rank(rows):
    piv={}
    for row in rows:
        a=dict(row)
        while a:
            i=min(a); s=a[i]
            if i not in piv:
                assert abs(s)==1
                piv[i]={j:s*x for j,x in a.items()}
                break
            for j,v in piv[i].items():
                w=a.get(j,0)-s*v
                if w: a[j]=w
                else: a.pop(j,None)
    return len(piv)

def verify(b):
    m=b-1
    vs=list(product(range(b+1),repeat=4))
    es=[(v,i) for v in vs for i in range(4) if v[i]<b]
    def t(e):
        v,i=e
        return sum(x in (0,b) for j,x in enumerate(v) if j!=i)
    faces={(v,i,j) for v in vs for i,j in combinations(range(4),2)
           if v[i]<b and v[j]<b and all(v[k] not in (0,b) for k in range(4) if k not in (i,j))}
    visible={e for e in es if t(e)<=1}
    A=[e for e in es if t(e)==1]
    Z=[e for e in es if t(e)>=2]
    forest={((x,y,z,w),2) for x,y,w in product(range(1,b),repeat=3) for z in range(b-1)}
    assert len(forest)==m**4 and forest<=visible
    I=[e for e in es if t(e)==0 and e not in forest]
    assert len(I)==(3*m+4)*m**3
    assert len(faces)==6*b*b*m*m and len(A)==24*b*m*m and len(Z)==16*b*(3*m+2)
    assert connected(A)==(True,8*m**3+24*m*m)
    assert connected(A+Z)==(True,(b+1)**4-m**4)
    assert len(Z)-((b+1)**4-m**4-(8*m**3+24*m*m))==16*(b**3-m**3)
    for v,i in visible:
        w=add(v,i)
        for k in range(4):
            def c(x): return add(x,k,1 if x[k]==0 else -1) if x[k] in (0,b) else x
            u,z=c(v),c(w)
            if u!=z:
                assert (u,i) in visible
            for old,new in ((v,u),(w,z)):
                if old!=new:
                    assert (min(old,new),k) in visible
            if i!=k and u!=v:
                assert (min(u,v),min(i,k),max(i,k)) in faces
    idx={e:n for n,e in enumerate(I+A)}
    matrix=[]
    for v,i,j in sorted(faces):
        row=[((v,i),1),((add(v,i),j),1),((add(v,j),i),-1),((v,j),-1)]
        assert all(e in visible for e,s in row)
        matrix.append({idx[e]:s for e,s in row if e in idx})
    schur_rank=rank(matrix)-len(I)
    assert rank([{k:x for k,x in row.items() if k<len(I)} for row in matrix])==len(I)
    assert schur_rank==16*m**3+1
    print(f"b={b}: active={len(A)}, inactive={len(Z)}, Schur rank={schur_rank}, invisible nongauge={16*(b**3-m**3)}")

if __name__=='__main__':
    for b in range(2,6): verify(b)
