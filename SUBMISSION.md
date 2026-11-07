# The Outpost — Frontend Mission submission notes

## Project

**FundNavi — Discover funding. Navigate your future.**

FundNavi is a student-first scholarship discovery and application workspace. It brings source-linked opportunities, explainable eligibility screening, document preparation and application tracking into one responsive frontend.

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

- 14 automated tests across two test files.
- Zero lint warnings / errors.
- TypeScript build passes.
- Production build succeeds; JavaScript bundle is approximately 270 KB uncompressed / 83 KB gzip.
- npm audit reports zero vulnerabilities at the moderate threshold.
- Browser-tested at 320–1440 CSS pixels with no horizontal overflow.
- Keyboard focus trap, Escape dismissal, profile-to-match flow and document persistence verified.
- Browser contrast measurement found no visible text below the normal-text 4.5:1 threshold on discovery, profile and details views after the final color adjustments.

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
