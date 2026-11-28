"""Sparsity-exact support enumeration for the full folded cubic source."""
from collections import Counter,defaultdict
import argparse
import hashlib
import json
from pathlib import Path
from fractions import Fraction as Q
from itertools import product
import sympy as S

from folded_cubic import (adj_returns,anchor,covector_b2,cubic_form,examine,gsign,
                          invariant_block,key,loop,O,ordered,
                          reduce_inverse,REF,reflection,sub,touching,transform,unpack)
from cubic_mixing import adj,components,ct,shape
from separated_channel import at_endpoint,build,loop_types,span,shift

def geometry(A):
    return {A}|{C for C,_,_,_ in adj_returns(A)}

def cubic_inputs(A,targets=None):
    out=set()
    for p in touching(A):
        for r in touching(p):
            for s in touching(p)|touching(r):
                fs=tuple(sorted((p,r,s),key=ordered))
                a=A^p^r^s
                if len(a)!=10: continue
                C,z=anchor(a)
                if targets is None or C in targets:
                    out.add((C,z,fs))
    return out

def setup():
    b,comps=examine()
    sources=defaultdict(list)
    for C in comps:
        ev,od,Ge,Go,T=invariant_block(C)
        v=covector_b2(b,ev)
        x=reduce_inverse(T,Ge,Go,v)
        for (A,raw,_),c in zip(od,x):
            if c:sources[A].append((8*Q(c),raw))
    hits={c for A in sources for c in geometry(A)}
    ch={c for A in b for c,_,_ in cubic_inputs(A)}
    assert (len(sources),sum(map(len,sources.values())))==(101,114)
    print("nonzero reduced source coordinates",len(sources),sum(map(len,sources.values())),flush=True)
    assert (len(hits),len(ch),len({key(a) for a in hits|ch}))==(975,64,430)
    assert all(gsign(a)==-1 for a in hits|ch)
    print("candidate output representative labels",len(hits),len(ch),
          len({key(a) for a in hits|ch}),flush=True)
    return b,sources,{key(a) for a in hits|ch}

ALL_CUBE=tuple(a for a in loop_types(6) if span(a)==(1,1,1))
def detached(A):
    bits=components(A)
    if [len(a) for a in bits]!=[4,6]:return False
    p,r=bits
    b,z=anchor(r)
    group=[shift(C,z) for C in ALL_CUBE] if span(b)==(1,1,1) else [r]
    vertices={v for edge in p for v in edge}
    return all(not(touching(p)&touching(q)) and not any(v in vertices for edge in q for v in edge)
               for q in group)

def circuit(A):
    return sum((loop(c) for c in components(A)),())

def state(A):
    n=circuit(A)
    assert n
    D=defaultdict(list)
    for s in REF:
        B,z=reflection(A,s)
        D[B].append(transform(n,s,sub(O,z)))
    return A,n,dict(D)

def full_canonical(b,states):
    lookup=defaultdict(list)
    for i,(_,_,D) in enumerate(states):
        for A,vs in D.items():lookup[A].append((i,vs))
    result=S.zeros(len(states),1)
    for A,ns in b.items():
        for C,z,triple in cubic_inputs(A,set(lookup)):
            for i,vs in lookup[C]:
                for coef,n in ns:
                    for v in vs:
                        result[i]+=coef*ct(n,transform(v,z=z),triple)
    return result

def tail_component(A,H):
    p,r=components(A)
    h,z=anchor(r)
    if span(h)==(1,1,1):
        return [anchor(p|shift(R,z))[0] for R in H]
    return [A]

def verify_tail(base=None):
    b,x,_=setup() if base is None else base
    s={a for A in x for a in geometry(A)}|{a for A in b for a,_,_ in cubic_inputs(A)}
    D={key(A) for A in s if detached(A)}
    H=ALL_CUBE
    expand=sorted({key(a) for A in D for a in tail_component(A,H) if gsign(a)==-1},
                  key=ordered)
    assert (len(D),len(expand))==(190,208)
    print("detached candidate orbit reps",len(D),"after null support closure",len(expand),flush=True)
    states=[state(A) for A in expand]
    a=covector_b2(x,states)
    assert sum(bool(i) for i in a)==190
    c=full_canonical(b,states)
    assert c==S.zeros(len(states),1)
    raw={A:Q(v)/8 for A,v in zip(expand,a-c)}
    assert set(D)<=set(raw)
    h,T,B=build(6)
    ci=[i for i,A in enumerate(h) if span(A)==(1,1,1)]
    assert [h[i] for i in ci]==list(H)
    T=at_endpoint(T,22).extract(ci,ci)
    n=S.Matrix.hstack(*T.nullspace());P=n*(n.T*n).inv()*n.T
    projected={}
    for A in expand:
        p,r=components(A);h,z=anchor(r)
        if span(h)!=(1,1,1):
            projected[A]=raw[A]
            continue
        cs=tail_component(A,H)
        u=S.Matrix([raw[key(v)] if gsign(v)==-1 else 0 for v in cs])
        y=P*u
        projected[A]=Q(y[H.index(h)])
    norm=sum(len({reflection(A,s)[0] for s in REF})*v*v for A,v in projected.items())
    assert all(projected.values())
    assert norm==Q(1342217126294240211653878119965959984444906163088546445316400436595,
                   14227174037668160646713623532179240575556014690524870478513326364033024)
    witnesses=[]
    for A,v in projected.items():
        p,r=components(A)
        s,p0=anchor(p);h,r0=anchor(r)
        if span(s)==(0,1,1) and span(h)==(0,1,2) and sub(r0,p0)==(0,-1,-3):
            witnesses.append(v)
    assert witnesses==[Q(-1,75264)]
    print("full folded source: 208 nonzero detached orbits, actual xy rectangle witness −1/75264",
          flush=True)
    return projected


