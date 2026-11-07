# Grantly — Product Roadmap

This roadmap describes proposed product evolution. Items below are not implemented unless marked Current.

## Stage 0 — Reliable browser prototype (Current)
- [x] Source-linked scholarship discovery.
- [x] Explainable rule checks for a limited subset of programme criteria.
- [x] Saved list and application-stage tracker.
- [x] Per-application document checklist.
- [x] Browser-local workspace export.
- [x] Funding gap calculator based on user-entered values.
- [x] Responsive UI and automated unit/component/accessibility checks.
- [ ] Validate usability with students across multiple devices and assistive technologies.
- [ ] Expand source verification coverage with a transparent data-review process.

## Stage 1 — Trust and data quality
- Source schema with provider, URL, reviewed-at date, academic year, rule version and review status.
- Data change log and stale-record warnings.
- Better rule-coverage indicators for requirements not represented.
- Search improvements; deadline sorting only when dates are verified.
- Manual source-review process and regression tests for rule changes.
- User research with students, counselors and institution staff.

**Exit criteria:** no scholarship is labelled fully screened without documented rule coverage; stale dates are visible; source and rules are reviewable.

## Stage 2 — Personal workspace quality
- Storage abstraction and robust migration/versioning.
- Import/export validation and recovery.
- User notes, milestones and reminder preferences.
- Calendar export only for verified dates.
- Better empty, error and storage-quota states.
- Manual accessibility testing and usability study.

## Stage 3 — Multi-device product discovery (requires privacy/security design)
- Evaluate account-based sync only after consent, threat model and retention policy.
- Design server-side authorization and data minimization.
- Secure document handling only if a documented use case justifies the risk.
- Define deletion, export, incident response, audit and backup processes.
- Privacy/legal review for Indian student data and potential minors.

**Gate:** no remote profiles or document upload until security/privacy requirements, legal review and operational ownership are established.

## Stage 4 — Institution and ecosystem integrations (research, not committed)
- Institution cost and aid data with source provenance.
- Counselor/mentor sharing with student consent.
- Provider status updates only through official, permitted interfaces.
- Alerts only from verified dates and supported delivery infrastructure.

## Non-goals
- Guaranteeing scholarship eligibility or awards.
- Scraping restricted portals or bypassing application requirements.
- Submitting applications without student review.
- Selling student profile data.
- Publishing fabricated success rates or award probabilities.