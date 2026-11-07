# Grantly — Product Overview

## Vision
Make education funding easier to discover, understand and prepare for—without making students depend on opaque match scores or unverified claims.

## Primary users
- Students preparing to enter undergraduate or postgraduate study.
- Students already enrolled who need to manage renewals and application stages.
- Families or mentors helping a student understand education costs.
- Institution advisors who may need a clear, student-controlled preparation workflow (future research target).

## Jobs to be done
1. Find scholarships relevant to my course, academic stage and circumstances.
2. Understand which published criteria I appear to satisfy and what information is missing.
3. Save opportunities without losing track of them.
4. Prepare documents and next steps for each application.
5. Estimate the remaining annual education funding gap.
6. Keep official applications and sensitive data under my control.

## Core product loop
Profile context → discover programmes → inspect criteria/source → shortlist → prepare documents → track progress → estimate funding gap → revisit.

## Product principles
- Explain each match decision.
- Clearly distinguish data completeness from eligibility.
- Keep official providers authoritative.
- Make student-owned data portable.
- Prefer privacy and clear limitations over fake personalization.
- Make the app useful on low-end phones and unreliable connections.

## MVP scope (implemented)
- Curated Indian scholarship catalogue with source notes, including central, state, UGC, AICTE, research and selected private programmes.
- State programme records for Haryana Har-Chhatravratti programmes, Tamil Nadu Pudhumai Penn and Tamil Pudhalvan, West Bengal OASIS, Jharkhand e-Kalyan and Chhattisgarh Post-Matric.
- Search, category filters and sorting.
- Profile-based deterministic criteria screening for selected schemes.
- Saved scholarship list.
- Local application tracker and per-scholarship document checklist.
- Local JSON export.
- Funding planner with cost/support/gap arithmetic.
- Responsive UI and automated tests.

## Coverage and trust boundary

The catalogue is a curated discovery index, not a complete national registry. The National Scholarship Portal, state portals, university notices and private providers publish changing programme lists. Some records are scheme-specific; others are entry points to an official state programme or portal. Records without a complete reviewed rule set are manual-review only and never receive a positive automated eligibility decision.

## Explicitly out of scope for current prototype
- Account registration and identity verification.
- Remote storage or cross-device synchronization.
- Official scholarship portal login/application submission.
- Real-time deadlines or notification delivery.
- AI eligibility decisions, AI essay generation or recommendation scores.
- Uploading and storing certificates or identity documents.
- Automatic verification of student or institution claims.

## Product risks

| Risk | Current mitigation | Future control |
|---|---|---|
| Scheme data becomes stale | Source links and review notes; manual verification prompt | Data steward, revision history, change detection, expiry policy |
| Students mistake rule checks for approval | No eligibility guarantee; unknown states; official review status | User testing, clearer explanatory copy, audit of rule coverage |
| Local data is exposed on shared device | No sensitive document storage; privacy notice | Authenticated sessions, secure storage, device logout, retention controls |
| Scholarship aid cannot be stacked | Planner labels user-entered scenario as hypothetical | Scheme-specific restrictions and financial-aid office verification |
| Accessibility issues remain | Semantic controls, keyboard tests, axe checks | Manual screen-reader and assistive-technology testing |

## Proposed success measures (not yet measured)
- Time to identify a shortlist.
- Percentage of users who can explain why a profile criterion is marked unknown.
- Tracker activation and document checklist completion rates.
- Successful funding-plan export.
- User-reported trust and clarity.
- Mobile task completion and accessibility defects.

Do not report targets or outcomes as achieved until real users have been tested and results recorded.