"""Pure-Python exact geometry and one-forcing stiffness for a four-cell slab."""
from collections import Counter
from fractions import Fraction as F
from itertools import combinations, product

L=(4,2,4,2)
B=2
def inc(v,i):
    return v[:i]+(v[i]+1,)+v[i+1:]
def verts():
    return product(*(range(n+1) for n in L))
def outer(e):
    v,i=e
    return any(v[k] in (0,L[k]) for k in range(4) if k!=i)
def plaq(v,i,j):
    return {(v,i):1,(inc(v,i),j):1,(inc(v,j),i):-1,(v,j):-1}
def contains(v,i,j,c):
    return all(c[k]<=v[k] and v[k]+(k in (i,j))<=c[k]+B for k in range(4))
def cell_omits(v,i,j,c):
    return any(v[k] in (c[k],c[k]+B) for k in range(4) if k not in (i,j))
def response(rows, dim):
    A=[[F(0) for _ in range(dim+1)] for _ in range(dim+1)]
    for row in rows:
        for i,a in row.items():
            for j,b in row.items():
                A[i][j]+=a*b
    # Normal-form Schur on variable columns; no negative or singular pivots.
    for k in range(dim):
        assert A[k][k]>0
        for i in range(k+1,dim+1):
            if A[i][k]:
                t=A[i][k]/A[k][k]
                for j in range(k+1,dim+1):
                    A[i][j]-=t*A[k][j]
    x=[F(0)]*dim
    for i in range(dim-1,-1,-1):
        x[i]=-(A[i][dim]+sum(A[i][j]*x[j] for j in range(i+1,dim)))/A[i][i]
    x.append(F(1))
    residual=[sum(a*x[i] for i,a in row.items()) for row in rows]
    ortho=[F(0)]*dim
    for row,r in zip(rows,residual):
        for i,a in row.items():
            if i<dim:
                ortho[i]+=a*r
    assert not any(ortho)
    value=sum(r*r for r in residual)
    assert value==A[dim][dim]
    return value

def main():
    cells=list(product(*(range(0,n,B) for n in L)))
    edges=[(v,i) for v in verts() for i in range(4) if v[i]<L[i]]
    forest={((x,1,z,1),0) for x in range(3) for z in range(1,4)}
    free=[e for e in edges if not outer(e) and e not in forest]
    f=len(free)
    assert len(cells)==4 and len(forest)==9
    idx={e:k for k,e in enumerate(free)}
    given=((2,0,2,0),1)
    assert outer(given)
    idx[given]=f
    ps=[[],[],[]]
    ignored=Counter()
    mem=Counter()
    nmem=0
    for v in verts():
        for i,j in combinations(range(4),2):
            if v[i]==L[i] or v[j]==L[j]: continue
            p=plaq(v,i,j)
            s=sum(v[k] not in (0,L[k]) and v[k]%B==0 for k in range(4) if k not in (i,j))
            hosts=[c for c in cells if contains(v,i,j,c)]
            assert len(hosts)==2**s
            if all(outer(e) for e in p):
                assert all(cell_omits(v,i,j,c) for c in hosts)
                ignored[s]+=1
                continue
            assert all(cell_omits(v,i,j,c)==bool(s) for c in hosts)
            ps[s].append({idx[e]:a for e,a in p.items() if e in idx})
            if (i,j)==(1,3) and (v[0],v[2])==(2,2):
                assert s==2
                nmem+=1
                for e,a in p.items():
                    mem[e]+=a
    assert nmem==4 and mem[given]==1
    assert all(not a or outer(e) for e,a in mem.items())
    assert [sum(f in row for row in block) for block in ps]==[0,0,1]
    omit=response(ps[0]+ps[1],f)
    full=response(ps[0]+ps[1]+ps[2],f)
    assert len(edges)==660 and f==51 and tuple(map(len,ps))==(96,48,4)
    assert omit==0 and full==F(227,336)>F(1,4)
    print("edges / unknown after forest",len(edges),f)
    print("globally retained counts by s",*[len(p) for p in ps])
    print("globally omitted counts by s",*(ignored[i] for i in range(3)))
    print("face-only",omit,"full",full)
    return full
if __name__=='__main__':
    main()
