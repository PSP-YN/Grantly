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

The interface uses an academic navy (`#17324D`), warm ivory (`#FBF8F1`) and terracotta (`#B85C38`) palette. The colours form a restrained three-colour identity with neutral supporting text and borders. Layouts are responsive and designed for keyboard and touch use.

## Engineering

- React + TypeScript + Vite.
- Feature modules for scholarship search, eligibility, workspace persistence, profile, funding planner, statement drafting and student guides.
- Rule evaluation is deterministic and tested; incomplete rules remain unknown / manual review.
- Local persistence is normalized and defensive; exports are user-triggered.
- Lint, typecheck, tests, production build and dependency audit run in CI.
- Accessible controls, keyboard support, focus management and reduced-motion support are regression-tested.

### Development

Requirements: Node.js 22.12+ and npm 10.9+.

```bash
npm ci
npm run dev
npm run check
```

## Data quality

Each record includes a source URL, source label, last review date and a note describing verification boundaries. A review date does not mean a deadline is live. A programme may be closed, recurring, institution-limited or awaiting current criteria review. Confirm every application detail with the official scheme notice.

See:
- [Product overview](PRODUCT.md)
- [Architecture](ARCHITECTURE.md)
- [Roadmap](ROADMAP.md)
- [Complete indexed scholarship catalogue — all 82 records](SCHOLARSHIP_CATALOGUE.md)
- [Data source register](DATA_SOURCES.md)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)
- [Submission demo notes](SUBMISSION.md)

## License

MIT. See [LICENSE](LICENSE).
