"""Floating-point trial discovery only, not a proof or certified residual."""
from functools import lru_cache
from math import factorial
import argparse
import json
from pathlib import Path
import sys

sys.path.insert(0,str(Path(__file__).resolve().parent.parent/"three-square-exact-actions"))
import actions as ac
import numpy as np
from scipy.sparse import coo_matrix
from scipy.special import iv

@lru_cache(None)
def cv(a,b,c):
    return float(ac.element(a,b,c))

@lru_cache(None)
def mu(n,shared):
    beta=.8 if shared else 1.
    return iv(n+1,beta)/iv(1,beta)

def kinetic(label):
    return float(np.prod([mu(n,i in (2,3))**l for i,(n,l) in enumerate(zip(label,ac.LENGTHS))]))

def assembly(cutoff,degree,b):
    keep=sorted(ac.labels(cutoff))
    support=set(keep)
    sizes=[len(support)]
    for _ in range(degree):
        support.update({c for a in support for f in ac.FACE for c in ac.targets(a,f)})
        sizes.append(len(support))
    support=sorted(support)
    idx={v:i for i,v in enumerate(support)}
    matrices=[]
    for loop in ac.FACE:
        rows=[];cols=[];values=[]
        for j,a in enumerate(support):
            for c in ac.targets(a,loop):
                if c not in idx or idx[c]<j:
                    continue
                val=cv(a,loop,c)
                if val:
                    rows.append(idx[c]);cols.append(j);values.append(val)
                    if idx[c]!=j:
                        rows.append(j);cols.append(idx[c]);values.append(val)
        matrices.append(coo_matrix((values,(rows,cols)),shape=(len(support),)*2).tocsr())
    # Each power through 'degree' applied to retained inputs lies in support,
    # so these displayed faces are not silently compressed to kinetic cutoff.
    B0=np.zeros((len(support),len(keep)))
    for j,a in enumerate(keep):B0[idx[a],j]=np.sqrt(kinetic(a))
    W=sum(matrices)* (b/2)
    factor=B0.copy();term=B0.copy()
    for n in range(1,degree+1):
        term=(W@term)/n
        factor+=term
    gram=factor.T@factor
    energies,right=np.linalg.eigh(gram)
    d0=kinetic(ac.PERIMETER)
    trial={}
    vectors={}
    for name,j,ref in [('vacuum',-1,ac.VAC),('perimeter',int(np.argmin(abs(energies-d0))),ac.PERIMETER)]:
        e=float(energies[j]);assert e>0
        if name=="perimeter":assert 1.0676e-5<e<1.1733e-5
        left=(factor@right[:,j])/np.sqrt(e)
        if left[idx[ref]]<0:left=-left
        residual=factor@(factor.T@left)-e*left
        trial[name]={"energy":e,"computed_approximate_model_residual":float(np.linalg.norm(residual))}
        vectors[name]=left
    amplitude=float(vectors["perimeter"]@(matrices[0]@vectors["vacuum"]))
    return {"scope":"floating-point trial only, no infinite operator residual or nonzero claim",
            "cutoff":cutoff,"degree":degree,"spatial_b":b,
            "support_counts":sizes,"energies":trial,"phase_fixed_trial_amplitude":amplitude},support,vectors

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--cutoff",type=int,default=12)
    p.add_argument("--degree",type=int,default=4)
    p.add_argument("--spatial-b",type=float,default=.01)
    p.add_argument("--output")
    a=p.parse_args()
    report,support,vectors=assembly(a.cutoff,a.degree,a.spatial_b)
    if a.output:
        np.savez_compressed(a.output,support=np.array(support),**vectors)
    print(json.dumps(report,indent=2,sort_keys=True))

if __name__=="__main__":main()
