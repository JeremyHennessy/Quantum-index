// Dedicated literature-sweep provenance must be distinct from source attachment.
export function isDocumentedLiteratureSweep(theory, registeredSourceIds) {
  const sweep=theory?.literatureSweep;
  if (!sweep || typeof sweep.reviewedAt!=="string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(sweep.reviewedAt) ||
      !Number.isFinite(Date.parse(sweep.reviewedAt)) ||
      new Date(sweep.reviewedAt).toISOString().slice(0,10)!==sweep.reviewedAt ||
      typeof sweep.scope!=="string" || !sweep.scope.trim() ||
      !Array.isArray(sweep.sourceIds) || !sweep.sourceIds.length ||
      !(registeredSourceIds instanceof Set)) return false;
  return sweep.sourceIds.every(id=>typeof id==="string"&&registeredSourceIds.has(id));
}
