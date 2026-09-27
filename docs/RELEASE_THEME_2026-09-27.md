# Brighter professional theme — 2026-09-27

Baseline main: `b396ce16c4316bdd505327e8fbda3328cad3e560`.

## Goal

Make Quantum Index feel brighter, friendlier and more professional without changing its data model, navigation, routes, research workspace, scientific claims or information architecture.

## Visual changes

- light scientific-editorial canvas instead of navy-on-navy surfaces;
- white cards with softer borders and restrained shadows;
- deep navy typography for scientific seriousness and readability;
- teal primary accent with restrained blue/violet support colors;
- brighter hero and statistic cards;
- clearer active tabs and focus states;
- lighter search/filter controls;
- clearer established/speculative/interpretation status treatments;
- improved graph and thought-tree label contrast on light backgrounds;
- lighter formula/equation panels while preserving MathJax behavior;
- cleaner source, theory and metadata chips;
- brighter comparison, learning and research-workspace surfaces;
- mobile-specific spacing and light-background adjustments;
- reduced-motion fallback retained.

## Copy changes

The welcome copy now positions the application as a source-aware fundamental-physics atlas rather than only a historical theory map. No scientific content is changed.

## Verification

The Playwright suite adds a successful-run visual check that attaches desktop and mobile screenshots to the browser report and asserts the new root palette, visible formula cards, narrow-screen containment and absence of page errors.

No dependencies, data files, repository settings or deployment configuration are changed.
