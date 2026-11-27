# Exact finite-correlator control

Replay the examples and adversarial controls with `python3 -m unittest -v` from this directory, using only the Python standard library. The [bound and derivation](../2026-11-27-finite-correlator-soft-mode-witness.md) state the required positive-transfer, normalized-source and vacuum-subtraction assumptions.

`certify(q, r, k, moments)` returns exact rational bounds on the witness and an upper bound on the possible spectral mass at or beyond r. It reports a positive witness only when the whole propagated interval is positive. A negative or inconclusive result is not a proof of a gap, and the tool does not validate a proposed dataset's moment feasibility or certify reported input errors. No simulation, Wilson data, new dependency, or runtime integration is supplied.

Verified locally: five standard-library tests, including 75 two-atom controls across five depths, exact recovery of the 0.01% witness, and an error level intentionally large enough to make that witness inconclusive.
