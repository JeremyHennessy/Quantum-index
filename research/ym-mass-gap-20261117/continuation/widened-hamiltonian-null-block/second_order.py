"""Exact second-order Schur/Spectral-pencil check on the X-odd Y-odd null block."""
from collections import defaultdict
from fractions import Fraction as Q
from itertools import product
from pathlib import Path
import sys

import sympy as S

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "widened-hamiltonian-individual-modes"))
from first_order import D, FF, mat, rmat, integrate
from probe import probe_vec

PAIRS=(((0,1),(2,3)),((0,2),(1,3)))
def local_terms(a,b):
    """Each term is (triplet increment, weight, XOR constraints, phase indices)."""
    n=len(a)+len(b)
    assert n in (2,4), (a,b)
    assert len(a)%2==len(b)%2
    endpoints=[];phase=[]
    for u,v,fw in a+b:
        if fw:
            endpoints.append(((u,0),(v,0)))
        else:
            endpoints.append(((v,1),(u,1)))
            phase += [u,v]
    def pair(axes):
        eq=[];sg=list(phase)
        for axis, pairs in enumerate(axes):
            for i,j in pairs:
                u,bu=endpoints[i][axis];v,bv=endpoints[j][axis]
                eq.append((u,v,1^bu^bv))
                sg.append(u)
        return tuple(eq),tuple(sg),(-1)**sum(endpoints[i][axis][1] for axis,pairs in enumerate(axes) for i,j in pairs)
    if n==2:
        eq,sg,sign=pair((((0,1),),)*2)
        return [(0,Q(sign,2),eq,sg)]
    eq,sg,sign=pair((PAIRS[0],)*2)
    ret=[(0,Q(sign,4),eq,sg)]
    if len(a)==len(b)==2:
        for i,j in product(range(2),repeat=2):
            eq,sg,sign=pair((PAIRS[i],PAIRS[j]))
            factor={(0,0):Q(1,12),(1,1):Q(1,3),(1,0):Q(-1,6),(0,1):Q(-1,6)}[i,j]
            ret.append((1,sign*factor,eq,sg))
    return ret

def solve(num,terms):
    """Independent links have become elementary signed equality constraints."""
    adj=[[] for _ in range(num)]; phase=[0]*num
    for _,_,edges,sign in terms:
        for u,v,flip in edges:
            adj[u].append((v,flip));adj[v].append((u,flip))
        for u in sign:phase[u]^=1
    assigned=[None]*num; answer=1
    for u in range(num):
        if assigned[u] is not None:continue
        assigned[u]=0;stack=[u];parity=neg=0
        while stack:
            u=stack.pop()
            parity^=phase[u];neg^=phase[u]&assigned[u]
            for v,d in adj[u]:
                want=assigned[u]^d
                if assigned[v] is None:assigned[v]=want;stack.append(v)
                elif assigned[v]!=want:return 0
        if parity:return 0
        answer*=(-2 if neg else 2)
    return answer

def spectral_gram(left,right):
    ports=[defaultdict(list),defaultdict(list)]; num=0
    for group,networks in enumerate((left,right)):
        for network in networks:
            for loop in network:
                n=len(loop)
                for k,(e,fw) in enumerate(loop):
                    ports[group][e].append((num+k,num+(k+1)%n,fw))
                num+=n
    edges=ports[0].keys()|ports[1].keys()
    ns=sum(len(a)==1 for a in ports[0].values())
    assert ns==sum(len(a)==1 for a in ports[1].values())
    terms=[local_terms(ports[0][e],ports[1][e]) for e in sorted(edges)]
    fixed=tuple(ls[0] for ls in terms if len(ls)==1)
    other=[ls for ls in terms if len(ls)>1]
    out=defaultdict(Q)
    for ts in product(*other):
        all_terms=fixed+ts;n=solve(num,all_terms)
        if n:
            for _,value,_,_ in all_terms:n*=value
            twice_e=3*ns+8*sum(t[0] for t in ts)
            out[twice_e]+=n
    return {k:v for k,v in out.items() if v}

def quaternion_moment(ports, values):
    """Independent SU(2)=S^3 control using only second/fourth coordinate moments."""
    # U=[[x0+i*x1,x2+i*x3],[-x2+i*x3,x0-i*x1]].
    coefficients={
        (0,0):((0,0,1),(1,1,1)),(0,1):((2,0,1),(3,1,1)),
        (1,0):((2,0,-1),(3,1,1)),(1,1):((0,0,1),(1,1,-1)),
    }
    options=[]
    for a,b,fw in ports:
        i,j=values[a],values[b]
        if fw: options.append(coefficients[i,j])
        else: options.append([(d,k,-s if k else s) for d,k,s in coefficients[j,i]])
    real=imag=Q(0)
    for ts in product(*options):
        n=[sum(d==k for d,_,_ in ts) for k in range(4)]
        if any(k%2 for k in n):continue
        r=Q(1,4) if len(ts)==2 else Q(1,8 if max(n)==4 else 24)
        k=sum(k for _,k,_ in ts)%4
        for _,_,sign in ts:r*=sign
        if k%2:imag+=r if k==1 else -r
        else:real+=r if k==0 else -r
    assert imag==0
    return real

