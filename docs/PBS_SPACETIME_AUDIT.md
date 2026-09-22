# PBS Space Time transcript audit

_Last reviewed: 2026-09-22_

## Purpose

PBS Space Time is used as a **discovery and navigation source**, not as scientific provenance for Quantum Index.

Scientific claims in the theory and formula catalogs continue to require original papers, authoritative monographs, peer-reviewed reviews, or other appropriate scientific sources. A PBS transcript mention can show that a concept was discussed and can help discover terminology, aliases, adjacent theories, or missing branches; it does not establish the theory's scientific status.

## Sources reviewed

### Official PBS episode pages

PBS episode pages expose closed-caption/transcript text for many episodes. The first curated pass records official transcript mentions for:

- *Does Dark Matter Break Physics?* — dark matter and modified-gravity alternatives
- *How Black Holes Spin Space Time* — rotating/Kerr black holes
- *Dissolving an Event Horizon* — cosmic censorship, naked singularities and Schwarzschild black holes
- *Is Dark Matter Made of Particles?* — particle dark matter / WIMP discussion
- *What If Dark Matter Is Just Black Holes?* — primordial-black-hole dark matter
- *What If Our Understanding of Gravity Is Wrong?* — MOND
- *Are Black Holes Actually Fuzzballs?* — fuzzballs and string-theory black-hole microstates
- *Are Cosmic Strings Cracks in the Universe?* — cosmic strings / topological defects
- *Where Is The Center of The Universe?* — FLRW and Lemaître–Tolman cosmologies
- *Space Does Not Expand Everywhere* — FLRW versus local Schwarzschild-like bound geometry
- *What If Dark Energy is a New Quantum Field?* — quintessence

The machine-readable curated records live in `pbs-spacetime.js`.

### Search PBS Space Time

The independent search index at:

- https://search.pbsspacetime.com/
- https://search.pbsspacetime.com/index
- https://search.pbsspacetime.com/about

indexes transcript phrases across the PBS Space Time YouTube archive and links search hits to episode timestamps. Its own index page describes the term list as a set of suggested searchable phrases rather than an exhaustive ontology.

Accordingly, Quantum Index treats this search engine as a **candidate-generation surface**, not as an exhaustive transcript corpus or authoritative scientific bibliography.

## Evidence classes

Every `QI_SPACETIME.mentions[]` record must carry:

- `episodeTitle`
- `date`
- `pbsUrl`
- `searchUrl`
- `theoryIds`
- `terms`
- `evidence`

Current accepted evidence:

- **official PBS transcript** — concept is visible in the PBS.org transcript/page text.

Future records may use:

- **search-index transcript hit** — term is visible through Search PBS Space Time but the corresponding official PBS transcript has not yet been independently checked.

The UI must label both as media/transcript evidence and keep them separate from the scientific source list.

## Current mapping posture

This is a growing crosswalk, not a claim that every theory mentioned across every episode has already been found. The research queue in `research/PBS_SPACETIME_CANDIDATES.md` records terms discovered from the transcript index and their current disposition.

## Acceptance controls

1. A PBS mention may not change a theory's `provenance` state.
2. Every mention must point to at least one existing theory ID.
3. URLs must be HTTPS.
4. Official-transcript claims require an official PBS episode URL.
5. Search-index-only terms remain candidates until independently classified.
6. A theory may be promoted because PBS exposed a missing term only after independent scientific sources are reviewed.
