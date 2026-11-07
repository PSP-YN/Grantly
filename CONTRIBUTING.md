# Contributing

1. Use Node.js 22+ and npm 10+.
2. Install dependencies with npm ci.
3. Keep the event implementation frontend-only; do not add a backend, database, serverless function or external API without confirming the event rules.
4. Do not add a scholarship amount, eligibility rule, deadline or institution claim without an authoritative source and a source-review date.
5. Keep personal information, certificates, identity numbers, secrets and tokens out of source control.
6. Keep eligibility matching deterministic and explainable. Unknown data must remain unknown, not be converted into a positive match.
7. Add or update tests for each workflow change.
8. Run npm run lint, npm run typecheck, npm test, npm run build and npm audit --audit-level=moderate before submitting.
9. Prefer small, focused pull requests with clear test evidence.
