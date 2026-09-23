(() => {
  const theories = window.QI_DATA?.theories || [];
  const formulas = window.QI_FORMULAS?.formulas || [];
  const formulasByTheory = new Map(theories.map(t => [t.id, []]));
  for (const f of formulas) {
    for (const id of f.theoryIds || []) {
      if (formulasByTheory.has(id)) formulasByTheory.get(id).push(f.id);
    }
  }

  const conceptualKinds = new Set([
    "interpretation","thought experiment","classification framework","foundational framework"
  ]);

  function classify(theory, formulaIds) {
    if (formulaIds.length) return "formula-bearing";
    if (theory.kind === "interpretation" || theory.status === "interpretation") return "interpretation";
    if (theory.kind === "theorem" || /theorem/i.test(theory.status || "")) return "theorem";
    if (theory.kind === "thought experiment") return "thought experiment";
    if (conceptualKinds.has(theory.kind) || theory.category === "Foundations & interpretations") return "primarily conceptual";
    return "formula-bearing-gap";
  }

  function reason(theory, classification) {
    if (classification === "formula-bearing") return null;
    if (classification === "interpretation") return "No unique defining equation is asserted for this interpretive framework; formulas belong to the underlying quantum formalism it interprets.";
    if (classification === "theorem") return "The entry is indexed primarily as a theorem/no-go result. A compact theorem statement may be added separately when a source-linked canonical mathematical form is reviewed.";
    if (classification === "thought experiment") return "This entry is a conceptual thought experiment rather than an independent dynamical formalism.";
    if (classification === "primarily conceptual") return "The entry is currently treated as primarily conceptual/structural. Mathematical expressions may appear in its literature, but no single canonical sourced equation has been selected for the atlas.";
    return "Expected to have useful mathematical content, but no canonical sourced equation has yet been curated. This is a documented formula gap, not a claim that the theory lacks equations.";
  }

  function priority(theory, classification) {
    if (classification !== "formula-bearing-gap") return "not-applicable";
    if (["Quantum chemistry & electronic structure","Quantum many-body & condensed matter","Quantum field theory","Quantum gravity & spacetime","Quantum information & open systems","Formulations","Astroparticle physics & cosmology","Quantum optics & AMO","Nuclear quantum theory"].includes(theory.category)) return "high";
    return "medium";
  }

  const entries = theories.map(theory => {
    const formulaIds = formulasByTheory.get(theory.id) || [];
    const classification = classify(theory, formulaIds);
    return {
      theoryId: theory.id,
      classification,
      coverageStatus: formulaIds.length ? "covered" : (classification === "formula-bearing-gap" ? "documented-gap" : "not-applicable"),
      formulaIds,
      gapReason: reason(theory, classification),
      priority: priority(theory, classification),
      auditBasis: formulaIds.length ? "source-linked formula present" : "entity kind/category audit",
      reviewedAt: "2026-09-22"
    };
  });

  window.QI_FORMULA_AUDIT = {
    version: "v1",
    scope: "Formula-bearing audit of every shipped theory/framework. A documented gap is distinct from absence of mathematical content.",
    entries,
    classifications: ["formula-bearing","formula-bearing-gap","primarily conceptual","theorem","interpretation","thought experiment"]
  };
})();
