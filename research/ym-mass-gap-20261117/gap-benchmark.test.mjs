import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FAMILIES, gapFraction, isGapBelow, collapsingCounterexample,
  approximateConnectedCorrelation, observedMinimum,
} from './gap-benchmark.mjs';

test('two explicitly declared toy families only', () => {
  assert.deepEqual(FAMILIES, ['uniform', 'collapsing']);
  assert.throws(() => gapFraction('yang-mills', 10), /unknown toy family/);
});

test('both finite Hamiltonians have a positive exact first gap', () => {
  for (const n of [1, 2, 3, 7, 32, 10000]) {
    assert.deepEqual(gapFraction('uniform', n), { numerator: 1, denominator: 1 });
    assert.deepEqual(gapFraction('collapsing', n), { numerator: 1, denominator: n });
  }
});

test('uniform family has exact floor one at all tested scales', () => {
  for (const n of [1, 2, 10, 1000]) {
    assert.equal(isGapBelow('uniform', n, { numerator: 1, denominator: 1 }), false);
    assert.equal(isGapBelow('uniform', n, { numerator: 2, denominator: 1 }), true);
  }
});

test('collapsing family defeats arbitrary positive rational proposed floors', () => {
  for (const bound of [
    { numerator: 1, denominator: 1 },
    { numerator: 1, denominator: 20 },
    { numerator: 3, denominator: 17 },
    { numerator: 1, denominator: 100000 },
  ]) {
    const witness = collapsingCounterexample(bound);
    assert.ok(witness.n >= 1);
    assert.equal(isGapBelow('collapsing', witness.n, bound), true);
  }
});

test('finite-sample positive minimum must not be mislabelled a uniform limit', () => {
  const finite = observedMinimum('collapsing', [1, 2, 4, 8, 16]);
  assert.equal(finite.value, 1 / 16);
  assert.ok(finite.value > 0);
  const beyond = collapsingCounterexample({ numerator: 1, denominator: 16 });
  assert.ok(beyond.n > 16);
  assert.equal(isGapBelow('collapsing', beyond.n, { numerator: 1, denominator: 16 }), true);
});

test('correlations show rate distinction but are NOT formal proof', () => {
  for (const n of [1, 4, 16, 100]) {
    const u = approximateConnectedCorrelation('uniform', n, 10, [0.75, 0.25]);
    assert.ok(u <= Math.exp(-10) + 1e-14);
    const c = approximateConnectedCorrelation('collapsing', n, 10, [1, 0]);
    assert.ok(Math.abs(c - Math.exp(-10 / n)) < 1e-13);
  }
});

test('reject invalid bounds, indices and times instead of pretending success', () => {
  for (const n of [0, -1, 1.5, NaN, Infinity, 1000000001]) {
    assert.throws(() => gapFraction('uniform', n), RangeError);
  }
  for (const b of [{ numerator: 0, denominator: 1 }, { numerator: 1, denominator: 0 }, { numerator: 1.1, denominator: 2 }]) {
    assert.throws(() => collapsingCounterexample(b), RangeError);
  }
  assert.throws(() => approximateConnectedCorrelation('uniform', 1, -1), RangeError);
  assert.throws(() => approximateConnectedCorrelation('uniform', 1, 2, [1, -1]), RangeError);
  assert.throws(() => observedMinimum('collapsing', []), RangeError);
});