def quotient_orbits(targets):
    out=set(targets)
    groups=[]
    while out:
        A=min(out,key=ordered)
        block={A};todo=[A]
        while todo:
            for r,_,_ in adj(todo.pop()):
                k=key(r)
                if k not in block:block.add(k);todo.append(k)
        groups.append(block)
        out-=block
    return groups

def full_vector(b,x,targets):
    groups=quotient_orbits(targets)
    assert len(groups)==94 and sum(map(len,groups))==819
    ans=[];ns=Q(0);total=0
    print("assembling",len(groups),"reflection quotient closures",flush=True)
    for j,C in enumerate(groups):
        ev,od,Ge,Go,T=invariant_block(C)
        if not od:continue
        N=T.nullspace()
        if not N:continue
        U=S.Matrix.hstack(*N)
        v=covector_b2(x,od)-full_canonical(b,od)
        w=U*(U.T*Go*U).inv()*U.T*v
        assert T*w==S.zeros(T.rows,1)
        ns+=Q((w.T*Go*w)[0])
        total+=sum(bool(a) for a in w)
        for (A,n,_),c in zip(od,w):
            if c:ans.append((A,n,Q(c)))
        if j%10==0:print("completed",j+1,"of",len(groups),flush=True)
    assert (total,len({a for a,_,_ in ans}))==(562,510)
    print("full projected nonzero coords",total,"shapes",len({a for a,_,_ in ans}),
          "norm²≈",float(ns),flush=True)
    return ans,ns

def serialized_vector(ans):
    # An entry stores the single representative trace circuit; its stated
    # coefficient multiplies the SUM over all eight coordinate reflections.
    obj=[{"links":ordered(a),"circuits":n,"n":str(c.numerator),"d":str(c.denominator)}
         for a,n,c in sorted(ans,key=lambda item:(ordered(item[0]),item[1]))]
    return json.dumps(obj,sort_keys=True,separators=(",",":")).encode()+b"\n"

def verify_near_pairing(b,v):
    C=quotient_orbits({key(anchor(shape(39))[0])})[0]
    _,od,_,Go,T=invariant_block(C)
    d,=T.nullspace()
    d*=S.sqrt(48/(d.T*Go*d)[0])
    if cubic_form(b,unpack(od,d))>0:d=-d
    src={(A,n):c for A,n,c in v}
    w=S.Matrix([src.get((A,n),Q(0)) for A,n,_ in od])
    assert (d.T*Go*w)[0]==Q(-416728166446999793140277173375349,
                              24849524606371860803810360087955840)

def run_full(output=None):
    base=setup()
    tail=verify_tail(base)
    v,ns=full_vector(*base)
    from_full={}
    for A,n,c in v:
        if detached(A):
            assert A not in from_full
            from_full[A]=c*sum(reflection(A,s)[0]==A for s in REF)
    assert from_full==tail
    verify_near_pairing(base[0],v)
    data=serialized_vector(v)
    digest=hashlib.sha256(data).hexdigest()
    assert digest=="91677331e506551f9d0cb636ba250b4ac97c8019606e17ca955cf1fe11f51bda"
    assert ns==Q(188477890900150913909043079166151106873002569520097993917773785314602918152941389697346469698865882404303532639,
                 443763274837256980939865558572717248622212567405848336855833294091005045511176993012549503550345488316015155609600)
    print("full folded source exact SHA256",digest,flush=True)
    print("full folded source exact norm²",ns,flush=True)
    if output is not None:
        with Path(output).open("xb") as fp:fp.write(data)

if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--tail",action="store_true",help="only replay detached subset")
    parser.add_argument("--output",help="write full exact vector JSON to a new file")
    arg=parser.parse_args()
    if arg.tail:
        if arg.output:parser.error("--output needs full evaluation")
        verify_tail()
    else:run_full(arg.output)
