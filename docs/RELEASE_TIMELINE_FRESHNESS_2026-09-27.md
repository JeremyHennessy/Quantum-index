# Timeline freshness and DevelopmentEvent layer — 2026-09-27

Baseline main: `43e7deccc86c0ac1ce1f32a0eae98ac82f090fdc`.

## Purpose

The production timeline previously ended at 2023 because it displayed only theory/framework origin years. That was a data-model limitation, not a rendering cutoff.

This release introduces a first-class `DevelopmentEvent` layer so later scientific developments can carry their real dates without rewriting the historical origin of an older theory.

## Seed review set

Nine reviewed events cover 2024–2026:

- DESI Year 1 BAO cosmology;
- ATLAS top-quark entanglement;
- noninvertible symmetries acting through quantum operations;
- below-threshold surface-code quantum error correction;
- DESI DR2 BAO cosmology;
- generalized many-body quantum scarring;
- classical-gravity/QFT-matter entanglement result;
- DESI DR2 Lyman-alpha full-shape cosmology;
- LZ extended nuclear-recoil search.

The LZ record explicitly retains the reported 2.6-sigma global significance and is not described as a dark-matter discovery. DESI records preserve the distinction between measurements consistent with Lambda-CDM and model/data-combination-dependent preference for evolving dark energy.

## Timeline behavior

The Timeline now supports:

- origins + developments;
- theory/framework origins only;
- reviewed developments only;
- DevelopmentEvent type filtering.

Existing global search/category/type/status/era/provenance filters continue to apply. DevelopmentEvents are filtered through their related theory records and their own text.

Entity origin years remain unchanged. Current newest entity origin: **2023**. Current newest reviewed development: **2026**.

## Freshness audit

Generated `docs/FRESHNESS.md` and `docs/freshness.json` report:

- entity origins by year;
- developments by year/type;
- newest origin/development year;
- categories without a reviewed recent event;
- stale entity review dates;
- unresolved recent identity candidates.

The 2024 Nature wavefunction-matching method is retained as a separate **candidate-new-entity** for a dedicated census PR rather than being mixed into this infrastructure release.

## Verification

DevelopmentEvent IDs, dates, sources, locators, related theories/formulas and review dates are now validated in CI. Browser tests verify URL-persistent timeline filters, origin/development separation and 320-pixel mobile containment.

No existing theory origin year, formula, relationship, workspace data, dependency, hosting configuration or Pages setting is changed.
