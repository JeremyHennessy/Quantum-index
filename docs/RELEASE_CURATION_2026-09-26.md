# AMO and quantum-matter formula curation — 2026-09-26

Reference commit: `b6be5be41599a8e32e9cbda055983c17b5acb4a2` (the preceding reliability release).
This is a reference state, not a claim of user approval of every scientific record.

## Scope and evidence

Twenty previously uncovered frameworks now have a scoped mathematical representative. Sixteen equations were added, and the existing Jaynes–Cummings equation was linked to cavity and circuit QED with explicitly reviewed assumptions. No pre-existing LaTeX expression, theory date, theory summary, layout, stylesheet, or hosting configuration was changed.

Each touched formula records assumptions, symbols, units, regime, relationship, review date, and equation/section locators linking to the inspected paper. Review means a source and convention check in this curation pass; it is not independent expert certification or exhaustive mathematical coverage. Some original PDFs required visual inspection because their extracted equation text was incomplete.

| Framework(s) | Representative and inspected location |
|---|---|
| Bose–Hubbard; optical-lattice simulation | Jaksch et al. (1998), Eq. (2); single-band effective Hamiltonian |
| Heisenberg spin model | Stringari (1994), Eq. (1), isotropic limit |
| Transverse-field Ising | Pfeuty (1970), Eq. (2.1), p. 80; spin operators are Pauli matrices divided by two |
| Kitaev honeycomb | Kitaev (2006), Eq. (4); unperturbed bond-dependent Hamiltonian |
| AKLT | Affleck et al. (1987), Eq. (1), p. 800; exact projector normalization |
| Topological superconductor | Kitaev (2001), Eq. (4); representative open spinless pairing chain |
| Lieb–Liniger | Lieb and Liniger (1963), Eq. (2.1); physical constants restored |
| Tonks–Girardeau | Girardeau and Wright (2000), Eqs. (3)–(4); Bose–Fermi mapping |
| Generalized Gibbs ensemble | Rigol et al. (2007), Eqs. (1)–(2); constrained density operator |
| Spin–boson | Leggett et al. (1987), Eq. (1.4), p. 5; coordinate-coupled oscillator bath |
| Dicke; Tavis–Cummings | Kirton et al. (2019), Eqs. (2), (54); collective-spin and coupling conventions explicit |
| Cavity QED; circuit QED | Blais et al. (2004), Eq. (1); existing Jaynes–Cummings formula, without bath terms |
| Floquet | Shirley (1965), Sec. II, Eqs. (2)–(5); periodic-mode representation |
| Rydberg blockade | Jaksch et al. (2000), Eq. (2); coherent fixed-position two-atom part |
| Optomechanics | Aspelmeyer et al. (2014), Sec. III.B, Eqs. (18)–(20); displacement expansion |
| EIT; STIRAP | Fleischhauer et al. (2005), Eqs. (2), (5), and Vitanov et al. (2017), Eqs. (5)–(6); shared dark state with distinct operating conditions |

Ten existing connections now have relationship-specific source notes. Lieb–Liniger → Tonks–Girardeau is labeled `generalizes`, with the infinite-repulsion limit stated. Honeycomb → toric code is explicitly a low-energy relation in a strongly anisotropic regime. These are formal model relations, not inferred historical influence. Other connections remain editorial; the present review does not substantiate them by association. No connections were added or removed.

The batch manifest is `CURATION_AMO_MATTER_2026-09-26.json`. Source locators are stored on each formula and displayed in the existing citation links. PDFs are not redistributed with the repository.

## Result

- Formula gaps: 208 → 188; entries with formulas: 211 → 231.
- Formulas: 345 → 361; explicit metadata: 79 → 96; baseline metadata: 266 → 265.
- Source-backed connections: 57 → 67; editorial connections: 531 → 521.
- Bibliography: 450 → 455. Catalog remains 464 entries, 588 connections and 38 trees.

## Verification and rollback

`npm test`: 12 passing tests, including source-location rendering, batch coverage and AKLT projector normalization. `npm run validate` checks structural integrity and generated report consistency. These tests do not establish the validity of physical theories; jsdom does not verify actual MathJax rendering or browser layout.

Merge only after CI passes on the exact head. Verify equations, citations and navigation on the hosted release after Pages completes. Revert the release merge commit to roll back; there is no data migration, dependency update, or hosting change.
