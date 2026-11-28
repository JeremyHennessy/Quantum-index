"""Verify the exact six-null-vector certificate without reconstructing it."""
import argparse
import hashlib
import json
from pathlib import Path

import sympy as S

from constrained_rank import eliminate, mod
from reconstruct_null import construct

NEAR_SHA = "0fce1bb95cc81534cfe7acc07e1862f08c1767da2edc3828055c8c9d93781702"
NULL_SHA = "c97e31b56a0078b8d4e921cb8169c4f4ebe02a0460065fa337619f4d0cf999a0"

def verify(near_path, cert_path):
    assert hashlib.sha256(Path(near_path).read_bytes()).hexdigest() == NEAR_SHA
    data = Path(cert_path).read_bytes()
    assert hashlib.sha256(data).hexdigest() == NULL_SHA
    cert = json.loads(data)
    H, w, indices = construct(near_path)
    assert indices == cert["detached_row_indices"]
    free = cert["free_column_indices"]
    assert free == [496, 528, 550, 559, 584, 585]
    Y = S.SparseMatrix(600, 6, {
        (i, j): S.Rational(int(a), int(b))
        for i, j, a, b in cert["null_vectors"]
    })
    assert H == H.T
    assert Y.extract(free, range(6)) == S.eye(6)
    assert (H*Y).is_zero_matrix
    assert (Y.T*w).is_zero_matrix
    for p in (1009, 1013):
        assert eliminate(mod(H, p), p) == 594
    print("Verified: rational rank H = rank [H|w] = 594; six independent null witnesses", flush=True)

if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("near")
    p.add_argument("certificate")
    a = p.parse_args()
    verify(a.near, a.certificate)
