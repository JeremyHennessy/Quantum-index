"""Certify the exact rational ranks of C and [C | f_D]."""
import argparse
from pathlib import Path

from sympy.polys.matrices import DomainMatrix

from defect_block import verify


def detached_ranks(raw):
    matrix, source, _ = verify(raw)
    assert matrix.shape == (618, 270) and source.shape == (618, 1)
    c = matrix[270:, :]
    f_d = source[270:, :]
    ranks = tuple(
        len(DomainMatrix.from_Matrix(x).rref(method="FF")[1])
        for x in (c, c.row_join(f_d))
    )
    assert c.shape == (348, 270) and ranks == (180, 181)
    return ranks


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    print("exact detached ranks C and [C | f_D]:", *detached_ranks(parser.parse_args().source.read_bytes()))
