"""Verify the exact axial-gauge Schur curvature for one open unit b=4 SU(2) fixture."""
from fractions import Fraction
from itertools import product
from pathlib import Path
import hashlib
import json

N=4
VERTICES=list(product(range(N+1), repeat=4))
EXPECTED="06e68097e6afe39482e120674cf90d7602b0ff039013e1f9e8c4c9ca0652795e"
PULSE=((1,2,0,2),0)

def step(v,d):
    return tuple(x+int(i==d) for i,x in enumerate(v))

def boundary_edge(edge):
    v,d=edge
    return any(i!=d and v[i] in (0,N) for i in range(4))

def axially_fixed(edge):
    v,d=edge
    return d==2 and all(0<v[i]<N for i in (0,1,3)) and 0<=v[2]<N-1

def rows():
    edges=[(v,d) for v in VERTICES for d in range(4) if v[d]<N]
    fixed=[e for e in edges if boundary_edge(e)]
    tree=[e for e in edges if axially_fixed(e)]
    free=[e for e in edges if not boundary_edge(e) and not axially_fixed(e)]
    assert len(edges)==2000 and len(fixed)==1568 and len(tree)==81 and len(free)==351
    assert not any(boundary_edge(e) for e in tree) and PULSE in fixed
    index={e:i for i,e in enumerate(free)}
    result=[]
    omitted=0
    for i in range(4):
        for j in range(i+1,4):
            for v in VERTICES:
                if v[i]==N or v[j]==N:
                    continue
                p=[((v,i),1),((step(v,i),j),1),((step(v,j),i),-1),((v,j),-1)]
                if all(boundary_edge(e) for e,s in p):
                    omitted+=1
                    continue
                result.append(([(index[e],s) for e,s in p if e in index],
                               sum(s for e,s in p if e==PULSE),
                               (i,j)==(0,2) and (v[1],v[3])==(2,2)))
    assert len(result)==864 and omitted==1536
    return result,len(free)

def main():
    raw=Path(__file__).with_name("boundary-flux-certificate.json").read_bytes()
    assert hashlib.sha256(raw).hexdigest()==EXPECTED
    data=json.loads(raw)
    d=data["common_denominator"]
    z=data["normal_solution_numerators"]
    rr,n=rows()
    assert len(z)==n and type(d) is int and d>0 and all(type(c) is int for c in z)
    normal=[0]*n
    membrane=[0]*n
    source2=0
    residual2=0
    membrane_count=membrane_flux=0
    for coefficients,source,in_membrane in rr:
        residual=source*d-sum(z[i]*s for i,s in coefficients)
        for i,s in coefficients:
            normal[i]+=s*residual
            if in_membrane:
                membrane[i]+=s
        source2+=source**2
        residual2+=residual**2
        if in_membrane:
            membrane_count+=1
            membrane_flux+=source
    assert not any(normal)
    assert not any(membrane) and membrane_count==16 and membrane_flux==1
    assert source2==1
    curvature=Fraction(residual2,d**2)
    assert curvature==Fraction(data["stiffness"])==Fraction(551981,958272)
    assert Fraction(1,16)<=curvature<=1
    print(f"exact Schur curvature {curvature}; 16-plaquette membrane verified")

if __name__=="__main__":
    main()
