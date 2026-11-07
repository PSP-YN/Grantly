# Grantly

**Discover funding. Navigate your future.**

Grantly is a student-first education funding workspace. It helps learners discover scholarship opportunities, understand how selected profile details compare with published criteria, prepare application documents, track progress and plan the cost of education in one place.

Grantly is being developed as a long-term product concept—not only as a competition demo. The current release is a privacy-conscious browser prototype designed to validate the discovery-to-application journey before introducing accounts, cloud services or sensitive document handling.

## The problem

Students often need to visit multiple government, institutional and private scholarship portals, interpret eligibility rules independently, keep track of documents and deadlines, and estimate how funding affects their education costs. The information and workflow are fragmented.

Grantly brings the preparation process into a single workspace while keeping official application and final eligibility decisions with scholarship providers.

## Product experience

### Scholarship discovery
- Search by scholarship name, provider and keyword.
- Filter by programme category and sort by profile-check status, amount or name.
- Review source-linked scheme descriptions, application requirements and verification notes.

### Explainable profile screening
- Compare selected profile fields against explicitly encoded scholarship rules.
- Display criteria as met, not met or unknown.
- Keep missing data distinct from a mismatch.
- Route programmes with incomplete or unverified rule coverage to official review instead of generating a fabricated eligibility score.

### Application workspace
- Save opportunities and add them to a personal tracker.
- Track Interested → Preparing → Submitted → Under review → Awarded.
- Check off required documents for each tracked opportunity.
- Keep the workspace on the current device and export a JSON backup.

### Funding planner
- Enter annual tuition, living, transport, books and other education costs.
- Add existing aid and a scholarship scenario.
- Calculate total costs, support, estimated uncovered amount and coverage percentage.
- Export a funding-plan JSON snapshot.
- Keep the model transparent: this is a planning estimate, not an award prediction, institutional COA determination or financial advice.

## Product principles

1. **Evidence over false certainty.** Every automated screening result is limited to rules that are explicitly represented.
2. **Student agency.** Grantly supports preparation; it does not submit applications or impersonate applicants.
3. **Privacy by default.** The current app requires no account and sends no profile data to a server.
4. **Progressive trust.** Incomplete or outdated scholarship information must be disclosed, not hidden behind a confidence score.
5. **Accessible, responsive workflows.** Keyboard support, semantic controls, readable layouts and reduced-motion preferences are product requirements.
6. **No fabricated integrations.** A capability is described as implemented only when it is present in the code and verified.

## Technology

- React 19 + TypeScript
- Vite
- Lucide React
- Vitest
- React Testing Library
- jsdom
- axe-core accessibility regression checks
- Oxlint

## Run locally

Requirements: Node.js 22.12+ and npm 10.9+.

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=moderate
```

Or run the full quality gate:

```bash
npm run check
```

## Architecture at a glance

```
src/
  App.tsx                 Workspace shell, discovery and application tracker
  FundingPlanner.tsx      Annual education-cost planning UI and calculations
  data.ts                 Source-linked scholarship catalogue and encoded rules
  matching.ts             Explainable eligibility rule evaluation
  styles.css              Responsive visual system and interaction styles
  App.test.tsx            Workspace interaction and accessibility tests
  FundingPlanner.test.ts  Funding calculation tests
  matching.test.ts        Eligibility engine unit tests
```

See [ARCHITECTURE.md](ARCHITECTURE.md) for design decisions and boundaries, [PRODUCT.md](PRODUCT.md) for product direction, and [ROADMAP.md](ROADMAP.md) for staged development.

## Data quality and scholarship sources

The catalogue is a curated, source-linked snapshot—not a live API. Scholarship terms, dates, institution lists and award amounts can change. Each record includes a source and review note; applicants must verify current conditions with the official provider.

See [DATA_SOURCES.md](DATA_SOURCES.md).

## Privacy and security

The current app is a frontend-only prototype:
- Profile, saved items, tracker and planner data are stored in browser localStorage.
- There is no authentication, backend, database, analytics or cloud synchronization.
- localStorage is not encrypted and is accessible to scripts running in the same origin.
- Do not enter Aadhaar numbers, bank details, credentials, certificates, identity documents or other sensitive data.
- No remote document vault or secure account is implemented.

Read [SECURITY.md](SECURITY.md) before using the prototype with personal information.

## Product status

**Current:** local browser workspace for scholarship discovery, transparent screening, application preparation and funding-gap estimates.

**Not currently implemented:** real-time scholarship ingestion, verified deadline alerts, official application submission, authenticated user accounts, cloud sync, secure file storage, financial institution integrations, AI-generated essays or live award predictions.

See [ROADMAP.md](ROADMAP.md) for the proposed path from prototype to a dependable service. Roadmap items are plans, not promises or existing features.

## License

MIT. See [LICENSE](LICENSE).
\n## Scholarship directory scope\n\nThe catalogue includes central government schemes, selected state-level entry points (including Karnataka SSP), technical education, disability support, research, overseas study and selected private-foundation awards. It is a **curated starting directory**, not a claim to list every scholarship available in India. The official [National Scholarship Portal](https://scholarships.gov.in/All-Scholarships) and [Karnataka SSP](https://ssp.postmatric.karnataka.gov.in/homepage.aspx) remain authoritative for active schemes, application windows and eligibility.\n\nEach record includes source attribution and a review note. Scheme rules and dates change. Records without fully reviewed criteria are labelled for official/manual review and do not generate a profile match.\n