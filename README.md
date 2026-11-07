# FundNavi

**Discover funding. Navigate your future.**

FundNavi is a frontend-only scholarship discovery and application workspace built for The Outpost — Frontend Mission (GRANTLY challenge). It helps students explore source-linked Indian scholarship programmes, review profile-based eligibility checks, prepare documents, shortlist opportunities and track application progress.

## Product capabilities

- Scholarship discovery with keyword search, category filters and sorting.
- Transparent, deterministic eligibility checks show met, not-met and unknown criteria. Missing information is never treated as eligible; schemes without fully encoded rules are labelled for official review.
- Official-source handoff. Students apply on provider sites; FundNavi does not collect application credentials.
- Application tracker: Interested → Preparing → Submitted → Under review → Awarded.
- Per-opportunity document preparation checklist, persisted with the application record.
- Optional student profile used only for local rule evaluation.
- Workspace export as JSON.
- No account, server, database, analytics, external API or remote profile transmission.
- Semantic landmarks, labelled controls, visible keyboard focus, Escape-dismissable dialogs, focus trapping/restoration and reduced-motion support.
- Responsive desktop, tablet and narrow mobile layouts.

## Stack

- React 19 + TypeScript
- Vite
- Lucide React
- Vitest + React Testing Library + jsdom
- axe-core semantic accessibility regression tests

## Run locally

Requirements: Node.js 22.12+ and npm 10.9+.

    npm ci
    npm run dev

## Quality gates

    npm run lint
    npm run typecheck
    npm test
    npm run build
    npm audit --audit-level=moderate

## Browser QA

The production build was opened in a browser and exercised at 320, 360, 390, 430, 768, 1024 and 1440 CSS pixels with no horizontal overflow. The student profile, rule-based match updates, document checklist persistence, data export action, dialog focus trap and Escape dismissal were exercised. Visible text contrast was measured in the browser on discovery, profile and detail views. Automated axe checks cover semantic WCAG A/AA rules; jsdom contrast rules are excluded because jsdom has no browser layout/canvas. This is not a claim of formal WCAG certification.

## Data integrity

Catalogue records link to official sources and include a source-review date. Scheme criteria and dates can change. A profile check is a screening aid, not a legal or administrative eligibility decision. Where the complete current criteria are not encoded and verified, FundNavi deliberately requires official review rather than displaying a fabricated match percentage.

The 2026–27 National Scholarship Portal pages and current programme notices should be checked before applying. The project does not scrape or claim real-time availability. Never rely on a sample or cached record as the sole basis for an application.

## Privacy and security model

FundNavi is intentionally frontend-only to align with the event's frontend mission. The profile, saved list, application stages and document checklist remain in browser localStorage. Local storage is not encrypted, authenticated or suitable for identity documents, bank details, certificates or other sensitive records. Do not enter such information. Use the export action only on a trusted device.

No secrets or API keys are required. No backend security or production account security is claimed.

## Architecture

    src/
      App.tsx          Application shell, views, local workflows and accessible dialogs
      data.ts          Typed source-linked scholarship catalogue and evidence notes
      matching.ts      Deterministic eligibility rule engine
      styles.css       Responsive design system and motion preferences
      App.test.tsx     Component and workflow regression tests
      matching.test.ts Eligibility engine unit tests
      main.tsx         React entry point

## Official sources reviewed

- National Scholarship Portal: https://scholarships.gov.in/Students and https://scholarships.gov.in/All-Scholarships
- Ministry of Education — PM-USP CSSS FAQ (AY 2025–26): https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/FAQs_PM_USP_CSSS_scheme_AY_2025_26.pdf
- INSPIRE-SHE official FAQ: https://www.online-inspire.gov.in/Account/FAQ
- UGC — Ishan Uday scheme: https://www.ugc.gov.in/Scholarships/stu_Scholarship5
- Department of Social Justice & Empowerment — Top Class Education for SC Students: https://socialjustice.gov.in/schemes/27
- AICTE: https://www.aicte-india.org/

## Submission status

Source and tests are prepared for review. A live deployment is intentionally not included because the owner explicitly requested no deployment yet. Add the verified public deployment URL to the event submission only after deployment is separately authorized and smoke-tested.

## License

MIT. See LICENSE.
