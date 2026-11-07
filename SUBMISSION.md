# The Outpost — Frontend Mission submission notes

## Project

**Grantly — Discover funding. Navigate your future.**

Grantly is a student-first scholarship discovery and application workspace. It brings source-linked opportunities, explainable eligibility screening, document preparation and application tracking into one responsive frontend.

## What to demonstrate

1. Open Discover and explain the difference between a profile check, missing information and a manual official review.
2. Search for a scholarship and filter by category.
3. Open PM-USP CSSS and show its criteria checks.
4. Edit the profile to change income band, academic standing and study mode; show how the assessment changes.
5. Add the opportunity to the tracker and mark a document as prepared.
6. Change the application stage and show persistence.
7. Export the local workspace JSON.
8. Open the official source and explain that final applications happen on the provider portal.

## Differentiation

- No invented fit percentages: each check is traceable to a stated profile field and rule.
- Unknown criteria stay unknown; unencoded scheme conditions are disclosed for manual review.
- Application preparation is part of discovery rather than a disconnected bookmark list.
- Sensitive data is not required; optional profile values stay in local browser storage.
- No backend, API or database dependency.

## Judging alignment

- UI/UX: consistent design system, clear information hierarchy, responsive layouts.
- Functionality: search, filters, sorting, profile, save, tracker, checklist and export.
- Creativity: transparent eligibility explanations and preparation workflow.
- Problem alignment: one connected discovery-to-application journey.
- Code quality: typed catalogue, isolated matching engine, defensive persistence and tests.
- Accessibility: keyboard operation, focus management, labels, live result count and reduced motion.

## QA evidence

- GitHub Actions runs lint, TypeScript typecheck, automated tests, production build and dependency audit. Refer to the latest workflow result for exact status.
- Tests cover eligibility rules, catalogue metadata and unique IDs, profile/workspace persistence, scholarship filtering, funding calculations, statement word count, deadline calendar logic and palette anchor contrast.
- axe-core semantic checks run in jsdom; its color-contrast rule is excluded because jsdom cannot reliably compute rendered contrast. The palette-token contrast test is not a full UI contrast audit.
- Previous browser smoke checks covered responsive and keyboard flows; repeat them against the next live deployment after the current Vercel quota restriction clears.
- The latest live deployment has not yet been verified against the merged 90-record catalogue and new response headers. Do not claim the current live site contains changes until a fresh deployment is ready and tested.
- npm audit status is recorded in the latest CI run; avoid hardcoding a zero-vulnerability claim without rechecking.

## Final submission checklist

- [ ] Public GitHub repository is accessible.
- [ ] npm ci succeeds from a clean checkout.
- [ ] Lint, typecheck, tests, production build and dependency audit pass.
- [ ] Browser smoke test passes at mobile and desktop widths.
- [ ] No placeholder actions or console errors remain.
- [ ] Deployment is created only after owner authorization.
- [ ] Live deployment is opened and smoke-tested.
- [ ] GitHub URL and live URL are entered in the official submission form.
- [ ] Demo walkthrough is rehearsed and remains within the event's rules.

A deployment URL is intentionally absent until deployment is authorized.


## Product direction note

The hackathon submission is one milestone in Grantly's product development. The application and repository are now documented as an ongoing student education-funding workspace. Competition-specific descriptions and scoring materials are not the product's main README or roadmap.
