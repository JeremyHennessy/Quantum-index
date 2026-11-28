"""Exact ghost part of the projected defect and a physical-source row."""
from collections import defaultdict
from fractions import Fraction as Q
import hashlib,json
from pathlib import Path
import sympy as S
from defect_geometry import (P,H,GI,GROUPS,REF,DIGEST,anchor,classify,components,
                             detached,reflected,reflection,span,sub,to_group,tup)
from separated_channel import add,build,at_endpoint
from folded_cubic import covector_b2
from full_folded_source import state

def materialize(raw,near):
    assert hashlib.sha256(raw).hexdigest()==DIGEST
    x=json.loads(raw)
    nsrc=defaultdict(list)
    w={}
    for ent in x:
        A=frozenset(tup(ent["links"]));n=tup(ent["circuits"])
        c=Q(int(ent["n"]),int(ent["d"]))
        k=to_group(A)
        if k is None or k in near:
            nsrc[A].append((8*c,n))
        else:
            images={reflection(A,s)[0] for s in REF}
            assert 8%len(images)==0
            for B in images:
                h=anchor(components(B)[1])[0]
                r=(to_group(B),H.index(h));a=c*8/len(images)
                assert r not in w or w[r]==a
                w[r]=a
    return dict(nsrc),w

def reference_bases(ghost,det):
    p,_,B6=build(4);q,T9,B9=build(6)
    assert tuple(p)==P and tuple(q)==H
    N=at_endpoint(T9,22).nullspace()
    cube=[v for v in N if all(not v[H.index(a)] for a in H if GI[a]!=0)]
    assert len(cube)==8
    perms={s:[H.index(reflection(h,s)[0]) for h in H] for s in REF}
    gs=[];rs=[]
    for D,out in ((ghost,gs),(det,rs)):
        reps=sorted({min(reflected(*a,s) for s in REF) for a in D})
        for a in reps:
            fix=[s for s in REF if reflected(*a,s)==a]
            X=[]
            if a[1]==0:
                for v in cube:
                    w=S.zeros(22,1)
                    for s in fix:
                        for i,j in enumerate(perms[s]):w[j]+=v[i]
                    trial=X+[w]
                    if S.Matrix.hstack(*trial).rank()==len(trial):X.append(w)
            else:
                X=[S.eye(22)[:,H.index(GROUPS[a[1]][0])]]
            for v in X:
                d=defaultdict(Q)
                for s in REF:
                    k=reflected(*a,s)
                    for i,j in enumerate(perms[s]):
                        if v[i]:d[k,j]+=Q(v[i])
                out.append({k:c for k,c in d.items() if c})
    assert (len(gs),len(rs))==(270,348)
    return gs,rs,B6,B9

def block_form(G,R,B6,B9):
    a,b=defaultdict(list),defaultdict(list)
    for (j,i,z),v in B6.items():a[i].append((j,z,v))
    for (j,i,z),v in B9.items():b[i].append((j,z,v))
    lookup=defaultdict(list)
    for i,U in enumerate(G+R):
        for k,v in U.items():lookup[k].append((i,v))
    def move(U):
        out=defaultdict(Q)
        for ((i,g,r),h),c in U.items():
            for j,z,v in a[i]:out[(j,g,sub(r,z)),h]+=v*c
            for j,z,v in b[h]:out[(i,GI[H[j]],add(r,z)),j]+=v*c
        return out
    M=S.zeros(len(G)+len(R),len(G))
    for j,V in enumerate(G):
        for k,o in move(V).items():
            for i,v in lookup[k]:
                M[i,j]-=v*o
    assert M[:len(G),:]==M[:len(G),:].T
    return M

def rank_mod(M,p):
    n,m=M.shape
    assert all(int(S.denom(x))%p for x in M)
    rows=[[int(S.numer(x))*pow(int(S.denom(x)),-1,p)%p for x in row] for row in M.tolist()]
    k=0
    for j in range(m):
        u=next((i for i in range(k,n) if rows[i][j]),None)
        if u is None:continue
        rows[k],rows[u]=rows[u],rows[k]
        d=pow(rows[k][j],-1,p);a=rows[k]
        for i in range(k+1,n):
            b=rows[i];z=b[j]*d%p
            if not z:continue
            for r in range(j,m):b[r]=(b[r]-z*a[r])%p
        k+=1
    return k

def verify(raw):
    ghost,det=classify()
    nsrc,w=materialize(raw,ghost)
    G,R,B6,B9=reference_bases(ghost,det)
    M=block_form(G,R,B6,B9)
    f=S.Matrix([sum((c*w.get(k,0) for k,c in U.items()),Q(0)) for U in G+R])
    assert f[:len(G),:]==S.zeros(len(G),1) and f!=S.zeros(len(G)+len(R),1)
    assert M.shape==(618,270) and sum(bool(x) for x in M)==9422
    print("ghost matrix",M.shape,"nonzero entries",9422,flush=True)
    for p in (1009,1013):
        d=rank_mod(M[:len(G),:],p)
        dims=(rank_mod(M,p),rank_mod(M.row_join(f),p))
        assert d==270 and dims==(270,271)
        C=M[len(G):,:]
        q=f[len(G):,:]
        det_ranks=rank_mod(C,p),rank_mod(C.row_join(q),p)
        assert det_ranks==(180,181)
        print("modular ranks",p,d,dims,"detached-only",*det_ranks,flush=True)
    # One actual physical near-source row, before applying null to the
    # output: the xy rectangle direction is already a unit null vector.
    e=[]
    for ent in json.loads(raw):
        A=frozenset(tup(ent["links"]))
        k=to_group(A)
        if k and k[2]==(0,-1,-3) and span(P[k[0]])==(0,1,1) and span(GROUPS[k[1]][0])==(0,1,2):
            assert detached(*k) and k in det
            e.append(A)
    assert len(e)==1
    r=covector_b2(nsrc,[state(e[0])])[0]/8
    assert r==Q(-416728166446999793140277173375349,66795522141927561840642247916425297920)
    print("actual defect on chosen detached unit rectangle row",r,flush=True)
    return M,f,r

if __name__=="__main__":
    import sys
    verify(Path(sys.argv[1]).read_bytes())
