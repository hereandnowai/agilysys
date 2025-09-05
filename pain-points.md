## Pain points — concise summary

Short list of participant pain points and recommended actions (Angular v14→v16+, AI-assisted migration, PR automation, performance).

1. Angular upgrade issues
	- Build failures, breaking API changes, incompatible third‑party libs, duplicate TS types, CSS/component regressions.
	- Cause: skipped incremental upgrades, mismatched TypeScript or CSS/framework versions, missing tests.

2. Duplication & dependency conflicts
	- Symptoms: multiple library versions, duplicate type declarations, larger bundles, runtime errors.

3. UI regressions
	- Symptoms: menus/layout break, CSS specificity and accessibility regressions.

4. Using GitHub Copilot for migration
	- Capable of generating codemods, refactors and test snippets; not a one-click migration tool.
	- Workflow: incremental plan → codemods (jscodeshift/ts-morph) → feature branch → tests & visual checks → small PRs.

5. PR automation (MCP/GitHub)
	- Desired: sandbox runs that apply codemods, run tests, and open audit-able PRs with CI results and reviewer tags.
	- Use GitHub Actions + an MCP agent to orchestrate codemods, tests, snapshots, and PR creation.

6. Performance & safety
	- Run bundle-size reports, performance budgets in CI, and staging APM checks before merging migration PRs.

Immediate checklist
	- Document upgrade path (14→15→16) with rollback steps.
	- Add/maintain unit, e2e, and visual tests before migrating.
	- Generate codemods via Copilot; run them in sandbox branches.
	- Automate sandbox runs + PR creation with Actions/MCP; gate with CI and perf checks.

Tools (quick)
	- jscodeshift / ts-morph, GitHub Copilot/Chat, GitHub Actions, Lighthouse/WebPageTest, Percy/Chromatic.

---

If you want, I can now generate an example codemod, scaffold a GitHub Action workflow, or create a short PR template for migration steps.

