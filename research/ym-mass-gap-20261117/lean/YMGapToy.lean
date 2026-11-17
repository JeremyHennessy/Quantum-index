import Mathlib

/-!
# Exact cutoff-gap countercontrols — NOT Yang–Mills

Hₙ = diag(0, 1, 2) and Kₙ = diag(0, 1/(n+1), 2).
Only the elementary real first-gap quantities are formalized.
In particular, this is NOT a formalization of lattice gauge theory,
reflection positivity, continuum reconstruction, or a physical mass gap.
-/

namespace YMGapToy

/-- Exact first gap of the constant three-level toy Hamiltonian. -/
def fixedGap (_n : ℕ) : ℝ := 1

/-- Exact first gap of the collapsing three-level toy Hamiltonian. -/
noncomputable def collapsingGap (n : ℕ) : ℝ := 1 / ((n : ℝ) + 1)

/-- Hₙ has the same positive lower bound at every cutoff. -/
theorem fixed_gap_has_uniform_lower_bound :
    ∃ δ : ℝ, 0 < δ ∧ ∀ n : ℕ, δ ≤ fixedGap n := by
  refine ⟨1, by norm_num, ?_⟩
  intro n
  simp [fixedGap]

/-- Every finite Kₙ has a strictly positive first excitation gap. -/
theorem collapsing_gap_positive (n : ℕ) : 0 < collapsingGap n := by
  unfold collapsingGap
  positivity

/-- Nevertheless no strictly positive real lower bound works for *all* Kₙ. -/
theorem collapsing_gap_has_no_uniform_positive_floor :
    ¬ ∃ δ : ℝ, 0 < δ ∧ ∀ n : ℕ, δ ≤ collapsingGap n := by
  rintro ⟨δ, hd, hb⟩
  obtain ⟨n, hn⟩ := exists_nat_gt (1 / δ)
  have hden : (0 : ℝ) < (n : ℝ) + 1 := by positivity
  have hhigh : (1 : ℝ) < ((n : ℝ) + 1) * δ := by
    apply (div_lt_iff₀ hd).mp
    linarith
  have hlow : δ * ((n : ℝ) + 1) ≤ 1 := by
    apply (le_div_iff₀ hden).mp
    simpa [collapsingGap] using hb n
  nlinarith

end YMGapToy
