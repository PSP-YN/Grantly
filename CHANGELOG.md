# Changelog

## Unreleased — engineering hardening
- Memoized scholarship filtering and state/level visibility to reduce repeated rule checks.
- Fixed deadline sorting and calendar export to use local calendar dates instead of UTC boundaries.
- Added timezone regression coverage.
- Added Vercel CSP, HSTS, nosniff, frame protection, referrer, permissions and COOP headers.
- Added canonical metadata, sitemap.xml and robots.txt.
- Bumped the service-worker cache to refresh the shell after release.
- Aligned PWA manifest and icons with the navy / ivory / terracotta palette.
- Updated PM CARES education assistance amount/source from the MWCD FAQ.

## Unreleased — national catalogue expansion
- Added 13 state programme records from Haryana, Tamil Nadu, West Bengal, Jharkhand and Chhattisgarh (90 total curated entries).
- Added separate catalog composition module to isolate supplemental scholarship data from the original data file.
- Added filter categories for state schemes, private foundations and fellowships.
- Updated the palette to ink navy, warm ivory and terracotta; PWA icons and metadata aligned in the engineering hardening update.
- Documented a conflicting NSP CSSS renewal deadline snapshot instead of silently choosing one date.

## Previous India-wide student product expansion
- Added 9 central / UGC scholarship and fellowship records in the previous update (62 records at that point).
- Added searchable portal starting points for all 28 states and 8 union territories.
- Added 12 state-specific scholarship / education-aid records from official state portals (Karnataka, Maharashtra, West Bengal, Odisha, Telangana, Uttar Pradesh, Bihar, Gujarat and Kerala).
- Earlier iterations explored navy/ivory/gold and forest/parchment/gold; the current palette is navy/ivory/terracotta.
- Added PWA manifest and same-origin service-worker shell caching with offline navigation fallback.
- Added online/offline connectivity notices.
- Extracted workspace persistence and tracker actions into a custom hook.
- Added portal directory and workspace hook regression tests.
- Axe semantic checks are run with the color-contrast rule excluded in jsdom; palette token contrast is separately tested.

## Unreleased — Deadline integrity improvements
- Updated selected AY 2026–27 NSP deadline records from the official NSP listing.
- Fixed calendar export to exclude past deadlines and use an exclusive next-day DTEND for all-day events.
- Added regression tests for expired events and ICS event duration.

## Unreleased — Product workspace improvements
- Added an annual Funding Planner for education costs, existing aid and hypothetical scholarship scenarios.
- Added uncovered funding, coverage and surplus calculations with clear limitations.
- Added planner-local persistence and funding-plan JSON export.
- Added calculation unit tests and a workspace navigation regression test.
- Reframed project documentation around Grantly's product vision, architecture, privacy boundaries and staged roadmap.

## 1.0.0 — 2026-11-07
- Rebranded the frontend as Grantly.
- Replaced hardcoded fit percentages with transparent, typed eligibility rules.
- Added source review notes and manual-review states for schemes without sufficiently verified rules.
- Added document preparation checklist to the application tracker.
- Added local JSON workspace export.
- Expanded optional profile inputs to cover relevant academic and course conditions.
- Improved privacy disclosure, responsive form behavior and submission documentation.

## Unreleased — India-wide directory and engineering refactor
- Expanded the catalogue from the original initial records to include additional central, state, technical, disability, research, overseas and private scholarship programmes.
- Added explicit catalogue scope and links to NSP and Karnataka SSP.
- Added catalogue source/metadata integrity tests.
- Extracted workspace persistence and scholarship search/ranking into independently testable feature modules.
- Added deadline sorting.
- Changed the visual system to education-focused ink navy, ivory and achievement gold.

## Unreleased — Full workspace portability
- Added a complete JSON backup of saved scholarships, tracker state, profile, funding planner and statement draft.
- Added a file-based restore flow with 2 MB size limit and data normalization for known scheme IDs, tracker stages, checklist items, budget values and essay fields.
- Added unit and UI regression tests for import validation and complete restore.

## Unreleased — NSP AY 2026–27 coverage expansion
- Expanded the directory to 41 records and separated AICTE Pragati/Saksham degree and diploma entries.
- Added PM-USP SSS J&K/Ladakh, PMSS Railways, PM YASASVI school scheme, NMMSS, worker-family pre/post-matric assistance, pre-matric disability, ICAR NTS-PG/JRF/SRF, ISI stipend, renewable energy fellowship and Free Coaching scheme records.
- Recorded open/closed application windows as NSP snapshots and added explicit state-specific / school-level cautions.