def verify_local_kernels():
    # Exhaust every inverse pattern and every external index assignment, not
    # just trace specializations. Check both the full and split kernels.
    count=0
    for lengths in [(1,1),(2,0),(0,2),(2,2)]:
        n=sum(lengths)
        for forwards in product((False, True), repeat=n):
            ports=[(2*i,2*i+1,f) for i,f in enumerate(forwards)]
            a,b=ports[:lengths[0]],ports[lengths[0]:]
            terms=local_terms(a,b)
            for values in product((0,1),repeat=2*n):
                by=[Q(0),Q(0)]
                for spin,w,eq,sign in terms:
                    if all(values[u]^values[v]==d for u,v,d in eq):
                        by[spin]+=w*(-1)**sum(values[u] for u in sign)
                full=quaternion_moment(ports,values)
                split=(quaternion_moment(a,values)*quaternion_moment(b,values)
                       if lengths==(2,2) else full)
                assert by==[split,full-split]
                count+=1
    assert count==4288
    print("independent quaternion pointwise kernel checks",count)

def spectral_slices(ent,G,A,N):
    """Lift exactly to the finite set of spins reached by one face insertion."""
    active=[i for i, row in enumerate(N.tolist()) if any(row)]
    groups=defaultdict(list)
    for i in active:
        m,c=ent[i]
        for f in range(8):
            groups[m^(1<<f)].append((i,f,c))
    energy={}
    for terms in groups.values():
        for k,(i,f,c) in enumerate(terms):
            for j,g,d in terms[k:]:
                for e,v in spectral_gram((c,FF[f]),(d,FF[g])).items():
                    # Product W=circuit trace/2, once on each side.
                    block=energy.get(e)
                    if block is None:energy[e]=block=S.zeros(len(ent))
                    block[i,j]+=v/4
                    if (i,f)!=(j,g):block[j,i]+=v/4
    assert energy[30].extract(active,active)==(A*G.inv()*A).extract(active,active)
    return energy,len(active),len(groups)

def run():
    ent,G,A=mat(D); T=G.inv()*A
    X,Y=[rmat(ent,G,c) for c in "XY"]
    I=S.eye(len(ent))
    N=S.Matrix.hstack(*(T.col_join(X+I).col_join(Y+I)).nullspace())
    assert N.cols==7
    assert all((m.bit_count()%2==1) for (m,_),row in zip(ent,N.tolist()) if any(row))
    energy,n_active,n_groups=spectral_slices(ent,G,A,N)
    assert (n_active,n_groups)==(44,110)
    GN=N.T*G*N
    decomp={e:N.T*M*N for e,M in sorted(energy.items())}
    assert all(M==M.T and M.is_positive_semidefinite for M in decomp.values())
    assert decomp.pop(30)==S.zeros(7)
    assert decomp.get(0,S.zeros(7))==S.zeros(7)
    decomp={e:M for e,M in decomp.items() if M!=S.zeros(7)}
    K=sum((M*Q(2,30-e) for e,M in decomp.items()),S.zeros(7))
    K=GN.inv()*K
    assert K.T*GN==GN*K
    v=probe_vec(ent,G)
    z=GN.inv()*N.T*G*v
    assert (z.T*GN*z)[0]==S.Rational(13,46080)
    x=S.Symbol('x')
    p=K.charpoly(x).as_expr()
    print("available twice energies",list(decomp),"ranks",[M.rank() for M in decomp.values()])
    print("characteristic polynomial", S.factor(p))

    assert S.gcd(p,S.diff(p,x))==1
    bins=[(-322,-321),(-232,-231),(-226,-225),(-218,-217),
          (-214,-213),(-208,-207),(-195,-194)]
    for a,b in bins:
        aa,bb=Q(a,1000),Q(b,1000)
        poly=S.Poly(p,x)
        assert Q(-1,3)<aa and poly.eval(aa) and poly.eval(bb)
        assert poly.count_roots(aa,bb)==1
    print("exact single-root enclosures (thousandths)",bins)
    w=[z]
    for k in range(7):w.append(K*w[-1])
    assert S.Matrix.hstack(*w[:7]).rank()==7
    assert sum((S.Poly(p,x).nth(i)*w_i for i,w_i in enumerate(w)),S.zeros(7,1))==S.zeros(7,1)
    print("probe Krylov dimension",7)
    assert (z.T*GN*w[1])[0]==S.Rational(-758479,12386304000)
    print("probe first moment",(z.T*GN*w[1])[0],"ratio",(z.T*GN*w[1])[0]/(z.T*GN*z)[0])
    return p,z,GN,K,decomp

if __name__=='__main__':
    verify_local_kernels()
    p_minus,*_=run()
    from complement import run_complement
    q,curvature=run_complement(spectral_slices,p_minus)
    from locality import verify_locality
    verify_locality(spectral_gram,q,curvature)
    from cubic_locality import verify_cubic_locality
    verify_cubic_locality(spectral_gram,q,curvature)
    from aggregated import verify_aggregated
    verify_aggregated(spectral_gram,q)
    from cubic_parity import verify_cubic_parity
    verify_cubic_parity()
    from dressing import verify_dressing
    verify_dressing(spectral_gram,q)
    from residual import verify_uniform_residual
    verify_uniform_residual()
    from rescaled_law import verify_rescaled_law
    verify_rescaled_law(spectral_slices,q)
    from separated_channel import verify as verify_separated_channel
    verify_separated_channel()
    from cubic_mixing import verify as verify_cubic_mixing
    verify_cubic_mixing()
    from folded_cubic import verify as verify_folded_cubic
    verify_folded_cubic()
    from regular_sheet import verify as verify_regular_sheet
    verify_regular_sheet()
