# Contributing to Grantly

Grantly is a student-facing education funding workspace. Contributions should improve user trust, clarity, accessibility, data quality or reliability—not inflate the feature list.

## Development setup

1. Use Node.js 22.12+ and npm 10.9+.
2. Install dependencies with `npm ci`.
3. Start the app with `npm run dev`.

## Product and data principles

- Do not add a scholarship amount, eligibility rule, deadline or institution claim without an authoritative source and a source-review date.
- Keep eligibility matching deterministic and explainable. Unknown data must remain unknown.
- Do not describe prototype capabilities as secure, live, AI-powered or production-integrated unless they actually are.
- Do not introduce remote collection of student information without a documented privacy/security design and review.
- Never commit personal information, certificates, identity numbers, secrets or tokens.
- Keep the current frontend-only boundary unless a future approved product phase explicitly changes it.

## Engineering workflow

1. Make focused changes with clear intent.
2. Add or update tests for each new behavior and calculation.
3. Check responsive behavior and keyboard accessibility.
4. Update architecture/product docs when module responsibilities or boundaries change.
5. Run the quality gate before proposing a change:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=moderate
```

6. Report exactly what was tested. Do not claim formal WCAG certification or end-to-end production readiness based solely on automated checks.

## Review checklist

- Is the behavior understandable to a student?
- Are claims supported by sources?
- Does the feature fail safely when data is missing?
- Is personal data minimized?
- Are keyboard and mobile workflows usable?
- Are tests and docs updated?
