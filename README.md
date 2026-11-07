# Grantly

**Discover funding. Navigate your future.**

Grantly is a student-first education funding workspace built to help Indian learners discover support, understand requirements, prepare applications, and plan costs. It is being developed as a long-term product—not only as a hackathon demo.

## What students can do

- Search and filter source-linked scholarships, fellowships, state schemes and selected private programmes.
- Review programme details, source links and review notes.
- Compare self-reported profile details with a limited set of explicit eligibility rules.
- Understand matched, unmatched and unknown checks without opaque scores.
- Save opportunities and track application stages.
- Prepare document checklists.
- Estimate tuition and living costs against existing aid and a hypothetical award.
- Draft personal statements with a structured outline and word counter.
- Export or restore a local workspace backup and export deadline calendar events when a deadline is explicitly dated.
- Find official scholarship portals for every Indian state and union territory.
- Install the PWA and use the cached app shell after an initial online visit.

## Product boundaries

The current release is a browser-first prototype. It does not have user accounts, cloud sync, real-time scholarship ingestion, verified live deadlines, secure document storage, official application submission or remote profile transmission. Scholarship providers—not Grantly—make final eligibility and award decisions.

**Catalogue scope:** 90 curated scholarship / fellowship / education-assistance records plus official starting links for all 28 states and 8 union territories. This is a growing source-aware directory, not a complete list of every award available in India. Private, institution, district and department-specific awards may not yet be indexed. Use the official provider links to discover current opportunities. The current catalogue includes additional state programmes from Haryana, Tamil Nadu, West Bengal, Jharkhand and Chhattisgarh, alongside existing Karnataka and other state listings.

## Design system

The interface uses an academic navy (`#17324D`), warm ivory (`#F6F1E6`) and terracotta (`#B05230`) palette. The colours form a restrained three-colour identity with neutral supporting text and borders. Layouts are responsive and designed for keyboard and touch use.

## Engineering

- React + TypeScript + Vite.
- Feature modules for scholarship search, eligibility, workspace persistence, profile, funding planner, statement drafting and student guides.
- Rule evaluation is deterministic and tested; incomplete rules remain unknown / manual review.
- Local persistence is normalized and defensive; exports are user-triggered.
- Lint, typecheck, tests, production build and dependency audit run in CI.
- Scholarship filtering is memoized and date handling uses the student's local calendar day.
- Vercel security headers, canonical metadata, robots.txt and sitemap.xml are configured.
- Accessible controls, keyboard support, focus management and reduced-motion support are regression-tested.

### Development

Requirements: Node.js 22.12+ and npm 10.9+.

```bash
npm ci
npm run dev
npm run check
```


## Frontend Arena quality targets (FQE v3.1)

The following are **engineering targets**, not claimed evaluator results. The Frontend Arena FQE audit assigns a maximum of 40 points across six static repository and quality modules. Grantly is being engineered against these target allocations:

| FQE module | Target | Evidence required before claiming achievement |
|---|---:|---|
| Performance Engine | **7/7** | Production build and chunk-size review, route-level code splitting, no avoidable eager feature downloads, measured Core Web Vitals on representative devices |
| Accessibility Engine | **7/7** | WCAG 2.2 AA-oriented semantic and keyboard checks, focus management, contrast verification, automated axe regression tests and manual assistive-technology review |
| Responsive Design Engine | **7/7** | Verified layouts at narrow phones, common phone widths, tablets and desktop; no horizontal overflow or clipped controls |
| Code Quality Engine | **7/7** | Lint, strict TypeScript, focused modules, deterministic domain logic, regression tests and clean production build |
| Architecture Engine | **6/6** | Explicit module boundaries, validated local-storage/import boundaries, documented data flow, security and deployment constraints |
| Documentation Engine | **6/6** | Accurate setup, product boundaries, architecture, data sources, security, contribution and release documentation |
| **Total target** | **40/40** | All six modules independently verified; final score remains controlled by Frontend Arena |

**Score reporting policy:** these numbers are target scores only. They are not current FQE results, a guarantee, or a representation that Frontend Arena has awarded Grantly 40/40. No achieved module score will be published here unless it is captured from a new evaluation of the exact deployed commit. Automated CI passing is evidence for engineering quality, not proof of a particular FQE score.

### Current verification status

- Repository CI: see the [latest workflow run](https://github.com/PSP-YN/Grantly/actions/workflows/ci.yml); a release candidate is not considered verified until lint, typecheck, tests, production build and dependency audit all pass on the same commit.
- Deployment: production must be checked against the exact Git commit before release status is updated.
- Browser quality: automated tests do not replace manual responsive, keyboard, screen-reader, contrast and performance checks on real browsers and devices.

## Data quality

Each record includes a source URL, source label, last review date and a note describing verification boundaries. A review date does not mean a deadline is live. A programme may be closed, recurring, institution-limited or awaiting current criteria review. Confirm every application detail with the official scheme notice.

See:
- [Product overview](PRODUCT.md)
- [Architecture](ARCHITECTURE.md)
- [Roadmap](ROADMAP.md)
- [Complete indexed scholarship catalogue — all 90 records](SCHOLARSHIP_CATALOGUE.md)
- [Data source register](DATA_SOURCES.md)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Submission demo notes](SUBMISSION.md)

## License

MIT. See [LICENSE](LICENSE).
