# Grantly — Frontend Arena submission notes

## Product

**GRANTLY — Rethinking the Scholarship Experience**

A modern, human-centred digital workspace for discovering, understanding, tracking and preparing educational funding applications.

Repository: https://github.com/PSP-YN/Grantly  
Current production URL (verify deployment commit before each submission): https://grantly-scholarship.vercel.app

## Demonstration walkthrough

1. Open Discover and explain how Grantly combines scholarship search with an application-preparation workspace.
2. Search for a programme and use category / region filters.
3. Open a scholarship detail view and inspect its provider, source link, verification note and encoded criteria.
4. Explain the distinction between a profile check that matches, one that does not match, and a missing or unencoded requirement that remains unknown / manual review.
5. Edit the student profile and show how explicit rule outcomes change.
6. On Discover, use the journey-progress panel to follow the next action from profile completion through shortlist, application tracking and document checklist progress.
7. Save an opportunity, add it to the application tracker, update its stage and mark a document checklist item.
8. Open the funding planner. Enter sample annual INR costs and support; explain the estimated gap, coverage and surplus.
9. Open the statement workspace. Demonstrate the four-part outline, word counter and local draft export.
10. Open the state / UT portal directory and show how the student reaches the official provider portal.
11. Explain that final eligibility and applications remain with the scholarship provider.

## What is implemented

- Curated source-linked directory of 90 scholarship / fellowship / education-assistance records.
- Official starting links for all 28 Indian states and 8 union territories.
- Deterministic eligibility checks for a subset of encoded programme criteria.
- Saved opportunities, application stages and document checklist.
- Actionable four-step student journey progress derived from live local workspace state.
- Browser-local profile, planner and statement draft.
- Funding-gap arithmetic using user-entered annual INR values.
- Validated workspace export/import and dated calendar export.
- Responsive React + TypeScript application with lazy-loaded secondary workspaces.
- CI checks for lint, TypeScript, tests, production build and dependency audit.

## Explicit product boundaries

- The catalogue is not exhaustive and is not a live scholarship feed.
- A source review date does not establish that a scholarship is currently open.
- The eligibility tool is not an award decision or legal eligibility determination.
- Funding calculations are estimates based on student-entered figures.
- The statement workspace does not generate essays or score AI authenticity.
- There is no account authentication, backend database, cloud sync, secure document vault or official application submission.
- Browser localStorage is not encrypted or an appropriate store for identity documents, bank details or credentials.

## Quality evidence

The latest successful CI workflow is linked from the repository README. The automated pipeline runs:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm audit --audit-level=moderate`

Automated checks are necessary but do not establish formal WCAG conformance, production reliability or a particular Frontend Arena score. Manually verify keyboard navigation, dialog focus, contrast, screen-reader behavior and real-device layouts against the exact deployment being submitted.

## Score reporting

The README records the requested six-module FQE allocation as a **40/40 engineering target**. It is not an achieved score. Do not state that Grantly received 40/40 FQE or 100/100 FAIE unless the evaluator reports those scores for the exact submitted version.

## Final submission checklist

- [ ] Public GitHub repository opens without authentication.
- [ ] Latest `main` commit has a successful CI run.
- [ ] The live deployment is built from the exact intended `main` commit.
- [ ] Production URL opens and core workflows are smoke-tested.
- [ ] No browser console errors or broken primary actions remain.
- [ ] Desktop, tablet and narrow-phone layouts are reviewed.
- [ ] Keyboard-only navigation and dialog focus are checked.
- [ ] The official submission form contains the correct repository and live URLs.
- [ ] The final evaluation attempt is used only after the release has been reviewed.

