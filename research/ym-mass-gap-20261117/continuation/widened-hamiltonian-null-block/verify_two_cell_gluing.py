"""Exact signed incidence and nested Schur replay for two side-2 cells."""
from fractions import Fraction as F
from itertools import combinations, product

L = (4, 2, 2, 2)
V = list(product(*(range(n+1) for n in L)))

def inc(v,i):
    return v[:i]+(v[i]+1,)+v[i+1:]

def outer(e):
    v,i=e
    return any(v[k] in (0,L[k]) for k in range(4) if k!=i)

def plaquette(v,i,j):
    return { (v,i):1, (inc(v,i),j):1, (inc(v,j),i):-1, (v,j):-1 }

def normal(rows):
    """Gram of affine curl rows, variables then constant."""
    n=len(rows[0])
    return [[sum(F(a[i])*a[j] for a in rows) for j in range(n)] for i in range(n)]

def add(A,B):
    assert len(A)==len(B)
    return [[x+y for x,y in zip(a,b)] for a,b in zip(A,B)]

def blank(n):
    return [[F(0) for _ in range(n)] for _ in range(n)]

def schur(A,p):
    """Eliminate the first p coordinates in a PSD form with positive pivots."""
    for _ in range(p):
        piv=A[0][0]
        assert piv>0
        A=[[A[i][j]-A[i][0]*A[0][j]/piv for j in range(1,len(A))]
           for i in range(1,len(A))]
    return A

def main():
    edges=[(v,i) for v in V for i in range(4) if v[i]<L[i]]
    # Local roots: x=1 attaches to the x=0 outer face; x=3 to x=2.
    # The globally free seam center attaches on its minus-y link to y=0.
    forest={((0,1,1,1),0),((2,1,1,1),0),((2,0,1,1),1)}
    assert not any(outer(e) for e in forest)
    fixed={e for e in edges if outer(e)}
    free=set(edges)-fixed-forest
    S=sorted(e for e in free if e[0][0]==2 and e[1]!=0)
    I=sorted(e for e in free if e not in S and e[0][0]<2)
    J=sorted(free-set(S)-set(I))
    assert (len(edges),len(fixed),len(forest),len(I),len(J),len(S))==(378,356,3,7,7,5)
    assert all(e[0][0]>=2 for e in J)
    parts=[[],[],[]]
    seam_outer=0
    for v in V:
        for i,j in combinations(range(4),2):
            if v[i]==L[i] or v[j]==L[j]:
                continue
            p=plaquette(v,i,j)
            seam=v[0]==2 and i!=0
            globally_retained=not all(outer(e) for e in p)
            # Check each cell's local boundary rule independently.
            def local_outer(e,lo,hi):
                w,k=e
                return any(w[q] in ((lo,hi) if q==0 else (0,2))
                           for q in range(4) if q!=k)
            if seam:
                assert all(local_outer(e,0,2) and local_outer(e,2,4) for e in p)
                if globally_retained:
                    parts[2].append(p)
                else:
                    seam_outer+=1
            else:
                side=int(v[0]>=2)
                assert globally_retained==not_all_local(p,side,local_outer)
                if globally_retained:
                    parts[side].append(p)
    assert tuple(map(len,parts))==(24,24,12) and seam_outer==24
    assert not any(e in J for p in parts[0] for e in p)
    assert not any(e in I for p in parts[1] for e in p)
    assert not any(e in I+J for p in parts[2] for e in p)
    for edge,answer in (
      (((0,0,1,1),1), (F(1171,1680),F(17839,25296),F(151,18445))),
      (((2,0,0,1),1), (F(0),F(366,527),F(366,527))),
    ):
        assert edge in fixed
        def rows(ps,es):
            return [[p.get(e,0) for e in es+[edge]] for p in ps]
        U=schur(normal(rows(parts[0],I+S)),len(I))
        W=schur(normal(rows(parts[1],J+S)),len(J))
        T=normal(rows(parts[2],S))
        base=add(U,W)
        out=[]
        for kept in (False,True):
            summed=add(base,T if kept else blank(len(S)+1))
            nested=schur(summed,len(S))[0][0]
            ps=parts[0]+parts[1]+(parts[2] if kept else [])
            direct=schur(normal(rows(ps,I+J+S)),len(free))[0][0]
            assert nested==direct
            out.append(nested)
        values=tuple(out+[out[1]-out[0]])
        assert values==answer
        print(edge,*(str(v) for v in values))
    print("local plaquettes 24+24; restored interface 12; excluded outer interface 24")

def not_all_local(p,side,is_outer):
    lo,hi=((0,2),(2,4))[side]
    return not all(is_outer(e,lo,hi) for e in p)

if __name__=='__main__':
    main()
